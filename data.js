// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-15）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-15",
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
    "likes": 42,
    "favorites": 18
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
    "date": "2026-09-15",
    "title": "ATK RS7 Air 磁轴键盘新增中国航母 FLEET 18 IP 联名款，到手低至 379.05 元",
    "desc": "IT之家 9 月 15 日消息，ATK 今日正式推出与中船七一四所合作的中国航母 FLEET 18 文创 IP 款 RS7 Air 磁轴键盘。这一联名款式的“宠粉补贴到手价”为 379.05 元。该联名款键盘整体采用海蓝…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/002/775.htm"
  },
  {
    "date": "2026-09-15",
    "title": "一张GPU跑10万原子！分子之心用AI把化学反应“拍”成了电影",
    "desc": "打破分子模拟“不可能三角”",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/489381.html"
  },
  {
    "date": "2026-09-15",
    "title": "全球AI视频榜单第一梯队再添中国力量：智象发布首款物理规律导向视频模型",
    "desc": "智象未来（HiDream.ai）正式发布首个原生全模态视频生成模型 HiDream-O1-Video-1.0",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/489389.html"
  },
  {
    "date": "2026-09-15",
    "title": "无问芯穹联合清华、上交正式开源具身端侧推理引擎APXInf，Pi 0.5性能SOTA",
    "desc": "卡位具身智能规模化落地“最后一公里”！",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/489460.html"
  },
  {
    "date": "2026-09-15",
    "title": "手机替我跑了一整套流程！我就说了一句话，AI执行了100步",
    "desc": "一句话，YOYO全面接管我的生活",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/489466.html"
  },
  {
    "date": "2026-09-15",
    "title": "地平线第1500万颗征程芯片搭载大众 ID. AURA T6，HSD V2.1 即将推出",
    "desc": "首发全场景倒车能力，体验再进一步",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/489698.html"
  },
  {
    "date": "2026-09-11",
    "title": "科技爱好者周刊（第 412 期）：禁止 issue，只用 PR",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面 上海前滩太古里举办的\"英雄联盟15周年\"展…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-412.html"
  },
  {
    "date": "2026-09-04",
    "title": "科技爱好者周刊（第 411 期）：OpenClaw 2.0 是一个缩影",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 宁夏西夏陵使用金属网，将残片还原成石像生…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-411.html"
  }
];

export const models = [
  {
    "vendor": "Inference.net",
    "name": "Schematron V2 Turbo",
    "date": "2026-09-12",
    "desc": "Schematron V2 Turbo是来自Inference的3B参数HTML到JSON提取模型，上下文 128k。",
    "url": "https://openrouter.ai/inference-net/schematron-v2-turbo"
  },
  {
    "vendor": "Inference.net",
    "name": "Schematron V2 Small",
    "date": "2026-09-12",
    "desc": "Schematron V2 Small是一个来自Inference的3B参数HTML到JSON提取模型，上下文 128k。",
    "url": "https://openrouter.ai/inference-net/schematron-v2-small"
  },
  {
    "vendor": "Sakana",
    "name": "Fugu Ultra v2",
    "date": "2026-09-11",
    "desc": "Fugu Ultra v2是Sakana AI的Fugu系列中性能更高的型号，上下文 1000k。",
    "url": "https://openrouter.ai/sakana/fugu-ultra-v2"
  },
  {
    "vendor": "Sakana",
    "name": "Fugu Max",
    "date": "2026-09-11",
    "desc": "Fugu Max是Sakana AI的Fugu系列中的性价比模型，上下文 1000k。",
    "url": "https://openrouter.ai/sakana/fugu-max"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.0 Flash VL",
    "date": "2026-09-11",
    "desc": "Ling 3，上下文 131k。",
    "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-vl"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.0 Flash VL (free)",
    "date": "2026-09-11",
    "desc": "Ling 3，上下文 262k。",
    "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-vl:free"
  },
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash",
    "date": "2026-09-10",
    "desc": "DeepSeek V4，上下文 1049k。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash"
  },
  {
    "vendor": "Inception",
    "name": "Mercury 2.5",
    "date": "2026-09-09",
    "desc": "\"水星 \"系统2，上下文 260k。",
    "url": "https://openrouter.ai/inception/mercury-2.5"
  },
  {
    "vendor": "Nex AGI",
    "name": "Nex-N2.5-Mini (free)",
    "date": "2026-09-09",
    "desc": "Nex-N2，上下文 262k。",
    "url": "https://openrouter.ai/nex-agi/nex-n2.5-mini:free"
  },
  {
    "vendor": "Nex AGI",
    "name": "Nex-N2.5-Pro (free)",
    "date": "2026-09-09",
    "desc": "Nex-N2，上下文 262k。",
    "url": "https://openrouter.ai/nex-agi/nex-n2.5-pro:free"
  }
];

