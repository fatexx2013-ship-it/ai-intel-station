// AI 情报站 — 数据文件（自动生成于 2026-10-17）
// news: AI 新闻（中文来源：量子位等）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-17",
  "note": "所有条目均附真实出处；描述与外文内容已自动汉化。星标数据来自 GitHub，模型数据来自 OpenRouter 公开接口，新闻来自中文科技媒体。"
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
    "date": "2026-10-17",
    "title": "DeepSeek V4.1 Flash 1017 发布：许愿式编程一键成真",
    "desc": "DeepSeek V4.1 Flash 更新至 1017 版本，通过基于自反馈的强化学习提升游戏开发、3D 建模等从零构建完整项目的能力。",
    "source": "证券时报",
    "url": "https://c.m.163.com/news/a/L9F5FEBN053469RG.html"
  },
  {
    "date": "2026-10-17",
    "title": "清华特奖得主AI创业再+1：GeoPT一作入局物理世界模型",
    "desc": "从搭载物理建模能力的世界模型切入，清华特奖得主创办AI公司。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503880.html"
  },
  {
    "date": "2026-10-17",
    "title": "网易首个AI原生语音Agent「网易叭哥说」上线，10万元征集产品建议",
    "desc": "网易推出AI原生语音Agent，投入10万元征集真实产品建议，不卡专业学历。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503861.html"
  },
  {
    "date": "2026-10-17",
    "title": "优必选 Thinker-WM 霸榜三大具身世界模型基准",
    "desc": "优必选Thinker-WM多模态统一表征，单模型实现六大能力，三大基准全部第一。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503843.html"
  },
  {
    "date": "2026-10-17",
    "title": "范式智能联合睿思智联推出开源一站式生产级AI部署平台「模域」",
    "desc": "一站式生产级AI部署平台「模域ModelSphere」正式上线。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503829.html"
  },
  {
    "date": "2026-10-17",
    "title": "68岁亚马逊CTO：别让恐惧，替企业做AI决策",
    "desc": "亚马逊CTO Werner Vogels谈企业AI决策：经验没有压缩算法，不要因恐惧而止步。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503815.html"
  },
  {
    "date": "2026-10-17",
    "title": "百度世界2026五大亮点曝光",
    "desc": "10月15日百度官方公布百度世界2026五大亮点，企业和开发者值得关注。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503779.html"
  },
  {
    "date": "2026-10-17",
    "title": "中国机器人羽毛球连打1452拍！拿下吉尼斯",
    "desc": "中国机器人羽毛球连续对打1452拍创下吉尼斯纪录，背后是通用物理运动平台。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503756.html"
  },
  {
    "date": "2026-10-17",
    "title": "Gemini 4终于来了：谷歌重回御三家，API限时半价",
    "desc": "Google发布Gemini 4，输出上限大幅提升，API首发限时半价。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/503701.html"
  },
  {
    "date": "2026-10-17",
    "title": "Anthropic向美议员推介AI安全方案，拟为模型发布设置门槛",
    "desc": "Anthropic提交AI安全法案草案，建议对存在迫在眉睫风险的模型，政府可介入监管。",
    "source": "界面新闻",
    "url": "http://m.163.com/dy/article/L9EAEQ160534A4SC.html"
  }
];

export const models = [
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash 1017",
    "date": "2026-10-17",
    "desc": "DeepSeek V4.1 Flash 的 10月17日快照版本，稀疏混合专家模型，通过基于自反馈的强化学习提升游戏开发、3D建模等从零构建完整项目的能力。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash-1017"
  },
  {
    "vendor": "Elorian",
    "name": "Glimpse",
    "date": "2026-10-17",
    "desc": "Elorian推出的多模态视觉推理模型，直接对图像和视频进行推理，面向物理世界的视觉理解与复杂视觉推理。",
    "url": "https://openrouter.ai/elorian/glimpse"
  },
  {
    "vendor": "XingChen/TeleAI",
    "name": "Xing4.0 29B A4B (free)",
    "date": "2026-10-16",
    "desc": "中国电信AI团队TeleAI的开源混合专家语言模型，TeleChat系列继任者，29B总参数/4B激活。",
    "url": "https://openrouter.ai/xingchen-agi/xing4.0-29b-a4b:free"
  },
  {
    "vendor": "Reflection",
    "name": "Beam 1.0 501B A23B",
    "date": "2026-10-16",
    "desc": "Reflection开源推理模型，面向编码和长周期Agent工作流，501B总参数/23B激活的稀疏MoE架构。",
    "url": "https://openrouter.ai/reflection/beam-1.0-501b-a23b"
  },
  {
    "vendor": "Moondream",
    "name": "Moondream 3 Preview",
    "date": "2026-10-15",
    "desc": "9B总参数/2B激活的视觉语言MoE模型，支持视觉问答、字幕生成、OCR和视觉推理。",
    "url": "https://openrouter.ai/moondream/moondream3-preview"
  },
  {
    "vendor": "Moondream",
    "name": "Moondream 3.1",
    "date": "2026-10-15",
    "desc": "Moondream 3 Preview继任者，9B总参数/2B激活的视觉语言混合专家模型。",
    "url": "https://openrouter.ai/moondream/moondream3.1-9b-a2b"
  },
  {
    "vendor": "Meta",
    "name": "Muse Spark Open",
    "date": "2026-10-15",
    "desc": "Meta面向Agent编码工作流优化的开源模型，高首次尝试准确率、可靠工具调用和深度代码库理解。",
    "url": "https://openrouter.ai/meta/muse-spark-open"
  },
  {
    "vendor": "NVIDIA",
    "name": "Nemotron 3.5 Super VL",
    "date": "2026-10-15",
    "desc": "120B总参数/12B激活的多模态混合专家模型，支持文本、图像、文档、GUI截图和视频输入。",
    "url": "https://openrouter.ai/nvidia/nemotron-3.5-super-vl"
  },
  {
    "vendor": "Pareto",
    "name": "Pareto 26.9",
    "date": "2026-10-13",
    "desc": "面向研究、编码和Agent工作流的多模态复合模型，在广泛通用任务上提供前沿性能。",
    "url": "https://openrouter.ai/unbiased/pareto-26.9"
  },
  {
    "vendor": "LiquidAI",
    "name": "LFM2.5-24B-A2B",
    "date": "2026-10-13",
    "desc": "Liquid AI的混合专家推理模型，24B总参数/2.45B激活，回答前先推理，专为工具调用Agent构建。",
    "url": "https://openrouter.ai/liquid/lfm-2.5-24b-a2b"
  }
];

