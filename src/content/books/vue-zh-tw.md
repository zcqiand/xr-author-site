---
{
  "slug": "vue",
  "lang": "zh-tw",
  "title": "Vue從入門到專案實踐",
  "subtitle": "Vue 3.5 × TypeScript 全程 —— 零基礎走完從文法到兩個企業級實戰",
  "series": "frontend",
  "asin": "B0H5XHQFK2",
  "market": "com",
  "onSale": true,
  "cover": "/covers/vue-zh-tw.jpg",
  "description": "这本书的起点是一组真实场景里反复出现的提问。 过去几年里，我在团队里带过不少刚入行的前端、转过岗的全栈预备役，也接手过几个被前任留下的 Vue 2 老项目。最常听到的吐槽是：「网上的 Vue 教程越看越乱。」一开始我以为只是学习路径问题，后来才发现是结构性的——他们看到的教程要么停在 Vue 2 + Options API 的旧范式（Vue 2 早在 2023 年 12 月 31 日就官方停止维护了），要么是 Vue 3 早期的「视频教学版」式 API 罗列，没人系统讲 ref 还是 reactive、Pinia 还是组件状态、Options 还是 Composition、CSR 还是 SSR/Nuxt——什么时候用、为什么。 这本书就是为了把这些「为什么」一次讲清楚而写的。",
  "faq": [],
  "toc": [],
  "sample": [
    {
      "heading": "1.3 声明式与命令式：两种思维方式",
      "lang": "text",
      "code": "\n现在用 Vue 声明式方式重写同一个计数器。这段代码里会出现几个你还没系统学过的写法，先混个眼熟：`<script setup lang=\"ts\">` 是 Vue 3 的单文件组件写法，脚本里声明的变量会自动暴露给模板使用；`ref<number>(0)` 声明一个数字类型的响应式状态；模板里的 `{{ count }}` 是插值表达式，会自动解包 ref、显示其值（模板里不需要写 `.value`）。关注核心差异：你只声明了 `count` 和渲染规则，点击后调用 `count++`，Vue 自动更新界面，没有任何一行「手动找节点、手动写回」的代码。\n\n```vue {title=\"代码清单1-2: 用Vue单文件组件实现计数器——声明式写法\"}\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\n// ref<number>(0)：声明一个数字类型的响应式状态，初始值为 0\nconst count = ref<number>(0);\n</script>\n\n<template>\n  <div class=\"counter-container\">\n    <!-- 模板里 ref 自动解包，直接写 count 即显示其值 -->\n    <div class=\"count-display\">{{ count }}</div>\n    <div>\n      <button @click=\"count--\">-1</button>\n      <!-- count++ 触发响应式更新，Vue 自动重渲染受影响的节点 -->\n      <button @click=\"count++\">+1</button>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .counter-container {\n    text-align: center;\n  }\n  .count-display {\n    font-size: 3rem;\n    margin: 1rem 0;\n  }\n  button {\n    font-size: 1.2rem;\n    padding: 0.5rem 1.5rem;\n    margin: 0 0.5rem;\n    cursor: pointer;\n  }\n</style>"
    },
    {
      "heading": "1.3 声明式与命令式：两种思维方式",
      "lang": "text",
      "code": "\n你现在不需要手动创建项目来运行这段代码，第 3 章会手把手教你用官方脚手架 create-vue 搭建开发环境。如果你已有 Node.js 环境，可执行 `npm create vue@latest my-vue-app` 快速生成项目，把上面代码保存为 `Counter.vue`。这里你只需关注写法。\n\n对比代码清单 1-1 和 1-2：原生版本里你在告诉浏览器「找到节点、读取值、计算、写回节点」；Vue 版本里你只声明了「count 是多少，界面就显示多少」。点击按钮改变 `count` 后 Vue 自动更新界面，你不需要关心任何 DOM 更新的细节。\n\n## 1.4 响应式系统：Vue 怎么知道该更新哪里\n\n声明式渲染解决了「你不用手动操作 DOM」的问题，但它留下下一个关键问题：当 `count` 变了，Vue 怎么知道页面哪一处用到了 `count`、又该只更新那一处？这正是 Vue 的核心机制，也就是响应式（Reactivity）要解决的问题，也是 Vue 与其它主流框架在实现路线上最关键的差异点。\n\nVue 走的是细粒度响应式路线。当你用 `ref` 或 `reactive` 把一段数据标记为响应式时，Vue 会基于代理（Proxy）机制给这份数据包一层「拦截」，之后任何对它的读写都能被 Vue 感知。渲染界面时，Vue 会顺手记下依赖关系：「这个位置用到了 `count`」「那个计算属性依赖了购物车总价」。一旦 `count` 变化，Vue 不重新渲染整个应用，而是精准触发依赖 `count` 的组件重新渲染，再由虚拟 DOM 只更新该组件内真正变化的那几个 DOM 节点。\n\n可以用「订报纸」来类比这套机制。你订阅了某份报纸，报社有新一期就精准投递给你，而不是每天把全城所有报纸重新印一遍挨家挨户送。「订阅」就是 Vue 在渲染时记录的依赖关系，「精准投递」就是状态变化时只通知相关视图更新。这个类比的边界在于：报纸是单向投递，而 Vue 的依赖关系是动态的，界面渲染方式变了，依赖关系也会随之重建。\n\n需要澄清一个常见误解：Vue 内部确实也用了虚拟 DOM，它在内存中维护一份 UI 树的轻量 JavaScript 对象表示，数据变化时 Vue 先生成新的虚拟 DOM 树，经对比算法找出新旧差异，再只对真实 DOM 执行最小必要的更新。但在 Vue 的设计里，响应式才是第一性的更新驱动机制，虚拟 DOM 主要承担组件级的渲染优化，配合响应式工作。响应式追踪已经提前把「谁依赖谁」摸清楚，Vue 不需要靠「重新协调整棵组件树」来发现该更新哪里。\n\n换句话说，Vue 的响应式追踪精准的是「哪个组件依赖了这个数据」，而组件内部具体改哪些 DOM 节点，则交给虚拟 DOM 的对比算法去算。这套机制会在后续章节反复出现：第 6、7 章讲组件通信与表单时会回到「状态一变、组件重渲染、虚拟 DOM 补差异」这条主线，第 10 到 13 章再深入 `ref`、`reactive` 的用法和「解包陷阱」（为什么模板里不用写 `.value`、为什么 `reactive` 解构会丢响应式）。\n\n## 1.5 单向数据流：可追踪的数据路径\n\n当应用从一个组件长到几十个组件互相嵌套，状态和数据在组件之间是怎么流动的？Vue 的答案是单向数据流：父组件通过 Props 把数据向下传给子组件，子组件不能直接改父级传下来的数据，需要修改时就通过事件（emit）向上通知父组件。\n\n用电商购物车的场景走一遍。购物车页面（CartPage）作为父组件，里面嵌着商品列表（CartItemList）、总价显示（CartSummary）、结算按钮（CheckoutButton）。购物车的状态（每件商品的数量、选中状态）保存在 CartPage 里，通过 Props 向下传给子组件展示，数据流向是从 CartPage 向下流到各子组件。\n\n当用户在 CartItemList 里点某件商品的「+」加数量时，CartItemList 不能直接改这个数量，因为它是父组件传下来的，对子组件只读。CartPage 会预先传给 CartItemList 一个事件处理函数，用户点「+」时子组件「触发事件」（emit）通知父组件「第 N 件商品要加一件」。CartPage 收到通知后修改自己的状态，响应式系统自动触发重新渲染，CartSummary 里的总价随之更新。\n\n为什么 Vue 坚持单向？因为单向数据流让每次状态变更都有明确的来源。你想追踪「总价为什么变成了 299」，只需看 CartPage 的状态变更逻辑，只有这里能改状态。如果子组件能随便改父级数据，追踪起来就像在没有监控的仓库里找一件被搬过位置的货：每个人都能搬，你查不出是谁在什么时候搬的。当应用从三个组件长到三十个、从一个人开发变成三个人协作时，这条可预测的路径能省下大量调试时间。\n\n这里有个历史包袱值得提一句。Vue 2 时代，`v-model` 这类双向绑定写法被大量滥用，很多开发者把「双向绑定」当成了 Vue 的主旋律，导致数据流向混乱、改一处状态触发意想不到的连锁更新。Vue 3 依然保留 `v-model`（本质是「单向数据加事件」的语法糖），但更强调单向数据流是原则、双向绑定是特定场景下的便利封装。\n\n下面这段最简的 Vue + TypeScript 单文件组件，能巩固你对「响应式状态变化驱动界面更新」的直觉。声明一个字符串类型的响应式状态 `greeting`，模板用它渲染问候语；点击按钮切换 `greeting` 的值，界面随之自动变化。保存为 `HelloWorld.vue`，可直接放进 create-vue 创建的项目运行。\n\n```vue {title=\"代码清单1-3: 最简 Vue + TypeScript 单文件组件——HelloWorld\"}\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\n// ref<string>('...')：声明一个字符串类型的响应式状态\nconst greeting = ref<string>('你好，Vue！');\n</script>\n\n<template>\n  <div class=\"hello-container\">\n    <h1>{{ greeting }}</h1>\n    <!-- 点击切换 greeting 的值，界面自动更新 -->\n    <button @click=\"greeting = '你已经踏出了 Vue 的第一步！'\">\n      点击我\n    </button>\n  </div>\n</template>\n\n<style scoped>\n  .hello-container {\n    text-align: center;\n    margin-top: 20vh;\n  }\n  button {\n    font-size: 1.2rem;\n    padding: 0.5rem 1.5rem;\n    cursor: pointer;\n  }\n</style>"
    }
  ],
  "caseRepo": "",
  "videos": []
}
---
> Vue從入門到專案實踐 — Vue 3.5 × TypeScript 全程 —— 零基礎走完從文法到兩個企業級實戰

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H5XHQFK2