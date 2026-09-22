import { donate, site } from "@/content/site";
import PageHero from "@/components/PageHero";
import DonateWidget from "@/components/DonateWidget";

export const metadata = { title: "Donate", description: `Support free street medicine with a gift to ${site.name}.` };

export default function Donate() {
  return (
    <>
      <PageHero crumb="Donate" title={donate.headline} lede={donate.body} />
      <section className="section">
        <div className="container split top">
          <DonateWidget />
          <div>
            <p className="kicker">Your impact</p>
            <h2>What your gift provides</h2>
            <table className="impact-table"><tbody>
              {donate.impact.map((i) => <tr key={i.amount}><td>${i.amount.toLocaleString()}</td><td>{i.label.charAt(0).toUpperCase() + i.label.slice(1)}</td></tr>)}
            </tbody></table>
            <p className="muted" style={{ marginTop: 24, fontSize: ".92rem" }}>To give by check, stock transfer or donor-advised fund, please email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
