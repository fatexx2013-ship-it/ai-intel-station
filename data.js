// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-03）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-03",
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
    "date": "2026-11-03",
    "title": "OpenAI Tibo“28 天更新挑战”以两次重置收尾，共 14 天发放 Codex / ChatGPT Work 额度重置",
    "desc": "IT之家 11 月 3 日消息，OpenAI Codex 与 ChatGPT Work 团队负责人 Thibault Sottiaux（Tibo）发起的「28 天更新挑战」已于 11 月 2 日正式结束。这项挑战最终以 …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/021/343.htm"
  },
  {
    "date": "2026-11-03",
    "title": "豪掷 457.65 亿美元：苹果 2026 财年研发费用同比增 32% 创历史新高，加码 AI 投入",
    "desc": "IT之家 11 月 3 日消息，科技媒体 9to5Mac 今天（11 月 3 日）发布博文，报道称基于官方披露数据，2026 财年（2025 年 9 月 28 日～2026 年 9 月 26 日）第四财季（2026 年 …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/021/351.htm"
  },
  {
    "date": "2026-11-03",
    "title": "OpenAI 下一代 GPT-6.2 Astra 正灰度测试，Codex 用量统计中已单独列出",
    "desc": "IT之家 11 月 3 日消息，经大量用户反馈，OpenAI 下一代模型 GPT-6.2 Astra 疑似已进入小范围测试，部分 Codex 用户的使用量统计中已经出现独立模型标识「gpt-6.2-astra」。不过，截…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/021/352.htm"
  },
  {
    "date": "2026-11-02",
    "title": "小米开源了个150元的AI小玩意，火到配件都涨价了",
    "desc": "能指挥Agent干活，还能控制智能家居",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507107.html"
  },
  {
    "date": "2026-11-02",
    "title": "央视严选「中国AI创业十骏」：唯一AI制药公司是清华系",
    "desc": "模型管线双驱动",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507150.html"
  },
  {
    "date": "2026-11-02",
    "title": "OpenAI重写大模型法则，第一条：忠于人类！！",
    "desc": "新版“机器人三定律”。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507225.html"
  },
  {
    "date": "2026-11-02",
    "title": "从“能调用”到“敢托付”：仪电智算云 Token 工厂的三重可信",
    "desc": "上海仪电与上海创智学院联合发布“飞轮转・万象生”仪电智算数链生态。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507260.html"
  },
  {
    "date": "2026-11-02",
    "title": "顶级AI翻车的活儿，被这个新出的免费国产AI接住了！",
    "desc": "商汤SenseNova 6.8 Flash",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507277.html"
  },
  {
    "date": "2026-10-30",
    "title": "科技爱好者周刊（第 417 期）：不要让 AI 代表你",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 四川宜宾市的青少年发展中心，建筑中庭的透…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-417.html"
  },
  {
    "date": "2026-10-23",
    "title": "科技爱好者周刊（第 416 期）：编程已经面目全非",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 本周启用的上海大歌剧院内部装修。（via…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-416.html"
  }
];

