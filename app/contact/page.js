import { site, partnerMailto } from "@/content/site";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Contact", description: `Contact ${site.name}.` };

export default function Contact() {
  const { newVolunteerContact: volunteer } = site;
  return (
    <>
      <PageHero crumb="Contact" title="Contact us" lede="For general questions, partnerships and supply donations, email us. We're also on Instagram." />
      <section className="section">
        <div className="container grid-2">
          <a href={`mailto:${site.email}`} className="contact-tile"><div className="label">Email</div><div className="value">{site.email}</div></a>
          <a href={site.social.instagram} className="contact-tile" target="_blank" rel="noopener noreferrer"><div className="label">Instagram</div><div className="value">{site.social.instagramHandle}</div></a>
          <a href={`mailto:${volunteer.email}`} className="contact-tile"><div className="label">New volunteers: {volunteer.name}</div><div className="value">{volunteer.email}</div></a>
          <a href={partnerMailto} className="contact-tile"><div className="label">Partner with us</div><div className="value">Email about partnering</div></a>
          <a href="tel:911" className="contact-tile urgent"><div className="label">Emergency · Mental health crisis</div><div className="value">911 · 988</div></a>
        </div>
      </section>
    </>
  );
}
