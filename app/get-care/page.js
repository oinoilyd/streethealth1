import { site, schedule, faqs } from "@/content/site";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Get Care", description: "Weekly outreach schedule, locations and how to request a street medicine visit." };

export default function GetCare() {
  return (
    <>
      <PageHero crumb="Get Care" title="Get care" lede="Care is free and no identification, insurance or appointment is required. Find our team on a route below, or call or text to request a visit. If someone is in immediate danger, call 911." />
      <section className="section-tight">
        <div className="container grid-3">
          <a href={site.phoneHref} className="contact-tile"><div className="label">Call the outreach line</div><div className="value">{site.phone}</div></a>
          <a href={site.textHref} className="contact-tile"><div className="label">Text a location</div><div className="value">{site.textLine}</div></a>
          <a href="tel:911" className="contact-tile urgent"><div className="label">Emergency · Crisis line</div><div className="value">911 · 988</div></a>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="head-row"><div><p className="kicker">Weekly schedule</p><h2>Outreach routes and clinics</h2><p className="lede">Schedules may change due to weather or holidays. Please call or text to confirm.</p></div></div>
          <table className="schedule">
            <thead><tr><th>Day</th><th>Time</th><th>Location</th><th>Type</th></tr></thead>
            <tbody>
              {schedule.map((r) => <tr key={r.day + r.area}><td>{r.day}</td><td>{r.time}</td><td>{r.area}</td><td><span className="tag">{r.type}</span></td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <div className="container split top">
          <div><p className="kicker">Questions</p><h2>Frequently asked questions</h2><p className="lede">For anything not covered here, please contact us.</p></div>
          <div className="faq">{faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
        </div>
      </section>
    </>
  );
}
