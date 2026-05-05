import clsx from 'clsx';
import styles from '@/components/ui/ActivityFeed.module.css';
import type { ActivityItem } from '@/types';

type ActivityFeedProps = {
  items: ActivityItem[];
};

const TYPE_COLORS: Record<ActivityItem['type'], string> = {
  create: 'green',
  update: 'blue',
  delete: 'red',
  login: 'purple',
};

const TYPE_ICONS: Record<ActivityItem['type'], string> = {
  create: '+',
  update: '↑',
  delete: '−',
  login: '→',
};

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>Recent Activity</h3>
        <button type="button" className={styles.viewAll}>View all</button>
      </div>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={clsx(styles.dot, styles[TYPE_COLORS[item.type]])}>
              <span>{TYPE_ICONS[item.type]}</span>
            </div>
            <div className={styles.itemBody}>
              <p className={styles.itemText}>
                <strong>{item.user}</strong> {item.action}{' '}
                <span className={styles.target}>{item.target}</span>
              </p>
              <span className={styles.time}>{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
