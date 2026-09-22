import { permanentRedirect } from "next/navigation";

// The Get Care page was retired; keep old links working.
export default function GetCare() {
  permanentRedirect("/services");
}
