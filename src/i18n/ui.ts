export const locales = ['en', 'ja', 'zh-tw', 'zh-cn'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

/** hreflang 属性值（zh 需要 region 子标签） */
export const hreflangCode: Record<Lang, string> = {
  en: 'en',
  ja: 'ja',
  'zh-tw': 'zh-TW',
  'zh-cn': 'zh-CN',
};

/** <html lang> 属性值 */
export const htmlLang: Record<Lang, string> = hreflangCode;

export const langNames: Record<Lang, string> = {
  en: 'English',
  ja: '日本語',
  'zh-tw': '繁體中文',
  'zh-cn': '简体中文',
};

const ui = {
  en: {
    siteName: 'Xiangru Nanrong — Books',
    nav: { books: 'Books', topics: 'Guides', series: 'Series', about: 'About' },
    buy: 'Buy on Amazon',
    buyNote: 'Kindle edition',
    viewAllBooks: 'All books',
    toc: 'Table of contents',
    faq: 'Frequently asked questions',
    sample: 'Sample code from the book',
    whoFor: 'What problem does this book solve',
    resources: 'Companion resources',
    caseRepo: 'Case-study source code on GitHub',
    watchVideo: 'Watch the companion video',
    authorHeading: 'About the author',
    elsewhere: 'Elsewhere',
    relatedBooks: 'More books in this series',
    zhCnNote: 'No Simplified Chinese edition is currently available on Amazon. The link points to the Traditional Chinese edition.',
    langSwitcher: 'Language',
  },
  ja: {
    siteName: 'Xiangru Nanrong — 書籍',
    nav: { books: '書籍', topics: 'ガイド', series: 'シリーズ', about: '著者について' },
    buy: 'Amazonで購入',
    buyNote: 'Kindle版',
    viewAllBooks: 'すべての書籍',
    toc: '目次',
    faq: 'よくある質問',
    sample: '本書のサンプルコード',
    whoFor: 'この書籍が解決する問題',
    resources: '関連リソース',
    caseRepo: 'GitHub 事例リポジトリ',
    watchVideo: '解説動画を見る',
    authorHeading: '著者について',
    elsewhere: '他のプラットフォーム',
    relatedBooks: '同じシリーズの他の書籍',
    zhCnNote: '現在、簡体字中国語版はAmazonで販売されていません。リンクは繁体字中国語版を指します。',
    langSwitcher: '言語',
  },
  'zh-tw': {
    siteName: '南榮相如 — 書籍',
    nav: { books: '書籍', topics: '指南', series: '系列', about: '關於作者' },
    buy: '到 Amazon 購買',
    buyNote: 'Kindle 版',
    viewAllBooks: '全部書籍',
    toc: '目錄',
    faq: '常見問題',
    sample: '本書範例程式碼',
    whoFor: '本書解決什麼問題',
    resources: '配套資源',
    caseRepo: 'GitHub 案例倉庫',
    watchVideo: '觀看配套影片',
    authorHeading: '關於作者',
    elsewhere: '其他平台',
    relatedBooks: '同系列其他書籍',
    zhCnNote: '簡體中文版目前未在 Amazon 上架，購買連結指向繁體中文版。',
    langSwitcher: '語言',
  },
  'zh-cn': {
    siteName: '南荣相如 — 书籍',
    nav: { books: '书籍', topics: '指南', series: '系列', about: '关于作者' },
    buy: '到 Amazon 购买',
    buyNote: 'Kindle 版',
    viewAllBooks: '全部书籍',
    toc: '目录',
    faq: '常见问题',
    sample: '本书示例代码',
    whoFor: '本书解决什么问题',
    resources: '配套资源',
    caseRepo: 'GitHub 案例仓库',
    watchVideo: '观看配套视频',
    authorHeading: '关于作者',
    elsewhere: '其他平台',
    relatedBooks: '同系列其他书籍',
    zhCnNote: '简体中文版暂未在 Amazon 上架，购买链接指向繁体中文版。',
    langSwitcher: '语言',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
