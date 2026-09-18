#!/usr/bin/env node
// AI 情报站 — 数据更新脚本（GitHub Actions / 本地通用，零依赖，Node >= 18）
// 作用：
//   1. 抓 GitHub Trending（含总星数）→ 翻译成中文
//   2. 抓 OpenRouter 最新模型 → 生成中文描述
//   3. 抓中文科技媒体 RSS（机器之心/量子位/IT之家）→ AI 新闻（原生中文）
//   4. 刷新 Agent 框架 / Skills 两个固定榜单的星数
//   5. 写入 docs/data.json（静态站数据源）+ data.js（本地完整版数据源）
// 翻译：MyMemory 免费接口（无需密钥）。失败自动降级：保留原文，不中断流程。
// 兜底：任一数据源失败时保留旧数据，保证站点永远有内容。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DATA_JS = path.join(ROOT, 'data.js');
const DATA_JSON = path.join(ROOT, 'docs', 'data.json');

const UA = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Accept': 'application/json, text/html, text/xml;q=0.9, */*;q=0.8' };
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
const GH_HEADERS = { ...UA, ...(GH_TOKEN ? { Authorization: `Bearer ${GH_TOKEN}` } : {}) };

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const todayCN = () => new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);

async function fetchWithRetry(url, opts = {}, tries = 3) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { ...opts, signal: AbortSignal.timeout(30000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r;
    } catch (e) { lastErr = e; await sleep(1500 * (i + 1)); }
  }
  throw lastErr;
}

// ---------- 翻译（MyMemory 免费接口，失败返回原文）----------
const transCache = new Map();
async function translate(text, retries = 2) {
  if (!text) return '';
  if (transCache.has(text)) return transCache.get(text);
  // 已经基本是中文就跳过
  const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  if (cjk > text.length * 0.15) return text;
  for (let i = 0; i < retries; i++) {
    try {
      const r = await fetchWithRetry(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 450))}&langpair=en|zh-CN`,
        { headers: UA }, 2
      );
      const j = await r.json();
      const t = j && j.responseData && j.responseData.translatedText;
      if (t && typeof t === 'string' && !/MYMEMORY WARNING|INVALID/i.test(t)) {
        const out = t.trim();
        transCache.set(text, out);
        await sleep(600); // 免费接口限速：礼貌性间隔
        return out;
      }
      throw new Error('translate empty');
    } catch { if (i === retries - 1) { transCache.set(text, text); return text; } await sleep(1000); }
  }
  return text;
}

// ---------- 1. GitHub Trending（含总星数）----------
function parseTrending(html) {
  const arts = html.split(/<article class="Box-row">/).slice(1);
  const out = [];
  for (const a of arts) {
    const body = a.split('</article>')[0];
    const h = body.match(/<h2[^>]*>[\s\S]*?href="\/([^"]+?)"/);
    if (!h) continue;
    const repo = h[1].replace(/^\/+/, '');
    const d = body.match(/<p class="col-9[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    let desc = d ? d[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
    desc = desc.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    const lang = body.match(/itemprop="programmingLanguage">([^<]+)</);
    const today = body.match(/([\d,]+)\s+stars?\s+today/);
    out.push({
      repo,
      lang: lang ? lang[1].trim() : '—',
      today: today ? Number(today[1].replace(/,/g, '')) : 0,
      stars: null,
      desc: desc || '暂无项目简介。'
    });
  }
  return out.slice(0, 10);
}

async function fetchTrending() {
  const r = await fetchWithRetry('https://github.com/trending?since=daily', { headers: GH_HEADERS });
  const list = parseTrending(await r.text());
  if (!list.length) throw new Error('trending parse empty');
  // 逐个补总星数（认证后 5000 次/小时，未认证 60 次/小时，10 个仓库都在限额内）
  let fetched = 0;
  for (const it of list) {
    try {
      const rr = await fetchWithRetry(`https://api.github.com/repos/${it.repo}`, { headers: GH_HEADERS }, 2);
      const j = await rr.json();
      if (typeof j.stargazers_count === 'number') { it.stars = j.stargazers_count; fetched++; }
    } catch { /* 单个失败不影响整体 */ }
    await sleep(350);
  }
  console.log(`[trending] ${list.length} 个项目，成功补星数 ${fetched} 个`);
  // 汉化描述
  for (const it of list) it.desc = await translate(it.desc);
  return list;
}

