import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Barbu Media",
  url: SITE.url,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl("/social/barbu-media-social-card.jpg"),
  email: SITE.supportEmail,
  founder: {
    "@type": "Person",
    name: "Constantin Barbu",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zürich",
    addressCountry: "CH",
  },
  knowsAbout: [
    "native macOS software",
    "media adaptation",
    "multi-format video delivery",
    "before-and-after documentation",
    "local media processing",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  alternateName: "Barbu Media",
  url: SITE.url,
  inLanguage: "en",
  publisher: { "@id": `${SITE.url}/#organization` },
};

export function breadcrumbJsonLd(items: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export const finalovaJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE.url}/finalova/#software`,
  name: "Finalova",
  url: absoluteUrl("/finalova/"),
  image: absoluteUrl("/art/finalova-devices.webp"),
  description:
    "A native Mac workspace for adapting, captioning, reframing, compressing and delivering finished media across social, web and client channels.",
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "Video editing and media delivery",
  operatingSystem: "macOS",
  softwareRequirements: "Apple silicon Mac",
  creator: { "@id": `${SITE.url}/#organization` },
  featureList: [
    "Simultaneous multi-aspect-ratio previews",
    "Aspect-aware watermark calibration",
    "Client Delivery Packs",
    "Watch Folder automation",
    "Website Builder Mode",
    "On-device caption transcription",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "19",
    highPrice: "249",
    offerCount: "4",
    url: absoluteUrl("/finalova/pricing/"),
  },
};

export const baStudioJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE.url}/ba-studio/#software`,
  name: "B/A Studio",
  alternateName: "B∕A Studio",
  url: absoluteUrl("/ba-studio/"),
  image: absoluteUrl("/art/ba-studio-devices.webp"),
  description:
    "Native Mac and iPhone software for comparable before-and-after capture, rigid alignment, measured visual change and editorial publishing.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Before-and-after documentation",
  operatingSystem: "macOS, iOS",
  creator: { "@id": `${SITE.url}/#organization` },
  featureList: [
    "Guided iPhone capture",
    "Rigid before-and-after alignment",
    "B/A Lift Index measurement",
    "Client records stored locally",
    "Multi-format editorial exports",
    "Interactive website comparisons",
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "7.99",
    highPrice: "279",
    offerCount: "5",
    url: absoluteUrl("/ba-studio/pricing/"),
  },
};
