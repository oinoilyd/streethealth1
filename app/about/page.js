import { about, site } from "@/content/site";
import PageHero from "@/components/PageHero";
import ImageSlot from "@/components/ImageSlot";
import CtaBand from "@/components/CtaBand";

export const metadata = { title: "About", description: `The story, values and team behind ${site.name}.` };

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={about.headline} lede={site.description} />
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <div className="eyebrow">Our story</div>
            {about.story.map((p, i) => <p key={i} className={i === 0 ? "lede" : ""} style={{ color: i ? "var(--ink-soft)" : undefined }}>{p}</p>)}
          </div>
          <ImageSlot label="Founding / history photo" alt="Our team on an early outreach walk" />
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-head reveal"><div><div className="eyebrow">What guides us</div><h2>Our values</h2></div></div>
          <div className="grid-4">
            {about.values.map((v, i) => (
              <div className="card reveal" key={v.title}><span className="card-num">0{i + 1}</span><h3>{v.title}</h3><p>{v.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal"><div><div className="eyebrow">The team</div><h2>The people on the route.</h2></div></div>
          <div className="grid-3">
            {about.team.map((m) => {
              const initials = m.name.replace(/^Dr\.\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");
              return (
                <div className="team-card reveal" key={m.name}>
                  <ImageSlot src={m.photo} alt={m.name}>{!m.photo && <span className="initials">{initials}</span>}</ImageSlot>
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight band">
        <div className="container center">
          <div className="eyebrow">In partnership with</div>
          <div className="partners" style={{ marginTop: 12 }}>{about.partners.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
