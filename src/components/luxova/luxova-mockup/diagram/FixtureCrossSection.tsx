export function FixtureCrossSection() {
  const stroke = "rgba(246,241,230,.20)";
  const gold = "rgba(212,162,76,.75)";

  return (
    <div className="lux-crossWrap" aria-hidden="true">
      <svg viewBox="0 0 540 360" className="lux-crossSvg" role="img">
        <defs>
          <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(246,241,230,.16)" />
            <stop offset="40%" stopColor="rgba(246,241,230,.06)" />
            <stop offset="100%" stopColor="rgba(246,241,230,.02)" />
          </linearGradient>
          <linearGradient id="thermal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(212,162,76,.15)" />
            <stop offset="60%" stopColor="rgba(212,162,76,.55)" />
            <stop offset="100%" stopColor="rgba(212,162,76,.08)" />
          </linearGradient>
        </defs>

        {/* Ambient grid */}
        <g opacity="0.55">
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 40 + i * 40;
            return <line key={i} x1={x} y1={20} x2={x} y2={340} stroke="rgba(246,241,230,.06)" />;
          })}
          {Array.from({ length: 7 }).map((_, i) => {
            const y = 40 + i * 40;
            return <line key={i} x1={20} y1={y} x2={520} y2={y} stroke="rgba(246,241,230,.05)" />;
          })}
        </g>

        {/* Ceiling plane */}
        <line x1="28" y1="160" x2="512" y2="160" stroke={stroke} strokeWidth="2" />
        <text x="38" y="142" fill="rgba(246,241,230,.60)" fontSize="12" className="lux-tech">
          CEILING PLANE
        </text>

        {/* Housing */}
        <path
          d="M 205 170 L 335 170 Q 360 170 368 190 L 398 270 Q 404 288 386 300 L 168 300 Q 150 288 156 270 L 186 190 Q 195 170 205 170 Z"
          fill="url(#metal)"
          stroke={stroke}
          strokeWidth="2"
        />

        {/* Optics */}
        <path
          d="M 235 188 Q 270 160 305 188 L 286 235 Q 270 245 254 235 Z"
          fill="rgba(246,241,230,.05)"
          stroke="rgba(212,162,76,.35)"
          strokeWidth="2"
        />
        <path
          d="M 270 188 L 270 235"
          stroke={gold}
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Beam wedge */}
        <path
          d="M 260 170 L 80 310 L 130 310 L 270 210 Z"
          fill="rgba(212,162,76,.10)"
          stroke="rgba(212,162,76,.35)"
          strokeWidth="1.5"
        />
        <path
          d="M 280 170 L 460 310 L 410 310 L 270 210 Z"
          fill="rgba(212,162,76,.08)"
          stroke="rgba(212,162,76,.30)"
          strokeWidth="1.5"
        />

        {/* Thermal path */}
        <path
          d="M 188 270 Q 270 230 352 270 Q 340 292 318 300 L 222 300 Q 200 292 188 270 Z"
          fill="url(#thermal)"
          opacity="0.7"
        />
        <text x="404" y="266" fill="rgba(212,162,76,.80)" fontSize="12" className="lux-tech">
          THERMAL PATH
        </text>

        {/* Callouts */}
        <g>
          <line x1="110" y1="240" x2="188" y2="270" stroke="rgba(246,241,230,.22)" />
          <text x="40" y="238" fill="rgba(246,241,230,.70)" fontSize="12" className="lux-tech">
            DRIVER
          </text>

          <line x1="430" y1="226" x2="398" y2="270" stroke="rgba(246,241,230,.22)" />
          <text x="410" y="210" fill="rgba(246,241,230,.70)" fontSize="12" className="lux-tech">
            OPTIC MODULE
          </text>

          <line x1="200" y1="300" x2="155" y2="310" stroke="rgba(246,241,230,.22)" />
          <text x="68" y="334" fill="rgba(246,241,230,.70)" fontSize="12" className="lux-tech">
            FIN ARRAY
          </text>
        </g>

        {/* Baseline */}
        <line x1="28" y1="310" x2="512" y2="310" stroke="rgba(246,241,230,.12)" />
        <text x="38" y="336" fill="rgba(246,241,230,.55)" fontSize="12" className="lux-tech">
          SECTION VIEW • SPEC GRADE OPTICS
        </text>
      </svg>
    </div>
  );
}

