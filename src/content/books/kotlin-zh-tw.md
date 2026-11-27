---
{
  "slug": "kotlin",
  "lang": "zh-tw",
  "title": "Kotlin 從入門到專案實踐",
  "subtitle": "Kotlin 2.4（K2 編譯器）+ Ktor 3 全路徑教程，從零基礎到雙企業級案例倉",
  "series": "backend",
  "asin": "B0HQ16BN7L",
  "market": "com",
  "format": "kindle",
  "onSale": true,
  "cover": "/covers/kotlin-zh-tw.jpg",
  "description": "2026 年的 Kotlin，和 2018 年的 Kotlin 已經是兩門不同的技術。 這是許多 Kotlin 學習者的共同處境。翻開市面現有的中文 Kotlin 圖書，你大概率會遇到這樣的場景： - 書裡的語法示例停在 Kotlin 1.1-1.3 時代，與 2.x 編譯器的行為和提示對不上 - 併發章節推薦的寫法早被結構化併發取代，照著寫會留下協程洩漏的隱患 - 想學服務端開發，書裡卻找不到任何一個現代 Kotlin Web 框架的完整項目 - 代碼片段很多，完整項目很少，學完還是不知道怎麼交付一個真實系統 問題不在於語言難學，而在於你手裡的資料停在了五年前。",
  "faq": [],
  "toc": [
    {
      "part": "讀者定位",
      "items": [
        "零基礎或僅有少量編程經驗（如一點 Java 基礎）的初學者",
        "想從 Java 遷移到 Kotlin 的後端開發者",
        "無硬性編程前置，本書從環境搭建講起",
        "有任意語言的入門經驗（如一點 Java 基礎）更順",
        "基本的開發環境使用經驗",
        "不假設你寫過 Kotlin",
        "決策導向：每個技術點都給出適用場景與選型理由",
        "案例倉 clone 即跑、測試全綠、無第三方 API Key"
      ]
    },
    {
      "part": "第1章　為什麼是 Kotlin：2.x 時代的生態位",
      "items": [
        "交付：能說清 Kotlin 解決什麼問題、K2 編譯器帶來了什麼，跑通第一個程序"
      ]
    },
    {
      "part": "第2章　開發環境與工程骨架：JDK 21 + IntelliJ + Gradle",
      "items": [
        "交付：建一個可運行的 Gradle Kotlin 工程，讀懂 build.gradle.kts 與項目結構"
      ]
    },
    {
      "part": "第3章　變量、基本類型與字符串模板",
      "items": [
        "交付：掌握 val/var、類型推斷、可空類型標註與字符串模板，能寫類型正確的小程序"
      ]
    },
    {
      "part": "第4章　空安全：Kotlin 的第一道分水嶺",
      "items": [
        "交付：掌握 ?.、?:、!!、let 的使用場景與 NPE 消除思路，給出安全調用決策框架"
      ]
    },
    {
      "part": "第5章　控制流與表達式化：when 的全部形態",
      "items": [
        "交付：掌握 when 的四種形態（帶主語/不帶/類型/區間）與表達式化思維，能替換複雜 if-else 鏈"
      ]
    },
    {
      "part": "第6章　函數與 Lambda：默認參數、高階函數入門",
      "items": [
        "交付：掌握函數全形態與 lambda、函數類型、具名參數，能寫接收回調的函數"
      ]
    },
    {
      "part": "第7章　集合與函數式操作：map/filter/reduce",
      "items": [
        "交付：掌握 List/Set/Map 操作符族與序列惰性求值，能對真實數據集做鏈式變換"
      ]
    },
    {
      "part": "第8章　卷一實戰：命令行待辦工具",
      "items": [
        "交付：獨立交付一個帶持久化的命令行待辦清單工具（讀文件/解析參數/輸出）"
      ]
    },
    {
      "part": "第9章　類與對象：構造、init 與可見性",
      "items": [
        "交付：掌握主/次構造、init 塊、屬性與可見性修飾符，能設計封裝合理的類"
      ]
    },
    {
      "part": "第10章　繼承、接口與 open 的默認哲學",
      "items": [
        "交付：掌握 open/final 默認、接口默認實現與抽象類，能對「該不該可繼承」給出理由"
      ]
    },
    {
      "part": "第11章　數據類、密封類與 object 三件套",
      "items": [
        "交付：掌握 data class/sealed class/object 的適用場景，能用密封類建模受限狀態機"
      ]
    },
    {
      "part": "第12章　擴展函數與擴展屬性",
      "items": [
        "交付：掌握擴展的解析規則與侷限，能給第三方類型寫安全擴展"
      ]
    },
    {
      "part": "第13章　泛型與委託：型變、reified 與屬性委託",
      "items": [
        "交付：掌握 in/out 型變、reified 實化與 by/lazy 委託，能設計自己的泛型 API 與委託屬性"
      ]
    },
    {
      "part": "第14章　運算符重載與作用域函數決策框架",
      "items": [
        "交付：掌握 operator/infix 與五個作用域函數的選擇決策表，能對任意代碼段選出正確寫法"
      ]
    },
    {
      "part": "第15章　卷二實戰：圖書管理領域建模",
      "items": [
        "交付：用數據類/密封類/擴展完成一個帶單元測試的領域模型小項目"
      ]
    },
    {
      "part": "第16章　異步之痛與協程心智模型：suspend",
      "items": [
        "交付：理解掛起 vs 阻塞的本質區別，掌握 suspend 函數與第一個協程（第二道分水嶺）"
      ]
    },
    {
      "part": "第17章　結構化併發：作用域、Job 與異常",
      "items": [
        "交付：掌握 CoroutineScope/launch/async、取消傳播與異常處理，能寫不洩漏的併發代碼"
      ]
    },
    {
      "part": "第18章　Flow：響應式數據流",
      "items": [
        "交付：掌握 cold flow/StateFlow/SharedFlow 的選型與操作符，能實現數據變更訂閱"
      ]
    },
    {
      "part": "第19章　Java 互操作與遷移策略",
      "items": [
        "交付：掌握 Kotlin/Java 互調的平臺類型、@Jvm 系列註解，能對既有 Java 類做增量遷移"
      ]
    },
    {
      "part": "第20章　Gradle 進階與多模塊工程",
      "items": [
        "交付：掌握 version catalog、多模塊拆分與依賴收斂，能把單模塊工程重構為多模塊"
      ]
    },
    {
      "part": "第21章　測試：JUnit 與質量門控",
      "items": [
        "交付：掌握單元測試/參數化測試/斷言風格，理解 ktfmt+detekt 靜態門控流水線"
      ]
    },
    {
      "part": "第22章　Ktor 入門：第一個 HTTP 服務",
      "items": [
        "交付：從零起一個 Ktor 服務：路由、JSON 序列化、配置與熱重載"
      ]
    },
    {
      "part": "第23章　數據訪問：Exposed + PostgreSQL",
      "items": [
        "交付：掌握表定義、DSL 查詢與事務邊界，能對數據庫做增刪改查並寫集成測試"
      ]
    },
    {
      "part": "第24章　認證與中間件：JWT、錯誤處理與日誌",
      "items": [
        "交付：掌握 JWT 認證流水線、統一異常處理與結構化日誌，能保護一組 API"
      ]
    },
    {
      "part": "第25章　卷三實戰：迷你任務管理 API",
      "items": [
        "交付：獨立交付一個帶認證與持久化的完整 REST API（含測試）"
      ]
    },
    {
      "part": "第26章　Ktor 深入：架構決策與 Spring Boot 4 橋接",
      "items": [
        "交付：掌握分層架構/依賴注入/OpenAPI 決策框架，能把 Ktor 經驗映射到 Spring Boot 4（Kotlin 2.2+ 基線），理解兩棧差異與遷移路徑"
      ]
    },
    {
      "part": "第27章　KMP 與 Compose Multiplatform 展望",
      "items": [
        "交付：理解 Kotlin 跨平臺的能力邊界與適用場景，能判斷自己的項目該不該上 KMP"
      ]
    },
    {
      "part": "第28章　項目一啟動：實驗室管理系統需求與架構",
      "items": [
        "交付：完成需求梳理、架構設計與模塊劃分，建立項目一的工程骨架"
      ]
    },
    {
      "part": "第29章　項目一：數據模型與倉儲層",
      "items": [
        "交付：落庫核心數據模型與 Exposed 倉儲層，含遷移與種子數據"
      ]
    },
    {
      "part": "第30章　項目一：檢測業務模塊與流程引擎",
      "items": [
        "交付：交付檢測能力網核心 API 與跨模塊協作流程，含角色權限控制"
      ]
    },
    {
      "part": "第31章　項目一：測試防線、門控與部署收官",
      "items": [
        "交付：建立四級門控與 CI 並容器化部署，全鏈路復盤與紀律交接"
      ]
    },
    {
      "part": "第32章　項目二啟動：SaaS 多租戶多應用身份平臺設計",
      "items": [
        "交付：完成多租戶架構設計與租戶隔離方案選型"
      ]
    },
    {
      "part": "第33章　項目二：租戶管理與數據隔離",
      "items": [
        "交付：交付租戶生命週期管理與行級數據隔離實現"
      ]
    },
    {
      "part": "第34章　項目二：認證、SSO 與 RBAC 菜單授權",
      "items": [
        "交付：交付自籤 JWT 雙令牌認證、單點登錄鏈路與角色-權限-菜單矩陣"
      ]
    },
    {
      "part": "第35章　全書收官：從語言到工程",
      "items": [
        "交付：一條代表性請求全鏈路點名回訪，紀律交接清單交付，能力地圖收束"
      ]
    },
    {
      "part": "附錄",
      "items": [
        "附錄 A：開發環境搭建與常見問題排查",
        "附錄 B：術語表",
        "附錄 C：案例倉運行指南",
        "附錄 D：混淆對速查索引（P01-P15）"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.3 K2 編譯器：1.x 與 2.x 的代際分水嶺",
      "lang": "text",
      "code": "\n這段代碼在 1.x 的老編譯器（K1）和 2.x 的 K2 下輸出完全一致：一行「你好，Kotlin」。真正的差異發生在你看不見的地方：編譯器幹活的過程，以及 IDE 幫你改代碼時的體驗。兩代工具鏈的體驗差異逐環節對照如表 1-2 所示。\n\n表1-2　同一程序在 1.x 與 2.x 工具鏈下的體驗差異\n\n| 關注點 | 1.x 時代（K1） | 2.x 時代（K2） |\n|--------|----------------|----------------|\n| 編譯速度 | 增量編譯尚可，大項目全量編譯明顯偏慢 | 編譯管線重寫後速度提升顯著，大項目體感尤其明顯 |\n| 錯誤診斷 | 報錯信息有時含糊，偶有指向不準的誤報 | 報錯位置與原因更精準，誤報明顯減少 |\n| IDE 分析 | 代碼補全與高亮偶爾卡頓、滯後於輸入 | 編輯器分析與編譯器共享同一套前端，響應更快更一致 |\n| 多平臺管線 | 各目標平臺編譯鏈路割裂，維護成本高 | 統一的前端架構讓多平臺（JVM/JS/Native）共用一套分析基礎 |\n\n這張表不必逐格背下來，抓住一個判斷就夠：K1 與 K2 的差別不是「多了一個功能」，而是「同一套語言，底下換了一臺更快的分析機器」。也正因為 K2 的前端與 IDE 共享實現，你在編輯器裡看到的紅色波浪線，和命令行編譯報的錯，說的是同一件事——這個一致性在 1.x 時代是保證不了的。\n\n對初學者還有一層實際影響：越新的工具鏈，報錯越「說人話」。你後面幾章必然會寫出編譯不過的代碼（這是好事），K2 給出的診斷信息能讓你更快定位到自己錯在哪一行、錯在哪個類型上。\n\n編譯器的代際差，最終都折算成開發者的等待時間。概念賬到這裡算清了，下一節把這臺新機器真正點著：跑通你的第一個 Kotlin 程序。\n\n## 1.4 跑通你的第一個 Kotlin 程序\n\n本節不急著搭建完整的工程環境（那是第 2 章的事），先用命令行編譯器把一段代碼真正跑起來——親眼看到輸出，比理解十個概念都重要。\n\n開工前先備齊兩樣東西：\n\n- **JDK 21**：Kotlin 最終運行在 JVM 上，編譯和運行都離不開它；\n- **Kotlin 命令行編譯器 kotlinc（2.4.x）**：本章只用它做編譯，獲取與安裝方式在第 2 章有完整步驟，此處不再展開。\n\n兩樣就緒後，按下面的結構建好目錄。先建目錄再寫代碼，是為了從第一個程序起就習慣 Gradle 的標準佈局——這個佈局第 2 章搭工程時原樣沿用，現在熟悉一次即可。\n\n```text {title=\"第一個 Kotlin 程序的目錄結構（Gradle 標準佈局的雛形）\"}\nhello/\n└── src/\n    └── main/\n        └── kotlin/\n            └── hello/\n                └── HelloKotlin.kt"
    },
    {
      "heading": "1.4 跑通你的第一個 Kotlin 程序",
      "lang": "text",
      "code": "\n目錄樹裡 `src/main/kotlin` 是 Gradle 約定的源碼根目錄，其下的 `hello/` 與代碼中的包名對應。接下來寫源碼。\n\n```kotlin {title=\"代碼清單1-2 HelloKotlin.kt——第一個完整的 Kotlin 程序\"}\npackage hello\n\nimport java.time.LocalDate\nimport kotlin.KotlinVersion\n\nfun main() {\n    // Kotlin 1.3 起 main 可以不寫 args 參數，這行省略是合法的；\n    // 本章用不到命令行輸入，少寫一個參數就少解釋一個概念\n    //\n    // KotlinVersion.CURRENT 讀的是隨 jar 一起打包的 Kotlin 運行庫版本：\n    // 用它而非硬編碼字符串，是為了確認「跑起來的」確實是新運行庫，\n    // 而不是源碼裡寫死的自我介紹\n    val runtimeVersion = KotlinVersion.CURRENT.toString()\n\n    // 用 java.time.LocalDate 而非老的 Date 類：\n    // 後者的大多數構造器與方法自 JDK 1.1 起就被標記為過時，\n    // 官方推薦用 java.time 包替代，新代碼沒有理由再碰它\n    val today = LocalDate.now()\n\n    println(\"Hello, Kotlin $runtimeVersion!\")\n    println(\"今天：$today\")\n    println(\"JVM 版本：${System.getProperty(\"java.version\")}\")\n}"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/kotlin-book",
  "caseRepos": [],
  "videos": []
}
---
> Kotlin 從入門到專案實踐 — Kotlin 2.4（K2 編譯器）+ Ktor 3 全路徑教程，從零基礎到雙企業級案例倉

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0HQ16BN7L