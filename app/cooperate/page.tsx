import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: '合作方式｜简益主理人工作档案',
  description: '经营与数字化诊断、业务蓝图、项目陪跑、培训与内容研究的合作方式。',
};

const offers = [
  {
    no: '01',
    title: '经营与数字化诊断',
    question: '问题很多，但不知道应该从哪里开始。',
    work: ['关键角色访谈与资料检查', '经营、流程、数据和系统问题地图', '优先级、依赖关系与下一步建议'],
    output: '形成一份可用于内部决策的事实底稿和问题定义。',
  },
  {
    no: '02',
    title: '业务蓝图与系统规划',
    question: '业务、IT 和供应商对需求的理解不一致。',
    work: ['现状与例外场景梳理', '目标流程、角色、数据和系统边界', '阶段范围、选型条件和验收原则'],
    output: '形成可以进入选型、产品设计或实施的共同定义。',
  },
  {
    no: '03',
    title: '项目陪跑与甲方项目管理',
    question: '方案已经确定，但跨部门和供应商协同难以推进。',
    work: ['总体计划、责任与阶段门', '问题、风险、变更和决策管理', '数据准备、测试、切换、验收与复盘'],
    output: '让项目状态、关键依赖和下一步行动持续可见。',
  },
  {
    no: '04',
    title: '培训与专业内容研究',
    question: '需要把复杂实践讲清楚，并保留事实和证据边界。',
    work: ['案例与来源材料整理', '问题、冲突、机制和观点提炼', '文章、讲稿、课程与演示材料设计'],
    output: '形成管理者能够理解、讨论和继续使用的内容。',
  },
];

export default function CooperatePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        code="05 / COOPERATE"
        title="合作方式"
        lead="先确认要解决的问题、需要形成的交付物和双方责任，再讨论投入与安排。这里不设置脱离具体课题的标准价格。"
      />

      <section className="cooperate-section page-shell">
        <div className="offer-list">
          {offers.map((offer) => (
            <article className="offer" key={offer.no}>
              <div className="offer-title"><span>{offer.no}</span><h2>{offer.title}</h2></div>
              <p className="offer-question">{offer.question}</p>
              <ul>{offer.work.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="offer-output"><span>形成什么</span><p>{offer.output}</p></div>
            </article>
          ))}
        </div>

        <div className="conversation-box">
          <div><p className="section-code">开始讨论前</p><h2>准备四项信息，就足够开始。</h2></div>
          <ol>
            <li><span>01</span><p>目前最希望解决的三个问题。</p></li>
            <li><span>02</span><p>涉及的部门、业务、门店和系统。</p></li>
            <li><span>03</span><p>已有流程、报表、需求或问题清单。</p></li>
            <li><span>04</span><p>内部负责人、决策方式和已知约束。</p></li>
          </ol>
          <p className="conversation-note">第一次沟通的目标是判断问题是否清楚、是否适合由简益参与，以及下一步应该先补什么信息。具体联系方式沿用双方已经建立的沟通渠道。</p>
        </div>

        <div className="cooperate-links"><Link className="button button-solid" href="/work">先看工作记录</Link><Link className="text-link" href="/methods">了解工作方法 →</Link></div>
      </section>
      <SiteFooter />
    </main>
  );
}
