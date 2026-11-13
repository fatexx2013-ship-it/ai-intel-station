// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-14）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-14",
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
    "date": "2026-11-13",
    "title": "索尼：PS5 超分技术 QSSR 即将登陆《漫威蜘蛛侠 2》《ARC Raiders》等作品",
    "desc": "IT之家 11 月 13 日消息，索尼 PlayStation 今天（13 日）晚间宣布，PS5 超分技术 QSSR 即将登陆《漫威蜘蛛侠 2》《控制：共振》《THE FINALS》《ARC Raiders》等作品，相关…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/026/967.htm"
  },
  {
    "date": "2026-11-13",
    "title": "华为麒麟 9050 系列芯片新一代灵犀 CPU 详细信息公开：9 核 16 线程并行调度，支持内存压缩加速",
    "desc": "IT之家 11 月 13 日消息，华为麒麟官方公众号继续揭秘首款「逻辑折叠」技术 τ 芯片 —— 麒麟 9050 系列更多配置信息，新一代灵犀 CPU 详情已公开。据介绍，麒麟 9050 系列搭载新一代灵犀 CPU，支持…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/026/993.htm"
  },
  {
    "date": "2026-11-13",
    "title": "让智能体帮你购物，OpenAI 推出支付功能 ChatGPT Wallet",
    "desc": "IT之家 11 月 13 日消息，OpenAI 今天（13 日）宣布推出支付功能 ChatGPT Wallet，让旗下 dot AI 智能体代替用户购物。ChatGPT Wallet 由 OpenAI 与美国运通、万事达…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/026/994.htm"
  },
  {
    "date": "2026-11-13",
    "title": "科技爱好者周刊（第 419 期）：机房来了，写字楼走了",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 成都麓湖生态城的 Q8 步行桥，采用双曲…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-419.html"
  },
  {
    "date": "2026-11-13",
    "title": "从仰望极速新纪录和鼎曜全球发布 看比亚迪的国际化与高端化之路",
    "desc": "比亚迪正在把规模优势转化为技术与品牌价值",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/509716.html"
  },
  {
    "date": "2026-11-13",
    "title": "比亚迪第1900万辆新能源汽车下线，科技新奢旗舰SUV方程豹钛9开启预订",
    "desc": "比亚迪第1900万辆新能源汽车在西安工厂正式下线",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/509730.html"
  },
  {
    "date": "2026-11-13",
    "title": "中国AI突破复杂肺癌诊疗！中美医疗圈集体坐不住了",
    "desc": "250名国内顶尖三甲医院医生联合评测",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/509796.html"
  },
  {
    "date": "2026-11-13",
    "title": "MEET2027含金量再加码：AI4S/量子计算/AI Infra…第二批嘉宾强势来袭！",
    "desc": "12.9 北京，来MEET2027现场",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/509827.html"
  },
  {
    "date": "2026-11-13",
    "title": "黄仁勋辞职，英伟达33年首换帅，市值蒸发超3万亿",
    "desc": "一个时代结束了",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/509995.html"
  },
  {
    "date": "2026-11-06",
    "title": "科技爱好者周刊（第 418 期）：如果科技停止在21世纪初",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 雄安新区正在建设的雄安大剧院，它的幕墙采…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-418.html"
  }
];

export const models = [
  {
    "vendor": "Google",
    "name": "Gemini 4 Hydrogen",
    "date": "2026-11-13",
    "desc": "Gemini 4 Hydrogen 是 Google Gemini 4 系列的高效主力模型，专为高吞吐量代理工作流、编码和多模态应用而打造。，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-hydrogen"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Hydrogen (batch)",
    "date": "2026-11-13",
    "desc": "Gemini 4 Hydrogen 是 Google Gemini 4 系列的高效主力模型，专为高吞吐量代理工作流、编码和多模态应用而打造。，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-hydrogen:batch"
  },
  {
    "vendor": "Baidu",
    "name": "ERNIE-5.5-Flash-Preview (free)",
    "date": "2026-11-11",
    "desc": "ERNIE 5，上下文 1024k。",
    "url": "https://openrouter.ai/baidu/ernie-5.5-flash-preview:free"
  },
  {
    "vendor": "Baidu",
    "name": "ERNIE-Light-DT-1.0",
    "date": "2026-11-11",
    "desc": "ERNIE-Light-DT-1，上下文 1024k。",
    "url": "https://openrouter.ai/baidu/ernie-light-dt-1.0-intl"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Carbon",
    "date": "2026-11-11",
    "desc": "Gemini 4 Carbon 是 Google 推出的前沿 Gemini 4 模型，适用于编码、代理和复杂推理工作，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-carbon"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Carbon (batch)",
    "date": "2026-11-11",
    "desc": "Gemini 4 Carbon 是 Google 推出的前沿 Gemini 4 模型，适用于编码、代理和复杂推理工作，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-carbon:batch"
  },
  {
    "vendor": "Nex AGI",
    "name": "Nex-N2.6",
    "date": "2026-11-10",
    "desc": "Nex-N2，上下文 262k。",
    "url": "https://openrouter.ai/nex-agi/nex-n2.6"
  },
  {
    "vendor": "Thinking Machines",
    "name": "Inkling 2 Small",
    "date": "2026-11-10",
    "desc": "Inkling 2 Small 是由 Thinking Machines Lab 开发的开放权重多模态混合专家推理模型，在总计 5940 亿个参数中拥有 170 亿个有效参数，上下文 1049k。",
    "url": "https://openrouter.ai/thinkingmachines/inkling-2-small"
  },
  {
    "vendor": "Thinking Machines",
    "name": "Inkling 2 Small (free)",
    "date": "2026-11-10",
    "desc": "Inkling 2 Small 是由 Thinking Machines Lab 开发的开放权重多模态混合专家推理模型，在总计 5940 亿个参数中拥有 170 亿个有效参数，上下文 1049k。",
    "url": "https://openrouter.ai/thinkingmachines/inkling-2-small:free"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Fable 5.2",
    "date": "2026-11-10",
    "desc": "克劳德寓言 5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-fable-5.2"
  }
];

