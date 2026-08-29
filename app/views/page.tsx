import type { Metadata } from 'next';
import { ViewCard } from '@/components/content-ui';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { views } from '@/content/content';

export const metadata: Metadata = {
  title: '核心观点｜简益主理人工作档案',
  description: '关于零售经营、数字化、系统建设、AI应用和专业服务的阶段性判断。',
};

export default function ViewsPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        code="03 / VIEWS"
        title="核心观点"
        lead="观点放在实践之后。每个判断都注明版本、形成时间、支撑它的工作记录，以及仍然成立的条件。"
      />
      <section className="library-section page-shell">
        <div className="library-note view-note"><span>版本原则</span><p>工作发生时间不改；认识发生变化时，更新观点版本和适用边界。</p></div>
        <div className="content-grid">
          {views.map((view, index) => <ViewCard view={view} index={index} key={view.slug} />)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
