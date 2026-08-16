import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AppShowcase from "@/components/home/AppShowcase";
import Philosophy from "@/components/home/Philosophy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Useful professional Mac software, thoughtfully finished",
  description:
    "Barbu Media builds focused native Mac software for media adaptation, client delivery and credible before-and-after documentation.",
  path: "/",
  keywords: [
    "professional Mac software",
    "Finalova",
    "B/A Studio",
    "media workflow tools",
    "Zürich software developer",
  ],
  image: "/social/barbu-media-social-card.jpg",
  imageAlt: "Barbu Media Software spatial media workflow poster",
});

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <AppShowcase />
      <Philosophy />
    </div>
  );
}
