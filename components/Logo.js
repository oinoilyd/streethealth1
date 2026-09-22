import Image from "next/image";
import logo from "@/public/logo.png";

export default function Emblem({ className = "brand-emblem" }) {
  return <Image src={logo} alt="" className={className} width={56} height={56} priority />;
}
