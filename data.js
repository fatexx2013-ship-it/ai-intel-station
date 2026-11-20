// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-20）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-20",
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
    "date": "2026-11-20",
    "title": "国内推出首个智能座舱 AI 分级评价体系，共分为 C1 到 C5 五级",
    "desc": "IT之家 11 月 20 日消息，据央视新闻今日报道，随着新能源汽车快速普及，日前，中国汽车技术研究中心推出了国内首个汽车智能座舱 AI 能力分级评价体系。IT之家从报道获悉，这次中汽中心推出的 AI 能力分级评价体系，…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/029/781.htm"
  },
  {
    "date": "2026-11-20",
    "title": "OpenAI 邀部分 Plus 用户体验 dots AI 智能体，移动版 ChatGPT 将为其设独立标签页",
    "desc": "IT之家 11 月 20 日消息，OpenAI 核心产品负责人蒂博 · 索蒂奥（Thibault Sottiaux）今天（11 月 20 日）在 X 平台发布推文，宣布邀请少量 ChatGPT Plus 用户测试 dot…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/029/784.htm"
  },
  {
    "date": "2026-11-20",
    "title": "行业首次：小鹏 2026 科技日将首发「图灵 AI 共驾」，把智能辅助驾驶能力赋能人驾",
    "desc": "IT之家 11 月 20 日消息，小鹏汽车 2026 年小鹏科技日（AI DAY）已经官宣定档 11 月 25 日在广州举行，主题为“原点”（Origin）。据小鹏介绍，本届科技日的核心发布之一，是“图灵 AI 共驾”的…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/029/785.htm"
  },
  {
    "date": "2026-11-20",
    "title": "美光：2027 年存储芯片已有 75% 库存售罄，供需形势会比今年更加紧张",
    "desc": "IT之家 11 月 20 日消息，据科创板日报今日报道，美光科技总裁兼首席技术与产品官 Scott DeBoer 在接受采访时表示，存储芯片的供需在很长一段时间内都无法达到平衡。他指出，在可预见的未来，供需找不到明确的平…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/029/786.htm"
  },
  {
    "date": "2026-11-20",
    "title": "科技爱好者周刊（第 420 期）：最分心的一年",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 新建成的上海道教学院，由清华大学建筑设计…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-420.html"
  },
  {
    "date": "2026-11-19",
    "title": "AI基建大潮方兴未艾，联想集团最佳财季诞生！",
    "desc": "全球AI生态链领先企业联想集团今日公布截至2026/27财年第二季度业绩",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511088.html"
  },
  {
    "date": "2026-11-19",
    "title": "好清晰！最新国产AI画的8K图，放这么大大大大也不糊！",
    "desc": "Kling Image 4.0",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511092.html"
  },
  {
    "date": "2026-11-19",
    "title": "SenseNova U1 Pro获Design Arena双榜中国第一、全球第六",
    "desc": "商汤科技日日新 SenseNova U1 Pro 在图片生成与图片编辑两大榜单中均登顶中国第一",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511179.html"
  },
  {
    "date": "2026-11-19",
    "title": "GTA6刷屏！零AI纯手搓的3A大作玩一个少一个了",
    "desc": "媒体均分登顶历史第一，细节多到爆炸",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511180.html"
  },
  {
    "date": "2026-11-19",
    "title": "影视飓风、Manus、影石、OPPO&#8230;&#8230;极客公园创新大会 2027 嘉宾阵容更新！",
    "desc": "「Revaluation 价值，另有答案」",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511258.html"
  }
];

export const models = [
  {
    "vendor": "Google",
    "name": "Gemini 4 Neon",
    "date": "2026-11-18",
    "desc": "Gemini 4 Neon 是 Google Gemini 4 系列中一款快速、中等价位的模型，专为编程和代理工作而打造，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-neon"
  },
  {
    "vendor": "Google",
    "name": "Gemini 4 Neon (batch)",
    "date": "2026-11-18",
    "desc": "Gemini 4 Neon 是 Google Gemini 4 系列中一款快速、中等价位的模型，专为编程和代理工作而打造，上下文 1049k。",
    "url": "https://openrouter.ai/google/gemini-4-neon:batch"
  },
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
  }
];

export const trending = [
  {
    "repo": "elementalsouls/Claude-BugHunter",
    "lang": "Python",
    "today": 1349,
    "stars": 12612,
    "desc": "一个用于漏洞挖掘和外部红队工作的Claude Code技能包——82项技能、15个斜杠命令、681个披露报告模式（涵盖24个核心漏洞类别），以及企业身份+基础设施攻击矩阵。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 2028,
    "stars": 322126,
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 898,
    "stars": 60607,
    "desc": "“CLI-Anything：让所有软件都原生支持代理” -- CLI-Hub：https://clianything.cc/"
  },
  {
    "repo": "jingyaogong/minimind",
    "lang": "Python",
    "today": 238,
    "stars": 66938,
    "desc": "🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours."
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 384,
    "stars": 17577,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "firecrawl/firecrawl",
    "lang": "TypeScript",
    "today": 825,
    "stars": 204300,
    "desc": "让您的客服代表更聪明的知识基础设施。通过一个 API 进行搜索、抓取并访问 550 多个数据提供商。"
  },
  {
    "repo": "nginx/nginx",
    "lang": "C",
    "today": 73,
    "stars": 32351,
    "desc": "官方 NGINX 开源代码仓库。"
  },
  {
    "repo": "openvinotoolkit/openvino",
    "lang": "C++",
    "today": 246,
    "stars": 11581,
    "desc": "OpenVINO™ 是一款用于优化和部署 AI 推理的开源工具包"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 271,
    "stars": 68671,
    "desc": "适用于 Claude Code、Codex、GitHub Copilot、Cursor、Factory Droid、Qoder 和 Pi 的编辑图表设计。45 种图表类型。独立的 HTML + SVG。无阴影。无Mermaid杂乱。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 954,
    "stars": 70835,
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 228057,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 156343,
    "lang": "TypeScript",
    "desc": "Claude Code 是一款智能编码工具，它驻留在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码以及处理 Git 工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来实现。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188110,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于其进行构建的无障碍人工智能。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 135901,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108941,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将Gemini的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71360,
    "lang": "Python",
    "desc": "🌟 多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61946,
    "lang": "Python",
    "desc": "用于自主人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61107,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50217,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30774,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多智能体工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 322126,
    "lang": "Shell",
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 328183,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 307317,
    "lang": "JavaScript",
    "desc": "代理工具性能优化系统。针对Claude Code、Codex、Opencode、Cursor等工具的技能、直觉、记忆、安全性和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 197730,
    "lang": "Python",
    "desc": "客服代表技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 145091,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用——免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 119193,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 70836,
    "lang": "Python",
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 98064,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为精美的交互式图表。适用于 Claude Code、Codex 等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 61531,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。转化率优化 (CRO)、文案撰写、搜索引擎优化 (SEO)、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 71291,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作迹象的客服代表技能"
  }
];
