// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-24）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-24",
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
    "date": "2026-10-24",
    "title": "Kimi K3.1 Pro 正式发布：月之暗面最强 3 万亿级模型，编程智能体测评超 GPT-6",
    "desc": "IT之家 10 月 24 日消息，今天（24 日）凌晨，月之暗面 Kimi 宣布正式推出 Kimi K3.1 系列的第一个模型 ——K3.1 Pro，也是公司迄今能力最强的 3 万亿级参数模型，支持 100 万上下文。高…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/017/284.htm"
  },
  {
    "date": "2026-10-24",
    "title": "“行为难以预测”存在安全隐患，OpenAI 将不再在实时互联网上训练模型",
    "desc": "IT之家 10 月 24 日消息，当地时间 23 日，OpenAI 宣布，今后将使用缓存的网页内容和模拟互联网环境训练模型，不再让模型直接接入真实互联网。公司认为，模型的行为仍然难以预测，直接赋予联网权限存在安全隐患。竞…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/017/287.htm"
  },
  {
    "date": "2026-10-24",
    "title": "OpenAI 为前沿 AI 训练 / 评估开启“断网闭关”模式，遏制其越狱攻击",
    "desc": "IT之家 10 月 24 日消息，OpenAI 昨日（10 月 23 日）发布博文，宣布针对最先进“前沿模型”的训练与评估环境，已经实施更严格的安全管控，明确在模型训练期间，不得直接访问实时互联网。该公司称出于对 AI …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/017/289.htm"
  },
  {
    "date": "2026-10-24",
    "title": "谷歌 CEO 皮查伊：距离 AI 能自我改进的“最终状态”，我们还有很长的路要走",
    "desc": "IT之家 10 月 24 日消息，据《商业内幕》报道，谷歌 CEO 桑达尔 · 皮查伊认为，距离 AI 能够完全自主地改进自身，还有很长的路要走。皮查伊透露，谷歌研究人员开始使用 AI 智能体辅助开发模型，但技术仍处于起…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/017/290.htm"
  },
  {
    "date": "2026-10-23",
    "title": "科技爱好者周刊（第 416 期）：编程已经面目全非",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 本周启用的上海大歌剧院内部装修。（via…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-416.html"
  },
  {
    "date": "2026-10-23",
    "title": "百度世界2026前瞻：10+重磅分论坛，全面解码AI时代的智能组织进化路径",
    "desc": "10月21日，百度官方公众号发文披露了百度世界2026分论坛的更多议程信息。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504901.html"
  },
  {
    "date": "2026-10-22",
    "title": "谁在给OpenAI供应具身数据？",
    "desc": "挤进全球Physical AI核心供应链",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504800.html"
  },
  {
    "date": "2026-10-22",
    "title": "既能“做选择题”，也能“做填空题”——星辰意图理解模型Xing4.0-29B-Intent发布",
    "desc": "中电信人工智能科技有限公司星辰通用人工智能实验室正式发布并开源意图理解专用模型 Xing4.0-29B-Intent",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504832.html"
  },
  {
    "date": "2026-10-22",
    "title": "特斯拉利润腰斩，一夜跌没“通用汽车”！马斯克：FSD在中国也会遥遥领先",
    "desc": "FSD一年增长70万付费用户",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504841.html"
  },
  {
    "date": "2026-10-22",
    "title": "又一国产决策模型发布！准确率超过微软和Jev等决策模型",
    "desc": "10月22日，蚂蚁数科正式发布决策模型 LingDT-Decision-1.0。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504879.html"
  }
];

