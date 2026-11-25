// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-26）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-26",
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
    "date": "2026-11-26",
    "title": "我以为这是摄影作品，你告诉我这是最新的国产AI？！",
    "desc": "商汤SenseNova U1.6",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512748.html"
  },
  {
    "date": "2026-11-25",
    "title": "逐际动⼒与商汤⼤装置达成合作，以高质量算力全⾯⽀撑机器⼈仿真训练与测试",
    "desc": "贯通具⾝智能研发流程",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512683.html"
  },
  {
    "date": "2026-11-25",
    "title": "算力唤醒真实世界：九章云极发布物理AI工厂与生态开放计划",
    "desc": "11月25日，以“算力唤醒真实世界”为主题的2026物理AI行业峰会暨九章云极智算生态大会在深圳举行。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512582.html"
  },
  {
    "date": "2026-11-25",
    "title": "零基础也能做开发，智元灵心平台一年孵化超3万个机器人智能体",
    "desc": "智元推出行业首个开放且完整的具身智能生态技术体系AIMA",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512715.html"
  },
  {
    "date": "2026-11-25",
    "title": "丢个故事就行！直出15分钟AI短片，家里二舅也能上手",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/512727.html"
  },
  {
    "date": "2026-11-20",
    "title": "科技爱好者周刊（第 420 期）：最分心的一年",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 新建成的上海道教学院，由清华大学建筑设计…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-420.html"
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
    "vendor": "Upstage",
    "name": "Solar Mini 4.5 (Preview)",
    "date": "2026-11-25",
    "desc": "Solar Mini 4，上下文 524k。",
    "url": "https://openrouter.ai/upstage/solar-mini-4-5"
  },
  {
    "vendor": "Upstage",
    "name": "Solar Pro 4 Contributor",
    "date": "2026-11-25",
    "desc": "Solar Pro 4 Contributor 与 Upstage 的 Solar Pro 4 型号相同，以较低的价格提供，但条件是允许 Upstage 使用互动数据来改进产品。，上下文 524k。",
    "url": "https://openrouter.ai/upstage/solar-pro-4-contributor"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Flash-MOPD",
    "date": "2026-11-24",
    "desc": "MiMo-V2，上下文 1049k。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-flash-mopd"
  },
  {
    "vendor": "Thinking Machines",
    "name": "Inkling 2 Mini",
    "date": "2026-11-21",
    "desc": "Inkling 2 Mini 是来自 Thinking Machines Lab 的开放权重多模态循环 Transformer，具有 3，上下文 1049k。",
    "url": "https://openrouter.ai/thinkingmachines/inkling-2-mini"
  },
  {
    "vendor": "RadixArk",
    "name": "DaisyRose 27B",
    "date": "2026-11-21",
    "desc": "DaisyRose 27B 是 RadixArk 推出的开放权重多模态推理模型，由 [Qwen3，上下文 262k。",
    "url": "https://openrouter.ai/radixark/daisyrose-27b"
  },
  {
    "vendor": "Mistral",
    "name": "Pixtral Large 2502",
    "date": "2026-11-20",
    "desc": "Pixtral Large 2502 是 Mistral AI 于 2025 年 2 月发布的大型多模态模型，是 [Pixtral Large 2411](https://openrouter，上下文 128k。",
    "url": "https://openrouter.ai/mistralai/pixtral-large-2502"
  },
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
  }
];

export const trending = [
  {
    "repo": "elementalsouls/Claude-BugHunter",
    "lang": "Python",
    "today": 1644,
    "stars": 22700,
    "desc": "用于漏洞挖掘和外部红队工作的Claude Code技能包——84项技能、15个斜杠命令、681个披露报告模式（涵盖24个核心漏洞类别），以及企业身份+基础设施攻击矩阵。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 902,
    "stars": 326462,
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 1094,
    "stars": 65553,
    "desc": "“CLI-Anything：让所有软件都具备原生代理功能”——CLI-Hub：https://clianything.cc/"
  },
  {
    "repo": "jingyaogong/minimind",
    "lang": "Python",
    "today": 828,
    "stars": 70865,
    "desc": "🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours."
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 408,
    "stars": 19492,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "firecrawl/firecrawl",
    "lang": "TypeScript",
    "today": 1131,
    "stars": 209829,
    "desc": "让您的客服代表更聪明的知识基础设施。通过一个 API 搜索、抓取和访问 550 多个数据提供商。"
  },
  {
    "repo": "nginx/nginx",
    "lang": "C",
    "today": 174,
    "stars": 33335,
    "desc": "官方 NGINX 开源代码仓库。"
  },
  {
    "repo": "openvinotoolkit/openvino",
    "lang": "C++",
    "today": 188,
    "stars": 12617,
    "desc": "OpenVINO™ 是一款用于优化和部署 AI 推理的开源工具包"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 1133,
    "stars": 72839,
    "desc": "适用于 Claude Code、Codex、GitHub Copilot、Cursor、Factory Droid、Qoder 和 Pi 的编辑图表设计。52 种图表类型。自包含的 HTML + SVG。无阴影。无Mermaid杂乱。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 950,
    "stars": 74966,
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 229140,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 157048,
    "lang": "TypeScript",
    "desc": "Claude Code 是一款智能编码工具，它驻留在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码以及处理 Git 工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来实现。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188188,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于其进行构建的无障碍人工智能。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 136436,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 109102,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将 Gemini 的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71474,
    "lang": "Python",
    "desc": "🌟多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61966,
    "lang": "Python",
    "desc": "用于自主人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61258,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，共同应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50322,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30872,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多智能体工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 326462,
    "lang": "Shell",
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 332764,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 310617,
    "lang": "JavaScript",
    "desc": "代理性能优化系统。针对Claude Code、Codex、Opencode、Cursor等工具的技能、直觉、记忆、安全性和研究先行开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 200419,
    "lang": "Python",
    "desc": "客服代表技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 145679,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用 - 免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 120389,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 74966,
    "lang": "Python",
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 99861,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为交互式图表或单页答案：10 种图表类型、架构诊断、故事视频和 PR 演练。适用于 Claude Code、Codex、Cursor 等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 62598,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。转化率优化 (CRO)、文案撰写、搜索引擎优化 (SEO)、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 73525,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作迹象的客服代表技能"
  }
];
