const $ = (s) => document.querySelector(s);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const gh = (repo) => 'https://github.com/' + repo;
const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k' : String(n || 0);
const LANG_COLOR = { Python: '#4B8BBE', TypeScript: '#3178c6', JavaScript: '#f1e05a', Rust: '#dea584', Go: '#00ADD8', Shell: '#89e051', 'C#': '#178600', C: '#555', Java: '#b07219', HTML: '#e34c26' };
const langDot = (l) => `<span class="dot" style="background:${LANG_COLOR[l] || '#6b7a99'}"></span>${esc(l)}`;

function newsCard(x) {
  return `<article class="card news-card">
    <h3><a class="news-title" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a></h3>
    <p>${esc(x.desc)}</p>
    <div class="src"><span class="tag">${esc(x.date)}</span><span class="src-out">出处：<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.source)}</a></span></div>
  </article>`;
}
function modelCard(x) {
  return `<a class="card" href="${esc(x.url)}" target="_blank" rel="noopener">
    <div><span class="tag v">${esc(x.vendor)}</span><span class="tag g">${esc(x.date)}</span></div>
    <h3>${esc(x.name)}</h3><p>${esc(x.desc)}</p>
  </a>`;
}
function repoCard(x, mode) {
  const meta = mode === 'stars'
    ? `<span class="stars">★ ${fmt(x.stars)}</span>${x.lang && x.lang !== '—' ? langDot(x.lang) : ''}`
    : `<span class="today">▲ ${fmt(x.today)} 今日</span>${x.lang && x.lang !== '—' ? langDot(x.lang) : ''}`;
  return `<a class="card" href="${esc(gh(x.repo))}" target="_blank" rel="noopener">
    <div class="repo-name">${esc(x.repo)}</div>
    <p>${esc(x.desc)}</p>
    <div class="repo-meta">${meta}</div>
  </a>`;
}

async function load() {
  try {
    const d = await (await fetch('/api/data')).json();
    $('#genAt').textContent = '数据生成 ' + d.meta.generatedAt;
    $('#newsList').innerHTML = d.news.map(newsCard).join('');
    $('#modelsList').innerHTML = d.models.map(modelCard).join('');
    $('#trendingList').innerHTML = d.trending.map(x => repoCard(x, 'today')).join('');
    $('#agentList').innerHTML = d.agentFrameworks.map(x => repoCard(x, 'stars')).join('');
    $('#skillsList').innerHTML = d.skills.map(x => repoCard(x, 'stars')).join('');
    const chip = $('#liveChip');
    if (d.live) { chip.textContent = 'GitHub / OpenRouter 实时数据'; chip.className = 'chip live-chip on'; }
    else { chip.textContent = '实时源暂不可达 · 展示缓存快照'; chip.className = 'chip live-chip off'; }
    if (d.boards && !state.board) { BOARDS = d.boards; switchBoard(BOARDS[0].id); }
  } catch (e) {
    $('#newsList').innerHTML = '<p class="err">数据加载失败：' + esc(e.message) + '</p>';
    $('#liveChip').textContent = '数据源连接异常'; $('#liveChip').className = 'chip live-chip off';
  }
}

// ---------- 讨论区（多子版块 + 回复 + 点赞收藏）----------
let BOARDS = [];
const state = { board: null, replyTo: null, posts: [] };
const LIKES_KEY = 'gb_likes';
const FAVS_KEY = 'gb_favs';

function getLocalSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); } catch { return new Set(); }
}
function setLocalSet(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch {}
}

