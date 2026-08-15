import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/pricing/PricingCard";
import RoiCalculator from "@/components/pricing/RoiCalculator";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Finalova Pricing",
  description:
    "Own Finalova outright or subscribe to Studio. Perpetual licenses with 12 months of updates, optional penalty-free renewals, and a 14-day full trial.",
};

const COMPARISON: { feature: string; base: boolean; studio: boolean }[] = [
  { feature: "Logo & text watermarking with aspect-aware calibration", base: true, studio: true },
  { feature: "Crops, trims, reframes and keyframed motion", base: true, studio: true },
  { feature: "Local, editable, multilingual captions", base: true, studio: true },
  { feature: "Source-aware, full-quality export — no caps, no nags", base: true, studio: true },
  { feature: "Client Delivery Packs — multi-channel trees in one click", base: false, studio: true },
  { feature: "Watch Folders automation from your NLE", base: false, studio: true },
  { feature: "Web-optimized export sets", base: false, studio: true },
];

export default function FinalovaPricingPage() {
  return (
    <div className="bg-ivory">
      <section className="container-page py-20 text-center md:py-24">
        <Reveal>
          <p className="eyebrow mb-4 text-ink/50">Finalova pricing</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-lg">
            Own it. Or subscribe.
            <br />
            Never be held hostage.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/60">
            Perpetual licenses include 12 months of updates and keep working
            forever — renewing is optional, penalty-free, and $49. Every
            license covers 2 Macs with self-serve deactivation. Try Studio
            free for 14 days, full-featured.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-8 pb-20 md:grid-cols-3">
        <Reveal>
          <PricingCard product={PRODUCTS["finalova-perpetual"]} />
        </Reveal>
        <Reveal delay={0.1}>
          <PricingCard product={PRODUCTS["finalova-studio-perpetual"]} highlight />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col gap-8">
            <PricingCard product={PRODUCTS["finalova-studio-annual"]} />
          </div>
        </Reveal>
      </section>

      <section className="container-page grid gap-8 pb-20 md:grid-cols-2">
        <Reveal>
          <PricingCard product={PRODUCTS["finalova-studio-monthly"]} />
        </Reveal>
        <Reveal delay={0.1}>
          <PricingCard product={PRODUCTS["finalova-updates-renewal"]} />
        </Reveal>
      </section>

      {/* Comparison table */}
      <section className="container-page pb-20">
        <Reveal>
          <h2 className="display-md mb-8 text-center">Two editions, one line.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-white shadow-sm">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="px-6 py-4 font-semibold">Capability</th>
                  <th className="px-6 py-4 text-center font-semibold">Finalova</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Finalova Studio
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-ink/5 last:border-0">
                    <td className="px-6 py-3.5 text-ink/75">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center">
                      {row.base ? <span className="text-gold">✓</span> : <span className="text-ink/20">—</span>}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.studio ? <span className="text-gold">✓</span> : <span className="text-ink/20">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-center text-sm text-ink/55">
            Already own Finalova? Upgrade to Studio for the difference — your
            key, your activations and your presets carry over untouched.
          </p>
        </Reveal>
      </section>

      {/* ROI */}
      <section className="container-page pb-24">
        <Reveal>
          <RoiCalculator />
        </Reveal>
      </section>
    </div>
  );
}
