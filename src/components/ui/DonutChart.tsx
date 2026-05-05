import styles from '@/components/ui/DonutChart.module.css';

type Segment = {
  label: string;
  value: number;
  color: string;
};

type DonutChartProps = {
  title: string;
  subtitle?: string;
  segments: Segment[];
};

export default function DonutChart({ title, subtitle, segments }: DonutChartProps) {
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  const R = 60;
  const CX = 80;
  const CY = 80;
  const INNER_R = 38;
  const circumference = 2 * Math.PI * R;

  let cumulative = 0;
  const arcs = segments.map((seg) => {
    const fraction = seg.value / (total || 1);
    const dashArray = `${fraction * circumference} ${circumference}`;
    const rotation = (cumulative / (total || 1)) * 360 - 90;
    cumulative += seg.value;
    return { ...seg, dashArray, rotation, fraction };
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.body}>
        <div className={styles.svgWrap}>
          <svg viewBox="0 0 160 160" className={styles.svg}>
            {arcs.map((arc, i) => (
              <circle
                key={i}
                cx={CX}
                cy={CY}
                r={R}
                fill="none"
                stroke={arc.color}
                strokeWidth="20"
                strokeDasharray={arc.dashArray}
                strokeDashoffset="0"
                transform={`rotate(${arc.rotation} ${CX} ${CY})`}
                strokeLinecap="butt"
              />
            ))}
            <circle cx={CX} cy={CY} r={INNER_R} fill="var(--color-surface)" />
            <text x={CX} y={CY - 6} textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--color-text-primary)">{total >= 1000 ? `${(total / 1000).toFixed(0)}k` : total}</text>
            <text x={CX} y={CY + 14} textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">Total</text>
          </svg>
        </div>
        <ul className={styles.legend}>
          {segments.map((seg, i) => (
            <li key={i} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: seg.color }} />
              <span className={styles.legendLabel}>{seg.label}</span>
              <span className={styles.legendVal}>{((seg.value / (total || 1)) * 100).toFixed(0)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
