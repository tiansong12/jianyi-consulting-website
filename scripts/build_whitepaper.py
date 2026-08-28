from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "简益咨询-产品与服务白皮书.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

W, H = A4
M = 16 * mm
CONTENT_W = W - 2 * M

PAPER = HexColor("#F5F4EF")
WHITE = HexColor("#FFFFFF")
INK = HexColor("#111815")
MUTED = HexColor("#58635E")
GREEN = HexColor("#123F33")
GREEN_DARK = HexColor("#0B2F27")
GREEN_MID = HexColor("#2E6657")
GREEN_PALE = HexColor("#E4ECE7")
LINE = HexColor("#C9CEC9")
ORANGE = HexColor("#D95F32")
ORANGE_PALE = HexColor("#F2E4DC")

HEITI_LIGHT = "/System/Library/Fonts/STHeiti Light.ttc"
HEITI_MEDIUM = "/System/Library/Fonts/STHeiti Medium.ttc"
SONGTI = "/System/Library/Fonts/Supplemental/Songti.ttc"
pdfmetrics.registerFont(TTFont("PF", HEITI_LIGHT, subfontIndex=0))
pdfmetrics.registerFont(TTFont("PFM", HEITI_MEDIUM, subfontIndex=0))
pdfmetrics.registerFont(TTFont("PFS", HEITI_MEDIUM, subfontIndex=0))
pdfmetrics.registerFont(TTFont("ST", SONGTI, subfontIndex=6))


def style(font="PF", size=9, leading=None, color=INK, align=TA_LEFT):
    return ParagraphStyle(
        name=f"{font}-{size}-{leading}-{align}",
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.55,
        textColor=color,
        alignment=align,
        allowWidows=0,
        allowOrphans=0,
        splitLongWords=False,
    )


def paragraph(c, text, x, y_top, width, font="PF", size=9, leading=None,
              color=INK, align=TA_LEFT, max_height=400):
    p = Paragraph(text, style(font, size, leading, color, align))
    _, h = p.wrap(width, max_height)
    p.drawOn(c, x, y_top - h)
    return h


def rect(c, x, y, w, h, fill=None, stroke=LINE, line_width=0.7):
    c.saveState()
    c.setLineWidth(line_width)
    if stroke:
        c.setStrokeColor(stroke)
    if fill:
        c.setFillColor(fill)
    c.rect(x, y, w, h, stroke=1 if stroke else 0, fill=1 if fill else 0)
    c.restoreState()


def rule(c, x1, y1, x2, y2, color=LINE, width=0.7):
    c.saveState()
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)
    c.restoreState()


def page_base(c, page_num, section):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(GREEN)
    c.rect(0, H - 4 * mm, W, 4 * mm, fill=1, stroke=0)
    paragraph(c, section.upper(), M, H - 12 * mm, 90 * mm, "PFS", 6.7, 9, GREEN_MID)
    rule(c, M, 13 * mm, W - M, 13 * mm, LINE, 0.55)
    paragraph(c, "简益咨询  JIANYI CONSULTING", M, 10.2 * mm, 70 * mm, "PFM", 6.2, 8, MUTED)
    paragraph(c, f"{page_num:02d} / 09", W - M - 25 * mm, 10.2 * mm, 25 * mm,
              "PFM", 6.2, 8, MUTED, TA_RIGHT)


def page_heading(c, kicker, title, intro=None):
    y = H - 25 * mm
    paragraph(c, kicker, M, y, CONTENT_W, "PFS", 7, 9, ORANGE)
    y -= 8 * mm
    h = paragraph(c, title, M, y, CONTENT_W, "ST", 22, 29, GREEN_DARK)
    y -= h + 4 * mm
    rule(c, M, y, M + 18 * mm, y, ORANGE, 2.1)
    y -= 5 * mm
    if intro:
        h = paragraph(c, intro, M, y, CONTENT_W, "PF", 9.3, 15, MUTED)
        y -= h + 4 * mm
    return y


