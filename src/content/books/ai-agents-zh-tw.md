---
{
  "slug": "ai-agents",
  "lang": "zh-tw",
  "title": "AI智慧體從入門到專案實踐",
  "subtitle": "基於 LangChain + LangGraph 的生產級 AI 應用開發指南",
  "series": "ai-agents",
  "asin": "B0H3LX9N21",
  "market": "com",
  "onSale": true,
  "cover": "/covers/ai-agents-zh-tw.jpg",
  "description": "2024年，我參與了一個企業級智能客服系統的開發項目。項目要求 AI 能夠根據用戶問題自動路由到不同部門、調用內部 API、驗證輸出格式、記錄完整對話歷史。我原本以為\"調個 API 就能搞定\"，但真正動手時才發現：單一 LLM 調用遠遠不夠，我們需要完整的 Agent 系統。 接下來的三個月，我的團隊在框架選型上走了不少彎路。我們從 LangChain 開始，遇到複雜狀態管理問題時又引入 LangGraph，反覆在\"Chain 適合的簡單流程\"和\"狀態機適合的複雜編排\"之間權衡。官方文檔分散且更新頻繁，Stack Overflow 上的答案大多基於舊版本，市面上的書籍要麼只講單一框架的基礎語法，要麼內容已經過時。",
  "faq": [],
  "toc": [
    {
      "part": "卷一　AI 智能體基礎與核心概念",
      "items": [
        "第1章　AI 智能體概述：什麼是 Agentic System",
        "第2章　AI 智能體核心組件：LLM、工具、記憶、規劃",
        "第3章　增強型 LLM：Retrieval、Tools、Memory",
        "第4章　AI 智能體常見架構模式",
        "第5章　LangChain 快速入門",
        "第6章　框架選型：LangChain vs LangGraph",
        "第7章　綜合實戰：用 LangChain + LangGraph 構建第一個 AI 助手"
      ]
    },
    {
      "part": "卷二　LangChain 與 LangGraph 深度實踐",
      "items": [
        "第8章　LangChain Chain 完全參考",
        "第9章　LangGraph 狀態管理與節點設計",
        "第10章　LangChain Agent 完整實現",
        "第11章　工具定義與工具節點的規範",
        "第12章　記憶系統",
        "第13章　輸出解析器結構化響應應用",
        "第14章　RAG 檢索增強知識庫問答",
        "第15章　LangSmith 可觀測性與調試工具",
        "第16章　評估系統",
        "第17章　綜合案例與實戰：構建研究型 Agent 系統"
      ]
    },
    {
      "part": "卷三　生產級 Agent 特性",
      "items": [
        "第18章　代碼沙箱與隔離執行",
        "第19章　狀態持久化與 Checkpointer",
        "第20章　Human-in-the-Loop 中斷機制",
        "第21章　生產部署、可觀測與安全"
      ]
    },
    {
      "part": "卷四　實戰案例",
      "items": [
        "第22章　SQL 自愈案例開篇：動態 Schema 注入",
        "第23章　自愈狀態機：讓 SQL 報錯後自己改自己",
        "第24章　HITL 安全熔斷：給自愈狀態機裝上護欄",
        "第25章　異步併發接口：把自愈 Agent 部署成服務",
        "第26章　持久化檢查點：讓客服 Agent 記住對話狀態",
        "第27章　多租戶隔離：讓 thread_id 成為租戶邊界",
        "第28章　時間旅行：讓對話回到過去",
        "第29章　金融數據網關：行情與輿情的統一入口",
        "第30章　語義情緒打分：把新聞變成情緒信號",
        "第31章　多波次投研狀態機：把多源信號匯成研究簡報",
        "第32章　證據鏈防幻覺：把研究簡報錨定在證據上",
        "第33章　多模型路由與成本：按任務複雜度選模型檔位",
        "第34章　金標回測評估：用人工金標驗證情緒判定質量"
      ]
    }
  ],
  "sample": [
    {
      "heading": "從「答題機器」到「行動助手」的跨越",
      "lang": "text",
      "code": "\n**圖1-1　從傳統 LLM 到 Agentic System 的演進路徑**\n\n### 兩類 Agentic System：預定義與動態決策\n\n根據 Anthropic 提出的分類框架，Agentic System 可以分為兩大類：Workflows（預定義工作流）和 Agents（智能體）。這兩者的核心區別在於「誰控制執行路徑」。 <!-- src:kp-001-01,src-001 -->\n\n**Workflows** 是預定義路徑的系統。開發者用代碼明確寫出每一步的順序：先做 A，再做 B，如果 C 則做 D，否則做 E。這不是新概念——傳統的業務流程自動化（BPM）就是這樣工作的。Workflows 的優勢在於確定性強、可預測、易調試。你打開一個客服自動回覆系統，它按照預設的菜單層級引導你，這大概率是一個 Workflow。\n\n**Agents** 則完全不同。Agent 由 LLM 自身動態決定下一步做什麼。它拿到一個任務，理解目標，調用工具，觀察結果，然後決定是否繼續以及下一步做什麼。你只需要告訴它「目標」，它自己規劃路徑。就像一個經驗豐富的助手，你交代任務後，他會自己判斷該先查什麼資料、再做什麼操作、遇到問題如何應對。 <!-- src:kp-001-01,src-001 -->\n\n用一個生活比喻來理解：Workflow 像是按固定路線行駛的地鐵——每一站都是預設的，到站就停；而 Agent 則像一位經驗豐富的出租車司機——你告訴他目的地，他自己決定走哪條路、是否繞開堵車路段、什麼時候該轉彎。\n\n### 為什麼現在才爆發\n\nAI 智能體不是一個新概念，早在2010年代就有相關研究。那為什麼最近兩年才真正火起來？三個條件同時成熟了。 <!-- src:model_inference -->\n\n**第一，LLM 足夠強了。** GPT-4、Claude 3 這樣的模型具備了真正的推理能力——它們能理解複雜指令、進行多步驟規劃、識別錯誤並自我修正。在此之前的模型，經常在長鏈條推理中途「迷失」。\n\n**第二，工具調用成熟了。** 2023年後，各主流模型 API 都支持了 Function Calling / Tool Use，LLM 可以直接調用外部工具（搜索、計算、代碼執行）來彌補自身能力的不足。\n\n**第三，安全機制完善了。** 權限控制、沙箱隔離、Human-in-the-Loop 等機制讓 Agent 的行動變得可控，企業願意在生產環境中部署。\n\n## 1.3　動手理解 Agentic System\n\n### 理解增強型 LLM 的三大構建塊\n\n在深入 Agent 之前，必須先理解「增強型 LLM」這個基礎概念。普通的 LLM 只接收文本、輸出文本。而增強型 LLM 額外具備三大能力，讓它真正成為智能體的「大腦」： <!-- src:kp-001-03,src-001 -->\n\n**Retrieval（檢索）** —— 讓 LLM「看見」外部知識。當用戶問一個需要最新信息的問題時，Agent 可以先從向量數據庫或搜索引擎中檢索相關內容，再交給 LLM 生成答案。想像一個人揹著一整座圖書館進考場——這就是 RAG（Retrieval-Augmented Generation）的威力。 <!-- src:kp-001-03,src-001 -->\n\n**Tools（工具調用）** —— 讓 LLM「行動」。Agent 可以調用外部工具：搜索網頁、執行代碼、讀寫文件、調用 API。就像給一個人裝上了雙手和工具箱，他不只能想，還能做。 <!-- src:kp-001-03,src-001 -->\n\n**Memory（記憶）** —— 讓 LLM「記住」。對話上下文是短期記憶，向量數據庫中的歷史交互是長期記憶。沒有記憶的 Agent 每次都是「新」的；有了記憶，它才能積累經驗、提供個性化服務。 <!-- src:kp-001-03,src:001 -->\n\n這三大構建塊的關係可以這樣理解：LLM 是核心處理器，Retrieval 是輸入增強（讓它看到更多背景知識），Tools 是輸出增強（讓它採取行動），Memory 是狀態增強（讓它記住上下文）。四個能力配合在一起，才構成了真正的智能體。 <!-- src:model_inference -->\n\n**圖1-2** 展示了增強型 LLM 的三大構建塊如何協同工作。 <!-- src:model_inference -->\n\n```mermaid\ngraph TB\n    subgraph 增強型LLM\n        A[\"LLM<br/>核心推理引擎\"] \n        A --> R[\"Retrieval<br/>檢索增強\"]\n        A --> T[\"Tools<br/>工具調用\"]\n        A --> M[\"Memory<br/>記憶管理\"]\n    end\n    \n    R -->|獲取外部知識| A\n    T -->|執行操作| A\n    M -->|維護上下文| A\n    \n    style A fill:#e1f5fe\n    style R fill:#fff3e0\n    style T fill:#e8f5e9\n    style M fill:#f3e5f5"
    },
    {
      "heading": "理解增強型 LLM 的三大構建塊",
      "lang": "mermaid",
      "code": "graph TB\n    subgraph 增強型LLM\n        A[\"LLM<br/>核心推理引擎\"] \n        A --> R[\"Retrieval<br/>檢索增強\"]\n        A --> T[\"Tools<br/>工具調用\"]\n        A --> M[\"Memory<br/>記憶管理\"]\n    end\n    \n    R -->|獲取外部知識| A\n    T -->|執行操作| A\n    M -->|維護上下文| A\n    \n    style A fill:#e1f5fe\n    style R fill:#fff3e0\n    style T fill:#e8f5e9\n    style M fill:#f3e5f5"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/ai-agent-book",
  "videos": []
}
---
> AI智慧體從入門到專案實踐 — 基於 LangChain + LangGraph 的生產級 AI 應用開發指南

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H3LX9N21