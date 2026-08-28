// 把 vinext/Next 单页导出为 GitHub Pages 可用的纯静态站点（docs/）。
// 用法：node scripts/build-static-site.mjs
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docs = path.join(root, 'docs');
fs.mkdirSync(docs, { recursive: true });
fs.mkdirSync(path.join(docs, 'downloads'), { recursive: true });

// 1) 用 esbuild 打包 React 页面 + SSR，渲染为静态 HTML
//    react-dom/server 是 CJS，必须用 cjs 格式，否则 ESM 下的动态 require 会报错
const out = path.join(root, 'scripts', '.static-out.cjs');
await build({
  entryPoints: [path.join(root, 'scripts', 'static-entry.tsx')],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  jsx: 'automatic',
  outfile: out,
  logLevel: 'info',
});
await import(out);
fs.rmSync(out, { force: true });

// 2) 复制已编译好的 CSS（来自 vinext build，保证视觉一致）
const cssDir = path.join(root, 'dist', 'client', '_next', 'static', 'css');
const cssFiles = fs.readdirSync(cssDir).filter((f) => f.endsWith('.css'));
if (cssFiles.length === 0) {
  throw new Error('未找到编译后的 CSS，请先运行 npm run build');
}
fs.copyFileSync(path.join(cssDir, cssFiles[0]), path.join(docs, 'style.css'));
console.log('[static] copied style.css');

// 3) 复制资源：OG 图 + 白皮书 PDF
fs.copyFileSync(path.join(root, 'public', 'og.png'), path.join(docs, 'og.png'));
fs.copyFileSync(
  path.join(root, 'public', 'downloads', '简益咨询-产品与服务白皮书.pdf'),
  path.join(docs, 'downloads', 'whitepaper.pdf')
);
console.log('[static] copied og.png + whitepaper.pdf');
console.log('[static] done -> docs/');