export const trending = [
  {
    "repo": "alibaba/open-code-review",
    "lang": "Go",
    "today": 2751,
    "stars": 27442,
    "desc": "快速、高效、经受住阿里巴巴规模的考验。混合架构代码审核工具：确定性流水线+ LLM Agent、精确的行级注释、内置多语言规则集（ NPE、线程安全、XSS、SQL注入）、OpenAI & Anthropic兼容。"
  },
  {
    "repo": "JustVugg/colibri",
    "lang": "C",
    "today": 2035,
    "stars": 33175,
    "desc": "在您已经拥有的硬件上运行前沿MoE模型—纯C ，零DEPS ，从磁盘流式传输的专家。微型引擎，超大型号。 🐦"
  },
  {
    "repo": "ever-co/ever-gauzy",
    "lang": "TypeScript",
    "today": 632,
    "stars": 6359,
    "desc": "Ever ® Gauzy™ -开放式业务管理平台（ ERP/CRM/HRM/ATS/PM ） - https://gauzy.co"
  },
  {
    "repo": "debpalash/VoiceStudio",
    "lang": "Python",
    "today": 2081,
    "stars": 30365,
    "desc": "VoiceStudio是开源、完全本地的ElevenLabs替代品--语音克隆、语音设计、视频配音、听写、转录和有声读物创作，支持646种语言。"
  },
  {
    "repo": "Homebrew/BrewUI",
    "lang": "Swift",
    "today": 388,
    "stars": 1108,
    "desc": "📺 Homebrew的官方macOS GUI"
  },
  {
    "repo": "melgarafael/DeskcommCRM",
    "lang": "TypeScript",
    "today": 205,
    "stars": 2635,
    "desc": "开源AI销售操作系统—使用本地AI代理+ WhatsApp (WAHA)的自托管CRM。对于任何通过聊天销售的企业， Kommo、Octadesk和Intercom的替代方案都是开放的。MCP就绪、多租户、LGPD。"
  },
  {
    "repo": "alphaXiv/OpenResearch",
    "lang": "Rust",
    "today": 593,
    "stars": 2976,
    "desc": "将您的编码代理转变为研究代理"
  },
  {
    "repo": "NationalSecurityAgency/ghidra",
    "lang": "Java",
    "today": 755,
    "stars": 76364,
    "desc": "Ghidra是一个软件逆向工程（ SRE ）框架"
  },
  {
    "repo": "danny-avila/LibreChat",
    "lang": "TypeScript",
    "today": 261,
    "stars": 43662,
    "desc": "增强的ChatGPT克隆：功能Agent、MCP、Skills、DeepSeek、Anthropic、AWS、OpenAI、Responses API、Azure、Groq、o1、GPT-5、Mistral、OpenRouter、Vertex AI、Gemini、Artifacts、AI模型切换、消息搜索、Code Interpreter、langchain、DALL-E-3、OpenAPI Actions、Functions、Secure Multi-User Auth、Presets、开源自托管。Active"
  },
  {
    "repo": "pacifio/atlas",
    "lang": "Rust",
    "today": 102,
    "stars": 4489,
    "desc": "代理的源代码管理。使用多个编码代理，跟踪它们的更改并在一个地方查询它们"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 207568,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 145138,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187363,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 124344,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107003,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70400,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 60991,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58590,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48181,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29455,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 286986,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 262576,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 258850,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 176449,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 138295,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 94546,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62077,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 63105,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 50418,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 48395,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
