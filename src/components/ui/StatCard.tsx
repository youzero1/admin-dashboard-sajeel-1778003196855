import { TrendingUp, TrendingDown } from 'lucide-react';
import clsx from 'clsx';
import styles from '@/components/ui/StatCard.module.css';
import type { StatCardData } from '@/types';

type StatCardProps = {
  data: StatCardData;
};

export default function StatCard({ data }: StatCardProps) {
  const isPositive = data.change >= 0;

  return (
    <div className={clsx(styles.card, styles[data.color])}>
      <div className={styles.top}>
        <div className={styles.iconWrap}>
          <span className={styles.iconEmoji}>{data.icon}</span>
        </div>
        <span className={clsx(styles.badge, isPositive ? styles.up : styles.down)}>
          {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {isPositive ? '+' : ''}{data.change}%
        </span>
      </div>
      <div className={styles.body}>
        <span className={styles.value}>{data.value}</span>
        <span className={styles.title}>{data.title}</span>
      </div>
      <span className={styles.changeLabel}>{data.changeLabel}</span>
    </div>
  );
}