def tag(c, text, x, y, w, fill=GREEN, color=WHITE):
    rect(c, x, y, w, 7 * mm, fill, None)
    paragraph(c, text, x + 2.5 * mm, y + 5.25 * mm, w - 5 * mm, "PFS", 6.6, 8, color)


def bullets(c, items, x, y_top, width, size=8.2, gap=3.2 * mm, color=INK):
    y = y_top
    for item in items:
        c.setFillColor(ORANGE)
        c.circle(x + 1.2 * mm, y - 2.7 * mm, 0.7 * mm, fill=1, stroke=0)
        h = paragraph(c, item, x + 4 * mm, y, width - 4 * mm, "PF", size, size * 1.55, color)
        y -= h + gap
    return y


def labeled_box(c, x, y, w, h, label_text, title, body, fill=WHITE, accent=GREEN):
    rect(c, x, y, w, h, fill, LINE, 0.75)
    c.setFillColor(accent)
    c.rect(x, y + h - 2.2 * mm, w, 2.2 * mm, fill=1, stroke=0)
    paragraph(c, label_text, x + 5 * mm, y + h - 9 * mm, w - 10 * mm, "PFS", 6.3, 8, accent)
    paragraph(c, title, x + 5 * mm, y + h - 17 * mm, w - 10 * mm, "ST", 12, 16, GREEN_DARK)
    paragraph(c, body, x + 5 * mm, y + h - 31 * mm, w - 10 * mm, "PF", 7.8, 12.2, MUTED)


def draw_cover(c):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(GREEN_DARK)
    c.rect(0, H - 67 * mm, W, 67 * mm, fill=1, stroke=0)
    c.setFillColor(ORANGE)
    c.rect(M, H - 31 * mm, 24 * mm, 2.2 * mm, fill=1, stroke=0)
    paragraph(c, "JIANYI CONSULTING", M, H - 38 * mm, CONTENT_W, "PFS", 8, 10, WHITE)
    paragraph(c, "简益咨询", M, H - 92 * mm, CONTENT_W, "ST", 31, 38, GREEN_DARK)
    paragraph(c, "产品与服务白皮书", M, H - 108 * mm, CONTENT_W, "ST", 22, 28, GREEN_DARK)
    paragraph(c, "让经营判断、系统方案与项目执行，<br/>站在同一张图上。",
              M, H - 139 * mm, CONTENT_W, "ST", 18, 28, INK)
    y = H - 184 * mm
    cols = ["零售经营咨询", "IT规划", "项目管理", "产品设计"]
    cw = CONTENT_W / 4
    for i, txt in enumerate(cols):
        x = M + i * cw
        rect(c, x, y, cw, 21 * mm, WHITE, LINE, 0.7)
        c.setFillColor(ORANGE if i == 0 else GREEN)
        c.rect(x, y + 18.8 * mm, cw, 2.2 * mm, fill=1, stroke=0)
        paragraph(c, f"0{i+1}", x + 4 * mm, y + 14 * mm, cw - 8 * mm, "PFS", 6.5, 8, MUTED)
        paragraph(c, txt, x + 4 * mm, y + 8 * mm, cw - 8 * mm, "PFM", 8.3, 11, GREEN_DARK)
    paragraph(c, "面向零售企业管理层、业务负责人、IT负责人和项目团队",
              M, 45 * mm, CONTENT_W, "PF", 8, 12, MUTED)
    rule(c, M, 29 * mm, W - M, 29 * mm, LINE, 0.6)
    paragraph(c, "2026 · VERSION 1.0", M, 24 * mm, 60 * mm, "PFM", 6.5, 8, GREEN_MID)
    paragraph(c, "简益咨询  JIANYI CONSULTING", W - M - 78 * mm, 24 * mm, 78 * mm,
              "PFS", 6.5, 8, GREEN_MID, TA_RIGHT)
    c.showPage()


