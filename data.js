// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-13）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-13",
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
    "date": "2026-09-12",
    "title": "Kimi突发K2.8：性能逼近K3，百万上下文全员开放",
    "desc": "冲刺港股IPO",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/487688.html"
  },
  {
    "date": "2026-09-12",
    "title": "AI数学的最后一道高墙，塌了！GPT-6 Astra刷穿FrontierMath Tier 4",
    "desc": "FrontierMath Tier 4，饱和了",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/487701.html"
  },
  {
    "date": "2026-09-12",
    "title": "探索RSI，生数新世界模型让机器人开始自我进化",
    "desc": "触觉、记忆、Ego数据、自进化……这个世界模型全都有",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/487752.html"
  },
  {
    "date": "2026-09-12",
    "title": "A社承认Claude安全对齐存在缺陷，但“尚无解决方案”",
    "desc": "Claude越界攻击真实系统，并非只是测试系统的设置问题，模型本身的安全问题也出了问题。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/487796.html"
  },
  {
    "date": "2026-09-12",
    "title": "“算力中国·年度卓越成就”发布 太初元碁超智融合计算系统入选",
    "desc": "太初（杭州）集成电路有限公司新一代超智融合计算系统元碁Hypertintellix入选“算力中国·年度卓越成就”。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/487860.html"
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
    "repo": "bilawalsidhu/gods-eye-view",
    "lang": "JavaScript",
    "today": 2265,
    "stars": 29656,
    "desc": "浏览器中的间谍卫星模拟器，但数据是真实的。在逼真的3D地球仪上实时开源空间智能。"
  },
  {
    "repo": "melgarafael/DeskcommCRM",
    "lang": "TypeScript",
    "today": 505,
    "stars": 1761,
    "desc": "开源AI销售操作系统—使用本地AI代理+ WhatsApp (WAHA)的自托管CRM。对于任何通过聊天销售的企业， Kommo、Octadesk和Intercom的替代方案都是开放的。MCP就绪、多租户、LGPD。"
  },
  {
    "repo": "asgeirtj/system_prompts_leaks",
    "lang": "JavaScript",
    "today": 357,
    "stars": 65352,
    "desc": "从Anthropic - Claude Fable 5.1、Opus 5、Claude Design、Claude Code中提取系统提示。OpenAI - ChatGPT GPT-6-Astra ， Codex。Google - Gemini 3.8 Flash、3.1 Pro、Antigravity。xAI - Grok、Grok Bot、Cursor、Kimi等！定期更新。"
  },
  {
    "repo": "nab138/iloader",
    "lang": "TypeScript",
    "today": 209,
    "stars": 3061,
    "desc": "用户友好的旁加载器"
  },
  {
    "repo": "Flowseal/zapret-discord-youtube",
    "lang": "Batchfile",
    "today": 52,
    "stars": 33199,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "jihe520/MathModelAgent",
    "lang": "Python",
    "today": 264,
    "stars": 5108,
    "desc": "🤖📐专为数学建模设计的 Agent & skills ,自动完成数学建模，生成一份完整的可以直接提交的论文。 An Agent Designed for Mathematical Modeling ,Automatically complete mathmodel and generate a complete paper ready for submission."
  },
  {
    "repo": "Sonarr/Sonarr",
    "lang": "C#",
    "today": 228,
    "stars": 15903,
    "desc": "面向新闻组和BitTorrent用户的智能PVR。"
  },
  {
    "repo": "alsk1992/CloddsBot",
    "lang": "TypeScript",
    "today": 377,
    "stars": 2465,
    "desc": "开源AI交易代理，在1000多个市场（ Polymarket、Kalshi、Binance、Hyperliquid、Solana DEXs、5条EVM链）自主运营。扫描边缘，即时执行，在您睡觉时管理风险。机器对机器支付的代理商务协议。自托管。建立在Claude之上。"
  },
  {
    "repo": "yuliskov/SmartTube",
    "lang": "Java",
    "today": 160,
    "stars": 33189,
    "desc": "在Android TV上使用您自己的规则浏览媒体内容"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "lang": "Python",
    "today": 237,
    "stars": 137586,
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 206944,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 144851,
    "lang": "Python",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187286,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 123619,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 106945,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70337,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 60948,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58415,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48063,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29389,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 285776,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 260437,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 257048,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 175987,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 137586,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 93737,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 61901,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 59572,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 49802,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 47299,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
