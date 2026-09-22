import Link from "next/link";
import { site, home, services } from "@/content/site";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";
import { icons } from "@/components/Icons";

export default function Home() {
  const words = home.headline.split(" ");
  const last = words.pop();
  const head = words.join(" ");
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{home.eyebrow}</div>
            <h1>{head} <em>{last}</em></h1>
            <p className="lede">{home.intro}</p>
            <div className="btn-row">
              <Link href="/donate" className="btn btn-primary">Support the team <span className="arrow">→</span></Link>
              <Link href="/get-care" className="btn btn-ghost">Find care this week</Link>
            </div>
          </div>
          <div className="hero-media">
            <ImageSlot src={home.heroImage} alt={home.heroImageAlt} label="Hero photo · 4:5" />
            <div className="hero-badge">
              <span className="dot" />
              <div><strong>On the street tonight</strong><span>Call or text {site.textLine}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats reveal">
            {home.stats.map((s) => (
              <div key={s.label}><div className="stat-value">{s.value}</div><div className="stat-label">{s.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div><div className="eyebrow">Our approach</div><h2>Care built on showing up.</h2></div>
            <p className="lede">Street medicine flips the model: instead of asking the most vulnerable to navigate the system, we bring the system to them.</p>
          </div>
          <div className="grid-3">
            {home.approach.map((a, i) => (
              <div className="card reveal" key={a.title}>
                <span className="card-num">0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head reveal">
            <div><div className="eyebrow">What we do</div><h2>Full-spectrum care, wherever it&rsquo;s needed.</h2></div>
            <Link href="/services" className="link-arrow">All services <span className="arrow">→</span></Link>
          </div>
          <div className="grid-3">
            {services.slice(0, 6).map((s) => (
              <Link href={`/services#${s.slug}`} className="card reveal" key={s.slug} style={{ textDecoration: "none" }}>
                <div className="icon-badge">{icons[s.slug]}</div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container center reveal">
          <span className="quote-mark">&ldquo;</span>
          <p className="quote" style={{ color: "#fff" }}>{home.quote.text}</p>
          <p className="muted" style={{ color: "#8fa39a" }}>— {home.quote.attribution}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <ImageSlot label="Team photo · 4:5" alt="Our outreach team" />
          <div className="reveal">
            <div className="eyebrow">Get care</div>
            <h2>Find us on the street this week.</h2>
            <p className="lede">We run walking routes, shelter clinics and a mobile van five days a week. No ID, insurance or appointment needed.</p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link href="/get-care" className="btn btn-dark">See the schedule <span className="arrow">→</span></Link>
              <a href={site.phoneHref} className="btn btn-ghost">Call {site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
