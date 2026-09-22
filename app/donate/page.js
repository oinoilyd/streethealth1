import { site, inventory, partnerMailto } from "@/content/site";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Donate", description: `Donate supplies to ${site.name} through our Amazon wishlist.` };

export default function Donate() {
  return (
    <>
      <PageHero crumb="Donate" title="Donate supplies" lede="Everything on this list goes directly to the people we meet on our medical runs. The easiest way to give is through our Amazon wishlist.">
        <div className="btn-row" style={{ marginTop: 24 }}>
          <a href={site.wishlistUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Shop our Amazon wishlist</a>
        </div>
      </PageHero>
      <section className="section">
        <div className="container">
          <p className="kicker">Our inventory</p>
          <h2>Items we hand out</h2>
          <div className="grid-4" style={{ marginTop: 24 }}>
            {inventory.map((g) => (
              <div className="principle" key={g.group}>
                <h3>{g.group}</h3>
                <ul className="wish single">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="muted" style={{ marginTop: 32, fontSize: ".95rem" }}>
            Questions about donating, or want to organize a supply drive? Email <a href={partnerMailto}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
