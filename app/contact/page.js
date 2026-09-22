import { site } from "@/content/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact", description: `Contact ${site.name}.` };

export default function Contact() {
  return (
    <>
      <PageHero crumb="Contact" title="Contact us" lede="For general questions, partnerships and media inquiries. To request an outreach visit, please call or text our outreach line." />
      <section className="section">
        <div className="container split top">
          <div style={{ display: "grid", gap: 14 }}>
            <a href={site.phoneHref} className="contact-tile"><div className="label">Outreach line</div><div className="value">{site.phone}</div></a>
            <a href={site.textHref} className="contact-tile"><div className="label">Text</div><div className="value">{site.textLine}</div></a>
            <a href={`mailto:${site.email}`} className="contact-tile"><div className="label">Email</div><div className="value">{site.email}</div></a>
            <div className="contact-tile"><div className="label">Mailing address</div><div style={{ marginTop: 4 }}>{site.address}</div></div>
          </div>
          <ContactForm title="Send us a message" />
        </div>
      </section>
    </>
  );
}
