<div align="center">

# 大瑞的AI小窝 · 每日 AI 情报汇总

每天为你汇总 AI 新闻、模型发布、GitHub 热门与 Agent 生态<br>所有条目均附真实出处，可一键跳转核对 · 全自动抓取汉化

[![在线访问](https://img.shields.io/badge/🌐_在线访问-GitHub_Pages-08090A?style=for-the-badge&labelColor=62666D)](https://fatexx2013-ship-it.github.io/ai-intel-station)
[![License](https://img.shields.io/badge/license-MIT-3ECF8E?style=for-the-badge)](LICENSE)
[![零依赖](https://img.shields.io/badge/依赖-0_个-E8B846?style=for-the-badge)](#)

[![GitHub stars](https://img.shields.io/github/stars/fatexx2013-ship-it/ai-intel-station?style=social)](https://github.com/fatexx2013-ship-it/ai-intel-station/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/fatexx2013-ship-it/ai-intel-station?style=social)](https://github.com/fatexx2013-ship-it/ai-intel-station/network)
[![最后更新](https://img.shields.io/github/last-commit/fatexx2013-ship-it/ai-intel-station?color=3ECF8E&label=最后更新)](https://github.com/fatexx2013-ship-it/ai-intel-station/commits)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/fatexx2013-ship-it/ai-intel-station?color=8A8F98)](https://github.com/fatexx2013-ship-it/ai-intel-station/commits)

**[📰 AI 新闻](#-功能) · [🧠 模型资讯](#-功能) · [📈 GitHub 热门](#-功能) · [🤖 Agent 框架](#-功能) · [🧩 Skills 技能](#-功能) · [💬 讨论区](#-功能) · [📅 历史归档](#-历史归档)**

</div>

---

## ✨ 功能

| 版块 | 说明 | 数据源 |
|------|------|--------|
| 📰 **AI 新闻** | 近期 AI 行业动态，原生中文信源 | 量子位 / 36氪 / IT之家 / 阮一峰周刊 RSS |
| 🧠 **模型资讯** | 最新模型上架与发布，描述自动汉化 | OpenRouter API |
| 📈 **GitHub 热门** | 今日 trending 榜单，含总星数与今日新增 | GitHub Trending + GitHub API |
| 🤖 **Agent 框架** | 可接入智能体、跨模型路由调度、终端编码 Agent | GitHub API 实时星数 |
| 🧩 **Skills 技能** | 热门智能体技能 / 技能框架合集 | GitHub API 实时星数 |
| 💬 **讨论区** | 按主题分版块讨论，支持回复 / 点赞 / 收藏 | 本地部署完整版 |
| 📅 **历史归档** | 按日期回看任一天的完整情报快照（含当时星数与翻译） | Git 快照 |

## 🚀 在线访问

**👉 [fatexx2013-ship-it.github.io/ai-intel-station](https://fatexx2013-ship-it.github.io/ai-intel-station)**

纯静态部署，无需服务器，打开即用。

## 📅 历史归档

每次数据更新都会自动保存当日完整快照到 `docs/archive/YYYY-MM-DD.json`：

- ✅ **已翻译的中文描述** — 原样冻结，永不丢失
- ✅ **当时星数** — 记录该项目上榜时的真实 popularity
- ✅ **所有出处链接** — 只要源页面还在，链接永远有效

在网页顶部「📅 历史归档」下拉框选择日期即可回看，选回「今日」恢复实时数据。

## 🔄 更新机制

GitHub Actions 每天 **05:00 / 17:00**（北京时间）自动运行：

```
抓取数据源 → 汉化描述 → 校验 → 写入 data.json → 存档当日快照 → 自动提交部署
```

任一数据源失败时保留旧数据，保证站点永远有内容。

## 🛠️ 本地部署（含讨论区）

```bash
git clone https://github.com/fatexx2013-ship-it/ai-intel-station.git
cd ai-intel-station

node server.js    # 零依赖，Node >= 18
# 打开 http://localhost:8081
```

## 📁 项目结构

```
ai-intel-station/
├── server.js              # Node.js 后端（零依赖，内置 fetch）
├── data.js                # 数据源（自动生成，含汉化内容）
├── scripts/
│   └── update-data.mjs    # 数据抓取 + 汉化 + 归档脚本
├── .github/workflows/
│   └── update-data.yml    # 每日两次自动更新
├── public/                # 完整版前端（本地部署用，含讨论区）
├── docs/                  # 静态版（GitHub Pages 部署）
│   ├── archive/           # 历史归档快照 YYYY-MM-DD.json
│   └── data.json          # 静态站数据源
└── messages.json          # 讨论区帖子（运行后自动生成）
```

## 🎨 设计

视觉风格基于 [Linear](https://opendesign.cc/packs/linear) 真实设计 token（经 [OpenDesign](https://opendesign.cc) 提取）：极致对比、半透明面板营造深度、克制的动效曲线 `cubic-bezier(.25,.46,.45,.94)`。

## 📝 License

MIT — 仅供学习交流，数据版权归原出处所有。

<div align="center">

<sub>Built with ❤️ · 数据每自动更新于北京时间 05:00 / 17:00</sub>

</div>
