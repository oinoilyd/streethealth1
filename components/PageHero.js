import Link from "next/link";

export default function PageHero({ crumb, title, lede, children }) {
  return (
    <section className="page-head">
      <div className="container">
        {crumb && <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span>{crumb}</nav>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