export const trending = [
  {
    "repo": "anthropics/claude-plugins-official",
    "lang": "Python",
    "today": 1552,
    "stars": 40390,
    "desc": "Anthropic官方管理的高质量Claude Code插件目录。"
  },
  {
    "repo": "K-Dense-AI/scientific-agent-skills",
    "lang": "Python",
    "today": 1158,
    "stars": 51389,
    "desc": "将任何AI代理变成AI科学家。科学领域排名第一的Agent技能库，25万+科学家使用，含177个验证技能和100+科学数据库。"
  },
  {
    "repo": "affaan-m/ECC",
    "lang": "JavaScript",
    "today": 1057,
    "stars": 281346,
    "desc": "代理线束性能优化系统，为Claude Code、Codex、Opencode、Cursor等提供技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "HKUDS/CLI-Anything",
    "lang": "Python",
    "today": 323,
    "stars": 53408,
    "desc": "「CLI-Anything：让所有软件Agent原生」，打造统一的CLI工具接入层。"
  },
  {
    "repo": "mksglu/context-mode",
    "lang": "TypeScript",
    "today": 449,
    "stars": 30167,
    "desc": "AI编码代理的上下文窗口优化：沙盒化工具输出（减少98%）、持久化会话内存、通过MCP+hooks强制跨17平台路由。"
  },
  {
    "repo": "ruvnet/ruflo",
    "lang": "TypeScript",
    "today": 672,
    "stars": 75566,
    "desc": "原始代理框架：部署智能多玩家集群、协调自主工作流、构建对话式AI系统，支持自适应记忆和向量RAG。"
  },
  {
    "repo": "android/skills",
    "lang": "Kotlin",
    "today": 163,
    "stars": 8019,
    "desc": "Android官方Skills技能库。"
  },
  {
    "repo": "obra/superpowers",
    "lang": "Shell",
    "today": 973,
    "stars": 300602,
    "desc": "有效的代理技能框架与软件开发方法论。"
  },
  {
    "repo": "cursor/plugins",
    "lang": "TypeScript",
    "today": 282,
    "stars": 11891,
    "desc": "Cursor插件规范及官方插件集合。"
  },
  {
    "repo": "debpalash/VoiceStudio",
    "lang": "Python",
    "today": 2301,
    "stars": 70842,
    "desc": "开源、完全本地化的ElevenLabs替代品——语音克隆、语音设计、视频配音、听写、转录和有声书创作，支持646种语言。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 214316,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 151226,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，位于终端中，了解你的代码库，通过执行日常任务、解释复杂代码和处理git工作流帮助你更快编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187612,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，让你专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 129537,
    "lang": "Rust",
    "desc": "在终端中运行的轻量级编码代理。"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107409,
    "lang": "TypeScript",
    "desc": "将Gemini的力量直接带入终端的开源AI代理。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70885,
    "lang": "Python",
    "desc": "多Agent框架：第一个人工智能软件公司，迈向自然语言编程。"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61443,
    "lang": "Python",
    "desc": "智能AI的编程框架。"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59773,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主AI代理的框架，通过协作智能让代理无缝处理复杂任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49093,
    "lang": "Python",
    "desc": "超轻量级、开源、自托管的个人AI代理框架，含WebUI、工具、内存、MCP、多代理工作流和聊天应用。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30091,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流框架。"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 300602,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 293960,
    "lang": "Shell",
    "desc": "真正工程师的技能，直接来自作者的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 281350,
    "lang": "JavaScript",
    "desc": "代理线束性能优化系统，为Claude Code、Codex、Opencode、Cursor等提供技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 181582,
    "lang": "Python",
    "desc": "代理技能的公共存储库。"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 142021,
    "lang": "Python",
    "desc": "100多个AI代理、代理技能和RAG应用，全部免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 107351,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 84450,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表，Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 64505,
    "lang": "Python",
    "desc": "研究Reddit、X、YouTube、HN、Polymarket和网络上任何主题，然后合成基础摘要的AI代理技能。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 57552,
    "lang": "Python",
    "desc": "从文本中删除AI生成文字迹象的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 55097,
    "lang": "JavaScript",
    "desc": "Claude Code和AI代理的营销技能：CRO、文案撰写、SEO、分析和增长工程。"
  }
];
