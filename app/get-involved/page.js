import { getInvolved } from "@/content/site";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Get Involved", description: "Volunteer on an outreach route, donate supplies or partner with us." };

export default function GetInvolved() {
  return (
    <>
      <PageHero eyebrow="Get involved" title="There's a place for you on the route." lede="Clinicians, students and community members all make this work possible. Here's how to join in." />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {getInvolved.volunteerRoles.map((r, i) => (
              <div className="card reveal" key={r.title}><span className="card-num">0{i + 1}</span><h3>{r.title}</h3><p>{r.body}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <div className="eyebrow">Supply drive</div>
            <h2>What we need most</h2>
            <p className="lede">New items only, please. Contact us to arrange a drop-off or send directly from our wishlist.</p>
            <div className="chips" style={{ marginTop: 24 }}>{getInvolved.wishlist.map((w) => <span key={w}>{w}</span>)}</div>
            {getInvolved.wishlistUrl && <a href={getInvolved.wishlistUrl} className="btn btn-dark" style={{ marginTop: 28 }} target="_blank" rel="noopener noreferrer">Open our wishlist →</a>}
          </div>
          <div className="reveal">
            <h3 style={{ marginBottom: 20 }}>Sign up to volunteer</h3>
            <ContactForm defaultTopic="Volunteer" />
          </div>
        </div>
      </section>
    </>
  );
}
