const moments = [
  ['01', '经营动作失去焦点', '会议讨论很多，真正影响销售、毛利、库存和效率的问题却没有形成共同判断。', '建立问题地图，明确优先级、责任人与验证指标。'],
  ['02', '系统建设反复返工', '业务说需求，IT 讲功能，供应商谈产品，三方缺少同一套业务定义。', '先写清流程、规则与边界，再进入选型、实施和验收。'],
  ['03', '项目立项却难以推进', '计划存在，跨部门任务、数据准备、问题升级和决策机制没有真正运行。', '建立甲方项目管理机制，让责任、问题、变更和里程碑持续可见。'],
  ['04', '经验无法变成产品', '复杂业务依赖少数人解释，设计、开发与测试对同一场景理解不同。', '把经验转成流程、状态、权限、数据模型与可测试的产品定义。'],
];

const services = [
  {
    code: 'S01',
    name: '零售经营与品类咨询',
    decision: '我们应该先改什么，怎样判断调改是否有效？',
    work: ['经营问题与数据诊断', '品类结构、角色与规则设计', 'KPI 与经营分析框架', '试点调改与复盘机制'],
    output: '问题地图、品类方案、指标字典、试点计划、复盘模板',
  },
  {
    code: 'S02',
    name: 'IT 战略、规划与系统选型',
    decision: '现有系统哪里不适配，新系统应该如何选、如何建？',
    work: ['战略与业务能力解码', '核心流程与特殊场景梳理', '系统现状和风险评估', '业务蓝图、需求定义和选型支持'],
    output: '业务蓝图、需求说明书、选型框架、项目范围、系统路线与验收原则',
  },
  {
    code: 'S03',
    name: 'ERP / WMS 实施与甲方 PMO',
    decision: '怎样让业务、IT 与供应商按同一目标推进？',
    work: ['总体计划与责任矩阵', '问题、风险和变更管理', '数据准备、测试和上线切换', '验收、复盘与能力转移'],
    output: '项目计划、问题台账、决策记录、数据清单、切换方案和验收清单',
  },
  {
    code: 'S04',
    name: '业务产品与数据工具设计',
    decision: '怎样把专业经验转成团队可以共同开发的产品？',
    work: ['用户、角色与业务场景研究', '流程、状态和权限设计', 'PRD、数据模型与交互规则', '原型评审和场景测试'],
    output: '业务架构、产品需求、数据模型、交互规范、原型和测试场景',
  },
];

const packages = [
  {
    level: '01 / DIAGNOSE',
    name: '经营诊断与项目定义',
    price: '¥28,000 起',
    aim: '问题很多，尚未决定先做什么',
    scope: '访谈、诊断、问题地图、优先级、范围定义与管理层沟通。',
    result: '一份可用于内部决策的项目定义。',
  },
  {
    level: '02 / DESIGN',
    name: '专项咨询与方案设计',
    price: '¥88,000 起',
    aim: '已明确一个经营、流程或系统课题',
    scope: '专项调研、数据分析、业务规则、目标流程、实施路径和关键模板。',
    result: '一套可以进入实施的业务方案。',
    featured: true,
  },
  {
    level: '03 / DELIVER',
    name: '实施陪跑与项目管理',
    price: '¥168,000 起',
    aim: '项目已立项，需要跨部门和供应商协同',
    scope: '甲方 PMO、问题与变更、数据准备、上线切换、验收和复盘。',
    result: '一套真正运行起来的项目机制。',
  },
];

