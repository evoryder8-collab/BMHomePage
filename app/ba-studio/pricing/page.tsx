import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingSwitcher from "@/components/pricing/PricingSwitcher";
import AppStoreBadge from "@/components/ui/AppStoreBadge";

export const metadata: Metadata = {
  title: "B∕A Studio Pricing",
  description:
    "B∕A Studio Lite, Pro and Lifetime. Pay once or subscribe; priced like a professional instrument.",
};

export default function BaPricingPage() {
  return (
    <div className="didone-scope">
      <section className="container-page py-20 text-center md:py-24">
        <Reveal>
          <p className="eyebrow mb-4 text-jade">B∕A Studio pricing</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-lg">
            Priced like <span className="shimmer-jade">an instrument.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/60">
            Because that&rsquo;s what it is. Exports carry your logo, so your
            license markets your studio and no one else&rsquo;s.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <Reveal delay={0.1}>
          <PricingSwitcher app="ba-studio" />
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-ink/10 bg-white/70 px-8 py-7 text-center backdrop-blur">
            <div>
              <h2 className="font-ui text-base font-semibold text-ink">
                On iPhone
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                B∕A Studio for iPhone brings the guided camera with LiDAR
                Enhanced capture. It ships through the App Store, and
                subscriptions there run through your Apple ID. Mac licenses
                are sold right here and include everything above.
              </p>
            </div>
            <AppStoreBadge />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
