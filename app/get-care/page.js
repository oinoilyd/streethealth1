import { site, schedule, faqs } from "@/content/site";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Get Care", description: "Weekly street medicine schedule, locations and how to request an outreach visit." };

export default function GetCare() {
  return (
    <>
      <PageHero eyebrow="Get care" title="Free care. No ID. No appointment." lede="Find our team on a route below, or call or text and we'll come to you. If someone is in immediate danger, call 911." />
      <section className="section-tight">
        <div className="container grid-3">
          <a href={site.phoneHref} className="contact-tile reveal"><div className="label">Call the outreach line</div><div className="value">{site.phone}</div></a>
          <a href={site.textHref} className="contact-tile reveal"><div className="label">Text us a location</div><div className="value">{site.textLine}</div></a>
          <a href="tel:911" className="contact-tile urgent reveal"><div className="label">Emergency / crisis</div><div className="value">911 · 988</div></a>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="section-head reveal"><div><div className="eyebrow">Weekly schedule</div><h2>Where we&rsquo;ll be</h2></div><p className="lede">Schedule can shift with weather and holidays — call or text to confirm.</p></div>
          <table className="schedule reveal">
            <thead><tr><th>Day</th><th>Time</th><th>Location</th><th>Type</th></tr></thead>
            <tbody>
              {schedule.map((r) => (
                <tr key={r.day + r.area}><td>{r.day}</td><td>{r.time}</td><td>{r.area}</td><td><span className="tag">{r.type}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal"><div className="eyebrow">Questions</div><h2>Common questions</h2><p className="lede">Can&rsquo;t find what you need? Reach out any time.</p></div>
          <div className="faq reveal">
            {faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>
        </div>
      </section>
    </>
  );
}