const cases = [
  {
    no: 'CASE 01',
    sector: '商贸零售集团 / 业财协同与实时经营',
    title: '看不见的门店，算不清的利润。',
    challenge: '总部每月只看得到“发了多少货、收了多少钱”。门店卖了什么、哪些商品好卖、每家店到底赚不赚钱，要等三五个月盘点才能倒推出来。',
    role: 'IT 咨询与甲方项目管理',
    moves: ['建立打称码、组合码、成分码的 1:N 映射，破解编码迷宫', '门店销售数据直连自动回流，不再经过人工报数', '接通销售成票、成本结转、损耗归集、费用分摊四道环节'],
    value: '经营可见性从一两个月缩短到 1 至 3 天，颗粒度细到打称码与品类；每家门店的利润表每月 5 日自动出具，盈亏第一次有了完整、可追溯的答案。',
    facts: ['1 至 3 天可见', '编码 1:N 映射', '门店利润表'],
  },
  {
    no: 'CASE 02',
    sector: '区域连锁超市 / 品类管理',
    title: '用一个门店试点，把品类方法变成团队共同语言',
    challenge: '商品分类、品类角色和绩效指标缺少统一口径，调改经验难以复制到门店日常经营。',
    role: '品类咨询与试点设计',
    moves: ['设计品类结构树和分类规则', '选择门店与功能分类开展试点', '建立 KPI、调改方案和双周复盘机制'],
    value: '通过小范围试点，把分类、指标、动作和复盘连在一起，为后续验证与推广建立可重复的方法。',
    facts: ['1 家试点门店', '2 个功能分类', '4 轮双周复盘'],
  },
  {
    no: 'CASE 03',
    sector: '购物中心 / IT 规划',
    title: '把总部管理、项目运营与筹开需求放进一张蓝图',
    challenge: '招商租赁、商户运营、物业、会员、预算、BI 与办公协同跨越总部和多个项目，系统边界复杂。',
    role: 'IT 需求规划',
    moves: ['划分总部与项目能力边界', '梳理模块、审批权限和多项目管理', '纳入筹开部署、培训、运维和验收'],
    value: '形成覆盖管理、运营与筹开的系统需求框架，让系统建设围绕真实管理场景展开。',
  },
  {
    no: 'CASE 04',
    sector: '复杂业务系统 / 产品设计',
    title: '把专业实验流程转成可开发、可测试的产品定义',
    challenge: '测试计划、项目、任务投放、实验执行、审核与报告相互关联，角色、状态和异常边界复杂。',
    role: '业务研究与产品定义',
    moves: ['统一术语、角色与端到端流程', '设计状态机、权限和数据模型', '用场景测试校验交互与异常规则'],
    value: '让业务、设计、开发和测试围绕同一份产品定义协作，减少依赖口头解释的模糊空间。',
  },
];

const method = [
  ['01', '识别课题', '把现场现象转成管理层需要回答的问题。', '课题清单'],
  ['02', '统一事实', '结合访谈、流程和数据建立共同认知。', '现状地图'],
  ['03', '设计方案', '明确业务规则、目标流程和取舍原则。', '目标方案'],
  ['04', '组织实施', '把方案拆成责任、任务、决策和验收。', '项目机制'],
  ['05', '验证改进', '用经营动作、系统状态和指标持续复盘。', '改进闭环'],
];

const topics = [
  ['品类与生鲜经营', '分类、角色、价格、促销、陈列与库存，如何围绕同一经营目标协同？'],
  ['业财协同', '业务发生、系统记录与财务核算，怎样从源头保持一致？'],
  ['仓配效率与 WMS 深用', '不急着换系统，怎样先让货位、流程、参数和现场动作真正配合？'],
  ['商业地产运营系统', '总部、项目与商户之间，哪些能力应该统一，哪些应该保留差异？'],
  ['客户声音与经营改进', '如何把分散客诉变成问题聚类、责任闭环和经营复盘？'],
  ['复杂业务产品设计', '如何把专业知识转成可协作、可开发、可测试的产品定义？'],
];

const storyShifts = [
  ['1 至 2 个月', '1 至 3 天'],
  ['才能看到一个店级总数', '看到打称码与品类级明细'],
  ['发了多少货 / 收了多少钱', '哪些商品好卖、哪些滞销，一目了然'],
  ['季度盘点倒推盈亏', '门店订货、补货开始有数据依据'],
  ['订货、补货、采购全凭经验', '总部采购与配送计划可提前编排'],
];

