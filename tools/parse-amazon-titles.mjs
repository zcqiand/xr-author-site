#!/usr/bin/env node
/**
 * parse-amazon-titles.mjs — 解析 .tmp-amazon/<slug>-<lang>.html（curl 落盘，见 README）
 * → src/data/amazon-titles.json（书目标题真源覆盖：在架 listing > 知识库封面 md）。
 *
 * 前置：bash 循环 curl 抓 22 个 on-sale listing 页（bot 墙原因不走 node fetch，curl 稳定）：
 *   while IFS='|' read -r key market asin; do
 *     hl="en-US,en;q=0.9"; [ "$market" = "co.jp" ] && hl="ja-JP,ja;q=0.9,en;q=0.5"
 *     curl -s -m 30 -o ".tmp-amazon/$key.html" -A "Mozilla/5.0 ... Chrome/125" -H "Accept-Language: $hl" \
 *       "https://www.amazon.$market/dp/$asin"; sleep 2
 *   done < .tmp-amazon/list.txt
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TMP = join(ROOT, '.tmp-amazon');
const OUT = join(ROOT, 'src/data/amazon-titles.json');
const meta = JSON.parse(readFileSync(join(ROOT, 'src/data/books-meta.json'), 'utf8'));
const bookBySlug = Object.fromEntries(meta.books.map((b) => [b.slug, b]));
const seriesById = Object.fromEntries(meta.series.map((s) => [s.id, s.name]));

/** 去掉标题尾部括注（系列名/Edition 元数据） */
function stripSuffixes(s) {
  let out = s.trim();
  let m;
  while ((m = out.match(/\s*\(([^()]*)\)\s*$/))) {
    if (!/(系列|Series|Edition|シリーズ)/.test(m[1])) break;
    out = out.slice(0, m.index);
  }
  return out.trim();
}

/** 副题尾部内联系列名截断（ja 形态：副题 + 空格 + 系列名，无括号） */
function stripInlineSeries(s, seriesId, lang) {
  let out = s;
  const names = [seriesById[seriesId]?.[lang], seriesById[seriesId]?.en].filter(Boolean);
  for (const name of names) {
    const i = out.indexOf(name);
    if (i > 10) out = out.slice(0, i).trim(); // 防误切：系列名前须有实质副题
  }
  // 在架简写形态兜底：任意「xxシリーズ」尾巴（如 フロントエンド開発シリーズ）
  out = out.replace(/[\s　]+\S*シリーズ\s*$/, '').trim();
  return out;
}

function splitTitle(full, seriesId, lang) {
  const cleaned = stripSuffixes(full.replace(/\s+/g, ' '));
  // 首个冒号切分；若前段 <12 字符（如 "Claude Code"）改在下一冒号切，保证标题完整可读
  const positions = [];
  const re = /[:：]/g;
  let m;
  while ((m = re.exec(cleaned))) positions.push(m.index);
  let cut = positions[0];
  for (const p of positions) {
    if (p >= 12) { cut = p; break; }
    cut = p;
  }
  if (cut === undefined) return { title: cleaned, subtitle: '' };
  const title = cleaned.slice(0, cut).trim();
  const subtitle = stripInlineSeries(cleaned.slice(cut + 1).trim(), seriesId, lang);
  return { title, subtitle };
}

const out = {};
for (const file of readdirSync(TMP).filter((f) => f.endsWith('.html'))) {
  const key = file.replace(/\.html$/, ''); // <slug>-<lang>
  const [slug, lang] = key.split(/-(?=[^-]*$)/); // 末段为 lang
  const book = bookBySlug[slug];
  const html = readFileSync(join(TMP, file), 'utf8');
  const m = html.match(/id="productTitle"[^>]*>\s*([\s\S]*?)\s*</);
  if (!m || !m[1].trim()) {
    console.log(`${key}: no productTitle, skipped`);
    continue;
  }
  out[key] = splitTitle(m[1], book?.series, lang);
  console.log(`${key}: ${out[key].title} | ${out[key].subtitle}`);
}
writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
console.log(`wrote ${Object.keys(out).length} entries`);
