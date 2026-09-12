// AI 情报站 — 种子数据（生成于 2026-09-13）
// 全部为真实抓取/检索数据，均带可点开的出处链接。
// news  : AI 新闻（中文信源，标注出处）
// models: AI 模型资讯（种子来自 OpenRouter 公开接口，服务端另有实时刷新）
// trending: GitHub 今日热门（种子来自 github.com/trending，服务端另有实时刷新）
// agentFrameworks: AI Agent 框架 / 编码 CLI（GitHub 检索，真实星标）
// skills: 智能体技能 Skills（GitHub 检索，真实星标）

export const meta = {
  siteName: "大瑞的AI小窝",
  tagline: "每天为你汇总 AI 新闻、模型、GitHub 热门与 Agent 生态",
  generatedAt: "2026-09-13",
  note: "所有条目均附真实出处，星标数据来自 GitHub API / 今日 trending，模型数据来自 OpenRouter 公开接口。"
};

// 讨论区子版块定义
export const boards = [
  { id: "news", name: "AI 新闻", icon: "📰", desc: "聊聊最近的 AI 行业新闻与热点" },
  { id: "models", name: "模型资讯", icon: "🧠", desc: "新模型、跑分、部署与体验讨论" },
  { id: "trending", name: "GitHub 热门", icon: "📈", desc: "开源项目分享与技术讨论" },
  { id: "agent", name: "Agent 框架", icon: "🤖", desc: "智能体框架、编码 CLI、路由与编排" },
  { id: "skills", name: "Skills 技能", icon: "🧩", desc: "技能包、插件与玩法交流" },
  { id: "free", name: "自由灌水", icon: "💬", desc: "闲聊、建议、求资源，随便聊" }
];

// 各子版块置顶引导帖（站务/小助手发布）
export const seedPosts = [
  { id: 1001, board: "news", name: "小助手", text: "📌 置顶：本版块讨论近期 AI 行业新闻，欢迎补充你的看法与信源。", ts: Date.parse("2026-09-13T02:00:00+08:00"), replyTo: null, pinned: true, likes: 42, favorites: 18 },
  { id: 1002, board: "models", name: "小助手", text: "📌 置顶：新模型发布、跑分、本地部署体验都欢迎在这里聊。", ts: Date.parse("2026-09-13T02:00:00+08:00"), replyTo: null, pinned: true, likes: 35, favorites: 22 },
  { id: 1003, board: "trending", name: "小助手", text: "📌 置顶：看到有意思的开源项目？来这儿分享和讨论。", ts: Date.parse("2026-09-13T02:00:00+08:00"), replyTo: null, pinned: true, likes: 28, favorites: 15 },
  { id: 1004, board: "agent", name: "小助手", text: "📌 置顶：Agent 框架、编码 CLI、跨模型路由的使用心得都欢迎交流。", ts: Date.parse("2026-09-13T02:00:00+08:00"), replyTo: null, pinned: true, likes: 51, favorites: 30 },
  { id: 1005, board: "skills", name: "小助手", text: "📌 置顶：好用的 Skills 技能包、插件与玩法，欢迎互相种草。", ts: Date.parse("2026-09-13T02:00:00+08:00"), replyTo: null, pinned: true, likes: 38, favorites: 25 },
  { id: 1006, board: "free", name: "小助手", text: "📌 置顶：自由灌水版块，闲聊、提建议、求资源都可以～", ts: Date.parse("2026-09-13T02:00:00+08:00"), replyTo: null, pinned: true, likes: 20, favorites: 8 }
];

