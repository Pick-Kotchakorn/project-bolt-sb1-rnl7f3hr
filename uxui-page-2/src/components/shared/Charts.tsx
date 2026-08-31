import type { Metric } from '@/data/demoData';

interface LineChartProps {
  data: { date: string; value: number }[];
  metric: Metric;
  color?: string;
}

export function LineChart({ data, metric, color = '#c54327' }: LineChartProps) {
  if (!data || data.length < 2) return null;

  const width = 600;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 30, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const values = data.map((d) => d.value);
  const maxVal = Math.max(...values);
  const minVal = Math.min(...values);
  const range = maxVal - minVal || 1;

  const points = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * chartW;
    const y = padding.top + chartH - ((d.value - minVal) / range) * chartH;
    return { x, y, ...d };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

  const formatValue = (v: number) => {
    if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
    return v.toFixed(1);
  };

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`grad-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.12" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = padding.top + chartH * t;
          const val = maxVal - range * t;
          return (
            <g key={t}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#e7e7e5"
                strokeWidth="1"
                strokeDasharray={t === 0 || t === 1 ? '0' : '3 3'}
              />
              <text
                x={padding.left - 8}
                y={y + 4}
                textAnchor="end"
                className="fill-ink-300"
                style={{ fontSize: '10px', fontWeight: 500 }}
              >
                {formatValue(val)}
              </text>
            </g>
          );
        })}

        {/* Area */}
        <path d={areaPath} fill={`url(#grad-${metric.id})`} />

        {/* Line */}
        <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* Points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="white" stroke={color} strokeWidth="2.5" />
            <text
              x={p.x}
              y={height - 8}
              textAnchor="middle"
              className="fill-ink-400"
              style={{ fontSize: '11px', fontWeight: 500 }}
            >
              {p.date}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

interface BarChartProps {
  data: { label: string; percentage: number; color?: string }[];
  maxBars?: number;
}

export function BarChart({ data, maxBars = 5 }: BarChartProps) {
  const sorted = [...data].sort((a, b) => b.percentage - a.percentage).slice(0, maxBars);
  const maxPct = Math.max(...sorted.map((d) => d.percentage), 100);

  return (
    <div className="space-y-2.5">
      {sorted.map((d, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-right text-xs font-medium text-ink-500">
            {d.label}
          </span>
          <div className="flex-1">
            <div className="h-6 w-full overflow-hidden rounded-md bg-ink-50">
              <div
                className="h-full rounded-md transition-all duration-500"
                style={{
                  width: `${(d.percentage / maxPct) * 100}%`,
                  backgroundColor: d.color || '#c54327',
                }}
              />
            </div>
          </div>
          <span className="w-10 shrink-0 text-xs font-semibold text-ink-700">
            {d.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}

interface DonutProps {
  data: { label: string; percentage: number; color: string }[];
}

export function DonutChart({ data }: DonutProps) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex items-center gap-6">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="#f7f4f0" strokeWidth="16" />
        {data.map((d, i) => {
          const dash = (d.percentage / 100) * circumference;
          const segment = (
            <circle
              key={i}
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth="16"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              transform="rotate(-90 70 70)"
              strokeLinecap="round"
            />
          );
          offset += dash;
          return segment;
        })}
      </svg>
      <div className="space-y-2">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: d.color }} />
            <span className="font-medium text-ink-700">{d.label}</span>
            <span className="text-ink-400">{d.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
