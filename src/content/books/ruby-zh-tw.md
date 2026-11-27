---
{
  "slug": "ruby",
  "lang": "zh-tw",
  "title": "Ruby從入門到專案實踐",
  "subtitle": "兩個真實專案，從零基礎到生產級 Rails 工程",
  "series": "backend",
  "asin": "B0H6BYXJXB",
  "market": "com",
  "format": "kindle",
  "onSale": true,
  "cover": "/covers/ruby-zh-tw.jpg",
  "description": "--- 我第一次接觸 Ruby，是在2018年做一個小型 Web 爬蟲項目。當時用 Python 寫了三百多行代碼，總覺得哪裡不對勁——重複的循環、分散的函數、繞來繞去的判斷。後來換成 Ruby，只用了不到一百行，代碼清晰得像在讀英語句子。 「原來編程可以這麼優雅。」 這是我對 Ruby 的第一印象，也是我想寫這本書的原因。 Ruby 是一種讓程序員快樂的語言。它的語法簡潔到極致，「一切皆對象」的設計理念貫穿始終。Ruby on Rails 更是 Web 開發的利器，GitHub、Shopify、Airbnb 這些知名產品背後都有 Rails 的身影。 但在國內，Ruby 一直被「小眾語言」的標籤困擾。中文 Ruby 書籍要麼是翻譯自日文或英文的語法手冊，要麼是內容淺顯的入門小冊子。",
  "faq": [],
  "toc": [],
  "sample": [
    {
      "heading": "或在容器中運行一個 .rb 文件",
      "lang": "text",
      "code": "\nDocker 方式無需汙染本地系統，特別適合多版本切換或臨時實驗場景。但日常開發還是推薦本地安裝，速度更快、與編輯器集成更好。\n\n### 版本切換工具：rbenv 與 asdf\n\n隨著 Ruby 項目增多，你可能會遇到不同項目要求不同 Ruby 版本的情況。rbenv 是 macOS/Linux 上最流行的 Ruby 版本管理工具，可以在同一臺機器上安裝多個 Ruby 版本，並按目錄自動切換：\n\n```bash {title=\"代碼清單1-2: 用 rbenv 安裝並切換多版本\"}\n# macOS\nbrew install rbenv ruby-build\nrbenv install 3.3.4\nrbenv install 3.2.6\nrbenv global 3.3.4    # 全局默認版本\ncd ~/project-a && rbenv local 3.2.6   # 該目錄使用 3.2.6"
    },
    {
      "heading": "macOS",
      "lang": "text",
      "code": "\nasdf 是更通用的版本管理器，同時支持 Ruby、Node.js、Python 等多種語言。Windows 用戶可以用 RubyInstaller 配合 uru 工具實現類似效果。\n\n## 1.6 驗證安裝：你的第一個命令\n\n安裝完成後，驗證環境是否正常工作是至關重要的一步。很多初學者跳過這一步，直接開始寫代碼，結果遇到問題後難以定位原因。\n\n打開你的終端，輸入以下命令並回車：\n\n```bash {title=\"代碼清單1-3: 查看 Ruby 版本驗證安裝\"}\nruby -v"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/ruby-book",
  "caseRepos": [],
  "videos": []
}
---
> Ruby從入門到專案實踐 — 兩個真實專案，從零基礎到生產級 Rails 工程

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H6BYXJXB