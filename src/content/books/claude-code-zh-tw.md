---
{
  "slug": "claude-code",
  "lang": "zh-tw",
  "title": "Claude Code 從入門到專案實踐",
  "subtitle": "從命令入門到 RPG 與財務系統雙專案交付",
  "series": "ai-agents",
  "asin": "B0H3M3B8GG",
  "market": "com",
  "format": "kindle",
  "onSale": true,
  "cover": "/covers/claude-code-zh-tw.jpg",
  "description": "我非常高興向你介紹這本書，它將幫助你掌握與 Claude Code 協同開發項目的方法，成為一名真正高效的代理式編碼（Agentic Coding）實踐者。Claude Code 不是\"下一個代碼補全工具\"，它代表了 AI 輔助軟件開發的一次範式躍遷——從幫你續寫一行代碼，到和你協同交付整個任務。它的能力橫跨終端、IDE、SDK、API、Web 等多個入口，涉及大量命令、配置項、環境變量、權限規則、Hook、MCP 服務和 Agent SDK 接口。 這些能力強大，但也帶來一個實際問題：命令散落在官方文檔、更新日誌和各處示例裡，配置項之間互相影響，參數取值沒有集中索引。",
  "faq": [],
  "toc": [
    {
      "part": "卷一　核心機制與基礎命令",
      "items": [
        "第1章　Claude Code 概述與安裝",
        "第2章　第一次會話與 CLI 基礎",
        "第3章　交互模式、快速模式與命令",
        "第4章　故障排除與診斷",
        "第5章　上下文窗口管理",
        "第6章　記憶系統：CLAUDE.md 與自動記憶",
        "第7章　.claude 目錄與項目配置",
        "第8章　檢查點與會話管理",
        "第9章　環境變量與模型配置",
        "第10章　權限模式與自動模式",
        "第11章　沙箱與安全邊界",
        "第12章　命令參考與自定義斜槓命令",
        "第13章　技能與輸出樣式",
        "第14章　工具參考與子代理"
      ]
    },
    {
      "part": "卷二　集成擴展與企業實踐",
      "items": [
        "第15章　常見工作流與最佳實踐",
        "第16章　Hooks：事件驅動的自動化",
        "第17章　MCP 協議：連接外部工具",
        "第18章　頻道與插件創建",
        "第19章　插件市場與依賴管理",
        "第20章　調試配置與集成排查",
        "第21章　Agent SDK 概述與快速入門",
        "第22章　SDK 自定義工具與權限",
        "第23章　流式輸出與錯誤處理",
        "第24章　會話管理與無頭模式",
        "第25章　可觀測性與成本追蹤",
        "第26章　CI/CD 實戰配置"
      ]
    },
    {
      "part": "卷三　實戰一：從零創建一個項目的協同全流程",
      "items": [
        "第27章　需求規約與項目初始化",
        "第28章　架構決策與生成約束",
        "第29章　領域建模與數據庫接入",
        "第30章　任務拆解與核心編碼",
        "第31章　測試驅動與缺陷自動修復",
        "第32章　版本控制與提交管理",
        "第33章　本地構建與交付復盤"
      ]
    },
    {
      "part": "卷四　實戰二：高約束項目從零到發佈的協同與自動化",
      "items": [
        "第34章　安全基線與權限管控",
        "第35章　團隊規範與自動化執法",
        "第36章　契約驅動與 API 協作",
        "第37章　演進重構與敏感護欄",
        "第38章　並行開發與子代理流水線",
        "第39章　無人值守與批量自動化",
        "第40章　CI/CD 門禁與發佈流水線"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2　從代碼補全到代理式編碼",
      "lang": "text",
      "code": "\n圖1-1　三種 AI 編程範式的演進\n\nAnthropic 官方文檔這樣描述 Claude Code：它是一個 AI 驅動的編碼助手，能幫你構建功能、修復 bug、自動化開發任務；它能理解你的整個代碼庫，跨多個文件和工具協作完成任務<!-- src:kp-001-01,official_doc -->。\n\n注意三個關鍵詞：**理解整個代碼庫**、**跨多個文件**、**跨多個工具**<!-- src:kp-001-01,official_doc -->。把它們逐個拆開看：\n\n- \"理解整個代碼庫\"意味著它在回答你之前，會主動讀項目裡相關的源文件、配置、依賴清單，而不是隻看你貼出來的那一段<!-- src:kp-001-01,official_doc -->。\n- \"跨多個文件\"意味著它可以一邊改 `models.py`，一邊同步更新 `tests/test_models.py`，一邊在 `README.md` 里加說明<!-- src:kp-001-01,official_doc -->。\n- \"跨多個工具\"意味著它會調用 `Read`、`Write`、`Edit`、`Bash`、`Grep` 這一組內置工具去執行真實操作，也可以通過 MCP 協議接到你的數據庫、Jira 上去<!-- src:kp-001-01,official_doc -->。\n\n這三把尺子也是判斷\"某個任務能不能交給 Claude Code\"的標準<!-- src:kp-001-01,official_doc -->。\n\n這三個能力放在一起也意味著一件事：**一旦模型能訪問 shell、文件系統、Git 和網絡，風險就從\"回答得不好\"升級為\"執行造成真實破壞\"**<!-- src:src-004,reference_book -->。代碼補全最多給你一段有 bug 的代碼；對話式助手最多輸出錯誤建議。但 agentic coding 可以直接 `rm -rf` 你的文件、推送錯誤的 commit 到 main、把密鑰發給外部服務器。這就是為什麼 Claude Code 不只是\"一個更聰明的助手\"——它背後有一套工程約束體系（權限、沙箱、Hook、上下文治理），確保這個強大的能力被安全地駕馭<!-- src:src-004,reference_book -->。\n\n為什麼需要約束？因為模型是概率性的文本生成器，不是可靠的同事<!-- src:src-004,reference_book -->。你不應該把可靠性寄託在\"這次應該不會出錯\"上，而應該把它構建進系統本身。OpenAI 的一個團隊用五個月時間讓編碼智能體從零構建百萬行代碼的產品，其中沒有一行代碼是人工編寫的——他們的結論是：**人類掌舵，智能體執行**<!-- src:src-006,other_materials -->。工程師的工作重心從\"寫代碼\"轉向了\"設計環境、明確意圖、構建反饋迴路\"<!-- src:src-006,other_materials -->。本書後續章節會逐一展開 Claude Code 的安全機制——權限、沙箱、Hook、上下文治理、錯誤恢復——它們的共同目標是：**讓一個不可靠但高效的組件安全地工作**<!-- src:src-004,reference_book -->。\n\n\n表1-1　三類 AI 編程工具的能力對比\n\n| 能力維度 | 代碼補全 | 對話式助手 | Claude Code |\n|---|---|---|---|\n| 看見整個項目 | 否 | 否 | 是 |\n| 跨文件修改 | 否 | 否（只能輸出建議） | 是 |\n| 直接執行命令 | 否 | 否 | 是 |\n| 接入外部工具 | 否 | 弱（插件） | 強（MCP 標準協議） |\n| 可被腳本化 | 否 | 弱 | 是（CLI + SDK） |\n| 多入口共享上下文 | 否 | 否 | 是 |\n\nClaude Code 的設計假設是：你不是來問問題的，**你是來交付一段任務的**[1]。給出一句完整、有邊界、可驗證的任務描述——比如\"為這個文件加上類型註解，並用 mypy 跑一遍\"——這才是它發揮最大價值的用法。\n\n這兩類語句的差別可以用一張表壓縮：\n\n表1-2　問答式輸入與任務式輸入對比\n\n| 維度 | 問答式（Q&A） | 任務式（Task） |\n|---|---|---|\n| 輸入形態 | 提問、求解釋 | 命令、定目標 |\n| 期望輸出 | 文字答案、代碼片段 | 真實代碼改動、命令執行結果 |\n| 可驗證性 | 難（人腦判斷） | 易（看 diff、看測試是否通過） |\n| 是否觸發工具 | 否 | 是（`Read` / `Edit` / `Bash` 等） |\n| 適合的工具 | 網頁版聊天 | Claude Code |\n\n當你給的輸入同時包含一個動詞、一個邊界條件、一個驗收標準，它就從\"問答\"變成了\"任務\"，你也就開始真正使用 Claude Code 了。任務式輸入之所以是 Claude Code 的核心用法，正是因為它觸發了真實的工具執行——而**這套安全機制的存在正是為了確保這些執行是安全的**<!-- src:src-004,reference_book -->。\n\n```mermaid\nflowchart LR\n    A[你輸入一句話] --> B{是問答還是任務?}\n    B -->|問答式| C[讀文件 Glob/Grep] --> D[生成文字回答] --> E[直接顯示]\n    B -->|任務式| F[讀文件] --> G[生成代碼改動 diff]\n    G --> H{等你審批}\n    H -->|A 接受| I[寫入磁盤]\n    H -->|R 拒絕| J[重做]"
    },
    {
      "heading": "1.2　從代碼補全到代理式編碼",
      "lang": "text",
      "code": "\n圖1-2　問答式與任務式輸入在內部觸發的兩條路徑\n\n從這一節起你就可以建立這種思維：把\"問\"換成\"做\"，把\"是什麼\"換成\"請你去完成什麼\"。這是從對話式助手用戶成長為 agentic 工具用戶的第一道分水嶺。\n\n## 1.3　六種官方入口選型\n\nClaude Code 的底層引擎在所有入口上都一樣——同一個模型、同一套工具、同一份調用約定<!-- src:kp-001-02,official_doc -->。你看到的終端、桌面、IDE 插件之間的差異，只是\"操作面\"的差異，不是\"能力本質\"的差異<!-- src:kp-001-02,official_doc -->。\n\n表1-3　Claude Code 的六類官方入口\n\n| 入口 | 適合場景 | 它特別擅長什麼 |\n|---|---|---|\n| 終端 CLI | 終端原生工作流、腳本化、遠程服務器 | 全部功能；Agent SDK、第三方模型供應商只在 CLI 上有<!-- src:kp-001-02,official_doc --> |\n| 桌面 App | 可視化審閱、並行多會話 | diff 查看器、應用內預覽<!-- src:kp-001-02,official_doc --> |\n| VS Code 插件 | 不離開 VS Code 完成所有事情 | 內聯 diff、集成終端、文件上下文同步<!-- src:kp-001-02,official_doc --> |\n| JetBrains 插件 | IntelliJ / PyCharm / WebStorm 用戶 | diff 查看器、當前選區共享<!-- src:kp-001-02,official_doc --> |\n| Web | 長時間無人值守任務 | 跑在 Anthropic 雲端，斷開連接也接著幹<!-- src:kp-001-02,official_doc --> |\n| Mobile | 不在電腦前時監控任務 | iOS / Android Claude App，配合 Remote Control 驅動電腦會話<!-- src:kp-001-02,official_doc --> |\n\n記住一句話：**CLI 是最完整的平臺**<!-- src:kp-001-02,official_doc -->。腳本化、`-p` 非交互模式、Agent SDK 這些只有 CLI 上才有。本書絕大多數操作都以 CLI 為例，你在其他入口上也能照做。\n\n一個關鍵事實：**`CLAUDE.md`、`settings`、MCP 服務器在本地各入口之間共享**<!-- src:kp-001-02,official_doc -->。你在 CLI 裡寫好的配置，打開 VS Code 插件後立刻生效。但 Web 跑在 Anthropic 雲端，**它讀不到你本地的 `CLAUDE.md` 和 MCP 配置**——這是後面選擇\"什麼時候用 Web\"時最容易踩的坑<!-- src:kp-001-02,official_doc -->。\n\n```mermaid\nflowchart TB\n    subgraph Engine[同一個引擎]\n        CFG[CLAUDE.md / settings / MCP 配置]\n    end\n    CLI[終端 CLI] --- CFG\n    DT[桌面 App] --- CFG\n    VS[VS Code 插件] --- CFG\n    JB[JetBrains 插件] --- CFG\n    style CFG fill:#fff5b8"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/claude-code-book",
  "caseRepos": [],
  "videos": []
}
---
> Claude Code 從入門到專案實踐 — 從命令入門到 RPG 與財務系統雙專案交付

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H3M3B8GG