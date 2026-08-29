import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { sortedWorks, topicDirectory } from '@/content/content';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">JIAN YI · PRACTICE ARCHIVE · 2025—2026</p>
          <h1>把经营问题，变成可以验证、推进和复盘的工作。</h1>
          <p className="hero-lead">这里记录简益主理人在零售、数字化、系统建设与 AI 应用中的实践、方法与阶段性判断。</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/work">沿时间线查看工作</Link>
            <Link className="text-link" href="/methods">了解我的工作方法 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <aside className="hero-timeline" aria-label="内容从工作发生时间开始">
          <p>内容从工作发生时间开始</p>
          <div><time>2025</time><i /><span>项目 · 蓝图</span></div>
          <div><time>2026.05</time><i /><span>研究 · 数据</span></div>
          <div><time>2026.07</time><i /><span>方案 · 试点</span></div>
          <div><time>2026.08</time><i /><span>方法 · 观点</span></div>
          <small>工作时间保持不变，认识可以持续修订。</small>
        </aside>
      </section>

      <section className="home-intro page-shell">
        <p className="section-code">02 / 这是什么网站</p>
        <div className="intro-grid">
          <h2>一份持续更新的专业工作档案。</h2>
          <p>它不罗列客户名单，也不把每份文件包装成成功案例。每项记录都尽量回答：当时面对什么问题，我承担什么角色，采取了哪些行动，形成了什么产出，以及证据能支持到哪里。</p>
        </div>
      </section>

      <section className="recent-section">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="section-code">03 / 近期工作</p><h2>先从时间开始。</h2></div>
            <Link className="text-link" href="/work">查看完整时间线 <span aria-hidden="true">→</span></Link>
          </div>
          <div className="work-preview-list">
            {sortedWorks.slice(0, 3).map((work, index) => (
              <Link className="work-preview" href={`/work/${work.slug}`} key={work.slug}>
                <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="work-meta"><time>{work.period}</time><span>{work.type}</span></div>
                <div className="work-copy"><h3>{work.title}</h3><p>{work.summary}</p></div>
                <span className="work-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-bridge page-shell">
        <p className="section-code">04 / 从记录到判断</p>
        <div className="bridge-grid">
          <Link href="/work"><span>工作记录</span><strong>发生过什么</strong><em>01</em></Link>
          <Link href="/methods"><span>工作方法</span><strong>怎样处理问题</strong><em>02</em></Link>
          <Link href="/views"><span>核心观点</span><strong>形成了什么判断</strong><em>03</em></Link>
        </div>
      </section>

      <section className="topic-section page-shell">
        <div className="section-heading">
          <div><p className="section-code">05 / 专题地图</p><h2>真实工作逐渐形成的主题。</h2></div>
          <p>专题不是预先搭好的知识框架，它们随着项目、研究和复盘逐步变得清晰。</p>
        </div>
        <div className="topic-grid">
          {topicDirectory.map((topic, index) => (
            <Link href={`/work?topic=${encodeURIComponent(topic.label)}`} key={topic.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{topic.label}</h3>
              <p>{topic.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
