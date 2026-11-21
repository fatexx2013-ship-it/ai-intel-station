// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-21）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-21",
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
    "date": "2026-11-21",
    "title": "代码显示三星正为 One UI 9.5 开发 AI 智能天气提醒功能：可根据用户作息与通勤时间推送通知",
    "desc": "IT之家 11 月 21 日消息，外媒 SammyGuru 在拆解三星最新 One UI 9.5 测试版时，发现三星正在为天气应用测试多项 AI 智能提醒功能，系统能够识别用户的起床时间和通勤行为，在用户起床、上班或下班…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/030/419.htm"
  },
  {
    "date": "2026-11-20",
    "title": "科技爱好者周刊（第 420 期）：最分心的一年",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 新建成的上海道教学院，由清华大学建筑设计…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-420.html"
  },
  {
    "date": "2026-11-20",
    "title": "具身机器人进入真机时代，华为云CloudRobo开始组队发力了",
    "desc": "一批卡可以轮流服务多家公司，一次适配也能让更多团队受益。算力不必家家从头买，工程上的坑也不用家家重新踩。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511426.html"
  },
  {
    "date": "2026-11-20",
    "title": "双系统决策+双层自进化，Agnes让Agent效率最高提速14倍，成本骤降至1/27！",
    "desc": "已开源Agnes Harness",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511582.html"
  },
  {
    "date": "2026-11-20",
    "title": "新浪新闻·2026探索大会在京举行 虚实交融共探智能时代共生新图景",
    "desc": "11月19日，由微博与新浪新闻联合主办的“新浪新闻·2026探索大会”在北京举办。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511603.html"
  },
  {
    "date": "2026-11-20",
    "title": "昇腾算力训出了双榜SOTA的具身世界模型，华为云这次想把整套底座开放出来",
    "desc": "国产算力的成熟，把具身竞争维度从「芯片有多强」，拉入了一个比拼训练效率、数据规模、部署成本和场景落地速度的多维战场。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511610.html"
  },
  {
    "date": "2026-11-19",
    "title": "影视飓风、Manus、影石、OPPO&#8230;&#8230;极客公园创新大会 2027 嘉宾阵容更新！",
    "desc": "「Revaluation 价值，另有答案」",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/511258.html"
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
    "vendor": "Thinking Machines",
    "name": "Inkling 2 Mini",
    "date": "2026-11-21",
    "desc": "Inkling 2 Mini 是来自 Thinking Machines Lab 的开放权重多模态循环式 Transformer，具有 3，上下文 1049k。",
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
    "desc": "Pixtral Large 2502 是 Mistral AI 大型多模态模型的 2025 年 2 月版本，是 [Pixtral Large 2411](https://openrouter，上下文 128k。",
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
  }
];

export const trending = [
  {
    "repo": "elementalsouls/Claude-BugHunter",
    "lang": "Python",
    "today": 1622,
    "stars": 14900,
    "desc": "用于漏洞挖掘和外部红队工作的Claude Code技能包——82项技能、15个斜杠命令、681个披露报告模式（涵盖24个核心漏洞类别），以及企业身份+基础设施攻击矩阵。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 890,
    "stars": 323057,
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 773,
    "stars": 61634,
    "desc": "“CLI-Anything：让所有软件都具备原生代理功能” -- CLI-Hub：https://clianything.cc/"
  },
  {
    "repo": "jingyaogong/minimind",
    "lang": "Python",
    "today": 847,
    "stars": 67868,
    "desc": "🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours."
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 299,
    "stars": 17935,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "firecrawl/firecrawl",
    "lang": "TypeScript",
    "today": 1241,
    "stars": 205596,
    "desc": "让您的客服代表更聪明的知识基础设施。通过一个 API 搜索、抓取和访问 550 多个数据提供商。"
  },
  {
    "repo": "nginx/nginx",
    "lang": "C",
    "today": 246,
    "stars": 32634,
    "desc": "官方 NGINX 开源代码仓库。"
  },
  {
    "repo": "openvinotoolkit/openvino",
    "lang": "C++",
    "today": 217,
    "stars": 11847,
    "desc": "OpenVINO™ 是一款用于优化和部署 AI 推理的开源工具包"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 636,
    "stars": 69483,
    "desc": "适用于 Claude Code、Codex、GitHub Copilot、Cursor、Factory Droid、Qoder 和 Pi 的编辑图表设计。45 种图表类型。独立的 HTML + SVG。无阴影。无Mermaid杂乱。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 681,
    "stars": 71635,
    "desc": "一种人工智能代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 228302,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188122,
    "lang": "Python",
    "desc": "AutoGPT 的愿景是为每个人提供可访问的人工智能，让你专注于重要的事情。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 156502,
    "lang": "TypeScript",
    "desc": "Claude Code 是一个代理编码工具，位于终端中，了解你的代码库，通过执行日常任务、解释复杂代码和处理 git 工作流帮助你更快编码。"
  },
  {
    "repo": "openai/codex",
    "stars": 136018,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理。"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108961,
    "lang": "TypeScript",
    "desc": "将 Gemini 的力量直接带入终端的开源 AI 代理。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71372,
    "lang": "Python",
    "desc": "多 Agent 框架：第一个人工智能软件公司，迈向自然语言编程。"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61955,
    "lang": "Python",
    "desc": "智能 AI 的编程框架。"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61137,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主 AI 代理的框架，通过协作智能让代理无缝处理复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50248,
    "lang": "Python",
    "desc": "超轻量级、开源、自托管的个人 AI 代理框架，含 WebUI、工具、内存、MCP、多代理工作流和聊天应用。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30793,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流框架。"
  }
];

export const skills = [
  {
    "repo": "mattpocock/skills",
    "stars": 329229,
    "lang": "Shell",
    "desc": "真正工程师的技能，直接来自作者的 .agents 目录。"
  },
  {
    "repo": "obra/superpowers",
    "stars": 323058,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 308016,
    "lang": "JavaScript",
    "desc": "代理线束性能优化系统，为 Claude Code、Codex、Opencode、Cursor 等提供技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 198203,
    "lang": "Python",
    "desc": "代理技能的公共存储库。"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 145253,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用，全部免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 119461,
    "lang": "JavaScript",
    "desc": "AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 98433,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表，Claude Code、Codex 等的代理技能。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 71774,
    "lang": "Python",
    "desc": "从文本中删除 AI 生成文字迹象的代理技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 71635,
    "lang": "Python",
    "desc": "研究 Reddit、X、YouTube、HN、Polymarket 和网络上任何主题，然后合成基础摘要的 AI 代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 61782,
    "lang": "JavaScript",
    "desc": "Claude Code 和 AI 代理的营销技能：CRO、文案撰写、SEO、分析和增长工程。"
  }
];
