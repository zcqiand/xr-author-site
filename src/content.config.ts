import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { locales } from './i18n/ui';

const tocSection = z.object({
  part: z.string(),
  items: z.array(z.string()),
});

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const sampleBlock = z.object({
  heading: z.string(),
  lang: z.string(),
  code: z.string(),
  note: z.string().optional(),
});

/**
 * 书籍条目由 tools/import-books.mjs 从 xr-knowledge-suite 批量生成，
 * 文件名约定 `<slug>-<lang>.md`（如 claude-code-en.md；连字符而非点号——glob loader
 * 会 slug 化 id，点号命名导致 id 坍缩互相覆盖）。禁止手改生成件，改源头重跑导入。
 */
const books = defineCollection({
  // generateId 显式取文件名：glob loader 默认 id 优先用 frontmatter 的 slug 字段，
  // 而 22 个条目的 slug 都相同（同一本书的多语言版），会互相覆盖
  loader: glob({
    pattern: '*.md',
    base: './src/content/books',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(locales),
    title: z.string(),
    subtitle: z.string().default(''),
    series: z.string(),
    asin: z.string(),
    market: z.enum(['com', 'co.jp']),
    onSale: z.boolean(),
    /** zh-cn 无在架 listing 时指向的版本语言 */
    mirrorOf: z.string().optional(),
    cover: z.string().default(''),
    description: z.string().default(''),
    faq: z.array(faqItem).default([]),
    toc: z.array(tocSection).default([]),
    sample: z.array(sampleBlock).default([]),
    /** 案例库（GitHub 配套仓）与配套视频（矩阵推广接线，空=隐藏） */
    caseRepo: z.string().default(''),
    videos: z.array(z.object({ platform: z.string(), url: z.string(), title: z.string().optional() })).default([]),
  }),
});

/** 话题页（GEO 引用弹药），文件名约定 `<slug>-<lang>.md`；英文优先 */
const topics = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/topics',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(locales),
    title: z.string(),
    description: z.string(),
    relatedBooks: z.array(z.string()).default([]),
  }),
});

export const collections = { books, topics };