// ---------- 2. OpenRouter 模型 ----------
async function fetchModels() {
  const r = await fetchWithRetry('https://openrouter.ai/api/v1/models', { headers: UA });
  const j = await r.json();
  const list = (j.data || [])
    .filter(m => m && m.id && !m.id.startsWith('~'))
    .sort((a, b) => (b.created || 0) - (a.created || 0))
    .slice(0, 10);
  if (!list.length) throw new Error('models empty');
  const out = [];
  for (const m of list) {
    const id = m.id;
    const vendor = (m.name || id).split(':')[0].trim() || id.split('/')[0];
    const date = m.created ? new Date(m.created * 1000 + 8 * 3600e3).toISOString().slice(0, 10) : '';
    const ctx = m.context_length ? `，上下文 ${Math.round(m.context_length / 1000)}k` : '';
    // 只取描述首句，避免整段营销文案
    const rawDesc = String(m.description || 'OpenRouter 新上架模型。').split(/[.。!！?？\n]/)[0];
    const desc = await translate(rawDesc.slice(0, 160));
    out.push({
      vendor,
      name: (m.name || id).split(':').slice(1).join(':').trim() || id.split('/').pop(),
      date,
      desc: `${desc}${ctx}。`,
      url: 'https://openrouter.ai/' + id
    });
  }
  return out;
}

// ---------- 3. AI 新闻（中文 RSS，原生中文无需翻译）----------
function decodeXML(s) {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&');
}
function parseRSS(xml, sourceName, limit) {
  const items = xml.split(/<item[\s>]/).slice(1);
  const out = [];
  for (const it of items) {
    if (out.length >= limit) break;
    const title = (it.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1];
    const link = (it.match(/<link[^>]*>([\s\S]*?)<\/link>/) || [])[1];
    const descRaw = (it.match(/<description[^>]*>([\s\S]*?)<\/description>/) || [])[1];
    const dateStr = (it.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/) || [])[1];
    if (!title || !link) continue;
    let desc = decodeXML(String(descRaw || '')).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (desc.length > 110) desc = desc.slice(0, 110) + '…';
    const dt = dateStr ? new Date(dateStr) : new Date();
    const date = isNaN(dt) ? todayCN() : new Date(dt.getTime() + 8 * 3600e3).toISOString().slice(0, 10);
    out.push({
      date,
      title: decodeXML(title).trim(),
      desc: desc || '点击查看详情。',
      source: sourceName,
      url: decodeXML(link).trim()
    });
  }
  return out;
}

async function fetchNews() {
  const feeds = [
    { name: '量子位', url: 'https://www.qbitai.com/feed', limit: 5 },
    { name: '36氪', url: 'https://36kr.com/feed', limit: 5 },
    { name: '阮一峰周刊', url: 'https://feeds.feedburner.com/ruanyifeng', limit: 2 },
    // IT之家主源，靠 AI 关键词过滤
    { name: 'IT之家', url: 'https://www.ithome.com/rss/', limit: 8 },
  ];
  const all = [];
  for (const f of feeds) {
    try {
      const r = await fetchWithRetry(f.url, { headers: UA }, 2);
      const items = parseRSS(await r.text(), f.name, f.limit);
      all.push(...items);
      console.log(`[news] ${f.name}: ${items.length} 条`);
    } catch (e) { console.error(`[news] ${f.name} 失败: ${e.message}`); }
  }
  // 简单 AI 相关性过滤：AI 媒体全收；其他源需标题命中 AI 关键词
  const AI_WORDS = /AI|人工智能|大模型|LLM|GPT|Claude|Gemini|大语言|智能体|Agent|芯片|英伟达|NVIDIA|OpenAI|DeepSeek|月之暗面|Kimi|智谱|通义|豆包|文心/i;
  const isAIMedia = (x) => ['量子位', '阮一峰周刊'].includes(x.source);
  const seen = new Set();
  const out = all
    .filter(x => isAIMedia(x) || AI_WORDS.test(x.title))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter(x => { const k = x.title.slice(0, 30); if (seen.has(k)) return false; seen.add(k); return true; })
    .slice(0, 10);
  if (out.length < 4) throw new Error(`新闻源全部失败（仅 ${out.length} 条）`);
  return out;
}

