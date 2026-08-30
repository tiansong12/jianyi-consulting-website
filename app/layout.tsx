import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://jianyi-practice-archive.wwsong999.chatgpt.site'),
  title: '简益主理人工作档案',
  description: '零售企业复杂经营与数字化项目的甲方顾问，记录项目实践、工作方法与阶段性判断。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '简益主理人工作档案',
    description: '让经营判断、系统方案与项目执行，站在同一张图上。',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: '简益主理人工作档案',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '简益主理人工作档案',
    description: '让经营判断、系统方案与项目执行，站在同一张图上。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
