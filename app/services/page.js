import Link from "next/link";
import { services, home } from "@/content/site";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { icons } from "@/components/Icons";

export const metadata = { title: "Services", description: "Primary care, wound care, behavioral health, care coordination and harm reduction services, provided free of charge." };

export default function Services() {
  return (
    <>
      <PageHero crumb="Services" title="Our services" lede="All services are free of charge. No identification, insurance or appointment is required.">
        <div className="btn-row" style={{ marginTop: 24 }}><Link href="/get-care" className="btn btn-dark">Find care</Link></div>
      </PageHero>
      <section className="section-tight">
        <div className="container">
          <p className="kicker">Our approach</p>
          <h2>How street medicine works</h2>
          <div className="grid-3" style={{ marginTop: 24 }}>
            {home.approach.map((a) => <div className="principle" key={a.title}><h3>{a.title}</h3><p>{a.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {services.map((s) => (
            <div className="service-detail" id={s.slug} key={s.slug}>
              <span className="service-icon">{icons[s.slug]}</span>
              <div><h3>{s.title}</h3><p>{s.summary}</p></div>
              <ul className="checklist">{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
