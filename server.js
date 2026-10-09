// AI 情报站 — Node.js 后端（零依赖，使用内置 fetch）
// - 静态托管 docs/（GitHub Pages 静态版，与线上一致）
// - /api/data 返回六大版块（热数据读取 docs/data.json，由 scripts/update-data.mjs 定时刷新）
// - /api/messages GET/POST 留言（内存 + messages.json 持久化）
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as seed from './data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 8081;
const HOST = process.env.HOST || '0.0.0.0';
const PUB = path.join(__dirname, 'docs');
const MSG_FILE = path.join(__dirname, 'messages.json');

// ---------- 缓存层 ----------
// 数据由 scripts/update-data.mjs（GitHub Actions 每日 05:00/17:00）定时刷新到 docs/data.json
// 服务端用 fs.readFile + JSON.parse 定期重载（避免动态 import 导致的内存泄漏），保证本地版与最新数据同步
const DATA_FILE = path.join(__dirname, 'docs', 'data.json');
let cached = { at: 0, seed: null };
function freshSeed() {
  const now = Date.now();
  if (!cached.seed || now - cached.at > 10 * 60 * 1000) {
    try {
      const stat = fs.statSync(DATA_FILE);
      const mtime = stat.mtimeMs;
      if (cached.seed && cached.seed.__mtime === mtime) {
        cached.at = now;
        return cached.seed;
      }
      const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      cached = { at: now, seed: { __mtime: mtime, ...data } };
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

// ---------- 点赞安全辅助 ----------
// 点赞去重：同一 IP 对同一帖子只记一次（内存 Map，服务重启后清空）
const likeSeen = new Map();
function clientIp(req) {
  const xf = req.headers['x-forwarded-for'];
  if (xf) return String(xf).split(',')[0].trim();
  return req.socket.remoteAddress || 'unknown';
}
// 带大小上限的 JSON 请求体读取（超过 limit 直接 413，防止刷接口塞爆内存）
function readJsonBody(req, res, limit, cb) {
  const chunks = [];
  let size = 0, overflow = false, done = false;
  const fail = (code, msg) => {
    if (done) return;
    done = true;
    try { send(res, code, { error: msg }); } catch (e) {}
  };
  const finish = (fn) => { if (done) return; done = true; fn(); };
  req.on('data', (c) => {
    if (overflow) return;
    size += c.length;
    if (size > limit) { overflow = true; req.pause(); fail(413, `请求体过大（上限 ${limit} 字节）`); return; }
    chunks.push(c);
  });
  req.on('end', () => {
    if (done) return;
    try {
      const obj = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
      finish(() => cb(obj));
    } catch (e) { fail(400, 'bad json'); }
  });
  req.on('error', () => fail(400, 'bad request'));
}
// 定期清理已不存在帖子的点赞记录，防止 Map 无限膨胀
function pruneLikeSeen() {
  if (likeSeen.size < 5000) return;
  const ids = new Set(posts.map(x => String(x.id)));
  for (const k of likeSeen.keys()) {
    const pid = k.slice(k.lastIndexOf('|') + 1);
    if (!ids.has(pid)) likeSeen.delete(k);
  }
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
          const rid = String(replyTo || '').trim();
          const m = {
            id: crypto.randomUUID(), board: bd, name: n || '匿名', text: t, ts: Date.now(),
            replyTo: (rid && posts.some(x => String(x.id) === rid)) ? rid : null,
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
    // 点赞 / 取消点赞（按 IP+帖子去重，防止刷赞与负数）
    if (p.startsWith('/api/messages/') && p.endsWith('/like') && req.method === 'POST') {
      const id = p.split('/')[3];
      const post = posts.find(x => String(x.id) === String(id));
      if (!post) return send(res, 404, { error: '帖子不存在' });
      const key = clientIp(req) + '|' + id;
      readJsonBody(req, res, 1024, (body) => {
        const liked = !!(body && body.liked === true);
        const already = likeSeen.has(key);
        if (liked) {
          // 同一 IP 重复点赞：忽略，保持一次计数
          if (!already) { likeSeen.set(key, true); post.likes = Math.max(0, (post.likes || 0) + 1); savePosts(); }
        } else {
          // 未点赞过却取消点赞：忽略，防止负数
          if (already) { likeSeen.delete(key); post.likes = Math.max(0, (post.likes || 0) - 1); savePosts(); }
        }
        pruneLikeSeen();
        return send(res, 200, { id: post.id, likes: post.likes, liked: likeSeen.has(key) });
      });
      return;
    }
    // 收藏 / 取消收藏
    if (p.startsWith('/api/messages/') && p.endsWith('/favorite') && req.method === 'POST') {
      const id = p.split('/')[3];
      const post = posts.find(x => String(x.id) === String(id));
      if (!post) return send(res, 404, { error: '帖子不存在' });
      readJsonBody(req, res, 1024, (body) => {
        const favorited = !!(body && body.favorited);
        post.favorites = Math.max(0, (post.favorites || 0) + (favorited ? 1 : -1));
        savePosts();
        return send(res, 200, { id: post.id, favorites: post.favorites });
      });
      return;
    }
    return serveStatic(res, p);
  } catch (e) {
    return send(res, 500, { error: e.message });
  }
});

server.listen(PORT, HOST, () => console.log(`大瑞的AI小窝 running → http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`));
