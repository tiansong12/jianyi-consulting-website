import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: '关于简益｜简益主理人工作档案',
  description: '简益主理人的工作范围、工作原则和能力边界。',
};

const principles = [
  ['先把问题说清楚', '从经营现象、现场动作和真实约束开始，不急着用某个产品解释问题。'],
  ['让事实可以回溯', '区分原始资料、访谈判断、项目交付、运行状态和经营结果。'],
  ['用小范围行动验证', '条件不完整时，缩小对象和动作，用约束指标避免出现表面改善。'],
  ['把责任留在组织里', '顾问可以提供判断、方案和推进机制，但不替代管理层和业务团队承担经营责任。'],
];

const boundaries = [
  '不在没有数据、访谈或现场事实时给出确定结论。',
  '不把所有经营问题包装成软件问题。',
  '不承诺未经验证的销售额、利润或效率提升比例。',
  '不公开客户、合作方、个人和项目敏感信息。',
  '研究、教材、原型、方案与实际项目采用不同的成果表述。',
];

const experienceViews = [
  ['零售企业', '中百集团', '理解门店与总部的经营现场，以及管理动作如何落到一线。'],
  ['零售软件', '富基融通', '理解系统能力、产品边界与复杂实施条件。'],
  ['新零售平台', '有赞新零售', '理解顾客、渠道、交易和数据运营怎样连接。'],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        code="04 / ABOUT"
        title="关于简益"
        lead="简益是零售企业复杂经营与数字化项目的甲方顾问，也是一份持续修订的专业工作档案。"
      />

      <section className="about-section page-shell">
        <div className="about-statement">
          <span>工作范围</span>
          <h2>零售经营、数字化、系统建设与复杂项目协同。</h2>
          <p>工作通常发生在业务、管理和技术交界处：帮助团队看清问题，形成共同定义，把方案拆成可以推进和验收的工作，并在项目结束后回到经营结果复盘。</p>
        </div>

        <div className="experience-section">
          <div><p className="section-code">01 / 经历视角</p><h2>从经营现场、软件系统和新零售平台看同一件事。</h2></div>
          <p className="experience-lead">核心顾问的职业经历覆盖零售企业、零售软件与新零售平台。三个角色带来的共同认识是：技术进入经营流程、组织责任与日常动作之后，才会成为企业真正的管理能力。</p>
          <div className="experience-grid">
            {experienceViews.map(([view, company, body], index) => (
              <article key={view}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{view}</p>
                <h3>{company}</h3>
                <small>{body}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="principle-section">
          <p className="section-code">02 / 工作原则</p>
          <div className="principle-grid">
            {principles.map(([title, body], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>

        <div className="boundary-section">
          <div><p className="section-code">03 / 能力边界</p><h2>清楚说明不做什么，也是一种专业责任。</h2></div>
          <ul>{boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>

        <div className="about-cta">
          <p>如果你想先了解具体工作，可以从时间线开始；如果已经有明确课题，可以查看合作方式。</p>
          <div><Link className="button button-solid" href="/work">查看工作记录</Link><Link className="text-link" href="/cooperate">了解合作方式 →</Link></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
