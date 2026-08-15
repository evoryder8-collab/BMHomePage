import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/pricing/PricingCard";
import Button from "@/components/ui/Button";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import { withBase } from "@/lib/site";
import { PRODUCTS, type SKU } from "@/lib/products";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Buy Finalova and B∕A Studio. Own them outright or subscribe, with a free trial on both.",
};

const FINALOVA_SKUS: SKU[] = [
  "finalova-perpetual",
  "finalova-studio-perpetual",
  "finalova-studio-annual",
  "finalova-studio-monthly",
  "finalova-updates-renewal",
];

const BA_SKUS: SKU[] = [
  "ba-pro-annual",
  "ba-lifetime",
  "ba-lite-annual",
  "ba-pro-monthly",
  "ba-lite-monthly",
];

/** Compact jump tile so both apps are visible the moment the page opens,
 *  including on a phone. */
function AppTile({
  href,
  name,
  price,
  image,
  serif,
  dark,
}: {
  href: string;
  name: string;
  price: string;
  image: string;
  serif?: boolean;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${
        dark
          ? "border-ivory/10 bg-ink text-ivory"
          : "border-ink/10 bg-ivory-deep text-ink"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase(image)}
        alt=""
        className="mb-4 aspect-[16/10] w-full rounded-lg object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-[1.04]"
        loading="eager"
      />
      <div className={`text-base font-bold sm:text-lg ${serif ? "serif-display" : ""}`}>
        {name}
      </div>
      <div className={`mt-1 text-xs sm:text-sm ${dark ? "text-ivory/60" : "text-ink/60"}`}>
        {price}
      </div>
      <span
        className={`mt-2 inline-block text-xs font-semibold sm:text-sm ${
          dark ? "text-[#a78bfa]" : "text-gold"
        }`}
      >
        See options ↓
      </span>
    </Link>
  );
}

export default function StorePage() {
  return (
    <div className="bg-ivory">
      <section className="container-page pb-10 pt-16 text-center md:pt-20">
        <Reveal>
          <h1 className="display-lg">The store.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            Two instruments. Own them outright or subscribe. Try both free
            before you decide.
          </p>
        </Reveal>
        {/* Both apps, instantly visible, even at phone width */}
        <Reveal delay={0.18}>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:gap-6">
            <AppTile
              href="#finalova"
              name="Finalova"
              price="From $19/mo or $99 once"
              image="/screenshots/finalova/window-main.webp"
              dark
            />
            <AppTile
              href="#ba-studio"
              name="B∕A Studio"
              price="From $7.99/mo or $279 once"
              image="/screenshots/ba-studio/editorial-card.webp"
              serif
            />
          </div>
        </Reveal>
      </section>

      <section id="finalova" className="container-page scroll-mt-24 pb-16 pt-8">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="display-md">Finalova</h2>
              <p className="mt-1 text-sm text-ink/55">
                For Mac · free 14-day trial, full Studio
              </p>
            </div>
            <Button href="/finalova" variant="ghost">
              About Finalova
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FINALOVA_SKUS.map((sku, i) => (
            <Reveal key={sku} delay={0.06 * i}>
              <PricingCard
                product={PRODUCTS[sku]}
                highlight={sku === "finalova-studio-perpetual"}
                accent={["#6d28d9", "#2563eb"]}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="ba-studio" className="container-page scroll-mt-24 pb-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="display-md serif-display">B∕A Studio</h2>
              <p className="mt-1 text-sm text-ink/55">
                For Mac &amp; iPhone · free trial included
              </p>
            </div>
            <Button href="/ba-studio" variant="ghost">
              About B∕A Studio
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BA_SKUS.map((sku, i) => (
            <Reveal key={sku} delay={0.06 * i}>
              <PricingCard
                product={PRODUCTS[sku]}
                highlight={sku === "ba-pro-annual"}
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-ink/10 bg-ivory-deep px-8 py-7 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold">
                B∕A Studio for iPhone
              </h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink/65">
                The guided camera with LiDAR Enhanced capture lives on your
                iPhone. Get it on the App&nbsp;Store; subscriptions there run
                through your Apple&nbsp;ID.
              </p>
            </div>
            <AppStoreBadge />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
