"use client";
import { useState } from "react";
import { site, donate } from "@/content/site";

export default function DonateWidget() {
  const [amount, setAmount] = useState(donate.impact[1].amount);
  const [monthly, setMonthly] = useState(true);
  const impact = donate.impact.find((i) => i.amount === amount);
  // Most donation platforms accept ?amount= ; adjust for yours.
  const href = `${site.donateUrl}?amount=${amount}${monthly ? "&frequency=monthly" : ""}`;

  return (
    <div className="form">
      <div className="btn-row" role="group" aria-label="Frequency">
        <button type="button" className={`amount${monthly ? " selected" : ""}`} style={{ flex: 1 }} onClick={() => setMonthly(true)}>Monthly</button>
        <button type="button" className={`amount${!monthly ? " selected" : ""}`} style={{ flex: 1 }} onClick={() => setMonthly(false)}>One-time</button>
      </div>
      <div className="amounts" role="group" aria-label="Amount">
        {donate.impact.map((i) => (
          <button type="button" key={i.amount} className={`amount${amount === i.amount ? " selected" : ""}`} onClick={() => setAmount(i.amount)}>
            ${i.amount.toLocaleString()}
          </button>
        ))}
      </div>
      <p className="impact-line">{impact ? <>${amount.toLocaleString()}{monthly ? "/month" : ""} {impact.label}.</> : null}</p>
      <a href={href} className="btn btn-primary" style={{ width: "100%", marginTop: 8 }} target="_blank" rel="noopener noreferrer">
        Give ${amount.toLocaleString()}{monthly ? " monthly" : ""} <span className="arrow">→</span>
      </a>
      <p className="form-note">Secure checkout. Gifts are tax-deductible to the extent allowed by law. EIN {site.ein}.</p>
    </div>
  );
}
