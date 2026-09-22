export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
