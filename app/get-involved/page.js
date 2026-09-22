import { getInvolved } from "@/content/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Get Involved", description: "Volunteer with our outreach teams, donate supplies or partner with us." };

export default function GetInvolved() {
  return (
    <>
      <PageHero crumb="Get Involved" title="Get involved" lede="Clinicians, students and community members support our work in many ways. All volunteers complete an orientation before joining a shift." />
      <section className="section">
        <div className="container">
          <div className="head-row"><div><p className="kicker">Volunteer</p><h2>Volunteer opportunities</h2></div></div>
          <div className="grid-3">
            {getInvolved.volunteerRoles.map((r) => <div className="principle" key={r.title}><h3>{r.title}</h3><p>{r.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section band-white">
        <div className="container split top">
          <div>
            <p className="kicker">Supply drive</p>
            <h2>Most-needed items</h2>
            <p className="lede">We accept new items only. Please contact us to arrange a drop-off.</p>
            <ul className="wish" style={{ marginTop: 20 }}>{getInvolved.wishlist.map((w) => <li key={w}>{w}</li>)}</ul>
            {getInvolved.wishlistUrl && <a href={getInvolved.wishlistUrl} className="btn btn-dark" style={{ marginTop: 24 }} target="_blank" rel="noopener noreferrer">View our online wishlist</a>}
          </div>
          <div>
            <ContactForm defaultTopic="Volunteer" title="Volunteer interest form" />
          </div>
        </div>
      </section>
    </>
  );
}
