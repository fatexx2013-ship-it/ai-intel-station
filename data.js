// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-27）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-27",
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
    "date": "2026-09-27",
    "title": "部分 Anthropic 资深员工考虑在偏远地区购置土地，以防“AI 失控”",
    "desc": "IT之家 9 月 27 日消息，为防范人工智能彻底失控，Anthropic 的数位资深员工正在悄然制定具体的应急预案。据华尔街日报于当地时间 9 月 26 日报道，最近数周内，Anthropic 的部分早期员工曾向业界同…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/007/603.htm"
  },
  {
    "date": "2026-09-27",
    "title": "“第二代豆包手机”努比亚 NaviX Ultra 玩《王者荣耀》遭强制下线？知情人士称有安全风险策略保障游戏公平，未有任何针对性调整",
    "desc": "IT之家 9 月 27 日消息，9 月 25 日，字节跳动旗下豆包手机助手发布声明称，从 9 月 24 日晚上开始陆续收到多条用户反馈，在搭载了豆包手机助手的努比亚 NaviX Ultra 上，登录《王者荣耀》或进行匹配…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/007/607.htm"
  },
  {
    "date": "2026-09-27",
    "title": "啥题啊能干崩OpenAI最强模型训练…",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/498546.html"
  },
  {
    "date": "2026-09-26",
    "title": "在云栖大会，我终于看懂了米哈游千亿AI野心",
    "desc": "大伟哥：如果做不到，一年两年之后过来打我脸",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497613.html"
  },
  {
    "date": "2026-09-26",
    "title": "笔记本跑7000亿参数GLM！无GPU也行? SSD当显存用火爆GitHub",
    "desc": "GitHub现在最火热的大模型开源小蜂鸟Colibrì是个啥？",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497624.html"
  },
  {
    "date": "2026-09-26",
    "title": "AI开始研究Physical AI：FSD级团队亮出首版模型Simate-beta，空降RoboDojo",
    "desc": "Simate将训练、推理与评测全流程接入自研Infra，通过极致的任务编排与资源调度，同时并行推进数十条相互独立的研究路线。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/498271.html"
  },
  {
    "date": "2026-09-26",
    "title": "索辰科技加码世界模型，与战略投资企业美梦空间联合发布具身模型与物理测评标准",
    "desc": "“世界模型”开始成为具身智能跨越商业化“奇点”的新叙事。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/498478.html"
  },
  {
    "date": "2026-09-18",
    "title": "科技爱好者周刊（第 413 期）：再见了，React Native",
    "desc": "这里记录每周值得分享的科技内容，周五发布。（[通知] 下周五开始的中秋和十一假期，周刊休息。） 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-413.html"
  },
  {
    "date": "2026-09-11",
    "title": "科技爱好者周刊（第 412 期）：禁止 issue，只用 PR",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面 上海前滩太古里举办的\"英雄联盟15周年\"展…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-412.html"
  }
];

