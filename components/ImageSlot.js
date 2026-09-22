// Shows a real image when `src` is set, otherwise a branded placeholder.
export default function ImageSlot({ src, alt = "", label, ratio, className = "", children }) {
  const style = ratio ? { aspectRatio: ratio } : undefined;
  if (src) {
    return (
      <div className={`imgslot ${className}`} style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`imgslot placeholder ${className}`} style={style} role="img" aria-label={alt || label}>
      {children}
      {label && <span style={{ position: "relative", zIndex: 1 }}>{label}</span>}
    </div>
  );
}
