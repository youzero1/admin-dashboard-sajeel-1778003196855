import StatCard from '@/components/ui/StatCard';
import BarChart from '@/components/ui/BarChart';
import LineChart from '@/components/ui/LineChart';
import ActivityFeed from '@/components/ui/ActivityFeed';
import DonutChart from '@/components/ui/DonutChart';
import styles from '@/pages/OverviewPage.module.css';
import type { StatCardData, ChartDataPoint, ActivityItem } from '@/types';

const stats: StatCardData[] = [
  { id: '1', title: 'Total Revenue', value: '$84,231', change: 12.5, changeLabel: 'vs last month', icon: '💰', color: 'accent' },
  { id: '2', title: 'Active Users', value: '12,847', change: 8.2, changeLabel: 'vs last month', icon: '👥', color: 'green' },
  { id: '3', title: 'Conversion Rate', value: '3.64%', change: -1.3, changeLabel: 'vs last month', icon: '📈', color: 'blue' },
  { id: '4', title: 'Avg. Session', value: '4m 32s', change: 5.7, changeLabel: 'vs last month', icon: '⏱️', color: 'purple' },
];

const revenueData: ChartDataPoint[] = [
  { label: 'Jan', value: 52000, secondary: 38000 },
  { label: 'Feb', value: 61000, secondary: 42000 },
  { label: 'Mar', value: 55000, secondary: 47000 },
  { label: 'Apr', value: 73000, secondary: 51000 },
  { label: 'May', value: 68000, secondary: 55000 },
  { label: 'Jun', value: 84000, secondary: 62000 },
  { label: 'Jul', value: 79000, secondary: 59000 },
];

const visitorData: ChartDataPoint[] = [
  { label: 'W1', value: 3200 },
  { label: 'W2', value: 4800 },
  { label: 'W3', value: 4100 },
  { label: 'W4', value: 5600 },
  { label: 'W5', value: 4900 },
  { label: 'W6', value: 6300 },
  { label: 'W7', value: 5800 },
  { label: 'W8', value: 7200 },
];

const activity: ActivityItem[] = [
  { id: '1', user: 'Alice Carter', action: 'created', target: 'New Campaign', time: '2 minutes ago', type: 'create' },
  { id: '2', user: 'Bob Martinez', action: 'updated', target: 'User Permissions', time: '14 minutes ago', type: 'update' },
  { id: '3', user: 'Carol Lee', action: 'deleted', target: 'Archived Report', time: '1 hour ago', type: 'delete' },
  { id: '4', user: 'David Kim', action: 'logged in from', target: 'New Location', time: '2 hours ago', type: 'login' },
  { id: '5', user: 'Eva Nguyen', action: 'created', target: 'Product Listing', time: '3 hours ago', type: 'create' },
];

export default function OverviewPage() {
  return (
    <div className={styles.page}>
      <div className={styles.statsGrid}>
        {stats.map((s) => (
          <StatCard key={s.id} data={s} />
        ))}
      </div>

      <div className={styles.chartsRow}>
        <div className={styles.chartMain}>
          <BarChart
            data={revenueData}
            title="Revenue Overview"
            subtitle="Monthly revenue vs expenses comparison"
          />
        </div>
        <div className={styles.chartSide}>
          <DonutChart
            title="Traffic Sources"
            subtitle="Acquisition channels"
            segments={[
              { label: 'Organic', value: 4820, color: '#6366f1' },
              { label: 'Direct', value: 3110, color: '#10b981' },
              { label: 'Referral', value: 1940, color: '#3b82f6' },
              { label: 'Social', value: 980, color: '#a855f7' },
            ]}
          />
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.lineChartWrap}>
          <LineChart
            data={visitorData}
            title="Visitor Trend"
            subtitle="Weekly unique visitors over 8 weeks"
            color="#10b981"
          />
        </div>
        <div className={styles.feedWrap}>
          <ActivityFeed items={activity} />
        </div>
      </div>
    </div>
  );
}
