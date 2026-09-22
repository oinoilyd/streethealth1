import Link from "next/link";
import { services } from "@/content/site";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { icons } from "@/components/Icons";

export const metadata = { title: "Services", description: "Primary care, wound care, mental health, recovery support and care navigation — delivered on the street." };

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything a clinic offers — without the walls." lede="All care is free and requires no ID, insurance or appointment. Our team brings supplies, medications and follow-up directly to patients.">
        <div className="btn-row" style={{ marginTop: 28 }}><Link href="/get-care" className="btn btn-dark">Where to find us <span className="arrow">→</span></Link></div>
      </PageHero>
      <section className="section">
        <div className="container grid-2">
          {services.map((s) => (
            <div className="card reveal" id={s.slug} key={s.slug} style={{ scrollMarginTop: 110 }}>
              <div className="icon-badge">{icons[s.slug]}</div>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <ul>{s.details.map((d) => <li key={d}>{d}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
