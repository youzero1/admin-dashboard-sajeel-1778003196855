import styles from '@/components/ui/BarChart.module.css';
import type { ChartDataPoint } from '@/types';

type BarChartProps = {
  data: ChartDataPoint[];
  title: string;
  subtitle?: string;
};

export default function BarChart({ data, title, subtitle }: BarChartProps) {
  const maxVal = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      <div className={styles.chartArea}>
        {data.map((d) => (
          <div key={d.label} className={styles.barGroup}>
            <div className={styles.barWrap}>
              {d.secondary !== undefined && (
                <div
                  className={`${styles.bar} ${styles.secondary}`}
                  style={{ height: `${(d.secondary / maxVal) * 100}%` }}
                  title={String(d.secondary)}
                />
              )}
              <div
                className={`${styles.bar} ${styles.primary}`}
                style={{ height: `${(d.value / maxVal) * 100}%` }}
                title={String(d.value)}
              />
            </div>
            <span className={styles.label}>{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
