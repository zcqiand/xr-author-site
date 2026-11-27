---
{
  "slug": "codex",
  "lang": "zh-cn",
  "title": "Codex 從入門到專案實踐",
  "subtitle": "掌握開源代理式編碼：從基礎到生產級專案",
  "series": "ai-agents",
  "asin": "B0H3781RB9",
  "market": "com",
  "format": "kindle",
  "onSale": false,
  "cover": "/covers/codex-zh-cn.jpg",
  "description": "--- 2025 年秋天，我在一个创业公司担任技术顾问。团队决定全面引入 AI 编程工具来提升开发效率，他们试过 GitHub Copilot，也试过让工程师在 ChatGPT 网页版上调试代码，但效果都不理想——Copilot 只能补全零散代码片段，ChatGPT 需要手动复制粘贴，每次都得重新解释项目上下文。后来他们发现了 OpenAI Codex，一个能直接操作文件系统、运行命令、管理 Git 的代理式编码工具。短短两个月，团队的开发效率提升了 40%，但那段摸索配置、扩展机制、安全边界的经历充满了弯路。这本书就是那段经历的系统化总结——我希望其他开发者不需要重复那些踩坑的过程。",
  "faq": [],
  "toc": [],
  "sample": [
    {
      "heading": "1.2　AI 编程的三次范式转变",
      "lang": "mermaid",
      "code": "flowchart LR\n    A[代码补全<br/>Copilot 早期] -->|\"Tab 续写\\n只看光标周围\"| B[聊天助手<br/>ChatGPT 面板]\n    B -->|\"问答交互\\n无法操作文件\"| C[Agentic Coding<br/>Codex]\n    C -->|\"自主规划执行\\n读写文件·运行命令\"| D[开发者审查确认]\n\n    style A fill:#f5f5f5,stroke:#999\n    style B fill:#f5f5f5,stroke:#999\n    style C fill:#d4edda,stroke:#28a745,stroke-width:2px\n    style D fill:#cce5ff,stroke:#007bcc"
    },
    {
      "heading": "1.2　AI 编程的三次范式转变",
      "lang": "text",
      "code": "\n图1-1　AI 编程范式的三次演进\n\n如果你之前只用过 Copilot 或 ChatGPT 写代码，你可能已经隐约感觉到它们的「天花板」——Copilot 能帮你省掉重复输入，但没法帮你规划整个功能；ChatGPT 能回答你的问题，但每次都要你手动把代码贴来贴去。Agentic Coding 打破了这个天花板，因为它能真正「动手」。\n\n这三次转变的核心差异在于**自主性**：代码补全的自主性接近于零（它只负责猜下一行）；聊天助手的自主性仅限于回答（它不能动手）；而 Agentic Coding 的自主性覆盖了从理解到执行的完整链路。\n\n表1-1　三种 AI 编程范式的能力对比\n\n| 能力维度 | 代码补全 | 聊天助手 | Agentic Coding |\n|---|---|---|---|\n| 读取项目文件 | 仅当前文件 | 需手动粘贴 | 自主遍历整个仓库 |\n| 执行终端命令 | 不支持 | 不支持 | 自主执行并读取输出 |\n| 修改代码 | 仅续写当前行 | 需手动复制粘贴 | 直接编辑文件 |\n| 任务规划 | 不支持 | 需人工拆解 | 自主拆解并分步执行 |\n| 错误修正 | 不支持 | 需人工迭代 | 读取报错后自主修正 |\n\n进入 Agentic Coding 时代后，一个关键变化是：你对 AI 的指令从「怎么做」变成了「要什么」。你不需要告诉它先读哪个文件、再改哪个函数——你只需要描述目标，由它自己规划路径。这个转变会贯穿本书的每一个章节。\n\n## 1.3　Codex 核心能力全景\n\nCodex 是 OpenAI 推出的代理式编码工具，官方将其定位为「One agent for everywhere you code」——一个覆盖你所有编码场景的 AI 代理。[1] 它由 Rust 语言编写，CLI 部分完全开源，托管在 GitHub 上（`github.com/openai/codex`），任何人都可以审查其源码。[3]\n\nCodex 有五大核心能力，这五个能力构成了一个完整的「编码代理闭环」：[1]\n\n```mermaid\nflowchart TD\n    subgraph 五大核心能力\n        A[写代码<br/>Write Code] --> B[理解代码库<br/>Understand Codebase]\n        B --> C[审查代码<br/>Review Code]\n        C --> D[调试修复<br/>Debug & Fix]\n        D --> E[自动化任务<br/>Automate Tasks]\n        E --> A\n    end\n\n    style A fill:#d4edda,stroke:#28a745\n    style B fill:#cce5ff,stroke:#007bcc\n    style C fill:#fff3cd,stroke:#ffc107\n    style D fill:#f8d7da,stroke:#dc3545\n    style E fill:#e2d9f3,stroke:#6f42c1"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/codex-book",
  "caseRepos": [],
  "videos": [],
  "mirrorOf": "zh-tw"
}
---
> Codex 從入門到專案實踐 — 掌握開源代理式編碼：從基礎到生產級專案

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H3781RB9