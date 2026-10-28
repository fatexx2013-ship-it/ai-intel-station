// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-28）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-28",
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
    "date": "2026-10-28",
    "title": "IT早报 1028：张一鸣以 6700 亿元刷新中国首富财富纪录；谷歌推最强世界模型 Genie 4；苹果推 M6 芯片 14 寸 MacBook Pro；小米 REDMI K100 手机发布...",
    "desc": "“IT早报”时间，大家好，现在是 2026 年 10 月 28 日星期三，今天的重要科技资讯有：1. 2026 胡润百富榜发布：张一鸣 6700 亿元刷新中国首富财富纪录、DeepSeek 梁文锋首次上榜位列第七胡润研究…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/018/722.htm"
  },
  {
    "date": "2026-10-28",
    "title": "Opera 推出 WebAI 网页标准，支持浏览器本地部署 AI 模型",
    "desc": "IT之家 10 月 28 日消息，浏览器厂商 Opera 推出了一项名为 WebAI 的新 Web 标准，允许用户直接在浏览器中运行 AI 模型，无需依赖云端服务。Opera 表示，WebAI 旨在兼容多种 AI 模型。…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/018/723.htm"
  },
  {
    "date": "2026-10-28",
    "title": "英伟达投资印度初创公司 Simplismart，助力企业用更少 GPU 运行 AI 模型",
    "desc": "IT之家 10 月 28 日消息，随着人工智能热潮持续挤占计算资源，英伟达（Nvidia）参与了印度初创公司 Simplismart 的 1,400 万美元（IT之家注：现汇率约合 9,357.3 万元人民币）融资。本轮…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/018/726.htm"
  },
  {
    "date": "2026-10-28",
    "title": "Pocketpair：我们很乐意探讨让《幻兽帕鲁》登陆任天堂 Switch 2",
    "desc": "IT之家 10 月 28 日消息，当地时间 27 日，据外媒 VGC 报道，《幻兽帕鲁》开发商 Pocketpair CEO 沟部拓郎表示，非常希望未来能将游戏移植到任天堂 Switch 2。2024 年 6 月，在《幻…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/018/727.htm"
  },
  {
    "date": "2026-10-28",
    "title": "甲骨文扩大与英伟达的芯片供应合作，同时引入谷歌 TPU 和 Cerebras 芯片",
    "desc": "IT之家 10 月 28 日消息，甲骨文（Oracle）当地时间周二表示，将扩大与英伟达（Nvidia）的云端 AI 芯片合作，同时进一步推进供应多元化，引入英伟达竞争对手的产品，包括谷歌母公司 Alphabet 旗下的…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/018/728.htm"
  },
  {
    "date": "2026-10-27",
    "title": "刚刚，Anthropic公开335页招股书：史上最大IPO，史上最亏AI公司",
    "desc": "地球最富兄妹俩堂堂来袭！7名联创仍紧握50.1%总投票权",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/505551.html"
  },
  {
    "date": "2026-10-27",
    "title": "钛动科技发布行业首个Pro-Agent, Navos Pro定义结果导向的AI for Work &#124; TGC 2026科技增长大会",
    "desc": "10 月 23 日，以 “ AI is Profitable ” 为主题的 2026 TGC 科技增长大会于广州召开。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/505580.html"
  },
  {
    "date": "2026-10-26",
    "title": "A社联创演讲：AI奇点已来",
    "desc": "所谓奇点，或许是AI跃过人类的那个点。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/505521.html"
  },
  {
    "date": "2026-10-26",
    "title": "OpenAI开始断网训练最强模型：“安全起见”",
    "desc": "模型开始利用GPU缓存聊天？",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/505529.html"
  },
  {
    "date": "2026-10-26",
    "title": "AI时代，一个人能有多大能量？天禧AI × 观猹大会现场实测个人AI跨端协同新体验",
    "desc": "10月23日至25日，以“见证超能发生”为主题的“天禧AI × 观猹大会”在杭州茶叶博览会会议会展中心启幕。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/505539.html"
  }
];

export const models = [
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
  }
];

export const trending = [
  {
    "repo": "elayadesign/ai-design-skills",
    "lang": "—",
    "today": 1395,
    "stars": 9291,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "Nutlope/hallmark",
    "lang": "CSS",
    "today": 2830,
    "stars": 38970,
    "desc": "Claude Code、Cursor和Codex的防AI倾斜设计技能。"
  },
  {
    "repo": "nightly-labs/openbot",
    "lang": "TypeScript",
    "today": 777,
    "stars": 2411,
    "desc": "持久性AI队友的本地首选桌面工作区。使用专用工作区、任务队列、文件共享、浏览器控制和代理间协作运行Codex、Claude和Grok。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 617,
    "stars": 306430,
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "pbakaus/impeccable",
    "lang": "Rust",
    "today": 1449,
    "stars": 90493,
    "desc": "让您的人工智能更好地进行设计的设计语言。"
  },
  {
    "repo": "makecindy/cindy",
    "lang": "TypeScript",
    "today": 1465,
    "stars": 7451,
    "desc": "考虑一下吧。开箱即用的开源AI代理· 想到，就能做到。开源、开箱即用的 AI Agent。"
  },
  {
    "repo": "gitroomhq/postiz-app",
    "lang": "TypeScript",
    "today": 951,
    "stars": 39359,
    "desc": "📨 终极代理社交媒体调度工具 🤖"
  },
  {
    "repo": "affaan-m/ECC",
    "lang": "JavaScript",
    "today": 1165,
    "stars": 290872,
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "HKUDS/DeepTutor",
    "lang": "Python",
    "today": 1598,
    "stars": 45850,
    "desc": "DeepTutor ：终身个性化辅导。https://deeptutor.info/。"
  },
  {
    "repo": "JetBrains/thinkrail",
    "lang": "TypeScript",
    "today": 1204,
    "stars": 3978,
    "desc": "轻量级的真实IDE中带有pi的Vibe代码，可根据您的工作方式自行定制—您需要的Vibe"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 222376,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 153603,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187791,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 131271,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108581,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71038,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61591,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60184,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49520,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30338,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 306431,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 304877,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 290872,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 184247,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 143246,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 111131,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 65692,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 90443,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 56908,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 61493,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
