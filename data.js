// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-05）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-05",
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
    "date": "2026-11-05",
    "title": "比尔盖茨批评美国政府：AI 模型能力惊人，不作为让世界面临生物武器风险",
    "desc": "北京时间 11 月 5 日，据《金融时报》报道，微软联合创始人比尔 · 盖茨 (Bill Gates) 指责特朗普政府阻碍了防范 AI 风险的努力。盖茨周三在《金融时报》举办的 AI 未来峰会上表示，AI 模型展现出的“…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/022/512.htm"
  },
  {
    "date": "2026-11-05",
    "title": "消息称荣耀 700 系列采用同档唯一双 8 芯片，Pro 用上骁龙 8 Gen5",
    "desc": "IT之家 11 月 5 日消息，据博主 @数码闲聊站 今日爆料，荣耀 700 系列手机采用同档唯一双 8 芯片，标准版是骁龙 8s Gen4，Pro 直接了上骁龙 8 Gen5，拥有更强性能 + 更大电池 + 潜望镜 +…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/022/518.htm"
  },
  {
    "date": "2026-11-05",
    "title": "百度无人车搞出“黑客帝国”！世界模型实时推演全局，跑一天抵三年",
    "desc": "连路人都有自己的想法",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507647.html"
  },
  {
    "date": "2026-11-04",
    "title": "让Agent首次拥有“视听双流记忆”：openJiuwen Agent-Memory看懂长视频，关键事件一个不落",
    "desc": "长视频记忆精度飙升，问答时延最高降97%",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507533.html"
  },
  {
    "date": "2026-11-04",
    "title": "虎鲸文娱“鲸锐AI”平台正式上线，AI视频单分钟成本节省30%以上",
    "desc": "11月4日，虎鲸文娱集团打造的行业首个AI影视制作与管理平台“鲸锐AI”正式上线。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507567.html"
  },
  {
    "date": "2026-11-04",
    "title": "超维动力全栈矩阵亮相2026香港金融科技周，具身智能硬科技引爆全场",
    "desc": "一场别开生面的具身智能科技盛宴",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507574.html"
  },
  {
    "date": "2026-11-04",
    "title": "不靠堆砌数据，让机器人看懂真实物理世界 &#124; 招商局狮子山实验室发布「驭物™ Lion-ER-35B-A3B」具身推理模型",
    "desc": "仅激活3B参数，十项基准全线提升！",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507586.html"
  },
  {
    "date": "2026-10-30",
    "title": "科技爱好者周刊（第 417 期）：不要让 AI 代表你",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 四川宜宾市的青少年发展中心，建筑中庭的透…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-417.html"
  },
  {
    "date": "2026-10-23",
    "title": "科技爱好者周刊（第 416 期）：编程已经面目全非",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 本周启用的上海大歌剧院内部装修。（via…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-416.html"
  }
];

export const models = [
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
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Terra (batch)",
    "date": "2026-10-27",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-terra:batch"
  },
  {
    "vendor": "MoonshotAI",
    "name": "Kimi K3.1 Pro",
    "date": "2026-10-24",
    "desc": "Kimi K3，上下文 1049k。",
    "url": "https://openrouter.ai/moonshotai/kimi-k3.1-pro"
  }
];

export const trending = [
  {
    "repo": "NVIDIA/auto-ontology",
    "lang": "Python",
    "today": 2050,
    "stars": 5068,
    "desc": "Auto Ontology是一个Python框架，用于在数据上构建基于图的语义推理层。它为LLM和代理工作流程提供了确定性的查询生成、更好的上下文检索和更可解释的人工智能。"
  },
  {
    "repo": "max-sixty/worktrunk",
    "lang": "Rust",
    "today": 531,
    "stars": 11047,
    "desc": "Worktrunk是用于Git工作树管理的CLI ，专为并行AI代理工作流程而设计"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 1379,
    "stars": 313342,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "floci-io/floci",
    "lang": "Java",
    "today": 1090,
    "stars": 29638,
    "desc": "轻盈、蓬松且始终免费- AWS本地模拟器替代方案"
  },
  {
    "repo": "thedotmack/claude-mem",
    "lang": "TypeScript",
    "today": 1172,
    "stars": 112875,
    "desc": "每个座席跨会话的持久上下文–捕获座席在会话期间执行的所有操作，使用AI对其进行压缩，并将相关上下文注入到未来的会话中。适用于Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode等"
  },
  {
    "repo": "vercel-labs/agent-desktop",
    "lang": "Rust",
    "today": 2470,
    "stars": 15151,
    "desc": "AI代理的计算机使用CLI"
  },
  {
    "repo": "github/spec-kit",
    "lang": "Python",
    "today": 808,
    "stars": 147317,
    "desc": "帮助您开始使用SDD或任何其他流程的工💫具包！"
  },
  {
    "repo": "The-PR-Agent/pr-agent",
    "lang": "Python",
    "today": 280,
    "stars": 14776,
    "desc": "🚀 公关代理人：最初的开源公关审稿人。此项目不是Qodo免费会员等级。"
  },
  {
    "repo": "harry0703/MoneyPrinterTurbo",
    "lang": "Python",
    "today": 617,
    "stars": 138985,
    "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow."
  },
  {
    "repo": "garrytan/gstack",
    "lang": "TypeScript",
    "today": 290,
    "stars": 139353,
    "desc": "使用Garry Tan确切的Claude Code设置： 23个自以为是的工具，分别担任首席执行官、设计师、工程经理、发布经理、文档工程师和QA"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 224606,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 154559,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187909,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 133195,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108733,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71174,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61705,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60511,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49827,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30501,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 312454,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 313347,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 297268,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 187428,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 143901,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 113293,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 66619,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 93479,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 58532,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 64860,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
