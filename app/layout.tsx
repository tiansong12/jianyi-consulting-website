import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '简益主理人工作档案',
  description: '记录简益主理人在零售、数字化、系统建设与 AI 应用中的实践、方法与阶段性判断。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '简益主理人工作档案',
    description: '把经营问题，变成可以验证、推进和复盘的工作。',
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
    description: '把经营问题，变成可以验证、推进和复盘的工作。',
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