export const models = [
  {
    "vendor": "Z.ai",
    "name": "GLM 5.3 FlashX Legal",
    "date": "2026-11-02",
    "desc": "GLM-5，上下文 1049k。",
    "url": "https://openrouter.ai/z-ai/glm-5.3-flashx-legal"
  },
  {
    "vendor": "Particle AI",
    "name": "Particle-1",
    "date": "2026-10-29",
    "desc": "Particle-1是来自Particle AI的代理编码模型，在DeepSeek V4上经过后期训练，上下文 1049k。",
    "url": "https://openrouter.ai/particle-ai/particle-1"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Terra Pro",
    "date": "2026-10-27",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-terra-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Terra Pro (batch)",
    "date": "2026-10-27",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-terra-pro:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Terra",
    "date": "2026-10-27",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-terra"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Terra (batch)",
    "date": "2026-10-27",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-terra:batch"
  },
  {
    "vendor": "MoonshotAI",
    "name": "Kimi K3.1 Pro",
    "date": "2026-10-24",
    "desc": "Kimi K3，上下文 1049k。",
    "url": "https://openrouter.ai/moonshotai/kimi-k3.1-pro"
  },
  {
    "vendor": "Recursive",
    "name": "Flint (free)",
    "date": "2026-10-22",
    "desc": "Flint是来自递归的开放式专家混合模型，大约有2个，上下文 262k。",
    "url": "https://openrouter.ai/recursive/flint-v1.0:free"
  },
  {
    "vendor": "MiniMax",
    "name": "MiniMax M3.1 Flash",
    "date": "2026-10-19",
    "desc": "MiniMax-M3，上下文 1049k。",
    "url": "https://openrouter.ai/minimax/minimax-m3.1-flash"
  },
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash 1017",
    "date": "2026-10-17",
    "desc": "DeepSeek V4，上下文 1049k。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017"
  }
];

export const trending = [
  {
    "repo": "vercel-labs/agent-desktop",
    "lang": "Rust",
    "today": 2275,
    "stars": 10092,
    "desc": "AI代理的计算机使用CLI"
  },
  {
    "repo": "thedotmack/claude-mem",
    "lang": "TypeScript",
    "today": 1803,
    "stars": 110838,
    "desc": "每个座席跨会话的持久上下文–捕获座席在会话期间执行的所有操作，使用AI对其进行压缩，并将相关上下文注入到未来的会话中。适用于Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode等"
  },
  {
    "repo": "D4Vinci/Scrapling",
    "lang": "Python",
    "today": 706,
    "stars": 93040,
    "desc": "🕷️ 最好的Web抓取框架，可处理从单个请求到全面爬网的所有内容！不要害羞，在这里加入： https://discord.gg/EMgGbDceNQ并按照这里获取每日提示和技巧： https://x.com/Scrapling_dev"
  },
  {
    "repo": "hyprwm/Hyprland",
    "lang": "C++",
    "today": 509,
    "stars": 39985,
    "desc": "Hyprland是一款独立的、高度可定制的动态平铺Wayland合成器，不会牺牲外观。"
  },
  {
    "repo": "Donchitos/Claude-Code-Game-Studios",
    "lang": "Shell",
    "today": 1379,
    "stars": 33662,
    "desc": "将Claude Code变成一个完整的游戏开发工作室--49个人工智能代理、72个工作流程技能，以及一个完整的协调系统，反映了真实的工作室层次结构。"
  },
  {
    "repo": "FlashML-org/FreeToken",
    "lang": "Python",
    "today": 653,
    "stars": 16140,
    "desc": "FreeToken将数据中心规模的模型提供给您的桌面。在本地快速高效地运行大规模模型。"
  },
  {
    "repo": "pingdotgg/t3code",
    "lang": "TypeScript",
    "today": 3229,
    "stars": 42157,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "shiyu-coder/Kronos",
    "lang": "Python",
    "today": 857,
    "stars": 46042,
    "desc": "Kronos ：金融市场语言的基础模型"
  },
  {
    "repo": "kornia/kornia",
    "lang": "Python",
    "today": 412,
    "stars": 12161,
    "desc": "用于空间AI的🐍几何计算机视觉库"
  },
  {
    "repo": "JustVugg/colibri",
    "lang": "C",
    "today": 675,
    "stars": 46634,
    "desc": "在您已经拥有的硬件上运行前沿MoE模型—纯C ，零DEPS ，从磁盘流式传输的专家。微型引擎，超大型号。 🐦"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 224135,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 154311,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187885,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 132903,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108685,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71135,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61682,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60432,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49771,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30463,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 311290,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 310321,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 295724,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 186800,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 143763,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 112841,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 66381,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 92771,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 58122,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 64049,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