function renderTabs() {
  $('#boardTabs').innerHTML = BOARDS.map(b =>
    `<button class="tab ${b.id === state.board ? 'active' : ''}" data-id="${b.id}">${b.icon} ${esc(b.name)}</button>`).join('');
  $('#boardTabs').querySelectorAll('.tab').forEach(t => t.onclick = () => switchBoard(t.dataset.id));
}
function switchBoard(id) {
  state.board = id; state.replyTo = null; updateReplyBar();
  const b = BOARDS.find(x => x.id === id) || {};
  $('#boardDesc').textContent = b.desc || '';
  renderTabs(); loadPosts();
}
function loadPosts() {
  return fetch('/api/messages?board=' + state.board)
    .then(r => r.json())
    .then(arr => { state.posts = arr; renderPosts(); })
    .catch(() => { $('#gbList').innerHTML = '<p class="gb-empty">帖子加载失败</p>'; });
}
function renderPosts() {
  const byId = Object.fromEntries(state.posts.map(p => [p.id, p]));
  const likedSet = getLocalSet(LIKES_KEY);
  const favSet = getLocalSet(FAVS_KEY);
  const arr = state.posts.slice().sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.ts - a.ts);
  const html = arr.map(p => {
    const rp = p.replyTo && byId[p.replyTo];
    const quote = rp ? `<div class="quote">回复 <b>${esc(rp.name)}</b>：${esc((rp.text || '').slice(0, 50))}</div>` : '';
    const liked = likedSet.has(String(p.id));
    const favorited = favSet.has(String(p.id));
    return `<div class="gb-item ${p.pinned ? 'pinned' : ''}">
      <div class="top"><span class="who">${esc(p.name)}</span>${p.pinned ? '<span class="pin">置顶</span>' : ''}<span class="when">${fmtTime(p.ts)}</span></div>
      ${quote}<p class="txt">${esc(p.text)}</p>
      <div class="acts">
        <button class="act-btn like-btn ${liked ? 'active' : ''}" data-id="${p.id}" title="${liked ? '取消点赞' : '点赞'}">
          <span class="act-icon">${liked ? '❤️' : '🤍'}</span>
          <span class="act-count">${p.likes || 0}</span>
        </button>
        <button class="act-btn fav-btn ${favorited ? 'active' : ''}" data-id="${p.id}" title="${favorited ? '取消收藏' : '收藏'}">
          <span class="act-icon">${favorited ? '⭐' : '☆'}</span>
          <span class="act-count">${p.favorites || 0}</span>
        </button>
        <button class="reply-btn" data-id="${p.id}" data-name="${esc(p.name)}">回复</button>
      </div>
    </div>`;
  }).join('');
  $('#gbList').innerHTML = arr.length ? html : '<p class="gb-empty">还没有帖子，来发第一条～</p>';
  $('#gbList').querySelectorAll('.reply-btn').forEach(b => b.onclick = () => setReply(Number(b.dataset.id), b.dataset.name));
  $('#gbList').querySelectorAll('.like-btn').forEach(b => b.onclick = () => toggleLike(Number(b.dataset.id)));
  $('#gbList').querySelectorAll('.fav-btn').forEach(b => b.onclick = () => toggleFav(Number(b.dataset.id)));
}
function fmtTime(ts) { return new Date(ts).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }); }
function setReply(id, name) {
  state.replyTo = id; updateReplyBar(name);
  $('#gbText').focus();
}
async function toggleLike(id) {
  const likedSet = getLocalSet(LIKES_KEY);
  const liked = !likedSet.has(String(id));
  // 立即更新本地状态（乐观更新）
  const post = state.posts.find(p => p.id === id);
  if (post) {
    post.likes = Math.max(0, (post.likes || 0) + (liked ? 1 : -1));
    if (liked) likedSet.add(String(id)); else likedSet.delete(String(id));
    setLocalSet(LIKES_KEY, likedSet);
    renderPosts();
  }
  try {
    const r = await fetch('/api/messages/' + id + '/like', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ liked })
    });
    const d = await r.json();
    if (post && d.likes != null) { post.likes = d.likes; renderPosts(); }
  } catch (e) {
    // 失败回滚
    const p = state.posts.find(x => x.id === id);
    if (p) { p.likes = Math.max(0, (p.likes || 0) + (liked ? -1 : 1)); renderPosts(); }
    if (liked) likedSet.delete(String(id)); else likedSet.add(String(id));
    setLocalSet(LIKES_KEY, likedSet);
  }
}
async function toggleFav(id) {
  const favSet = getLocalSet(FAVS_KEY);
  const favorited = !favSet.has(String(id));
  const post = state.posts.find(p => p.id === id);
  if (post) {
    post.favorites = Math.max(0, (post.favorites || 0) + (favorited ? 1 : -1));
    if (favorited) favSet.add(String(id)); else favSet.delete(String(id));
    setLocalSet(FAVS_KEY, favSet);
    renderPosts();
  }
  try {
    const r = await fetch('/api/messages/' + id + '/favorite', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favorited })
    });
    const d = await r.json();
    if (post && d.favorites != null) { post.favorites = d.favorites; renderPosts(); }
  } catch (e) {
    const p = state.posts.find(x => x.id === id);
    if (p) { p.favorites = Math.max(0, (p.favorites || 0) + (favorited ? -1 : 1)); renderPosts(); }
    if (favorited) favSet.delete(String(id)); else favSet.add(String(id));
    setLocalSet(FAVS_KEY, favSet);
  }
}
function updateReplyBar(name) {
  const bar = $('#replyBar');
  if (!state.replyTo) { bar.hidden = true; bar.innerHTML = ''; return; }
  const p = state.posts.find(x => x.id === state.replyTo);
  const nm = name || (p ? p.name : '');
  bar.hidden = false;
  bar.innerHTML = `↩ 正在回复 <b>${esc(nm)}</b> <span class="x" id="cancelReply">✕ 取消</span>`;
  const c = $('#cancelReply'); if (c) c.onclick = () => { state.replyTo = null; updateReplyBar(); };
}
$('#gbText').addEventListener('input', e => { $('#gbCount').textContent = e.target.value.length + ' / 500'; });
$('#gbForm').addEventListener('submit', async e => {
  e.preventDefault();
  const text = $('#gbText').value.trim();
  if (!text) return;
  const btn = e.target.querySelector('.btn'); btn.disabled = true; btn.textContent = '发布中…';
  try {
    await fetch('/api/messages', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ board: state.board, name: $('#gbName').value.trim(), text, replyTo: state.replyTo }) });
    $('#gbText').value = ''; $('#gbCount').textContent = '0 / 500';
    state.replyTo = null; updateReplyBar();
    await loadPosts();
  } catch { alert('发布失败，请重试'); }
  btn.disabled = false; btn.textContent = '发布';
});

load();