def draw_why(c):
    page_base(c, 2, "01 / WHY JIANYI")
    y = page_heading(c, "WHY JIANYI", "企业需要的，往往不只是一个方案",
                     "许多零售项目的问题，不在于团队不努力，而在于经营目标、业务规则、系统能力和项目责任没有被放在同一套逻辑中管理。")
    labels = [
        ("01  表面现象", ["报表很多，行动很少", "系统很多，流程仍靠人工", "会议很多，问题持续累积"]),
        ("02  深层问题", ["目标口径没有统一", "规则与系统彼此脱节", "责任边界缺少闭环"]),
        ("03  管理后果", ["决策速度变慢", "跨部门返工增加", "经验难以复制"]),
    ]
    box_h = 43 * mm
    gap = 7 * mm
    for idx, (head, items) in enumerate(labels):
        by = y - box_h - idx * (box_h + gap)
        fill = GREEN_DARK if idx == 1 else WHITE
        fg = WHITE if idx == 1 else GREEN_DARK
        rect(c, M, by, CONTENT_W, box_h, fill, GREEN_DARK if idx == 1 else LINE, 0.8)
        paragraph(c, head, M + 6 * mm, by + box_h - 9 * mm, 40 * mm, "PFS", 7, 9,
                  ORANGE if idx == 1 else GREEN_MID)
        item_w = (CONTENT_W - 58 * mm) / 3
        for j, item in enumerate(items):
            ix = M + 50 * mm + j * item_w
            if j:
                rule(c, ix, by + 8 * mm, ix, by + box_h - 8 * mm,
                     HexColor("#55796F") if idx == 1 else LINE, 0.55)
            paragraph(c, item, ix + 5 * mm, by + box_h - 17 * mm, item_w - 10 * mm,
                      "ST", 10, 15, fg)
    bottom = 26 * mm
    rect(c, M, bottom, CONTENT_W, 22 * mm, GREEN_PALE, None)
    paragraph(c, "简益的工作：把经营问题翻译成可执行的项目，把项目交付转化为可验证的经营改进。",
              M + 7 * mm, bottom + 15 * mm, CONTENT_W - 14 * mm, "PFM", 9, 14, GREEN_DARK)
    c.showPage()


def draw_matrix(c):
    page_base(c, 3, "02 / SERVICE MATRIX")
    y = page_heading(c, "SERVICE MATRIX", "四类服务，对应四类关键管理决策",
                     "从问题定义到实施落地，服务可以单独采购，也可以按项目阶段组合。")
    widths = [38 * mm, 42 * mm, 51 * mm, CONTENT_W - 131 * mm]
    headers = ["服务产品", "管理层要回答", "关键工作", "客户最终获得"]
    header_h = 14 * mm
    row_h = 39 * mm
    cx = M
    for i, head in enumerate(headers):
        rect(c, cx, y - header_h, widths[i], header_h, GREEN_DARK, GREEN_DARK)
        paragraph(c, head, cx + 4 * mm, y - 5 * mm, widths[i] - 8 * mm, "PFS", 7, 9, WHITE)
        cx += widths[i]
    rows = [
        ("S01<br/>零售经营与品类咨询", "经营问题到底在哪里？<br/>先改什么？", "经营诊断、指标口径<br/>品类策略、动作设计<br/>复盘机制", "问题地图<br/>行动清单<br/>试点与复盘方案"),
        ("S02<br/>IT战略、规划与系统选型", "系统为什么建？<br/>先后顺序是什么？", "业务蓝图、应用架构<br/>系统边界、需求框架<br/>选型支持", "IT规划蓝图<br/>项目路线图<br/>选型与决策依据"),
        ("S03<br/>ERP/WMS实施与甲方PMO", "如何控范围、控风险、<br/>控验收？", "范围管理、计划推进<br/>跨方协调、测试验收<br/>上线陪跑", "项目台账<br/>风险与决策机制<br/>验收与移交体系"),
        ("S04<br/>业务产品与数据工具设计", "复杂业务如何变成<br/>可用产品？", "角色流程、状态权限<br/>PRD、数据模型<br/>原型与场景验证", "产品方案<br/>关键原型<br/>可开发需求包"),
    ]
    for r, row in enumerate(rows):
        top = y - header_h - r * row_h
        cx = M
        for i, txt in enumerate(row):
            fill = GREEN_PALE if i == 0 else (WHITE if r % 2 == 0 else PAPER)
            rect(c, cx, top - row_h, widths[i], row_h, fill, LINE, 0.6)
            paragraph(c, txt, cx + 4 * mm, top - 7 * mm, widths[i] - 8 * mm,
                      "PFM" if i == 0 else "PF", 7.3, 11.5, GREEN_DARK if i == 0 else INK)
            cx += widths[i]
    note_y = y - header_h - 4 * row_h - 11 * mm
    paragraph(c, "组合建议：课题尚不清晰，先做 S01；系统建设前，先做 S02；项目已启动但推进复杂，优先引入 S03；新工具或业务平台建设，采用 S04。",
              M, note_y, CONTENT_W, "PFM", 7.5, 12, GREEN_MID)
    c.showPage()


