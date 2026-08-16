import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the independent developer behind Barbu Media Software for support, licensing, press or workflow questions.",
  path: "/contact/",
  keywords: ["Barbu Media support", "Finalova support", "B/A Studio support"],
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
