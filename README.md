# 大瑞的AI小窝 · 每日 AI 情报汇总

每天为你汇总 AI 新闻、模型、GitHub 热门与 Agent 生态。所有条目均附真实出处，可一键跳转核对。

## ✨ 功能

- 📰 **AI 新闻** — 近期 AI 行业动态，均来自公开信源并标注出处
- 🧠 **模型资讯** — 最新模型上架与发布，数据源 OpenRouter
- 📈 **GitHub 热门** — 今日 trending 榜单，点开直达仓库
- 🤖 **Agent 框架** — 可接入智能体、跨模型路由调度
- 🧩 **Skills 技能** — 热门智能体技能 / 技能框架合集
- 💬 **讨论区** — 按主题分版块讨论（需本地部署完整版）

## 🚀 在线访问

GitHub Pages: https://fatexx2013-ship-it.github.io/ai-intel-station

## 🔄 更新频率

每天自动更新 2 次（05:00 / 17:00），数据来自：
- GitHub Trending（当日热门）
- OpenRouter API（最新模型）
- 公开 AI 资讯源（行业新闻）

## 🛠️ 本地部署（含讨论区）

```bash
# 克隆项目
git clone https://github.com/fatexx2013-ship-it/ai-intel-station.git
cd ai-intel-station

# 安装依赖（无需 npm install，零依赖）
node server.js

# 打开 http://localhost:8081
```

## 📁 项目结构

```
ai-intel-station/
├── server.js          # Node.js 后端（零依赖）
├── data.js            # 种子数据（新闻/模型/热门/框架/技能）
├── public/            # 前端文件（完整版，含讨论区）
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── dist/              # 静态版（GitHub Pages 部署）
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── data.json
└── messages.json      # 讨论区帖子（运行后自动生成）
```

## 📝 License

MIT — 仅供学习交流，数据版权归原出处所有。
