// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-27）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-27",
  "note": "所有条目均附真实出处；描述与外文内容已自动汉化。星标数据来自 GitHub API，模型数据来自 OpenRouter 公开接口，新闻来自中文科技媒体 RSS。"
};

export const boards = [
  {
    "id": "news",
    "name": "AI 新闻",
    "icon": "📰",
    "desc": "聊聊最近的 AI 行业新闻与热点"
  },
  {
    "id": "models",
    "name": "模型资讯",
    "icon": "🧠",
    "desc": "新模型、跑分、部署与体验讨论"
  },
  {
    "id": "trending",
    "name": "GitHub 热门",
    "icon": "📈",
    "desc": "开源项目分享与技术讨论"
  },
  {
    "id": "agent",
    "name": "Agent 框架",
    "icon": "🤖",
    "desc": "智能体框架、编码 CLI、路由与编排"
  },
  {
    "id": "skills",
    "name": "Skills 技能",
    "icon": "🧩",
    "desc": "技能包、插件与玩法交流"
  },
  {
    "id": "free",
    "name": "自由灌水",
    "icon": "💬",
    "desc": "闲聊、建议、求资源，随便聊"
  }
];

export const seedPosts = [
  {
    "id": 1001,
    "board": "news",
    "name": "小助手",
    "text": "📌 置顶：本版块讨论近期 AI 行业新闻，欢迎补充你的看法与信源。",
    "ts": 1789236000000,
    "replyTo": null,
    "pinned": true,
    "likes": 43,
    "favorites": 19
  },
  {
    "id": 1002,
    "board": "models",
    "name": "小助手",
    "text": "📌 置顶：新模型发布、跑分、本地部署体验都欢迎在这里聊。",
    "ts": 1789236000000,
    "replyTo": null,
    "pinned": true,
    "likes": 35,
    "favorites": 22
  },
  {
    "id": 1003,
    "board": "trending",
    "name": "小助手",
    "text": "📌 置顶：看到有意思的开源项目？来这儿分享和讨论。",
    "ts": 1789236000000,
    "replyTo": null,
    "pinned": true,
    "likes": 28,
    "favorites": 15
  },
  {
    "id": 1004,
    "board": "agent",
    "name": "小助手",
    "text": "📌 置顶：Agent 框架、编码 CLI、跨模型路由的使用心得都欢迎交流。",
    "ts": 1789236000000,
    "replyTo": null,
    "pinned": true,
    "likes": 51,
    "favorites": 30
  },
  {
    "id": 1005,
    "board": "skills",
    "name": "小助手",
    "text": "📌 置顶：好用的 Skills 技能包、插件与玩法，欢迎互相种草。",
    "ts": 1789236000000,
    "replyTo": null,
    "pinned": true,
    "likes": 38,
    "favorites": 25
  },
  {
    "id": 1006,
    "board": "free",
    "name": "小助手",
    "text": "📌 置顶：自由灌水版块，闲聊、提建议、求资源都可以～",
    "ts": 1789236000000,
    "replyTo": null,
    "pinned": true,
    "likes": 20,
    "favorites": 8
  }
];

export const news = [
  {
    "date": "2026-11-26",
    "title": "腾讯用 AI 挑战药物研发领域前沿难题：成果登 Nature，在减重降糖、肿瘤免疫方向完成验证",
    "desc": "IT之家 11 月 26 日消息，腾讯今日宣布，11 月 25 日，腾讯生命科学实验室的一项 AI for Science 研究成果，正式以第一单位登上《Nature》主刊。据介绍，腾讯用 AI 挑战了药物研发领域的一个…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/033/125.htm"
  },
  {
    "date": "2026-11-26",
    "title": "瑞士发生五起 AI 智能体网络攻击，电力供水通信系统遭入侵",
    "desc": "IT之家 11 月 26 日消息，据路透社报道，瑞士联邦网络安全局（BACS）周四通报，过去几天瑞士发生五起网络攻击，攻击者使用 AI 智能体针对企业以及关键基础设施运营方发起入侵。IT之家注意到，该局在公告中表示，五起…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/033/131.htm"
  },
  {
    "date": "2026-11-26",
    "title": "报名最后2天｜AI浪潮之中，来认识创造未来的人",
    "desc": "12月6日，WAIC将携手第六届“海聚英才”全球创新创业峰会，把这场关于“人”的讨论带回现场。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512942.html"
  },
  {
    "date": "2026-11-26",
    "title": "极客公园创新大会 2027 全议程公布！",
    "desc": "今天，IF 2027 全议程揭晓。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512952.html"
  },
  {
    "date": "2026-11-26",
    "title": "90 秒自动换装补能，具微科技“潘多拉”支撑机器人无人化值守",
    "desc": "全栈方案破解工业机器人连续作业难题",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512972.html"
  },
  {
    "date": "2026-11-26",
    "title": "AI 3D界的“X光”来了！一图直出巴洛克雕塑，3D打印开箱即用",
    "desc": "还得是科班尖子生",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512981.html"
  },
  {
    "date": "2026-11-26",
    "title": "381个AI直播冲刺证明P=NP！把GitHub干崩了",
    "desc": "已跑了超过一万次会话，在Lean4里验证通过了2400多条引理",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/513021.html"
  },
  {
    "date": "2026-11-20",
    "title": "科技爱好者周刊（第 420 期）：最分心的一年",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 新建成的上海道教学院，由清华大学建筑设计…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-420.html"
  },
  {
    "date": "2026-11-13",
    "title": "科技爱好者周刊（第 419 期）：机房来了，写字楼走了",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 成都麓湖生态城的 Q8 步行桥，采用双曲…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-419.html"
  }
];

