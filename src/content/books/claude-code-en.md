---
{
  "slug": "claude-code",
  "lang": "en",
  "title": "Claude Code: From Beginner to Project Practice",
  "subtitle": "The Complete Workflow from First Commands to Collaborative Delivery",
  "series": "ai-agents",
  "asin": "B0HR5ZVRB3",
  "market": "com",
  "onSale": true,
  "cover": "/covers/claude-code-en.jpg",
  "description": "I am delighted to introduce this book, which will help you master project development in collaboration with Claude Code and become a truly effective agentic coding practitioner.",
  "faq": [],
  "toc": [
    {
      "part": "Volume 1: Core Mechanisms and Basic Commands",
      "items": [
        "Chapter 1: Claude Code Overview and Installation",
        "Chapter 2: Your First Session and CLI Basics",
        "Chapter 3: Interaction Modes, Fast Mode, and Commands",
        "Chapter 4: Troubleshooting and Diagnostics",
        "Chapter 5: Context Window Management",
        "Chapter 6: The Memory System—CLAUDE.md and Auto Memory",
        "Chapter 7: The .claude Directory and Project Configuration",
        "Chapter 8: Checkpoints and Session Management",
        "Chapter 9: Environment Variables and Model Configuration",
        "Chapter 10: Permission Modes and Auto Mode",
        "Chapter 11: Sandboxes and Security Boundaries",
        "Chapter 12: Command Reference and Custom Slash Commands",
        "Chapter 13: Skills and Output Styles",
        "Chapter 14: Tool Reference and Subagents"
      ]
    },
    {
      "part": "Volume 2: Integrations, Extensions, and Enterprise Practices",
      "items": [
        "Chapter 15: Common Workflows and Best Practices",
        "Chapter 16: Hooks—Event-Driven Automation",
        "Chapter 17: The MCP Protocol—Connecting External Tools",
        "Chapter 18: Channels and Plugin Creation",
        "Chapter 19: Plugin Marketplaces and Dependency Management",
        "Chapter 20: Debugging Configurations and Integration Troubleshooting",
        "Chapter 21: Agent SDK Overview and Quick Start",
        "Chapter 22: SDK Custom Tools and Permissions",
        "Chapter 23: Streaming Output and Error Handling",
        "Chapter 24: Session Management and Headless Mode",
        "Chapter 25: Observability and Cost Tracking",
        "Chapter 26: Hands-On CI/CD Configuration"
      ]
    },
    {
      "part": "Volume 3: Practice 1—The Collaborative Full Lifecycle of Building a Project from Scratch",
      "items": [
        "Chapter 27: Requirements Specification and Project Initialization",
        "Chapter 28: Architecture Decisions and Generation Constraints",
        "Chapter 29: Domain Modeling and Database Integration",
        "Chapter 30: Task Decomposition and Core Coding",
        "Chapter 31: Test-Driven Development and Automated Defect Fixing",
        "Chapter 32: Version Control and Commit Management",
        "Chapter 33: Local Build and Delivery Retrospective"
      ]
    },
    {
      "part": "Volume 4: Practice 2—Collaboration and Automation for a High-Constraint Project, from Zero to Release",
      "items": [
        "Chapter 34: Security Baseline and Permission Controls",
        "Chapter 35: Team Standards and Automated Enforcement",
        "Chapter 36: Contract-Driven API Collaboration",
        "Chapter 37: Evolutionary Refactoring and Sensitive Guardrails",
        "Chapter 38: Parallel Development and the Subagent Pipeline",
        "Chapter 39: Unattended Operation and Batch Automation",
        "Chapter 40: CI/CD Gates and the Release Pipeline"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2　From Code Completion to Agentic Coding",
      "lang": "text",
      "code": "\nFigure 1-1　The evolution of three AI programming paradigms\n\nAnthropic's official documentation describes Claude Code like this: it is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks; it understands your entire codebase and completes tasks across multiple files and tools<!-- src:kp-001-01,official_doc -->.\n\nNote three key phrases: **understands your entire codebase**, **across multiple files**, and **across multiple tools**<!-- src:kp-001-01,official_doc -->. Let's take them apart one by one:\n\n- \"Understands your entire codebase\" means that before answering you, it proactively reads the relevant source files, configuration, and dependency manifests in your project, instead of only looking at the snippet you pasted<!-- src:kp-001-01,official_doc -->.\n- \"Across multiple files\" means it can edit `models.py` while updating `tests/test_models.py` in sync and adding notes in `README.md` at the same time<!-- src:kp-001-01,official_doc -->.\n- \"Across multiple tools\" means it invokes a set of built-in tools such as `Read`, `Write`, `Edit`, `Bash`, and `Grep` to perform real operations, and can also connect to your database or Jira through the MCP protocol<!-- src:kp-001-01,official_doc -->.\n\nThese three yardsticks are also the criteria for judging \"whether a given task can be handed to Claude Code\"<!-- src:kp-001-01,official_doc -->.\n\nTaken together, these three capabilities also mean one thing: **once a model can access your shell, file system, Git, and network, the risk escalates from \"giving a poor answer\" to \"executing real damage\"**<!-- src:src-004,reference_book -->. Code completion gives you, at worst, a buggy piece of code; a conversational assistant gives you, at worst, bad advice. But agentic coding can `rm -rf` your files, push a wrong commit to main, or send your secrets to an external server. That is why Claude Code is not just \"a smarter assistant\"—behind it sits an engineering system of constraints (permissions, sandboxing, hooks, and context governance) that keeps this powerful capability safely under control<!-- src:src-004,reference_book -->.\n\nWhy do we need constraints? Because a model is a probabilistic text generator, not a reliable colleague<!-- src:src-004,reference_book -->. You should not pin reliability on the hope that \"this time it probably won't fail\"; you should build it into the system itself. One OpenAI team spent five months having coding agents build a million-line product from scratch, with not a single line of code written by hand—their conclusion: **humans steer, agents execute**<!-- src:src-006,other_materials -->. The engineer's center of gravity shifts from \"writing code\" to \"designing the environment, making intent explicit, and building feedback loops\"<!-- src:src-006,other_materials -->. The chapters that follow will walk through Claude Code's safety mechanisms one by one—permissions, sandboxing, hooks, context governance, and error recovery—and they all share one goal: **letting an unreliable but highly effective component work safely**<!-- src:src-004,reference_book -->.\n\n\nTable 1-1　Capability comparison of three types of AI coding tools\n\n| Capability | Code completion | Conversational assistant | Claude Code |\n|---|---|---|---|\n| Sees the whole project | No | No | Yes |\n| Cross-file edits | No | No (can only output suggestions) | Yes |\n| Runs commands directly | No | No | Yes |\n| Connects external tools | No | Weak (plugins) | Strong (MCP standard protocol) |\n| Scriptable | No | Weak | Yes (CLI + SDK) |\n| Shares context across entry points | No | No | Yes |\n\nClaude Code is designed on the assumption that you are not here to ask questions—**you are here to deliver a task**[1]. Give it a complete task description with clear boundaries that can be verified—for example, \"add type annotations to this file and run mypy over it\"—and that is how you get the most value out of it.\n\nThe difference between these two kinds of input can be compressed into a table:\n\nTable 1-2　Q&A-style input vs. task-style input\n\n| Dimension | Q&A-style (Q&A) | Task-style (Task) |\n|---|---|---|\n| Input form | Ask questions, request explanations | Issue commands, set goals |\n| Expected output | Text answers, code snippets | Real code changes, command execution results |\n| Verifiability | Hard (judged by a human) | Easy (check the diff, check whether tests pass) |\n| Triggers tools | No | Yes (`Read` / `Edit` / `Bash`, etc.) |\n| Suitable tool | Web chat | Claude Code |\n\nWhen your input contains a verb, a boundary condition, and an acceptance criterion all at once, it turns from a \"question\" into a \"task\"—and you begin to actually use Claude Code. Task-style input is the core way to use Claude Code precisely because it triggers real tool execution—and **the safety mechanisms exist precisely to make sure those executions are safe**<!-- src:src-004,reference_book -->.\n\n```mermaid\nflowchart LR\n    A[You type one sentence] --> B{Q&A or task?}\n    B -->|Q&A| C[Read files Glob/Grep] --> D[Generate a text answer] --> E[Display directly]\n    B -->|Task| F[Read files] --> G[Generate a code-change diff]\n    G --> H{Awaiting your approval}\n    H -->|A Accept| I[Write to disk]\n    H -->|R Reject| J[Redo]"
    },
    {
      "heading": "1.2　From Code Completion to Agentic Coding",
      "lang": "text",
      "code": "\nFigure 1-2　The two internal paths triggered by Q&A-style and task-style input\n\nStarting from this section you can begin building this mindset: replace \"asking\" with \"doing\", and replace \"what is it\" with \"please go accomplish this\". This is the first watershed between being a conversational-assistant user and becoming an agentic-tool user.\n\n## 1.3　Choosing Among the Six Official Entry Points\n\nClaude Code's underlying engine is the same across all entry points—the same model, the same toolset, the same calling conventions<!-- src:kp-001-02,official_doc -->. The differences you see among the terminal, desktop, and IDE plugins are differences of \"surface\", not of \"underlying capability\"<!-- src:kp-001-02,official_doc -->.\n\nTable 1-3　The six official entry points to Claude Code\n\n| Entry point | Best for | What it is especially good at |\n|---|---|---|\n| Terminal CLI | Terminal-native workflows, scripting, remote servers | Everything; Agent SDK and third-party model providers exist only in the CLI<!-- src:kp-001-02,official_doc --> |\n| Desktop app | Visual review, parallel sessions | Diff viewer, in-app preview<!-- src:kp-001-02,official_doc --> |\n| VS Code extension | Getting everything done without leaving VS Code | Inline diffs, integrated terminal, file-context sync<!-- src:kp-001-02,official_doc --> |\n| JetBrains plugin | IntelliJ / PyCharm / WebStorm users | Diff viewer, sharing the current selection<!-- src:kp-001-02,official_doc --> |\n| Web | Long-running unattended tasks | Runs on Anthropic's cloud and keeps going even after you disconnect<!-- src:kp-001-02,official_doc --> |\n| Mobile | Monitoring tasks while away from your computer | The iOS / Android Claude app, plus Remote Control to drive your computer session<!-- src:kp-001-02,official_doc --> |\n\nKeep one sentence in mind: **the CLI is the most complete platform**<!-- src:kp-001-02,official_doc -->. Scripting, the `-p` non-interactive mode, and the Agent SDK exist only in the CLI. Most operations in this book use the CLI as the example, and you can follow along in the other entry points as well.\n\nOne key fact: **`CLAUDE.md`, `settings`, and MCP servers are shared across the local entry points**<!-- src:kp-001-02,official_doc -->. Configuration you write for the CLI takes effect immediately when you open the VS Code extension. But the Web runs on Anthropic's cloud and **cannot read your local `CLAUDE.md` or MCP configuration**—this is the easiest trap to step into when you later decide \"when to use the Web\"<!-- src:kp-001-02,official_doc -->.\n\n```mermaid\nflowchart TB\n    subgraph Engine[The same engine]\n        CFG[CLAUDE.md / settings / MCP config]\n    end\n    CLI[Terminal CLI] --- CFG\n    DT[Desktop app] --- CFG\n    VS[VS Code extension] --- CFG\n    JB[JetBrains plugin] --- CFG\n    style CFG fill:#fff5b8"
    }
  ],
  "caseRepo": "",
  "videos": []
}
---
> Claude Code: From Beginner to Project Practice — The Complete Workflow from First Commands to Collaborative Delivery

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0HR5ZVRB3