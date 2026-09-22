import Link from "next/link";
import { site, nav } from "@/content/site";
import LogoMark from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand">
              <span className="brand-mark"><LogoMark /></span>
              <span>{site.name}</span>
            </Link>
            <p style={{ maxWidth: "36ch" }}>{site.tagline} Free street medicine for unsheltered neighbors in {site.city}.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
              <li><Link href="/donate">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href={site.phoneHref}>Call {site.phone}</a></li>
              <li><a href={site.textHref}>Text {site.textLine}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>{site.address}</li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. A 501(c)(3) nonprofit · EIN {site.ein}</span>
          <span>In an emergency, call 911. For mental health crisis, call or text 988.</span>
        </div>
      </div>
    </footer>
  );
}
