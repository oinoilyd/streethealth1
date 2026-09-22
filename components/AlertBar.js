import Link from "next/link";

export default function AlertBar() {
  return (
    <div className="utility" role="region" aria-label="Emergency contact">
      <div className="container">
        <span>
          Emergency <a href="tel:911">911</a>
          <span className="sep">|</span>Mental health crisis: call or text <a href="tel:988">988</a>
        </span>
        <span className="utility-links">
          <Link href="/get-involved">Volunteer</Link><span className="sep">|</span>
          <Link href="/contact">Contact</Link><span className="sep">|</span>
          <Link href="/donate">Donate</Link>
        </span>
      </div>
    </div>
  );
}
