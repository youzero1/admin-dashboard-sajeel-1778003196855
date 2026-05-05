import BarChart from '@/components/ui/BarChart';
import LineChart from '@/components/ui/LineChart';
import DonutChart from '@/components/ui/DonutChart';
import styles from '@/pages/AnalyticsPage.module.css';
import type { ChartDataPoint } from '@/types';

const pageViews: ChartDataPoint[] = [
  { label: 'Mon', value: 8200 },
  { label: 'Tue', value: 9500 },
  { label: 'Wed', value: 7800 },
  { label: 'Thu', value: 11000 },
  { label: 'Fri', value: 10200 },
  { label: 'Sat', value: 6700 },
  { label: 'Sun', value: 5900 },
];

const bounceRate: ChartDataPoint[] = [
  { label: 'Week 1', value: 42 },
  { label: 'Week 2', value: 38 },
  { label: 'Week 3', value: 45 },
  { label: 'Week 4', value: 35 },
  { label: 'Week 5', value: 31 },
  { label: 'Week 6', value: 28 },
];

const sessionDuration: ChartDataPoint[] = [
  { label: 'Jan', value: 210 },
  { label: 'Feb', value: 245 },
  { label: 'Mar', value: 230 },
  { label: 'Apr', value: 270 },
  { label: 'May', value: 260 },
  { label: 'Jun', value: 290 },
  { label: 'Jul', value: 272 },
];

export default function AnalyticsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {[
          { label: 'Page Views', value: '59.3k', delta: '+11%', up: true },
          { label: 'Sessions', value: '21.4k', delta: '+7%', up: true },
          { label: 'Bounce Rate', value: '34.2%', delta: '-6%', up: false },
          { label: 'Avg Duration', value: '4m 28s', delta: '+4%', up: true },
          { label: 'New Users', value: '8,920', delta: '+14%', up: true },
          { label: 'Goals Met', value: '73%', delta: '+2%', up: true },
        ].map((k) => (
          <div key={k.label} className={styles.kpiCard}>
            <span className={styles.kpiLabel}>{k.label}</span>
            <span className={styles.kpiValue}>{k.value}</span>
            <span className={k.up ? styles.kpiUp : styles.kpiDown}>{k.delta}</span>
          </div>
        ))}
      </div>

      <div className={styles.grid2}>
        <BarChart data={pageViews} title="Daily Page Views" subtitle="Last 7 days" />
        <DonutChart
          title="Device Breakdown"
          subtitle="Sessions by device type"
          segments={[
            { label: 'Desktop', value: 5820, color: '#6366f1' },
            { label: 'Mobile', value: 3980, color: '#10b981' },
            { label: 'Tablet', value: 1200, color: '#3b82f6' },
          ]}
        />
      </div>

      <div className={styles.grid2}>
        <LineChart data={bounceRate} title="Bounce Rate Trend" subtitle="Weekly bounce rate (%)" color="#ef4444" />
        <LineChart data={sessionDuration} title="Avg. Session Duration" subtitle="Monthly avg (seconds)" color="#f59e0b" />
      </div>
    </div>
  );
}
