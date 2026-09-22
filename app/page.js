import Link from "next/link";
import { site, home, mission, services } from "@/content/site";
import { Sprig } from "@/components/Botanical";
import CtaBand from "@/components/CtaBand";
import ByTheNumbers from "@/components/ByTheNumbers";
import { icons } from "@/components/Icons";

export default function Home() {
  const heroStyle = home.heroImage
    ? { backgroundImage: `url(${home.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : undefined;
  return (
    <>
      <section className="hero2" style={heroStyle}>
        <div className="container">
          <div className="hero-card">
            <p className="kicker">{home.kicker}</p>
            <h1>{home.headline}</h1>
            <p className="lede">{home.intro}</p>
            <div className="btn-row">
              <Link href="/get-involved" className="btn btn-dark">Volunteer with us</Link>
              <Link href="/donate" className="btn btn-outline">Donate supplies</Link>
            </div>
            <div className="quick">
              <a href={site.volunteerSignupUrl} target="_blank" rel="noopener noreferrer">Sign up for a run<span>Volunteer shifts on SignUpGenius</span></a>
              <a href={site.wishlistUrl} target="_blank" rel="noopener noreferrer">Amazon wishlist<span>Send supplies we hand out</span></a>
              <a href={`mailto:${site.email}`}>Email us<span>Questions and partnerships</span></a>
            </div>
          </div>
        </div>
      </section>

      <ByTheNumbers />

      <section className="section">
        <div className="container">
          <div className="head-row">
            <div><p className="kicker">What we do</p><h2>Care and support on every run</h2><p className="lede">All care is free and brought directly to people where they are staying.</p></div>
            <Link href="/services" className="text-link">See everything we provide</Link>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <Link href={`/services#${s.slug}`} className="service" key={s.slug}>
                <span className="service-icon">{icons[s.slug]}</span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="panel-row">
        <section>
          <p className="kicker">Our mission</p>
          <h2>Safety, dignity and continuity of care</h2>
          <p style={{ color: "var(--ink-soft)", margin: "16px 0 24px" }}>{mission[0]}</p>
          <Link href="/about" className="text-link">About us and our team</Link>
        </section>
        <section className="band-blush" style={{ display: "flex", alignItems: "center" }}>
          <figure className="quote-block" style={{ margin: 0 }}>
            <Sprig className="ornament" width={120} />
            <blockquote>{home.quote.text}</blockquote>
            <cite>{home.quote.attribution}</cite>
          </figure>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
