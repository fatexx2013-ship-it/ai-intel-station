// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-09-17）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-09-17",
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
    "date": "2026-09-17",
    "title": "京东方：为努比亚 NaviX Ultra 独供 AI 原生旗舰屏幕，息屏也能低功耗支撑 AI 后台运行",
    "desc": "IT之家 9 月 17 日消息，努比亚 NaviX Ultra 于昨晚发布，宣称是“全球首款 AI 智能体手机”。据京东方透露，作为本次新品核心屏幕技术合作伙伴，京东方为努比亚 NaviX Ultra 独供 AI 原生旗…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/003/351.htm"
  },
  {
    "date": "2026-09-17",
    "title": "OpenAI 相关智能体被曝“越界”：劫持程序员维基网站并偷建“地下论坛”，国安部发布安全提醒",
    "desc": "IT之家 9 月 17 日消息，国家安全部今日发文，披露了一起此前未公开的 AI 智能体“劫持”网站事件。今年 5 月至 6 月，一批与 OpenAI 相关的 AI 智能体在执行测试任务期间，劫持德国程序员维基网站（Ds…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/003/352.htm"
  },
  {
    "date": "2026-09-17",
    "title": "苹果首款折叠 iPhone Duo 有望支持“轻量级 UI”，Apple Pencil 悬停触发 Siri AI",
    "desc": "IT之家 9 月 17 日消息，消息源 @itspdfu 今天（9 月 17 日）在 X 平台发布推文，爆料称苹果公司正在为 Siri AI 引入名为“Lightweight UI”（轻量级用户界面）的交互方式。相关代码…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/003/353.htm"
  },
  {
    "date": "2026-09-17",
    "title": "Anthropic CEO 提议引入“银行式监管”：专家称评估员无权叫停 AI，你不能既当运动员又当裁判",
    "desc": "9 月 17 日，据 CNBC 报道，Anthropic CEO Dario Amodei 提议将独立第三方安全评估员长期嵌入前沿 AI 公司，赋予其接近内部风险团队的访问权限，并在有限删减前提下自主发布调查结果的权力。…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/003/354.htm"
  },
  {
    "date": "2026-09-16",
    "title": "协同办公进入Agent时代，飞书+豆包工作跑在了最前面",
    "desc": "AI协同办公的新官配，我先磕了",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/490686.html"
  },
  {
    "date": "2026-09-16",
    "title": "基元律动与无问芯穹达成战略合作，推进高质量Token供给与应用",
    "desc": "2026年 9 月 15 日，AI基础设施公司基元律动（TokenRhythm）与无问芯穹（Infinigence AI）签署战略合作协议。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/490750.html"
  },
  {
    "date": "2026-09-16",
    "title": "高通技术公司携手中兴努比亚和豆包手机助手，共同推动智能手机迈入个人AI新时代",
    "desc": "第五代骁龙8至尊版赋能全新AI智能体手机努比亚NaviX Ultra，加速智能体体验规模化落地",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/490756.html"
  },
  {
    "date": "2026-09-16",
    "title": "AI大模型工场2026 AI产业生态大会今日举办，大咖同台共探智能生长与产业共生",
    "desc": "9月15日，由AI大模型工场主办的“2026 AI产业生态大会”在北京举行。",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/490760.html"
  },
  {
    "date": "2026-09-16",
    "title": "通用能力不打折，空间具身智能断层领先！ZDTaichu5.0-9B国产开源，跻身全球多模态第一梯队",
    "desc": "九大空间测试10B规模通用模型中8项第一",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/09/490839.html"
  },
  {
    "date": "2026-09-11",
    "title": "科技爱好者周刊（第 412 期）：禁止 issue，只用 PR",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面 上海前滩太古里举办的\"英雄联盟15周年\"展…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-412.html"
  }
];

export const models = [
  {
    "vendor": "Union Alpha",
    "name": "union-alpha",
    "date": "2026-09-16",
    "desc": "Union Alpha是一个多模态模型，专为研究、编码和代理工作流程而构建，同时在广泛的，上下文 262k。",
    "url": "https://openrouter.ai/stealth/union-alpha"
  },
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
  }
];

export const trending = [
  {
    "repo": "alibaba/open-code-review",
    "lang": "Go",
    "today": 3215,
    "stars": 31718,
    "desc": "快速、高效、经受住阿里巴巴规模的考验。混合架构代码审核工具：确定性流水线+ LLM Agent、精确的行级注释、内置多语言规则集（ NPE、线程安全、XSS、SQL注入）、OpenAI & Anthropic兼容。"
  },
  {
    "repo": "cloudflare/security-audit-skill",
    "lang": "JavaScript",
    "today": 1249,
    "stars": 7103,
    "desc": "用于多阶段安全审核的编码代理技能，具有经过独立验证的机器可读结果"
  },
  {
    "repo": "JustVugg/colibri",
    "lang": "C",
    "today": 1532,
    "stars": 35007,
    "desc": "在您已经拥有的硬件上运行前沿MoE模型—纯C ，零DEPS ，从磁盘流式传输的专家。微型引擎，超大型号。 🐦"
  },
  {
    "repo": "abue-ammar/tinycast",
    "lang": "Swift",
    "today": 1136,
    "stars": 5566,
    "desc": "Tinycast —一个小巧、完全原生的macOS启动器、热键和剪贴板历史记录。"
  },
  {
    "repo": "jamiepine/voicebox",
    "lang": "TypeScript",
    "today": 409,
    "stars": 54356,
    "desc": "开源AI语音工作室。克隆、命令、创建。"
  },
  {
    "repo": "Lakr233/vphone-cli",
    "lang": "Swift",
    "today": 444,
    "stars": 13326,
    "desc": "暂无项目简介。"
  },
  {
    "repo": "anthropics/knowledge-work-plugins",
    "lang": "Python",
    "today": 96,
    "stars": 24271,
    "desc": "主要供知识工作者在Claude Cowork中使用的插件的开源存储库"
  },
  {
    "repo": "ever-co/ever-gauzy",
    "lang": "TypeScript",
    "today": 771,
    "stars": 7294,
    "desc": "Ever ® Gauzy™ -开放式业务管理平台（ ERP/CRM/HRM/ATS/PM ） - https://gauzy.co"
  },
  {
    "repo": "ankitects/anki",
    "lang": "Rust",
    "today": 50,
    "stars": 30840,
    "desc": "Anki是一个智能间隔重复抽认卡程序"
  },
  {
    "repo": "NationalSecurityAgency/ghidra",
    "lang": "Java",
    "today": 1059,
    "stars": 77751,
    "desc": "Ghidra是一个软件逆向工程（ SRE ）框架"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 207913,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 145479,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187396,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 124739,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107020,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70426,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61007,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58664,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48228,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29496,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 287608,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 263591,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 260244,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 176710,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 138513,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 95420,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 62154,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 64801,
    "lang": "JavaScript",
    "desc": "美观、可验证的架构、工作流程、序列、数据流和生命周期图的代理技能--具有运动和清晰导出的自包含HTML。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 50606,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 49163,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
