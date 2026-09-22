import { numbers } from "@/content/site";

export default function ByTheNumbers() {
  return (
    <section className="section-tight" aria-labelledby="numbers-heading">
      <div className="container">
        <p className="kicker">RSM by the numbers</p>
        <h2 id="numbers-heading" className="sr-only">Rockford Street Medicine by the numbers</h2>
        <div className="glance in-panel">
          {numbers.stats.map((s) => <div key={s.label}><div className="num">{s.value}</div><div className="lbl">{s.label}</div></div>)}
        </div>
        <p className="glance-caption">First medical run {numbers.firstRun}. Figures as of {numbers.asOf}.</p>
      </div>
    </section>
  );
}
