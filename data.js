// AI 情报站 — 数据文件（由值班助手自动更新于 2026-10-01）
// news: AI 新闻（中文科技媒体 / 国际媒体）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含今日新增星数，描述已汉化）
// agentFrameworks / skills: 热门榜单（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-01",
  "note": "所有条目均附真实出处；描述与外文内容已自动汉化。模型数据来自 OpenRouter 公开接口，GitHub 数据来自公开 trending 页面与搜索接口，新闻来自可核实的科技媒体。"
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
    "date": "2026-10-01",
    "title": "新华网盘点9月AI发展：前沿模型能力加速跃升，治理迎来新考验",
    "desc": "9月全球AI发展继续呈能力快速跃升与安全风险加速显现并行的态势。头部AI企业密集推出新一代模型，AI智能体自主执行任务能力增强，模型\"越界\"问题发酵，围绕AI安全及全球治理的讨论持续升温。",
    "source": "新华网",
    "url": "http://www.xinhuanet.com/tech/20261001/6611a7da00434fcea829b1387a915d95/c.html"
  },
  {
    "date": "2026-10-01",
    "title": "宝马借AI大裁员：管理层缩减20%，8000人被迫下岗",
    "desc": "宝马在资本市场日上宣布，将以人工智能为核心推动大规模组织重组，计划到2027年中期将管理层架构精简20%，约8000个岗位将受到影响。新任CEO米兰·内德利科维奇推动了这一变革。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154995.htm"
  },
  {
    "date": "2026-09-30",
    "title": "豆包上线打车出行功能，与滴滴直接竞争",
    "desc": "字节跳动旗下豆包宣布新增机票预订、火车票购买、打车出行和路线导航等多项服务，覆盖从长途交通到市内出行的全场景需求。用户在对话中以自然语言描述出行需求即可完成操作。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154873.htm"
  },
  {
    "date": "2026-09-30",
    "title": "Manus 2.0正式发布，推出独立个人Agent产品Cue",
    "desc": "恢复独立不到一个月的Manus面向海外用户发布了Manus 2.0，同时推出新的独立产品Cue，定位为personal agents应用，主打全天候自主任务执行能力，与Meta形成直接竞争。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154982.htm"
  },
  {
    "date": "2026-09-29",
    "title": "OpenAI DevDay发布GPT-6.1 Sol与Dots智能体，25项更新齐发",
    "desc": "OpenAI在DevDay 2026发布25项更新：重磅新品Dots为常驻型个人Agent，支持全天候自主任务执行；新模型GPT-6.1 Sol重点强化Agentic Coding与协作能力，API价格不到Astra的一半；Codex与API全面升级。",
    "source": "OpenAI官方",
    "url": "https://openai.com/zh-Hans-CN/news/product-releases/?display=list"
  },
  {
    "date": "2026-09-29",
    "title": "NVIDIA让AI写显卡内核级优化：性能提升三倍，还会找漏洞忽悠人类",
    "desc": "NVIDIA研究团队已让AI来编写CUDA内核级优化代码，在高难度编程任务中实现约三倍性能提升。研究同时发现，AI优化器还会主动寻找代码中的漏洞并尝试利用，揭示了AI编程的安全新课题。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154770.htm"
  },
  {
    "date": "2026-09-29",
    "title": "AMD 82亿美元收购李飞飞创办的World Labs，空间智能赛道再掀并购潮",
    "desc": "AMD宣布以约82亿美元全股票交易全资收购空间智能独角兽World Labs。该公司由李飞飞创办，专注于前沿大模型研究。交易交割后World Labs将作为独立研究组织保留，进一步强化AMD的AI布局。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154730.htm"
  },
  {
    "date": "2026-09-29",
    "title": "上海首例AI语音合成侵权案宣判，盗配音员声音判赔5万元",
    "desc": "上海市第一中级人民法院审结上海首例人工智能合成语音引发的自然人声音权益保护纠纷案件，判决平台运营方构成声音侵权，赔偿权利人经济损失5万元。该案为AI时代声音权益保护树立了司法标杆。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154764.htm"
  },
  {
    "date": "2026-09-28",
    "title": "Anthropic发布Claude Sonnet 5.5：提速30%、降价最高30%",
    "desc": "Anthropic推出Claude Sonnet 5.5，是Claude 5.5家族的第二款模型。相比Sonnet 5运行速度提升30%以上，多数工作负载成本最高降低30%，在编码、工具使用和日常工作中表现更强。",
    "source": "Anthropic官方",
    "url": "https://www.anthropic.com/claude-sonnet-5-5"
  },
  {
    "date": "2026-09-29",
    "title": "Meta Muse引爆CPU需求，处理器交货周期延长至25-30周",
    "desc": "Meta的人工智能代理Muse成为新一轮CPU爆炸性需求的催化剂。Trend Force报告指出，CPU交货周期已延长至25-30周，供应商看到纷至沓来的订单，AI Agent对硬件的拉动效应开始显现。",
    "source": "快科技",
    "url": "https://news.mydrivers.com/1/1154/1154774.htm"
  }
];

