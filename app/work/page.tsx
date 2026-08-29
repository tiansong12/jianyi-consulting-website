import type { Metadata } from 'next';
import Link from 'next/link';
import { WorkListItem } from '@/components/content-ui';
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome';
import { sortedWorks, topicDirectory, type WorkType } from '@/content/content';

export const metadata: Metadata = {
  title: '工作记录｜简益主理人工作档案',
  description: '按工作发生时间查看2025至2026年的项目、研究、培训材料与方案设计。',
};

const workTypes: WorkType[] = ['实际项目', '服务设计', '培训与案例研究', '研究与原型', '方案设计'];

type WorkPageProps = {
  searchParams: Promise<{ year?: string; type?: string; topic?: string }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const filters = await searchParams;
  const selectedYear = filters.year === '2025' || filters.year === '2026' ? filters.year : '';
  const selectedType = workTypes.includes(filters.type as WorkType) ? filters.type as WorkType : '';
  const selectedTopic = topicDirectory.find((topic) => topic.label === filters.topic)?.label ?? '';
  const topicDefinition = topicDirectory.find((topic) => topic.label === selectedTopic);
  const filtered = sortedWorks.filter((work) => {
    const matchesYear = !selectedYear || work.sortDate.startsWith(selectedYear);
    const matchesType = !selectedType || work.type === selectedType;
    const matchesTopic = !topicDefinition || topicDefinition.keywords.some((keyword) => work.topics.includes(keyword));
    return matchesYear && matchesType && matchesTopic;
  });

  const filterHref = (year: string, type: string, topic = selectedTopic) => {
    const query = new URLSearchParams();
    if (year) query.set('year', year);
    if (type) query.set('type', type);
    if (topic) query.set('topic', topic);
    const value = query.toString();
    return value ? `/work?${value}` : '/work';
  };

  return (
    <main>
      <SiteHeader />
      <PageIntro
        code="01 / WORK LOG"
        title="工作记录"
        lead="时间先于总结。这里按工作发生时间记录项目、研究、教材和方案，并明确我承担的角色与证据边界。"
      />

      <section className="filter-section page-shell" aria-label="筛选工作记录">
        <div className="filter-row">
          <span>年份</span>
          <div>
            <Link className={!selectedYear ? 'active' : ''} href={filterHref('', selectedType)}>全部</Link>
            {['2026', '2025'].map((year) => <Link className={selectedYear === year ? 'active' : ''} href={filterHref(year, selectedType)} key={year}>{year}</Link>)}
          </div>
        </div>
        <div className="filter-row">
          <span>专题</span>
          <div>
            <Link className={!selectedTopic ? 'active' : ''} href={filterHref(selectedYear, selectedType, '')}>全部</Link>
            {topicDirectory.map((topic) => <Link className={selectedTopic === topic.label ? 'active' : ''} href={filterHref(selectedYear, selectedType, topic.label)} key={topic.label}>{topic.label}</Link>)}
          </div>
        </div>
        <div className="filter-row">
          <span>性质</span>
          <div>
            <Link className={!selectedType ? 'active' : ''} href={filterHref(selectedYear, '')}>全部</Link>
            {workTypes.map((type) => <Link className={selectedType === type ? 'active' : ''} href={filterHref(selectedYear, type)} key={type}>{type}</Link>)}
          </div>
        </div>
      </section>

      <section className="timeline-section page-shell">
        <div className="timeline-summary"><p>当前显示</p><strong>{filtered.length}</strong><span>项工作记录</span></div>
        <div className="work-list">
          {filtered.map((work, index) => <WorkListItem work={work} index={index} key={work.slug} />)}
        </div>
        {filtered.length === 0 && <p className="empty-state">没有符合当前筛选条件的记录。</p>}
      </section>
      <SiteFooter />
    </main>
  );
}
