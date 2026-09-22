import Link from "next/link";
import { site, home, services, schedule } from "@/content/site";
import { Sprig } from "@/components/Botanical";
import CtaBand from "@/components/CtaBand";
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
              <Link href="/get-care" className="btn btn-dark">Find care</Link>
              <Link href="/donate" className="btn btn-outline">Support our work</Link>
            </div>
            <div className="quick">
              <a href={site.phoneHref}>Call {site.phone}<span>Request an outreach visit</span></a>
              <a href={site.textHref}>Text {site.textLine}<span>Send us a location</span></a>
              <a href="tel:911">Emergency 911<span>Crisis line 988</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="glance in-panel">
            {home.stats.map((s) => <div key={s.label}><div className="num">{s.value}</div><div className="lbl">{s.label}</div></div>)}
          </div>
          <p className="glance-caption">{home.statsCaption}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row">
            <div><p className="kicker">Services</p><h2>What we provide</h2><p className="lede">All services are free and available to anyone we meet on our routes.</p></div>
            <Link href="/services" className="text-link">View all services</Link>
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
          <p className="kicker">Get care</p>
          <h2>Where to find us this week</h2>
          <ul className="mini-sched" style={{ margin: "20px 0 24px" }}>
            {schedule.slice(0, 4).map((r) => (
              <li key={r.day + r.area}><strong>{r.day}</strong><div>{r.area}<span>{r.time} · {r.type}</span></div></li>
            ))}
          </ul>
          <Link href="/get-care" className="text-link">Full schedule and FAQs</Link>
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
