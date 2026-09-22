// AI 情报站 — 数据文件（由值班助手自动更新于 2026-09-23）
// news: AI 新闻（中文科技媒体 / 国际媒体）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含今日新增星数，描述已汉化）
// agentFrameworks / skills: 热门榜单（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-23",
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
    "date": "2026-09-22",
    "title": "2026 云栖大会开幕，以 Agentic AI 为核心锚点串起全链路",
    "desc": "2026 云栖大会于 9 月 22 日至 24 日在杭州举行，以「智以致用」为主题，设置多场论坛及四大主题展馆，以 Agentic AI 为核心锚点，串起芯片、云基础设施、模型能力与模型服务、Agentic 应用的完整链路。超节点真机展台、AI 眼镜与智能体电脑备受关注。",
    "source": "中国证券报",
    "url": "http://m.toutiao.com/group/7688430093944848938/"
  },
  {
    "date": "2026-09-22",
    "title": "OpenAI 发布 GPT-6 Sol 与 Luna 系列新模型，完善产品矩阵",
    "desc": "OpenAI 于 9 月 22 日发布 GPT-6 Sol 和 GPT-6 Luna 两款新模型。GPT-6 Sol 定位高端性价比，介于旗舰 Astra 与快速版 Luna 之间；GPT-6 Luna 则面向高吞吐、低延迟场景。两款模型均支持 Pro 推理模式，进一步完善了 GPT-6 产品线。",
    "source": "OpenRouter / 机器之心",
    "url": "https://www.jiqizhixin.com/articles/2026-09-16-2"
  },
  {
    "date": "2026-09-22",
    "title": "Anthropic 发布 Claude Opus 5.5 旗舰模型，对标 GPT-6",
    "desc": "Anthropic 于 9 月 22 日发布 Claude Opus 5.5，跳过 5.2 版本直接升级至 5.5。该模型是 Anthropic 的旗舰推理模型，专为高要求的推理、编码和长程智能体任务优化，被视为对标 GPT-6 Astra 的重磅升级。",
    "source": "智源社区 / OpenRouter",
    "url": "https://hub.baai.ac.cn/?tag_id=1026"
  },
  {
    "date": "2026-09-22",
    "title": "千问加速打造 Personal Agent，为 3 亿用户提供个性化智能服务",
    "desc": "在 2026 云栖大会上，千问宣布加速打造 Personal Agent。依托 Qwen 3.8 系列模型强大的 Agentic 能力，千问正在构建全新的 Personal Agent 形态，为 3 亿用户提供持续、个性化的智能服务。Qwen3.8-Max 在零参与下完成 33 轮自我迭代。",
    "source": "华尔街见闻",
    "url": "http://m.toutiao.com/group/7688440907394073124/"
  },
  {
    "date": "2026-09-22",
    "title": "OpenAI 敦促美国牵头为前沿 AI 制定全球标准",
    "desc": "OpenAI 于 9 月 22 日在博客文章中表示，为了安全地发展人工智能，有必要制定国际技术标准，特别是帮助界定涉及 AI 模型的哪些类事件应当通报，明确各国如何开展 AI 发展合作。此前 Anthropic 已引入埃森哲进行第三方安全评估。",
    "source": "36氪",
    "url": "https://m.36kr.com/newsflashes/3993781620898823"
  },
  {
    "date": "2026-09-21",
    "title": "2026 人工智能计算大会在京举行，共话智能体时代创新",
    "desc": "9 月 21 日，2026 人工智能计算大会（AICC 2026）在北京中关村国际创新中心举行。本届大会聚焦大模型、智能体加速演进催生的计算产业变革，以应用负载为核心牵引，汇聚芯片、系统、软件、模型与应用等全产业链力量。",
    "source": "光明网",
    "url": "http://m.toutiao.com/group/7688332889666224690/"
  },
  {
    "date": "2026-09-21",
    "title": "小米发布 MiMo V2.6 系列大模型，旗舰版超 1T 参数",
    "desc": "小米于 9 月 21 日发布 MiMo V2.6 系列大模型，包括旗舰版 MiMo-V2.6-Pro（超 1T 参数）、Flash 版（309B 总参数 / 15B 激活 MoE 架构）以及 UltraSpeed 高速版。Flash 版本已开源，标志着小米在基础模型领域的重大进展。",
    "source": "OpenRouter",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-pro"
  },
  {
    "date": "2026-09-21",
    "title": "SpaceXAI 发布 Grok 4.7，主打编码与智能体任务",
    "desc": "SpaceXAI 于 9 月 21 日发布 Grok 4.7，是其旗舰级编码、智能体任务与知识工作模型，接替 Grok 4.6。该模型在长时运行的智能体任务方面表现突出，但跑分成绩引发部分讨论。",
    "source": "机器之心 / 36氪",
    "url": "https://m.36kr.com/user/214166"
  },
  {
    "date": "2026-09-21",
    "title": "浪潮信息发布元脑 SD200 Ultra 超节点 AI 服务器",
    "desc": "在 2026 人工智能计算大会上，浪潮信息发布元脑 SD200 Ultra 超节点 AI 服务器。基于本土 AI 芯片，单机可承载运行 2.8 万亿参数的 Kimi K3 大模型，Token 生成时延首次突破 5.85 毫秒。",
    "source": "36氪",
    "url": "https://m.36kr.com/newsflashes?1610084494789121"
  },
  {
    "date": "2026-09-18",
    "title": "OpenAI 推出法律 AI 平台 Astra for Law",
    "desc": "当地时间 9 月 17 日，OpenAI 宣布推出面向法律行业的 AI 平台 Astra for Law。该平台基于 OpenAI 最新模型 GPT-6 Astra，专门为律师事务所和法律科技公司设计，标志着 AI 在垂直行业的进一步渗透。",
    "source": "36氪 / 新浪财经",
    "url": "https://36kr.com/newsflashes/3988227654679297"
  }
];

