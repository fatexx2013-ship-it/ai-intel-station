// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-07）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-07",
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
    "date": "2026-11-07",
    "title": "苹果、英伟达等科技公司面临潜在国会调查，曾在特朗普白宫宴会捐款 2500 万美元",
    "desc": "IT之家 11 月 7 日消息，路透社昨日报道称，即将接任美国参议院常设调查小组委员会主席的民主党参议员理查德・布卢门撒尔（Richard Blumenthal），已经要求苹果、Meta、谷歌、英伟达、亚马逊和微软等参与…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/620.htm"
  },
  {
    "date": "2026-11-06",
    "title": "科技爱好者周刊（第 418 期）：如果科技停止在21世纪初",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 雄安新区正在建设的雄安大剧院，它的幕墙采…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-418.html"
  },
  {
    "date": "2026-11-06",
    "title": "香港金融科技周 x StartmeupHK 2026主论坛：以「金融+」、「AI+」及全球拓展开拓新机遇",
    "desc": "香港金融科技周 x StartmeupHK 2026踏入第11届",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507988.html"
  },
  {
    "date": "2026-11-06",
    "title": "99.4%登顶全球第一！这个中国AI师承世界冠军",
    "desc": "一举刷新「AI安全世界杯」CyberGym世界纪录",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508107.html"
  },
  {
    "date": "2026-11-06",
    "title": "从RSI、Agent、Physical AI到整个系统栈，2026 奇点智能技术大会最新日程公布！",
    "desc": "11 月 20—21 日，2026 奇点智能技术大会将在北京万达文华酒店举行。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508143.html"
  },
  {
    "date": "2026-11-06",
    "title": "一边赛博修仙，一边卖家电！AI短剧开始冲双11业绩了？",
    "desc": "挑战商业视频的高难度场景",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508118.html"
  },
  {
    "date": "2026-11-06",
    "title": "DeepSeek带火稀疏计算，国产芯片公司加速突围：这家公司又融近10亿",
    "desc": "Q3营收实现数倍增长",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508155.html"
  },
  {
    "date": "2026-10-30",
    "title": "科技爱好者周刊（第 417 期）：不要让 AI 代表你",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 四川宜宾市的青少年发展中心，建筑中庭的透…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-417.html"
  }
];

export const models = [
  {
    "vendor": "LiquidAI",
    "name": "LFM3-1.7B",
    "date": "2026-11-07",
    "desc": "紧凑型1，上下文 262k。",
    "url": "https://openrouter.ai/liquid/lfm-3-1.7b"
  },
  {
    "vendor": "LiquidAI",
    "name": "LFM3-1.7B (free)",
    "date": "2026-11-07",
    "desc": "紧凑型1，上下文 262k。",
    "url": "https://openrouter.ai/liquid/lfm-3-1.7b:free"
  },
  {
    "vendor": "Google",
    "name": "Gemini Omni 1.2 Flash",
    "date": "2026-11-06",
    "desc": "Gemini Omni 1，上下文 131k。",
    "url": "https://openrouter.ai/google/gemini-omni-1.2-flash"
  },
  {
    "vendor": "Auto Router",
    "name": "auto",
    "date": "2026-11-05",
    "desc": "Auto是OpenRouter的旗舰型号路由器，专为通用用途而打造，上下文 2000k。",
    "url": "https://openrouter.ai/openrouter/auto"
  },
  {
    "vendor": "Auto Code",
    "name": "auto-code",
    "date": "2026-11-05",
    "desc": "Auto Code是OpenRouter专为编码代理和线束构建的路由器，上下文 2000k。",
    "url": "https://openrouter.ai/openrouter/auto-code"
  },
  {
    "vendor": "Google",
    "name": "Gemini Omni 1.1 Flash",
    "date": "2026-11-05",
    "desc": "Gemini Omni 1，上下文 131k。",
    "url": "https://openrouter.ai/google/gemini-omni-1.1-flash"
  },
  {
    "vendor": "Ricursive",
    "name": "Ripple 65B Preview",
    "date": "2026-11-05",
    "desc": "Ripple-65B-由ricursiveAI预览，这是一款带有本机工具调用的65B型号，在BF16中提供，上下文 1049k。",
    "url": "https://openrouter.ai/ricursiveai/ripple-65b-preview"
  },
  {
    "vendor": "Tencent",
    "name": "Hy4",
    "date": "2026-11-04",
    "desc": "正式发布的Hy4对Hy4 Preview进行了全面和实质性的改进，在代理能力和，上下文 1049k。",
    "url": "https://openrouter.ai/tencent/hy4"
  },
  {
    "vendor": "Crouton Alpha",
    "name": "crouton-alpha",
    "date": "2026-11-03",
    "desc": "Crouton Alpha是一个轻量级模型，专为可扩展的编码、代理和多模式工作流程而构建，上下文 1049k。",
    "url": "https://openrouter.ai/stealth/crouton-alpha"
  },
  {
    "vendor": "Z.ai",
    "name": "GLM 5.3 FlashX Legal",
    "date": "2026-11-02",
    "desc": "GLM-5，上下文 1049k。",
    "url": "https://openrouter.ai/z-ai/glm-5.3-flashx-legal"
  }
];

export const trending = [
  {
    "repo": "zed-industries/zed",
    "lang": "Rust",
    "today": 306,
    "stars": 93624,
    "desc": "以思维速度编写代码– Zed是Atom和Tree-sitter创建者的高性能多人代码编辑器。"
  },
  {
    "repo": "NVIDIA/auto-ontology",
    "lang": "Python",
    "today": 2015,
    "stars": 9024,
    "desc": "Auto Ontology是一个Python框架，用于在数据上构建基于图的语义推理层。它为LLM和代理工作流程提供了确定性的查询生成、更好的上下文检索和更可解释的人工智能。"
  },
  {
    "repo": "rails/rails",
    "lang": "Ruby",
    "today": 142,
    "stars": 59025,
    "desc": "Ruby on Rails"
  },
  {
    "repo": "mpv-player/mpv",
    "lang": "C",
    "today": 37,
    "stars": 37874,
    "desc": "🎥 命令行媒体播放器"
  },
  {
    "repo": "rust-lang/rust",
    "lang": "Rust",
    "today": 192,
    "stars": 121446,
    "desc": "让每个人都能构建可靠、高效的软件。"
  },
  {
    "repo": "react/react",
    "lang": "JavaScript",
    "today": 248,
    "stars": 252254,
    "desc": "用于Web和本机用户界面的库。"
  },
  {
    "repo": "angular/angular",
    "lang": "TypeScript",
    "today": 135,
    "stars": 101359,
    "desc": "放心交付网络应用 🚀"
  },
  {
    "repo": "symfony/symfony",
    "lang": "PHP",
    "today": 128,
    "stars": 31428,
    "desc": "Symfony PHP框架"
  },
  {
    "repo": "prometheus/prometheus",
    "lang": "Go",
    "today": 148,
    "stars": 67180,
    "desc": "Prometheus监控系统和时间序列数据库。"
  },
  {
    "repo": "google/skills",
    "lang": "Python",
    "today": 534,
    "stars": 22834,
    "desc": "Google产品和技术的代理技能"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 225068,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 154804,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187927,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 133486,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108754,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71201,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61736,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60588,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49887,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30534,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 313606,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 316713,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 298591,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 188173,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 144044,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 113730,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 66855,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 94198,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 58927,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 65647,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
