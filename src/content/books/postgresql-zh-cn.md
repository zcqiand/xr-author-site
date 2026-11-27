---
{
  "slug": "postgresql",
  "lang": "zh-cn",
  "title": "PostgreSQL DBA 實戰",
  "subtitle": "從開發到資料庫專家的轉型指南: MySQL對比式學習 + 兩大生產項目，掌握生產級DBA能力",
  "series": "backend",
  "asin": "B0H4WP4QK5",
  "market": "com",
  "onSale": false,
  "cover": "/covers/postgresql-zh-cn.jpg",
  "description": "2019年，我负责一个电商平台的数据库迁移项目——从 MySQL 迁移到 PostgreSQL。团队里有经验丰富的 MySQL DBA，也有工作了两年、SQL 写得不错的开发工程师。我以为迁移会很快，结果花了三个月。 问题不是出在迁移工具上，而是出在认知鸿沟上。MySQL DBA 习惯用 SHOW PROCESSLIST 看连接状态，到了 PostgreSQL 发现要用 pg_stat_activity；开发工程师以为 VACUUM 就是 MySQL 的 OPTIMIZE TABLE，结果在生产环境因为 autovacuum 配置不当导致表膨胀了 3 倍。那三个月里，我反复翻阅 PostgreSQL 官方文档、各种博客和论坛帖子，把零散的信息拼凑成一份内部培训手册——这本书就是从那份手册生长出来的。",
  "faq": [],
  "toc": [
    {
      "part": "第一卷　入门与基础",
      "items": [
        "第1章　理解 DBA 的角色：为什么你需要从开发转型数据库专家",
        "第2章　搭建你的第一个 PostgreSQL 环境：三种安装方式该选哪个",
        "第3章　读懂 PostgreSQL 的内部构造：进程架构与内存结构",
        "第4章　让数据就位：数据库与模式的设计与管理",
        "第5章　SQL 操作实战：从建表到复杂查询的 DBA 基本功",
        "第6章　玩转高级数据类型：JSONB、数组、范围类型带来的设计自由度",
        "第7章　守好第一道门：用户、角色与权限管理",
        "第8章　DBA 的瑞士军刀：psql 与 pgAdmin 的高效使用",
        "第9章　从 MySQL 迁移过来：工具选型与迁移实战"
      ]
    },
    {
      "part": "第二卷　核心运维",
      "items": [
        "第10章　让数据库跑得更快：服务器配置与参数调优实战",
        "第11章　连接管理的艺术：PgBouncer 连接池实战",
        "第12章　理解 WAL：事务日志是数据库的生命线",
        "第13章　为数据买保险：备份策略设计与实战",
        "第14章　时光倒流：PITR 时间点恢复实战",
        "第15章　给数据库上锁：SSL/TLS 加密与网络安全",
        "第16章　谁动了数据：审计与合规（pgAudit）",
        "第17章　清理房间：VACUUM 机制与日常维护",
        "第18章　让运维自动化：脚本化与定时任务体系"
      ]
    },
    {
      "part": "第三卷　性能与高可用",
      "items": [
        "第19章　读懂查询的心：EXPLAIN 执行计划分析实战",
        "第20章　给查询加速：索引类型与优化策略",
        "第21章　表连接策略与查询重写：让复杂查询飞起来",
        "第22章　让优化器更聪明：统计信息与计划器优化",
        "第23章　锁的迷宫：并发控制与死锁排查",
        "第24章　数据同步的基石：流复制原理与搭建",
        "第25章　让数据库永不宕机：Patroni 高可用集群实战",
        "第26章　读写分离与负载均衡：PgBouncer 与 HAProxy 实战",
        "第27章　当故障来袭：故障转移与自动恢复机制"
      ]
    },
    {
      "part": "第四卷　进阶运维与实战一：检测业务系统",
      "items": [
        "第28章　跨库同步新玩法：逻辑复制与数据分发",
        "第29章　表分区策略：当你的订单表撑起亿级数据",
        "第30章 扩展你的武器库：插件生态与扩展开发",
        "第31章 监控与告警：生产 DBA 的第一道防线",
        "第32章 像侦探一样排查故障：生产环境故障诊断方法论",
        "第33章　实战一启动：检测业务系统数据库架构设计",
        "第34章　实战一：检测数据的 JSONB 扩展字段与分区设计",
        "第35章　状态流转与事务一致性：报告流转状态机设计",
        "第36章　实战一收官：检测业务系统交付部署与验收"
      ]
    },
    {
      "part": "第五卷　实战二：身份平台高可用",
      "items": [
        "第37章　实战二开卷：SaaS 身份平台的合规分析与容灾架构设计",
        "第38章　实战二第二章：身份平台的数据安全三件套",
        "第39章　实战二第三章：令牌数据的一致性与跨中心复制",
        "第40章　实战二第四章：全链路压测与故障演练",
        "第41章　实战二第五章：运维自动化与 SOP 手册",
        "第42章　终章：DBA 能力模型与职业路径"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2　DBA 到底要做什么：三种角色与能力地图",
      "lang": "mermaid",
      "code": "graph TB\n    subgraph DBA能力模型\n        DevDBA[\"开发DBA<br/>表结构设计 / SQL优化 / 数据建模\"]\n        AppDBA[\"应用DBA<br/>慢查询分析 / 备份恢复 / 权限管理 / 监控告警\"]\n        InfraDBA[\"基础设施DBA<br/>高可用架构 / 存储规划 / 灾难恢复 / 自动化运维\"]\n    end\n\n    DevDBA --- AppDBA\n    AppDBA --- InfraDBA\n    DevDBA --- InfraDBA\n\n    DevDBA -->|核心技能| SQL[\"SQL进阶<br/>索引设计<br/>ORM调优\"]\n    AppDBA -->|核心技能| OPS[\"Linux运维<br/>备份策略<br/>监控方案\"]\n    InfraDBA -->|核心技能| HA[\"流复制/Patroni<br/>PITR恢复<br/>存储规划\"]\n\n    style DevDBA fill:#E3F2FD,stroke:#1565C0\n    style AppDBA fill:#FFF3E0,stroke:#E65100\n    style InfraDBA fill:#E8F5E9,stroke:#2E7D32"
    },
    {
      "heading": "1.2　DBA 到底要做什么：三种角色与能力地图",
      "lang": "text",
      "code": "\n图1-1　DBA 能力模型：三种角色的技能边界与交集\n\n图中三个角色的重叠区域是这本书要帮你覆盖的核心地带——从开发 DBA 逐步成长到应用 DBA，并具备基础设施 DBA 的核心能力。学完这本书，你能独立负责一个中等规模生产环境的 PostgreSQL 数据库。\n\n一个关键认知：三种角色不是\"初级-中级-高级\"的晋升路线。很多资深 DBA 一辈子深耕应用层或基础设施层。选择哪个方向取决于兴趣和公司需要，但你必须知道三种角色的边界在哪里——遇到问题时才知道该找谁、该学什么。\n\n## 1.3　PostgreSQL vs MySQL：五个你一定要知道的差异\n\n<!-- src:kp-001-04 -->\n\n如果你有 MySQL 经验，那么恭喜你——你已经有了关系型数据库的基础认知，很多概念可以直接迁移。但 PostgreSQL 和 MySQL 在底层架构上存在一些根本性差异，这些差异会直接影响你的运维方式、故障排查思路和工具选型。如果你是从零开始学 PostgreSQL 的读者，这一节同样重要——它会告诉你 PostgreSQL 的设计哲学是什么，为什么它和 MySQL 走了不同的路。\n\n五个核心差异如下（表 1-1）。\n\n表1-1　PostgreSQL 与 MySQL 的五个核心差异\n\n| 维度                      | PostgreSQL                                                                                              | MySQL                                                                                                     |\n| ------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |\n| **并发控制 / MVCC** | 基于 MVCC 的快照隔离，UPDATE 产生新版本行（tuple），旧版本由 VACUUM 回收                                | InnoDB 同样使用 MVCC，但通过 undo log 回滚段实现旧版本管理，由后台 purge 线程清理                         |\n| **数据类型**        | 原生支持 JSONB、数组（ARRAY）、范围（RANGE）、UUID、网络地址（INET/CIDR）等丰富类型                     | JSON 支持从 5.7 起可用，数组/范围类型无原生支持，依赖应用层处理                                           |\n| **扩展生态**        | 扩展（Extension）机制是一等公民：pg_stat_statements、pgAudit、PostGIS、Citus 等可深度集成内核           | 插件体系以存储引擎为主（InnoDB/MyISAM/NDB），功能扩展多依赖外部工具或 Proxy                               |\n| **复制机制**        | 物理流复制（Streaming Replication）+ 逻辑复制，均为内置；WAL 是唯一的日志来源`<!-- src:kp-001-01 -->` | 主从复制依赖 binlog（逻辑日志）+ redo log（物理日志）双日志体系；组复制（Group Replication）从 5.7 起可用 |\n| **许可证**          | PostgreSQL License（类 BSD），可自由使用、修改、分发，无商业限制`<!-- src:kp-001-01 -->`              | GPL 许可证，衍生作品必须开源；MySQL 企业版需付费许可                                                      |\n\n这五个差异里，对你日常运维影响最大的是第一条——**MVCC 的实现方式不同，导致了 PostgreSQL 特有的\"表膨胀\"问题**。PostgreSQL 的 UPDATE 不是原地修改数据行，而是插入新 tuple，旧数据行在 VACUUM 清理前一直占据磁盘空间。大量 UPDATE 的表如果 autovacuum 配置不当，表会越来越大，查询越来越慢。这个问题在 MySQL 里不存在——InnoDB 的 purge 机制在 undo log 中直接清理旧版本，数据页会被复用。`<!-- src:kp-001-01 -->`\n\n**那么，你该走哪条路？** 见图 1-2，下面的决策树帮你根据自己的背景快速定位。\n\n```mermaid\nflowchart TD\n    START[你的背景是什么？] --> Q1{是否已有DBA经验？}\n\n    Q1 -->|否，我是开发| Q2{主要用什么数据库？}\n    Q1 -->|是，我是MySQL DBA| PATH_B[路径B：MySQL DBA → PG DBA]\n    Q1 -->|否，但我想直接学| PATH_C[路径C：零基础 → PG DBA]\n\n    Q2 -->|MySQL| PATH_A1[路径A1：开发+MySQL<br/>→ 重点学PG特有差异<br/>MVCC/VACUUM/JSONB/流复制]\n    Q2 -->|其他或没用过| PATH_A2[路径A2：开发+无DB背景<br/>→ 从SQL基础开始<br/>同步学PG运维]\n\n    PATH_B --> TIP_B[核心转换任务：<br/>1. undo log → MVCC/VACUUM<br/>2. binlog → WAL<br/>3. GRANT → ROLE继承<br/>4. 存储引擎差异 → 单一存储引擎]\n\n    PATH_C --> TIP_C[优势：无历史包袱<br/>挑战：需同时建立<br/>DBA思维和PG技术栈<br/>建议：先学SQL再学运维]\n\n    style START fill:#E3F2FD,stroke:#1565C0\n    style PATH_B fill:#FFF3E0,stroke:#E65100\n    style PATH_C fill:#E8F5E9,stroke:#2E7D32\n    style PATH_A1 fill:#FCE4EC,stroke:#C62828\n    style PATH_A2 fill:#F3E5F5,stroke:#6A1B9A"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/postgresql-dba-book",
  "videos": [],
  "mirrorOf": "zh-tw"
}
---
> PostgreSQL DBA 實戰 — 從開發到資料庫專家的轉型指南: MySQL對比式學習 + 兩大生產項目，掌握生產級DBA能力

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H4WP4QK5