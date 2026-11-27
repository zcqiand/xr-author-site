---
{
  "slug": "ruby",
  "lang": "zh-tw",
  "title": "Ruby從入門到專案實踐",
  "subtitle": "兩個真實專案，從零基礎到生產級 Rails 工程",
  "series": "backend",
  "asin": "B0H6BYXJXB",
  "market": "com",
  "onSale": true,
  "cover": "/covers/ruby-zh-tw.jpg",
  "description": "--- 我第一次接触 Ruby，是在2018年做一个小型 Web 爬虫项目。当时用 Python 写了三百多行代码，总觉得哪里不对劲——重复的循环、分散的函数、绕来绕去的判断。后来换成 Ruby，只用了不到一百行，代码清晰得像在读英语句子。 「原来编程可以这么优雅。」 这是我对 Ruby 的第一印象，也是我想写这本书的原因。 Ruby 是一种让程序员快乐的语言。它的语法简洁到极致，「一切皆对象」的设计理念贯穿始终。Ruby on Rails 更是 Web 开发的利器，GitHub、Shopify、Airbnb 这些知名产品背后都有 Rails 的身影。 但在国内，Ruby 一直被「小众语言」的标签困扰。中文 Ruby 书籍要么是翻译自日文或英文的语法手册，要么是内容浅显的入门小册子。",
  "faq": [],
  "toc": [],
  "sample": [
    {
      "heading": "或在容器中运行一个 .rb 文件",
      "lang": "text",
      "code": "\nDocker 方式无需污染本地系统，特别适合多版本切换或临时实验场景。但日常开发还是推荐本地安装，速度更快、与编辑器集成更好。\n\n### 版本切换工具：rbenv 与 asdf\n\n随着 Ruby 项目增多，你可能会遇到不同项目要求不同 Ruby 版本的情况。rbenv 是 macOS/Linux 上最流行的 Ruby 版本管理工具，可以在同一台机器上安装多个 Ruby 版本，并按目录自动切换：\n\n```bash {title=\"代码清单1-2: 用 rbenv 安装并切换多版本\"}\n# macOS\nbrew install rbenv ruby-build\nrbenv install 3.3.4\nrbenv install 3.2.6\nrbenv global 3.3.4    # 全局默认版本\ncd ~/project-a && rbenv local 3.2.6   # 该目录使用 3.2.6"
    },
    {
      "heading": "macOS",
      "lang": "text",
      "code": "\nasdf 是更通用的版本管理器，同时支持 Ruby、Node.js、Python 等多种语言。Windows 用户可以用 RubyInstaller 配合 uru 工具实现类似效果。\n\n## 1.6 验证安装：你的第一个命令\n\n安装完成后，验证环境是否正常工作是至关重要的一步。很多初学者跳过这一步，直接开始写代码，结果遇到问题后难以定位原因。\n\n打开你的终端，输入以下命令并回车：\n\n```bash {title=\"代码清单1-3: 查看 Ruby 版本验证安装\"}\nruby -v"
    }
  ],
  "caseRepo": "https://github.com/zcqiand/ruby-book",
  "videos": []
}
---
> Ruby從入門到專案實踐 — 兩個真實專案，從零基礎到生產級 Rails 工程

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0H6BYXJXB