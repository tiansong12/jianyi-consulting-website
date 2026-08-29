import Link from 'next/link';
import type { MethodEntry, ViewEntry, WorkEntry } from '@/content/content';

export function WorkListItem({ work, index }: { work: WorkEntry; index: number }) {
  return (
    <Link className="work-list-item" href={`/work/${work.slug}`}>
      <div className="work-list-meta">
        <time>{work.period}</time>
        <span>{work.type}</span>
        <small>{work.status}</small>
      </div>
      <div className="timeline-axis" aria-hidden="true"><i /><span>{String(index + 1).padStart(2, '0')}</span></div>
      <div className="work-list-copy">
        <h2>{work.title}</h2>
        <p>{work.summary}</p>
        <div className="node-judgement"><span>核心判断</span><p>{work.reflection}</p></div>
        <div className="tag-row">{work.topics.map((topic) => <span key={topic}>{topic}</span>)}</div>
        <small className="public-boundary">公开边界：{work.boundaries[0]}</small>
      </div>
    </Link>
  );
}

export function MethodCard({ method, index }: { method: MethodEntry; index: number }) {
  return (
    <Link className="content-card" href={`/methods/${method.slug}`}>
      <div className="card-top"><span>{String(index + 1).padStart(2, '0')}</span><em>{method.stage}</em></div>
      <h2>{method.title}</h2>
      <div className="method-fit"><span>适用于</span><p>{method.question}</p></div>
      <div className="method-actions"><span>核心动作</span><p>{method.steps.map((step) => step.replace(/[。！]$/, '')).join(' → ')}</p></div>
      <strong>查看方法 <span aria-hidden="true">→</span></strong>
    </Link>
  );
}

export function ViewCard({ view, index }: { view: ViewEntry; index: number }) {
  return (
    <Link className="content-card view-card" href={`/views/${view.slug}`}>
      <div className="card-top"><span>{String(index + 1).padStart(2, '0')}</span><em>{view.category}</em></div>
      <h2>{view.title}</h2>
      <p>{view.thesis}</p>
      <div className="view-version"><span>{view.version}</span><time>{view.asOf}</time></div>
    </Link>
  );
}

export function ArticleSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="article-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return <ul className="article-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
