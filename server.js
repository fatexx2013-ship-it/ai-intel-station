// AI 情报站 — Node.js 后端（零依赖，使用内置 fetch）
// - 静态托管 public/
// - /api/data 返回六大版块（全部来自 data.js，中文内容，由 scripts/update-data.mjs 定时刷新）
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

// ---------- 缓存层 ----------
// 数据由 scripts/update-data.mjs（GitHub Actions 每日 05:00/17:00）定时刷新到 data.js
// 服务端定期重载 data.js，保证本地版与最新数据同步
const DATA_FILE = path.join(__dirname, 'data.js');
let cached = { at: 0, seed: null };
async function freshSeed() {
  const now = Date.now();
  if (!cached.seed || now - cached.at > 10 * 60 * 1000) {
    try {
      // 清除模块缓存后重新加载最新 data.js
      delete globalThis.__datajs_mtime;
      const stat = fs.statSync(DATA_FILE);
      const mtime = stat.mtimeMs;
      if (cached.seed && cached.seed.__mtime === mtime) {
        cached.at = now;
        return cached.seed;
      }
      const mod = await import(`file://${DATA_FILE}?t=${mtime}`);
      cached = { at: now, seed: { __mtime: mtime, ...mod } };
    } catch (e) {
      console.error('[data-reload]', e.message);
      if (!cached.seed) cached.seed = { ...seed, __mtime: 0 };
      cached.at = now;
    }
  }
  return cached.seed;
}

// ---------- 讨论区帖子存储（按子版块 + 回复）----------
let posts = [];
try { posts = JSON.parse(fs.readFileSync(MSG_FILE, 'utf8')); } catch { posts = []; }
if (!Array.isArray(posts) || posts.length === 0) { posts = seed.seedPosts.slice(); }
// 讨论区版块定义与置顶帖相对固定，直接用启动时加载的 seed；热数据走 freshSeed()
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
      const d = await freshSeed();
      return send(res, 200, {
        meta: d.meta, news: d.news,
        agentFrameworks: d.agentFrameworks, skills: d.skills,
        boards: d.boards,
        trending: d.trending, models: d.models,
        live: false
      });
    }
    if (p === '/api/boards') return send(res, 200, seed.boards);
    if (p === '/api/health') return send(res, 200, { ok: true, updated: seed.meta.generatedAt });
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
