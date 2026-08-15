import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/pricing/PricingCard";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "B∕A Studio Pricing",
  description:
    "B∕A Studio Lite, Pro and Lifetime. Priced like a professional instrument, because that's what it is.",
};

export default function BaPricingPage() {
  return (
    <div className="didone-scope">
      <section className="container-page py-20 text-center md:py-24">
        <Reveal>
          <p className="eyebrow mb-4 text-gold">B∕A Studio pricing</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-lg">
            Priced like <span className="shimmer-gold">an instrument.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/60">
            Because that&rsquo;s what it is. Exports carry your logo, so your
            license markets your studio and no one else&rsquo;s. Monthly,
            annual, or one purchase forever.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-8 pb-16 md:grid-cols-3">
        <Reveal>
          <PricingCard product={PRODUCTS["ba-lite-annual"]} />
        </Reveal>
        <Reveal delay={0.1}>
          <PricingCard product={PRODUCTS["ba-pro-annual"]} highlight />
        </Reveal>
        <Reveal delay={0.2}>
          <PricingCard product={PRODUCTS["ba-lifetime"]} />
        </Reveal>
      </section>

      <section className="container-page grid gap-8 pb-16 md:grid-cols-2">
        <Reveal>
          <PricingCard product={PRODUCTS["ba-lite-monthly"]} />
        </Reveal>
        <Reveal delay={0.1}>
          <PricingCard product={PRODUCTS["ba-pro-monthly"]} />
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-ink/10 bg-linen px-8 py-7 text-center">
            <div>
              <h2 className="text-lg font-semibold">On iPhone</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                B∕A Studio for iPhone brings the guided camera with LiDAR
                Enhanced capture. It ships through the App&nbsp;Store, and
                subscriptions there run through your Apple&nbsp;ID. Mac
                licenses are sold right here and include everything above.
              </p>
            </div>
            <AppStoreBadge />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