def draw_packages(c):
    page_base(c, 4, "03 / ENGAGEMENT PACKAGES")
    y = page_heading(c, "ENGAGEMENT PACKAGES", "三种合作方式，让项目从正确的问题开始",
                     "以下为参考起价。最终报价根据课题范围、组织复杂度、现场投入与交付深度确定。")
    gap = 5 * mm
    cw = (CONTENT_W - 2 * gap) / 3
    cards = [
        ("01", "经营诊断与项目定义", "¥28,000 起", "适合：问题复杂、方向尚未统一", ["关键访谈与资料诊断", "问题地图与优先级", "项目定义与行动建议"], "先把问题讲清楚"),
        ("02", "专项咨询与方案设计", "¥88,000 起", "适合：已有明确课题，需要系统方案", ["现状与目标模型", "业务/系统方案设计", "试点、指标与实施路径"], "形成可决策的方案"),
        ("03", "实施陪跑与项目管理", "¥168,000 起", "适合：多部门、多供应商或关键上线项目", ["计划、范围与风险管理", "跨方协同与决策机制", "测试验收与上线陪跑"], "把方案变成结果"),
    ]
    card_h = 120 * mm
    by = y - card_h
    for i, card in enumerate(cards):
        x = M + i * (cw + gap)
        fill = GREEN_DARK if i == 1 else WHITE
        fg = WHITE if i == 1 else INK
        muted = HexColor("#C8D7D1") if i == 1 else MUTED
        rect(c, x, by, cw, card_h, fill, GREEN_DARK if i == 1 else LINE, 0.8)
        c.setFillColor(ORANGE)
        c.rect(x, by + card_h - 2.5 * mm, cw, 2.5 * mm, fill=1, stroke=0)
        paragraph(c, card[0], x + 5 * mm, by + card_h - 10 * mm, cw - 10 * mm, "PFS", 6.5, 8, ORANGE)
        paragraph(c, card[1], x + 5 * mm, by + card_h - 20 * mm, cw - 10 * mm, "ST", 12, 17,
                  WHITE if i == 1 else GREEN_DARK)
        paragraph(c, card[2], x + 5 * mm, by + card_h - 40 * mm, cw - 10 * mm, "PFS", 12, 15,
                  ORANGE if i == 1 else GREEN)
        paragraph(c, card[3], x + 5 * mm, by + card_h - 53 * mm, cw - 10 * mm, "PF", 7.3, 11.5, muted)
        rule(c, x + 5 * mm, by + card_h - 62 * mm, x + cw - 5 * mm, by + card_h - 62 * mm,
             HexColor("#55796F") if i == 1 else LINE, 0.55)
        bullets(c, card[4], x + 5 * mm, by + card_h - 70 * mm, cw - 10 * mm, 7.4, 3.5 * mm, fg)
        rect(c, x + 5 * mm, by + 7 * mm, cw - 10 * mm, 14 * mm,
             HexColor("#194A3E") if i == 1 else GREEN_PALE, None)
        paragraph(c, card[5], x + 8 * mm, by + 16 * mm, cw - 16 * mm, "PFM", 7.5, 10,
                  WHITE if i == 1 else GREEN_DARK, TA_CENTER)
    c.showPage()


