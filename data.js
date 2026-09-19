// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-19）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-19",
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
    "date": "2026-09-19",
    "title": "巨头喊 AI 刹车，宏碁董事长陈俊圣称不太可能、技术发展只会越来越快",
    "desc": "IT之家 9 月 19 日消息，近期，Anthropic 首席执行官达里奥 · 阿莫迪、OpenAI 首席执行官萨姆 · 奥尔特曼以及特斯拉首席执行官埃隆 · 马斯克相继呼吁，应暂缓最先进人工智能的研发步伐。据台媒经济日…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/004/535.htm"
  },
  {
    "date": "2026-09-19",
    "title": "千万奖池找“鲸锐”！单项奖金200万，只等一个最会用AI讲故事的你",
    "desc": "1000万，把才华送上真正的大舞台",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/492501.html"
  },
  {
    "date": "2026-09-19",
    "title": "Nature：AI重生到1900，这一世抢先爱因斯坦提出光量子",
    "desc": "AI能否提出相对论？",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/492550.html"
  },
  {
    "date": "2026-09-19",
    "title": "27B模型分分钟交付网页，Qwen 3.8还是太能了",
    "desc": "设计、前端一口气全干了，结果后端没来上班",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/492573.html"
  },
  {
    "date": "2026-09-19",
    "title": "马斯克批量收购破产公司ing…世界首富脑子是不一样",
    "desc": "老马想买倒闭公司数据为哪般",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/492661.html"
  },
  {
    "date": "2026-09-19",
    "title": "“留给人类阻止AI的时间不多了”",
    "desc": "AI有可能终结我们所有人",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/492755.html"
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
  },
  {
    "vendor": "Sakana",
    "name": "Fugu Max",
    "date": "2026-09-11",
    "desc": "Fugu Max是Sakana AI的Fugu系列中的性价比模型，上下文 1000k。",
    "url": "https://openrouter.ai/sakana/fugu-max"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.0 Flash VL",
    "date": "2026-09-11",
    "desc": "Ling 3，上下文 131k。",
    "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-vl"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.0 Flash VL (free)",
    "date": "2026-09-11",
    "desc": "Ling 3，上下文 262k。",
    "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-vl:free"
  },
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash",
    "date": "2026-09-10",
    "desc": "DeepSeek V4，上下文 1049k。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash"
  }
];

export const trending = [
  {
    "repo": "cloudflare/security-audit-skill",
    "lang": "JavaScript",
    "today": 3162,
    "stars": 15112,
    "desc": "用于多阶段安全审核的编码代理技能，具有经过独立验证的机器可读结果"
  },
  {
    "repo": "trycua/cua",
    "lang": "HTML",
    "today": 383,
    "stars": 23899,
    "desc": "通过开源驱动程序、跨操作系统车队以及培训、评估和数据生成的基准来扩展计算机使用2.0。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "lang": "JavaScript",
    "today": 547,
    "stars": 96692,
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "coder/coder",
    "lang": "Go",
    "today": 406,
    "stars": 15451,
    "desc": "为开发人员及其代理提供安全的环境"
  },
  {
    "repo": "anthropics/claude-code",
    "lang": "TypeScript",
    "today": 482,
    "stars": 146533,
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Open-Dev-Society/OpenStock",
    "lang": "TypeScript",
    "today": 477,
    "stars": 15726,
    "desc": "OpenStock是昂贵市场平台的开源替代品。实时跟踪价格，设置个性化提醒，并探索详细的公司洞察--为每个人公开构建，永远免费。"
  },
  {
    "repo": "higgsfield-ai/higgsfield",
    "lang": "Jupyter Notebook",
    "today": 325,
    "stars": 4699,
    "desc": "容错、高度可扩展的GPU编排，以及专为训练具有数十亿至数万亿参数的模型而设计的机器学习框架"
  },
  {
    "repo": "docling-project/docling",
    "lang": "Python",
    "today": 94,
    "stars": 66751,
    "desc": "让您的文档为人工智能时代做好准备"
  },
  {
    "repo": "cloudflare/quiche",
    "lang": "Rust",
    "today": 5,
    "stars": 11871,
    "desc": "🥧 QUIC传输协议和HTTP/3的有效实施"
  },
  {
    "repo": "asciimoo/hister",
    "lang": "Go",
    "today": 430,
    "stars": 5098,
    "desc": "您自己的搜索引擎"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 208538,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 146533,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187440,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 125262,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107079,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70496,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61057,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58754,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48352,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29558,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 288691,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 265554,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 262538,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 177117,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 138917,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 96693,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62325,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 67120,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 50879,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 50096,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
