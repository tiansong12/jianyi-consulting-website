import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const roots = ['app', 'components', 'content', 'dist'];
const textExtensions = new Set(['.ts', '.tsx', '.js', '.mjs', '.css', '.html', '.json', '.txt', '.map']);
const forbiddenNames = [
  '星河汇', '川赢', 'K11', 'KDP', '零食侠客', '坤记', '唐山百货', '华北商厦',
  '正弘城', '北国', '家乐园', '西亚', '大张', '万德隆', '天一广场', '邢台',
];
const forbiddenPatterns = [
  { label: '本机内部路径', regex: /\/Users\/[^/\s"']+/g },
  { label: '电子邮箱', regex: /[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/g },
  { label: '疑似手机号', regex: /(?<!\d)1[3-9]\d{9}(?!\d)/g },
  { label: '公开价格', regex: /[¥￥]\s?\d[\d,.]*/g },
  { label: '敏感经营数字单位', regex: /\d+(?:\.\d+)?\s*(?:%|万元|亿元|倍)/g },
];
const approvedPublicPrices = new Set(['¥28,000', '¥88,000', '¥168,000']);

async function collectFiles(path) {
  const info = await stat(path).catch(() => null);
  if (!info) return [];
  if (info.isFile()) return textExtensions.has(extname(path)) ? [path] : [];
  const children = await readdir(path);
  const nested = await Promise.all(children.map((name) => collectFiles(join(path, name))));
  return nested.flat();
}

const files = (await Promise.all(roots.map(collectFiles))).flat();
const failures = [];

for (const file of files) {
  const text = await readFile(file, 'utf8').catch(() => '');
  for (const name of forbiddenNames) {
    if (text.includes(name)) failures.push(`${file}: 禁止公开名称「${name}」`);
  }
  for (const pattern of forbiddenPatterns) {
    if (pattern.label === '敏感经营数字单位' && !file.startsWith('content/')) continue;
    const matches = text.match(pattern.regex) ?? [];
    for (const match of matches) {
      const isApprovedPrice = pattern.label === '公开价格'
        && approvedPublicPrices.has(match);
      if (!isApprovedPrice) failures.push(`${file}: ${pattern.label}「${match}」`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`公开内容检查通过：${files.length} 个文本文件未发现禁止名称、个人信息、未批准价格或敏感经营数字。`);