def draw_erp_case(c):
    page_base(c, 5, "04 / CASE · ERP")
    y = page_heading(c, "CASE 01 · ERP / FINANCE", "ERP 项目的价值，不在功能数量，在管理闭环",
                     "将业务流程、财务口径与项目执行放在同一个框架中，系统建设才会变成管理能力建设。")
    left_w = 61 * mm
    right_x = M + left_w + 7 * mm
    right_w = CONTENT_W - left_w - 7 * mm
    top = y
    rect(c, M, top - 137 * mm, left_w, 137 * mm, GREEN_DARK, GREEN_DARK)
    paragraph(c, "项目命题", M + 6 * mm, top - 9 * mm, left_w - 12 * mm, "PFS", 6.5, 8, ORANGE)
    paragraph(c, "如何让 ERP<br/>同时服务业务运营、<br/>财务核算与管理分析？",
              M + 6 * mm, top - 20 * mm, left_w - 12 * mm, "ST", 13, 19, WHITE)
    rule(c, M + 6 * mm, top - 52 * mm, M + left_w - 6 * mm, top - 52 * mm, HexColor("#55796F"), 0.55)
    paragraph(c, "简益角色", M + 6 * mm, top - 61 * mm, left_w - 12 * mm, "PFS", 6.5, 8, ORANGE)
    bullets(c, ["业务与财务口径梳理", "流程及系统方案协同", "项目推进与关键问题闭环", "测试、验证与管理应用衔接"],
            M + 6 * mm, top - 71 * mm, left_w - 12 * mm, 7.7, 2.7 * mm, WHITE)
    stages = [
        ("01", "统一口径", "连接业务数据与财务系统，<br/>明确核算和管理分析基础。"),
        ("02", "组织流程", "将应收、返利、费用与经营责任<br/>放入可追踪流程。"),
        ("03", "系统验证", "围绕关键场景测试规则、<br/>数据和操作结果。"),
        ("04", "管理应用", "支持按部门、柜组等维度<br/>查看经营与利润表现。"),
    ]
    sh = 31 * mm
    for i, (num, title, body) in enumerate(stages):
        sy = top - (i + 1) * sh - i * 3 * mm
        rect(c, right_x, sy, right_w, sh, WHITE if i % 2 == 0 else GREEN_PALE, LINE, 0.7)
        tag(c, num, right_x + 4 * mm, sy + sh - 10 * mm, 12 * mm, ORANGE, WHITE)
        paragraph(c, title, right_x + 20 * mm, sy + sh - 8 * mm, 29 * mm, "PFM", 9, 12, GREEN_DARK)
        paragraph(c, body, right_x + 50 * mm, sy + sh - 7 * mm, right_w - 55 * mm, "PF", 7.4, 11.5, MUTED)
    result_y = 25 * mm
    rect(c, M, result_y, CONTENT_W, 28 * mm, ORANGE_PALE, None)
    paragraph(c, "形成的管理基础", M + 6 * mm, result_y + 20 * mm, 35 * mm, "PFS", 6.5, 8, ORANGE)
    paragraph(c, "业务数据进入财务体系｜支持部门与柜组利润分析｜返利自动化进入线上验证｜为应收、ROI 与绩效管理提供数据基础",
              M + 43 * mm, result_y + 20 * mm, CONTENT_W - 49 * mm, "PFM", 7.4, 11.5, GREEN_DARK)
    c.showPage()


