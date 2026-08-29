export type WorkType = '实际项目' | '服务设计' | '培训与案例研究' | '研究与原型' | '方案设计';

export type WorkEntry = {
  slug: string;
  title: string;
  period: string;
  sortDate: string;
  datePrecision: '月' | '时间段';
  type: WorkType;
  status: string;
  publishedAt: string;
  updatedAt: string;
  summary: string;
  role: string;
  background: string;
  question: string;
  actions: string[];
  deliverables: string[];
  value: string[];
  boundaries: string[];
  reflection: string;
  topics: string[];
  relatedMethods: string[];
  relatedViews: string[];
};

export type MethodEntry = {
  slug: string;
  title: string;
  stage: '诊断' | '定义' | '推进' | '验证' | '复盘';
  question: string;
  principle: string;
  steps: string[];
  appliesTo: string[];
  limits: string[];
  evidence: string[];
};

export type ViewEntry = {
  slug: string;
  title: string;
  category: '零售经营与数字化' | '系统建设' | 'AI 应用' | '专业服务';
  version: string;
  asOf: string;
  thesis: string;
  arguments: string[];
  boundaries: string[];
  relatedWorks: string[];
};

export const topicDirectory = [
  { label: '零售系统全景', description: '从经营对象、核心动作、反馈和责任理解系统。', keywords: ['数字化门店', '经营系统', 'ERP'] },
  { label: '经营与品类', description: '门店、商品结构与经营动作怎样形成共同判断。', keywords: ['社区零售', '经营模式'] },
  { label: '业财与经营数据', description: '业务发生、库存成本和财务结果如何保持一致。', keywords: ['业财协同', '门店进销存', '销售分析'] },
  { label: '采购与供应链', description: '从真实成本、商品流动和组织责任理解采购。', keywords: ['零售数字化', '经营闭环'] },
  { label: '顾客、会员与客户声音', description: '把顾客触点、交易和反馈转成可管理的输入。', keywords: ['客户声音', '会员经营', '多业态协同'] },
  { label: '生鲜、仓储与物流', description: '在数据不完美的条件下管理损耗、库存和动作。', keywords: ['社区生鲜', '损耗控制', '数据质量'] },
  { label: '数字化与 AI', description: 'AI 场景成立前需要哪些数据、流程与责任条件。', keywords: ['零售 AI', 'AI 搜索', '数字化门店'] },
  { label: '系统规划与项目治理', description: '从蓝图、范围和责任机制推进复杂系统项目。', keywords: ['IT 规划', '业务蓝图', '共创项目'] },
  { label: '区域服务商与服务模式', description: '专业服务如何从销售产品走向定义和解决问题。', keywords: ['专业服务', '服务转型', '内容治理'] },
] as const;

