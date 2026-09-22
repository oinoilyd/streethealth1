import { site } from "@/content/site";
export default function sitemap() {
  return ["", "/about", "/services", "/get-care", "/get-involved", "/donate", "/contact"].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