def draw_category_case(c):
    page_base(c, 6, "05 / CASE · CATEGORY")
    y = page_heading(c, "CASE 02 · CATEGORY MANAGEMENT", "先建立可重复的方法，再决定是否扩大",
                     "品类管理的难点，是把分析结论变成门店动作，并用复盘验证哪些方法值得保留。")
    metrics = [("1家", "试点门店"), ("2个", "功能分类"), ("4轮", "双周复盘")]
    mw = (CONTENT_W - 10 * mm) / 3
    for i, (big, small) in enumerate(metrics):
        x = M + i * (mw + 5 * mm)
        rect(c, x, y - 31 * mm, mw, 31 * mm, WHITE, LINE, 0.7)
        paragraph(c, big, x + 5 * mm, y - 8 * mm, mw - 10 * mm, "ST", 19, 23, GREEN_DARK)
        paragraph(c, small, x + 5 * mm, y - 21 * mm, mw - 10 * mm, "PFM", 7.2, 9, MUTED)
    flow_y = y - 70 * mm
    flow = [
        ("01", "分类", "统一角色与消费任务"),
        ("02", "指标", "定义销量、毛利与结构"),
        ("03", "动作", "形成商品与门店动作"),
        ("04", "复盘", "验证结果并修正方法"),
    ]
    fw = (CONTENT_W - 12 * mm) / 4
    for i, (num, title, body) in enumerate(flow):
        x = M + i * (fw + 4 * mm)
        rect(c, x, flow_y - 47 * mm, fw, 47 * mm, GREEN_DARK if i == 3 else GREEN_PALE,
             GREEN_DARK if i == 3 else LINE, 0.7)
        paragraph(c, num, x + 5 * mm, flow_y - 8 * mm, fw - 10 * mm, "PFS", 6.2, 8, ORANGE)
        paragraph(c, title, x + 5 * mm, flow_y - 18 * mm, fw - 10 * mm, "ST", 13, 17,
                  WHITE if i == 3 else GREEN_DARK)
        paragraph(c, body, x + 5 * mm, flow_y - 33 * mm, fw - 10 * mm, "PF", 7, 10.5,
                  HexColor("#C8D7D1") if i == 3 else MUTED)
        if i < 3:
            c.setFillColor(ORANGE)
            c.setFont("PFS", 9)
            c.drawCentredString(x + fw + 2 * mm, flow_y - 25 * mm, "→")
    qy = 34 * mm
    rect(c, M, qy, CONTENT_W, 45 * mm, WHITE, LINE, 0.8)
    paragraph(c, "试点要回答的三个问题", M + 6 * mm, qy + 36 * mm, CONTENT_W - 12 * mm, "PFS", 7, 9, GREEN_MID)
    questions = ["方法是否被一线理解并执行？", "指标是否能反映动作变化？", "流程是否具备复制条件？"]
    qw = (CONTENT_W - 24 * mm) / 3
    for i, q in enumerate(questions):
        x = M + 6 * mm + i * (qw + 6 * mm)
        if i:
            rule(c, x - 3 * mm, qy + 8 * mm, x - 3 * mm, qy + 31 * mm, LINE, 0.55)
        paragraph(c, q, x, qy + 25 * mm, qw, "PFM", 8, 13, GREEN_DARK)
    c.showPage()