export const news = [
  {
    "date": "2026-09-13",
    "title": "OpenAI CEO 奥特曼：OpenAI 不会在 2027 年前进行 IPO",
    "desc": "奥特曼最新表态，打消市场对 OpenAI 近期上市的预期。",
    "source": "新浪财经",
    "url": "https://tech.163.com/keywords/0/6/006f00700065006e00610069/1.html"
  },
  {
    "date": "2026-09-13",
    "title": "OpenAI 智能体被指操控 RubyGems 攻击，拿下服务器 RCE",
    "desc": "AI 智能体安全风险再引关注，被曝可操纵软件包仓库实施攻击。",
    "source": "网易科技",
    "url": "https://tech.163.com/keywords/0/6/006f00700065006e00610069/1.html"
  },
  {
    "date": "2026-09-12",
    "title": "工信部发布《\"人工智能+软件\"专项行动实施方案》",
    "desc": "到 2030 年，人工智能与软件和信息技术服务业融合发展实现新跨越。",
    "source": "新浪科技 / 光明日报",
    "url": "https://tags.news.sina.com.cn/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD"
  },
  {
    "date": "2026-09-12",
    "title": "Anthropic 揭俄开发者用 Claude 造神风无人机",
    "desc": "路透社/卫报首发披露，AI 模型被用于军事用途引发伦理讨论。",
    "source": "AIProductHub",
    "url": "https://aiproducthub.cn/newsflash/anthropic-russia-drone-swarm-claude-fpv-kamikaze/"
  },
  {
    "date": "2026-09-11",
    "title": "黄仁勋高盛重申：英伟达明年营收再增 70%",
    "desc": "黄仁勋在高盛 Commun... 活动上对英伟达增长前景表达信心。",
    "source": "AIProductHub",
    "url": "https://aiproducthub.cn/newsflash/"
  },
  {
    "date": "2026-09-11",
    "title": "Anthropic 发 154 页威胁报告，揭 7 类 AI 滥用",
    "desc": "Anthropic 详细披露 AI 系统可能被滥用的多种场景与风险。",
    "source": "AIProductHub",
    "url": "https://aiproducthub.cn/newsflash/"
  },
  {
    "date": "2026-09-11",
    "title": "NVIDIA 开源 PAIR：把家里多台电脑拼成 AI 算力池",
    "desc": "NVIDIA 推出开源本地 AI 路由方案，可聚合多设备算力。",
    "source": "AIProductHub",
    "url": "https://aiproducthub.cn/newsflash/nvidia-launches-pair-open-source-local-ai-router/"
  },
  {
    "date": "2026-09-11",
    "title": "月之暗面启动 Kimi「登月计划」：Palantir 式 FDE 驻场模式切入企业 AI",
    "desc": "首批签约五家上市公司，以前沿部署工程师模式推进企业级交付。",
    "source": "拓实科技",
    "url": "http://www.toast.com.cn/news"
  },
  {
    "date": "2026-09-10",
    "title": "DeepSeek V4.1 Flash 发布，KV 缓存砍 88%",
    "desc": "采用 CED 架构，输入激活 8B 参数、输出激活 16B，推理效率大幅提升。",
    "source": "AIProductHub",
    "url": "https://aiproducthub.cn/newsflash/deepseek-v4-1-flash-kv-cache-88-percent-cut/"
  },
  {
    "date": "2026-09-10",
    "title": "NASA 联手 IBM 开源月球基础模型，精度碾压基线 23%",
    "desc": "NASA 与 IBM 合作推出开源月球基础模型，助力月球科研与探测。",
    "source": "AIProductHub",
    "url": "https://aiproducthub.cn/newsflash/nasa-ibm-open-source-lunar-foundation-model/"
  }
];