export const models = [
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Luna Pro（高速推理增强版）",
    "date": "2026-09-22",
    "desc": "GPT-6 Luna 的 Pro 推理模式版本，启用更高阶推理模式，面向高吞吐、低延迟的推理场景优化，是 OpenAI GPT-6 系列的入门级高速模型。",
    "url": "https://openrouter.ai/openai/gpt-6-luna-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Luna（高速经济型模型）",
    "date": "2026-09-22",
    "desc": "GPT-6 系列中的快速、高性价比模型，定位低于 GPT-6 Sol。适用于高吞吐量和对延迟敏感的应用场景，支持文本、图像与文件输入。",
    "url": "https://openrouter.ai/openai/gpt-6-luna"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Sol Pro（高端推理增强版）",
    "date": "2026-09-22",
    "desc": "GPT-6 Sol 的 Pro 推理模式版本，启用更高阶推理模式以获得更强的推理能力。定位介于旗舰 Astra 与快速版 Luna 之间的高端性价比型号。",
    "url": "https://openrouter.ai/openai/gpt-6-sol-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6 Sol（高端性价比模型）",
    "date": "2026-09-22",
    "desc": "GPT-6 系列中的高端性价比模型，定位在旗舰 GPT-6 Astra 之下、快速版 GPT-6 Luna 之上。平衡性能与成本，支持多模态输入与百万级上下文。",
    "url": "https://openrouter.ai/openai/gpt-6-sol"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Opus 5.5（旗舰推理模型）",
    "date": "2026-09-22",
    "desc": "Anthropic 的旗舰模型，专为高要求的推理、编码和长程智能体工作优化，是 Claude Opus 5 的继任者。跳过 5.2 版本直接升至 5.5，对标 GPT-6 系列。",
    "url": "https://openrouter.ai/anthropic/claude-opus-5.5"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Pro-UltraSpeed（小米旗舰高速版）",
    "date": "2026-09-21",
    "desc": "小米旗舰基础模型 MiMo-V2.6-Pro 的高速版本，基于相同的 1T 参数检查点构建，针对推理速度进行专项优化，大幅提升 Token 生成速率。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-pro-ultraspeed"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Flash（小米开源 MoE 模型）",
    "date": "2026-09-21",
    "desc": "小米开发的开源基础模型，采用混合专家（MoE）架构，总参数 309B、激活参数 15B。在保持高性能的同时显著降低推理成本。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-flash"
  },
  {
    "vendor": "Xiaomi",
    "name": "MiMo-V2.6-Pro（小米旗舰基础模型）",
    "date": "2026-09-21",
    "desc": "小米开发的旗舰基础模型，参数量超过 1T，旨在推动能力天花板。标志着小米在大模型领域跻身第一梯队。",
    "url": "https://openrouter.ai/xiaomi/mimo-v2.6-pro"
  },
  {
    "vendor": "SpaceXAI",
    "name": "Grok 4.7（编码与智能体旗舰模型）",
    "date": "2026-09-21",
    "desc": "SpaceXAI 的旗舰模型，专为编码、智能体任务和知识工作优化，是 Grok 4.6 的继任者。在长时运行的智能体场景中表现突出。",
    "url": "https://openrouter.ai/x-ai/grok-4.7"
  },
  {
    "vendor": "Qwen",
    "name": "Qwen3.8 Omni Flash（阿里全模态推理模型）",
    "date": "2026-09-21",
    "desc": "阿里巴巴推出的全模态推理模型，是首个围绕智能体能力构建的 Qwen 模型，原生支持音频-视频理解。支持实时音视频交互、多通道音频、视频聚合与远程 MCP 工具。",
    "url": "https://openrouter.ai/qwen/qwen3.8-omni-flash"
  }
];

