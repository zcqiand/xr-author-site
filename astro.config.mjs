import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点真源 = src/i18n/utils.ts 的 SITE_URL（author.xiangru.uk，GitHub Pages 自定义域），两处必须同值
const SITE = 'https://author.xiangru.uk';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh-tw', 'zh-cn'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
});
