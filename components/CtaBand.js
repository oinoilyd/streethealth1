import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta band-navy">
      <div className="container">
        <div>
          <h2>Help us keep showing up.</h2>
          <p>Volunteer on a medical run, send supplies from our wishlist or partner with us.</p>
        </div>
        <div className="btn-row">
          <Link href="/donate" className="btn btn-light">Donate supplies</Link>
          <Link href="/get-involved" className="btn btn-outline-light">Volunteer</Link>
        </div>
      </div>
    </section>
  );
}
