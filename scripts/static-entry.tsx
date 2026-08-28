import Home from '../app/page';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import fs from 'node:fs';
import path from 'node:path';

// 把 React 单页渲染成纯静态 HTML 片段
const body = renderToStaticMarkup(React.createElement(Home));

// GitHub Pages 以 /<repo>/ 为根路径，必须用相对路径，否则 /downloads/... 会 404
const fixed = body.replaceAll(
  '/downloads/简益咨询-产品与服务白皮书.pdf',
  './downloads/whitepaper.pdf'
);

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>简益咨询｜让经营判断、系统方案与项目执行站在同一张图上</title>
<meta name="description" content="专注零售与商贸企业的经营咨询、IT规划、项目管理与产品设计，让经营判断、系统方案与项目执行站在同一张图上。" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="zh_CN" />
<meta property="og:title" content="简益咨询｜让经营判断、系统方案与项目执行站在同一张图上" />
<meta property="og:description" content="零售经营咨询、IT规划、项目管理与产品设计。" />
<meta property="og:image" content="./og.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="简益咨询｜让经营判断、系统方案与项目执行站在同一张图上" />
<meta name="twitter:description" content="零售经营咨询、IT规划、项目管理与产品设计。" />
<meta name="twitter:image" content="./og.png" />
<link rel="stylesheet" href="./style.css" />
</head>
<body>
${fixed}
</body>
</html>`;

const docs = path.resolve('docs');
fs.mkdirSync(docs, { recursive: true });
fs.writeFileSync(path.join(docs, 'index.html'), html);
console.log('[static] wrote docs/index.html (' + html.length + ' bytes)');
