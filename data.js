// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-10）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-10",
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
    "date": "2026-11-10",
    "title": "黄仁勋出轨丑闻发酵，英伟达市值一夜蒸发逾 1900 亿美元",
    "desc": "IT之家 11 月 10 日消息，北京时间 11 月 10 日，美股科技股全线收涨，英伟达逆势大跌，盘初一度跌 8.8%。截至收盘，英伟达跌幅收窄至 4.27%，股价报 178.67 美元（IT之家注：现汇率约合 1,1…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/024/722.htm"
  },
  {
    "date": "2026-11-10",
    "title": "机械革命大师之路 X10 NVIDIA RTX Spark 新品发布会定档 11 月 19 日",
    "desc": "IT之家 11 月 10 日消息，机械革命宣布，大师之路 X10 NVIDIA RTX Spark 新品发布会定档 11 月 19 日。当想象与强大算力相遇方寸之间，未来就此展开机械革命大师之路 X10，让 AI 触手可…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/024/726.htm"
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
    "vendor": "Thinking Machines",
    "name": "Inkling 2 Small (free)",
    "date": "2026-11-10",
    "desc": "Inkling 2 Small是Thinking Machines Lab的多模态专家混合推理模型，总共有594B个活动参数，上下文 1049k。",
    "url": "https://openrouter.ai/thinkingmachines/inkling-2-small:free"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Fable 5.2",
    "date": "2026-11-10",
    "desc": "克劳德寓言5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-fable-5.2"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Fable 5.2 (batch)",
    "date": "2026-11-10",
    "desc": "克劳德寓言5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-fable-5.2:batch"
  },
  {
    "vendor": "Meta",
    "name": "Muse Ember",
    "date": "2026-11-10",
    "desc": "Muse Ember是Meta中最小和最有效的模型，专为复杂的推理执行和工作代理全天重复而设计：工具调用，，上下文 1049k。",
    "url": "https://openrouter.ai/meta/muse-ember"
  },
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
  }
];

export const trending = [
  {
    "repo": "anthropics/skills",
    "lang": "Python",
    "today": 1038,
    "stars": 191159,
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "meta/astryx",
    "lang": "TypeScript",
    "today": 3278,
    "stars": 20412,
    "desc": "完全可定制和代理就绪的开源设计系统"
  },
  {
    "repo": "sherlock-project/sherlock",
    "lang": "Python",
    "today": 4267,
    "stars": 107356,
    "desc": "通过社交网络中的用户名查找社交媒体帐户"
  },
  {
    "repo": "google-deepmind/mujoco",
    "lang": "C++",
    "today": 574,
    "stars": 16972,
    "desc": "与Contact的多关节动态。通用物理模拟器。"
  },
  {
    "repo": "anthropics/claude-quickstarts",
    "lang": "Python",
    "today": 551,
    "stars": 20080,
    "desc": "旨在帮助开发人员快速开始使用Claude API构建可部署应用程序的项目集合"
  },
  {
    "repo": "garrytan/gbrain",
    "lang": "TypeScript",
    "today": 216,
    "stars": 32223,
    "desc": "Garry's Opinionated OpenClaw/Hermès Agent Brain"
  },
  {
    "repo": "vercel-labs/agent-browser",
    "lang": "Rust",
    "today": 916,
    "stars": 48590,
    "desc": "适用于AI代理的浏览器自动化CLI"
  },
  {
    "repo": "ruvnet/RuView",
    "lang": "Rust",
    "today": 172,
    "stars": 103543,
    "desc": "π RuView将商用WiFi信号转化为实时空间智能、生命体征监测和存在检测--所有这些都无需一个像素的视频。"
  },
  {
    "repo": "ZhuLinsen/daily_stock_analysis",
    "lang": "Python",
    "today": 506,
    "stars": 69028,
    "desc": "LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs."
  },
  {
    "repo": "homeassistant-ai/ha-mcp",
    "lang": "Python",
    "today": 31,
    "stars": 6065,
    "desc": "使用Claude、ChatGPT和其他AI助手配置和自动化Home Assistant。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 225699,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 155109,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187973,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 134481,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108746,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71233,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61765,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60699,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49980,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30589,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 315215,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 319867,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 300285,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 191161,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 144315,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 114601,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 67143,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 95100,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 59437,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 67164,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
