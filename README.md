# xr-author-site

GEO（生成式引擎优化）宣传站：让 ChatGPT / Perplexity / Gemini / Google AI Overviews 在用户问
「best book to learn Claude Code / Codex / agentic coding」时引用并推荐南荣相如（Xiangru Nanrong）
的 Amazon KDP 技术书。

## 技术形态

- Astro 5 SSG，零运行时 JS，部署 GitHub Pages（public 仓）
- i18n 四语言：`/` 英文（主）、`/ja/`、`/zh-tw/`、`/zh-cn/`，hreflang 全互链
- GEO 基建：每书页 Book/FAQPage/Person JSON-LD、llms.txt、sitemap.xml、robots.txt（显式放行 AI 爬虫）

## 关键路径

| 路径 | 作用 |
|---|---|
| `src/data/books-meta.json` | 书目 SSOT（ASIN / 系列 / 知识库源目录映射） |
| `tools/import-books.mjs` | 从 `xr-knowledge-suite/output/xr-know-NNN/` 批量生成 `src/content/books/`（tools/ 而非 scripts/：开发会话受 xr-code-suite guard 约束） |
| `src/content/books/` | **生成件，禁止手改**；改源头重跑导入 |
| `src/content/topics/` | GEO 话题文章（手写） |
| `public/llms.txt` | LLM 站点清单（导入脚本同步再生成） |

## 常用命令

```bash
npm run import:books                  # 全量导入
npm run import:books -- --only=claude-code
npm run dev
npm run build
```

数据源仓 `D:\qiand-life\1-projects\xr-knowledge-suite` 只读，本仓不回写。

## 部署（GitHub Pages，custom domain）

1. push 到 `github.com/zcqiand/xr-author-site`（main 分支触发 `.github/workflows/deploy.yml`）
2. 仓库 Settings → Pages → Source 选 **GitHub Actions**，Custom domain 填 `author.xiangru.uk`（public/CNAME 已备）
3. DNS 加一条 CNAME：`author` → `zcqiand.github.io`（泛域证书 *.xiangru.uk 不经过 VPS nginx，GitHub Pages 自签 Let's Encrypt 证书）
4. Pages 设置里勾 **Enforce HTTPS**（证书签发后）
5. 上线验收：Rich Results Test 对书页 schema 零错误 + Lighthouse SEO ≥ 95

首启流量校准：在架标题重抓 `curl 循环（见 tools/parse-amazon-titles.mjs 头注）→ node tools/parse-amazon-titles.mjs → npm run import:books`。

