import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/pricing/PricingCard";
import RoiCalculator from "@/components/pricing/RoiCalculator";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Finalova Pricing",
  description:
    "Own Finalova outright or subscribe to Studio. Perpetual licenses with a year of updates, optional renewals, and a 14-day full trial.",
};

const AURORA: [string, string] = ["#7c5cff", "#38bdf8"];

const COMPARISON: { feature: string; base: boolean; studio: boolean }[] = [
  { feature: "Logo & text watermarking with aspect-aware calibration", base: true, studio: true },
  { feature: "Crops, trims, reframes and keyframed motion", base: true, studio: true },
  { feature: "Local, editable, multilingual captions", base: true, studio: true },
  { feature: "Full-quality export with no caps and no nagging", base: true, studio: true },
  { feature: "Client Delivery Packs: every channel in one click", base: false, studio: true },
  { feature: "Watch Folders automation from your NLE", base: false, studio: true },
  { feature: "Web-optimized export sets", base: false, studio: true },
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <span
      className="mx-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-espresso"
      style={{ background: "linear-gradient(120deg,#7c5cff,#38bdf8)" }}
    >
      ✓
    </span>
  ) : (
    <span className="mx-auto block h-1.5 w-1.5 rounded-full bg-ink/15" />
  );
}

export default function FinalovaPricingPage() {
  return (
    <div>
      <section className="container-page py-20 text-center md:py-24">
        <Reveal>
          <p className="eyebrow mb-4 text-ink/50">Finalova pricing</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-lg">
            Own it. Or subscribe.
            <br />
            <span className="shimmer-aurora">Never be held hostage.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/60">
            A perpetual license includes a year of updates and keeps working
            forever. Renewing is optional and $49. Every license works on 2 of
            your Macs, and Studio is free to try for 14 days, full-featured.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-8 pb-20 md:grid-cols-3">
        <Reveal>
          <PricingCard product={PRODUCTS["finalova-perpetual"]} accent={AURORA} />
        </Reveal>
        <Reveal delay={0.1}>
          <PricingCard
            product={PRODUCTS["finalova-studio-perpetual"]}
            highlight
            accent={AURORA}
          />
        </Reveal>
        <Reveal delay={0.2}>
          <PricingCard product={PRODUCTS["finalova-studio-annual"]} accent={AURORA} />
        </Reveal>
      </section>

      <section className="container-page grid gap-8 pb-20 md:grid-cols-2">
        <Reveal>
          <PricingCard product={PRODUCTS["finalova-studio-monthly"]} accent={AURORA} />
        </Reveal>
        <Reveal delay={0.1}>
          <PricingCard product={PRODUCTS["finalova-updates-renewal"]} accent={AURORA} />
        </Reveal>
      </section>

      {/* Comparison table */}
      <section className="container-page pb-20">
        <Reveal>
          <h2 className="display-md mb-8 text-center">Two editions, <span className="shimmer-aurora">one line.</span></h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-linen shadow-sm">
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
                      <Mark on={row.base} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Mark on={row.studio} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 text-center text-sm text-ink/55">
            Already own Finalova? Upgrade to Studio for the difference. Your
            key, your Macs and your presets carry over untouched.
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
