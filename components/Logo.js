export default function LogoMark({ size = 20 }) {
  // Simple placeholder mark: a cross inside a path/route. Replace with your logo in /public.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="10" stroke="#e3b448" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  );
}
