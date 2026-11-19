// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-19）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-19",
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
    "date": "2026-11-19",
    "title": "最高每小时狂写 30GB：英伟达 621.24 驱动反馈加速消耗 SSD 寿命",
    "desc": "IT之家 11 月 19 日消息，科技媒体 Tom's Hardware 今天（11 月 19 日）发布博文，报道称英伟达 GeForce 驱动 621.14 和 621.24 两个版本存在异常后台写入问题，即使电脑处于…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/029/169.htm"
  },
  {
    "date": "2026-11-19",
    "title": "陈立武：英特尔 18A 芯片制造工艺已签下首家外部客户",
    "desc": "IT之家 11 月 19 日消息，据 CNBC 今日报道，英特尔 CEO 陈立武当地时间周三表示，英特尔 18A 芯片制造工艺已签下首家外部客户。陈立武在美国得克萨斯州奥斯汀举行的 TomorrowX 峰会上表示：“代工…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/029/172.htm"
  },
  {
    "date": "2026-11-19",
    "title": "初中毕业烘焙师，1 人搓出单集千万播放科幻剧，中国AI长片杀疯了！",
    "desc": "国产AI工具实现「一个人就是一个剧组」",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510947.html"
  },
  {
    "date": "2026-11-18",
    "title": "思维链一作Jason Wei离职！怎么去Meta待一年都跑路",
    "desc": "入职Meta刚满一年出头，竟然直接提桶跑路了！",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510811.html"
  },
  {
    "date": "2026-11-18",
    "title": "全球首个医疗健康AI独立评测与分析平台InclusionMed正式上线",
    "desc": "近日，全球首个医疗健康 AI 独立评测与分析平台InclusionMed 正式上线",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510916.html"
  },
  {
    "date": "2026-11-18",
    "title": "GPT-6.2难产！OpenAI怕了",
    "desc": "OpenAI也终于活成了2022年谷歌的样子",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510914.html"
  },
  {
    "date": "2026-11-18",
    "title": "Gemini新模型Neon箭在弦上，网友：遍历元素周期表？",
    "desc": "氖人寻味！",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/510922.html"
  },
  {
    "date": "2026-11-13",
    "title": "科技爱好者周刊（第 419 期）：机房来了，写字楼走了",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 成都麓湖生态城的 Q8 步行桥，采用双曲…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-419.html"
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
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 314,
    "stars": 17242,
    "desc": "Cursor 插件规范和官方插件"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 389,
    "stars": 59818,
    "desc": "“CLI-Anything：让所有软件都原生支持代理” -- CLI-Hub：https://clianything.cc/"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "lang": "Python",
    "today": 1059,
    "stars": 70077,
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "getarcaneapp/arcane",
    "lang": "Go",
    "today": 547,
    "stars": 9842,
    "desc": "面向所有人的现代化Docker管理"
  },
  {
    "repo": "NVIDIA/SkillEvaluator",
    "lang": "Python",
    "today": 312,
    "stars": 3759,
    "desc": "用于评估 AI 代理技能和插件的多层框架，包含质量关卡、语义重叠检测、合成评估数据集生成以及实时代理评估（衡量技能如何影响代理行为）。"
  },
  {
    "repo": "nvm-sh/nvm",
    "lang": "Shell",
    "today": 237,
    "stars": 96161,
    "desc": "Node 版本管理器 - 符合 POSIX 标准的 bash 脚本，用于管理多个活动的 node.js 版本。"
  },
  {
    "repo": "astral-sh/uv",
    "lang": "Rust",
    "today": 258,
    "stars": 92245,
    "desc": "一款用 Rust 编写的超快 Python 包和项目管理器。"
  },
  {
    "repo": "google-research/paper-orchestra",
    "lang": "Python",
    "today": 1524,
    "stars": 4351,
    "desc": "PaperOrchestra 是一个用于自动撰写人工智能研究论文的多智能体框架。"
  },
  {
    "repo": "google-labs-code/stitch-skills",
    "lang": "TypeScript",
    "today": 365,
    "stars": 10425,
    "desc": "一个专为与 Stitch MCP 服务器配合使用的 Agent Skill 库。每项技能均遵循 Agent Skills 开放标准，以兼容 Antigravity、Gemini CLI、Claude Code、Cursor 等编程代理。"
  },
  {
    "repo": "sveltejs/svelte",
    "lang": "JavaScript",
    "today": 692,
    "stars": 89637,
    "desc": "面向普通大众的网页开发"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 227846,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 156186,
    "lang": "TypeScript",
    "desc": "Claude Code是一款智能编码工具，运行在您的终端中，能够理解您的代码库，并通过执行日常任务、解释复杂代码和处理Git工作流来帮助您更快地编写代码——所有这些都通过自然语言命令来完成。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 188098,
    "lang": "Python",
    "desc": "AutoGPT的愿景是让每个人都能使用和基于其进行构建的无障碍人工智能。我们的使命是提供工具，让您能够专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 135802,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108929,
    "lang": "TypeScript",
    "desc": "一款开源人工智能代理，将Gemini的强大功能直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71350,
    "lang": "Python",
    "desc": "🌟 多智能体框架：首家人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61930,
    "lang": "Python",
    "desc": "用于自主人工智能的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 61088,
    "lang": "Python",
    "desc": "用于编排角色扮演型自主人工智能代理的框架。通过培养协作智能，CrewAI 使代理能够无缝协作，共同应对复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 50190,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30757,
    "lang": "Python",
    "desc": "一个轻量级、功能强大的多代理工作流框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 321368,
    "lang": "Shell",
    "desc": "一个行之有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 327517,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 306573,
    "lang": "JavaScript",
    "desc": "代理工具性能优化系统。针对Claude Code、Codex、Opencode、Cursor等工具的技能、直觉、记忆、安全性和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 197241,
    "lang": "Python",
    "desc": "客服代表技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 145037,
    "lang": "Python",
    "desc": "100 多个 AI 代理、代理技能和 RAG 应用——免费且开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 118962,
    "lang": "JavaScript",
    "desc": "适用于 AI 编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 70077,
    "lang": "Python",
    "desc": "AI 代理技能，可在 Reddit、X、YouTube、HN、Polymarket 和网络上研究任何主题，然后综合生成有事实依据的摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 97774,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转化为精美的交互式图表。适用于 Claude Code、Codex 等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 61276,
    "lang": "JavaScript",
    "desc": "适用于 Claude Code 和 AI 代理的营销技能。转化率优化 (CRO)、文案撰写、搜索引擎优化 (SEO)、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 70850,
    "lang": "Python",
    "desc": "可从文本中去除 AI 生成写作迹象的客服代表技能"
  }
];
