import type { Metadata } from "next";
import { SITE } from "@/lib/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/social/barbu-media-social-card.jpg",
  imageAlt = "Barbu Media Software, independent professional software from Zürich",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialTitle = `${title} | ${SITE.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        "x-default": canonical,
      },
    },
    robots: noIndex
      ? { index: false, follow: false, noarchive: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: "en_CH",
      type: "website",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
