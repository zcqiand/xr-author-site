---
{
  "slug": "nextjs",
  "lang": "zh-cn",
  "title": "Next.js 從入門到專案實戰",
  "subtitle": "全棧 Web 開發指南 | 基於 Next.js 15.x 與 React 19.x",
  "series": "frontend",
  "asin": "B0H32SXR49",
  "market": "com",
  "onSale": false,
  "cover": "/covers/nextjs-zh-cn.jpg",
  "description": "在过去的几年里，Web 开发领域发生了巨大的变化。前端框架从最初的 jQuery 时代，经历了 Angular、Vue、React 的崛起，如今 React 已成为构建现代 Web 应用的主流选择。 然而，React 本身只是一个 UI 库。将其转化为生产级应用，需要处理大量额外的工作：服务端渲染、路由管理、代码分割、图片优化、构建工具配置……这些工作不仅耗时，而且需要开发者具备全栈知识。 Next.js 正是来解决这个问题的。 Next.js 是基于 React 的全栈 Web 开发框架，它将生产环境所需的各种能力全部打包开箱即用。当你使用 create-next-app 创建一个新项目时，服务端渲染、文件系统路由、代码分割、图片优化——全部都已经配置好了。 本书将帮助你系统掌握 Next.",
  "faq": [],
  "toc": [
    {
      "part": "附录 D：参考资源",
      "items": [
        "基础入门篇：第1-10章",
        "路由与渲染进阶篇：第11-20章",
        "数据、表单与全栈实战篇：第21-30章",
        "案例实战与测试收官篇：第31-42章",
        "具备 JavaScript/TypeScript 基础的前端开发者",
        "希望系统学习 Next.js 的全栈开发者",
        "需要将现有项目迁移到 Next.js 15 的团队",
        "追求高性能、可维护 Web 应用的架构师"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2.2 Next.js 的解决思路",
      "lang": "mermaid",
      "code": "flowchart TD\n    A[用户访问 /tasks/42] --> B{Next.js Router}\n    B --> C{静态资源?}\n    C -->|是| D[直接返回静态文件]\n    C -->|否| E{页面类型判断}\n    E -->|SSG| F[返回预渲染 HTML]\n    E -->|ISR| G[检查缓存是否过期]\n    E -->|SSR| H[Server Component 渲染]\n    G -->|未过期| I[返回缓存 HTML]\n    G -->|已过期| J[后台重新渲染后更新缓存]\n    H --> K[返回完整 HTML]\n    J --> I"
    },
    {
      "heading": "1.2.2 Next.js 的解决思路",
      "lang": "text",
      "code": "\n图1-1　Next.js 请求处理流程\n\n\n当用户访问一个 Next.js 页面时，请求首先到达 Next.js Router，然后根据页面的渲染方式（静态生成、ISR 或 SSR）来决定如何响应。整个过程对开发者是透明的，你只需要专注于编写页面组件。\n\n### 1.2.3 举个例子：创建一个任务看板首页\n\n用纯 React 创建一个任务看板首页，你需要：\n\n1. 自己搭建一个 Node.js 服务，配置 Express 或其他框架\n\n2. 在服务端使用 `react-dom/server` 渲染 React 组件\n\n3. 配置 Webpack 实现代码分割和热重载\n\n4. 引入 `react-router-dom` 配置路由\n\n5. 写图片懒加载逻辑\n\n用 Next.js，你只需要：\n\n```bash {title=\"代码清单1-1: 创建 Next.js 项目\"}\nnpx create-next-app@latest taskflow-board --typescript --tailwind\ncd taskflow-board\nnpm run dev\n"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/nextjs-book",
  "videos": [],
  "mirrorOf": "zh-tw"
}
---
> Next.js 從入門到專案實戰 — 全棧 Web 開發指南 | 基於 Next.js 15.x 與 React 19.x

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H32SXR49