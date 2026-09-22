// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-22）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-22",
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
    "likes": 42,
    "favorites": 18
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
    "date": "2026-09-22",
    "title": "浪潮信息发布元脑 SD200 Ultra 超节点：单机承载 2.8 万亿参数 Kimi K3，Token 时延首次突破 5.85 毫秒",
    "desc": "IT之家 9 月 22 日消息，在昨日的 2026 人工智能计算大会（AICC2026）上，浪潮信息宣布推出元脑 SD200 Ultra 超节点 AI 服务器与元脑 HC2000 多元算力机组。据官方介绍，元脑 SD20…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/005/504.htm"
  },
  {
    "date": "2026-09-22",
    "title": "IT早报 0922：闲鱼回应“媒体报道色情引流”；5499 元起 vivo X500 系列手机发布；被质疑“偷传代码”后智谱 ZCode 开源；AMD 市值历史首次突破 1 万亿美元...",
    "desc": "“IT早报”时间，大家好，现在是 2026 年 9 月 22 日星期二，今天的重要科技资讯有：1. 闲鱼回应“媒体报道色情引流的情况”：成立专项小组严打色情引流，呼吁各平台联合行动闲鱼被曝涉及色情引流的相关话题内容 9 …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/005/506.htm"
  },
  {
    "date": "2026-09-21",
    "title": "GPT-6 Astra开进机器人身体！清华联手无问芯穹等开源RPent",
    "desc": "在物理世界真正干活的具身智能体",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/493218.html"
  },
  {
    "date": "2026-09-21",
    "title": "国产数据库跑出AI新能力！OceanBase登顶国际Data Agent榜单",
    "desc": "OceanBase团队提交的Data Agent方案登顶国际数据智能体基准Data Agent Benchmark",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/493231.html"
  },
  {
    "date": "2026-09-21",
    "title": "长三角安全人工智能安徽省实验室发布星界、星驭、星鉴三大AI安全解决方案",
    "desc": "9月19日，第一届中国网络空间安全大会（CCSC 2026）的高水平专题论坛在安徽合肥正式举办。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/493235.html"
  },
  {
    "date": "2026-09-21",
    "title": "啊啊啊GPT-6 Astra这么不安全！这次马斯克都瘫坐了",
    "desc": "97%尝试危险行为",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/493241.html"
  },
  {
    "date": "2026-09-21",
    "title": "SkyProduction天工工作台中秋国庆特惠第二波：Seedance 2.5 720P 低至 0.27 元/秒，全网地板价！",
    "desc": "9月15日，SkyProduction（天工工作台）中秋国庆折上折活动正式开启！",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/493268.html"
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
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Pro-UltraSpeed",
    "date": "2026-09-22",
    "desc": "MiMo-V2，上下文 1049k。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-pro-ultraspeed"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Flash",
    "date": "2026-09-22",
    "desc": "MiMo-V2，上下文 1049k。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-flash"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Pro",
    "date": "2026-09-22",
    "desc": "MiMo-V2，上下文 1049k。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-pro"
  },
  {
    "vendor": "SpaceXAI",
    "name": "Grok 4.7",
    "date": "2026-09-22",
    "desc": "Grok 4，上下文 500k。",
    "url": "https://openrouter.ai/x-ai/grok-4.7"
  },
  {
    "vendor": "PrismML",
    "name": "Ternary Bonsai 2 27B",
    "date": "2026-09-19",
    "desc": "Bonsai 2 27B是衍生自Qwen3的PrismML的27B参数推理模型，上下文 262k。",
    "url": "https://openrouter.ai/prism-ml/ternary-bonsai-2-27b"
  },
  {
    "vendor": "Z.ai",
    "name": "GLM 5.3 FlashX",
    "date": "2026-09-18",
    "desc": "GLM-5，上下文 1049k。",
    "url": "https://openrouter.ai/z-ai/glm-5.3-flashx"
  },
  {
    "vendor": "Pareto",
    "name": "pareto",
    "date": "2026-09-18",
    "desc": "Pareto是一种多模态复合模型，专为研究、编码和代理工作流程而构建，同时在广泛的领域提供前沿水平的性能，上下文 262k。",
    "url": "https://openrouter.ai/unbiased/pareto"
  },
  {
    "vendor": "Inference.net",
    "name": "Schematron V2 Turbo",
    "date": "2026-09-12",
    "desc": "Schematron V2 Turbo是来自Inference的3B参数HTML到JSON提取模型，上下文 128k。",
    "url": "https://openrouter.ai/inference-net/schematron-v2-turbo"
  },
  {
    "vendor": "Inference.net",
    "name": "Schematron V2 Small",
    "date": "2026-09-12",
    "desc": "Schematron V2 Small是一个来自Inference的3B参数HTML到JSON提取模型，上下文 128k。",
    "url": "https://openrouter.ai/inference-net/schematron-v2-small"
  },
  {
    "vendor": "Sakana",
    "name": "Fugu Ultra v2",
    "date": "2026-09-11",
    "desc": "Fugu Ultra v2是Sakana AI的Fugu系列中性能更高的型号，上下文 1000k。",
    "url": "https://openrouter.ai/sakana/fugu-ultra-v2"
  }
];

