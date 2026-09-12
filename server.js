// AI 情报站 — Node.js 后端（零依赖，使用内置 fetch）
// - 静态托管 public/
// - /api/data 返回六大版块；GitHub 热门与模型走实时抓取，失败回落种子数据
// - /api/messages GET/POST 留言（内存 + messages.json 持久化）
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as seed from './data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 8081;
const HOST = process.env.HOST || '0.0.0.0';
const PUB = path.join(__dirname, 'public');
const MSG_FILE = path.join(__dirname, 'messages.json');

const UA = { 'User-Agent': 'Mozilla/5.0 (ai-intel-station)', 'Accept': 'application/json, text/html;q=0.9' };

// ---------- 实时抓取：GitHub Trending ----------
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
      repo, lang: lang ? lang[1].trim() : '—',
      today: today ? Number(today[1].replace(/,/g, '')) : 0,
      desc
    });
  }
  return out.slice(0, 10);
}

async function fetchTrending() {
  const r = await fetch('https://github.com/trending?since=daily', { headers: UA });
  if (!r.ok) throw new Error('trending HTTP ' + r.status);
  return parseTrending(await r.text());
}

// ---------- 实时抓取：OpenRouter 模型 ----------
async function fetchModels() {
  const r = await fetch('https://openrouter.ai/api/v1/models', { headers: UA });
  if (!r.ok) throw new Error('openrouter HTTP ' + r.status);
  const j = await JSON.parse(await r.text());
  return (j.data || [])
    .filter(m => m && m.id && !m.id.startsWith('~'))
    .sort((a, b) => (b.created || 0) - (a.created || 0))
    .slice(0, 10)
    .map(m => {
      const id = m.id;
      const vendor = (m.name || id).split(':')[0].trim() || id.split('/')[0];
      const date = m.created ? new Date(m.created * 1000).toISOString().slice(0, 10) : '';
      const ctx = m.context_length ? `，上下文 ${Math.round(m.context_length / 1000)}k` : '';
      return {
        vendor,
        name: (m.name || id).split(':').slice(1).join(':').trim() || id.split('/').pop(),
        date,
        desc: `OpenRouter 上架模型${ctx}。`,
        url: 'https://openrouter.ai/' + id
      };
    });
}

// ---------- 缓存层 ----------
const cache = { trending: null, models: null, at: 0 };
const TTL = 10 * 60 * 1000;
async function liveData() {
  const now = Date.now();
  if (cache.trending && cache.models && now - cache.at < TTL) {
    return { trending: cache.trending, models: cache.models, live: true };
  }
  let tr = null, mo = null;
  try { tr = await fetchTrending(); } catch (e) { console.error('[trending]', e.message); }
  try { mo = await fetchModels(); } catch (e) { console.error('[models]', e.message); }
  if (tr) cache.trending = tr;
  if (mo) cache.models = mo;
  cache.at = now;
  return {
    trending: cache.trending || seed.trending,
    models: cache.models || seed.models,
    live: Boolean(tr && mo)
  };
}

// ---------- 讨论区帖子存储（按子版块 + 回复）----------
let posts = [];
try { posts = JSON.parse(fs.readFileSync(MSG_FILE, 'utf8')); } catch { posts = []; }
if (!Array.isArray(posts) || posts.length === 0) { posts = seed.seedPosts.slice(); }
// 确保所有帖子都有 likes/favorites 字段（兼容旧数据）
posts = posts.map(p => ({ likes: 0, favorites: 0, ...p }));
const BOARD_IDS = new Set(seed.boards.map(b => b.id));
function savePosts() {
  try { fs.writeFileSync(MSG_FILE, JSON.stringify(posts.slice(-500))); } catch (e) { console.error('[post-save]', e.message); }
}