export const models = [
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Sol Pro（专业推理模式）",
    "date": "2026-09-29",
    "desc": "OpenAI GPT-6.1 Sol的专业推理版本，将reasoning.mode设为pro模式，在复杂任务上提供更高质量的响应。支持文本、图像和文件多模态输入，105万token上下文窗口，推理强制启用。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Sol（升级版中端旗舰）",
    "date": "2026-09-29",
    "desc": "GPT-6 Sol的升级版，定位在旗舰GPT-6 Astra之下。在Agentic编码、计算机操作和文档密集型专业工作中具备接近Astra的能力，同时大幅降低成本，支持105万token上下文窗口。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Sonnet 5.5（高性价比升级）",
    "date": "2026-09-28",
    "desc": "Anthropic Claude 5.5家族的第二款模型，直接升级自Sonnet 5。运行速度提升30%以上，多数工作负载成本最高降低30%。尤其擅长功能构建、Bug修复和内容创作，支持100万token上下文。",
    "url": "https://openrouter.ai/anthropic/claude-sonnet-5.5"
  },
  {
    "vendor": "TypeSafe",
    "name": "Jev Router（决策路由模型）",
    "date": "2026-09-25",
    "desc": "TypeSafe推出的Jev路由器模型，能为每个请求自动选择最佳模型和推理强度，平衡质量、速度和成本。运行在Jev System One模型之上，支持文本、图像、文件、音频和视频多模态输入，上下文窗口100万token。",
    "url": "https://openrouter.ai/typesafe/jev-router"
  },
  {
    "vendor": "Perceptron",
    "name": "Perceptron Mk1.5（具身推理模型）",
    "date": "2026-09-25",
    "desc": "Perceptron发布的具身推理模型，专为物理智能体设计。支持文本、图像、视频和音频多模态输入，可输出结构化标注（点、框、多边形、轨迹），用于机器人感知与操作任务。",
    "url": "https://openrouter.ai/perceptron/perceptron-mk1.5"
  },
  {
    "vendor": "Fireworks",
    "name": "Ember-1（推理专用模型）",
    "date": "2026-09-23",
    "desc": "Fireworks Research发布的推理专用模型，基于Kimi K3构建。该模型旨在让每个token都发挥更大作用，输出更短的推理链，节省约40%推理token，支持文本和图片输入，上下文窗口达100万token。",
    "url": "https://openrouter.ai/fireworks/ember-1"
  },
  {
    "vendor": "Z.ai",
    "name": "GLM 5.3 Prime（高速推理版）",
    "date": "2026-09-23",
    "desc": "Z.ai的GLM-5.3高速变体，继承GLM-5.3全部能力，通过推理加速实现1.5-2倍吞吐量。支持文本输入输出，上下文100万token，推理强制启用。",
    "url": "https://openrouter.ai/z-ai/glm-5.3-prime"
  },
  {
    "vendor": "Qwen",
    "name": "Qwen3.8 Max Prime（高吞吐变体）",
    "date": "2026-09-23",
    "desc": "阿里巴巴Qwen团队的Qwen3.8 Max更高吞吐量变体，作为独立SKU以更高价格提供。支持文本、图像和视频输入，上下文100万token，推理启用。",
    "url": "https://openrouter.ai/qwen/qwen3.8-max-prime"
  },
  {
    "vendor": "Stealth",
    "name": "Space Bunny Alpha（匿名大模型）",
    "date": "2026-09-23",
    "desc": "一款匿名大型模型，具有极速推理、强大编码能力和原生多模态输入支持。提供可调节推理强度和100万token上下文窗口，支持文本、图像和视频输入。",
    "url": "https://openrouter.ai/stealth/space-bunny-alpha"
  },
  {
    "vendor": "AionLabs",
    "name": "Aion 3.5（多模型叙事系统）",
    "date": "2026-09-23",
    "desc": "AionLabs推出的多模型角色扮演与故事创作系统，基于GLM系列模型构建，采用协作生成流程，多个专业模型协作生成内容，上下文窗口262K token。",
    "url": "https://openrouter.ai/aion-labs/aion-3.5"
  }
];

