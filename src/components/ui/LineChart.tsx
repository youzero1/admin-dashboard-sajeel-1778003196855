import styles from '@/components/ui/LineChart.module.css';
import type { ChartDataPoint } from '@/types';

type LineChartProps = {
  data: ChartDataPoint[];
  title: string;
  subtitle?: string;
  color?: string;
};

export default function LineChart({ data, title, subtitle, color = '#6366f1' }: LineChartProps) {
  const W = 600;
  const H = 160;
  const PAD = { top: 16, right: 16, bottom: 24, left: 40 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const values = data.map((d) => d.value);
  const maxV = Math.max(...values, 1);
  const minV = Math.min(...values, 0);
  const range = maxV - minV || 1;

  const xStep = innerW / Math.max(data.length - 1, 1);

  const points = data.map((d, i) => ({
    x: PAD.left + i * xStep,
    y: PAD.top + innerH - ((d.value - minV) / range) * innerH,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = [
    ...points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`),
    `L${points[points.length - 1].x},${PAD.top + innerH}`,
    `L${PAD.left},${PAD.top + innerH}`,
    'Z',
  ].join(' ');

  const yTicks = [minV, minV + range / 2, maxV];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.legend}>
          <span className={styles.dot} style={{ background: color }} />
          <span className={styles.legendLabel}>Current</span>
        </div>
      </div>
      <div className={styles.svgWrap}>
        <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          {yTicks.map((tick, i) => {
            const y = PAD.top + innerH - ((tick - minV) / range) * innerH;
            return (
              <g key={i}>
                <line
                  x1={PAD.left}
                  y1={y}
                  x2={PAD.left + innerW}
                  y2={y}
                  stroke="#2a2f45"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={PAD.left - 6}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#555a72"
                >
                  {tick >= 1000 ? `${(tick / 1000).toFixed(0)}k` : tick}
                </text>
              </g>
            );
          })}
          {data.map((d, i) => (
            <text
              key={i}
              x={PAD.left + i * xStep}
              y={H - 4}
              textAnchor="middle"
              fontSize="10"
              fill="#555a72"
            >
              {d.label}
            </text>
          ))}
          <path d={areaPath} fill="url(#areaGrad)" />
          <path d={linePath} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="3" fill={color} stroke="#1a1d27" strokeWidth="2" />
          ))}
        </svg>
      </div>
    </div>
  );
}
