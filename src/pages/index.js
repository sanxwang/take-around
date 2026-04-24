import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroArt from '@site/static/img/home-hero-pixel.svg';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const featuredPosts = [
  {
    title: 'AI Coding Tools Comparison',
    description: '从工作流、可控性和真实产出来看不同 AI 编程工具的差异。',
    to: '/blog/ai-coding-tools-comparison-2026',
    meta: 'Tooling',
  },
  {
    title: 'Cursor 3 的现实体验',
    description: '记录 AI 编辑器在真实项目中的优点、噪音和适用边界。',
    to: '/blog/cursor-3-ai-coding-reality',
    meta: 'Workflow',
  },
  {
    title: 'Frontend Review Checklist',
    description: '一套更偏工程落地的前端评审清单，覆盖交互、实现和风险。',
    to: '/blog/frontend-review-checklist',
    meta: 'Frontend',
  },
];

const lanes = [
  {
    title: '前端实现',
    body: '关注 React、TypeScript、状态管理和复杂页面的实际实现方式。',
  },
  {
    title: 'AI 工作流',
    body: '记录 AI 辅助编码、代码评审和调试协作中的有效做法。',
  },
  {
    title: '工程判断',
    body: '把抽象概念落到代码组织、可维护性和团队协作上。',
  },
];

function SignalCard({title, body}) {
  return (
    <article className={styles.signalCard}>
      <p className={styles.cardEyebrow}>Signal</p>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardBody}>{body}</p>
    </article>
  );
}

function PostCard({title, description, to, meta}) {
  return (
    <Link className={styles.postCard} to={to}>
      <span className={styles.postMeta}>{meta}</span>
      <Heading as="h3" className={styles.postTitle}>
        {title}
      </Heading>
      <p className={styles.postDescription}>{description}</p>
      <span className={styles.postAction}>Read Post</span>
    </Link>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroShell)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>TAKE AROUND // PIXEL LOG</p>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            把前端、AI 编程工具和工程实践拆成可执行的经验，而不是空泛观点。
          </p>
          <div className={styles.heroActions}>
            <Link className={clsx('button button--lg', styles.primaryButton)} to="/blog">
              进入文章列表
            </Link>
            <Link className={clsx('button button--lg', styles.secondaryButton)} to="/ai-timeline">
              查看 AI 时间线
            </Link>
          </div>
          <dl className={styles.statGrid}>
            <div className={styles.statBox}>
              <dt>Focus</dt>
              <dd>Frontend / AI Workflow</dd>
            </div>
            <div className={styles.statBox}>
              <dt>Output</dt>
              <dd>文章、清单、实战结论</dd>
            </div>
            <div className={styles.statBox}>
              <dt>Style</dt>
              <dd>偏工程、少废话、重判断</dd>
            </div>
          </dl>
        </div>
        <div className={styles.heroArtWrap}>
          <div className={styles.heroFrame}>
            <div className={styles.frameBar}>
              <span />
              <span />
              <span />
            </div>
            <HeroArt className={styles.heroArt} role="img" aria-label="Pixel style coding scene" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Take Around 分享代码经验、AI 工具观察和日常工程实践，聚焦前端、TypeScript、React 与 AI 编程工作流。">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <section className={styles.signalSection}>
          <div className={clsx('container', styles.sectionShell)}>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>Writing Lanes</p>
              <Heading as="h2" className={styles.sectionTitle}>
                首页不做模板展示，直接说明这里长期在写什么。
              </Heading>
            </div>
            <div className={styles.signalGrid}>
              {lanes.map((lane) => (
                <SignalCard key={lane.title} {...lane} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ribbonSection}>
          <div className={clsx('container', styles.sectionShell, styles.ribbonShell)}>
            <p className={styles.ribbonText}>
              RECENT THEMES // React architecture // AI coding agents // TypeScript edges // review heuristics
            </p>
          </div>
        </section>

        <section className={styles.postsSection}>
          <div className={clsx('container', styles.sectionShell)}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <p className={styles.sectionKicker}>Featured Posts</p>
                <Heading as="h2" className={styles.sectionTitle}>
                  先看这些文章，能最快理解这个站点的写作密度。
                </Heading>
              </div>
              <Link className={styles.inlineLink} to="/blog">
                查看全部文章
              </Link>
            </div>
            <div className={styles.postGrid}>
              {featuredPosts.map((post) => (
                <PostCard key={post.to} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
