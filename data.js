// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-11-06）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-11-06",
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
    "date": "2026-11-06",
    "title": "工信部加强智能体终端设备进网管理，规范终端与智能体适配",
    "desc": "IT之家 11 月 6 日消息，工信部今日发布关于加强智能体终端设备进网管理的通知，其中提到开展智能体和终端适配、改进智能体终端进网管理、强化智能体现网升级管理、健全智能体分发管理机制四大工作任务。IT之家整理四大工作任…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/059.htm"
  },
  {
    "date": "2026-11-06",
    "title": "芯片股遭“血洗”：美股经历过山车式暴跌，纳指 6 分钟抹平 2026 中期选举选后涨幅",
    "desc": "IT之家 11 月 6 日消息，雅虎财经今天（11 月 6 日）发布博文，报道称美国中期选举带来的美股狂欢仅维持了一天，当地时间周四芯片与人工智能产业链相关股票遭到猛烈抛售，美国三大股指全线重挫，市场迅速回吐前一交易日的…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/061.htm"
  },
  {
    "date": "2026-11-06",
    "title": "李飞飞 World Labs 团队发布“游戏掌机”Frameboy：用网页实时探索 AI 生成世界，每秒最高 15 帧",
    "desc": "IT之家 11 月 6 日消息，“AI 教母”李飞飞的创企 World Labs 于今年 9 月发布了“全球首个多模态世界模型”—— Atlas，宣称该模型能够以像素级精确的相机控制生成图像和视频帧，并将其在 3D 中重…",
    "source": "IT之家",
    "url": "https://www.ithome.com/1/023/063.htm"
  },
  {
    "date": "2026-11-06",
    "title": "科技爱好者周刊（第 418 期）：如果科技停止在21世纪初",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 雄安新区正在建设的雄安大剧院，它的幕墙采…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/11/weekly-issue-418.html"
  },
  {
    "date": "2026-11-05",
    "title": "GPT-Image-2.6全量上线！直出GIF和SVG，6.2 Astra也现身了",
    "desc": "最快6秒出图",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507707.html"
  },
  {
    "date": "2026-11-05",
    "title": "基于本体+知识+Harness+Datat Agent的智能体完整落地链路！",
    "desc": "Data + AI 技术实践巡展 · 上海站",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507696.html"
  },
  {
    "date": "2026-11-05",
    "title": "以“真实工作”检验机器人价值，XROGO在CeMAT ASIA发布机器人到岗计划",
    "desc": "像雇人一样雇机器人",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507767.html"
  },
  {
    "date": "2026-11-05",
    "title": "MIT神作被锤：Astra爆改Qwen权重？就吹吧！",
    "desc": "spaCy作者长文炮轰",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507782.html"
  },
  {
    "date": "2026-11-05",
    "title": "百度开源文心5.5 Flash Base，多基准测试刷新同尺寸模型 SOTA",
    "desc": "11月5日，百度正式开源最新基座模型文心5.5 Flash Base",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/11/507787.html"
  },
  {
    "date": "2026-10-30",
    "title": "科技爱好者周刊（第 417 期）：不要让 AI 代表你",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 四川宜宾市的青少年发展中心，建筑中庭的透…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-417.html"
  }
];

export const models = [
  {
    "vendor": "Google",
    "name": "Gemini Omni 1.2 Flash",
    "date": "2026-11-06",
    "desc": "Gemini Omni 1，上下文 131k。",
    "url": "https://openrouter.ai/google/gemini-omni-1.2-flash"
  },
  {
    "vendor": "Auto Router",
    "name": "auto",
    "date": "2026-11-05",
    "desc": "Auto是OpenRouter的旗舰型号路由器，专为通用用途而打造，上下文 2000k。",
    "url": "https://openrouter.ai/openrouter/auto"
  },
  {
    "vendor": "Auto Code",
    "name": "auto-code",
    "date": "2026-11-05",
    "desc": "Auto Code是OpenRouter专为编码代理和线束构建的路由器，上下文 2000k。",
    "url": "https://openrouter.ai/openrouter/auto-code"
  },
  {
    "vendor": "Google",
    "name": "Gemini Omni 1.1 Flash",
    "date": "2026-11-05",
    "desc": "Gemini Omni 1，上下文 131k。",
    "url": "https://openrouter.ai/google/gemini-omni-1.1-flash"
  },
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
  }
];

export const trending = [
  {
    "repo": "NVIDIA/auto-ontology",
    "lang": "Python",
    "today": 2679,
    "stars": 7385,
    "desc": "Auto Ontology是一个Python框架，用于在数据上构建基于图的语义推理层。它为LLM和代理工作流程提供了确定性的查询生成、更好的上下文检索和更可解释的人工智能。"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 2071,
    "stars": 315270,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "garrytan/gstack",
    "lang": "TypeScript",
    "today": 612,
    "stars": 139955,
    "desc": "使用Garry Tan确切的Claude Code设置： 23个自以为是的工具，分别担任首席执行官、设计师、工程经理、发布经理、文档工程师和QA"
  },
  {
    "repo": "Usagi-org/ai-goofish-monitor",
    "lang": "Python",
    "today": 240,
    "stars": 17566,
    "desc": "基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台管理UI。帮助用户从闲鱼海量商品中，找到心仪产品。"
  },
  {
    "repo": "D4Vinci/Scrapling",
    "lang": "Python",
    "today": 1655,
    "stars": 98001,
    "desc": "🕷️ 最好的Web抓取框架，可处理从单个请求到全面爬网的所有内容！不要害羞，在这里加入： https://discord.gg/EMgGbDceNQ并按照这里获取每日提示和技巧： https://x.com/Scrapling_dev"
  },
  {
    "repo": "vercel-labs/agent-desktop",
    "lang": "Rust",
    "today": 2173,
    "stars": 16884,
    "desc": "AI代理的计算机使用CLI"
  },
  {
    "repo": "max-sixty/worktrunk",
    "lang": "Rust",
    "today": 546,
    "stars": 11524,
    "desc": "Worktrunk是用于Git工作树管理的CLI ，专为并行AI代理工作流程而设计"
  },
  {
    "repo": "lz4/lz4",
    "lang": "C",
    "today": 23,
    "stars": 12393,
    "desc": "极快的压缩算法"
  },
  {
    "repo": "google/skills",
    "lang": "Python",
    "today": 211,
    "stars": 22389,
    "desc": "Google产品和技术的代理技能"
  },
  {
    "repo": "vercel-labs/agent-browser",
    "lang": "Rust",
    "today": 150,
    "stars": 45912,
    "desc": "适用于AI代理的浏览器自动化CLI"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 224808,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 154677,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187913,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 133356,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 108744,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 71185,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61718,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 60549,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 49866,
    "lang": "Python",
    "desc": "您的轻量级开源个人代理。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 30523,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 313029,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 315270,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 297887,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 187771,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 143974,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 113522,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 66745,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 93875,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 58740,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 65275,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
