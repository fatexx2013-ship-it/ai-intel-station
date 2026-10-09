// AI 情报站 — 数据文件（由 scripts/update-data.mjs 自动生成于 2026-10-09）
// news: AI 新闻（中文 RSS：机器之心/量子位/IT之家）
// models: OpenRouter 最新上架模型（描述已汉化）
// trending: GitHub 今日热门（含总星数，描述已汉化）
// agentFrameworks / skills: 固定榜单，自动刷新星数（描述已汉化）

export const meta = {
  "generatedAt": "2026-10-09",
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
    "date": "2026-10-09",
    "title": "《柳叶刀》研究表明：AI 有望改善医患关系",
    "desc": "Google 研究成果首次登上《柳叶刀》主刊",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502359.html"
  },
  {
    "date": "2026-10-09",
    "title": "字节找到了DeepSeek时强时弱的原因",
    "desc": "答不答得对，得看Token站位",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502364.html"
  },
  {
    "date": "2026-10-09",
    "title": "0.2秒急停、秒级重规划！因果智能走进真实世界",
    "desc": "这是一台机器人正在关闭微波炉门时，因人手突然插进来而紧急悬停的时间",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502411.html"
  },
  {
    "date": "2026-10-09",
    "title": "联想天禧自研代码智能体TianxiCode斩获SWE-bench-Live全球第一",
    "desc": "联想天禧AI自主研发的专业代码智能体框架TianxiCode 以71%的问题解决率登顶全球第一名",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502422.html"
  },
  {
    "date": "2026-10-09",
    "title": "TRAE终于把Code和Work合并了",
    "desc": "大写的方便",
    "source": "量子位",
    "url": "https://www.qbitai.com/2026/10/502426.html"
  },
  {
    "date": "2026-10-08",
    "title": "科技爱好者周刊（第 414 期）：Jev 决策模型有什么用",
    "desc": "这里记录每周值得分享的科技内容，周五发布。 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）。 封面图 国产首列数字地铁列车 VELLINK，完…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html"
  },
  {
    "date": "2026-09-18",
    "title": "科技爱好者周刊（第 413 期）：再见了，React Native",
    "desc": "这里记录每周值得分享的科技内容，周五发布。（[通知] 下周五开始的中秋和十一假期，周刊休息。） 本杂志开源，欢迎投稿。另有《谁在招人》服务，发布程序员招聘信息。合作请邮件联系（yifeng.ruan@gmail.com）…",
    "source": "阮一峰周刊",
    "url": "http://www.ruanyifeng.com/blog/2026/09/weekly-issue-413.html"
  }
];

export const models = [
  {
    "vendor": "StepFun",
    "name": "Step 5 Preview",
    "date": "2026-10-08",
    "desc": "第5步预览是StepFun代理工作的旗舰模型，基于稀疏的专家混合架构（ 27B活动/600B总参数）构建，上下文 1000k。",
    "url": "https://openrouter.ai/stepfun/step-5-preview"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Haiku 5.5",
    "date": "2026-10-08",
    "desc": "Claude Haiku 3.5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-haiku-5.5"
  },
  {
    "vendor": "Anthropic",
    "name": "Claude Haiku 5.5 (batch)",
    "date": "2026-10-08",
    "desc": "Claude Haiku 3.5，上下文 1000k。",
    "url": "https://openrouter.ai/anthropic/claude-haiku-5.5:batch"
  },
  {
    "vendor": "Google",
    "name": "Nano Banana 2.1",
    "date": "2026-10-06",
    "desc": "纳米香蕉2，上下文 66k。",
    "url": "https://openrouter.ai/google/gemini-nano-banana-2.1"
  },
  {
    "vendor": "Mistral",
    "name": "Mistral Large 4",
    "date": "2026-10-06",
    "desc": "Mistral Large 4是来自Mistral AI的前沿多模态（文本和图像输入）模型，专为推理、编码和代理工作负载而构建，上下文 1049k。",
    "url": "https://openrouter.ai/mistralai/mistral-large-4-0"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.1 Flash",
    "date": "2026-10-02",
    "desc": "Ling 3，上下文 262k。",
    "url": "https://openrouter.ai/inclusionai/ling-3.1-flash"
  },
  {
    "vendor": "Apodex",
    "name": "Apodex 1.1 Mini (free)",
    "date": "2026-10-02",
    "desc": "Apodex 1，上下文 262k。",
    "url": "https://openrouter.ai/apodex/apodex-1.1-mini:free"
  },
  {
    "vendor": "Pareto 26.10 Preview",
    "name": "pareto-26.10-preview",
    "date": "2026-10-01",
    "desc": "Pareto是一种多模态复合模型，专为研究、编码和代理工作流程而构建，同时在广泛的领域提供前沿水平的性能，上下文 1049k。",
    "url": "https://openrouter.ai/unbiased/pareto-26.10-preview"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Sol Pro",
    "date": "2026-09-30",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol-pro"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT-6.1 Sol Pro (batch)",
    "date": "2026-09-30",
    "desc": "GPT-6，上下文 1050k。",
    "url": "https://openrouter.ai/openai/gpt-6.1-sol-pro:batch"
  }
];

