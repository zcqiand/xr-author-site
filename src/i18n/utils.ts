import { locales, defaultLang, hreflangCode, htmlLang, langNames, t, type Lang } from './ui';

export { t, htmlLang, langNames };

export { locales, defaultLang, hreflangCode };
export type { Lang };

export function isLang(v: string): v is Lang {
  return (locales as readonly string[]).includes(v);
}

/** 英文无前缀（/books/...），其余语言带前缀（/ja/books/...） */
export function langPath(lang: Lang, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? p : `/${lang}${p}`;
}

export function amazonUrl(asin: string, market: string): string {
  return `https://www.amazon.${market}/dp/${asin}`;
}

/** 站点真源 URL（astro.config 与此保持一致；GitHub Pages 自定义域 author.xiangru.uk） */
export const SITE_URL = 'https://author.xiangru.uk';

export function siteUrl(path = '/'): string {
  return new URL(langPath(defaultLang, path), SITE_URL).href;
}
