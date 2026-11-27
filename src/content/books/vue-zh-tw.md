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
  "description": "這本書的起點是一組真實場景裡反覆出現的提問。 過去幾年裡，我在團隊裡帶過不少剛入行的前端、轉過崗的全棧預備役，也接手過幾個被前任留下的 Vue 2 老項目。最常聽到的吐槽是：「網上的 Vue 教程越看越亂。」一開始我以為只是學習路徑問題，後來才發現是結構性的——他們看到的教程要麼停在 Vue 2 + Options API 的舊範式（Vue 2 早在 2023 年 12 月 31 日就官方停止維護了），要麼是 Vue 3 早期的「視頻教學版」式 API 羅列，沒人系統講 ref 還是 reactive、Pinia 還是組件狀態、Options 還是 Composition、CSR 還是 SSR/Nuxt——什麼時候用、為什麼。 這本書就是為了把這些「為什麼」一次講清楚而寫的。",
  "faq": [],
  "toc": [],
  "sample": [
    {
      "heading": "1.3 聲明式與命令式：兩種思維方式",
      "lang": "text",
      "code": "\n現在用 Vue 聲明式方式重寫同一個計數器。這段代碼裡會出現幾個你還沒系統學過的寫法，先混個眼熟：`<script setup lang=\"ts\">` 是 Vue 3 的單文件組件寫法，腳本里聲明的變量會自動暴露給模板使用；`ref<number>(0)` 聲明一個數字類型的響應式狀態；模板裡的 `{{ count }}` 是插值表達式，會自動解包 ref、顯示其值（模板裡不需要寫 `.value`）。關注核心差異：你只聲明瞭 `count` 和渲染規則，點擊後調用 `count++`，Vue 自動更新界面，沒有任何一行「手動找節點、手動寫回」的代碼。\n\n```vue {title=\"代碼清單1-2: 用Vue單文件組件實現計數器——聲明式寫法\"}\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\n// ref<number>(0)：聲明一個數字類型的響應式狀態，初始值為 0\nconst count = ref<number>(0);\n</script>\n\n<template>\n  <div class=\"counter-container\">\n    <!-- 模板裡 ref 自動解包，直接寫 count 即顯示其值 -->\n    <div class=\"count-display\">{{ count }}</div>\n    <div>\n      <button @click=\"count--\">-1</button>\n      <!-- count++ 觸發響應式更新，Vue 自動重渲染受影響的節點 -->\n      <button @click=\"count++\">+1</button>\n    </div>\n  </div>\n</template>\n\n<style scoped>\n  .counter-container {\n    text-align: center;\n  }\n  .count-display {\n    font-size: 3rem;\n    margin: 1rem 0;\n  }\n  button {\n    font-size: 1.2rem;\n    padding: 0.5rem 1.5rem;\n    margin: 0 0.5rem;\n    cursor: pointer;\n  }\n</style>"
    },
    {
      "heading": "1.3 聲明式與命令式：兩種思維方式",
      "lang": "text",
      "code": "\n你現在不需要手動創建項目來運行這段代碼，第 3 章會手把手教你用官方腳手架 create-vue 搭建開發環境。如果你已有 Node.js 環境，可執行 `npm create vue@latest my-vue-app` 快速生成項目，把上面代碼保存為 `Counter.vue`。這裡你只需關注寫法。\n\n對比代碼清單 1-1 和 1-2：原生版本里你在告訴瀏覽器「找到節點、讀取值、計算、寫回節點」；Vue 版本里你只聲明瞭「count 是多少，界面就顯示多少」。點擊按鈕改變 `count` 後 Vue 自動更新界面，你不需要關心任何 DOM 更新的細節。\n\n## 1.4 響應式系統：Vue 怎麼知道該更新哪裡\n\n聲明式渲染解決了「你不用手動操作 DOM」的問題，但它留下下一個關鍵問題：當 `count` 變了，Vue 怎麼知道頁面哪一處用到了 `count`、又該只更新那一處？這正是 Vue 的核心機制，也就是響應式（Reactivity）要解決的問題，也是 Vue 與其它主流框架在實現路線上最關鍵的差異點。\n\nVue 走的是細粒度響應式路線。當你用 `ref` 或 `reactive` 把一段數據標記為響應式時，Vue 會基於代理（Proxy）機制給這份數據包一層「攔截」，之後任何對它的讀寫都能被 Vue 感知。渲染界面時，Vue 會順手記下依賴關係：「這個位置用到了 `count`」「那個計算屬性依賴了購物車總價」。一旦 `count` 變化，Vue 不重新渲染整個應用，而是精準觸發依賴 `count` 的組件重新渲染，再由虛擬 DOM 只更新該組件內真正變化的那幾個 DOM 節點。\n\n可以用「訂報紙」來類比這套機制。你訂閱了某份報紙，報社有新一期就精準投遞給你，而不是每天把全城所有報紙重新印一遍挨家挨戶送。「訂閱」就是 Vue 在渲染時記錄的依賴關係，「精準投遞」就是狀態變化時只通知相關視圖更新。這個類比的邊界在於：報紙是單向投遞，而 Vue 的依賴關係是動態的，界面渲染方式變了，依賴關係也會隨之重建。\n\n需要澄清一個常見誤解：Vue 內部確實也用了虛擬 DOM，它在內存中維護一份 UI 樹的輕量 JavaScript 對象表示，數據變化時 Vue 先生成新的虛擬 DOM 樹，經對比算法找出新舊差異，再只對真實 DOM 執行最小必要的更新。但在 Vue 的設計裡，響應式才是第一性的更新驅動機制，虛擬 DOM 主要承擔組件級的渲染優化，配合響應式工作。響應式追蹤已經提前把「誰依賴誰」摸清楚，Vue 不需要靠「重新協調整棵組件樹」來發現該更新哪裡。\n\n換句話說，Vue 的響應式追蹤精準的是「哪個組件依賴了這個數據」，而組件內部具體改哪些 DOM 節點，則交給虛擬 DOM 的對比算法去算。這套機制會在後續章節反覆出現：第 6、7 章講組件通信與表單時會回到「狀態一變、組件重渲染、虛擬 DOM 補差異」這條主線，第 10 到 13 章再深入 `ref`、`reactive` 的用法和「解包陷阱」（為什麼模板裡不用寫 `.value`、為什麼 `reactive` 解構會丟響應式）。\n\n## 1.5 單向數據流：可追蹤的數據路徑\n\n當應用從一個組件長到幾十個組件互相嵌套，狀態和數據在組件之間是怎麼流動的？Vue 的答案是單向數據流：父組件通過 Props 把數據向下傳給子組件，子組件不能直接改父級傳下來的數據，需要修改時就通過事件（emit）向上通知父組件。\n\n用電商購物車的場景走一遍。購物車頁面（CartPage）作為父組件，裡面嵌著商品列表（CartItemList）、總價顯示（CartSummary）、結算按鈕（CheckoutButton）。購物車的狀態（每件商品的數量、選中狀態）保存在 CartPage 裡，通過 Props 向下傳給子組件展示，數據流向是從 CartPage 向下流到各子組件。\n\n當用戶在 CartItemList 裡點某件商品的「+」加數量時，CartItemList 不能直接改這個數量，因為它是父組件傳下來的，對子組件只讀。CartPage 會預先傳給 CartItemList 一個事件處理函數，用戶點「+」時子組件「觸發事件」（emit）通知父組件「第 N 件商品要加一件」。CartPage 收到通知後修改自己的狀態，響應式系統自動觸發重新渲染，CartSummary 裡的總價隨之更新。\n\n為什麼 Vue 堅持單向？因為單向數據流讓每次狀態變更都有明確的來源。你想追蹤「總價為什麼變成了 299」，只需看 CartPage 的狀態變更邏輯，只有這裡能改狀態。如果子組件能隨便改父級數據，追蹤起來就像在沒有監控的倉庫裡找一件被搬過位置的貨：每個人都能搬，你查不出是誰在什麼時候搬的。當應用從三個組件長到三十個、從一個人開發變成三個人協作時，這條可預測的路徑能省下大量調試時間。\n\n這裡有個歷史包袱值得提一句。Vue 2 時代，`v-model` 這類雙向綁定寫法被大量濫用，很多開發者把「雙向綁定」當成了 Vue 的主旋律，導致數據流向混亂、改一處狀態觸發意想不到的連鎖更新。Vue 3 依然保留 `v-model`（本質是「單向數據加事件」的語法糖），但更強調單向數據流是原則、雙向綁定是特定場景下的便利封裝。\n\n下面這段最簡的 Vue + TypeScript 單文件組件，能鞏固你對「響應式狀態變化驅動界面更新」的直覺。聲明一個字符串類型的響應式狀態 `greeting`，模板用它渲染問候語；點擊按鈕切換 `greeting` 的值，界面隨之自動變化。保存為 `HelloWorld.vue`，可直接放進 create-vue 創建的項目運行。\n\n```vue {title=\"代碼清單1-3: 最簡 Vue + TypeScript 單文件組件——HelloWorld\"}\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\n\n// ref<string>('...')：聲明一個字符串類型的響應式狀態\nconst greeting = ref<string>('你好，Vue！');\n</script>\n\n<template>\n  <div class=\"hello-container\">\n    <h1>{{ greeting }}</h1>\n    <!-- 點擊切換 greeting 的值，界面自動更新 -->\n    <button @click=\"greeting = '你已經踏出了 Vue 的第一步！'\">\n      點擊我\n    </button>\n  </div>\n</template>\n\n<style scoped>\n  .hello-container {\n    text-align: center;\n    margin-top: 20vh;\n  }\n  button {\n    font-size: 1.2rem;\n    padding: 0.5rem 1.5rem;\n    cursor: pointer;\n  }\n</style>"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/vue-book",
  "videos": []
}
---
> Vue從入門到專案實踐 — Vue 3.5 × TypeScript 全程 —— 零基礎走完從文法到兩個企業級實戰

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H5XHQFK2