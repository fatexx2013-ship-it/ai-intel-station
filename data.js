// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-09）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-09",
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
    "date": "2026-11-09",
    "title": "IT早报 1109：208 万元比亚迪仰望鼎曜限量版车型价格揭晓；曝 ChatGPT 突现封号风波；特斯拉上海工厂零部件本土化率达 98%；央视曝光二手交易“到手刀”乱象...",
    "desc": "“IT早报”时间，大家好，现在是 2026 年 11 月 9 日星期一，今天的重要科技资讯有：1. 208 万元！比亚迪仰望鼎曜「山河鼎韵」限量版车型价格揭晓仰望鼎曜“山河鼎韵”限量版拥有专属外观内饰及高定配置，包含琥珀…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/024/030.htm"
  },
  {
    "date": "2026-11-09",
    "title": "英伟达黄仁勋承认出轨道歉信全文：“我对妻子不忠，伤害了家人，没有任何借口”",
    "desc": "北京时间 11 月 9 日，英伟达 CEO 黄仁勋近日向公司员工发出一封道歉信，承认自己对妻子不忠，并就此向家人、公司员工、董事会及股东公开道歉。黄仁勋在信中表示，自己的行为伤害了妻子和孩子，没有任何借口。他愿意承担全部…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/024/031.htm"
  },
  {
    "date": "2026-11-08",
    "title": "资本正在撤离“世界模型”",
    "desc": "没有永远的夏天",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508466.html"
  },
  {
    "date": "2026-11-07",
    "title": "抢跑DeepSeek！硅谷华人把下一代Agent Harness造出来了！？",
    "desc": "苦单Session久矣，两大Agent玩家不谋而合。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508264.html"
  },
  {
    "date": "2026-11-07",
    "title": "为了去AI味，人类开始主动写烂文章了&#8230;&#8230;",
    "desc": "需要说明的是，这并不意味着不会说人话就一定是人，也不意味着说人话的就一定不是AI.......",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508330.html"
  },
  {
    "date": "2026-11-07",
    "title": "OpenAI新融资到账110亿美元，不及原计划一半",
    "desc": "融资缩水，硅谷投资人也谨慎了",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508344.html"
  },
  {
    "date": "2026-11-07",
    "title": "GitHub不堪重负！OpenAI收购替代品，A社原地自研，马斯克也要搞",
    "desc": "AI写代码太快，基础设施跟不上了",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/508449.html"
  },
  {
    "date": "2026-11-06",
    "title": "科技爱好者周刊（第 418 期）：如果科技停止在21世纪初",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 雄安新区正在建设的雄安大剧院，它的幕墙采…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-418.html"
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
    "repo": "sherlock-project/sherlock",
    "lang": "Python",
    "today": 2373,
    "stars": 103482,
    "desc": "通过社交网络中的用户名查找社交媒体帐户"
  },
  {
    "repo": "dsx-ai-factory/nvke",
    "lang": "Go",
    "today": 345,
    "stars": 846,
    "desc": "NVIDIA Kubernetes引擎(NVKE)。裸机上GPU Kubernetes的管理平面。"
  },
  {
    "repo": "milind-soni/OpenMausBot",
    "lang": "TypeScript",
    "today": 1439,
    "stars": 18245,
    "desc": "使用机器人可以使用的虚拟机的开源Grok机器人替代方案"
  },
  {
    "repo": "anthropics/claude-quickstarts",
    "lang": "Python",
    "today": 32,
    "stars": 19411,
    "desc": "旨在帮助开发人员快速开始使用Claude API构建可部署应用程序的项目集合"
  },
  {
    "repo": "vercel-labs/agent-browser",
    "lang": "Rust",
    "today": 815,
    "stars": 47594,
    "desc": "适用于AI代理的浏览器自动化CLI"
  },
  {
    "repo": "meta/astryx",
    "lang": "TypeScript",
    "today": 875,
    "stars": 16750,
    "desc": "完全可定制和代理就绪的开源设计系统"
  },
  {
    "repo": "anthropics/skills",
    "lang": "Python",
    "today": 792,
    "stars": 189639,
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "google-deepmind/mujoco",
    "lang": "C++",
    "today": 41,
    "stars": 16411,
    "desc": "与Contact的多关节动态。通用物理模拟器。"
  },
  {
    "repo": "ranxianglei/billion-context",
    "lang": "TypeScript",
    "today": 460,
    "stars": 5143,
    "desc": "一个上下文压缩插件，用于长达一个月的单个会话（数十亿令牌） ，小上下文窗口（ 100K上下文就足够了）和令牌节省（令牌减少5倍）。上下文压缩插件月级长会话会话， ， 兼顾小窗口（ 100K上下文足矣 ）省令牌（省 5个倍令牌）。十亿上下文是您所需要的全部"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 225532,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 155006,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187953,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 133834,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108787,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71220,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61752,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60657,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49938,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30561,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 314593,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 318519,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 299712,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 189642,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 144218,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 114127,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 67022,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 94735,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 59237,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 66504,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
