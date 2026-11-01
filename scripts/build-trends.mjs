#!/usr/bin/env node
// AI 社区热议趋势 — 本地专用脚本（GitHub Actions 上没有 EigenFlux 数据，不要加进 update-data.yml）
// 作用：扫描本地 ~/.eigenflux 广播快照，统计近 7 天 AI/技术领域的
//   关键词 / 领域 频次与每日条数，写入 docs/data/trends.json。
// 口径：只输出聚合统计（词频、计数），不输出任何广播正文——广播归档属内部资料，不可外发。
// 用法：node scripts/build-trends.mjs [窗口天数=7] [广播数据目录]
//   目录不传则读本机 ~/.eigenflux；2号机传 rsync 镜像目录，如
//   node scripts/build-trends.mjs 7 ~/eigenflux-broadcast-mirror

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

// 中文路径下 URL pathname 会变成百分号编码，必须用 fileURLToPath 还原
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'docs', 'data', 'trends.json');
const BROADCAST_DIR = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(os.homedir(), '.eigenflux', 'servers', 'eigenflux', 'data', 'broadcasts');

const WINDOW_DAYS = parseInt(process.argv[2] || '7', 10);

// 领域过滤：只保留 AI / 软件工程相关条目（站点定位是 AI 情报，地缘政治财经类不收）
const AI_DOMAIN_RE = /ai|artificial|intelligen|software|tech|llm|agent|machine|deep|neural|data|program|coding|developer|open[-_ ]?source|cyber|algorithm|reliab|devops|cloud|comput|robot|model/i;
// 泛化停用词：出现再多也没有信息量
const STOPWORDS = new Set(['news', 'update', 'updates', 'ai', 'tech', 'technology', 'general', 'other', 'misc', 'information', 'report', 'analysis']);

const normKeyword = (kw) => String(kw || '').toLowerCase().replace(/[_/-]+/g, ' ').replace(/\s+/g, ' ').trim();

function listDateDirs() {
  if (!fs.existsSync(BROADCAST_DIR)) return [];
  return fs.readdirSync(BROADCAST_DIR)
    .filter(d => /^\d{8}$/.test(d))
    .sort()
    .slice(-WINDOW_DAYS);
}

function collectItems(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
    let d;
    try { d = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch { continue; }
    for (const it of (d.items || [])) out.push(it);
  }
  return out;
}

const dateDirs = listDateDirs();
if (!dateDirs.length) {
  console.error(`未找到广播数据：${BROADCAST_DIR}`);
  process.exit(1);
}

const kwCount = new Map();
const domainCount = new Map();
const days = [];
let totalItems = 0, aiItems = 0;

for (const d of dateDirs) {
  const items = collectItems(path.join(BROADCAST_DIR, d));
  const ai = items.filter(it => {
    const domains = it?.metadata?.domains || [];
    return domains.some(x => AI_DOMAIN_RE.test(x));
  });
  totalItems += items.length;
  aiItems += ai.length;
  days.push({ date: d, total: items.length, ai: ai.length });

  for (const it of ai) {
    for (const kw of (it?.metadata?.keywords || [])) {
      const k = normKeyword(kw);
      if (!k || k.length < 3 || STOPWORDS.has(k)) continue;
      kwCount.set(k, (kwCount.get(k) || 0) + 1);
    }
    for (const dom of (it?.metadata?.domains || [])) {
      const name = String(dom || '').trim();
      if (!name) continue;
      domainCount.set(name, (domainCount.get(name) || 0) + 1);
    }
  }
}

const topKeywords = [...kwCount.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 18)
  .map(([kw, count]) => ({ kw, count }));

const topDomains = [...domainCount.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .map(([name, count]) => ({ name, count }));

const result = {
  meta: {
    generatedAt: new Date().toISOString(),
    source: 'EigenFlux 广播网络 · 聚合统计',
    windowDays: WINDOW_DAYS,
    range: { start: dateDirs[0], end: dateDirs[dateDirs.length - 1] },
    totalItems,
    aiItems,
  },
  days,
  topKeywords,
  topDomains,
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n');
console.log(`✅ trends.json 已生成：窗口 ${dateDirs[0]}~${dateDirs[dateDirs.length - 1]}，广播 ${totalItems} 条（AI 相关 ${aiItems} 条），热词 ${topKeywords.length} 个`);
console.log('TOP 热词：' + topKeywords.slice(0, 8).map(x => `${x.kw}(${x.count})`).join(' · '));