export const works: WorkEntry[] = [
  {
    slug: 'professional-service-content-and-ai-search',
    title: '专业服务网站与 AI 搜索内容体系设计',
    period: '2026.08',
    sortDate: '2026-08-13',
    datePrecision: '月',
    type: '服务设计',
    status: '内容体系设计',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '把一家专业服务组织的能力、证据和内容发布连接起来，形成可持续维护的网站与 AI 搜索内容框架。',
    role: '负责内容架构、证据边界、栏目规划与持续更新机制的设计。',
    background: '专业服务网站容易停留在公司介绍和产品罗列，真实能力、工作方法和案例证据分散在文件、项目记录和人员经验里。',
    question: '怎样让网站既准确表达能力，又能持续增加有证据的内容，并适应搜索与 AI 问答的读取方式？',
    actions: [
      '先区分能力主张、项目证据、标准内容和发布渠道，避免先写口号再寻找依据。',
      '把服务能力拆成问题、方法、交付物、适用条件和证据要求。',
      '设计内容容器、审核状态和固定测试问题，形成发布后的检查机制。',
    ],
    deliverables: ['网站信息架构', '内容与证据对应表', '文章模板与更新流程', 'AI 搜索测试方法'],
    value: ['把零散资料转成可维护的专业表达。', '降低未经证实的宣传用语进入网站的风险。', '让新项目经验可以按统一规则补充到内容体系。'],
    boundaries: ['本项工作属于内容与服务设计，不代表已经验证搜索排名或询盘增长。', '外部平台是否引用内容，仍取决于抓取、可信度和具体查询。'],
    reflection: '专业服务网站的长期价值来自事实可以持续补充、观点可以被追溯，而不是一次性的页面包装。',
    topics: ['专业服务', '内容治理', 'AI 搜索'],
    relatedMethods: ['problem-to-system-boundary'],
    relatedViews: [],
  },
  {
    slug: 'customer-voice-and-retail-ai-sharing',
    title: '客户声音与零售 AI 应用分享',
    period: '2026.08',
    sortDate: '2026-08-01',
    datePrecision: '月',
    type: '培训与案例研究',
    status: '研究与分享',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '以客户反馈场景讨论零售 AI 为什么能落地、需要哪些前提，以及怎样避免把模型能力误写成经营结果。',
    role: '负责案例材料研究、证据整理、观点结构和分享内容设计；未把案例企业成果表述为本人实施成果。',
    background: '零售 AI 讨论经常从模型和功能开始，但高价值场景通常跨越门店、客服、商品和管理层，真正的困难在业务协同。',
    question: '客户反馈怎样从分散记录变成经营输入，AI 又应该在什么环节进入？',
    actions: [
      '把场景拆成统一收集、责任流转、问题归类、整改复核和经营复盘。',
      '区分先由组织完成的闭环与适合交给 AI 的重复判断。',
      '将“存在机制”“得到应用”和“经营结果改变”设为不同证据等级。',
    ],
    deliverables: ['案例研究底稿', '分享结构与讲稿', '可编辑演示材料', '证据与表达边界说明'],
    value: ['把 AI 讨论从功能展示拉回到业务前提。', '给管理者一套选择场景和判断准备度的提问框架。'],
    boundaries: ['案例来自教学与研究材料，不公开机构、人员和经营数字。', '缺少整改后的连续经营指标时，只说明机制与路径，不宣称投资回报。'],
    reflection: 'AI 能放大已经被组织好的能力，也会放大不清晰的流程和责任。先把业务做成可管理的闭环，比先选模型更重要。',
    topics: ['零售 AI', '客户声音', '经营闭环'],
    relatedMethods: ['case-to-mechanism'],
    relatedViews: ['ai-needs-operating-closure', 'customer-voice-is-operating-input'],
  },
  {
    slug: 'multi-format-membership-feasibility',
    title: '多业态会员体系可行性研究',
    period: '2026.07',
    sortDate: '2026-07-24',
    datePrecision: '月',
    type: '研究与原型',
    status: '可行性研究',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '围绕商业空间、零售和服务业态，研究统一会员体系成立所需的经营前提、利益机制和最小验证路径。',
    role: '负责问题定义、同类实践研究、经营前提判断和验证路径设计。',
    background: '统一积分或统一会员容易被当作系统连接项目，但真正决定成败的是各业态是否愿意交换权益、数据和顾客触点。',
    question: '多业态会员体系什么时候值得做，第一阶段应该验证系统连接还是经营合作？',
    actions: [
      '区分支付、积分、权益、身份和数据五种不同连接。',
      '比较不同类型实践的经营目的、利益结构和组织条件。',
      '把第一阶段压缩为少数业态、少数权益和可追踪交易的验证。',
    ],
    deliverables: ['可行性判断', '同类实践比较', '会员价值交换框架', '分阶段验证建议'],
    value: ['避免把复杂的经营合作简化成会员平台采购。', '帮助决策者先确认参与方为什么合作，再讨论技术方案。'],
    boundaries: ['该项工作为可行性研究，不代表统一会员体系已经实施。', '同类案例只用于比较机制，不直接套用其公开数据。'],
    reflection: '会员体系的核心不是账户是否统一，而是企业是否拥有持续提供价值、识别交易和调整权益的能力。',
    topics: ['会员经营', '多业态协同', '可行性研究'],
    relatedMethods: ['case-to-mechanism', 'small-pilot-with-guardrails'],
    relatedViews: ['digitalization-changes-management'],
  },
  {
    slug: 'digital-store-and-shelf-research',
    title: '数字化门店与数字化货架研究',
    period: '2026.07',
    sortDate: '2026-07-22',
    datePrecision: '月',
    type: '研究与原型',
    status: '阶段性研究',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '从调价、履约、员工任务和顾客交互重新理解门店设备，形成“门店是经营节点”的阶段性观察。',
    role: '负责资料研究、场景拆解、价值判断和试点边界设计。',
    background: '电子价签、数字货架和门店终端常被按硬件功能采购，设备之间缺少共同的经营目标和流程连接。',
    question: '一项门店技术投入究竟改变了什么经营动作，怎样判断它值得进入试点？',
    actions: [
      '把门店拆成交易、履约、任务、数据采集和顾客服务节点。',
      '按动作频率、错误成本、数据前提和组织责任评估场景。',
      '区分设备能力、系统连接和经营结果三个层次。',
    ],
    deliverables: ['数字化门店场景图', '设备与经营动作对应表', '试点判断清单', '阶段性观点文章'],
    value: ['帮助项目从“买什么设备”转向“改变什么动作”。', '为后续试点明确数据、流程和验收前提。'],
    boundaries: ['这是当前阶段的研究判断，不是零售行业标准。', '不同业态、规模和自营比例会改变技术投入的经济性。'],
    reflection: '门店技术的价值不在设备数量，而在它能否缩短反馈、减少摩擦，并把一线动作连接到经营决策。',
    topics: ['数字化门店', '电子价签', '经营系统'],
    relatedMethods: ['problem-to-system-boundary', 'small-pilot-with-guardrails'],
    relatedViews: ['store-as-operating-node', 'retail-system-panorama-v01'],
  },
  {
    slug: 'fresh-loss-reduction-pilot-design',
    title: '社区生鲜减损小范围试点设计',
    period: '2026.07',
    sortDate: '2026-07-20',
    datePrecision: '月',
    type: '研究与原型',
    status: '试点设计',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '在库存和报损数据不完全可信的条件下，设计一个由少量商品、收档记录和店长动作构成的减损验证。',
    role: '负责数据可信度判断、试点范围、异常规则、店长动作和验收条件设计。',
    background: '社区生鲜门店的销售金额通常较可靠，但进货单位、现场剩余、隐性损耗和报损原因容易失真，直接做精准库存或自动补货会放大误差。',
    question: '在数据不完美、门店记录能力有限时，怎样先验证能否减少无效损失？',
    actions: [
      '将数据分为强、中、弱约束，明确哪些可以直接计算、哪些只能提示异常。',
      '把范围限制在少量高损耗、高频商品，降低门店记录负担。',
      '同时设置损耗、销售和执行约束，避免靠少进货制造表面改善。',
    ],
    deliverables: ['项目判断', '试点商品选择规则', '数据字段与异常规则', '店长手册与复盘模板'],
    value: ['把一个容易扩张的软件需求缩小成可验证的经营问题。', '在投资扩大前先确认门店能否持续记录、规则能否触发有效动作。'],
    boundaries: ['该项工作是试点方案，不宣称已产生门店经营结果。', '工具输出风险提醒，不输出“准确库存”或自动订货结论。'],
    reflection: '数据条件不足时，好的方案不是假装精确，而是把需要人工确认的范围缩小到可以坚持。',
    topics: ['社区生鲜', '损耗控制', '数据质量'],
    relatedMethods: ['trusted-data-first', 'small-pilot-with-guardrails'],
    relatedViews: ['system-go-live-is-not-outcome'],
  },
  {
    slug: 'commercial-space-operating-model-co-design',
    title: '商业空间运营模式共创方案',
    period: '2026.07',
    sortDate: '2026-07-18',
    datePrecision: '月',
    type: '方案设计',
    status: '共创方案',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '围绕顾客、商户、交易和运营团队之间的关系，设计从少数参与方开始验证的新运营机制。',
    role: '参与问题梳理、目标模式、试点范围、责任分工和阶段验收设计。',
    background: '商业空间希望更直接地经营顾客和交易，但商户利益、系统接入、运营动作和财务结算彼此关联，不能只靠一次系统上线解决。',
    question: '怎样在不一次性改变全部商户和系统的前提下，验证新的经营模式能否运行？',
    actions: [
      '明确顾客、平台、商户和运营团队各自获得什么、承担什么。',
      '选择少量参与方跑通交易、权益、运营和复盘闭环。',
      '用准入条件、阶段门和退出条件控制试点风险。',
    ],
    deliverables: ['运营模式图', '试点方案', '角色责任表', '阶段验收与扩面原则'],
    value: ['把宏大的转型目标变成可讨论、可执行的验证项目。', '让系统建设服从经营模式和利益机制。'],
    boundaries: ['本记录反映方案设计工作，不把建议路径表述成已经实现的经营成果。', '具体政策、投入和周期不公开。'],
    reflection: '触及商户和部门利益的项目，首先需要一套公平、可解释、允许退出的验证机制。',
    topics: ['商业运营', '共创项目', '经营模式'],
    relatedMethods: ['small-pilot-with-guardrails', 'multi-party-project-governance'],
    relatedViews: ['digitalization-changes-management'],
  },
  {
    slug: 'regional-technology-service-transformation',
    title: '区域技术服务者转型路径研究与演讲设计',
    period: '2026.06',
    sortDate: '2026-06-22',
    datePrecision: '月',
    type: '培训与案例研究',
    status: '研究与演讲材料',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '研究区域软件与集成服务者在产品标准化、客户关系和 AI 变化下，如何从交付产品转向定义问题和组织解决。',
    role: '负责行业材料研究、观点梳理、叙事结构和演讲内容设计。',
    background: '区域服务者熟悉客户、现场和系统，但产品差异缩小、项目毛利承压，单纯依赖销售与实施越来越难建立长期价值。',
    question: '本地信任和实施经验怎样转化为更稳定的诊断、方案和长期服务能力？',
    actions: [
      '区分产品能力、服务能力、客户关系和问题定义能力。',
      '从客户决策过程反推区域服务者应该补充的角色。',
      '设计从交流、诊断、小项目验证到持续服务的路径。',
    ],
    deliverables: ['行业研究稿', '演讲结构', '转型路径图', '服务角色讨论框架'],
    value: ['把“卖什么”转换为“帮助客户解决什么”。', '为区域服务者讨论新的收入与责任边界提供共同语言。'],
    boundaries: ['内容属于行业研究与演讲设计，不代表相关组织已经完成转型。', '商业模式仍需真实项目、投入和续费行为验证。'],
    reflection: '本地关系是一种进入条件，只有形成可重复的问题定义和交付机制，才能变成长期专业能力。',
    topics: ['专业服务', '服务转型', '区域市场'],
    relatedMethods: ['problem-to-system-boundary', 'case-to-mechanism'],
    relatedViews: [],
  },
  {
    slug: 'five-retail-digital-cases-for-training',
    title: '五个零售数字化案例的教学材料整理',
    period: '2026.05—06',
    sortDate: '2026-06-01',
    datePrecision: '时间段',
    type: '培训与案例研究',
    status: '教材与课程设计',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '把会员经营、业财协同、生鲜供应链、采购判断和客户反馈五组材料，重构成面向管理者的经营问题。',
    role: '负责来源整理、案例结构、讲稿与演示材料设计；案例来自外部实践和访谈材料。',
    background: '数字化案例常被讲成功能和数字，听众容易记住工具，却看不见背后的经营对象、组织冲突和管理机制。',
    question: '怎样让管理者从别人的案例中识别自己的经营问题，而不是照搬系统和动作？',
    actions: [
      '每个案例先写问题、冲突和变化，再整理实现机制。',
      '把五个案例统一到经营对象、财务角色、成本结构、采购判断和客户声音。',
      '将案例数据、访谈内容、推断和讲者观点分层标注。',
    ],
    deliverables: ['五组案例底稿', '课程结构与逐字稿', '演示材料', '管理者自查问题'],
    value: ['让案例成为讨论经营管理变化的媒介。', '形成可按不同培训时长组合的内容模块。'],
    boundaries: ['这是一项教材与内容设计工作，不等于参与了五个案例企业的项目。', '公开版本不使用机构名、个人名和精确经营数据。'],
    reflection: '案例真正可复用的部分是问题、冲突、前提和机制；结果数字只能说明特定企业在特定阶段发生过什么。',
    topics: ['零售数字化', '案例研究', '管理培训'],
    relatedMethods: ['case-to-mechanism'],
    relatedViews: ['digitalization-changes-management', 'customer-voice-is-operating-input'],
  },
  {
    slug: 'community-retail-sales-data-diagnosis',
    title: '社区零售销售数据体检试验',
    period: '2026.05',
    sortDate: '2026-05-23',
    datePrecision: '月',
    type: '研究与原型',
    status: '数据试验',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '用销售明细完成字段清洗、分类映射和第一轮经营体检，验证不同门店数据进入统一分析框架的可行性。',
    role: '负责分析框架、字段与分类规则、数据质量检查、结果解释和后续工具设计。',
    background: '不同零售门店的商品编码、分类树和销售字段差异很大，直接套报表会产生看似精确、实际错误的判断。',
    question: '怎样先从相对可信的销售数据出发，形成可解释、可复用的第一轮诊断？',
    actions: [
      '把单据号、商品编码和条码按文本处理，先修复数据类型问题。',
      '还原原始分类树，再映射到统一分析分类。',
      '按销售、交易、时段、品类和商品表现输出观察，并标记单日样本限制。',
    ],
    deliverables: ['清洗与映射工作簿', '数据质量检查', '销售体检摘要', '指标库与工具设计'],
    value: ['证明统一分析框架必须从字段和分类映射开始。', '将数据错误和经营判断分开，减少错误指标造成的误导。'],
    boundaries: ['本次属于单日数据试验，不能用于稳定趋势、购物篮关系或库存判断。', '原始客户信息和精确经营数据不公开。'],
    reflection: '分析工作的第一步不是画图，而是判断数据代表什么、在哪里会失真，以及结论最多能走到哪一步。',
    topics: ['社区零售', '销售分析', '数据质量'],
    relatedMethods: ['trusted-data-first'],
    relatedViews: ['system-go-live-is-not-outcome'],
  },
  {
    slug: 'erp-review-and-next-it-roadmap',
    title: 'ERP 项目复盘与下一阶段 IT 规划',
    period: '2026.01—03',
    sortDate: '2026-03-01',
    datePrecision: '时间段',
    type: '实际项目',
    status: '项目复盘与规划',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '在一期系统运行基础上，回看业务断点、阶段成果和未完成条件，形成下一阶段的系统与管理议题。',
    role: '以项目顾问角色参与复盘、管理目标梳理、问题优先级和后续 IT 路径设计。',
    background: '系统切换后，企业需要从“功能是否上线”转向“管理目标是否具备数据和流程基础”，同时避免二期需求再次变成功能清单。',
    question: '一期完成了哪些能力，哪些结果尚未被证明，下一阶段应该优先补什么？',
    actions: [
      '沿原始痛点检查业务、数据和财务链路是否形成闭环。',
      '把库存、门店经营、绩效和专业能力拆成不同管理目标。',
      '区分立即改进项、运行验证项和后续规划项。',
    ],
    deliverables: ['项目复盘', '能力与缺口清单', '下一阶段 IT 规划', '经营复盘建议'],
    value: ['帮助管理层用管理能力而不是功能数量评价项目。', '为后续建设明确优先级和前置条件。'],
    boundaries: ['部分能力处于运行与验证阶段，不把上线状态写成持续经营结果。', '内部项目名称、人员、供应商和准确指标不公开。'],
    reflection: '复盘的作用不是证明项目成功，而是把已经形成的能力、仍然存在的断点和下一步责任重新说清楚。',
    topics: ['ERP', '项目复盘', 'IT 规划'],
    relatedMethods: ['multi-party-project-governance'],
    relatedViews: ['system-go-live-is-not-outcome'],
  },
  {
    slug: 'store-inventory-and-finance-data-chain',
    title: '门店进销存与业财数据链路重建',
    period: '2025.10—12',
    sortDate: '2025-12-01',
    datePrecision: '时间段',
    type: '实际项目',
    status: '系统实施与切换',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '围绕门店销售、库存、成本、费用和利润，逐项定义编码映射、业务单据和财务规则。',
    role: '参与业务规则定义、系统协同、数据准备、测试切换与问题推进。',
    background: '门店交易发生在外部收银体系，企业内部的商品、库存和财务数据彼此分离，经营团队难以及时看见单店业务状态。',
    question: '怎样让外部销售、内部商品、库存成本和财务核算形成可追踪的数据链路？',
    actions: [
      '建立外部销售编码与内部商品、订货成分之间的映射规则。',
      '逐类定义直送、退货、调拨、报损、盘点和赠品等真实场景。',
      '让收入、成本、损耗和费用按统一规则进入门店经营核算。',
      '通过数据准备、场景测试和切换清单推进上线。',
    ],
    deliverables: ['编码映射规则', '业务场景与单据规则', '业财核算逻辑', '测试与切换清单'],
    value: ['使门店经营信息从滞后的人工汇总转向更及时的系统记录。', '为门店级经营复盘提供收入、成本和费用的一致基础。'],
    boundaries: ['公开内容只描述机制与管理价值，不披露客户、供应商和准确时间指标。', '连续出表和经营改善仍需要稳定运行数据验证。'],
    reflection: '业财一体不是接口项目。只有每一种业务动作都能解释库存怎样变化、成本怎样结转、责任落在哪里，财务结果才有经营意义。',
    topics: ['ERP', '门店进销存', '业财协同'],
    relatedMethods: ['business-blueprint-from-current-state', 'multi-party-project-governance'],
    relatedViews: ['digitalization-changes-management', 'system-go-live-is-not-outcome'],
  },
  {
    slug: 'retail-erp-current-state-and-blueprint',
    title: '零售 ERP 现状诊断与业务蓝图',
    period: '2025.07—09',
    sortDate: '2025-09-01',
    datePrecision: '时间段',
    type: '实际项目',
    status: '调研与蓝图',
    publishedAt: '2026-08-29',
    updatedAt: '2026-08-29',
    summary: '从门店、仓库、采购、销售和财务的真实动作出发，识别系统断点并形成 ERP 建设蓝图。',
    role: '以项目顾问角色参与访谈、现状梳理、问题定义、目标流程和系统边界设计。',
    background: '企业已经使用多个业务和财务工具，但关键数据依赖人工汇总，门店进销存、补货和利润核算缺少共同定义。',
    question: '哪些问题源于流程和责任，哪些需要系统解决，第一阶段应该建立什么基础？',
    actions: [
      '访谈业务、门店、仓库与财务角色，记录真实流程和例外场景。',
      '用现状流程、问题地图和数据流定位断点。',
      '定义目标流程、系统边界、主数据和分阶段实施范围。',
    ],
    deliverables: ['现状调研底稿', '问题与风险地图', '目标业务蓝图', '系统范围与阶段建议'],
    value: ['让业务、管理层、IT 和供应商围绕同一份事实讨论。', '避免在问题尚未定义时直接进入产品选型和功能开发。'],
    boundaries: ['不公开企业名称、人员、供应商和内部流程细节。', '蓝图是进入实施的共同定义，不等于项目结果已经实现。'],
    reflection: '业务蓝图的价值不是画出一张理想流程，而是把冲突、例外、责任和数据条件提前暴露出来。',
    topics: ['ERP', '现状诊断', '业务蓝图'],
    relatedMethods: ['problem-to-system-boundary', 'business-blueprint-from-current-state'],
    relatedViews: ['digitalization-changes-management'],
  },
];