def draw_dual_cases(c):
    page_base(c, 7, "06 / CASE · PLANNING & PRODUCT")
    y = page_heading(c, "CASE 03–04 · CAPABILITY CASES", "从业务蓝图到可执行产品，关键是把边界说清楚",
                     "规划解决先后顺序，产品设计解决角色、流程、状态和规则。两者都以可实施为标准。")
    gap = 7 * mm
    cw = (CONTENT_W - gap) / 2
    by = y - 133 * mm
    left_x = M
    right_x = M + cw + gap
    labeled_box(c, left_x, by, cw, 133 * mm, "CASE 03", "购物中心 IT 规划", "围绕总部与项目公司边界，规划招商、运营、物业、<br/>会员、预算与 BI 能力。", WHITE, GREEN)
    labeled_box(c, right_x, by, cw, 133 * mm, "CASE 04", "复杂业务产品设计", "把多角色、多状态和多权限的业务过程，<br/>转化为清晰的产品规则与开发需求。", WHITE, ORANGE)
    left_items = [
        ("管理命题", "哪些能力总部统一，<br/>哪些由项目现场承担？"),
        ("关键工作", "业务蓝图、应用架构、系统边界、<br/>建设顺序与组织协同。"),
        ("实施衔接", "覆盖开业筹备、培训、运营支持<br/>与项目验收。"),
        ("交付结果", "形成可用于决策、选型和分期建设<br/>的规划框架。"),
    ]
    right_items = [
        ("设计命题", "复杂业务如何被不同角色<br/>正确理解和操作？"),
        ("关键工作", "角色、流程、状态、权限、异常<br/>与关键数据模型。"),
        ("产品表达", "PRD、交互原型、业务规则<br/>和场景化验收标准。"),
        ("交付结果", "形成可评审、可开发、可测试的<br/>需求与产品方案。"),
    ]
    for col_x, items, accent in [(left_x, left_items, GREEN), (right_x, right_items, ORANGE)]:
        sy = by + 76 * mm
        for i, (lab, body) in enumerate(items):
            if i:
                rule(c, col_x + 5 * mm, sy + 3 * mm, col_x + cw - 5 * mm, sy + 3 * mm, LINE, 0.55)
            paragraph(c, lab, col_x + 5 * mm, sy, 22 * mm, "PFS", 6.4, 8, accent)
            paragraph(c, body, col_x + 28 * mm, sy, cw - 33 * mm, "PF", 6.9, 10.2, MUTED)
            sy -= 20 * mm
    bottom = 25 * mm
    rect(c, M, bottom, CONTENT_W, 21 * mm, GREEN_PALE, None)
    paragraph(c, "共同原则：不以文件完成为终点，而以管理层能决策、项目团队能执行、业务现场能验证为交付标准。",
              M + 7 * mm, bottom + 14 * mm, CONTENT_W - 14 * mm, "PFM", 8, 12, GREEN_DARK)
    c.showPage()


def draw_method(c):
    page_base(c, 8, "07 / METHOD & GOVERNANCE")
    y = page_heading(c, "METHOD & GOVERNANCE", "项目如何推进，以及双方分别负责什么",
                     "咨询价值不仅来自专业判断，也来自清晰的决策机制、责任分工和持续验证。")
    steps = ["识别课题", "统一事实", "设计方案", "组织实施", "验证改进"]
    sw = (CONTENT_W - 16 * mm) / 5
    sy = y - 32 * mm
    for i, step in enumerate(steps):
        x = M + i * (sw + 4 * mm)
        rect(c, x, sy, sw, 27 * mm, GREEN_DARK if i in (0, 4) else WHITE,
             GREEN_DARK if i in (0, 4) else LINE, 0.7)
        paragraph(c, f"0{i+1}", x + 4 * mm, sy + 20 * mm, sw - 8 * mm, "PFS", 6, 8, ORANGE)
        paragraph(c, step, x + 4 * mm, sy + 11 * mm, sw - 8 * mm, "PFM", 7.8, 10,
                  WHITE if i in (0, 4) else GREEN_DARK, TA_CENTER)
    table_top = sy - 17 * mm
    widths = [34 * mm, (CONTENT_W - 34 * mm) / 3, (CONTENT_W - 34 * mm) / 3, (CONTENT_W - 34 * mm) / 3]
    headers = ["项目环节", "简益负责", "客户负责", "共同确认"]
    rows = [
        ("问题定义", "访谈、诊断与结构化表达", "提供真实资料与关键人员", "课题边界与优先级"),
        ("方案设计", "方法、模型、流程与方案", "业务判断与约束条件", "目标方案与取舍"),
        ("项目推进", "计划、风险、协调与跟踪", "资源投入与内部决策", "里程碑与问题处理"),
        ("验证移交", "测试、复盘与移交建议", "现场执行与结果反馈", "验收标准与后续行动"),
    ]
    hh = 14 * mm
    rh = 28 * mm
    cx = M
    for i, head in enumerate(headers):
        rect(c, cx, table_top - hh, widths[i], hh, GREEN_DARK, GREEN_DARK)
        paragraph(c, head, cx + 4 * mm, table_top - 5 * mm, widths[i] - 8 * mm, "PFS", 7, 9, WHITE)
        cx += widths[i]
    for r, row in enumerate(rows):
        top = table_top - hh - r * rh
        cx = M
        for i, txt in enumerate(row):
            rect(c, cx, top - rh, widths[i], rh, GREEN_PALE if i == 0 else WHITE, LINE, 0.6)
            paragraph(c, txt, cx + 4 * mm, top - 7 * mm, widths[i] - 8 * mm,
                      "PFM" if i == 0 else "PF", 7.1, 11, GREEN_DARK if i == 0 else INK)
            cx += widths[i]
    c.showPage()


