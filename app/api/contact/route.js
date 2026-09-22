import { NextResponse } from "next/server";

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const { name = "", email = "", phone = "", topic = "General", message = "", company = "" } = body;

  if (company) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || !message.trim())
    return NextResponse.json({ error: "Please include your name, a valid email and a message." }, { status: 400 });
  if (message.length > 5000) return NextResponse.json({ error: "Message is too long." }, { status: 400 });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    // Not configured yet: log so submissions show in Vercel → Logs.
    console.log("[contact] (email not configured)", { name, email, phone, topic, message });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL || "Website <onboarding@resend.dev>",
      to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
      reply_to: email,
      subject: `[Website] ${topic} — ${name}`,
      html: `<p><b>Name:</b> ${esc(name)}<br/><b>Email:</b> ${esc(email)}<br/><b>Phone:</b> ${esc(phone)}<br/><b>Topic:</b> ${esc(topic)}</p><p>${esc(message).replace(/\n/g, "<br/>")}</p>`,
    }),
  });
  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "We couldn't send your message. Please email us directly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
