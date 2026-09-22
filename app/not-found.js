import Link from "next/link";
import { Sprig } from "@/components/Botanical";
export default function NotFound() {
  return (
    <section className="section center"><div className="container">
      <Sprig width={130} className="ornament" />
      <h1>Page not found</h1>
      <p className="lede">The page you requested could not be found.</p>
      <Link href="/" className="btn btn-dark" style={{ marginTop: 16 }}>Return home</Link>
    </div></section>
  );
}
