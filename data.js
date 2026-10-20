// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-20）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-20",
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
    "date": "2026-10-20",
    "title": "日本演员工会发布 AI 语音使用准则，龙珠悟空配音演员怒批 AI 盗用其声音",
    "desc": "IT之家 10 月 20 日消息，随着生成式 AI 给各行各业创作者带来越来越多的困扰，日本配音演员正在寻找属于自己的方式，抵制他人未经授权使用他们的声音。上周，代表日本配音演员的工会发布了一份 AI 使用相关准则，不少…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/015/074.htm"
  },
  {
    "date": "2026-10-20",
    "title": "赶在 Anthropic 上市前：消息称 OpenAI 加速新一轮融资进程，估值或超 1.4 万亿美元",
    "desc": "IT之家 10 月 20 日消息，据路透社报道，两位知情人士称，OpenAI 正争分夺秒地争取投资者承诺，力求在竞争对手 Anthropic 预计于 11 月中旬上市之前完成融资。此次融资节奏异常迅速，若顺利完成，这家 …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/015/078.htm"
  },
  {
    "date": "2026-10-20",
    "title": "新 AI 工具问世：仅凭一张面部照片即可预测癌症患者生存几率",
    "desc": "IT之家 10 月 20 日消息，据彭博社报道，研究人员开发出一款人工智能工具，仅凭一张面部照片就能预测癌症患者的生存几率。该工具可以补充医生的临床经验判断，有望为治疗方案的制定提供参考，在医疗资料不足的场景下尤其有价值…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/015/079.htm"
  },
  {
    "date": "2026-10-20",
    "title": "英伟达黄仁勋：AI 是新工具，你的专业知识不会被取代",
    "desc": "IT之家 10 月 20 日消息，在柏林对话德国总理弗里德里希 · 默茨（Friedrich Merz）时，英伟达首席执行官黄仁勋表示 AI 不只是聊天工具，它将进入工厂、机器人和医院等场景，增强已有的专业能力和产业经验…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/015/066.htm"
  },
  {
    "date": "2026-10-18",
    "title": "VAST开源实时世界模型EdenLive！单消费级显卡、720P超24FPS",
    "desc": "让人人都能自由创造并体验可交互世界",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504136.html"
  },
  {
    "date": "2026-10-17",
    "title": "Claude半小时解开密码学悬案，学界集体走偏20年",
    "desc": "谜底指向时间",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503910.html"
  },
  {
    "date": "2026-10-17",
    "title": "清华开源！智能体操作系统任务成本降83%，AI记忆可查可改",
    "desc": "整套系统原生支持MCP",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503935.html"
  },
  {
    "date": "2026-10-17",
    "title": "智谱新模型，懂法方面全球第一了",
    "desc": "AI的风还是刮到了法律圈",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503965.html"
  },
  {
    "date": "2026-10-17",
    "title": "突发！DeepSeek新模型发布，超级性价比斩杀一切",
    "desc": "新版本V4.1-Flash-1017，还开放了自研搜索API",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504067.html"
  },
  {
    "date": "2026-10-16",
    "title": "科技爱好者周刊（第 415 期）：3D 版《看不见的城市》",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 湖北咸宁梓山湖度假区的美术馆。（via）…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-415.html"
  }
];

