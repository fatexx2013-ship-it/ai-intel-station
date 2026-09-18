// 大瑞的AI小窝 · 静态版（GitHub Pages 部署）
// 数据来自本地 data.json，每天自动更新
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
  const langPart = x.lang && x.lang !== '—' ? langDot(x.lang) : '';
  let meta = '';
  if (mode === 'today') {
    // trending 卡片：总星数 + 今日新增 双显示
    const starsPart = x.stars != null ? `<span class="stars">★ ${fmt(x.stars)}</span>` : '';
    meta = `${starsPart}<span class="today">▲ ${fmt(x.today)} 今日</span>${langPart}`;
  } else {
    meta = `<span class="stars">★ ${fmt(x.stars)}</span>${langPart}`;
  }
  return `<a class="card" href="${esc(gh(x.repo))}" target="_blank" rel="noopener">
    <div class="repo-name">${esc(x.repo)}</div>
    <p>${esc(x.desc)}</p>
    <div class="repo-meta">${meta}</div>
  </a>`;
}

function renderAll(d, isArchive) {
  $('#genAt').textContent = '数据生成 ' + (d.meta.generatedAt || '—');
  $('#newsList').innerHTML = d.news.map(newsCard).join('');
  $('#modelsList').innerHTML = d.models.map(modelCard).join('');
  $('#trendingList').innerHTML = d.trending.map(x => repoCard(x, 'today')).join('');
  $('#agentList').innerHTML = d.agentFrameworks.map(x => repoCard(x, 'stars')).join('');
  $('#skillsList').innerHTML = d.skills.map(x => repoCard(x, 'stars')).join('');
  const chip = $('#liveChip');
  if (isArchive) {
    chip.textContent = '⏮ 正在浏览 ' + d.meta.generatedAt + ' 的历史快照';
    chip.className = 'chip live-chip off';
  } else {
    chip.textContent = '每日 05:00 / 17:00 自动更新 · 描述已汉化';
    chip.className = 'chip live-chip on';
  }
}

async function load() {
  try {
    const d = await (await fetch('data.json')).json();
    renderAll(d, false);
  } catch (e) {
    $('#newsList').innerHTML = '<p class="err">数据加载失败：' + esc(e.message) + '</p>';
    $('#liveChip').textContent = '加载异常'; $('#liveChip').className = 'chip live-chip off';
  }
}

// ---------- 历史归档 ----------
async function loadArchiveIndex() {
  try {
    const dates = await (await fetch('archive/index.json')).json();
    const sel = $('#archiveSelect');
    dates.forEach(dt => {
      const o = document.createElement('option');
      o.value = dt; o.textContent = dt;
      sel.appendChild(o);
    });
  } catch { /* 归档索引不存在时静默 */ }
}

async function loadArchive(date) {
  try {
    const d = await (await fetch(`archive/${date}.json`)).json();
    renderAll(d, true);
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
  } catch (e) {
    $('#liveChip').textContent = '归档 ' + date + ' 加载失败'; $('#liveChip').className = 'chip live-chip off';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const sel = $('#archiveSelect');
  if (sel) {
    sel.addEventListener('change', () => {
      if (sel.value) loadArchive(sel.value); else load();
    });
  }
  loadArchiveIndex();
});

load();
initBoards();

// 讨论区 — 静态展示（完整版需本地部署）
let BOARDS = [];
const state = { board: null };

function renderTabs() {
  $('#boardTabs').innerHTML = BOARDS.map(b =>
    `<button class="tab ${b.id === state.board ? 'active' : ''}" data-id="${b.id}">${b.icon} ${esc(b.name)}</button>`).join('');
  $('#boardTabs').querySelectorAll('.tab').forEach(t => t.onclick = () => switchBoard(t.dataset.id));
}
function switchBoard(id) {
  state.board = id;
  const b = BOARDS.find(x => x.id === id) || {};
  $('#boardDesc').textContent = b.desc || '';
  renderTabs();
  // 静态版显示引导信息
  $('#gbList').innerHTML = `
    <div class="gb-item" style="text-align:center;padding:24px 16px;">
      <p class="txt" style="font-size:15px;margin-bottom:8px;">💬 讨论区功能需要本地部署完整版才能使用</p>
      <p style="color:var(--muted);font-size:13px;margin-bottom:14px;">支持发帖、回复、点赞、收藏，还有 AI 小助手自动值班～</p>
      <a href="https://github.com/fatexx2013-ship-it/ai-intel-station" target="_blank" rel="noopener" class="btn" style="display:inline-block;text-decoration:none;">📦 查看部署方式</a>
    </div>
  `;
}

// 初始化版块标签
async function initBoards() {
  try {
    const d = await (await fetch('data.json')).json();
    if (d.boards && d.boards.length) {
      BOARDS = d.boards;
      switchBoard(BOARDS[0].id);
    }
  } catch {}
}

load();
