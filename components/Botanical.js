// Hand-built botanical illustrations (pure SVG, no images needed).
// Colors come from CSS variables so the palette stays in globals.css.

const C = {
  petal: "var(--red)",
  petalLight: "var(--blush-deep)",
  center: "var(--marigold)",
  leaf: "var(--leaf)",
  leafLight: "var(--leaf-light)",
  stem: "var(--leaf)",
  vein: "var(--paper)",
};

// Five-petal blossom (wild rose / apple blossom style)
export function Blossom({ x, y, r = 16, rot = 0, light = false }) {
  const petals = Array.from({ length: 5 }, (_, i) => (
    <path
      key={i}
      d={`M0 0 C ${-r * 0.75} ${-r * 0.35}, ${-r * 0.7} ${-r * 1.15}, 0 ${-r * 1.05} C ${r * 0.7} ${-r * 1.15}, ${r * 0.75} ${-r * 0.35}, 0 0 Z`}
      transform={`rotate(${i * 72})`}
      fill={light ? C.petalLight : C.petal}
    />
  ));
  const dots = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 45 * Math.PI) / 180;
    return <circle key={i} cx={Math.cos(a) * r * 0.42} cy={Math.sin(a) * r * 0.42} r={r * 0.055} fill="var(--navy)" opacity=".55" />;
  });
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {petals}
      {Array.from({ length: 5 }, (_, i) => (
        <path key={"v" + i} d={`M0 ${-r * 0.2} L0 ${-r * 0.8}`} transform={`rotate(${i * 72})`} stroke="var(--paper)" strokeWidth={r * 0.05} opacity=".5" strokeLinecap="round" />
      ))}
      <circle r={r * 0.28} fill={C.center} />
      {dots}
    </g>
  );
}

// Almond leaf with a midrib, placed at (x,y) pointing along `rot` degrees
export function Leaf({ x, y, len = 34, rot = 0, light = false }) {
  const w = len * 0.36;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M0 0 C ${len * 0.3} ${-w}, ${len * 0.75} ${-w * 0.8}, ${len} 0 C ${len * 0.75} ${w * 0.8}, ${len * 0.3} ${w}, 0 0 Z`} fill={light ? C.leafLight : C.leaf} />
      <path d={`M${len * 0.08} 0 L${len * 0.85} 0`} stroke={C.vein} strokeWidth="1" opacity=".45" strokeLinecap="round" />
    </g>
  );
}

export function Bud({ x, y, s = 7, rot = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M0 0 C ${-s} ${-s * 0.6}, ${-s * 0.6} ${-s * 2}, 0 ${-s * 2.3} C ${s * 0.6} ${-s * 2}, ${s} ${-s * 0.6}, 0 0 Z`} fill={C.petal} />
      <path d={`M0 0 C ${-s * 0.9} ${-s * 0.3}, ${-s * 0.7} ${-s * 1.1}, ${-s * 0.2} ${-s * 1.2} L0 ${-s * 0.4} L${s * 0.2} ${-s * 1.2} C ${s * 0.7} ${-s * 1.1}, ${s * 0.9} ${-s * 0.3}, 0 0 Z`} fill={C.leaf} />
    </g>
  );
}

const stem = { fill: "none", stroke: C.stem, strokeWidth: 2.4, strokeLinecap: "round" };

// Tall arrangement for hero / feature panels
export function Spray({ className = "", title = "Botanical illustration" }) {
  return (
    <svg className={className} viewBox="0 0 400 480" role="img" aria-label={title}>
      {/* stems */}
      <path d="M200 480 C 200 380, 190 300, 150 200 C 130 150, 120 110, 128 70" {...stem} />
      <path d="M200 480 C 205 390, 230 310, 270 240 C 295 195, 310 160, 300 118" {...stem} />
      <path d="M200 480 C 198 420, 175 370, 110 330 C 85 315, 70 300, 62 272" {...stem} />
      <path d="M200 480 C 206 430, 240 390, 320 360 C 340 352, 352 340, 358 318" {...stem} />
      <path d="M160 225 C 190 200, 205 180, 210 150" {...stem} strokeWidth="1.8" />
      {/* leaves */}
      <Leaf x={196} y={400} len={48} rot={-150} />
      <Leaf x={202} y={380} len={46} rot={-30} light />
      <Leaf x={178} y={300} len={42} rot={-165} light />
      <Leaf x={150} y={200} len={38} rot={-125} />
      <Leaf x={140} y={140} len={34} rot={-20} light />
      <Leaf x={245} y={290} len={40} rot={-10} />
      <Leaf x={283} y={214} len={36} rot={-150} light />
      <Leaf x={300} y={160} len={30} rot={-35} />
      <Leaf x={120} y={338} len={36} rot={100} />
      <Leaf x={92} y={315} len={32} rot={-140} light />
      <Leaf x={290} y={372} len={34} rot={60} light />
      <Leaf x={330} y={355} len={30} rot={-60} />
      <Leaf x={185} y={180} len={26} rot={-70} light />
      {/* flowers */}
      <Blossom x={128} y={62} r={34} rot={8} />
      <Blossom x={300} y={108} r={30} rot={-12} light />
      <Blossom x={62} y={262} r={24} rot={20} light />
      <Blossom x={358} y={308} r={22} rot={-5} />
      <Blossom x={212} y={142} r={18} rot={30} light />
      <path d="M262 252 C 250 238, 244 226, 244 212" {...stem} strokeWidth="1.6" />
      <Bud x={244} y={212} s={7} rot={-5} />
      <path d="M118 334 C 104 318, 98 300, 100 286" {...stem} strokeWidth="1.6" />
      <Bud x={100} y={286} s={6} rot={5} />
    </svg>
  );
}

// Small horizontal sprig for dividers and headings
export function Sprig({ className = "", width = 120 }) {
  return (
    <svg className={className} width={width} viewBox="0 0 160 40" aria-hidden="true">
      <path d="M8 26 C 50 16, 100 14, 146 22" {...stem} strokeWidth="1.8" />
      <Leaf x={34} y={21} len={20} rot={-60} />
      <Leaf x={48} y={19} len={20} rot={50} light />
      <Leaf x={78} y={17} len={20} rot={-65} light />
      <Leaf x={96} y={17} len={20} rot={55} />
      <Leaf x={122} y={19} len={18} rot={-60} />
      <Blossom x={148} y={22} r={10} />
      <Bud x={10} y={27} s={4} rot={-100} />
    </svg>
  );
}

// Corner garland used on section edges
export function Corner({ className = "", flip = false }) {
  return (
    <svg className={className} viewBox="0 0 220 220" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M0 40 C 60 50, 120 80, 170 150 C 185 172, 195 195, 200 220" {...stem} />
      <path d="M40 0 C 50 50, 80 90, 120 110" {...stem} strokeWidth="1.8" />
      <Leaf x={40} y={46} len={30} rot={-40} light />
      <Leaf x={80} y={58} len={30} rot={60} />
      <Leaf x={120} y={88} len={28} rot={-20} />
      <Leaf x={150} y={120} len={28} rot={100} light />
      <Leaf x={52} y={40} len={24} rot={-110} />
      <Leaf x={70} y={78} len={24} rot={150} light />
      <Blossom x={120} y={110} r={20} />
      <Blossom x={30} y={24} r={14} light />
      <Bud x={185} y={175} s={6} rot={150} />
    </svg>
  );
}