export const models = [
  {
    "vendor": "TypeSafe",
    "name": "Jev Router",
    "date": "2026-09-26",
    "desc": "Jev Router为每个请求选择最佳模型和推理工作，平衡质量、速度和成本，上下文 1000k。",
    "url": "https://openrouter.ai/typesafe/jev-router"
  },
  {
    "vendor": "Perceptron",
    "name": "Perceptron Mk1.5",
    "date": "2026-09-26",
    "desc": "感知器Mk1，上下文 37k。",
    "url": "https://openrouter.ai/perceptron/perceptron-mk1.5"
  },
  {
    "vendor": "Fireworks",
    "name": "Ember-1",
    "date": "2026-09-24",
    "desc": "Ember-1是Fireworks Research的专业推理模型，基于[Kimi K3] (https://openrouter，上下文 1049k。",
    "url": "https://openrouter.ai/fireworks/ember-1"
  },
  {
    "vendor": "Z.ai",
    "name": "GLM 5.3 Prime",
    "date": "2026-09-24",
    "desc": "GLM-5，上下文 1000k。",
    "url": "https://openrouter.ai/z-ai/glm-5.3-prime"
  },
  {
    "vendor": "Qwen",
    "name": "Qwen3.8 Max Prime",
    "date": "2026-09-24",
    "desc": "Qwen3，上下文 1000k。",
    "url": "https://openrouter.ai/qwen/qwen3.8-max-prime"
  },
  {
    "vendor": "Space Bunny Alpha",
    "name": "space-bunny-alpha",
    "date": "2026-09-23",
    "desc": "Space Bunny Alpha是一个匿名大型模型，具有超快的推理能力、强大的编码能力和本地多模态输入支持，上下文 1000k。",
    "url": "https://openrouter.ai/stealth/space-bunny-alpha"
  },
  {
    "vendor": "AionLabs",
    "name": "Aion 3.5 Mini",
    "date": "2026-09-23",
    "desc": "AION 3，上下文 262k。",
    "url": "https://openrouter.ai/aion-labs/aion-3.5-mini"
  },
  {
    "vendor": "AionLabs",
    "name": "Aion 3.5",
    "date": "2026-09-23",
    "desc": "AION 3，上下文 262k。",
    "url": "https://openrouter.ai/aion-labs/aion-3.5"
  },
  {
    "vendor": "Upstage",
    "name": "Solar Mini 4",
    "date": "2026-09-23",
    "desc": "Solar Mini 4是Upstage紧凑、经济高效的语言模型，是35B参数的混合体，具有3B活动参数和524K上下文窗口，上下文 524k。",
    "url": "https://openrouter.ai/upstage/solar-mini4"
  },
  {
    "vendor": "Cohere",
    "name": "Command A+",
    "date": "2026-09-23",
    "desc": "Command A +是Cohere的企业代理工作流程旗舰模型，上下文 192k。",
    "url": "https://openrouter.ai/cohere/command-a-plus"
  }
];

export const trending = [
  {
    "repo": "paperclipai/paperclip",
    "lang": "TypeScript",
    "today": 2527,
    "stars": 88739,
    "desc": "每个人都使用的开源应用程序来管理工作中的代理"
  },
  {
    "repo": "vectorize-io/hindsight",
    "lang": "Python",
    "today": 4463,
    "stars": 35680,
    "desc": "后见之明：学习的客服代表记忆"
  },
  {
    "repo": "debpalash/VoiceStudio",
    "lang": "Python",
    "today": 3060,
    "stars": 38924,
    "desc": "VoiceStudio是开源、完全本地的ElevenLabs替代品--语音克隆、语音设计、视频配音、听写、转录和有声读物创作，支持646种语言。"
  },
  {
    "repo": "rohitg00/ai-engineering-from-scratch",
    "lang": "Python",
    "today": 848,
    "stars": 58846,
    "desc": "学习它，构建它。为其他人运送。"
  },
  {
    "repo": "InfinityLoop1308/PipePipe",
    "lang": "Shell",
    "today": 139,
    "stars": 6422,
    "desc": "一个开源的Android应用程序，让您自由浏览YouTube和其他服务。"
  },
  {
    "repo": "vercel-labs/scriptc",
    "lang": "TypeScript",
    "today": 76,
    "stars": 5250,
    "desc": "TypeScript到Native编译器"
  },
  {
    "repo": "mvschwarz/openrig",
    "lang": "TypeScript",
    "today": 114,
    "stars": 669,
    "desc": "将Claude Code和Codex作为一个系统运行的多Agent线束"
  },
  {
    "repo": "dream-num/univer",
    "lang": "TypeScript",
    "today": 920,
    "stars": 19936,
    "desc": "适用于AI代理的Office线束—电子表格、文档、幻灯片、画布、关系表和PDF在一个运行时中。"
  },
  {
    "repo": "willfaust/Madeira",
    "lang": "C",
    "today": 171,
    "stars": 710,
    "desc": "通过FEX-Emu + Wine + DXMT在被监禁的iOS上运行x86-64 Windows PC游戏"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 210350,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 148297,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187583,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 126724,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107165,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70658,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61185,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59087,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48613,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29716,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 292081,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 270528,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 268174,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 178625,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 139953,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 99398,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62996,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 72581,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 51653,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 52274,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
