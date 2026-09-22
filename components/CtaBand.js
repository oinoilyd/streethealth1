import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta band-plum">
      <div className="container">
        <div>
          <h2>Help us keep showing up.</h2>
          <p>Give monthly, join an outreach shift or donate supplies. Every contribution goes directly to care on the street.</p>
        </div>
        <div className="btn-row">
          <Link href="/donate" className="btn btn-light">Make a gift</Link>
          <Link href="/get-involved" className="btn btn-outline-light">Volunteer</Link>
        </div>
      </div>
    </section>
  );
}