// ---------- 工具 ----------
function send(res, code, body, type = 'application/json; charset=utf-8') {
  res.writeHead(code, { 'Content-Type': type, 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' });
  res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.png': 'image/png' };
function serveStatic(res, urlPath) {
  let p = urlPath === '/' ? '/index.html' : urlPath;
  p = path.normalize(p).replace(/^(\.\.[\/\\])+/, '');
  const file = path.join(PUB, p);
  if (!file.startsWith(PUB)) return send(res, 403, 'forbidden', 'text/plain');
  fs.readFile(file, (err, data) => {
    if (err) return send(res, 404, 'not found', 'text/plain');
    send(res, 200, data, MIME[path.extname(file).toLowerCase()] || 'application/octet-stream');
  });
}


// ---------- 服务器 ----------
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const p = u.pathname;
  try {
    if (p === '/api/health') return send(res, 200, { ok: true });
    if (p === '/api/data') {
      const live = await liveData();
      return send(res, 200, {
        meta: seed.meta, news: seed.news,
        agentFrameworks: seed.agentFrameworks, skills: seed.skills,
        boards: seed.boards,
        trending: live.trending, models: live.models,
        live: live.live
      });
    }
    if (p === '/api/boards') return send(res, 200, seed.boards);
    if (p === '/api/messages' && req.method === 'GET') {
      const b = u.searchParams.get('board');
      return send(res, 200, b ? posts.filter(x => x.board === b) : posts);
    }
    if (p === '/api/messages' && req.method === 'POST') {
      let body = '';
      req.on('data', c => { body += c; if (body.length > 20000) req.destroy(); });
      req.on('end', () => {
        try {
          const { board = 'free', name = '', text = '', replyTo = null } = JSON.parse(body || '{}');
          const bd = BOARD_IDS.has(board) ? board : 'free';
          const n = String(name).trim().slice(0, 40);
          const t = String(text).trim().slice(0, 500);
          if (!t) return send(res, 400, { error: '内容不能为空' });
          const rid = Number(replyTo);
          const m = {
            id: Date.now(), board: bd, name: n || '匿名', text: t, ts: Date.now(),
            replyTo: (rid && posts.some(x => x.id === rid)) ? rid : null,
            likes: 0, favorites: 0
          };
          posts.push(m);
          if (posts.length > 500) posts = posts.slice(-500);
          savePosts();
          return send(res, 200, m);
        } catch (e) { return send(res, 400, { error: 'bad json' }); }
      });
      return;
    }
    // 点赞 / 取消点赞
    if (p.startsWith('/api/messages/') && p.endsWith('/like') && req.method === 'POST') {
      const id = Number(p.split('/')[3]);
      const post = posts.find(x => x.id === id);
      if (!post) return send(res, 404, { error: '帖子不存在' });
      let body = '';
      req.on('data', c => { body += c; });
      req.on('end', () => {
        try {
          const { liked } = JSON.parse(body || '{}');
          post.likes = Math.max(0, (post.likes || 0) + (liked ? 1 : -1));
          savePosts();
          return send(res, 200, { id: post.id, likes: post.likes });
        } catch (e) { return send(res, 400, { error: 'bad json' }); }
      });
      return;
    }
    // 收藏 / 取消收藏
    if (p.startsWith('/api/messages/') && p.endsWith('/favorite') && req.method === 'POST') {
      const id = Number(p.split('/')[3]);
      const post = posts.find(x => x.id === id);
      if (!post) return send(res, 404, { error: '帖子不存在' });
      let body = '';
      req.on('data', c => { body += c; });
      req.on('end', () => {
        try {
          const { favorited } = JSON.parse(body || '{}');
          post.favorites = Math.max(0, (post.favorites || 0) + (favorited ? 1 : -1));
          savePosts();
          return send(res, 200, { id: post.id, favorites: post.favorites });
        } catch (e) { return send(res, 400, { error: 'bad json' }); }
      });
      return;
    }
    return serveStatic(res, p);
  } catch (e) {
    return send(res, 500, { error: e.message });
  }
});

server.listen(PORT, HOST, () => console.log(`大瑞的AI小窝 running → http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`));