export const trending = [
  {
    "repo": "google/ax",
    "lang": "Go",
    "today": 2324,
    "stars": 7437,
    "desc": "Google 开源的智能体编排运行时，今日 GitHub Trending 涨幅最大，单日新增超 2300 stars。"
  },
  {
    "repo": "anthropics/financial-services",
    "lang": "Python",
    "today": 436,
    "stars": 36269,
    "desc": "Anthropic 官方金融服务智能体方案库，今日 Trending 热门。"
  },
  {
    "repo": "mvt-project/mvt",
    "lang": "Python",
    "today": 441,
    "stars": 14004,
    "desc": "移动设备取证工具包（Mobile Verification Toolkit），用于检测移动设备是否被入侵，今日热门。"
  },
  {
    "repo": "agent-substrate/substrate",
    "lang": "Go",
    "today": 301,
    "stars": 2902,
    "desc": "Agent Substrate 核心系统——面向智能体的底层运行时系统，今日 Trending 新秀。"
  },
  {
    "repo": "dream-num/univer",
    "lang": "TypeScript",
    "today": 202,
    "stars": 15298,
    "desc": "AI 智能体的办公套件运行时——一站式集成电子表格、文档、幻灯片、画布、关系表和 PDF。"
  },
  {
    "repo": "davila7/claude-code-templates",
    "lang": "Python",
    "today": 113,
    "stars": 31062,
    "desc": "用于配置和监控 Claude Code 的 CLI 工具，帮助开发者更好地管理编码智能体。"
  },
  {
    "repo": "superdesigndev/treg",
    "lang": "Python",
    "today": 197,
    "stars": 2148,
    "desc": "智能体工具的 OpenRouter——统一的 Agent 工具发现与调用平台，今日热门新项目。"
  },
  {
    "repo": "browser-use/video-use",
    "lang": "Python",
    "today": 155,
    "stars": 25762,
    "desc": "用编码智能体编辑视频——browser-use 团队推出的视频编辑智能体框架。"
  },
  {
    "repo": "langchain-ai/langchain",
    "lang": "Python",
    "today": 280,
    "stars": 147200,
    "desc": "业界最广泛采用的开源智能体工程框架，持续热门。"
  },
  {
    "repo": "anthropics/claude-code",
    "lang": "TypeScript",
    "today": 420,
    "stars": 148500,
    "desc": "Anthropic 官方终端编码智能体，理解你的代码库，通过自然语言执行日常开发任务。"
  }
];

