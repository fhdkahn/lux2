export function IesMiniDiagram({
  beamDeg,
  label
}: {
  beamDeg: number;
  label?: string;
}) {
  // Polar-ish mini visualization (not a full IES render).
  const size = 96;
  const cx = size / 2;
  const cy = size / 2;
  const r = 34;
  const half = Math.max(8, Math.min(85, beamDeg / 2));

  // 0° at top; positive clockwise.
  const start = -half;
  const end = half;

  const toPoint = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    // Rotate so 0° points upward.
    const x = cx + r * Math.sin(rad);
    const y = cy - r * Math.cos(rad);
    return { x, y };
  };

  const p1 = toPoint(start);
  const p2 = toPoint(end);
  const largeArc = end - start > 180 ? 1 : 0;

  const arcPath = `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 1 ${p2.x} ${p2.y} Z`;

  return (
    <div className="lux-iesMini" aria-hidden="true">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <radialGradient id="iesGold" cx="50%" cy="45%" r="70%">
            <stop offset="0%" stopColor="rgba(212,162,76,.55)" />
            <stop offset="60%" stopColor="rgba(212,162,76,.18)" />
            <stop offset="100%" stopColor="rgba(212,162,76,.02)" />
          </radialGradient>
        </defs>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="rgba(255,255,255,.02)"
          stroke="rgba(246,241,230,.16)"
        />
        <circle cx={cx} cy={cy} r={r * 0.55} fill="transparent" stroke="rgba(246,241,230,.10)" />
        <path
          d={`M ${cx} ${cy - r} L ${cx} ${cy + r}`}
          stroke="rgba(246,241,230,.10)"
          strokeWidth="1"
        />
        <path
          d={`M ${cx - r} ${cy} L ${cx + r} ${cy}`}
          stroke="rgba(246,241,230,.10)"
          strokeWidth="1"
        />
        <path d={arcPath} fill="url(#iesGold)" />
        <path
          d={`M ${cx} ${cy} L ${p1.x} ${p1.y}`}
          stroke="rgba(212,162,76,.65)"
          strokeWidth="1"
        />
        <path
          d={`M ${cx} ${cy} L ${p2.x} ${p2.y}`}
          stroke="rgba(212,162,76,.65)"
          strokeWidth="1"
        />
      </svg>
      {label ? <div className="lux-iesMiniLabel lux-tech">{label}</div> : null}
    </div>
  );
}

