---
{
  "slug": "codex",
  "lang": "ja",
  "title": "Codex 入門からプロジェクト実践へ",
  "subtitle": "オープンソースのエージェント型コーディングを習得する：基礎から本番レベルのプロジェクトまで AI",
  "series": "ai-agents",
  "asin": "B0HSLVJW73",
  "market": "co.jp",
  "onSale": true,
  "cover": "/covers/codex-ja.jpg",
  "description": "--- 2025 年の秋、私はあるスタートアップでテクニカルアドバイザーを務めていました。チームは開発効率を高めるため、AI コーディングツールの全面導入を決めました。GitHub Copilot を試し、ChatGPT の Web 版でエンジニアにコードをデバッグさせるのも試しましたが、どちらも期待した効果は得られませんでした——Copilot は断片的なコードの補完しかできず、ChatGPT は手作業でのコピー＆ペーストが必要で、そのたびにプロジェクトのコンテクストを説明し直さなければならないのです。その後、チームは OpenAI Codex を見つけました。ファイルシステムを直接操作し、コマンドを実行し、Git を管理できるエージェント型コーディングツールです。",
  "faq": [],
  "toc": [],
  "sample": [
    {
      "heading": "1.2　AI プログラミングの 3 回のパラダイム転換",
      "lang": "mermaid",
      "code": "flowchart LR\n    A[コード補完<br/>Copilot 初期] -->|\"Tab で続きを補完\\nカーソル周辺のみ参照\"| B[チャットアシスタント<br/>ChatGPT パネル]\n    B -->|\"質疑応答のやり取り\\nファイル操作は不可\"| C[Agentic Coding<br/>Codex]\n    C -->|\"自律的に計画・実行\\nファイル読み書き・コマンド実行\"| D[開発者がレビューして確認]\n\n    style A fill:#f5f5f5,stroke:#999\n    style B fill:#f5f5f5,stroke:#999\n    style C fill:#d4edda,stroke:#28a745,stroke-width:2px\n    style D fill:#cce5ff,stroke:#007bcc"
    },
    {
      "heading": "1.2　AI プログラミングの 3 回のパラダイム転換",
      "lang": "text",
      "code": "\n図1-1　AI プログラミングパラダイムの 3 段階の進化\n\nこれまで Copilot や ChatGPT でしかコードを書いたことがないなら、その「天井」をなんとなく感じていたかもしれません。Copilot は繰り返しの入力を省いてくれますが、機能全体の計画を任せることはできません。ChatGPT は質問には答えてくれますが、毎回コードを手作業で貼り付けて回る必要があります。Agentic Coding はこの天井を打ち破りました。本当に「手を動かせる」ようになったからです。\n\nこの 3 つの転換の中核的な違いは**自律性**です。コード補完の自律性はほぼゼロ（次の行を推測するだけ）、チャットアシスタントの自律性は回答にとどまる（手を動かせない）、そして Agentic Coding の自律性は理解から実行までの全プロセスを覆います。\n\n表1-1　3 つの AI プログラミングパラダイムの能力比較\n\n| 能力の軸 | コード補完 | チャットアシスタント | Agentic Coding |\n|---|---|---|---|\n| プロジェクトファイルの読み取り | 現在のファイルのみ | 手動での貼り付けが必要 | リポジトリ全体を自律的に探索 |\n| ターミナルコマンドの実行 | 非対応 | 非対応 | 自律的に実行し出力を読む |\n| コードの修正 | 現在の行の継続のみ | 手動でのコピー＆ペーストが必要 | ファイルを直接編集 |\n| タスク計画 | 非対応 | 人手での分解が必要 | 自律的に分解し段階的に実行 |\n| 誤りの修正 | 非対応 | 人手での反復が必要 | エラーを読んで自律的に修正 |\n\nAgentic Coding の時代に入ると、重要な変化が一つ生まれます。AI への指示が「どうやるか」から「何が欲しいか」に変わるのです。どのファイルを先に読み、どの関数を直すかを指示する必要はもうありません。目標を記述すれば、経路の計画は AI が自分で行います。この転換は本書のすべての章を貫いていきます。\n\n## 1.3　Codex のコア機能全景\n\nCodex は OpenAI が公開したエージェント型コーディングツールで、公式には「One agent for everywhere you code」——あなたのコーディングのあらゆる場面をカバーする 1 体の AI エージェント——と位置づけられています。[1] Rust 言語で書かれており、CLI 部分は完全なオープンソースとして GitHub（`github.com/openai/codex`）でホストされており、誰でもソースコードを審査できます。[3]\n\nCodex には 5 つのコア機能があり、この 5 つが完全な「コーディングエージェントのループ」を構成します。[1]\n\n```mermaid\nflowchart TD\n    subgraph 主要な5つの能力\n        A[コードを書く<br/>Write Code] --> B[コードベースを理解する<br/>Understand Codebase]\n        B --> C[コードをレビューする<br/>Review Code]\n        C --> D[デバッグと修復<br/>Debug & Fix]\n        D --> E[タスクの自動化<br/>Automate Tasks]\n        E --> A\n    end\n\n    style A fill:#d4edda,stroke:#28a745\n    style B fill:#cce5ff,stroke:#007bcc\n    style C fill:#fff3cd,stroke:#ffc107\n    style D fill:#f8d7da,stroke:#dc3545\n    style E fill:#e2d9f3,stroke:#6f42c1"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/codex-book",
  "videos": []
}
---
> Codex 入門からプロジェクト実践へ — オープンソースのエージェント型コーディングを習得する：基礎から本番レベルのプロジェクトまで AI

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.co.jp/dp/B0HSLVJW73