export const models = [
  {
    "vendor": "inclusionAI",
    "name": "LingSante 3.1 Air VL",
    "date": "2026-11-26",
    "desc": "LingSante 3，上下文 131k。",
    "url": "https://openrouter.ai/inclusionai/lingsante-3.1-air-vl"
  },
  {
    "vendor": "Upstage",
    "name": "Solar Mini 4.5 (Preview)",
    "date": "2026-11-25",
    "desc": "Solar Mini 4，上下文 524k。",
    "url": "https://openrouter.ai/upstage/solar-mini-4-5"
  },
  {
    "vendor": "Upstage",
    "name": "Solar Pro 4 Contributor",
    "date": "2026-11-25",
    "desc": "Solar Pro 4 Contributor 与 Upstage 的 Solar Pro 4 型号相同，以较低的价格提供，但条件是允许 Upstage 使用互动数据来进行改进，上下文 524k。",
    "url": "https://openrouter.ai/upstage/solar-pro-4-contributor"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Flash-MOPD",
    "date": "2026-11-24",
    "desc": "MiMo-V2，上下文 1049k。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-flash-mopd"
  },
  {
    "vendor": "Thinking Machines",
    "name": "Inkling 2 Mini",
    "date": "2026-11-21",
    "desc": "Inkling 2 Mini 是 Thinking Machines Lab 开发的一款开放权重多模态循环变压器，具有 3，上下文 1049k。",
    "url": "https://openrouter.ai/thinkingmachines/inkling-2-mini"
  },
  {
    "vendor": "RadixArk",
    "name": "DaisyRose 27B",
    "date": "2026-11-21",
    "desc": "DaisyRose 27B 是 RadixArk 推出的开放权重多模态推理模型，由 [Qwen3，上下文 262k。",
    "url": "https://openrouter.ai/radixark/daisyrose-27b"
  },
  {
    "vendor": "Mistral",
    "name": "Pixtral Large 2502",
    "date": "2026-11-20",
    "desc": "Pixtral Large 2502 是 Mistral AI 大型多模态模型的 2025 年 2 月版本，继 [Pixtral Large 2411](https://openrouter，上下文 128k。",
    "url": "https://openrouter.ai/mistralai/pixtral-large-2502"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Neon",
    "date": "2026-11-18",
    "desc": "Gemini 4 Neon 是 Google Gemini 4 系列中一款快速、中等价位的模型，专为编程和代理工作而打造，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-neon"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Neon (batch)",
    "date": "2026-11-18",
    "desc": "Gemini 4 Neon 是 Google Gemini 4 系列中一款快速、中等价位的模型，专为编程和代理工作而打造，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-neon:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Astra Pro",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-astra-pro"
  }
];

export const trending = [
  {
    "repo": "elementalsouls/Claude-BugHunter",
    "lang": "Python",
    "today": 1600,
    "stars": 24245,
    "desc": "用于漏洞挖掘和外部红队工作的Claude Code技能包——85项技能、16个斜杠命令、681个披露报告模式（涵盖24个核心漏洞类别），以及企业身份+基础设施攻击矩阵。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 853,
    "stars": 327298,
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 744,
    "stars": 66221,
    "desc": "“CLI-Anything：让所有软件都具备原生代理功能” -- CLI-Hub：https://clianything.cc/"
  },
  {
    "repo": "jingyaogong/minimind",
    "lang": "Python",
    "today": 701,
    "stars": 71547,
    "desc": "🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours."
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 268,
    "stars": 19739,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "firecrawl/firecrawl",
    "lang": "TypeScript",
    "today": 1042,
    "stars": 210770,
    "desc": "让您的客服代表更聪明的知识基础设施。通过一个 API 搜索、抓取和访问 550 多家数据提供商。"
  },
  {
    "repo": "nginx/nginx",
    "lang": "C",
    "today": 150,
    "stars": 33493,
    "desc": "官方 NGINX 开源代码仓库。"
  },
  {
    "repo": "openvinotoolkit/openvino",
    "lang": "C++",
    "today": 176,
    "stars": 12783,
    "desc": "OpenVINO™ 是一款用于优化和部署 AI 推理的开源工具包"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 951,
    "stars": 73709,
    "desc": "适用于 Claude Code、Codex、GitHub Copilot、Cursor、Factory Droid、Qoder 和 Pi 的编辑图表设计。52 种图表类型。独立的 HTML + SVG。无阴影。无Mermaid杂乱。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 755,
    "stars": 75622,
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 229373,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 157194,
    "lang": "TypeScript",
    "desc": "Claude Code 是一款智能编码工具，驻留在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码和处理 Git 工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来实现。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188202,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于其进行构建的无障碍人工智能。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 136568,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 109185,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将 Gemini 的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71494,
    "lang": "Python",
    "desc": "🌟 多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61970,
    "lang": "Python",
    "desc": "用于自主人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61301,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，共同应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50364,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30890,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多智能体工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 327298,
    "lang": "Shell",
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 333485,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 311193,
    "lang": "JavaScript",
    "desc": "代理工具性能优化系统。针对 Claude Code、Codex、Opencode、Cursor 等工具的技能、直觉、记忆、安全性和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 200945,
    "lang": "Python",
    "desc": "客服代表技能的公开存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 145826,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用 - 免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 120573,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 75623,
    "lang": "Python",
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 100488,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为交互式图表或一页式答案：10 种图表类型、架构诊断、故事视频和 PR 演练。适用于 Claude Code、Codex、Cursor 等的 Agent Skill。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 62806,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。转化率优化 (CRO)、文案撰写、搜索引擎优化 (SEO)、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 73929,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作迹象的客服代表技能"
  }
];
