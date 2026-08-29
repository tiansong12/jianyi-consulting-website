import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSection, BulletList } from '@/components/content-ui';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { getView, getWork, views } from '@/content/content';

type ViewDetailProps = { params: Promise<{ slug: string }> };

function RetailSystemPanorama() {
  const nodes = ['顾客', '商品', '门店', '采购', '供应链', '财务', '组织', '数据'];
  return (
    <figure className="panorama-figure">
      <figcaption><span>阅读图 · v0.1</span><p>这是一份当前阶段的主观观察，用来帮助讨论系统关系，不是行业标准。</p></figcaption>
      <div className="panorama-map">
        {nodes.slice(0, 4).map((node) => <span className="panorama-node" key={node}>{node}</span>)}
        <strong>零售经营系统<small>经营对象 · 动作 · 反馈 · 责任</small></strong>
        {nodes.slice(4).map((node) => <span className="panorama-node" key={node}>{node}</span>)}
      </div>
    </figure>
  );
}

export function generateStaticParams() {
  return views.map((view) => ({ slug: view.slug }));
}

export async function generateMetadata({ params }: ViewDetailProps): Promise<Metadata> {
  const view = getView((await params).slug);
  if (!view) return {};
  return {
    title: `${view.title}｜核心观点｜简益`,
    description: view.thesis,
    openGraph: { title: view.title, description: view.thesis, images: [] },
    twitter: { card: 'summary', title: view.title, description: view.thesis, images: [] },
  };
}

export default async function ViewDetailPage({ params }: ViewDetailProps) {
  const view = getView((await params).slug);
  if (!view) notFound();
  const relatedWorks = view.relatedWorks.map(getWork).filter(Boolean);

  return (
    <main>
      <SiteHeader />
      <article className="article-shell page-shell view-article">
        <Link className="back-link" href="/views">← 返回观点库</Link>
        <header className="article-header">
          <div className="article-meta"><span>{view.category}</span><span>{view.version}</span><time>{view.asOf}</time></div>
          <h1>{view.title}</h1>
          <blockquote className="view-thesis">{view.thesis}</blockquote>
        </header>
        {view.slug === 'retail-system-panorama-v01' && <RetailSystemPanorama />}
        <div className="article-body">
          <ArticleSection title="为什么形成这个判断"><BulletList items={view.arguments} /></ArticleSection>
          <ArticleSection title="适用边界"><BulletList items={view.boundaries} /></ArticleSection>
        </div>
        <aside className="evidence-list">
          <span>形成这一观点的工作记录</span>
          {relatedWorks.map((work) => work && <Link href={`/work/${work.slug}`} key={work.slug}><time>{work.period}</time><strong>{work.title}</strong><em>→</em></Link>)}
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