export const models = [
  {
    "vendor": "MiniMax",
    "name": "MiniMax M3.1 Flash (free)",
    "date": "2026-10-19",
    "desc": "MiniMax-M3，上下文 1000k。",
    "url": "https://openrouter.ai/minimax/minimax-m3.1-flash:free"
  },
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash 1017",
    "date": "2026-10-17",
    "desc": "DeepSeek V4，上下文 1049k。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017"
  },
  {
    "vendor": "Elorian",
    "name": "Glimpse",
    "date": "2026-10-17",
    "desc": "Glimpse是Elorian的多模态视觉推理模型，专为物理世界中的视觉理解和复杂的视觉推理而构建，上下文 262k。",
    "url": "https://openrouter.ai/elorian/glimpse"
  },
  {
    "vendor": "XingChen",
    "name": "Xing4.0 29B A4B (free)",
    "date": "2026-10-17",
    "desc": "Xing4，上下文 262k。",
    "url": "https://openrouter.ai/xingchen-agi/xing4.0-29b-a4b:free"
  },
  {
    "vendor": "Reflection",
    "name": "Beam 1.0 501B A23B",
    "date": "2026-10-16",
    "desc": "梁1，上下文 1049k。",
    "url": "https://openrouter.ai/reflection/beam-1.0-501b-a23b"
  },
  {
    "vendor": "Inception",
    "name": "Mercury 3",
    "date": "2026-10-16",
    "desc": "Mercury 3是来自Inception的基于扩散的语言模型，也是该实验室迄今为止最强大的模型，上下文 1000k。",
    "url": "https://openrouter.ai/inception/mercury-3"
  },
  {
    "vendor": "Moondream",
    "name": "Moondream 3 Preview",
    "date": "2026-10-16",
    "desc": "Moondream 3 Preview是来自Moondream的视觉语言模型，总参数为9B ，活跃参数为2B （专家混合），上下文 32k。",
    "url": "https://openrouter.ai/moondream/moondream3-preview"
  },
  {
    "vendor": "Moondream",
    "name": "Moondream 3.1",
    "date": "2026-10-16",
    "desc": "Moondream 3，上下文 32k。",
    "url": "https://openrouter.ai/moondream/moondream3.1-9b-a2b"
  },
  {
    "vendor": "Meta",
    "name": "Muse Spark Open",
    "date": "2026-10-16",
    "desc": "Muse Spark Open是一种编码优化的开放权重模型，上下文 1049k。",
    "url": "https://openrouter.ai/meta/muse-spark-open"
  },
  {
    "vendor": "NVIDIA",
    "name": "Nemotron 3.5 Super VL",
    "date": "2026-10-15",
    "desc": "NVIDIA Nemotron 3，上下文 1049k。",
    "url": "https://openrouter.ai/nvidia/nemotron-3.5-super-vl"
  }
];

export const trending = [
  {
    "repo": "MadsLorentzen/ai-job-search",
    "lang": "Python",
    "today": 3856,
    "stars": 57170,
    "desc": "在您的机器上运行的作业搜索。基于Claude Code构建的人工智能求职框架：评估帖子、定制简历、撰写求职信、准备面试。分叉并拥有它。"
  },
  {
    "repo": "anomalyco/opencode",
    "lang": "TypeScript",
    "today": 1311,
    "stars": 217784,
    "desc": "开源编码代理。"
  },
  {
    "repo": "akitaonrails/ai-memory",
    "lang": "Rust",
    "today": 666,
    "stars": 11323,
    "desc": "针对座席编码CLI的长期记忆解决方案，以及促进不同座席供应商之间切换的解决方案"
  },
  {
    "repo": "Comfy-Org/ComfyUI",
    "lang": "Python",
    "today": 1011,
    "stars": 139698,
    "desc": "最强大、模块化的扩散模型GUI、API和后端，具有图形/节点界面。世界上最快的本地推理引擎。"
  },
  {
    "repo": "ruvnet/ruflo",
    "lang": "TypeScript",
    "today": 564,
    "stars": 77172,
    "desc": "🌊 原始代理线束。部署智能多玩家群体，协调自主工作流程，构建对话式人工智能系统。具有自适应记忆、自学习智能、联合、矢量RAG集成和本地Claude Code/Codex/Hermes等功能"
  },
  {
    "repo": "stablyai/orca",
    "lang": "TypeScript",
    "today": 1590,
    "stars": 98241,
    "desc": "ORCA是与代理团队合作的地方（例如Grok Bot、Claude Code ）。使用您自己的订阅运行任何编码代理。可在桌面、移动和远程运行时使用。"
  },
  {
    "repo": "headroomlabs-ai/headroom",
    "lang": "Python",
    "today": 310,
    "stars": 76233,
    "desc": "在工具输出、日志、文件和RAG块到达LLM之前对其进行压缩。编码代理的令牌减少20% ， JSON的令牌减少60-95% ，答案相同。库、代理、MCP服务器。"
  },
  {
    "repo": "withmarbleapp/os-taxonomy",
    "lang": "JavaScript",
    "today": 284,
    "stars": 6106,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "Kruk2/jasna",
    "lang": "Python",
    "today": 498,
    "stars": 2880,
    "desc": "视频还原工具"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 606,
    "stars": 55221,
    "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 217785,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 152639,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187661,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 129937,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107458,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70929,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61490,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59887,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49191,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30146,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 302125,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 297475,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 284129,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 182232,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 142327,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 108623,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 64778,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 85851,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 55556,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 58505,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
