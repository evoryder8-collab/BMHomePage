import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

const LAST_UPDATED = new Date("2026-08-16T00:00:00+02:00");

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly", images: ["/art/barbu-media-ar-orbit.png"] },
  { path: "/apps", priority: 0.9, changeFrequency: "monthly" },
  { path: "/finalova", priority: 0.95, changeFrequency: "weekly", images: ["/art/finalova-devices.webp", "/screenshots/finalova/window-main.webp", "/screenshots/finalova/delivery-pack.webp"] },
  { path: "/finalova/pricing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ba-studio", priority: 0.95, changeFrequency: "weekly", images: ["/art/ba-studio-devices.webp", "/screenshots/ba-studio/editorial-card.webp", "/screenshots/ba-studio/measurement.webp"] },
  { path: "/ba-studio/pricing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/store", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  { path: "/press", priority: 0.65, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/refunds", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/impressum", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}/`,
    lastModified: LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: "images" in route
      ? route.images.map((image) => `${SITE.url}${image}`)
      : undefined,
  }));
}
