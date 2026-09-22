import { about, site } from "@/content/site";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Spray } from "@/components/Botanical";

export const metadata = { title: "About", description: `The history, values and staff of ${site.name}.` };

export default function About() {
  return (
    <>
      <PageHero crumb="About" title={about.headline} lede={site.description} />
      <section className="section">
        <div className="container split">
          <div>
            <p className="kicker">Our history</p>
            <h2>From weeknight walks to a year-round program</h2>
            {about.story.map((p, i) => <p key={i} style={{ color: "var(--ink-soft)" }}>{p}</p>)}
          </div>
          <div className="art-panel"><Spray /></div>
        </div>
      </section>

      <section className="section band-white">
        <div className="container">
          <div className="head-row"><div><p className="kicker">Values</p><h2>What guides our work</h2></div></div>
          <div className="grid-4">
            {about.values.map((v) => <div className="principle" key={v.title}><h3>{v.title}</h3><p>{v.body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head-row"><div><p className="kicker">Leadership & staff</p><h2>Our team</h2></div></div>
          <div className="grid-3">
            {about.team.map((m) => {
              const initials = m.name.replace(/^Dr\.\s*/, "").replace(/,.*$/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");
              return (
                <div className="team-card" key={m.name}>
                  <div className="avatar">{m.photo ? <img src={m.photo} alt={m.name} /> : <span>{initials}</span>}</div>
                  <div><h3>{m.name}</h3><p>{m.role}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight band-sage">
        <div className="container">
          <p className="kicker center">Partners</p>
          <h2 className="center" style={{ marginBottom: 28 }}>We work alongside</h2>
          <div className="partners">{about.partners.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