// ---------- 4. Agent 框架 / Skills 榜单（固定仓库，刷新星数与描述）----------
const AGENT_REPOS = [
  'anomalyco/opencode', 'anthropics/claude-code', 'Significant-Gravitas/AutoGPT',
  'openai/codex', 'google-gemini/gemini-cli', 'FoundationAgents/MetaGPT',
  'microsoft/autogen', 'crewAIInc/crewAI', 'HKUDS/nanobot', 'openai/openai-agents-python'
];
const SKILL_REPOS = [
  'obra/superpowers', 'mattpocock/skills', 'affaan-m/ECC', 'anthropics/skills',
  'Shubhamsaboo/awesome-llm-apps', 'addyosmani/agent-skills', 'mvanhorn/last30days-skill',
  'tt-a1i/archify', 'coreyhaines31/marketingskills', 'blader/humanizer'
];

async function refreshRepoList(repos, fallback) {
  const out = [];
  for (const repo of repos) {
    try {
      const r = await fetchWithRetry(`https://api.github.com/repos/${repo}`, { headers: GH_HEADERS }, 2);
      const j = await r.json();
      const old = fallback.find(x => x.repo === repo);
      let desc = j.description || (old ? old.desc : '');
      desc = await translate(String(desc || '暂无项目简介。').slice(0, 250));
      out.push({ repo, stars: j.stargazers_count, lang: j.language || '—', desc });
    } catch (e) { console.error(`[repos] ${repo} 失败: ${e.message}`); }
    await sleep(350);
  }
  return out;
}

// ---------- 5. 读取旧数据 + 写出新数据 ----------
function readDataJS() {
  const src = fs.readFileSync(DATA_JS, 'utf8');
  const grab = (name) => {
    const m = src.match(new RegExp(`export const ${name} = ([\\s\\S]*?\\n\\]);`));
    if (!m) return [];
    try { return (0, eval)(`(${m[1]})`); } catch { return []; }
  };
  return {
    meta: grab('meta'), boards: grab('boards'), seedPosts: grab('seedPosts'),
    news: grab('news'), models: grab('models'), trending: grab('trending'),
    agentFrameworks: grab('agentFrameworks'), skills: grab('skills')
  };
}

function writeDataJS(d) {
  const j = (x) => JSON.stringify(x, null, 2);
  const head = `// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 ${todayCN()}）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

`;
  fs.writeFileSync(DATA_JS, head +
    `export const meta = ${j(d.meta)};\n\n` +
    `export const boards = ${j(d.boards)};\n\n` +
    `export const seedPosts = ${j(d.seedPosts)};\n\n` +
    `export const news = ${j(d.news)};\n\n` +
    `export const models = ${j(d.models)};\n\n` +
    `export const trending = ${j(d.trending)};\n\n` +
    `export const agentFrameworks = ${j(d.agentFrameworks)};\n\n` +
    `export const skills = ${j(d.skills)};\n`);
}

function writeDataJSON(d) {
  const out = {
    meta: { ...d.meta, generatedAt: todayCN() },
    news: d.news, models: d.models, trending: d.trending,
    agentFrameworks: d.agentFrameworks, skills: d.skills,
    boards: d.boards, live: false
  };
  fs.mkdirSync(path.dirname(DATA_JSON), { recursive: true });
  fs.writeFileSync(DATA_JSON, JSON.stringify(out, null, 2));
}

