import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact", description: `Get in touch with ${site.name}.` };

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." lede="Questions, partnerships, media or requesting a visit — we read every message." />
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal" style={{ display: "grid", gap: 16 }}>
            <a href={site.phoneHref} className="contact-tile"><div className="label">Outreach line</div><div className="value">{site.phone}</div></a>
            <a href={site.textHref} className="contact-tile"><div className="label">Text</div><div className="value">{site.textLine}</div></a>
            <a href={`mailto:${site.email}`} className="contact-tile"><div className="label">Email</div><div className="value" style={{ fontSize: "1.35rem" }}>{site.email}</div></a>
            <div className="contact-tile"><div className="label">Mailing address</div><div style={{ marginTop: 6 }}>{site.address}</div></div>
          </div>
          <div className="reveal"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
