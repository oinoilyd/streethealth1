import { Blossom, Leaf } from "./Botanical";

// Placeholder emblem — swap for your real logo file later.
export default function Emblem({ className = "brand-emblem", ring = "var(--plum)" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#fff" stroke={ring} strokeWidth="2.5" />
      <circle cx="32" cy="32" r="25.5" fill="none" stroke={ring} strokeWidth="0.8" opacity=".5" />
      <Leaf x={32} y={36} len={17} rot={-160} />
      <Leaf x={32} y={36} len={17} rot={-20} light />
      <path d="M32 50 L32 36" stroke="var(--leaf)" strokeWidth="2" strokeLinecap="round" />
      <Blossom x={32} y={27} r={11} />
    </svg>
  );
}
