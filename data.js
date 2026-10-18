// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-19）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-19",
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
    "date": "2026-10-18",
    "title": "索尼新专利曝光：AI 可在 GPU 渲染完成前预测下一帧画面，减少游戏卡顿",
    "desc": "IT之家 10 月 18 日消息，据科技媒体 TechSpot 今天报道，索尼最近申请一项专利，描绘以下场景：让 AI 在 GPU 完成渲染前预测下一帧画面，减少游戏画面卡顿，同时避免帧生成技术带来的额外延迟。IT之家从…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/014/615.htm"
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
  },
  {
    "date": "2026-10-08",
    "title": "科技爱好者周刊（第 414 期）：Jev 决策模型有什么用",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 国产首列数字地铁列车 VELLINK，完…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html"
  }
];

export const models = [
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
  },
  {
    "vendor": "NVIDIA",
    "name": "Nemotron 3.5 Super VL (free)",
    "date": "2026-10-15",
    "desc": "NVIDIA Nemotron 3，上下文 1000k。",
    "url": "https://openrouter.ai/nvidia/nemotron-3.5-super-vl:free"
  },
  {
    "vendor": "Pareto 26.10",
    "name": "pareto-26.10",
    "date": "2026-10-15",
    "desc": "Pareto是一种多模态复合模型，专为研究、编码和代理工作流程而构建，同时在广泛的领域提供前沿水平的性能，上下文 1049k。",
    "url": "https://openrouter.ai/unbiased/pareto-26.10"
  }
];

export const trending = [
  {
    "repo": "MadsLorentzen/ai-job-search",
    "lang": "Python",
    "today": 2213,
    "stars": 52956,
    "desc": "在您的机器上运行的作业搜索。基于Claude Code构建的人工智能求职框架：评估帖子、定制简历、撰写求职信、准备面试。分叉并拥有它。"
  },
  {
    "repo": "anthropics/claude-plugins-official",
    "lang": "Python",
    "today": 1187,
    "stars": 42636,
    "desc": "由Anthropic管理的高质量Claude Code插件的官方目录。"
  },
  {
    "repo": "anomalyco/opencode",
    "lang": "TypeScript",
    "today": 1417,
    "stars": 216509,
    "desc": "开源编码代理。"
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 351,
    "stars": 12715,
    "desc": "光标插件规范和官方插件"
  },
  {
    "repo": "ruvnet/ruflo",
    "lang": "TypeScript",
    "today": 502,
    "stars": 76475,
    "desc": "🌊 原始代理线束。部署智能多玩家群体，协调自主工作流程，构建对话式人工智能系统。具有自适应记忆、自学习智能、联合、矢量RAG集成和本地Claude Code/Codex/Hermes等功能"
  },
  {
    "repo": "akitaonrails/ai-memory",
    "lang": "Rust",
    "today": 513,
    "stars": 10445,
    "desc": "针对座席编码CLI的长期记忆解决方案，以及促进不同座席供应商之间切换的解决方案"
  },
  {
    "repo": "stablyai/orca",
    "lang": "TypeScript",
    "today": 1146,
    "stars": 96556,
    "desc": "ORCA是与代理团队合作的地方（例如Grok Bot、Claude Code ）。使用您自己的订阅运行任何编码代理。可在桌面、移动和远程运行时使用。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 582,
    "stars": 54556,
    "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/"
  },
  {
    "repo": "debpalash/VoiceStudio",
    "lang": "Python",
    "today": 2098,
    "stars": 75212,
    "desc": "VoiceStudio是开源、完全本地的ElevenLabs替代品--语音克隆、语音设计、视频配音、听写、转录和有声读物创作，支持646种语言。"
  },
  {
    "repo": "android/skills",
    "lang": "Kotlin",
    "today": 381,
    "stars": 8743,
    "desc": "暂无项目简介。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 216509,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 152249,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187642,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 129757,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107440,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70911,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61465,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59837,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49151,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30116,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 301631,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 296143,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 283252,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 181985,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 142217,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 108184,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 64666,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 85393,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 55373,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 58084,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
