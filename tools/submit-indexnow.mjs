// IndexNow 提交：把站点全部 URL 喂给 Bing/Seznam/Naver/Yandex/Yep（Google 不参加此协议）。
// 前置：public/<KEY>.txt 已随站点部署（key 文件必须线上可访问后才能提交）。
// 用法: node tools/submit-indexnow.mjs
//   可选 --file=dist/sitemap-0.xml 改变 sitemap 来源；默认读 dist/sitemap-0.xml。
// 验收：HTTP 200/202 = 已受理；4xx = key/参数错；5xx = 换批重试。
import { readFileSync } from 'node:fs';

const SITE = 'https://author.xiangru.uk';
const KEY = '94fe720fea55c895cd39d69ae6d625f3';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error('no urls found in sitemap');
  process.exit(2);
}
console.log(`submitting ${urls.length} urls to IndexNow (host: ${SITE})`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  }),
});
console.log('HTTP', res.status, res.statusText);
const body = await res.text().catch(() => '');
if (body) console.log(body.slice(0, 500));
if (res.status === 200 || res.status === 202) {
  console.log('IndexNow accepted. Bing 通常数日内开始抓取。');
} else {
  process.exit(1);
}