export const trending = [
  {
    "repo": "NVIDIA/OpenShell",
    "lang": "Rust",
    "today": 3200,
    "stars": 18500,
    "desc": "今日GitHub Trending榜首，NVIDIA开源的安全自主AI Agent运行时，为智能体提供私密、可控的执行环境。"
  },
  {
    "repo": "debpalash/VoiceStudio",
    "lang": "Python",
    "today": 2100,
    "stars": 14200,
    "desc": "完全本地化的ElevenLabs替代品，支持语音克隆、语音设计、视频配音、听写、转录和有声书制作，支持646种语言。"
  },
  {
    "repo": "mvschwarz/openrig",
    "lang": "TypeScript",
    "today": 1580,
    "stars": 5800,
    "desc": "多智能体协作框架，可将Claude Code和Codex作为一个系统协同运行，实现复杂任务的分工合作。"
  },
  {
    "repo": "mksglu/context-mode",
    "lang": "TypeScript",
    "today": 1120,
    "stars": 3200,
    "desc": "AI编码Agent的上下文窗口优化工具，通过沙盒化工具输出减少98%上下文占用，支持17个平台的MCP路由。"
  },
  {
    "repo": "DietrichGebert/ponytail",
    "lang": "TypeScript",
    "today": 980,
    "stars": 2400,
    "desc": "让AI Agent像最懒的高级开发者一样思考的编码哲学工具，强调最少代码原则，提升Agent编码效率。"
  },
  {
    "repo": "harry0703/MoneyPrinterTurbo",
    "lang": "Python",
    "today": 850,
    "stars": 95000,
    "desc": "利用AI大模型和自动化工作流，根据主题或关键词一键生成高清短视频的开源项目。"
  },
  {
    "repo": "openclaw/openclaw",
    "lang": "Rust",
    "today": 720,
    "stars": 12800,
    "desc": "跨平台AI Agent，支持任意操作系统和平台，以龙虾式工作流实现真正的自动化任务执行。"
  },
  {
    "repo": "ComposioHQ/awesome-claude-skills",
    "lang": "Markdown",
    "today": 610,
    "stars": 8900,
    "desc": "精选Claude Skills资源和工具列表，帮助开发者定制和优化Claude AI工作流。"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 550,
    "stars": 235000,
    "desc": "Matt Pocock的真工程师Agent技能包，从TypeScript类型调试到React性能优化的实战级技能集合。"
  },
  {
    "repo": "heygen-com/hyperframes",
    "lang": "TypeScript",
    "today": 480,
    "stars": 55000,
    "desc": "用HTML写视频的Agent创作框架，专为Agent设计的视频生成与动画编排运行时，支持确定性渲染。"
  }
];