export const models = [
  {
    "vendor": "MoonshotAI",
    "name": "Kimi K3.1 Pro",
    "date": "2026-10-24",
    "desc": "Kimi K3，上下文 1049k。",
    "url": "https://openrouter.ai/moonshotai/kimi-k3.1-pro"
  },
  {
    "vendor": "Recursive",
    "name": "Flint (free)",
    "date": "2026-10-22",
    "desc": "Flint是来自递归的开放式专家混合模型，大约有2个，上下文 262k。",
    "url": "https://openrouter.ai/recursive/flint-v1.0:free"
  },
  {
    "vendor": "MiniMax",
    "name": "MiniMax M3.1 Flash",
    "date": "2026-10-19",
    "desc": "MiniMax-M3，上下文 1049k。",
    "url": "https://openrouter.ai/minimax/minimax-m3.1-flash"
  },
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash 1017",
    "date": "2026-10-17",
    "desc": "DeepSeek V4，上下文 1049k。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017"
  },
  {
    "vendor": "Elorian",
    "name": "Glimpse",
    "date": "2026-10-17",
    "desc": "Glimpse是Elorian的多模态视觉推理模型，专为物理世界中的视觉理解和复杂的视觉推理而构建，上下文 262k。",
    "url": "https://openrouter.ai/elorian/glimpse"
  },
  {
    "vendor": "XingChen",
    "name": "Xing4.0 29B A4B (free)",
    "date": "2026-10-17",
    "desc": "Xing4，上下文 262k。",
    "url": "https://openrouter.ai/xingchen-agi/xing4.0-29b-a4b:free"
  },
  {
    "vendor": "Reflection",
    "name": "Beam 1.0 501B A23B",
    "date": "2026-10-16",
    "desc": "梁1，上下文 1049k。",
    "url": "https://openrouter.ai/reflection/beam-1.0-501b-a23b"
  },
  {
    "vendor": "Inception",
    "name": "Mercury 3",
    "date": "2026-10-16",
    "desc": "Mercury 3是来自Inception的基于扩散的语言模型，也是该实验室迄今为止最强大的模型，上下文 1000k。",
    "url": "https://openrouter.ai/inception/mercury-3"
  },
  {
    "vendor": "Moondream",
    "name": "Moondream 3 Preview",
    "date": "2026-10-16",
    "desc": "Moondream 3 Preview是来自Moondream的视觉语言模型，总参数为9B ，活跃参数为2B （专家混合），上下文 32k。",
    "url": "https://openrouter.ai/moondream/moondream3-preview"
  },
  {
    "vendor": "Moondream",
    "name": "Moondream 3.1",
    "date": "2026-10-16",
    "desc": "Moondream 3，上下文 32k。",
    "url": "https://openrouter.ai/moondream/moondream3.1-9b-a2b"
  }
];

export const trending = [
  {
    "repo": "cloudflare/security-audit-skill",
    "lang": "JavaScript",
    "today": 2706,
    "stars": 42084,
    "desc": "用于多阶段安全审核的编码代理技能，具有经过独立验证的机器可读结果"
  },
  {
    "repo": "php/php-src",
    "lang": "C",
    "today": 722,
    "stars": 41557,
    "desc": "PHP解释器"
  },
  {
    "repo": "anthropics/knowledge-work-plugins",
    "lang": "Python",
    "today": 643,
    "stars": 32194,
    "desc": "主要供知识工作者在Claude Cowork中使用的插件的开源存储库"
  },
  {
    "repo": "NVIDIA/OpenShell",
    "lang": "Rust",
    "today": 1240,
    "stars": 18762,
    "desc": "OpenShell是自主AI代理的安全、私有运行时。"
  },
  {
    "repo": "Renhuai123/ziwei-doushu",
    "lang": "TypeScript",
    "today": 547,
    "stars": 6843,
    "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据"
  },
  {
    "repo": "SnailSploit/Claude-Red",
    "lang": "Python",
    "today": 209,
    "stars": 8455,
    "desc": "claude-red是为Claude技能系统设计的攻击性安全技能精心策划的图书馆。每个技能都是一个结构化的SKILL.md文件，为Claude提供了针对特定攻击面的专家级方法—从SQLi到shellcode ，从EDR规避到利用开发。"
  },
  {
    "repo": "OpenBMB/VoxCPM",
    "lang": "Python",
    "today": 144,
    "stars": 40242,
    "desc": "VoxCPM2 ：用于多语言语音生成、创意语音设计和真实克隆的无标记TTS"
  },
  {
    "repo": "nodejs/node",
    "lang": "JavaScript",
    "today": 93,
    "stars": 122852,
    "desc": "Node.js JavaScript运行时 ✨🐢🚀✨"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 220613,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 153170,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187717,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 130655,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107563,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70996,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61540,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60042,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49304,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30246,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 304232,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 301800,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 287312,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 183292,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 142819,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 109913,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 65211,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 88282,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 56240,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 59991,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
