"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, nav } from "@/content/site";
import LogoMark from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark"><LogoMark /></span>
          <span>{site.shortName}</span>
        </Link>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname.startsWith(item.href) ? "active" : ""}>
              {item.label}
            </Link>
          ))}
          <Link href="/donate" className="btn btn-primary">Donate</Link>
        </nav>
      </div>
    </header>
  );
}
