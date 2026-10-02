// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-02）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-02",
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
    "date": "2026-10-02",
    "title": "加州检察长向 OpenAI 发出传票，调查 AI 网络安全风险",
    "desc": "IT之家 10 月 2 日消息，据路透社今天（2 日）凌晨报道，加利福尼亚州总检察长罗布 · 邦塔办公室宣布，邦塔本人已向 OpenAI 发出调查传票，要求其就 AI 模型涉及的网络安全事件和风险提供更多信息。邦塔上个月…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/009/204.htm"
  },
  {
    "date": "2026-10-02",
    "title": "古尔曼：苹果首款智能家居中枢支持 AI 面部识别，为家人切换呈现专属内容",
    "desc": "IT之家 10 月 2 日消息，在首期 Power On 播客节目中，彭博社的马克 · 古尔曼（Mark Gurman）爆料称，苹果公司首款智能家居中枢（Home Hub）将采用 AI 面部识别，会判断当前家庭成员并显示…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/009/206.htm"
  },
  {
    "date": "2026-10-02",
    "title": "苹果首款 AI 智能安防摄像头曝光：金属圆柱造型，不录不存视频、仅推送文本提醒",
    "desc": "IT之家 10 月 2 日消息，在首期 Power On 播客节目中，彭博社的马克 · 古尔曼（Mark Gurman）爆料称，苹果正筹备推出家用智能摄像头（代号为 J450），将配套协同苹果首款智能家居中枢（Home …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/009/208.htm"
  },
  {
    "date": "2026-10-02",
    "title": "索尼 PlayStation 为标准版 PS5 游戏主机带来轻量级 AI 超分辨率技术 QSSR",
    "desc": "IT之家 10 月 2 日消息，Sony（索尼）PlayStation 官方当地时间 1 日宣布为标准版 PS5 游戏主机推出基于人工智能的超分辨率 QSSR。该技术率先在《漫威金刚狼》《羊蹄山之魂》上得到支持。QSSR…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/009/210.htm"
  },
  {
    "date": "2026-10-01",
    "title": "谷歌Gemini 4突然发布！RSI加持，GPT和Opus都让让",
    "desc": "价格只有Astra一半",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/499663.html"
  },
  {
    "date": "2026-10-01",
    "title": "何恺明团队新作：看猫片就能学会ARC挑战",
    "desc": "用ImageNet训练encoder",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/499812.html"
  },
  {
    "date": "2026-09-30",
    "title": "Anthropic，你是来给智谱打广告的吧！",
    "desc": "实测说GLM-5.3很强",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/499597.html"
  },
  {
    "date": "2026-09-30",
    "title": "直播回顾：工业AI的下一个机会在哪？",
    "desc": "什么样的AI才适合工业现场？企业真正开始做工业AI时，又该从哪里下手？",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/499605.html"
  },
  {
    "date": "2026-09-30",
    "title": "OpenAI推理之父最新访谈！数学只是多智能体时代的开胃菜",
    "desc": "千禧年难题的突破，10000个Agent最多占了10%的功劳。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/499654.html"
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
    "name": "GPT-6.1 Sol",
    "date": "2026-09-30",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Sonnet 5.5",
    "date": "2026-09-29",
    "desc": "克劳德十四行诗5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-sonnet-5.5"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Sonnet 5.5 (batch)",
    "date": "2026-09-29",
    "desc": "克劳德十四行诗5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-sonnet-5.5:batch"
  },
  {
    "vendor": "TypeSafe",
    "name": "Jev Router",
    "date": "2026-09-26",
    "desc": "Jev Router为每个请求选择最佳模型和推理工作，平衡质量、速度和成本，上下文 1000k。",
    "url": "https://openrouter.ai/typesafe/jev-router"
  },
  {
    "vendor": "Perceptron",
    "name": "Perceptron Mk1.5",
    "date": "2026-09-26",
    "desc": "感知器Mk1，上下文 37k。",
    "url": "https://openrouter.ai/perceptron/perceptron-mk1.5"
  },
  {
    "vendor": "Fireworks",
    "name": "Ember-1",
    "date": "2026-09-24",
    "desc": "Ember-1是Fireworks Research的专业推理模型，基于[Kimi K3] (https://openrouter，上下文 1049k。",
    "url": "https://openrouter.ai/fireworks/ember-1"
  },
  {
    "vendor": "Z.ai",
    "name": "GLM 5.3 Prime",
    "date": "2026-09-24",
    "desc": "GLM-5，上下文 1000k。",
    "url": "https://openrouter.ai/z-ai/glm-5.3-prime"
  }
];

export const trending = [
  {
    "repo": "DietrichGebert/ponytail",
    "lang": "JavaScript",
    "today": 1194,
    "stars": 150495,
    "desc": "让你的人工智能代理像房间里最懒惰的高级开发人员一样思考。最好的代码是你从未写过的代码。"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 883,
    "stars": 273891,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "NVIDIA/OpenShell",
    "lang": "Rust",
    "today": 2456,
    "stars": 14006,
    "desc": "OpenShell是自主AI代理的安全、私有运行时。"
  },
  {
    "repo": "firebase/firebase-ios-sdk",
    "lang": "C++",
    "today": 112,
    "stars": 6857,
    "desc": "适用于Apple应用程序开发的Firebase SDK"
  },
  {
    "repo": "mvschwarz/openrig",
    "lang": "TypeScript",
    "today": 642,
    "stars": 3721,
    "desc": "从Claude Code、Codex和Pi构建您自己的代理网络：具有角色、共享上下文和所有工作的持久团队。"
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 150,
    "stars": 9319,
    "desc": "光标插件规范和官方插件"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 455,
    "stars": 293965,
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mksglu/context-mode",
    "lang": "TypeScript",
    "today": 362,
    "stars": 24776,
    "desc": "人工智能编码代理的上下文窗口优化。沙盒工具输出（减少98 ％ ） ，保持会话内存，并通过MCP +钩子在17个平台上强制路由。"
  },
  {
    "repo": "heygen-com/hyperframes",
    "lang": "TypeScript",
    "today": 627,
    "stars": 55336,
    "desc": "编写HTML。渲染视频。专为客服代表打造。"
  },
  {
    "repo": "earendil-works/pi",
    "lang": "TypeScript",
    "today": 298,
    "stars": 111218,
    "desc": "AI agent toolkit ：统一LLM API、agent loop、TUI、coding agent CLI"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 211337,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 148868,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187649,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 127543,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107218,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70717,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61252,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59271,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48735,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29797,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 293966,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 273891,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 270709,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 179326,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 140517,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 100349,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 63350,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 75827,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 52167,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 53394,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
