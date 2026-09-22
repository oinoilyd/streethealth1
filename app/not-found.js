import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section center"><div className="container">
      <div className="eyebrow">404</div><h1>This page took a different route.</h1>
      <p className="lede">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Link href="/" className="btn btn-dark" style={{ marginTop: 20 }}>Back home</Link>
    </div></section>
  );
}