export const trending = [
  {
    "repo": "BuilderIO/agent-native",
    "lang": "TypeScript",
    "today": 607,
    "stars": 5876,
    "desc": "构建代理应用的框架"
  },
  {
    "repo": "trycua/cua",
    "lang": "HTML",
    "today": 609,
    "stars": 25683,
    "desc": "通过开源驱动程序、跨操作系统车队以及培训、评估和数据生成的基准来扩展计算机使用2.0。"
  },
  {
    "repo": "Open-Dev-Society/OpenStock",
    "lang": "TypeScript",
    "today": 843,
    "stars": 17697,
    "desc": "OpenStock是昂贵市场平台的开源替代品。实时跟踪价格，设置个性化提醒，并探索详细的公司洞察--为每个人公开构建，永远免费。"
  },
  {
    "repo": "akitaonrails/ai-memory",
    "lang": "Rust",
    "today": 217,
    "stars": 7660,
    "desc": "针对座席编码CLI的长期记忆解决方案，以及促进不同座席供应商之间切换的解决方案"
  },
  {
    "repo": "coder/coder",
    "lang": "Go",
    "today": 461,
    "stars": 16411,
    "desc": "为开发人员及其代理提供安全的环境"
  },
  {
    "repo": "anthropics/financial-services",
    "lang": "Python",
    "today": 425,
    "stars": 35808,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "cloudflare/quiche",
    "lang": "Rust",
    "today": 69,
    "stars": 12340,
    "desc": "🥧 QUIC传输协议和HTTP/3的有效实施"
  },
  {
    "repo": "mvt-project/mvt",
    "lang": "Python",
    "today": 177,
    "stars": 13575,
    "desc": "MVT （移动验证工具包）有助于对移动设备进行取证，以发现潜在泄露的迹象。"
  },
  {
    "repo": "zhouxiaoka/autoclip",
    "lang": "Python",
    "today": 266,
    "stars": 8213,
    "desc": "AutoClip : AI-powered video clipping and highlight generation · 一款智能高光提取与剪辑的二创工具"
  },
  {
    "repo": "ruanyf/weekly",
    "lang": "—",
    "today": 221,
    "stars": 103912,
    "desc": "科技爱好者周刊，每周五发布"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 209151,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 147465,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187481,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 125751,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107120,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70544,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61099,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58876,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48461,
    "lang": "Python",
    "desc": "Ultra-lightweight, open-source, self-hosted personal AI agent framework in Python with WebUI, tools, memory, MCP, multi-agent workflows, automation, and chat apps"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29618,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 289719,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 267143,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 264748,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 177476,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 139319,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 98133,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62565,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 69103,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 51103,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 51073,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
