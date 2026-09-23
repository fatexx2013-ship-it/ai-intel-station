// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-23）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-23",
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
    "date": "2026-09-23",
    "title": "报告：美国人开始问 AI“吃什么零食”，高蛋白和重口味食品需求增长",
    "desc": "IT之家 9 月 23 日消息，据路透社报道，康尼格拉食品公司（Conagra Brands）称，越来越多美国消费者开始向人工智能询问“该吃什么零食”。这家 Slim Jim 肉类零食棒制造商表示，这一消费习惯正在推动高…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/006/471.htm"
  },
  {
    "date": "2026-09-23",
    "title": "它石智航顶尖团队引领中国具身智能率先迈入规模化落地阶段",
    "desc": "它石智航将继续扩大研发团队，加快布局生产基地，全面提升机器人交付能力",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/496481.html"
  },
  {
    "date": "2026-09-23",
    "title": "达卯科技完成新一轮融资，算电协同核心软件层“稀缺标的”",
    "desc": "打造算电协同领域“Windows”级操作系统",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/496494.html"
  },
  {
    "date": "2026-09-23",
    "title": "汇智智能发布Hellome：国内首个FDE直连智能体服务平台，把AI交付周期压进“周”",
    "desc": "企业AI服务迎来平台化交付时代",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/496493.html"
  },
  {
    "date": "2026-09-23",
    "title": "让Token生产更高效：异构混推的关键技术演进与创新实践",
    "desc": "商汤大装置异构混推创新实践与技术演进",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/496578.html"
  },
  {
    "date": "2026-09-23",
    "title": "联想亮相阿里云栖大会：联想天禧AI把超级组织落地到端侧",
    "desc": "联想天禧AI携全场景多端产品矩阵亮相阿里云栖大会",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/496609.html"
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
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Luna",
    "date": "2026-09-23",
    "desc": "GPT-6 Luna是OpenAI GPT-6系列中快速、经济高效的型号，位于GPT-6 Sol之下，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-luna"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Luna (batch)",
    "date": "2026-09-23",
    "desc": "GPT-6 Luna是OpenAI GPT-6系列中快速、经济高效的型号，位于GPT-6 Sol之下，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-luna:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Sol Pro",
    "date": "2026-09-23",
    "desc": "GPT-6 Sol Pro与[GPT-6 Sol] (https://openrouter相同的基础模型，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-sol-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Sol Pro (batch)",
    "date": "2026-09-23",
    "desc": "GPT-6 Sol Pro与[GPT-6 Sol] (https://openrouter相同的基础模型，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-sol-pro:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Sol",
    "date": "2026-09-23",
    "desc": "GPT-6 Sol是OpenAI GPT-6系列中具有成本效益的高端型号，位于旗舰GPT-6 Astra之下，位于快速GPT-6 Luna层之上，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6-sol"
  }
];

export const trending = [
  {
    "repo": "anthropics/financial-services",
    "lang": "Python",
    "today": 665,
    "stars": 36742,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "google/ax",
    "lang": "Go",
    "today": 1542,
    "stars": 8471,
    "desc": "Google的开放代理编排运行时"
  },
  {
    "repo": "davila7/claude-code-templates",
    "lang": "Python",
    "today": 393,
    "stars": 31344,
    "desc": "用于配置和监控Claude Code的CLI工具"
  },
  {
    "repo": "BuilderIO/agent-native",
    "lang": "TypeScript",
    "today": 609,
    "stars": 6400,
    "desc": "构建代理应用的框架"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 528,
    "stars": 290477,
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "dream-num/univer",
    "lang": "TypeScript",
    "today": 1140,
    "stars": 16104,
    "desc": "适用于AI代理的Office线束—电子表格、文档、幻灯片、画布、关系表和PDF在一个运行时中。"
  },
  {
    "repo": "Open-Dev-Society/OpenStock",
    "lang": "TypeScript",
    "today": 832,
    "stars": 18593,
    "desc": "OpenStock是昂贵市场平台的开源替代品。实时跟踪价格，设置个性化提醒，并探索详细的公司洞察--为每个人公开构建，永远免费。"
  },
  {
    "repo": "agent-substrate/substrate",
    "lang": "Go",
    "today": 560,
    "stars": 3294,
    "desc": "Agent Substrate ：核心系统"
  },
  {
    "repo": "strands-agents/harness-sdk",
    "lang": "Python",
    "today": 96,
    "stars": 7648,
    "desc": "构建代理线束并进行端到端控制。适用于Python和TypeScript中生产AI代理的开源SDK -任何模型，任何云。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 41,
    "stars": 49769,
    "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 209581,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 147758,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187509,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 126135,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107140,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70577,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61118,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58941,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48505,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29653,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 290477,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 268265,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 265896,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 177770,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 139526,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 98625,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62700,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 70384,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 51278,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 51583,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
