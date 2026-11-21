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
    "title": "“几乎所有人将永久失业”：Anthropic 研究员预测 2027 年底 AI 在几乎所有领域超越顶尖专家",
    "desc": "IT之家 11 月 21 日消息，11 月 15 日在接受 Palisade Research 采访时，Anthropic 公司技术团队成员 Tao Lin 预测到 2027 年年底，在编程、电影制作等几乎所有领域，人工…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/030/308.htm"
  },
  {
    "date": "2026-11-21",
    "title": "摩托罗拉首款宽折叠 Razr Flex 手机爆料，配高通未发布的 SM8845 Pro 芯片",
    "desc": "IT之家 11 月 21 日消息，科技媒体 GSMArena 昨日（11 月 20 日）发布博文，报道称摩托罗拉首款宽折叠手机 Razr Flex 有望配备高通尚未发布的 SM8845 Pro 芯片，而此前有消息称该芯片…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/030/315.htm"
  },
  {
    "date": "2026-11-21",
    "title": "黄仁勋下台后有人挖出英伟达 20 年前员工投诉记录，指控其威胁下属、发表色情言论",
    "desc": "IT之家 11 月 21 日消息，彭博社今日报道称，一份 2007 年提交的加州诉讼文件显示，英伟达两名前员工曾对时任 CEO 黄仁勋的管理方式提出投诉，指控其存在辱骂、威胁员工以及发表色情言论等行为。这些指控涉及大约二…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/030/316.htm"
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
    "vendor": "RadixArk",
    "name": "DaisyRose 27B",
    "date": "2026-11-21",
    "desc": "DaisyRose 27B 是 RadixArk 推出的开放权重多模态推理模型，基于 [Qwen3，上下文 262k。",
    "url": "https://openrouter.ai/radixark/daisyrose-27b"
  },
  {
    "vendor": "Mistral",
    "name": "Pixtral Large 2502",
    "date": "2026-11-20",
    "desc": "Pixtral Large 2502 是 Mistral AI 大型多模态模型的 2025 年 2 月版本，继 [Pixtral Large 2411](https://openrouter，上下文 128k。",
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
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.2 Sol Pro (batch)",
    "date": "2026-11-18",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.2-sol-pro:batch"
  }
];

export const trending = [
  {
    "repo": "elementalsouls/Claude-BugHunter",
    "lang": "Python",
    "today": 1622,
    "stars": 14348,
    "desc": "用于漏洞挖掘和外部红队工作的 Claude Code 技能包——82 项技能、15 个斜杠命令、681 个披露报告模式（涵盖 24 个核心漏洞类别），以及企业身份 + 基础设施攻击矩阵。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 890,
    "stars": 322867,
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 773,
    "stars": 61419,
    "desc": "“CLI-Anything：让所有软件都具备原生代理功能” -- CLI-Hub：https://clianything.cc/"
  },
  {
    "repo": "jingyaogong/minimind",
    "lang": "Python",
    "today": 847,
    "stars": 67705,
    "desc": "🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours."
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 299,
    "stars": 17859,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "firecrawl/firecrawl",
    "lang": "TypeScript",
    "today": 1241,
    "stars": 205316,
    "desc": "让您的客服代表更聪明的知识基础设施。通过一个 API 搜索、抓取和访问 550 多个数据提供商。"
  },
  {
    "repo": "nginx/nginx",
    "lang": "C",
    "today": 246,
    "stars": 32581,
    "desc": "官方 NGINX 开源代码仓库。"
  },
  {
    "repo": "openvinotoolkit/openvino",
    "lang": "C++",
    "today": 217,
    "stars": 11797,
    "desc": "OpenVINO™ 是一款用于优化和部署 AI 推理的开源工具包"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 636,
    "stars": 69306,
    "desc": "适用于 Claude Code、Codex、GitHub Copilot、Cursor、Factory Droid、Qoder 和 Pi 的编辑图表设计。45 种图表类型。独立的 HTML + SVG。无阴影。无Mermaid杂乱。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 681,
    "stars": 71465,
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 228262,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 156475,
    "lang": "TypeScript",
    "desc": "Claude Code 是一款智能编码工具，运行在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码和处理 Git 工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来实现。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188120,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于人工智能进行构建。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 135996,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108957,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将 Gemini 的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71371,
    "lang": "Python",
    "desc": "🌟 多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61954,
    "lang": "Python",
    "desc": "用于自主型人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61130,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，共同应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50237,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30788,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多智能体工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 322868,
    "lang": "Shell",
    "desc": "行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 328990,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 307876,
    "lang": "JavaScript",
    "desc": "代理性能优化系统。针对Claude Code、Codex、Opencode、Cursor等工具的技能、直觉、记忆、安全性和“研究先行”开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 198083,
    "lang": "Python",
    "desc": "客服代表技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 145218,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用 - 免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 119405,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 71465,
    "lang": "Python",
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 98351,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为精美的交互式图表。适用于 Claude Code、Codex 等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 61740,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。CRO、文案撰写、SEO、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 71683,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作痕迹的客服代表技能"
  }
];
