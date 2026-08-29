'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  ['工作记录', '/work'],
  ['工作方法', '/methods'],
  ['核心观点', '/views'],
  ['关于简益', '/about'],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="简益首页">
        <span className="brand-mark">简</span>
        <span className="brand-copy"><strong>简益</strong><small>工作档案</small></span>
      </Link>
      <nav className="desktop-nav" aria-label="主要导航">
        {navigation.map(([label, href]) => <Link aria-current={pathname.startsWith(href) ? 'page' : undefined} key={href} href={href}>{label}</Link>)}
        <Link aria-current={pathname.startsWith('/cooperate') ? 'page' : undefined} className="nav-cta" href="/cooperate">合作方式</Link>
      </nav>
      <details className="mobile-menu">
        <summary>菜单</summary>
        <div>
          {navigation.map(([label, href]) => <Link aria-current={pathname.startsWith(href) ? 'page' : undefined} key={href} href={href}>{label}</Link>)}
          <Link aria-current={pathname.startsWith('/cooperate') ? 'page' : undefined} href="/cooperate">合作方式</Link>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div><strong>简益</strong><p>经营、数字化与系统建设的专业工作档案。</p></div>
        <div className="footer-links">
          <Link href="/work">工作记录</Link>
          <Link href="/methods">工作方法</Link>
          <Link href="/views">核心观点</Link>
          <Link href="/cooperate">合作方式</Link>
        </div>
        <p>持续记录，谨慎表达。</p>
      </div>
    </footer>
  );
}

export function PageIntro({ code, title, lead }: { code: string; title: string; lead: string }) {
  return (
    <section className="page-intro page-shell">
      <p className="section-code">{code}</p>
      <div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}
