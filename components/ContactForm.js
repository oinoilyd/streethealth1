"use client";
import { useState } from "react";

export default function ContactForm({ defaultTopic = "General question", topics }) {
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const options = topics || ["General question", "Request an outreach visit", "Volunteer", "Donate supplies", "Partnership", "Media"];

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus({ state: "ok", msg: "Thank you — your message is in. We'll get back to you within two business days." });
    } catch (err) {
      setStatus({ state: "err", msg: err.message });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-row">
        <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="phone">Phone <span className="muted">(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
        <div className="field">
          <label htmlFor="topic">Topic</label>
          <select id="topic" name="topic" defaultValue={defaultTopic}>
            {options.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
      <input className="hp" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-dark" type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : <>Send message <span className="arrow">→</span></>}
      </button>
      <p className="form-note">This form is not monitored 24/7. For urgent needs call our outreach line, or 911 in an emergency.</p>
      {status.state === "ok" && <div className="form-status ok" role="status">{status.msg}</div>}
      {status.state === "err" && <div className="form-status err" role="alert">{status.msg}</div>}
    </form>
  );
}