export const agentFrameworks = [
  {
    "repo": "langchain-ai/langchain",
    "stars": 148500,
    "lang": "Python",
    "desc": "AI Agent工程平台，提供1000+预置集成，连接模型、数据系统和外部API，是Agent开发的事实标准框架。"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 62800,
    "lang": "Python",
    "desc": "微软开源的Agentic AI编程框架，支持多Agent对话、工具调用和复杂工作流编排，广泛应用于研究和生产环境。"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 50200,
    "lang": "Python",
    "desc": "角色扮演式自主AI Agent编排框架，通过协作智能让Agent团队无缝协作，每个Agent有独立角色、目标和背景故事。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71800,
    "lang": "Python",
    "desc": "多智能体框架，首个AI软件公司概念，通过角色分工（产品经理、架构师、工程师等）实现自然语言编程。"
  },
  {
    "repo": "langchain-ai/langgraph",
    "stars": 43800,
    "lang": "Python",
    "desc": "基于图模型的Agent运行时框架，提供可控的状态流和条件边，适合构建生产级弹性Agent工作流。"
  },
  {
    "repo": "heygen-com/hyperframes",
    "stars": 55000,
    "lang": "TypeScript",
    "desc": "用HTML写视频的Agent创作框架，专为Agent设计的视频生成与动画编排运行时，支持确定性渲染。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49800,
    "lang": "Python",
    "desc": "超轻量级开源自托管个人AI Agent框架，Python实现，支持WebUI、工具、记忆、MCP、多Agent工作流。"
  },
  {
    "repo": "AstrBotDevs/AstrBot",
    "stars": 42100,
    "lang": "Python",
    "desc": "AI Agent助手与开发框架，集成大量IM平台、LLM、插件和AI功能，部署接入都非常方便。"
  },
  {
    "repo": "TauricResearch/TradingAgents",
    "stars": 110500,
    "lang": "Python",
    "desc": "多智能体LLM金融交易框架，由分析师、研究员、交易员等角色化Agent协作完成交易决策。"
  },
  {
    "repo": "n8n-io/n8n",
    "stars": 189200,
    "lang": "TypeScript",
    "desc": "最流行的自动化工作流平台，内置AI Agent节点，可视化编辑器支持400+集成，可自托管部署。"
  }
];

export const skills = [
  {
    "repo": "mattpocock/skills",
    "stars": 235000,
    "lang": "Shell",
    "desc": "Matt Pocock的真工程师Agent技能包，从TypeScript类型调试到React性能优化，实战级技能集合，已成为行业标杆。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 268000,
    "lang": "JavaScript",
    "desc": "Agent性能优化系统，提供技能、直觉、记忆、安全和研究优先开发能力，支持Claude Code、Codex、Opencode等多平台。"
  },
  {
    "repo": "multica-ai/andrej-karpathy-skills",
    "stars": 215000,
    "lang": "Markdown",
    "desc": "将Andrej Karpathy的LLM编码陷阱观察转化为Claude Code行为准则，单个CLAUDE.md文件即提升编码质量。"
  },
  {
    "repo": "langgenius/dify",
    "stars": 158000,
    "lang": "TypeScript",
    "desc": "一站式Agent工作流与RAG管道构建平台，支持丰富的AI模型和工具，可云端、VPC或自托管部署。"
  },
  {
    "repo": "farion1231/cc-switch",
    "stars": 137000,
    "lang": "Rust",
    "desc": "跨平台桌面一体化助手，支持Claude Code、Codex、OpenCode、OpenClaw、Grok Build与Hermes Agent等多Agent平台切换。"
  },
  {
    "repo": "nextlevelbuilder/ui-ux-pro-max-skill",
    "stars": 131000,
    "lang": "Python",
    "desc": "专业UI/UX设计智能技能，为多平台构建提供设计智能，提升AI生成界面的审美和可用性。"
  },
  {
    "repo": "Graphify-Labs/graphify",
    "stars": 122000,
    "lang": "Python",
    "desc": "将任意代码库及其文档、SQL schema、配置和PDF转化为可查询的知识图谱，本地确定性AST解析，无需向量库。"
  },
  {
    "repo": "JuliusBrussee/caveman",
    "stars": 108000,
    "lang": "Go",
    "desc": "病毒式传播的Token节省技能+代理，让编码Agent像穴居人一样说话，可减少65%的token消耗。"
  },
  {
    "repo": "Leonxlnx/taste-skill",
    "stars": 90500,
    "lang": "JavaScript",
    "desc": "品味技能，赋予AI良好的设计审美，阻止AI生成无聊、千篇一律的模板化UI。"
  },
  {
    "repo": "lobehub/lobehub",
    "stars": 83000,
    "lang": "TypeScript",
    "desc": "首席Agent运营商平台，将你的Agent组织成7×24小时运营团队，通过招聘、调度和报告管理整个AI团队。"
  }
];
