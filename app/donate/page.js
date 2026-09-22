import { donate, site } from "@/content/site";
import PageHero from "@/components/PageHero";
import DonateWidget from "@/components/DonateWidget";

export const metadata = { title: "Donate", description: `Support free street medicine with a gift to ${site.name}.` };

export default function Donate() {
  return (
    <>
      <PageHero eyebrow="Donate" title={donate.headline} lede={donate.body} />
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal"><DonateWidget /></div>
          <div className="reveal" style={{ background: "var(--forest-deep)", color: "#fff", borderRadius: "var(--radius-lg)", padding: "clamp(28px,4vw,48px)" }}>
            <div className="eyebrow" style={{ color: "var(--gold)" }}>Your impact</div>
            <ul className="impact-list">
              {donate.impact.map((i) => <li key={i.amount}><strong>${i.amount.toLocaleString()}</strong><span style={{ color: "#c9d6cf" }}>{i.label}</span></li>)}
            </ul>
            <p style={{ color: "#8fa39a", fontSize: ".9rem", marginTop: 20 }}>Prefer to give by check, stock or DAF? Email <a href={`mailto:${site.email}`} style={{ color: "#fff" }}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
