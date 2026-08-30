import Home from '../app/page';
import AboutPage from '../app/about/page';
import CooperatePage from '../app/cooperate/page';
import MethodsPage from '../app/methods/page';
import MethodDetailPage from '../app/methods/[slug]/page';
import ViewsPage from '../app/views/page';
import ViewDetailPage from '../app/views/[slug]/page';
import WorkPage from '../app/work/page';
import WorkDetailPage from '../app/work/[slug]/page';
import { methods, views, works } from '../content/content';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import fs from 'node:fs';
import path from 'node:path';

const docs = path.resolve('docs');
const basePath = (process.env.STATIC_BASE_PATH ?? '/jianyi-consulting-website').replace(/\/$/, '');
const siteUrl = `https://tiansong12.github.io${basePath}`;

type PageDefinition = {
  route: string;
  title: string;
  description: string;
  render: () => React.ReactNode | Promise<React.ReactNode>;
};

function escapeAttribute(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function withBasePath(markup: string) {
  return markup
    .replaceAll('href="/', `href="${basePath}/`)
    .replaceAll('src="/', `src="${basePath}/`)
    .replaceAll(`${basePath}/downloads/简益咨询-产品与服务白皮书.pdf`, `${basePath}/downloads/whitepaper.pdf`);
}

function outputPath(route: string) {
  return route === '/'
    ? path.join(docs, 'index.html')
    : path.join(docs, route.slice(1), 'index.html');
}

function documentHtml(page: PageDefinition, body: string) {
  const title = escapeAttribute(page.title);
  const description = escapeAttribute(page.description);
  const canonical = `${siteUrl}${page.route === '/' ? '/' : `${page.route}/`}`;
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="zh_CN" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${siteUrl}/og.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${siteUrl}/og.png" />
<link rel="stylesheet" href="${basePath}/style.css" />
</head>
<body>
${withBasePath(body)}
</body>
</html>`;
}

const pages: PageDefinition[] = [
  {
    route: '/',
    title: '简益主理人工作档案',
    description: '零售企业复杂经营与数字化项目的甲方顾问，记录项目实践、工作方法与阶段性判断。',
    render: () => React.createElement(Home),
  },
  {
    route: '/work',
    title: '工作记录｜简益主理人工作档案',
    description: '按工作发生时间查看2025至2026年的项目、研究、培训材料与方案设计。',
    render: () => WorkPage({ searchParams: Promise.resolve({}) }),
  },
  ...works.map((work) => ({
    route: `/work/${work.slug}`,
    title: `${work.title}｜工作记录｜简益`,
    description: work.summary,
    render: () => WorkDetailPage({ params: Promise.resolve({ slug: work.slug }) }),
  })),
  {
    route: '/methods',
    title: '工作方法｜简益主理人工作档案',
    description: '从实际工作中归纳的诊断、定义、推进、验证与复盘方法。',
    render: () => React.createElement(MethodsPage),
  },
  ...methods.map((method) => ({
    route: `/methods/${method.slug}`,
    title: `${method.title}｜工作方法｜简益`,
    description: method.principle,
    render: () => MethodDetailPage({ params: Promise.resolve({ slug: method.slug }) }),
  })),
  {
    route: '/views',
    title: '核心观点｜简益主理人工作档案',
    description: '关于零售经营、数字化、系统建设、AI应用和专业服务的阶段性判断。',
    render: () => React.createElement(ViewsPage),
  },
  ...views.map((view) => ({
    route: `/views/${view.slug}`,
    title: `${view.title}｜核心观点｜简益`,
    description: view.thesis,
    render: () => ViewDetailPage({ params: Promise.resolve({ slug: view.slug }) }),
  })),
  {
    route: '/about',
    title: '关于简益｜简益主理人工作档案',
    description: '简益主理人的工作范围、工作原则和能力边界。',
    render: () => React.createElement(AboutPage),
  },
  {
    route: '/cooperate',
    title: '合作方式｜简益主理人工作档案',
    description: '经营与数字化诊断、业务蓝图、项目陪跑、培训与内容研究的合作方式。',
    render: () => React.createElement(CooperatePage),
  },
];

async function main() {
  for (const page of pages) {
    const body = renderToStaticMarkup(await page.render());
    const html = documentHtml(page, body);
    const destination = outputPath(page.route);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, html);
    console.log(`[static] wrote ${path.relative(process.cwd(), destination)}`);
  }

  console.log(`[static] rendered ${pages.length} routes`);
}

void main();
