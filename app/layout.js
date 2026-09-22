import "@fontsource-variable/source-serif-4/opsz.css";
import "@fontsource-variable/public-sans";
import "./globals.css";
import { site } from "@/content/site";
import AlertBar from "@/components/AlertBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport = { themeColor: "#002856" };

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["NGO", "MedicalOrganization"],
    name: site.name, url: site.url, email: site.email, description: site.description,
    areaServed: site.city, sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
  };
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <AlertBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
