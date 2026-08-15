import type { Metadata } from "next";
import { Bodoni_Moda, Newsreader, Space_Grotesk, Syne } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/layout/AmbientBackground";
import CartDrawer from "@/components/cart/CartDrawer";
import CheckoutModal from "@/components/cart/CheckoutModal";
import { CartProvider } from "@/lib/cart";
import { AuthProvider } from "@/lib/auth";
import { SITE } from "@/lib/site";
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
  title: {
    default: "Barbu Media: Make your work undeniable.",
    template: "%s · Barbu Media",
  },
  description:
    "Native professional software from Zürich: Finalova finishes every media deliverable, and B∕A Studio turns real before-and-after results into measurable proof.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "Barbu Media: Make your work undeniable.",
    description:
      "Finalova finishes media. B∕A Studio proves results. Two native instruments for professionals who refuse to ship almost.",
    type: "website",
    siteName: "Barbu Media",
  },
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
        <AmbientBackground />
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