const storyLinks = [
  ['1', '销售成票', '销售数据自动形成收入小票'],
  ['2', '成本结转', '销售成本随销售自动结转'],
  ['3', '损耗归集', '损耗与商场扣费归集到门店'],
  ['4', '费用分摊', '供应链与总部费用按规则分摊'],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="简益咨询首页">
          <span className="brand-mark">简</span>
          <span className="brand-copy"><strong>简益咨询</strong><small>Jianyi Consulting</small></span>
        </a>
        <nav aria-label="主要导航">
          <a href="#services">服务</a>
          <a href="#cases">项目实践</a>
          <a href="#story">案例故事</a>
          <a href="#method">工作方法</a>
          <a href="#about">关于简益</a>
          <a className="nav-cta" href="#whitepaper">下载白皮书</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-main">
          <p className="eyebrow">零售与商贸企业的经营改善及数字化项目伙伴</p>
          <h1>让经营判断、系统方案与项目执行，站在同一张图上。</h1>
          <p className="hero-lead">简益帮助零售企业看清复杂问题、形成可执行方案，并把方案带进跨部门协同、系统实施与经营现场。</p>
          <div className="hero-actions">
            <a className="button solid" href="#services">了解简益的服务</a>
            <a className="button line" href="/downloads/简益咨询-产品与服务白皮书.pdf" download>下载服务白皮书</a>
          </div>
        </div>
        <aside className="hero-framework" aria-label="简益价值路径">
          <p className="framework-label">FROM ISSUE TO IMPACT</p>
          <h2>从课题到经营动作</h2>
          <div className="framework-steps">
            <div><span>01</span><strong>看清真正约束</strong><p>分清表象、原因与优先级</p></div>
            <div><span>02</span><strong>写清业务规则</strong><p>让管理意图可以被执行</p></div>
            <div><span>03</span><strong>推动跨部门交付</strong><p>让业务、IT 与供应商协同</p></div>
            <div><span>04</span><strong>留下组织能力</strong><p>让方法进入日常管理</p></div>
          </div>
        </aside>
        <div className="hero-sectors">
          <span>服务场景</span><strong>连锁超市</strong><strong>商贸流通</strong><strong>购物中心</strong><strong>复杂业务系统</strong>
        </div>
      </section>

      <section className="section section-white">
        <div className="section-intro two-col">
          <div><p className="section-code">01 / WHEN TO CALL US</p><h2>当问题跨越经营、组织和系统，单点优化通常不够。</h2></div>
          <p>简益适合处理边界复杂、参与方较多、需要把专业判断转成项目行动的课题。</p>
        </div>
        <div className="moment-grid">
          {moments.map(([no, title, symptom, answer]) => (
            <article className="moment-card" key={no}>
              <span className="outline-no">{no}</span>
              <h3>{title}</h3>
              <p>{symptom}</p>
              <div><span>简益的切入点</span><strong>{answer}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section service-section" id="services">
        <div className="section-intro two-col on-dark">
          <div><p className="section-code">02 / WHAT WE DO</p><h2>四类服务，共同解决“想清楚”与“做出来”之间的断点。</h2></div>
          <p>可以从一次诊断开始，也可以围绕明确专项进入方案设计或实施陪跑。</p>
        </div>
        <div className="service-matrix">
          <div className="matrix-head"><span>服务</span><span>需要回答的决策</span><span>关键工作</span><span>客户获得</span></div>
          {services.map((service) => (
            <article className="service-row" key={service.code}>
              <div className="service-name"><span>{service.code}</span><h3>{service.name}</h3></div>
              <p className="service-question">{service.decision}</p>
              <ul>{service.work.map((item) => <li key={item}>{item}</li>)}</ul>
              <p className="service-output">{service.output}</p>
            </article>
          ))}
        </div>
        <div className="value-chain">
          <div className="value-chain-title"><span>一条完整价值链</span><h3>服务不是四个孤立模块，而是一条从经营课题走向组织行动的路径。</h3></div>
          <div className="chain-flow">
            {['经营课题', '业务定义', 'IT / 产品方案', '项目实施', '经营机制'].map((item, index) => (
              <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="packages">
        <div className="section-intro two-col">
          <div><p className="section-code">03 / HOW TO ENGAGE</p><h2>用三个清晰入口，匹配不同阶段的管理需求。</h2></div>
          <p>价格帮助企业判断预算量级。正式合作范围取决于组织复杂度、现场投入、参与角色与交付深度。</p>
        </div>
        <div className="package-table">
          {packages.map((item) => (
            <article className={item.featured ? 'package featured' : 'package'} key={item.level}>
              <div className="package-title"><span>{item.level}</span><h3>{item.name}</h3><strong>{item.price}</strong></div>
              <div><span className="cell-label">适合解决</span><p>{item.aim}</p></div>
              <div><span className="cell-label">主要范围</span><p>{item.scope}</p></div>
              <div><span className="cell-label">客户获得</span><p>{item.result}</p></div>
            </article>
          ))}
        </div>
        <p className="pricing-note">以上为服务费参考起价，不含第三方软硬件、差旅和长期驻场成本；多业态、多组织或定制开发项目单独确认范围。</p>
      </section>

      <section className="section case-section" id="cases">
        <div className="section-intro two-col">
          <div><p className="section-code">04 / SELECTED WORK</p><h2>用代表项目说明：简益如何进入问题，并推动工作向前。</h2></div>
          <p>项目隐去客户名称，重点呈现企业课题、简益角色与形成的管理价值。</p>
        </div>
        <div className="case-list">
          {cases.map((item, index) => (
            <article className={index < 2 ? 'case case-large' : 'case'} key={item.no}>
              <div className="case-heading"><span>{item.no}</span><p>{item.sector}</p><h3>{item.title}</h3></div>
              <div className="case-detail">
                <div><span>客户课题</span><p>{item.challenge}</p></div>
                <div><span>简益角色</span><p>{item.role}</p></div>
                <div><span>关键工作</span><ul>{item.moves.map((move) => <li key={move}>{move}</li>)}</ul></div>
                <div className="case-value"><span>形成价值</span><p>{item.value}</p></div>
              </div>
              {item.facts && <div className="case-facts">{item.facts.map((fact) => <strong key={fact}>{fact}</strong>)}</div>}
            </article>
          ))}
        </div>
      </section>

      <section className="section story-section" id="story">
        <div className="section-intro two-col">
          <div><p className="section-code">05 / CASE STORY</p><h2>看不见的门店，算不清的利润。</h2></div>
          <p>这不是一家企业的特例。门店看不见、利润算不清，是商贸零售行业最普遍的两个共性问题。</p>
        </div>

        <div className="story-prologue">
          <p className="story-kicker">序章 / PROLOGUE</p>
          <h3>许多零售企业的经营，仍停留在“小农经济”阶段。</h3>
          <p className="story-lead">小农经济靠经验先找货再卖货；现代零售靠数字化先理解顾客需求，再反向组织供应链、高效周转。</p>
          <div className="prologue-grid">
            <article>
              <h4>小农经济 · 经验驱动</h4>
              <ul>
                <li>报数靠人、决策靠经验，信息靠人传人</li>
                <li>系统割裂，编码不统一、数据不互通</li>
                <li>先找货再卖货，形不成数字化流水线</li>
              </ul>
            </article>
            <article>
              <h4>现代零售 · 数据驱动</h4>
              <ul>
                <li>数字化识别顾客需求，反向驱动供应链</li>
                <li>门店运营、顾客营销、供应链三大体系协同</li>
                <li>财务核算贯穿，规模化降本、高效周转</li>
              </ul>
            </article>
          </div>
          <div className="story-pain">
            <div><strong>看不见</strong><p>一两个月后才知道门店卖了什么、剩了什么</p></div>
            <div><strong>算不清</strong><p>每家门店赚多少钱，靠季度盘点倒推</p></div>
          </div>
        </div>

        <article className="story-chapter">
          <div className="chapter-head">
            <p className="story-kicker">案例一 / CASE ONE</p>
            <h3>看不见的门店：一两个月以后，才知道门店发生了什么。</h3>
            <p className="chapter-lead">总部每个月只能看到两个数字：发了多少货、收了多少钱。至于每家门店卖了什么、哪些商品好卖、库存还剩多少，要等三五个月盘点才能倒推出来。</p>
          </div>
          <div className="chapter-split">
            <div className="chapter-pains">
              <h4>三个卡点</h4>
              <p><strong>订货靠经验</strong>哪些该补、补多少，店长凭感觉下单</p>
              <p><strong>采购靠拍脑袋</strong>旺季备货量没有历史数据支撑</p>
              <p><strong>盈亏靠盘点倒推</strong>季度甚至半年才知道一家店赚不赚钱</p>
            </div>
            <div className="chapter-break">
              <p className="story-kicker">突破 / BREAKTHROUGH</p>
              <h4>让数据自己流回总部。</h4>
              <p>建立编码映射体系，贯通打称码、内部码与商品码；门店数据直连自动回流，告别人工报数。</p>
              <div className="break-steps">
                <div><span>01</span><strong>三码合一</strong><p>打称码、组合码、成分码建立 1:N 映射，破解编码迷宫</p></div>
                <div><span>02</span><strong>数据直连</strong><p>门店销售数据自动采集传输，不再经过人工转述</p></div>
                <div><span>03</span><strong>1 至 3 天可见</strong><p>从一两个月缩短到 1 至 3 天，颗粒度细到打称码与品类</p></div>
              </div>
            </div>
          </div>
          <div className="story-shift">
            <p className="story-kicker">转变 / TRANSFORMATION —— 管理颗粒度的质变</p>
            <div className="shift-table">
              <div className="shift-head"><span>BEFORE / 过去</span><span>AFTER / 现在</span></div>
              {storyShifts.map(([before, after], index) => (
                <div className="shift-row" key={index}>
                  <p className="shift-before">{before}</p>
                  <p className="shift-after">{after}</p>
                </div>
              ))}
            </div>
            <p className="story-conclusion">从“人管数字”到“数据支持人经营”，门店第一次被真正看见。</p>
          </div>
        </article>

        <article className="story-chapter">
          <div className="chapter-head">
            <p className="story-kicker">案例二 / CASE TWO</p>
            <h3>算不清的利润：一家门店，到底赚了多少钱？</h3>
            <p className="chapter-lead">销售收入有了，但销售成本没有随销售自动结转；库存损耗、商场扣费、供应链与总部费用散落在不同系统里，无法归集到具体门店。</p>
          </div>
          <div className="chapter-split">
            <div className="chapter-pains">
              <h4>三个断点</h4>
              <p><strong>成本靠手工结转</strong>收入能看到，成本没有随销售同步</p>
              <p><strong>损耗与费用散落各处</strong>无法归集到具体门店</p>
              <p><strong>费用没有分摊规则</strong>供应链与总部费用缺乏分摊依据</p>
            </div>
            <div className="chapter-break">
              <p className="story-kicker">突破 / BREAKTHROUGH</p>
              <h4>四道连接，算清每一家店。</h4>
              <p>把业务数据与财务核算之间断裂的环节逐一接通。</p>
              <div className="link-flow">
                {storyLinks.map(([no, name, desc]) => (
                  <div key={no}><span>{no}</span><strong>{name}</strong><p>{desc}</p></div>
                ))}
              </div>
              <div className="link-result"><span>=</span><strong>门店利润表</strong><p>每月 5 日自动出具</p></div>
            </div>
          </div>
          <p className="story-conclusion">业务单据按规则自动生成财务凭证，从“财务结账”走向“经营核算”——每一家门店的盈亏，第一次有了完整、可追溯的答案。</p>
        </article>

        <div className="story-epilogue">
          <p className="story-kicker">尾声 / EPILOGUE</p>
          <h3>从人治到流程，从经验到数据。</h3>
          <p>当门店的销售数据每天自动回流，当每家门店的利润表按时出具，经营决策便不再依赖某个人的经验与记忆，而是建立在可追溯、可复用的流程与数据之上。</p>
          <strong>这不是终点，而是一家零售企业从“小农经济”走向工业化经营的起点。</strong>
        </div>
      </section>

      <section className="section difference-section">
        <div className="section-intro two-col on-dark">
          <div><p className="section-code">06 / WHY JIANYI</p><h2>简益站在甲方一侧，把专业语言转成共同工作语言。</h2></div>
          <p>我们关心方案是否完整，也关心决策能否发生、责任能否到人、项目能否推进。</p>
        </div>
        <div className="difference-grid">
          <article><span>01</span><h3>懂经营，也懂系统</h3><p>把销售、库存、流程、核算与系统能力放在同一张业务图中讨论。</p></article>
          <article><span>02</span><h3>站在甲方视角推进</h3><p>帮助企业定义范围、管理供应商、组织决策并守住验收标准。</p></article>
          <article><span>03</span><h3>让文档进入现场</h3><p>方案、清单和原型都要能够支持会议、任务、开发、切换与复盘。</p></article>
          <article><span>04</span><h3>把方法留给团队</h3><p>通过模板、规则与复盘机制，让关键工作不再依赖少数人的记忆。</p></article>
        </div>
      </section>

      <section className="section section-white" id="method">
        <div className="section-intro two-col">
          <div><p className="section-code">07 / HOW WE WORK</p><h2>五步工作法：从管理课题到改进闭环。</h2></div>
          <p>每一步都形成下一步所需的输入，让项目建立在清晰的进入条件与可检查的成果上。</p>
        </div>
        <div className="method-flow">
          {method.map(([no, title, desc, output]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{desc}</p><strong>{output}</strong></article>
          ))}
        </div>
        <div className="role-frame">
          <div><span>简益负责</span><p>诊断、框架、方案、项目组织、问题推动、验收设计与方法转移。</p></div>
          <div><span>客户负责</span><p>明确负责人，开放必要信息，组织业务决策，完成约定的数据与现场动作。</p></div>
          <div><span>共同确认</span><p>关键流程是否运行、责任是否清楚、系统与数据是否支持新的管理方式。</p></div>
        </div>
      </section>

      <section className="section topic-section">
        <div className="section-intro two-col">
          <div><p className="section-code">08 / QUESTIONS WE STUDY</p><h2>我们持续研究的，是零售企业每天需要做出的判断。</h2></div>
          <p>这些议题构成简益诊断、方案设计与项目复盘的长期知识框架。</p>
        </div>
        <div className="topic-grid">
          {topics.map(([title, question], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{question}</p></article>)}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-title">
          <p className="section-code">09 / ABOUT JIANYI</p>
          <h2>来自零售企业、零售软件与新零售平台的一线视角。</h2>
        </div>
        <div className="about-profile">
          <p>简益核心顾问长期从事零售数字化与经营管理工作，职业经历覆盖中百集团、富基融通与有赞新零售。不同角色带来的共同认识是：技术进入经营流程、组织责任与日常动作之后，才会成为企业真正的管理能力。</p>
          <div className="experience-line">
            <span><strong>零售企业</strong>理解门店与总部的经营现场</span>
            <span><strong>零售软件</strong>理解系统边界与实施约束</span>
            <span><strong>新零售平台</strong>理解顾客、渠道与数据运营</span>
          </div>
        </div>
      </section>

      <section className="whitepaper-section" id="whitepaper">
        <div className="whitepaper-copy">
          <p className="section-code">SERVICE WHITE PAPER / 2026</p>
          <h2>用一份产品书，完成第一次内部判断。</h2>
          <p>《简益咨询产品与服务白皮书》集中介绍服务矩阵、合作方案、代表项目、工作方法和启动清单，适合管理层内部讨论与项目立项沟通。</p>
          <a className="button paper-button" href="/downloads/简益咨询-产品与服务白皮书.pdf" download>下载 PDF 白皮书 <span>↓</span></a>
        </div>
        <div className="paper-outline" aria-hidden="true">
          <div className="paper-cover"><span>简益咨询 / 2026</span><strong>让经营判断、<br />系统方案与项目执行，<br />站在同一张图上。</strong><p>产品与服务白皮书</p></div>
          <div className="paper-index"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span></div>
        </div>
      </section>

      <section className="section section-white faq-section">
        <div className="section-intro"><p className="section-code">10 / BEFORE WE START</p><h2>从一次有准备的项目沟通开始。</h2></div>
        <div className="faq-list">
          <article><span>01</span><h3>什么阶段适合找简益？</h3><p>问题尚未定义清楚时，可以先做经营诊断；课题明确时，可以进入专项方案；项目已立项时，可以由简益承担甲方 PMO。</p></article>
          <article><span>02</span><h3>能否只做诊断，不进入实施？</h3><p>可以。诊断本身形成独立的管理层决策材料，企业可以内部推进，也可以据此选择后续合作方式。</p></article>
          <article><span>03</span><h3>简益与软件供应商如何分工？</h3><p>简益定义业务需求、项目边界和验收原则，并协助甲方管理实施；软件供应商对产品、开发和技术交付负责。</p></article>
          <article><span>04</span><h3>第一次沟通需要准备什么？</h3><p>准备最希望解决的三个问题、涉及部门与系统、已有约束和内部负责人即可。信息不完整不影响先做判断。</p></article>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark inverse">简</span><span className="brand-copy"><strong>广州市简益信息技术有限公司</strong><small>Jianyi Consulting</small></span></a>
        <p>零售经营咨询 · IT 规划 · 项目管理 · 产品设计</p>
        <a href="#whitepaper">下载服务白皮书 ↑</a>
      </footer>
    </main>
  );
}

