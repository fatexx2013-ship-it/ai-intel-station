// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-22）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-22",
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
    "date": "2026-10-22",
    "title": "通用汽车安吉星服务将全面升级：引入 AI 助手，还能帮你控车、排障",
    "desc": "IT之家 10 月 22 日消息，据外媒 motor1 今天（22 日）凌晨报道，通用汽车将对旗下安吉星车联网服务进行全面升级，引入 AI 助手，让车主能够直接询问车辆信息、通过语音控制部分功能，还能借助 AI 排查车辆…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/016/175.htm"
  },
  {
    "date": "2026-10-22",
    "title": "通用汽车押注 AI、新型电池，目标令电动汽车研发周期减半",
    "desc": "IT之家 10 月 22 日消息，美国电动汽车市场经历剧烈调整之际，通用汽车再次强调仍看好电动汽车的未来。当地时间 21 日，通用汽车总裁马可 · 睿思在纽约举行的 GM Forward 活动上重申，公司不会放弃电动汽车…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/016/180.htm"
  },
  {
    "date": "2026-10-21",
    "title": "理想宣布：电池自燃报废赔新车！自研6年后有底气了",
    "desc": "电池、电驱、超充一把梭，冬天多跑30公里",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504551.html"
  },
  {
    "date": "2026-10-21",
    "title": "飞书豆包工作AI先锋未来人才大赛：企业正在争抢会用AI做成事的人",
    "desc": "先看真实问题解决力",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504608.html"
  },
  {
    "date": "2026-10-20",
    "title": "比亚迪成为2026年APEC会议官方合作伙伴",
    "desc": "2026年10月16日，比亚迪集团正式成为亚太经合组织第三十三次领导人非正式会议官方合作伙伴",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504452.html"
  },
  {
    "date": "2026-10-20",
    "title": "RSI三块关键拼图，MemT 1.0从模型层补上「记忆」",
    "desc": "把记忆原生焊进Transformer",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504456.html"
  },
  {
    "date": "2026-10-20",
    "title": "国模Agent第一！MiniMax爆改Flash战力，全时段大肥鱼谷价",
    "desc": "兔皮底下，竟然是MiniMax！",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/504517.html"
  },
  {
    "date": "2026-10-16",
    "title": "科技爱好者周刊（第 415 期）：3D 版《看不见的城市》",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 湖北咸宁梓山湖度假区的美术馆。（via）…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-415.html"
  },
  {
    "date": "2026-10-08",
    "title": "科技爱好者周刊（第 414 期）：Jev 决策模型有什么用",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 国产首列数字地铁列车 VELLINK，完…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html"
  }
];

export const models = [
  {
    "vendor": "Recursive",
    "name": "Flint (free)",
    "date": "2026-10-22",
    "desc": "Flint是来自递归的开放式专家混合模型，大约有2个，上下文 262k。",
    "url": "https://openrouter.ai/recursive/flint-v1.0:free"
  },
  {
    "vendor": "MiniMax",
    "name": "MiniMax M3.1 Flash (free)",
    "date": "2026-10-19",
    "desc": "MiniMax-M3，上下文 1000k。",
    "url": "https://openrouter.ai/minimax/minimax-m3.1-flash:free"
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
  },
  {
    "vendor": "Meta",
    "name": "Muse Spark Open",
    "date": "2026-10-16",
    "desc": "Muse Spark Open是一种编码优化的开放权重模型，上下文 1049k。",
    "url": "https://openrouter.ai/meta/muse-spark-open"
  }
];

export const trending = [
  {
    "repo": "cloudflare/security-audit-skill",
    "lang": "JavaScript",
    "today": 1997,
    "stars": 36396,
    "desc": "用于多阶段安全审核的编码代理技能，具有经过独立验证的机器可读结果"
  },
  {
    "repo": "vllm-project/vllm",
    "lang": "Python",
    "today": 439,
    "stars": 94853,
    "desc": "LLM的高吞吐量和内存效率推断和服务引擎"
  },
  {
    "repo": "stablyai/orca",
    "lang": "TypeScript",
    "today": 1543,
    "stars": 101207,
    "desc": "ORCA是与代理团队合作的地方（例如Grok Bot、Claude Code ）。使用您自己的订阅运行任何编码代理。可在桌面、移动和远程运行时使用。"
  },
  {
    "repo": "headroomlabs-ai/headroom",
    "lang": "Python",
    "today": 477,
    "stars": 77239,
    "desc": "在工具输出、日志、文件和RAG块到达LLM之前对其进行压缩。编码代理的令牌减少20% ， JSON的令牌减少60-95% ，答案相同。库、代理、MCP服务器。"
  },
  {
    "repo": "DietrichGebert/ponytail",
    "lang": "JavaScript",
    "today": 2051,
    "stars": 171579,
    "desc": "让你的人工智能代理像房间里最懒惰的高级开发人员一样思考。最好的代码是你从未写过的代码。"
  },
  {
    "repo": "Comfy-Org/ComfyUI",
    "lang": "Python",
    "today": 914,
    "stars": 141496,
    "desc": "最强大、模块化的扩散模型GUI、API和后端，具有图形/节点界面。世界上最快的本地推理引擎。"
  },
  {
    "repo": "supabase/supabase",
    "lang": "TypeScript",
    "today": 509,
    "stars": 112983,
    "desc": "Postgres开发平台。Supabase为您提供了一个专用的Postgres数据库，用于构建您的Web、移动和人工智能应用程序。"
  },
  {
    "repo": "twentyhq/twenty",
    "lang": "TypeScript",
    "today": 105,
    "stars": 59144,
    "desc": "Salesforce的开放式替代方案，专为人工智能而设计。"
  },
  {
    "repo": "shiyu-coder/Kronos",
    "lang": "Python",
    "today": 570,
    "stars": 42812,
    "desc": "Kronos ：金融市场语言的基础模型"
  },
  {
    "repo": "akitaonrails/ai-memory",
    "lang": "Rust",
    "today": 303,
    "stars": 12313,
    "desc": "针对座席编码CLI的长期记忆解决方案，以及促进不同座席供应商之间切换的解决方案"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 219661,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 152748,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187699,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 130312,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107490,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70955,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61516,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59964,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49252,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30202,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 303154,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 299841,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 285704,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 182756,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 142528,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 109323,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 64987,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 87062,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 55837,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 59291,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
