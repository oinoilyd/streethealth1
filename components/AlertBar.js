import { site } from "@/content/site";

export default function AlertBar() {
  return (
    <div className="alertbar" role="region" aria-label="Urgent contact">
      <div className="container">
        <span>
          Need care or see someone who does? Call <a href={site.phoneHref}>{site.phone}</a> or text{" "}
          <a href={site.textHref}>{site.textLine}</a>
        </span>
        <span className="emergency">
          Emergency: <a href="tel:911">911</a> · Crisis: <a href="tel:988">988</a>
        </span>
      </div>
    </div>
  );
}
