import type { Metadata } from 'next';
import { MethodCard } from '@/components/content-ui';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { methods } from '@/content/content';

export const metadata: Metadata = {
  title: '工作方法｜简益主理人工作档案',
  description: '从实际工作中归纳的诊断、定义、推进、验证与复盘方法。',
};

export default function MethodsPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        code="02 / METHODS"
        title="工作方法"
        lead="方法不是先写出来的标准答案。它来自多项工作里反复出现的问题、取舍和验证方式，并保留适用条件。"
      />
      <section className="library-section page-shell">
        <div className="library-note"><span>阅读顺序</span><p>诊断问题 → 定义边界 → 推进项目 → 小范围验证 → 回到证据复盘。</p></div>
        <div className="content-grid">
          {methods.map((method, index) => <MethodCard method={method} index={index} key={method.slug} />)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