// ---------- 6. 历史归档（方案 A：git 仓库即数据库）----------
// 每次更新把当日完整快照存入 docs/archive/YYYY-MM-DD.json，并维护日期索引
const ARCHIVE_DIR = path.join(ROOT, 'docs', 'archive');
function writeArchive(d) {
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  const date = todayCN();
  const snapshot = {
    meta: { ...d.meta, generatedAt: date },
    news: d.news, models: d.models, trending: d.trending,
    agentFrameworks: d.agentFrameworks, skills: d.skills,
    boards: d.boards
  };
  // 当天快照（同一天多次更新只保留最后一次）
  fs.writeFileSync(path.join(ARCHIVE_DIR, `${date}.json`), JSON.stringify(snapshot, null, 2));
  // 日期索引：合并已有归档日期，倒序排列
  const indexFile = path.join(ARCHIVE_DIR, 'index.json');
  let dates = [];
  try { dates = JSON.parse(fs.readFileSync(indexFile, 'utf8')); } catch {}
  if (!dates.includes(date)) dates.push(date);
  dates.sort().reverse();
  fs.writeFileSync(indexFile, JSON.stringify(dates, null, 2));
  console.log(`📦 历史归档：${date}（累计 ${dates.length} 天）`);
}

// ---------- 主流程 ----------
async function main() {
  console.log(`=== 数据更新开始 ${new Date().toISOString()} ===`);
  const old = readDataJS();
  const result = { ...old };
  const report = [];

  // trending
  try {
    result.trending = await fetchTrending();
    report.push(`trending: ${result.trending.length} 条`);
  } catch (e) { console.error('[FAIL] trending:', e.message); report.push('trending: 保留旧数据'); }

  // models
  try {
    result.models = await fetchModels();
    report.push(`models: ${result.models.length} 条`);
  } catch (e) { console.error('[FAIL] models:', e.message); report.push('models: 保留旧数据'); }

  // news
  try {
    result.news = await fetchNews();
    report.push(`news: ${result.news.length} 条`);
  } catch (e) { console.error('[FAIL] news:', e.message); report.push('news: 保留旧数据'); }

  // agent frameworks / skills（失败保留旧数据）
  const af = await refreshRepoList(AGENT_REPOS, old.agentFrameworks);
  if (af.length >= 6) { result.agentFrameworks = af; report.push(`agentFrameworks: ${af.length} 个已刷新`); }
  else report.push(`agentFrameworks: 保留旧数据（仅成功 ${af.length}）`);
  const sk = await refreshRepoList(SKILL_REPOS, old.skills);
  if (sk.length >= 6) { result.skills = sk; report.push(`skills: ${sk.length} 个已刷新`); }
  else report.push(`skills: 保留旧数据（仅成功 ${sk.length}）`);

  // meta 更新
  result.meta = {
    ...old.meta,
    generatedAt: todayCN(),
    note: '所有条目均附真实出处；描述与外文内容已自动汉化。星标数据来自 GitHub API，模型数据来自 OpenRouter 公开接口，新闻来自中文科技媒体 RSS。'
  };

  writeDataJS(result);
  writeDataJSON(result);
  writeArchive(result);
  console.log('\n=== 更新报告 ===');
  for (const r of report) console.log('  ' + r);
  console.log(`\n✅ 写入完成：data.js + docs/data.json（${todayCN()}）`);

  // 校验生成的 data.js 语法
  try {
    const check = await import(`file://${DATA_JS}?t=${Date.now()}`);
    if (!check.news || !check.trending) throw new Error('export 缺失');
    console.log('✅ data.js 语法校验通过');
  } catch (e) { console.error('❌ data.js 校验失败:', e.message); process.exit(1); }
}

main().catch(e => { console.error('❌ 更新失败:', e); process.exit(1); });
