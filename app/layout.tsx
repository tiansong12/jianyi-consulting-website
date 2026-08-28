import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '简益咨询｜零售企业复杂经营与数字化项目的甲方顾问',
  description: '专注零售与商贸企业的经营咨询、IT规划、项目管理与产品设计，让经营判断、系统方案与项目执行站在同一张图上。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '简益咨询｜让经营判断、系统方案与项目执行站在同一张图上',
    description: '零售经营咨询、IT规划、项目管理与产品设计。',
    images: [
      {
        url: '/og.png',
        width: 1672,
        height: 941,
        alt: '简益咨询｜让经营判断、系统方案与项目执行站在同一张图上',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '简益咨询｜让经营判断、系统方案与项目执行站在同一张图上',
    description: '零售经营咨询、IT规划、项目管理与产品设计。',
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
