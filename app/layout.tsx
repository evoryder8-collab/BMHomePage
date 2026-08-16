import type { Metadata } from "next";
import { Bodoni_Moda, Newsreader, Space_Grotesk, Syne } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/layout/AmbientBackground";
import CartDrawer from "@/components/cart/CartDrawer";
import CheckoutModal from "@/components/cart/CheckoutModal";
import JsonLd from "@/components/seo/JsonLd";
import SpatialVfx from "@/components/ui/SpatialVfx";
import { CartProvider } from "@/lib/cart";
import { AuthProvider } from "@/lib/auth";
import { SITE } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  applicationName: "Barbu Media Software",
  title: {
    default: "Barbu Media Software: Useful software, thought through.",
    template: "%s · Barbu Media Software",
  },
  description:
    "Purpose-built professional software from Zürich. Barbu Media Software creates unusually complete native tools without the missing pieces.",
  authors: [{ name: "Constantin Barbu", url: SITE.url }],
  keywords: [
    "Mac software",
    "media delivery software",
    "video aspect ratio editor",
    "social media video export",
    "before and after software",
    "native Apple silicon software",
    "Swiss software company",
  ],
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Barbu Media Software: Useful software, thought through.",
    description:
      "Purpose-built professional software that resolves the whole job, not just the obvious feature.",
    url: "/",
    type: "website",
    siteName: "Barbu Media Software",
    locale: "en_CH",
    images: [
      {
        url: "/social/barbu-media-social-card.jpg",
        width: 1200,
        height: 630,
        alt: "Barbu Media Software, professional software conceived and built in Zürich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbu Media Software: Useful software, thought through.",
    description:
      "Purpose-built professional software that resolves the whole job, not just the obvious feature.",
    images: ["/social/barbu-media-social-card.jpg"],
  },
  creator: "Barbu Media Software",
  publisher: "Barbu Media Software",
  category: "Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodoni.variable} ${newsreader.variable} ${grotesk.variable} ${syne.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <AmbientBackground />
        <SpatialVfx />
        <AuthProvider>
          <CartProvider>
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <CheckoutModal />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
