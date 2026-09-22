import Link from "next/link";
import { site } from "@/content/site";

export default function AlertBar() {
  return (
    <div className="utility" role="region" aria-label="Urgent contact">
      <div className="container">
        <span>
          Outreach line <a href={site.phoneHref}>{site.phone}</a>
          <span className="sep">|</span>Text <a href={site.textHref}>{site.textLine}</a>
          <span className="sep">|</span>Emergency <a href="tel:911">911</a> · Crisis <a href="tel:988">988</a>
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
