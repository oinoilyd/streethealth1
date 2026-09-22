import Link from "next/link";
import { services, approach } from "@/content/site";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { icons } from "@/components/Icons";

export const metadata = { title: "What We Do", description: "Free street medical care, behavioral health and recovery care, connection to clinics and partners, and basic-needs supplies in Rockford." };

export default function Services() {
  return (
    <>
      <PageHero crumb="What We Do" title="What we do" lede="Free, trauma-informed medical care, harm reduction resources and social support, brought directly to people experiencing homelessness and housing insecurity in Rockford.">
        <div className="btn-row" style={{ marginTop: 24 }}><Link href="/get-involved" className="btn btn-dark">Volunteer with us</Link></div>
      </PageHero>
      <section className="section-tight">
        <div className="container">
          <p className="kicker">Our approach</p>
          <h2>How street medicine works</h2>
          <div className="grid-3" style={{ marginTop: 24 }}>
            {approach.map((a) => <div className="principle" key={a.title}><h3>{a.title}</h3><p>{a.body}</p></div>)}
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