export const trending = [
  {
    "repo": "morluto/rea",
    "lang": "TypeScript",
    "today": 15335,
    "stars": 38334,
    "desc": "使用代理对任何内容进行反向工程，从应用行为到本机二进制文件。"
  },
  {
    "repo": "boykopovar/AnyPS5",
    "lang": "C++",
    "today": 5925,
    "stars": 20050,
    "desc": "用于自动将PS5可执行文件移植到Linux和Windows的工具"
  },
  {
    "repo": "mattpocock/skills",
    "lang": "Shell",
    "today": 1696,
    "stars": 282222,
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "cathrynlavery/diagram-design",
    "lang": "HTML",
    "today": 1744,
    "stars": 47531,
    "desc": "Claude Code、Codex、GitHub Copilot、Factory Droid和Pi的编辑图设计。42种图类型。独立的HTML + SVG。没有阴影，没有美人鱼粪便。"
  },
  {
    "repo": "alibaba/open-code-review",
    "lang": "Go",
    "today": 323,
    "stars": 44930,
    "desc": "安全、快速、高效，经受住阿里巴巴规模的考验。混合架构代码审核工具：确定性流水线+ LLM Agent、精确的行级注释、内置多语言规则集（ NPE、线程安全、XSS、SQL注入）、OpenAI & Anthropic兼容。"
  },
  {
    "repo": "anthropics/knowledge-work-plugins",
    "lang": "Python",
    "today": 714,
    "stars": 28062,
    "desc": "主要供知识工作者在Claude Cowork中使用的插件的开源存储库"
  },
  {
    "repo": "BerriAI/litellm",
    "lang": "Python",
    "today": 95,
    "stars": 60510,
    "desc": "最快、最轻的人工智能网关。使用Python SDK的Rust核心。调用100多个OpenAI （或本机）格式的LLM API ，包括成本跟踪、护栏、负载平衡和日志记录[Bedrock、Azure、OpenAI、Anthropic、OpenAI、VertexAI、vLLM、Nvidia NIM]"
  },
  {
    "repo": "addyosmani/agent-skills",
    "lang": "JavaScript",
    "today": 751,
    "stars": 103746,
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "storytold/artcraft",
    "lang": "Rust",
    "today": 3723,
    "stars": 10359,
    "desc": "ArtCraft是艺术家、设计师和电影制作人的特意制作引擎"
  },
  {
    "repo": "Robbyant/lingbot-map",
    "lang": "Python",
    "today": 109,
    "stars": 17590,
    "desc": "[ECCV 2026最佳论文奖候选人] LingBot-Map ：用于流式3D重建的几何上下文变换器"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 212357,
    "lang": "TypeScript",
    "desc": "开源编码代理。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 149842,
    "lang": "TypeScript",
    "desc": "Claude Code是一个代理编码工具，它位于您的终端中，了解您的代码库，并通过执行日常任务、解释复杂代码和处理git工作流程（所有这些都通过自然语言命令）来帮助您更快地进行编码。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 187495,
    "lang": "Python",
    "desc": "AutoGPT的愿景是为每个人提供可访问的人工智能，供其使用并以此为基础。我们的使命是提供工具，让您专注于重要的事情。"
  },
  {
    "repo": "openai/codex",
    "stars": 128388,
    "lang": "Rust",
    "desc": "在您的终端中运行的轻量级编码代理"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 107269,
    "lang": "TypeScript",
    "desc": "一个开源的人工智能代理，将双子座的力量直接带入您的终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70788,
    "lang": "Python",
    "desc": "🌟 多Agent框架：第一个人工智能软件公司，迈向自然语言编程"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 61330,
    "lang": "Python",
    "desc": "智能AI的编程框架"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 59504,
    "lang": "Python",
    "desc": "用于编排角色扮演、自主人工智能代理的框架。通过培养协作智能， CrewAI使代理能够无缝协作，处理复杂的任务。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48904,
    "lang": "Python",
    "desc": "Python中的超轻量级、开源、自托管的个人AI代理框架，具有WebUI、工具、内存、MCP、多代理工作流程、自动化和聊天应用程序"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29936,
    "lang": "Python",
    "desc": "轻量级、功能强大的多代理工作流程框架"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 296813,
    "lang": "Shell",
    "desc": "有效的代理技能框架和软件开发方法。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 282224,
    "lang": "Shell",
    "desc": "真正工程师的技能。直接来自我的.agents目录。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 275755,
    "lang": "JavaScript",
    "desc": "座席线束性能优化系统。Claude Code、Codex、Opencode、Cursor等的技能、本能、记忆、安全和研究优先开发。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 180131,
    "lang": "Python",
    "desc": "座席技能的公共存储库"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 140900,
    "lang": "Python",
    "desc": "100多个人工智能代理、代理技能和RAG应用程序-免费开源。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 103746,
    "lang": "JavaScript",
    "desc": "AI编码代理的生产级工程技能。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 63827,
    "lang": "Python",
    "desc": "人工智能代理技能，研究Reddit、X、YouTube、HN、Polymarket和网络上的任何主题，然后合成基础摘要"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 81023,
    "lang": "JavaScript",
    "desc": "将任何想法、计划或代码库转换为漂亮的交互式图表。Claude Code、Codex等的代理技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 53901,
    "lang": "JavaScript",
    "desc": "Claude Code和人工智能代理的营销技能。CRO、文案撰写、搜索引擎优化、分析和增长工程。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 55154,
    "lang": "Python",
    "desc": "从文本中删除人工智能生成文字的迹象的代理技能"
  }
];
