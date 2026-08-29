import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSection, BulletList } from '@/components/content-ui';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { getMethod, getWork, methods } from '@/content/content';

type MethodDetailProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return methods.map((method) => ({ slug: method.slug }));
}

export async function generateMetadata({ params }: MethodDetailProps): Promise<Metadata> {
  const method = getMethod((await params).slug);
  if (!method) return {};
  return {
    title: `${method.title}｜工作方法｜简益`,
    description: method.principle,
    openGraph: { title: method.title, description: method.principle, images: [] },
    twitter: { card: 'summary', title: method.title, description: method.principle, images: [] },
  };
}

export default async function MethodDetailPage({ params }: MethodDetailProps) {
  const method = getMethod((await params).slug);
  if (!method) notFound();
  const evidence = method.evidence.map(getWork).filter(Boolean);

  return (
    <main>
      <SiteHeader />
      <article className="article-shell page-shell method-article">
        <Link className="back-link" href="/methods">← 返回方法库</Link>
        <header className="article-header">
          <div className="article-meta"><span>工作方法</span><span>{method.stage}</span></div>
          <h1>{method.title}</h1>
          <p>{method.question}</p>
          <blockquote className="principle-quote">{method.principle}</blockquote>
        </header>
        <div className="article-body">
          <ArticleSection title="方法步骤">
            <ol className="numbered-list">{method.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol>
          </ArticleSection>
          <ArticleSection title="适用场景"><BulletList items={method.appliesTo} /></ArticleSection>
          <ArticleSection title="使用边界"><BulletList items={method.limits} /></ArticleSection>
        </div>
        <aside className="evidence-list">
          <span>支撑这项方法的工作记录</span>
          {evidence.map((work) => work && <Link href={`/work/${work.slug}`} key={work.slug}><time>{work.period}</time><strong>{work.title}</strong><em>→</em></Link>)}
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
