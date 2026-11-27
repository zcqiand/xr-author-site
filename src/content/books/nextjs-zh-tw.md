---
{
  "slug": "nextjs",
  "lang": "zh-tw",
  "title": "Next.js 從入門到專案實戰",
  "subtitle": "全棧 Web 開發指南 | 基於 Next.js 15.x 與 React 19.x",
  "series": "frontend",
  "asin": "B0H32SXR49",
  "market": "com",
  "format": "kindle",
  "onSale": true,
  "cover": "/covers/nextjs-zh-tw.jpg",
  "description": "在過去的幾年裡，Web 開發領域發生了巨大的變化。前端框架從最初的 jQuery 時代，經歷了 Angular、Vue、React 的崛起，如今 React 已成為構建現代 Web 應用的主流選擇。 然而，React 本身只是一個 UI 庫。將其轉化為生產級應用，需要處理大量額外的工作：服務端渲染、路由管理、代碼分割、圖片優化、構建工具配置……這些工作不僅耗時，而且需要開發者具備全棧知識。 Next.js 正是來解決這個問題的。 Next.js 是基於 React 的全棧 Web 開發框架，它將生產環境所需的各種能力全部打包開箱即用。當你使用 create-next-app 創建一個新項目時，服務端渲染、文件系統路由、代碼分割、圖片優化——全部都已經配置好了。 本書將幫助你係統掌握 Next.",
  "faq": [],
  "toc": [
    {
      "part": "附錄 D：參考資源",
      "items": [
        "基礎入門篇：第1-10章",
        "路由與渲染進階篇：第11-20章",
        "數據、表單與全棧實戰篇：第21-30章",
        "案例實戰與測試收官篇：第31-42章",
        "具備 JavaScript/TypeScript 基礎的前端開發者",
        "希望系統學習 Next.js 的全棧開發者",
        "需要將現有項目遷移到 Next.js 15 的團隊",
        "追求高性能、可維護 Web 應用的架構師"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2.2 Next.js 的解決思路",
      "lang": "mermaid",
      "code": "flowchart TD\n    A[用戶訪問 /tasks/42] --> B{Next.js Router}\n    B --> C{靜態資源?}\n    C -->|是| D[直接返回靜態文件]\n    C -->|否| E{頁面類型判斷}\n    E -->|SSG| F[返回預渲染 HTML]\n    E -->|ISR| G[檢查緩存是否過期]\n    E -->|SSR| H[Server Component 渲染]\n    G -->|未過期| I[返回緩存 HTML]\n    G -->|已過期| J[後臺重新渲染後更新緩存]\n    H --> K[返回完整 HTML]\n    J --> I"
    },
    {
      "heading": "1.2.2 Next.js 的解決思路",
      "lang": "text",
      "code": "\n圖1-1　Next.js 請求處理流程\n\n\n當用戶訪問一個 Next.js 頁面時，請求首先到達 Next.js Router，然後根據頁面的渲染方式（靜態生成、ISR 或 SSR）來決定如何響應。整個過程對開發者是透明的，你只需要專注於編寫頁面組件。\n\n### 1.2.3 舉個例子：創建一個任務看板首頁\n\n用純 React 創建一個任務看板首頁，你需要：\n\n1. 自己搭建一個 Node.js 服務，配置 Express 或其他框架\n\n2. 在服務端使用 `react-dom/server` 渲染 React 組件\n\n3. 配置 Webpack 實現代碼分割和熱重載\n\n4. 引入 `react-router-dom` 配置路由\n\n5. 寫圖片懶加載邏輯\n\n用 Next.js，你只需要：\n\n```bash {title=\"代碼清單1-1: 創建 Next.js 項目\"}\nnpx create-next-app@latest taskflow-board --typescript --tailwind\ncd taskflow-board\nnpm run dev\n"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/nextjs-book",
  "caseRepos": [],
  "videos": []
}
---
> Next.js 從入門到專案實戰 — 全棧 Web 開發指南 | 基於 Next.js 15.x 與 React 19.x

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H32SXR49