export const trending = [
  {
    "repo": "alibaba/open-code-review",
    "lang": "Go",
    "today": 206,
    "stars": 50358,
    "desc": "安全、快速、高效，经阿里巴巴规模的实战检验。混合架构代码审查工具：确定性管道 + LLM 代理，精确的行级注释，内置多语言规则集（NPE、线程安全、XSS、SQL 注入），兼容 OpenAI 和 Anthropic。"
  },
  {
    "repo": "GoogleChrome/modern-web-guidance-src",
    "lang": "TypeScript",
    "today": 1875,
    "stars": 4468,
    "desc": "让您的编码代理始终掌握最新的网络最佳实践"
  },
  {
    "repo": "openai/codex-security",
    "lang": "TypeScript",
    "today": 754,
    "stars": 12950,
    "desc": "OpenAI 的 Codex Security CLI 和 TypeScript SDK，用于查找、验证和修复安全漏洞。npm：https://www.npmjs.com/package/@openai/codex-security"
  },
  {
    "repo": "ZhuLinsen/daily_stock_analysis",
    "lang": "Python",
    "today": 272,
    "stars": 71408,
    "desc": "LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs."
  },
  {
    "repo": "we-promise/sure",
    "lang": "Ruby",
    "today": 944,
    "stars": 14515,
    "desc": "适合所有人的个人理财应用（由所有人打造）"
  },
  {
    "repo": "backnotprop/plannotator",
    "lang": "TypeScript",
    "today": 100,
    "stars": 10343,
    "desc": "用于随时掌握最新动态并掌控代理的工作空间——塑造、决策、规划、注释、审核代码、与团队分享，并一键将所有反馈发送给代理。"
  },
  {
    "repo": "louislam/uptime-kuma",
    "lang": "JavaScript",
    "today": 61,
    "stars": 93724,
    "desc": "一款出色的自托管监控工具"
  },
  {
    "repo": "block/buzz",
    "lang": "Rust",
    "today": 95,
    "stars": 37224,
    "desc": "一个群体智慧沟通平台"
  },
  {
    "repo": "tradermonty/claude-trading-skills",
    "lang": "Python",
    "today": 60,
    "stars": 4000,
    "desc": "面向股票投资者和交易者的 Claude Code 技能——市场分析、技术图表、经济日历、筛选器和交易策略制定。"
  },
  {
    "repo": "tailscale/tailcat",
    "lang": "Go",
    "today": 324,
    "stars": 9306,
    "desc": "类似于 netcat，但通过 Tailscale 的数据面，不使用 Tailscale 的控制面"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 226607,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 155543,
    "lang": "TypeScript",
    "desc": "Claude Code 是一款智能编码工具，它驻留在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码以及处理 Git 工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来实现。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188015,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于其进行构建的无障碍人工智能。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 135180,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108814,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将 Gemini 的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71273,
    "lang": "Python",
    "desc": "🌟 多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61805,
    "lang": "Python",
    "desc": "用于自主人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60852,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，共同应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50067,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30651,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多代理工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 317135,
    "lang": "Shell",
    "desc": "一个行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 323622,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 302337,
    "lang": "JavaScript",
    "desc": "代理工具性能优化系统。针对 Claude Code、Codex、Opencode、Cursor 等工具的技能、直觉、记忆、安全性和“研究先行”开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 194037,
    "lang": "Python",
    "desc": "客服代表技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 144567,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用——免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 117052,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 67523,
    "lang": "Python",
    "desc": "一种 AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 96167,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为精美的交互式图表。适用于 Claude Code、Codex 等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 60110,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。转化率优化 (CRO)、文案撰写、搜索引擎优化 (SEO)、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 68721,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作迹象的客服代表技能"
  }
];
