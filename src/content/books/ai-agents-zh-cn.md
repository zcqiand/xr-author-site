---
{
  "slug": "ai-agents",
  "lang": "zh-cn",
  "title": "AI智慧體從入門到專案實踐",
  "subtitle": "基於 LangChain + LangGraph 的生產級 AI 應用開發指南",
  "series": "ai-agents",
  "asin": "B0H3LX9N21",
  "market": "com",
  "format": "kindle",
  "onSale": false,
  "cover": "/covers/ai-agents-zh-cn.jpg",
  "description": "2024年，我参与了一个企业级智能客服系统的开发项目。项目要求 AI 能够根据用户问题自动路由到不同部门、调用内部 API、验证输出格式、记录完整对话历史。我原本以为\"调个 API 就能搞定\"，但真正动手时才发现：单一 LLM 调用远远不够，我们需要完整的 Agent 系统。 接下来的三个月，我的团队在框架选型上走了不少弯路。我们从 LangChain 开始，遇到复杂状态管理问题时又引入 LangGraph，反复在\"Chain 适合的简单流程\"和\"状态机适合的复杂编排\"之间权衡。官方文档分散且更新频繁，Stack Overflow 上的答案大多基于旧版本，市面上的书籍要么只讲单一框架的基础语法，要么内容已经过时。",
  "faq": [],
  "toc": [
    {
      "part": "卷一　AI 智能体基础与核心概念",
      "items": [
        "第1章　AI 智能体概述：什么是 Agentic System",
        "第2章　AI 智能体核心组件：LLM、工具、记忆、规划",
        "第3章　增强型 LLM：Retrieval、Tools、Memory",
        "第4章　AI 智能体常见架构模式",
        "第5章　LangChain 快速入门",
        "第6章　框架选型：LangChain vs LangGraph",
        "第7章　综合实战：用 LangChain + LangGraph 构建第一个 AI 助手"
      ]
    },
    {
      "part": "卷二　LangChain 与 LangGraph 深度实践",
      "items": [
        "第8章　LangChain Chain 完全参考",
        "第9章　LangGraph 状态管理与节点设计",
        "第10章　LangChain Agent 完整实现",
        "第11章　工具定义与工具节点的规范",
        "第12章　记忆系统",
        "第13章　输出解析器结构化响应应用",
        "第14章　RAG 检索增强知识库问答",
        "第15章　LangSmith 可观测性与调试工具",
        "第16章　评估系统",
        "第17章　综合案例与实战：构建研究型 Agent 系统"
      ]
    },
    {
      "part": "卷三　生产级 Agent 特性",
      "items": [
        "第18章　代码沙箱与隔离执行",
        "第19章　状态持久化与 Checkpointer",
        "第20章　Human-in-the-Loop 中断机制",
        "第21章　生产部署、可观测与安全"
      ]
    },
    {
      "part": "卷四　实战案例",
      "items": [
        "第22章　SQL 自愈案例开篇：动态 Schema 注入",
        "第23章　自愈状态机：让 SQL 报错后自己改自己",
        "第24章　HITL 安全熔断：给自愈状态机装上护栏",
        "第25章　异步并发接口：把自愈 Agent 部署成服务",
        "第26章　持久化检查点：让客服 Agent 记住对话状态",
        "第27章　多租户隔离：让 thread_id 成为租户边界",
        "第28章　时间旅行：让对话回到过去",
        "第29章　金融数据网关：行情与舆情的统一入口",
        "第30章　语义情绪打分：把新闻变成情绪信号",
        "第31章　多波次投研状态机：把多源信号汇成研究简报",
        "第32章　证据链防幻觉：把研究简报锚定在证据上",
        "第33章　多模型路由与成本：按任务复杂度选模型档位",
        "第34章　金标回测评估：用人工金标验证情绪判定质量"
      ]
    }
  ],
  "sample": [
    {
      "heading": "从「答题机器」到「行动助手」的跨越",
      "lang": "text",
      "code": "\n**图1-1　从传统 LLM 到 Agentic System 的演进路径**\n\n### 两类 Agentic System：预定义与动态决策\n\n根据 Anthropic 提出的分类框架，Agentic System 可以分为两大类：Workflows（预定义工作流）和 Agents（智能体）。这两者的核心区别在于「谁控制执行路径」。 <!-- src:kp-001-01,src-001 -->\n\n**Workflows** 是预定义路径的系统。开发者用代码明确写出每一步的顺序：先做 A，再做 B，如果 C 则做 D，否则做 E。这不是新概念——传统的业务流程自动化（BPM）就是这样工作的。Workflows 的优势在于确定性强、可预测、易调试。你打开一个客服自动回复系统，它按照预设的菜单层级引导你，这大概率是一个 Workflow。\n\n**Agents** 则完全不同。Agent 由 LLM 自身动态决定下一步做什么。它拿到一个任务，理解目标，调用工具，观察结果，然后决定是否继续以及下一步做什么。你只需要告诉它「目标」，它自己规划路径。就像一个经验丰富的助手，你交代任务后，他会自己判断该先查什么资料、再做什么操作、遇到问题如何应对。 <!-- src:kp-001-01,src-001 -->\n\n用一个生活比喻来理解：Workflow 像是按固定路线行驶的地铁——每一站都是预设的，到站就停；而 Agent 则像一位经验丰富的出租车司机——你告诉他目的地，他自己决定走哪条路、是否绕开堵车路段、什么时候该转弯。\n\n### 为什么现在才爆发\n\nAI 智能体不是一个新概念，早在2010年代就有相关研究。那为什么最近两年才真正火起来？三个条件同时成熟了。 <!-- src:model_inference -->\n\n**第一，LLM 足够强了。** GPT-4、Claude 3 这样的模型具备了真正的推理能力——它们能理解复杂指令、进行多步骤规划、识别错误并自我修正。在此之前的模型，经常在长链条推理中途「迷失」。\n\n**第二，工具调用成熟了。** 2023年后，各主流模型 API 都支持了 Function Calling / Tool Use，LLM 可以直接调用外部工具（搜索、计算、代码执行）来弥补自身能力的不足。\n\n**第三，安全机制完善了。** 权限控制、沙箱隔离、Human-in-the-Loop 等机制让 Agent 的行动变得可控，企业愿意在生产环境中部署。\n\n## 1.3　动手理解 Agentic System\n\n### 理解增强型 LLM 的三大构建块\n\n在深入 Agent 之前，必须先理解「增强型 LLM」这个基础概念。普通的 LLM 只接收文本、输出文本。而增强型 LLM 额外具备三大能力，让它真正成为智能体的「大脑」： <!-- src:kp-001-03,src-001 -->\n\n**Retrieval（检索）** —— 让 LLM「看见」外部知识。当用户问一个需要最新信息的问题时，Agent 可以先从向量数据库或搜索引擎中检索相关内容，再交给 LLM 生成答案。想象一个人背着一整座图书馆进考场——这就是 RAG（Retrieval-Augmented Generation）的威力。 <!-- src:kp-001-03,src-001 -->\n\n**Tools（工具调用）** —— 让 LLM「行动」。Agent 可以调用外部工具：搜索网页、执行代码、读写文件、调用 API。就像给一个人装上了双手和工具箱，他不只能想，还能做。 <!-- src:kp-001-03,src-001 -->\n\n**Memory（记忆）** —— 让 LLM「记住」。对话上下文是短期记忆，向量数据库中的历史交互是长期记忆。没有记忆的 Agent 每次都是「新」的；有了记忆，它才能积累经验、提供个性化服务。 <!-- src:kp-001-03,src:001 -->\n\n这三大构建块的关系可以这样理解：LLM 是核心处理器，Retrieval 是输入增强（让它看到更多背景知识），Tools 是输出增强（让它采取行动），Memory 是状态增强（让它记住上下文）。四个能力配合在一起，才构成了真正的智能体。 <!-- src:model_inference -->\n\n**图1-2** 展示了增强型 LLM 的三大构建块如何协同工作。 <!-- src:model_inference -->\n\n```mermaid\ngraph TB\n    subgraph 增强型LLM\n        A[\"LLM<br/>核心推理引擎\"] \n        A --> R[\"Retrieval<br/>检索增强\"]\n        A --> T[\"Tools<br/>工具调用\"]\n        A --> M[\"Memory<br/>记忆管理\"]\n    end\n    \n    R -->|获取外部知识| A\n    T -->|执行操作| A\n    M -->|维护上下文| A\n    \n    style A fill:#e1f5fe\n    style R fill:#fff3e0\n    style T fill:#e8f5e9\n    style M fill:#f3e5f5"
    },
    {
      "heading": "理解增强型 LLM 的三大构建块",
      "lang": "mermaid",
      "code": "graph TB\n    subgraph 增强型LLM\n        A[\"LLM<br/>核心推理引擎\"] \n        A --> R[\"Retrieval<br/>检索增强\"]\n        A --> T[\"Tools<br/>工具调用\"]\n        A --> M[\"Memory<br/>记忆管理\"]\n    end\n    \n    R -->|获取外部知识| A\n    T -->|执行操作| A\n    M -->|维护上下文| A\n    \n    style A fill:#e1f5fe\n    style R fill:#fff3e0\n    style T fill:#e8f5e9\n    style M fill:#f3e5f5"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/ai-agent-book",
  "caseRepos": [
    {
      "url": "https://github.com/zcqiand/sql-self-healer",
      "label": "SQL 自愈 Agent 案例（动态 Schema 注入 + HITL 熔断）"
    },
    {
      "url": "https://github.com/zcqiand/saas-cs-agent",
      "label": "智能客服 Agent 案例（多租户隔离）"
    },
    {
      "url": "https://github.com/zcqiand/quant-sentiment-research",
      "label": "金融舆情投研 Agent 案例（证据链防幻觉）"
    }
  ],
  "videos": [],
  "mirrorOf": "zh-tw"
}
---
> AI智慧體從入門到專案實踐 — 基於 LangChain + LangGraph 的生產級 AI 應用開發指南

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H3LX9N21