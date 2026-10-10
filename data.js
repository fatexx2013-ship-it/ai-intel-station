// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-10）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-10",
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
    "date": "2026-10-10",
    "title": "铭凡首款无风扇全闪 AI NAS 机型 S5 将于 10 月中下旬国行开售",
    "desc": "IT之家 10 月 10 日消息，MINISFORUM（铭凡）今日确认，其首款无风扇全闪 AI NAS 机型 S5 将于 10 月中下旬在国行渠道发售。S5 由铝合金机身与鳍片组实现纯被动散热设计，质量 1.8kg。其基…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/011/521.htm"
  },
  {
    "date": "2026-10-10",
    "title": "腾讯元器将于 11 月 9 日停止服务，所创建智能体将不再可用",
    "desc": "IT之家 10 月 10 日消息，腾讯元器 10 月 8 日发布《关于元器平台停止服务通知》，因业务调整，元器平台将于 2026 年 11 月 9 日停止服务。在正式停止服务前，用户仍可正常登录并使用现有智能体；停服生效…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/011/530.htm"
  },
  {
    "date": "2026-10-10",
    "title": "特斯拉FSD，在欧洲被打回原形",
    "desc": "马斯克反而发文道谢？",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502467.html"
  },
  {
    "date": "2026-10-10",
    "title": "Nano Banana终于2.1了！4K直出，中文进步太明显",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502484.html"
  },
  {
    "date": "2026-10-10",
    "title": "24天！Jev估值翻至75亿美元，年度硅谷最爽逆袭了吧",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502492.html"
  },
  {
    "date": "2026-10-10",
    "title": "超清双2亿，掌中电影机，荣耀Magic9 系列正式发布，售价4499元起",
    "desc": "2026年9月28日，荣耀（HONOR）在北京举办荣耀Magic盛典暨荣耀Magic9 系列新品发布会",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502496.html"
  },
  {
    "date": "2026-10-10",
    "title": "西门子将亮相2026工博会：以软硬协同的工业全栈能力，推动物理AI加速落地",
    "desc": "西门子将以更集中、更场景化的方式，展示其工业全栈能力",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502541.html"
  },
  {
    "date": "2026-10-08",
    "title": "科技爱好者周刊（第 414 期）：Jev 决策模型有什么用",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 国产首列数字地铁列车 VELLINK，完…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html"
  },
  {
    "date": "2026-09-18",
    "title": "科技爱好者周刊（第 413 期）：再见了，React Native",
    "desc": "这里记录每周值得分享的科技内容，周五发布。（[通知] 下周五开始的中秋和十一假期，周刊休息。） 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-413.html"
  }
];

export const models = [
  {
    "vendor": "StepFun",
    "name": "Step 5 Preview",
    "date": "2026-10-08",
    "desc": "第5步预览是StepFun代理工作的旗舰模型，基于稀疏的专家混合架构（ 27B活动/600B总参数）构建，上下文 1000k。",
    "url": "https://openrouter.ai/stepfun/step-5-preview"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Haiku 5.5",
    "date": "2026-10-08",
    "desc": "Claude Haiku 3.5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-haiku-5.5"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Haiku 5.5 (batch)",
    "date": "2026-10-08",
    "desc": "Claude Haiku 3.5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-haiku-5.5:batch"
  },
  {
    "vendor": "Google",
    "name": "Nano Banana 2.1",
    "date": "2026-10-06",
    "desc": "纳米香蕉2，上下文 66k。",
    "url": "https://openrouter.ai/google/gemini-nano-banana-2.1"
  },
  {
    "vendor": "Mistral",
    "name": "Mistral Large 4",
    "date": "2026-10-06",
    "desc": "Mistral Large 4是来自Mistral AI的前沿多模态（文本和图像输入）模型，专为推理、编码和代理工作负载而构建，上下文 1049k。",
    "url": "https://openrouter.ai/mistralai/mistral-large-4-0"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.1 Flash",
    "date": "2026-10-02",
    "desc": "Ling 3，上下文 262k。",
    "url": "https://openrouter.ai/inclusionai/ling-3.1-flash"
  },
  {
    "vendor": "Apodex",
    "name": "Apodex 1.1 Mini (free)",
    "date": "2026-10-02",
    "desc": "Apodex 1，上下文 262k。",
    "url": "https://openrouter.ai/apodex/apodex-1.1-mini:free"
  },
  {
    "vendor": "Pareto 26.10 Preview",
    "name": "pareto-26.10-preview",
    "date": "2026-10-01",
    "desc": "Pareto是一种多模态复合模型，专为研究、编码和代理工作流程而构建，同时在广泛的领域提供前沿水平的性能，上下文 1049k。",
    "url": "https://openrouter.ai/unbiased/pareto-26.10-preview"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Sol Pro",
    "date": "2026-09-30",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Sol Pro (batch)",
    "date": "2026-09-30",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol-pro:batch"
  }
];

export const trending = [
  {
    "repo": "morluto/rea",
    "lang": "TypeScript",
    "today": 25784,
    "stars": 63759,
    "desc": "使用代理对任何内容进行反向工程，从应用行为到本机二进制文件。"
  },
  {
    "repo": "boykopovar/AnyPS5",
    "lang": "C++",
    "today": 5831,
    "stars": 25084,
    "desc": "用于自动将PS5可执行文件移植到Linux和Windows的工具"
  },
  {
    "repo": "storytold/artcraft",
    "lang": "Rust",
    "today": 3217,
    "stars": 13280,
    "desc": "ArtCraft是艺术家、设计师和电影制作人的特意制作引擎"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 1189,
    "stars": 48580,
    "desc": "Claude Code、Codex、GitHub Copilot、Factory Droid和Pi的编辑图设计。44种图类型。独立的HTML + SVG。没有阴影，没有美人鱼粪便。"
  },
  {
    "repo": "mksglu/context-mode",
    "lang": "TypeScript",
    "today": 178,
    "stars": 26102,
    "desc": "人工智能编码代理的上下文窗口优化。沙盒工具输出（减少98 ％ ） ，保持会话内存，并通过MCP +钩子在17个平台上强制路由。"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 1737,
    "stars": 283858,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "flutter/flutter",
    "lang": "Dart",
    "today": 39,
    "stars": 179333,
    "desc": "Flutter可以轻松快速地为移动设备及其他设备构建漂亮的应用程序"
  },
  {
    "repo": "tensorflow/tensorflow",
    "lang": "C++",
    "today": 24,
    "stars": 200619,
    "desc": "面向所有人的开源机器学习框架"
  },
  {
    "repo": "hugohe3/ppt-master",
    "lang": "Python",
    "today": 372,
    "stars": 59102,
    "desc": "人工智能将文档或主题转换为真实的原生PowerPoint幻灯片，包括原生形状、转场和动画、数据支持的图表和表格、演讲者笔记中的音频旁白，以及对您自己的.pptx模板的支持。· by Hugo He"
  },
  {
    "repo": "pytorch/pytorch",
    "lang": "Python",
    "today": 81,
    "stars": 104053,
    "desc": "具有强GPU加速的Python中的张量和动态神经网络"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 212497,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 150001,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187507,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 128516,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107273,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70790,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61342,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59529,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48924,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29951,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 297120,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 283859,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 276288,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 180288,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 141085,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 104361,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 63884,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 81550,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 54014,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 55389,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
