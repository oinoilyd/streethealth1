import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="callout reveal">
          <div>
            <h2>Every visit starts with someone showing up.</h2>
            <p>Give monthly, volunteer on a route or donate supplies — there's a place for you on the team.</p>
          </div>
          <div className="btn-row">
            <Link href="/donate" className="btn btn-dark">Donate <span className="arrow">→</span></Link>
            <Link href="/get-involved" className="btn btn-ghost">Volunteer</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
