import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/pricing/PricingCard";
import Button from "@/components/ui/Button";
import { PRODUCTS, type SKU } from "@/lib/products";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Buy Finalova and B∕A Studio. Perpetual licenses and subscriptions, worldwide checkout by Paddle.",
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

export default function StorePage() {
  return (
    <div className="bg-ivory">
      <section className="container-page py-16 text-center md:py-20">
        <Reveal>
          <h1 className="display-lg">The store.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink/60">
            Every license covers 2 Macs with self-serve activation management.
            Checkout is handled worldwide by Paddle — local currency, local
            tax, real invoices.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-16">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="display-md">Finalova</h2>
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
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="display-md serif-display">B∕A Studio</h2>
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
      </section>
    </div>
  );
}