export const methods: MethodEntry[] = [
  {
    slug: 'problem-to-system-boundary',
    title: '从经营问题判断系统建设边界',
    stage: '诊断',
    question: '一个经营问题究竟应该改流程、改责任、改数据，还是建设系统？',
    principle: '先定义需要改变的经营动作，再判断技术在其中承担什么角色。',
    steps: ['把现象改写成管理者需要回答的问题。', '识别涉及的角色、流程、数据和利益关系。', '区分系统可解决、需组织改变和暂不具备条件的部分。', '形成范围、依赖和不做事项。'],
    appliesTo: ['系统规划与选型', '门店数字化项目', '复杂经营问题诊断'],
    limits: ['缺少业务负责人时，系统边界无法真正确认。', '不能用功能清单代替现场事实。'],
    evidence: ['retail-erp-current-state-and-blueprint', 'digital-store-and-shelf-research', 'professional-service-content-and-ai-search'],
  },
  {
    slug: 'business-blueprint-from-current-state',
    title: '从现状调研形成业务蓝图',
    stage: '定义',
    question: '怎样把不同部门的说法转换成一份可以实施和验收的共同定义？',
    principle: '蓝图必须同时容纳正常流程、例外场景、责任、数据和系统边界。',
    steps: ['按角色和业务事件访谈，不只按系统模块提问。', '记录现状动作、凭据、等待、返工和例外。', '将问题定位到流程、规则、数据或责任。', '设计目标流程并明确阶段范围和验收条件。'],
    appliesTo: ['ERP 与业务系统建设', '跨部门流程改造', '产品与数据模型设计'],
    limits: ['蓝图需要业务 Owner 确认，顾问不能替代客户做经营决策。', '目标流程必须接受数据和资源约束。'],
    evidence: ['retail-erp-current-state-and-blueprint', 'store-inventory-and-finance-data-chain'],
  },
  {
    slug: 'trusted-data-first',
    title: '按约束强弱判断数据可信度',
    stage: '诊断',
    question: '数据不完整时，哪些指标还能用于行动，哪些只能提示风险？',
    principle: '先判断数据怎样产生、由什么约束，再决定它能支持什么结论。',
    steps: ['识别强约束数据，例如交易与结算。', '识别需要抽核的中约束数据。', '标出依赖人工、容易漏记的弱约束数据。', '让分析输出与证据等级对应。'],
    appliesTo: ['门店经营诊断', '库存与损耗分析', '经营报表设计'],
    limits: ['风险提示不能包装成准确库存或预测。', '数据质量问题需要业务流程共同修复。'],
    evidence: ['community-retail-sales-data-diagnosis', 'fresh-loss-reduction-pilot-design'],
  },
  {
    slug: 'small-pilot-with-guardrails',
    title: '用小范围试点和约束指标验证方案',
    stage: '验证',
    question: '怎样在投入扩大前判断一个方案是否真的值得继续？',
    principle: '缩小对象和动作，同时设置结果指标、约束指标和执行指标。',
    steps: ['选择问题明显且具备基本条件的对象。', '明确基线、动作、负责人和记录负担。', '设定结果、约束与执行指标。', '按固定节奏复盘，并预先约定扩大、调整和停止条件。'],
    appliesTo: ['经营改善试点', '数字化工具验证', '新运营模式共创'],
    limits: ['试点结果不能无条件外推。', '没有基线和执行记录时无法判断动作有效性。'],
    evidence: ['fresh-loss-reduction-pilot-design', 'commercial-space-operating-model-co-design', 'multi-format-membership-feasibility'],
  },
  {
    slug: 'multi-party-project-governance',
    title: '用责任、里程碑、风险和验收推进多方项目',
    stage: '推进',
    question: '当业务、IT、供应商和管理层目标不同，怎样让项目持续向前？',
    principle: '把讨论变成有责任人、有条件、有截止点和有升级路径的项目机制。',
    steps: ['明确项目目标、范围、角色和决策机制。', '把关键依赖纳入阶段门。', '持续管理问题、风险、变更和待决策事项。', '在测试、切换、验收和交接前逐项检查条件。'],
    appliesTo: ['ERP 与系统实施', '跨部门项目', '多供应商协同'],
    limits: ['项目机制不能替代管理层做关键取舍。', '只跟踪任务、不管理依赖和决策，仍会造成表面进度。'],
    evidence: ['store-inventory-and-finance-data-chain', 'erp-review-and-next-it-roadmap', 'commercial-space-operating-model-co-design'],
  },
  {
    slug: 'case-to-mechanism',
    title: '从案例提炼经营机制，而不是照搬功能和结果',
    stage: '复盘',
    question: '怎样让外部案例帮助理解自己的问题，又不制造错误类比？',
    principle: '保留案例的前提、冲突、行动路径和组织机制，谨慎使用结果数字。',
    steps: ['先确认来源和案例发生的条件。', '按问题、冲突、行动、机制和结果整理。', '区分事实、案例方解释、个人推断和建议。', '把案例转成听众可以自查的问题。'],
    appliesTo: ['管理培训', '行业研究', '方案前期讨论'],
    limits: ['不能把公开案例写成自己的项目业绩。', '不能用单一企业结果证明方法普遍有效。'],
    evidence: ['five-retail-digital-cases-for-training', 'customer-voice-and-retail-ai-sharing', 'regional-technology-service-transformation'],
  },
];