export const models = [
  {
    "vendor": "Inference.net",
    "name": "Schematron V2 Turbo",
    "date": "2026-09-12",
    "desc": "3B 参数 HTML-to-JSON 提取模型，面向高吞吐提取工作负载。",
    "url": "https://openrouter.ai/inference-net/schematron-v2-turbo"
  },
  {
    "vendor": "Inference.net",
    "name": "Schematron V2 Small",
    "date": "2026-09-12",
    "desc": "3B 参数 HTML 提取模型，优先保证复杂 schema 和长页面的提取质量。",
    "url": "https://openrouter.ai/inference-net/schematron-v2-small"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT Astra (latest)",
    "date": "2026-09-11",
    "desc": "GPT Astra 系列的最新版本，自动重定向到最新模型。",
    "url": "https://openrouter.ai/~openai/gpt-astra-latest"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT Sol (latest)",
    "date": "2026-09-11",
    "desc": "GPT Sol 系列的最新版本，OpenRouter 收录。",
    "url": "https://openrouter.ai/~openai/gpt-sol-latest"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT Terra (latest)",
    "date": "2026-09-11",
    "desc": "GPT Terra 系列的最新版本，OpenRouter 收录。",
    "url": "https://openrouter.ai/~openai/gpt-terra-latest"
  },
  {
    "vendor": "OpenAI",
    "name": "GPT Luna (latest)",
    "date": "2026-09-11",
    "desc": "GPT Luna 系列的最新版本，OpenRouter 收录。",
    "url": "https://openrouter.ai/~openai/gpt-luna-latest"
  },
  {
    "vendor": "Sakana",
    "name": "Fugu Ultra v2",
    "date": "2026-09-11",
    "desc": "Sakana AI 的 Fugu 家族高性能模型，学习式多智能体编排系统。",
    "url": "https://openrouter.ai/sakana/fugu-ultra-v2"
  },
  {
    "vendor": "Sakana",
    "name": "Fugu Max",
    "date": "2026-09-11",
    "desc": "Fugu 家族的成本效益模型，多智能体路由架构。",
    "url": "https://openrouter.ai/sakana/fugu-max"
  },
  {
    "vendor": "inclusionAI",
    "name": "Ling 3.0 Flash VL",
    "date": "2026-09-10",
    "desc": "124B 总参数/5.5B 激活 MoE 多模态模型，新增视觉感知能力。",
    "url": "https://openrouter.ai/inclusionai/ling-3.0-flash-vl"
  },
  {
    "vendor": "DeepSeek",
    "name": "DeepSeek V4.1 Flash",
    "date": "2026-09-09",
    "desc": "CED 架构稀疏 MoE 模型，输入激活 8B、输出激活 16B 参数。",
    "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash"
  }
];

export const trending = [
  {
    "repo": "bilawalsidhu/gods-eye-view",
    "lang": "JavaScript",
    "today": 2265,
    "desc": "浏览器里的间谍卫星模拟器，基于真实开源时空数据的 3D 地球。"
  },
  {
    "repo": "melgarafael/DeskcommCRM",
    "lang": "TypeScript",
    "today": 505,
    "desc": "开源 AI 销售 OS：自托管 CRM，内置 AI Agent + WhatsApp。"
  },
  {
    "repo": "asgeirtj/system_prompts_leaks",
    "lang": "JavaScript",
    "today": 357,
    "desc": "汇总 Claude、GPT-6、Gemini、Grok 等系统提示词提取样本。"
  },
  {
    "repo": "alsk1992/CloddsBot",
    "lang": "TypeScript",
    "today": 377,
    "desc": "开源 AI 交易 Agent，可在 1000+ 市场自主操作（含 Polymarket）。"
  },
  {
    "repo": "p1neappleXpress/OpenFlux",
    "lang": "Go",
    "today": 355,
    "desc": "网络栈研究工具，支持可插拔传输的 TCP 隧道。"
  },
  {
    "repo": "jihe520/MathModelAgent",
    "lang": "Python",
    "today": 264,
    "desc": "专为数学建模设计的 Agent & Skills，自动生成完整论文。"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "lang": "Python",
    "today": 237,
    "desc": "100+ AI Agents、Agent Skills 与 RAG 应用合集，免费开源。"
  },
  {
    "repo": "SnailSploit/Claude-Red",
    "lang": "—",
    "today": 195,
    "desc": "Claude 进攻性安全技能库：SQLi、shellcode、EDR 绕过等。"
  },
  {
    "repo": "multimodal-art-projection/YuE",
    "lang": "Python",
    "today": 193,
    "desc": "YuE2：前沿开源音乐生成，符号规划 + zero-shot 翻唱。"
  },
  {
    "repo": "max-sixty/worktrunk",
    "lang": "Rust",
    "today": 137,
    "desc": "Git worktree 管理 CLI，面向并行 AI Agent 工作流。"
  }
];

