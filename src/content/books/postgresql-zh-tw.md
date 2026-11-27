---
{
  "slug": "postgresql",
  "lang": "zh-tw",
  "title": "PostgreSQL DBA 實戰",
  "subtitle": "從開發到資料庫專家的轉型指南: MySQL對比式學習 + 兩大生產項目，掌握生產級DBA能力",
  "series": "backend",
  "asin": "B0H4WP4QK5",
  "market": "com",
  "format": "kindle",
  "onSale": true,
  "cover": "/covers/postgresql-zh-tw.jpg",
  "description": "2019年，我負責一個電商平臺的數據庫遷移項目——從 MySQL 遷移到 PostgreSQL。團隊裡有經驗豐富的 MySQL DBA，也有工作了兩年、SQL 寫得不錯的開發工程師。我以為遷移會很快，結果花了三個月。 問題不是出在遷移工具上，而是出在認知鴻溝上。MySQL DBA 習慣用 SHOW PROCESSLIST 看連接狀態，到了 PostgreSQL 發現要用 pg_stat_activity；開發工程師以為 VACUUM 就是 MySQL 的 OPTIMIZE TABLE，結果在生產環境因為 autovacuum 配置不當導致表膨脹了 3 倍。那三個月裡，我反覆翻閱 PostgreSQL 官方文檔、各種博客和論壇帖子，把零散的信息拼湊成一份內部培訓手冊——這本書就是從那份手冊生長出來的。",
  "faq": [],
  "toc": [
    {
      "part": "第一卷　入門與基礎",
      "items": [
        "第1章　理解 DBA 的角色：為什麼你需要從開發轉型數據庫專家",
        "第2章　搭建你的第一個 PostgreSQL 環境：三種安裝方式該選哪個",
        "第3章　讀懂 PostgreSQL 的內部構造：進程架構與內存結構",
        "第4章　讓數據就位：數據庫與模式的設計與管理",
        "第5章　SQL 操作實戰：從建表到複雜查詢的 DBA 基本功",
        "第6章　玩轉高級數據類型：JSONB、數組、範圍類型帶來的設計自由度",
        "第7章　守好第一道門：用戶、角色與權限管理",
        "第8章　DBA 的瑞士軍刀：psql 與 pgAdmin 的高效使用",
        "第9章　從 MySQL 遷移過來：工具選型與遷移實戰"
      ]
    },
    {
      "part": "第二卷　核心運維",
      "items": [
        "第10章　讓數據庫跑得更快：服務器配置與參數調優實戰",
        "第11章　連接管理的藝術：PgBouncer 連接池實戰",
        "第12章　理解 WAL：事務日誌是數據庫的生命線",
        "第13章　為數據買保險：備份策略設計與實戰",
        "第14章　時光倒流：PITR 時間點恢復實戰",
        "第15章　給數據庫上鎖：SSL/TLS 加密與網絡安全",
        "第16章　誰動了數據：審計與合規（pgAudit）",
        "第17章　清理房間：VACUUM 機制與日常維護",
        "第18章　讓運維自動化：腳本化與定時任務體系"
      ]
    },
    {
      "part": "第三卷　性能與高可用",
      "items": [
        "第19章　讀懂查詢的心：EXPLAIN 執行計劃分析實戰",
        "第20章　給查詢加速：索引類型與優化策略",
        "第21章　表連接策略與查詢重寫：讓複雜查詢飛起來",
        "第22章　讓優化器更聰明：統計信息與計劃器優化",
        "第23章　鎖的迷宮：併發控制與死鎖排查",
        "第24章　數據同步的基石：流複製原理與搭建",
        "第25章　讓數據庫永不宕機：Patroni 高可用集群實戰",
        "第26章　讀寫分離與負載均衡：PgBouncer 與 HAProxy 實戰",
        "第27章　當故障來襲：故障轉移與自動恢復機制"
      ]
    },
    {
      "part": "第四卷　進階運維與實戰一：檢測業務系統",
      "items": [
        "第28章　跨庫同步新玩法：邏輯複製與數據分發",
        "第29章　表分區策略：當你的訂單表撐起億級數據",
        "第30章 擴展你的武器庫：插件生態與擴展開發",
        "第31章 監控與告警：生產 DBA 的第一道防線",
        "第32章 像偵探一樣排查故障：生產環境故障診斷方法論",
        "第33章　實戰一啟動：檢測業務系統數據庫架構設計",
        "第34章　實戰一：檢測數據的 JSONB 擴展字段與分區設計",
        "第35章　狀態流轉與事務一致性：報告流轉狀態機設計",
        "第36章　實戰一收官：檢測業務系統交付部署與驗收"
      ]
    },
    {
      "part": "第五卷　實戰二：身份平臺高可用",
      "items": [
        "第37章　實戰二開卷：SaaS 身份平臺的合規分析與容災架構設計",
        "第38章　實戰二第二章：身份平臺的數據安全三件套",
        "第39章　實戰二第三章：令牌數據的一致性與跨中心複製",
        "第40章　實戰二第四章：全鏈路壓測與故障演練",
        "第41章　實戰二第五章：運維自動化與 SOP 手冊",
        "第42章　終章：DBA 能力模型與職業路徑"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2　DBA 到底要做什麼：三種角色與能力地圖",
      "lang": "mermaid",
      "code": "graph TB\n    subgraph DBA能力模型\n        DevDBA[\"開發DBA<br/>表結構設計 / SQL優化 / 數據建模\"]\n        AppDBA[\"應用DBA<br/>慢查詢分析 / 備份恢復 / 權限管理 / 監控告警\"]\n        InfraDBA[\"基礎設施DBA<br/>高可用架構 / 存儲規劃 / 災難恢復 / 自動化運維\"]\n    end\n\n    DevDBA --- AppDBA\n    AppDBA --- InfraDBA\n    DevDBA --- InfraDBA\n\n    DevDBA -->|核心技能| SQL[\"SQL進階<br/>索引設計<br/>ORM調優\"]\n    AppDBA -->|核心技能| OPS[\"Linux運維<br/>備份策略<br/>監控方案\"]\n    InfraDBA -->|核心技能| HA[\"流複製/Patroni<br/>PITR恢復<br/>存儲規劃\"]\n\n    style DevDBA fill:#E3F2FD,stroke:#1565C0\n    style AppDBA fill:#FFF3E0,stroke:#E65100\n    style InfraDBA fill:#E8F5E9,stroke:#2E7D32"
    },
    {
      "heading": "1.2　DBA 到底要做什麼：三種角色與能力地圖",
      "lang": "text",
      "code": "\n圖1-1　DBA 能力模型：三種角色的技能邊界與交集\n\n圖中三個角色的重疊區域是這本書要幫你覆蓋的核心地帶——從開發 DBA 逐步成長到應用 DBA，並具備基礎設施 DBA 的核心能力。學完這本書，你能獨立負責一箇中等規模生產環境的 PostgreSQL 數據庫。\n\n一個關鍵認知：三種角色不是\"初級-中級-高級\"的晉升路線。很多資深 DBA 一輩子深耕應用層或基礎設施層。選擇哪個方向取決於興趣和公司需要，但你必須知道三種角色的邊界在哪裡——遇到問題時才知道該找誰、該學什麼。\n\n## 1.3　PostgreSQL vs MySQL：五個你一定要知道的差異\n\n<!-- src:kp-001-04 -->\n\n如果你有 MySQL 經驗，那麼恭喜你——你已經有了關係型數據庫的基礎認知，很多概念可以直接遷移。但 PostgreSQL 和 MySQL 在底層架構上存在一些根本性差異，這些差異會直接影響你的運維方式、故障排查思路和工具選型。如果你是從零開始學 PostgreSQL 的讀者，這一節同樣重要——它會告訴你 PostgreSQL 的設計哲學是什麼，為什麼它和 MySQL 走了不同的路。\n\n五個核心差異如下（表 1-1）。\n\n表1-1　PostgreSQL 與 MySQL 的五個核心差異\n\n| 維度                      | PostgreSQL                                                                                              | MySQL                                                                                                     |\n| ------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |\n| **併發控制 / MVCC** | 基於 MVCC 的快照隔離，UPDATE 產生新版本行（tuple），舊版本由 VACUUM 回收                                | InnoDB 同樣使用 MVCC，但通過 undo log 回滾段實現舊版本管理，由後臺 purge 線程清理                         |\n| **數據類型**        | 原生支持 JSONB、數組（ARRAY）、範圍（RANGE）、UUID、網絡地址（INET/CIDR）等豐富類型                     | JSON 支持從 5.7 起可用，數組/範圍類型無原生支持，依賴應用層處理                                           |\n| **擴展生態**        | 擴展（Extension）機制是一等公民：pg_stat_statements、pgAudit、PostGIS、Citus 等可深度集成內核           | 插件體系以存儲引擎為主（InnoDB/MyISAM/NDB），功能擴展多依賴外部工具或 Proxy                               |\n| **複製機制**        | 物理流複製（Streaming Replication）+ 邏輯複製，均為內置；WAL 是唯一的日誌來源`<!-- src:kp-001-01 -->` | 主從複製依賴 binlog（邏輯日誌）+ redo log（物理日誌）雙日誌體系；組複製（Group Replication）從 5.7 起可用 |\n| **許可證**          | PostgreSQL License（類 BSD），可自由使用、修改、分發，無商業限制`<!-- src:kp-001-01 -->`              | GPL 許可證，衍生作品必須開源；MySQL 企業版需付費許可                                                      |\n\n這五個差異裡，對你日常運維影響最大的是第一條——**MVCC 的實現方式不同，導致了 PostgreSQL 特有的\"表膨脹\"問題**。PostgreSQL 的 UPDATE 不是原地修改數據行，而是插入新 tuple，舊數據行在 VACUUM 清理前一直佔據磁盤空間。大量 UPDATE 的表如果 autovacuum 配置不當，表會越來越大，查詢越來越慢。這個問題在 MySQL 裡不存在——InnoDB 的 purge 機制在 undo log 中直接清理舊版本，數據頁會被複用。`<!-- src:kp-001-01 -->`\n\n**那麼，你該走哪條路？** 見圖 1-2，下面的決策樹幫你根據自己的背景快速定位。\n\n```mermaid\nflowchart TD\n    START[你的背景是什麼？] --> Q1{是否已有DBA經驗？}\n\n    Q1 -->|否，我是開發| Q2{主要用什麼數據庫？}\n    Q1 -->|是，我是MySQL DBA| PATH_B[路徑B：MySQL DBA → PG DBA]\n    Q1 -->|否，但我想直接學| PATH_C[路徑C：零基礎 → PG DBA]\n\n    Q2 -->|MySQL| PATH_A1[路徑A1：開發+MySQL<br/>→ 重點學PG特有差異<br/>MVCC/VACUUM/JSONB/流複製]\n    Q2 -->|其他或沒用過| PATH_A2[路徑A2：開發+無DB背景<br/>→ 從SQL基礎開始<br/>同步學PG運維]\n\n    PATH_B --> TIP_B[核心轉換任務：<br/>1. undo log → MVCC/VACUUM<br/>2. binlog → WAL<br/>3. GRANT → ROLE繼承<br/>4. 存儲引擎差異 → 單一存儲引擎]\n\n    PATH_C --> TIP_C[優勢：無歷史包袱<br/>挑戰：需同時建立<br/>DBA思維和PG技術棧<br/>建議：先學SQL再學運維]\n\n    style START fill:#E3F2FD,stroke:#1565C0\n    style PATH_B fill:#FFF3E0,stroke:#E65100\n    style PATH_C fill:#E8F5E9,stroke:#2E7D32\n    style PATH_A1 fill:#FCE4EC,stroke:#C62828\n    style PATH_A2 fill:#F3E5F5,stroke:#6A1B9A"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/postgresql-dba-book",
  "caseRepos": [],
  "videos": []
}
---
> PostgreSQL DBA 實戰 — 從開發到資料庫專家的轉型指南: MySQL對比式學習 + 兩大生產項目，掌握生產級DBA能力

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H4WP4QK5