import Link from "next/link";
import { site, nav } from "@/content/site";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="main">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Brand />
              <p style={{ maxWidth: "38ch" }}>Free street medicine for neighbors experiencing homelessness in {site.city}. No ID, insurance or appointment required.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                {nav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
                <li><Link href="/donate">Donate</Link></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={site.phoneHref}>{site.phone}</a></li>
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
            <span>© {new Date().getFullYear()} {site.name} is a 501(c)(3) nonprofit organization. EIN {site.ein}.</span>
            <span>In an emergency call 911. For a mental health crisis call or text 988.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
