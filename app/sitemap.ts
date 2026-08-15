import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/apps",
  "/finalova",
  "/finalova/pricing",
  "/ba-studio",
  "/ba-studio/pricing",
  "/store",
  "/press",
  "/contact",
  "/login",
  "/signup",
  "/legal/terms",
  "/legal/privacy",
  "/legal/refunds",
  "/legal/impressum",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r}/`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.startsWith("/legal") ? 0.3 : 0.8,
  }));
}
