// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-01）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-01",
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
    "date": "2026-11-01",
    "title": "HMD 诺基亚 2360 Flip 翻盖功能机曝光：紫光展锐 T127 芯片，1.8 英寸外屏",
    "desc": "IT之家 11 月 1 日消息，消息源 smashx_60 现已曝光了 HMD 旗下诺基亚 2360 Flip 翻盖功能机，该机据称为 ODM 产品。该机提供深灰色、酒红色、蓝绿色三种配色可选，配备 1.8 英寸外屏和 …",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/020/834.htm"
  },
  {
    "date": "2026-11-01",
    "title": "海贝推出 HiBy R6III SE 便携 Hi-Fi 播放器：4 颗 CS43198 DAC 芯片，1798 元",
    "desc": "IT之家 11 月 1 日消息，海贝宣布推出一款 HiBy R6III SE 便携 Hi-Fi 播放器，定价为 1798 元。该机整体尺寸为 129.4 x 73.1 x 15.6 mm，重量为 250 g。提供黑色和海…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/020/836.htm"
  },
  {
    "date": "2026-11-01",
    "title": "OpenAI、谷歌、微软和 Anthropic 联手推行 AI 数据抓取退出标准",
    "desc": "IT之家 11 月 1 日消息，OpenAI、谷歌、微软以及 Anthropic 近日宣布将采用一项新标准，内容发布方可以借助该标准选择拒绝 AI 抓取自家网站内容。借助这项管控机制，内容发布方可以一次性向多家 AI 企…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/020/837.htm"
  },
  {
    "date": "2026-11-01",
    "title": "Jev新成果，再次引爆开源",
    "desc": "再次“性价比屠夫”",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/506922.html"
  },
  {
    "date": "2026-11-01",
    "title": "老牌便利店机器人售货折戟：实验室锤炼上万次，货架前还是摔瓶子",
    "desc": "这事还是想得太简单了",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/506990.html"
  },
  {
    "date": "2026-11-01",
    "title": "清华姚期智团队新作：代数世界模型，让AI像牛顿一样思考",
    "desc": "让AI像牛顿一样思考",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507031.html"
  },
  {
    "date": "2026-11-01",
    "title": "Claude紧急叫停！暗改Harness禁止逆向游戏",
    "desc": "点击查看详情。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507038.html"
  },
  {
    "date": "2026-11-01",
    "title": "三年前布局，今年爆火丨西湖大学成立新中心",
    "desc": "西湖世界模型研究中心成立",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507076.html"
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
  }
];

export const trending = [
  {
    "repo": "thedotmack/claude-mem",
    "lang": "TypeScript",
    "today": 1527,
    "stars": 108724,
    "desc": "每个座席跨会话的持久上下文–捕获座席在会话期间执行的所有操作，使用AI对其进行压缩，并将相关上下文注入到未来的会话中。适用于Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode等"
  },
  {
    "repo": "lightpanda-io/browser",
    "lang": "Zig",
    "today": 827,
    "stars": 39785,
    "desc": "Lightpanda ：专为人工智能和自动化设计的无头浏览器"
  },
  {
    "repo": "shiyu-coder/Kronos",
    "lang": "Python",
    "today": 611,
    "stars": 45073,
    "desc": "Kronos ：金融市场语言的基础模型"
  },
  {
    "repo": "pingdotgg/t3code",
    "lang": "TypeScript",
    "today": 3100,
    "stars": 36983,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "milind-soni/OpenMausBot",
    "lang": "TypeScript",
    "today": 919,
    "stars": 10269,
    "desc": "使用机器人可以使用的虚拟机的开源Grok机器人替代方案"
  },
  {
    "repo": "public-apis/public-apis",
    "lang": "Python",
    "today": 298,
    "stars": 494182,
    "desc": "免费API的集合列表"
  },
  {
    "repo": "cjpais/Handy",
    "lang": "Rust",
    "today": 383,
    "stars": 36210,
    "desc": "一个完全离线工作的免费、开源和可扩展的语音转文本应用程序。"
  },
  {
    "repo": "Donchitos/Claude-Code-Game-Studios",
    "lang": "Shell",
    "today": 970,
    "stars": 31850,
    "desc": "将Claude Code变成一个完整的游戏开发工作室--49个人工智能代理、72个工作流程技能，以及一个完整的协调系统，反映了真实的工作室层次结构。"
  },
  {
    "repo": "kornia/kornia",
    "lang": "Python",
    "today": 88,
    "stars": 11645,
    "desc": "用于空间AI的🐍几何计算机视觉库"
  },
  {
    "repo": "beenuar/AiSOC",
    "lang": "Python",
    "today": 436,
    "stars": 5970,
    "desc": "开源AI安全运营中心：警报融合、LLM代理分流、MITRE ATT&CK调查，以及每个代理步骤的可重播决策分类账。自托管，无需API密钥运行，获得麻省理工学院许可。为Claude、Cursor和Continue提供MCP服务器。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 223750,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 154141,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187855,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 132688,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108651,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71123,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61662,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60383,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49726,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30433,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 310435,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 308994,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 294532,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 186180,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 143650,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 112452,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 66203,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 92311,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 57784,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 63225,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
