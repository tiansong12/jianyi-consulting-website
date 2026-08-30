import Link from 'next/link';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { methods, sortedWorks, views } from '@/content/content';

const featuredWorkSlugs = [
  'retail-erp-current-state-and-blueprint',
  'five-retail-digital-cases-for-training',
  'fresh-loss-reduction-pilot-design',
  'professional-service-content-and-ai-search',
];

const featuredWorks = featuredWorkSlugs
  .map((slug) => sortedWorks.find((work) => work.slug === slug))
  .filter((work) => work !== undefined);

const featuredMethodSlugs = [
  'problem-to-system-boundary',
  'business-blueprint-from-current-state',
  'small-pilot-with-guardrails',
];

const featuredMethods = featuredMethodSlugs
  .map((slug) => methods.find((method) => method.slug === slug))
  .filter((method) => method !== undefined);

const featuredViewSlugs = [
  'digitalization-changes-management',
  'system-go-live-is-not-outcome',
  'ai-needs-operating-closure',
];

const featuredViews = featuredViewSlugs
  .map((slug) => views.find((view) => view.slug === slug))
  .filter((view) => view !== undefined);

const clientSituations = [
  ['零售与商贸企业', '经营、流程、财务和系统彼此脱节，管理层需要先形成共同判断。'],
  ['购物中心与商业地产', '总部、项目、商户和多套系统边界复杂，需要一张可推进的 IT 蓝图。'],
  ['零售软件与技术服务团队', '有产品与交付能力，需要更深入的业务定义、客户方案或联合项目管理。'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">零售与商贸企业 · 甲方顾问 · 2025—2026</p>
          <h1>让经营判断、系统方案与项目执行，站在同一张图上。</h1>
          <p className="hero-lead">简益站在企业一侧，帮助管理层看清复杂问题、写清业务与系统边界，并把方案带进跨部门协同、系统实施与经营现场。</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="#featured-work">查看代表实践</Link>
            <Link className="text-link" href="/cooperate">了解合作方式 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <aside className="hero-timeline" aria-label="从项目诊断到经营复盘的工作轨迹">
          <p>一条可回溯的工作轨迹</p>
          <div><time>2025.07</time><i /><span>诊断现状与定义问题</span></div>
          <div><time>2025.10</time><i /><span>组织实施与系统切换</span></div>
          <div><time>2026.03</time><i /><span>运行检查与项目复盘</span></div>
          <div><time>现在</time><i /><span>把实践修订为方法与观点</span></div>
          <small>工作时间保持不变，认识随新的证据持续修订。</small>
        </aside>
      </section>

      <section className="home-intro page-shell">
        <p className="section-code">02 / 适合谁</p>
        <div className="intro-grid">
          <h2>处理跨越经营、流程、数据和系统的问题。</h2>
          <p>简益不从一张功能清单开始。先确认企业要改变什么经营动作、哪些责任需要重新说清，再判断流程、数据和技术分别承担什么。</p>
        </div>
        <div className="client-fit-grid">
          {clientSituations.map(([title, body], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="recent-section" id="featured-work">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="section-code">03 / 代表实践</p><h2>先看真实工作，再看方法。</h2></div>
            <p>四项记录分别来自实际项目、培训研究、试点设计与服务设计，工作性质和证据边界分开表达。</p>
          </div>
          <div className="work-preview-list">
            {featuredWorks.map((work, index) => (
              <Link className="work-preview" href={`/work/${work.slug}`} key={work.slug}>
                <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="work-meta"><time>{work.period}</time><span>{work.type}</span></div>
                <div className="work-copy"><h3>{work.title}</h3><p>{work.summary}</p></div>
                <span className="work-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <Link className="text-link section-more" href="/work">查看完整工作时间线 <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="method-section page-shell">
        <div className="section-heading">
          <div><p className="section-code">04 / 工作方法</p><h2>把复杂问题拆成可以推进的工作。</h2></div>
          <p>诊断问题 → 定义边界 → 设计路径 → 小范围验证 → 项目复盘</p>
        </div>
        <div className="method-preview-grid">
          {featuredMethods.map((method, index) => (
            <Link href={`/methods/${method.slug}`} key={method.slug}>
              <span>{String(index + 1).padStart(2, '0')} · {method.stage}</span>
              <h3>{method.title}</h3>
              <p>{method.question}</p>
              <strong>查看方法 →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="view-section">
        <div className="page-shell">
          <div className="section-heading">
            <div><p className="section-code">05 / 当前判断</p><h2>观点必须回到实践和版本。</h2></div>
            <Link className="text-link" href="/views">查看全部观点 <span aria-hidden="true">→</span></Link>
          </div>
          <div className="view-preview-list">
            {featuredViews.map((view, index) => (
              <Link href={`/views/${view.slug}`} key={view.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{view.title}</h3><p>{view.thesis}</p></div>
                <time>{view.version} · {view.asOf}</time>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cooperate page-shell">
        <div>
          <p className="section-code">06 / 合作方式</p>
          <h2>先从问题本身开始交流。</h2>
          <p>如果你正在处理跨越经营、流程、数据和系统的问题，可以先确认问题、交付物与双方责任，再决定从诊断、专项方案还是实施陪跑进入。</p>
          <div className="hero-actions">
            <Link className="button button-solid" href="/cooperate">查看合作方式</Link>
            <a className="text-link" href="/downloads/简益咨询-产品与服务白皮书.pdf" download>下载服务白皮书 <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <aside>
          <span>讨论前可先准备</span>
          <ol>
            <li>最希望解决的三个问题</li>
            <li>涉及的业务、部门与系统</li>
            <li>已有流程、报表或问题清单</li>
            <li>内部负责人和已知约束</li>
          </ol>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
