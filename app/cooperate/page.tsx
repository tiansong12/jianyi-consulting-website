import type { Metadata } from 'next';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: '合作方式｜简益主理人工作档案',
  description: '经营与数字化诊断、业务蓝图、项目陪跑、培训与内容研究的合作方式。',
};

const offers = [
  {
    no: '01',
    title: '经营诊断与项目定义',
    price: '¥28,000 起',
    question: '问题很多，但不知道应该从哪里开始。',
    work: ['关键角色访谈与资料检查', '经营、流程、数据和系统问题地图', '优先级、依赖关系与下一步建议'],
    output: '形成一份可用于内部决策的事实底稿和问题定义。',
  },
  {
    no: '02',
    title: '专项咨询与方案设计',
    price: '¥88,000 起',
    question: '已经明确一个经营、流程或系统课题，需要形成可实施方案。',
    work: ['专项调研与数据分析', '业务规则、目标流程和系统边界', '实施路径、关键模板和验收原则'],
    output: '形成一套可以进入实施的业务方案。',
  },
  {
    no: '03',
    title: '实施陪跑与项目管理',
    price: '¥168,000 起',
    question: '方案已经确定，但跨部门和供应商协同难以推进。',
    work: ['总体计划、责任与阶段门', '问题、风险、变更和决策管理', '数据准备、测试、切换、验收与复盘'],
    output: '让项目状态、关键依赖和下一步行动持续可见。',
  },
];

export default function CooperatePage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        code="05 / COOPERATE"
        title="合作方式"
        lead="先确认要解决的问题、需要形成的交付物和双方责任，再判断从诊断、专项方案还是实施陪跑进入。"
      />

      <section className="cooperate-section page-shell">
        <div className="offer-list">
          {offers.map((offer) => (
            <article className="offer" key={offer.no}>
              <div className="offer-title"><span>{offer.no}</span><h2>{offer.title}</h2><strong>{offer.price}</strong></div>
              <p className="offer-question">{offer.question}</p>
              <ul>{offer.work.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="offer-output"><span>形成什么</span><p>{offer.output}</p></div>
            </article>
          ))}
        </div>

        <p className="pricing-note">参考起价用于判断预算量级，不含第三方软硬件、差旅和长期驻场成本；多业态、多组织或定制开发项目单独确认。培训与专业内容研究按具体课题另行定义。</p>

        <div className="conversation-box">
          <div><p className="section-code">开始讨论前</p><h2>准备四项信息，就足够开始。</h2></div>
          <ol>
            <li><span>01</span><p>目前最希望解决的三个问题。</p></li>
            <li><span>02</span><p>涉及的部门、业务、门店和系统。</p></li>
            <li><span>03</span><p>已有流程、报表、需求或问题清单。</p></li>
            <li><span>04</span><p>内部负责人、决策方式和已知约束。</p></li>
          </ol>
          <p className="conversation-note">第一次沟通的目标是判断问题是否清楚、是否适合由简益参与，以及下一步应该先补什么信息。你可以通过收到本页的原沟通渠道发送以上四项信息；面向新访客的公开联系入口确认后会在这里补充。</p>
        </div>

        <div className="cooperate-resource">
          <div><span>可转发资料</span><h2>用一份白皮书，完成第一次内部判断。</h2><p>集中了解服务矩阵、合作方案、代表实践、工作方法和启动清单，适合管理层内部讨论与项目立项沟通。</p></div>
          <a className="button button-solid" href="/downloads/简益咨询-产品与服务白皮书.pdf" download>下载 PDF 白皮书</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