export const agentFrameworks = [
  {
    "repo": "OpenClaw社区/OpenClaw",
    "stars": 382000,
    "lang": "多语言",
    "desc": "MIT 协议的自托管个人 AI 助手（「龙虾之道」），数月内飙升至约 38.2 万 GitHub stars，支持任意模型与 25+ 消息平台。"
  },
  {
    "repo": "deepseek-ai/deepseek-harness",
    "stars": 160000,
    "lang": "多语言",
    "desc": "DeepSeek 开源的智能体线束框架，2026 年 8 月开源，数周内突破 16 万 stars。严格遵循「一切皆插件」的设计理念，核心极简，模型、工具与界面均以插件形式挂载。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 148500,
    "lang": "TypeScript",
    "desc": "Anthropic 官方终端编码智能体：理解代码库、执行任务、解释复杂代码、处理 Git 工作流。"
  },
  {
    "repo": "langchain-ai/langchain",
    "stars": 147200,
    "lang": "Python",
    "desc": "业界最广泛采用的开源智能体工程平台，拥有 1000+ 预构建集成，连接模型与数据系统、向量数据库及外部 API。"
  },
  {
    "repo": "browser-use/browser-use",
    "stars": 115667,
    "lang": "Python",
    "desc": "让 AI 代理真正使用浏览器的框架，支持多智能体协作与丰富的浏览器操作。"
  },
  {
    "repo": "cline/cline",
    "stars": 67000,
    "lang": "TypeScript",
    "desc": "开源编码智能体 CLI，支持 IDE、CLI 和 SDK 三种形态，Apache-2.0 协议，可在本地模型运行。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70534,
    "lang": "Python",
    "desc": "多智能体框架：第一个人工智能软件公司，迈向自然语言编程。"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58847,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主 AI 代理的框架，通过协作智能让代理无缝处理复杂任务。"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61089,
    "lang": "Python",
    "desc": "面向代理式 AI 的编程框架，支持多智能体对话与协作。"
  },
  {
    "repo": "google/ax",
    "stars": 7437,
    "lang": "Go",
    "desc": "Google 开源的智能体编排运行时，今日 GitHub Trending 涨幅最大，单日新增超 2300 stars。"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 289467,
    "lang": "Shell",
    "desc": "实用的代理技能框架与软件开发方法论，包含 20+ 经过实战检验的技能，覆盖测试驱动开发、调试、结对编程等模式。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 266727,
    "lang": "Shell",
    "desc": "给真正工程师的技能，直接来自作者的 .agents 目录，覆盖全栈工程实践。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 264190,
    "lang": "JavaScript",
    "desc": "代理线束性能优化系统：面向 Claude Code、Codex、Opencode、Cursor 等的技能、本能、记忆、安全与研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 177391,
    "lang": "Python",
    "desc": "Anthropic 官方 Agent Skills 公共仓库，官方维护的技能集合。"
  },
  {
    "repo": "DietrichGebert/ponytail",
    "stars": 132100,
    "lang": "JavaScript",
    "desc": "让你的 AI 代理像最懒的资深开发者一样思考——最好的代码是你从未写过的代码，代码思维优化技能包。"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 139228,
    "lang": "Python",
    "desc": "100+ AI 代理、代理技能与 RAG 应用——免费开源，涵盖丰富的技能实现参考。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 97918,
    "lang": "JavaScript",
    "desc": "面向 AI 编码代理的生产级工程技能集合，覆盖定义、规划、构建、验证、评审、发布全流程。"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 54700,
    "lang": "多语言",
    "desc": "架构图生成技能——帮助 AI 代理快速生成系统架构图与技术设计文档。"
  },
  {
    "repo": "mukul975/Anthropic-Cybersecurity-Skills",
    "stars": 33052,
    "lang": "Python",
    "desc": "817 个结构化网络安全技能，映射到 MITRE ATT&CK、NIST CSF 2.0 等六大框架。"
  },
  {
    "repo": "cloudflare/security-audit-skill",
    "stars": 18470,
    "lang": "JavaScript",
    "desc": "Cloudflare 出品的多阶段安全审计技能，产出独立验证、机器可读的审计结论。"
  }
];
