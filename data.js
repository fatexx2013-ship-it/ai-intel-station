// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-17）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-17",
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
    "date": "2026-10-17",
    "title": "Claude 当起“数字考古学家”：不到 30 分钟揭开困扰密码学界 26 年的 NSA 参数来源之谜",
    "desc": "IT之家 10 月 17 日消息，Anthropic 公司昨日（10 月 16 日）发布博文，宣布其内部研究用 Claude 模型用不到 30 分钟，追溯出五条美国国家标准与技术研究院（NIST）标准椭圆曲线的“种子”（…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/014/191.htm"
  },
  {
    "date": "2026-10-17",
    "title": "马斯克要让 AI 帮企业“砍价”：成本效益有望提升 5% 以上",
    "desc": "IT之家 10 月 17 日消息，全球首富埃隆 · 马斯克（Elon Musk）今天（10 月 17 日）在 X 平台发布推文，表示其团队正投入大量资源，开发面向商业场景的专用议价机器人“Hagglebot”，希望借此提…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/014/192.htm"
  },
  {
    "date": "2026-10-17",
    "title": "Anthropic 向美国国会推介 AI 监管草案，仅允许出现严重风险时封锁模型",
    "desc": "IT之家 10 月 17 日消息，据 POLITICO 报道，三名知情人士透露，Anthropic 的代表已悄悄向美国国会山的议员推介了一份法案草案，旨在规范前沿人工智能的安全与防务标准。据悉，目前美国国会正审慎评估如何…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/014/193.htm"
  },
  {
    "date": "2026-10-17",
    "title": "英特尔计划 2028 年面向物理 AI 领域推出 \"Razor Lake AX\" 处理器，平台算力 700 TOPS",
    "desc": "IT之家 10 月 17 日消息，据韩媒 THE ELEC 报道，Intel（英特尔）高级副总裁 조민성 昨日在韩国举行的“半导体驱动人形机器人”大会上表示，该企业计划 2027 年初面向物理 AI 领域推出 \"Nova…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/014/194.htm"
  },
  {
    "date": "2026-10-17",
    "title": "Anthropic 报告：AI 工时已是人类 6 倍，初级程序员岗位骤减，人均雇员创收是 Meta / 谷歌同期的 2 至 4 倍",
    "desc": "IT之家 10 月 17 日消息，人工智能公司 Anthropic 昨日（10 月 16 日）发布报告称，在公司成立约 5 年后，其人均雇员创收已达 Meta Platforms 和谷歌在各自高速增长期的 2 至 4 倍…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/014/195.htm"
  },
  {
    "date": "2026-10-16",
    "title": "科技爱好者周刊（第 415 期）：3D 版《看不见的城市》",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 湖北咸宁梓山湖度假区的美术馆。（via）…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-415.html"
  },
  {
    "date": "2026-10-15",
    "title": "这个双十一，百灵新模型干起活来不烧心",
    "desc": "大模型好不好用，百灵拿成品说话",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503532.html"
  },
  {
    "date": "2026-10-15",
    "title": "2026 TMOT首个AI智能体走进电音现场，让听众成为音乐共创者",
    "desc": "10月17日至18日，顶尖电音节The Magic of Tomorrowland 2026将在上海举行。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503611.html"
  },
  {
    "date": "2026-10-15",
    "title": "量子位智库发布Agent落地报告！拆解企业智能化六大断点，附全链路破局框架",
    "desc": "Agent究竟该如何深入业务毛细血管？",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503614.html"
  },
  {
    "date": "2026-10-15",
    "title": "库克：苹果智能接入阿里千问大模型，10月底在中国发布测试版本",
    "desc": "Siri AI这次不包括在内",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503640.html"
  }
];

export const models = [
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
    "vendor": "Pareto 26.9",
    "name": "pareto-26.9",
    "date": "2026-10-14",
    "desc": "Pareto是一种多模态复合模型，专为研究、编码和代理工作流程而构建，同时在广泛的领域提供前沿水平的性能，上下文 262k。",
    "url": "https://openrouter.ai/unbiased/pareto-26.9"
  },
  {
    "vendor": "LiquidAI",
    "name": "LFM2.5-24B-A2B",
    "date": "2026-10-14",
    "desc": "LFM2，上下文 128k。",
    "url": "https://openrouter.ai/liquid/lfm-2.5-24b-a2b"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Argon",
    "date": "2026-10-14",
    "desc": "Gemini 4 Argon是谷歌的旗舰推理模型，专为复杂软件工程、深度数学和科学问题解决以及自主推理而构建。，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-argon"
  }
];

export const trending = [
  {
    "repo": "anthropics/claude-plugins-official",
    "lang": "Python",
    "today": 1552,
    "stars": 40494,
    "desc": "由Anthropic管理的高质量Claude Code插件的官方目录。"
  },
  {
    "repo": "K-Dense-AI/scientific-agent-skills",
    "lang": "Python",
    "today": 1158,
    "stars": 51465,
    "desc": "将任何AI特工变成AI科学家。首屈一指的科学代理技能库，全球超过25万名科学家使用。177项随时可用的经验证的技能，以及100多个涵盖生物学、化学、医学和药物发现的科学数据库。与Cursor、Claude Code、Codex、Pi、Antigravity和开放Agent Skills标准兼容。"
  },
  {
    "repo": "affaan-m/ECC",
    "lang": "JavaScript",
    "today": 1057,
    "stars": 281458,
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 323,
    "stars": 53466,
    "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/"
  },
  {
    "repo": "mksglu/context-mode",
    "lang": "TypeScript",
    "today": 449,
    "stars": 30213,
    "desc": "人工智能编码代理的上下文窗口优化。沙盒工具输出（减少98 ％ ） ，保持会话内存，并通过MCP +钩子在17个平台上强制路由。"
  },
  {
    "repo": "ruvnet/ruflo",
    "lang": "TypeScript",
    "today": 672,
    "stars": 75610,
    "desc": "🌊 原始代理线束。部署智能多玩家群体，协调自主工作流程，构建对话式人工智能系统。具有自适应记忆、自学习智能、联合、矢量RAG集成和本地Claude Code/Codex/Hermes等功能"
  },
  {
    "repo": "android/skills",
    "lang": "Kotlin",
    "today": 163,
    "stars": 8048,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 973,
    "stars": 300659,
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 282,
    "stars": 11923,
    "desc": "光标插件规范和官方插件"
  },
  {
    "repo": "debpalash/VoiceStudio",
    "lang": "Python",
    "today": 2301,
    "stars": 71075,
    "desc": "VoiceStudio是开源、完全本地的ElevenLabs替代品--语音克隆、语音设计、视频配音、听写、转录和有声读物创作，支持646种语言。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 214342,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 151242,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187614,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 129539,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107411,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70886,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61443,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59774,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49099,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30092,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 300659,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 294056,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 281458,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 181601,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 142023,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 107385,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 64511,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 84475,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 55106,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 57572,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
