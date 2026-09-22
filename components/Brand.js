import Link from "next/link";
import { site } from "@/content/site";
import Emblem from "./Logo";

export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <Emblem />
      <span className="brand-text">
        <span className="brand-name">{site.shortName}</span>
        <span className="brand-sub">{site.brandSub}</span>
      </span>
    </Link>
  );
}
