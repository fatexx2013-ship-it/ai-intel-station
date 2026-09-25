// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-25）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-25",
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
    "date": "2026-09-25",
    "title": "英国最大 AI 超算面临供电问题：原定明年上线，或拖到 2030 年代中期",
    "desc": "IT之家 9 月 25 日消息，据英国《卫报》今天（25 日）报道，英国政府曾大力宣传的埃塞克斯郡劳顿大型数据中心项目将无法按原计划于明年启用，甚至可能拖到 2030 年代中期。劳顿项目 2025 年公布时被称为英国最大…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/007/228.htm"
  },
  {
    "date": "2026-09-25",
    "title": "聊天、编程、智能体三合一，微软正式发布新版 Copilot“超级应用”",
    "desc": "IT之家 9 月 25 日消息，今天（25 日）晚间，微软正式发布新版 Copilot“超级应用”。新版 Copilot 把聊天、编程和智能体三类 AI 能力集中到同一个界面中。微软为其给出的新定位是“为工作而生的 AI…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/007/230.htm"
  },
  {
    "date": "2026-09-25",
    "title": "高盛：美国五大云巨头每年 AI 收入 3000 亿美元，才可盈亏平衡",
    "desc": "IT之家 9 月 25 日消息，据彭博社今天（25 日）晚间报道，高盛集团策略师预计，美国五大超大规模云服务商亚马逊、Alphabet、微软、甲骨文和 Meta 的 AI 基础设施支出将在明年增长超过 50%，达到 1.…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/007/232.htm"
  },
  {
    "date": "2026-09-25",
    "title": "华为大模型双子星联手创业，要找物理世界的Scaling Law",
    "desc": "一场物理世界的基模实验",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497070.html"
  },
  {
    "date": "2026-09-25",
    "title": "别人忙着卷Code，Kimi抽身反打浏览器插件：网页操作一秒变Skill",
    "desc": "Agent的手越伸越长",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497075.html"
  },
  {
    "date": "2026-09-25",
    "title": "亮出“中国最强AI芯片”还不够，平头哥又甩出一手开源",
    "desc": "大厂造芯，正在从交付芯片，走向更广泛的开放共建阶段。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497108.html"
  },
  {
    "date": "2026-09-25",
    "title": "OpenAI闯大祸！GPT竟黑进医保系统，黄仁勋：管不住就关掉",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497177.html"
  },
  {
    "date": "2026-09-25",
    "title": "“AlphaGo”杀进足球场！自我对弈140年，机器人成“梅西终结者”",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/497278.html"
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
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Luna Pro",
    "date": "2026-09-23",
    "desc": "GPT-6 Luna Pro与[GPT-6 Luna] (https://openrouter，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-luna-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Luna Pro (batch)",
    "date": "2026-09-23",
    "desc": "GPT-6 Luna Pro与[GPT-6 Luna] (https://openrouter，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-luna-pro:batch"
  }
];

export const trending = [
  {
    "repo": "paperclipai/paperclip",
    "lang": "TypeScript",
    "today": 1853,
    "stars": 83727,
    "desc": "每个人都使用的开源应用程序来管理工作中的代理"
  },
  {
    "repo": "anthropics/claude-plugins-official",
    "lang": "Python",
    "today": 62,
    "stars": 36779,
    "desc": "由Anthropic管理的高质量Claude Code插件的官方目录。"
  },
  {
    "repo": "vectorize-io/hindsight",
    "lang": "Python",
    "today": 1652,
    "stars": 28706,
    "desc": "后见之明：学习的客服代表记忆"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 465,
    "stars": 291467,
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 671,
    "stars": 269470,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "dream-num/univer",
    "lang": "TypeScript",
    "today": 1048,
    "stars": 18174,
    "desc": "适用于AI代理的Office线束—电子表格、文档、幻灯片、画布、关系表和PDF在一个运行时中。"
  },
  {
    "repo": "anthropics/skills",
    "lang": "Python",
    "today": 155,
    "stars": 178106,
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "androoAGI/starnet",
    "lang": "JavaScript",
    "today": 113,
    "stars": 320,
    "desc": "一个活生生的像素艺术站，真正的人工智能代理在那里做真正的工作。本地优先桌面代理线束-带上您自己的钥匙，观看您的工作人员实际运行。"
  },
  {
    "repo": "derv82/wifit3",
    "lang": "Python",
    "today": 168,
    "stars": 732,
    "desc": "无线网络，但仅限USB和跨平台。"
  },
  {
    "repo": "kelseyhightower/kubernetes-the-hard-way",
    "lang": "—",
    "today": 105,
    "stars": 50032,
    "desc": "Bootstrap Kubernetes很难。没有脚本。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 209981,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 148041,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187546,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 126423,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107162,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70603,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61155,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59009,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48567,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29696,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 291467,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 269470,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 267272,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 178106,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 139726,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 98992,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62792,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 71509,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 51476,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 51963,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