export const views: ViewEntry[] = [
  {
    slug: 'digitalization-changes-management',
    title: '数字化改变的是经营管理方式，不只是工具',
    category: '零售经营与数字化',
    version: 'v1.0',
    asOf: '2026.08',
    thesis: '系统只有进入经营对象、责任、规则和反馈机制，才构成真正的数字化变化。',
    arguments: ['会员系统改变的可能是经营对象。', '业财系统改变的可能是财务参与经营的方式。', '供应链系统改变的可能是成本和责任的可见性。', '客户反馈系统改变的可能是问题进入管理层视野的方式。'],
    boundaries: ['不同企业只能从自己的约束和优先问题开始。', '相同工具不会自动产生相同结果。'],
    relatedWorks: ['retail-erp-current-state-and-blueprint', 'store-inventory-and-finance-data-chain', 'five-retail-digital-cases-for-training'],
  },
  {
    slug: 'system-go-live-is-not-outcome',
    title: '系统上线不等于价值实现',
    category: '系统建设',
    version: 'v1.0',
    asOf: '2026.08',
    thesis: '上线只能证明系统具备运行条件；经营动作改变、持续使用和结果变化需要另外验证。',
    arguments: ['交付物、功能完成和上线是项目证据。', '使用频率、流程合规和数据质量是运行证据。', '成本、效率、损耗或经营结果变化才是业务证据。'],
    boundaries: ['不是所有项目都能在短期内获得经营结果。', '结果变化还要排除市场、组织和其他同步行动的影响。'],
    relatedWorks: ['erp-review-and-next-it-roadmap', 'store-inventory-and-finance-data-chain', 'fresh-loss-reduction-pilot-design'],
  },
  {
    slug: 'ai-needs-operating-closure',
    title: 'AI 进入高价值业务前，要先有经营闭环',
    category: 'AI 应用',
    version: 'v1.0',
    asOf: '2026.08',
    thesis: '高价值 AI 场景通常跨部门；数据、流程、责任和反馈没有组织好，模型难以持续创造价值。',
    arguments: ['先有统一入口，AI 才能看见完整问题。', '先有责任流转，分类结果才能推动行动。', '先有复盘机制，模型输出才可能被验证和纠正。'],
    boundaries: ['单点识别和内容生成可以在较轻条件下使用。', '高价值不代表应一次性建设复杂平台。'],
    relatedWorks: ['customer-voice-and-retail-ai-sharing'],
  },
  {
    slug: 'customer-voice-is-operating-input',
    title: '客户声音只有推动整改并验证变化，才可能成为经营输入',
    category: '零售经营与数字化',
    version: 'v1.0',
    asOf: '2026.08',
    thesis: '记录和回复投诉只完成了服务动作；把重复问题连接到商品、门店和流程改进，才进入经营管理。',
    arguments: ['分散渠道需要先形成统一的问题池。', '问题需要分类、责任人、整改和复核。', '重复问题和变化趋势比单一工单更有经营意义。'],
    boundaries: ['客户反馈可能存在偏差，不能直接代表全部顾客。', '整改是否有效需要后续数据和顾客反馈验证。'],
    relatedWorks: ['five-retail-digital-cases-for-training', 'customer-voice-and-retail-ai-sharing'],
  },
  {
    slug: 'store-as-operating-node',
    title: '门店可以被理解为交易、履约、数据和服务节点',
    category: '零售经营与数字化',
    version: 'v0.1',
    asOf: '2026.08',
    thesis: '全渠道环境下，门店技术不应只围绕收银和库存，而要服务于调价、履约、员工任务、顾客互动和数据反馈。',
    arguments: ['交易把顾客、商品和价格连接起来。', '履约让门店成为线上订单的一部分。', '任务系统把总部策略转成一线动作。', '现场反馈帮助经营系统持续修正。'],
    boundaries: ['这是当前阶段的观察，不是行业统一模型。', '门店规模、业态、人员成本和自营比例会改变节点价值。'],
    relatedWorks: ['digital-store-and-shelf-research'],
  },
  {
    slug: 'retail-system-panorama-v01',
    title: '零售系统全景视图 v0.1',
    category: '系统建设',
    version: 'v0.1 · 阶段性主观观点',
    asOf: '2026.08',
    thesis: '零售系统可以从经营对象、核心动作、反馈闭环和组织责任四层理解，而不只按软件模块分类。',
    arguments: ['经营对象包括顾客、商品、门店、供应商和资金。', '高频动作包括选品、定价、采购、补货、履约和服务。', '反馈来自交易、库存、成本、客户声音和执行状态。', '责任与指标决定系统输出是否真正进入管理。'],
    boundaries: ['该视图服务于当前的项目判断与交流，不构成行业标准。', '后续会随着项目经验和证据增加持续修订。'],
    relatedWorks: ['digital-store-and-shelf-research', 'five-retail-digital-cases-for-training', 'retail-erp-current-state-and-blueprint'],
  },
];

export const sortedWorks = [...works].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export function getWork(slug: string) {
  return works.find((item) => item.slug === slug);
}

export function getMethod(slug: string) {
  return methods.find((item) => item.slug === slug);
}

export function getView(slug: string) {
  return views.find((item) => item.slug === slug);
}
