import Link from "next/link";
import { site, partnerMailto } from "@/content/site";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Get Involved", description: "Volunteer on a medical run, donate supplies or partner with Rockford Street Medicine." };

export default function GetInvolved() {
  const { newVolunteerContact: contact } = site;
  return (
    <>
      <PageHero crumb="Get Involved" title="Get involved" lede="Volunteer on a medical run, send supplies from our wishlist, or partner with us to reach more people in Rockford." />

      <section className="section" id="volunteer">
        <div className="container split top">
          <div>
            <p className="kicker">Volunteer</p>
            <h2>Volunteer with us</h2>
            <p className="lede">Sign up for an upcoming medical run on SignUpGenius.</p>
            <a href={site.volunteerSignupUrl} className="btn btn-primary" style={{ marginTop: 8 }} target="_blank" rel="noopener noreferrer">Sign up for a run</a>
          </div>
          <div className="notice">
            <h3>New volunteer?</h3>
            <p>Please contact {contact.name} if you are a new volunteer.</p>
            <a href={`mailto:${contact.email}`} className="text-link">{contact.email}</a>
          </div>
        </div>
      </section>

      <div className="panel-row">
        <section id="partner">
          <p className="kicker">Partner</p>
          <h2>Partner with us</h2>
          <p style={{ color: "var(--ink-soft)", margin: "12px 0 24px" }}>We work with community organizations to provide safe, dignified and continuous care. If your organization would like to work with us, send us an email.</p>
          <a href={partnerMailto} className="btn btn-dark">Email us about partnering</a>
        </section>
        <section className="band-blush" id="donate">
          <p className="kicker">Donate</p>
          <h2>Donate supplies</h2>
          <p style={{ color: "var(--ink-soft)", margin: "12px 0 24px" }}>We hand out seasonal gear, hygiene items, first aid supplies, clothing and snacks on our runs.</p>
          <Link href="/donate" className="btn btn-outline">See what we need</Link>
        </section>
      </div>
    </>
  );
}
