import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '技术笔记',
    description: (
      <>
        分享前端开发、TypeScript、React 等技术领域的实战经验和踩坑笔记。
      </>
    ),
  },
  {
    title: 'AI 工具观察',
    description: (
      <>
        探索和评测各类 AI 编程工具，记录 AI 辅助开发的实践心得。
      </>
    ),
  },
  {
    title: '工程实践',
    description: (
      <>
        聚焦日常开发中的工程问题，提供可落地的解决方案和最佳实践。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
