// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-06）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-06",
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
    "date": "2026-11-06",
    "title": "22999 元起：苹果首款触屏 MacBook Pro 正式开售，可选 M5 Pro/M5 Max 芯片",
    "desc": "IT之家 11 月 6 日消息，苹果首款触控屏 MacBook Pro（配备 PROLED XDR 显示屏的 MacBook Pro）今日正式开售，定价 22999 元起。基础配置为 M5 Pro 芯片（15 核 CPU…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/020.htm"
  },
  {
    "date": "2026-11-06",
    "title": "5499 元起：苹果 iPad mini 8 开售，A20 Pro 芯片（国补后到手价约 4999 元起）",
    "desc": "IT之家 11 月 6 日消息，苹果 iPad mini（A20 Pro）今日正式开售，也就是大家俗称的“iPad mini 8”。新品起售价为 5499 元，国补后到手价约 4999 元。如果您可以使用教育优惠，国补后…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/021.htm"
  },
  {
    "date": "2026-11-06",
    "title": "12499 元 / 15999 元起：苹果 M6 芯片款 iMac、MacBook Pro 开售",
    "desc": "IT之家 11 月 6 日消息，苹果 M6 芯片款 iMac、MacBook Pro 今日正式开售，起售价分别为 12499 元 / 15999 元，国补后起售价约 10999 元 / 14499 元。如果您能使用教育优…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/022.htm"
  },
  {
    "date": "2026-11-05",
    "title": "英伟达庆祝首款支持 CUDA 显卡 GeForce 8800 GTX 诞生 20 周年，同步推出纪念游戏带 PC 玩家重返 2006 年",
    "desc": "IT之家 11 月 5 日消息，英伟达官方今日庆祝 GeForce 8800 GTX 显卡诞生 20 周年，同步推出一款 Steam 演示游戏，带领 PC 玩家回到 2006 年，一睹这款经典显卡的外貌。据IT之家了解，…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/017.htm"
  },
  {
    "date": "2026-11-05",
    "title": "GPT-Image-2.6全量上线！直出GIF和SVG，6.2 Astra也现身了",
    "desc": "最快6秒出图",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507707.html"
  },
  {
    "date": "2026-11-05",
    "title": "基于本体+知识+Harness+Datat Agent的智能体完整落地链路！",
    "desc": "Data + AI 技术实践巡展 · 上海站",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507696.html"
  },
  {
    "date": "2026-11-05",
    "title": "以“真实工作”检验机器人价值，XROGO在CeMAT ASIA发布机器人到岗计划",
    "desc": "像雇人一样雇机器人",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507767.html"
  },
  {
    "date": "2026-11-05",
    "title": "MIT神作被锤：Astra爆改Qwen权重？就吹吧！",
    "desc": "spaCy作者长文炮轰",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507782.html"
  },
  {
    "date": "2026-11-05",
    "title": "百度开源文心5.5 Flash Base，多基准测试刷新同尺寸模型 SOTA",
    "desc": "11月5日，百度正式开源最新基座模型文心5.5 Flash Base",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507787.html"
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
    "vendor": "ricursiveAI/Ripple-65B-Preview",
    "name": "ripple-65b-preview",
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
  }
];

export const trending = [
  {
    "repo": "NVIDIA/auto-ontology",
    "lang": "Python",
    "today": 2707,
    "stars": 6810,
    "desc": "Auto Ontology是一个Python框架，用于在数据上构建基于图的语义推理层。它为LLM和代理工作流程提供了确定性的查询生成、更好的上下文检索和更可解释的人工智能。"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 2053,
    "stars": 314673,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "garrytan/gstack",
    "lang": "TypeScript",
    "today": 608,
    "stars": 139778,
    "desc": "使用Garry Tan确切的Claude Code设置： 23个自以为是的工具，分别担任首席执行官、设计师、工程经理、发布经理、文档工程师和QA"
  },
  {
    "repo": "Usagi-org/ai-goofish-monitor",
    "lang": "Python",
    "today": 242,
    "stars": 17436,
    "desc": "基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台管理UI。帮助用户从闲鱼海量商品中，找到心仪产品。"
  },
  {
    "repo": "D4Vinci/Scrapling",
    "lang": "Python",
    "today": 1661,
    "stars": 97648,
    "desc": "🕷️ 最好的Web抓取框架，可处理从单个请求到全面爬网的所有内容！不要害羞，在这里加入： https://discord.gg/EMgGbDceNQ并按照这里获取每日提示和技巧： https://x.com/Scrapling_dev"
  },
  {
    "repo": "vercel-labs/agent-desktop",
    "lang": "Rust",
    "today": 2173,
    "stars": 16462,
    "desc": "AI代理的计算机使用CLI"
  },
  {
    "repo": "max-sixty/worktrunk",
    "lang": "Rust",
    "today": 546,
    "stars": 11387,
    "desc": "Worktrunk是用于Git工作树管理的CLI ，专为并行AI代理工作流程而设计"
  },
  {
    "repo": "lz4/lz4",
    "lang": "C",
    "today": 16,
    "stars": 12289,
    "desc": "极快的压缩算法"
  },
  {
    "repo": "google/skills",
    "lang": "Python",
    "today": 199,
    "stars": 22217,
    "desc": "Google产品和技术的代理技能"
  },
  {
    "repo": "vercel-labs/agent-browser",
    "lang": "Rust",
    "today": 181,
    "stars": 45719,
    "desc": "适用于AI代理的浏览器自动化CLI"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 224745,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 154647,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187913,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 133317,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108736,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71183,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61714,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60540,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49853,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30521,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 312858,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 314673,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 297680,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 187663,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 143956,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 113442,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 66708,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 93785,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 58665,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 65159,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
