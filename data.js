// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-18）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-18",
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
    "date": "2026-11-18",
    "title": "Claude 关联计费测试上线，第三方应用 AI 消费能“按需结算”",
    "desc": "IT之家 11 月 18 日消息，Anthropic 昨日（11 月 17 日）更新 Claude 平台文档，宣布引入名为“关联计费”（Linked Billing）的 OAuth 测试版功能。用户未来使用某个第三方 A…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/028/637.htm"
  },
  {
    "date": "2026-11-18",
    "title": "AMD 完成对 Taalas 收购，计划将后者芯片整合进加速器路线图",
    "desc": "IT之家 11 月 18 日消息，AMD 当地时间昨日宣布完成对专用 AI 推理芯片开发商 Taalas 的收购。这家初创企业带来了差异化的技术和世界一流的工程专业知识。AMD 表示此举将进一步加强其全栈 AI 产品组合…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/028/640.htm"
  },
  {
    "date": "2026-11-18",
    "title": "消息称英伟达安抚机器人生态伙伴，“物理 AI”投资不会急刹车",
    "desc": "IT之家 11 月 18 日消息，科技媒体 Business Insider 今天（11 月 18 日）发布博文，报道称在黄仁勋突发离职后，英伟达及其风险投资部门 NVentures 已联系至少 3 家其投资的机器人初创…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/028/660.htm"
  },
  {
    "date": "2026-11-18",
    "title": "戴森 Airsmooth 气流丰盈梳发布：吹干蓬松一步到位、断发减少 39%，1899 元",
    "desc": "IT之家 11 月 18 日消息，戴森官方今日宣布推出全新的 Airsmooth 气流丰盈梳（HB01），定价为 1899 元。京东戴森（DYSON）Airsmooth 气流丰盈梳 1899 元直达链接作为戴森推出的首款…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/028/661.htm"
  },
  {
    "date": "2026-11-18",
    "title": "GPT-6.2 Astra和Sol王炸双发！3D又危了",
    "desc": "Sol逼近旗舰性能",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510707.html"
  },
  {
    "date": "2026-11-18",
    "title": "黄仁勋不再沉默：我愿重掌英伟达！董事会：不考虑",
    "desc": "英伟达公布了老黄离职后的首份财报",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510726.html"
  },
  {
    "date": "2026-11-17",
    "title": "材料科学智能体MatOS正式开源！大幅提高材料研发任务成功率",
    "desc": "筛材料、找配方、开发新模型…拿下多项科研任务",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510652.html"
  },
  {
    "date": "2026-11-17",
    "title": "李沐加盟的Aimotion，是一家什么AI公司？",
    "desc": "瞄准「产业级世界模型」",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510688.html"
  },
  {
    "date": "2026-11-17",
    "title": "并购完成，李飞飞正式率队加入AMD！苏妈亲自欢迎",
    "desc": "82亿美元股票，46天闪电交割",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510695.html"
  },
  {
    "date": "2026-11-13",
    "title": "科技爱好者周刊（第 419 期）：机房来了，写字楼走了",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 成都麓湖生态城的 Q8 步行桥，采用双曲…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-419.html"
  }
];

export const models = [
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Astra Pro",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-astra-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Astra Pro (batch)",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-astra-pro:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Astra",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-astra"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Astra (batch)",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-astra:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Sol Pro",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-sol-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Sol Pro (batch)",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-sol-pro:batch"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Sol",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-sol"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Sol (batch)",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-sol:batch"
  },
  {
    "vendor": "Tencent",
    "name": "Hy4 flash",
    "date": "2026-11-16",
    "desc": "Hy4 flash 是 [Hy4](https://openrouter) 的一种经济高效的变体，上下文 1049k。",
    "url": "https://openrouter.ai/tencent/hy4-flash"
  },
  {
    "vendor": "Qwen",
    "name": "Qwen4 Max",
    "date": "2026-11-16",
    "desc": "Qwen4 Max 是阿里巴巴 Qwen4 系列的旗舰模型，上下文 1000k。",
    "url": "https://openrouter.ai/qwen/qwen4-max"
  }
];

export const trending = [
  {
    "repo": "elementalsouls/Claude-BugHunter",
    "lang": "Python",
    "today": 1005,
    "stars": 9478,
    "desc": "一个用于漏洞挖掘和外部红队工作的Claude Code技能包——82项技能、15个斜杠命令、681个披露报告模式（涵盖24个核心漏洞类别），以及企业身份+基础设施攻击矩阵。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 696,
    "stars": 69156,
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "alibaba/open-code-review",
    "lang": "Go",
    "today": 763,
    "stars": 53803,
    "desc": "安全、快速、高效，经阿里巴巴规模的实战检验。混合架构代码审查工具：确定性管道 + LLM 代理、精确的行级注释、内置多语言规则集（NPE、线程安全、XSS、SQL 注入），兼容 OpenAI 和 Anthropic。"
  },
  {
    "repo": "Tencent/LoopForge",
    "lang": "Go",
    "today": 591,
    "stars": 3296,
    "desc": "用于交付编码代理的自托管工作流。使用脚本和人工审批关卡编排 CodeBuddy、Codex 和 Claude Code。包括用于编码助手的本地工作流。"
  },
  {
    "repo": "dream-num/univer",
    "lang": "TypeScript",
    "today": 1774,
    "stars": 28955,
    "desc": "使用 Univer Office SDK 构建您自己的 AI 办公套件。将编辑、计算、协作和文件处理功能集成到您的产品中，供人和 AI 代理使用。基于可扩展的开源核心构建。"
  },
  {
    "repo": "getarcaneapp/arcane",
    "lang": "Go",
    "today": 618,
    "stars": 9376,
    "desc": "现代Docker管理，专为所有人设计"
  },
  {
    "repo": "google-labs-code/stitch-skills",
    "lang": "TypeScript",
    "today": 350,
    "stars": 10138,
    "desc": "一个专为与 Stitch MCP 服务器配合使用的 Agent Skills 库。每项技能均遵循 Agent Skills 开放标准，以兼容 Antigravity、Gemini CLI、Claude Code、Cursor 等编码代理。"
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 201,
    "stars": 16925,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 1917,
    "stars": 319397,
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "ag-ui-protocol/ag-ui",
    "lang": "TypeScript",
    "today": 1445,
    "stars": 20054,
    "desc": "AG-UI：代理与用户交互协议。将代理引入前端应用程序。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 227629,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 156054,
    "lang": "TypeScript",
    "desc": "Claude Code是一款智能编码工具，运行在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码和处理Git工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来实现。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188080,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于其进行构建的无障碍人工智能。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 135674,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108907,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将Gemini的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71331,
    "lang": "Python",
    "desc": "🌟 多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61907,
    "lang": "Python",
    "desc": "用于自主型人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61051,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，共同应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50159,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30744,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多智能体工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 319399,
    "lang": "Shell",
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 326818,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 305593,
    "lang": "JavaScript",
    "desc": "代理工具性能优化系统。针对 Claude Code、Codex、Opencode、Cursor 等工具的技能、直觉、记忆、安全性和“研究先行”开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 196785,
    "lang": "Python",
    "desc": "客服代表技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 144974,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用——免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 118684,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 69156,
    "lang": "Python",
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 97508,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为精美的交互式图表。适用于 Claude Code、Codex 等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 61059,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。转化率优化 (CRO)、文案撰写、搜索引擎优化 (SEO)、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 70416,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作迹象的代理技能"
  }
];