def draw_about(c):
    page_base(c, 9, "08 / ABOUT & START")
    y = page_heading(c, "ABOUT JIANYI", "我们更理解企业为什么难，以及项目为什么会卡住",
                     "核心顾问的职业经历横跨零售企业、零售软件与新零售平台，因此能够同时理解业务现场、系统逻辑与项目执行。")
    views = [
        ("零售企业", "中百集团", "理解门店、商品、运营与组织协同的真实约束。"),
        ("零售软件", "富基融通", "理解大型零售系统的产品逻辑、实施路径与交付风险。"),
        ("新零售平台", "有赞新零售", "理解数字化产品、客户场景与平台能力的连接方式。"),
    ]
    vh = 34 * mm
    for i, (view, exp, body) in enumerate(views):
        by = y - vh - i * (vh + 5 * mm)
        rect(c, M, by, CONTENT_W, vh, WHITE, LINE, 0.7)
        tag(c, f"0{i+1}", M + 5 * mm, by + vh - 11 * mm, 12 * mm, GREEN if i != 1 else ORANGE)
        paragraph(c, view, M + 23 * mm, by + vh - 8 * mm, 28 * mm, "ST", 11, 15, GREEN_DARK)
        paragraph(c, exp, M + 55 * mm, by + vh - 8 * mm, 28 * mm, "PFM", 8, 12, GREEN_MID)
        paragraph(c, body, M + 87 * mm, by + vh - 7 * mm, CONTENT_W - 94 * mm, "PF", 7.4, 11.5, MUTED)
    checklist_y = 34 * mm
    rect(c, M, checklist_y, CONTENT_W, 51 * mm, GREEN_DARK, GREEN_DARK)
    paragraph(c, "一次有效的项目讨论，可以从这四项准备开始", M + 7 * mm, checklist_y + 42 * mm,
              CONTENT_W - 14 * mm, "ST", 11, 15, WHITE)
    checks = ["最希望解决的 3 个问题", "涉及的部门、业态或门店", "现有流程、报表与问题记录", "内部负责人及关键约束"]
    cw = (CONTENT_W - 21 * mm) / 4
    for i, txt in enumerate(checks):
        x = M + 7 * mm + i * (cw + 3 * mm)
        paragraph(c, f"0{i+1}", x, checklist_y + 28 * mm, cw, "PFS", 6.2, 8, ORANGE)
        paragraph(c, txt, x, checklist_y + 19 * mm, cw, "PFM", 7.1, 10.5, WHITE)
    paragraph(c, "如需项目讨论，请联系简益咨询商务联系人。", M, 23 * mm, CONTENT_W, "PFM", 8, 11, GREEN_DARK)
    c.showPage()


def build():
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle("简益咨询产品与服务白皮书")
    c.setAuthor("简益咨询")
    c.setSubject("零售经营咨询、IT规划、项目管理与产品设计")
    draw_cover(c)
    draw_why(c)
    draw_matrix(c)
    draw_packages(c)
    draw_erp_case(c)
    draw_category_case(c)
    draw_dual_cases(c)
    draw_method(c)
    draw_about(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
