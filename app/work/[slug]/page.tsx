import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSection, BulletList } from '@/components/content-ui';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { getMethod, getView, getWork, works } from '@/content/content';

type WorkDetailProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkDetailProps): Promise<Metadata> {
  const work = getWork((await params).slug);
  if (!work) return {};
  return {
    title: `${work.title}｜工作记录｜简益`,
    description: work.summary,
    openGraph: { title: work.title, description: work.summary, images: [] },
    twitter: { card: 'summary', title: work.title, description: work.summary, images: [] },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const work = getWork((await params).slug);
  if (!work) notFound();

  const relatedMethods = work.relatedMethods.map(getMethod).filter(Boolean);
  const relatedViews = work.relatedViews.map(getView).filter(Boolean);

  return (
    <main>
      <SiteHeader />
      <article className="article-shell page-shell">
        <Link className="back-link" href="/work">← 返回工作时间线</Link>
        <header className="article-header">
          <div className="article-meta"><time>{work.period}</time><span>{work.type}</span><span>{work.status}</span></div>
          <h1>{work.title}</h1>
          <p>{work.summary}</p>
          <dl className="record-facts">
            <div><dt>工作时间</dt><dd>{work.period}</dd></div>
            <div><dt>时间精度</dt><dd>{work.datePrecision}</dd></div>
            <div><dt>发布时间</dt><dd>{work.publishedAt}</dd></div>
            <div><dt>最近修订</dt><dd>{work.updatedAt}</dd></div>
          </dl>
        </header>

        <div className="article-body">
          <ArticleSection title="工作背景"><p>{work.background}</p></ArticleSection>
          <ArticleSection title="我的角色"><p>{work.role}</p></ArticleSection>
          <ArticleSection title="要解决的关键问题"><blockquote>{work.question}</blockquote></ArticleSection>
          <ArticleSection title="采取的行动和判断"><BulletList items={work.actions} /></ArticleSection>
          <ArticleSection title="形成的交付物"><BulletList items={work.deliverables} /></ArticleSection>
          <ArticleSection title="这项工作的价值"><BulletList items={work.value} /></ArticleSection>
          <ArticleSection title="证据边界"><BulletList items={work.boundaries} /></ArticleSection>
          <ArticleSection title="工作反思"><p>{work.reflection}</p></ArticleSection>
        </div>

        <aside className="article-related">
          <div>
            <span>关联方法</span>
            {relatedMethods.map((method) => method && <Link href={`/methods/${method.slug}`} key={method.slug}>{method.title} →</Link>)}
          </div>
          <div>
            <span>关联观点</span>
            {relatedViews.map((view) => view && <Link href={`/views/${view.slug}`} key={view.slug}>{view.title} →</Link>)}
          </div>
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