export const agentFrameworks = [
  {
    "repo": "anomalyco/opencode",
    "stars": 206922,
    "lang": "TypeScript",
    "desc": "开源编码 Agent（OpenCode），终端里的编程助手。"
  },
  {
    "repo": "anthropics/claude-code",
    "stars": 144843,
    "lang": "Python",
    "desc": "Claude Code：住在终端里的 agentic 编码工具。"
  },
  {
    "repo": "Significant-Gravitas/AutoGPT",
    "stars": 185600,
    "lang": "Python",
    "desc": "AutoGPT：开创性的自主 AI Agent 项目，社区影响力最大。"
  },
  {
    "repo": "openai/codex",
    "stars": 123607,
    "lang": "Rust",
    "desc": "Codex CLI：运行在终端里的轻量编码 Agent。"
  },
  {
    "repo": "google-gemini/gemini-cli",
    "stars": 106944,
    "lang": "TypeScript",
    "desc": "开源 Agent，把 Gemini 能力直接带进终端。"
  },
  {
    "repo": "FoundationAgents/MetaGPT",
    "stars": 70337,
    "lang": "Python",
    "desc": "多智能体框架：首个\"AI 软件公司\"，自然语言驱动全流程。"
  },
  {
    "repo": "microsoft/autogen",
    "stars": 60944,
    "lang": "Python",
    "desc": "面向 agentic AI 的编程框架，微软出品。"
  },
  {
    "repo": "crewAIInc/crewAI",
    "stars": 58410,
    "lang": "Python",
    "desc": "编排角色扮演、自主协作 AI Agent 的框架。"
  },
  {
    "repo": "HKUDS/nanobot",
    "stars": 48061,
    "lang": "Python",
    "desc": "超轻量、开源自托管的个人 AI Agent 框架。"
  },
  {
    "repo": "openai/openai-agents-python",
    "stars": 29386,
    "lang": "Python",
    "desc": "OpenAI 官方轻量多智能体工作流框架。"
  }
];

export const skills = [
  {
    "repo": "obra/superpowers",
    "stars": 285728,
    "lang": "Shell",
    "desc": "Agentic 技能框架 + 软件开发方法论，社区增长最快。"
  },
  {
    "repo": "mattpocock/skills",
    "stars": 260369,
    "lang": "Shell",
    "desc": "面向真实工程师的技能包，作者 .agents 目录直出。"
  },
  {
    "repo": "affaan-m/ECC",
    "stars": 256953,
    "lang": "JavaScript",
    "desc": "Agent Harness 性能优化系统：技能、直觉、记忆、自愈。"
  },
  {
    "repo": "anthropics/skills",
    "stars": 175968,
    "lang": "Python",
    "desc": "Anthropic 官方 Agent Skills 公开仓库。"
  },
  {
    "repo": "Shubhamsaboo/awesome-llm-apps",
    "stars": 137535,
    "lang": "Python",
    "desc": "100+ AI Agents、Agent Skills 与 RAG 应用合集。"
  },
  {
    "repo": "addyosmani/agent-skills",
    "stars": 93710,
    "lang": "JavaScript",
    "desc": "面向 AI 编码 Agent 的生产级工程技能（Google Addy Osmani）。"
  },
  {
    "repo": "mvanhorn/last30days-skill",
    "stars": 61886,
    "lang": "Python",
    "desc": "跨 Reddit/X/YouTube/HN/Polymarket 做近 30 天调研的技能。"
  },
  {
    "repo": "tt-a1i/archify",
    "stars": 59475,
    "lang": "JavaScript",
    "desc": "生成美观可验证的架构/工作流/时序/数据流图的技能。"
  },
  {
    "repo": "coreyhaines31/marketingskills",
    "stars": 49782,
    "lang": "JavaScript",
    "desc": "面向 Claude Code 与 AI Agent 的营销技能：CRO/文案/SEO。"
  },
  {
    "repo": "blader/humanizer",
    "stars": 47266,
    "lang": "Python",
    "desc": "去除文本\"AI 味\"的 Agent 技能，让文字更像人写的。"
  }
];
