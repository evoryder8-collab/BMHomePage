import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingSwitcher from "@/components/pricing/PricingSwitcher";
import RoiCalculator from "@/components/pricing/RoiCalculator";

export const metadata: Metadata = {
  title: "Finalova Pricing",
  description:
    "Own Finalova outright or subscribe to Studio. A year of updates included, optional renewals, and a 14-day full trial.",
};

const AURORA: [string, string] = ["#4338ca", "#0369a1"];

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
            forever. Every license works on 2 of your Macs, and Studio is free
            to try for 14 days, full-featured.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <Reveal delay={0.1}>
          <PricingSwitcher app="finalova" accent={AURORA} />
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <Reveal>
          <RoiCalculator />
        </Reveal>
      </section>
    </div>
  );
}
