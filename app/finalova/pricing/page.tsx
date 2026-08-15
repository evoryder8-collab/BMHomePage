import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingSwitcher from "@/components/pricing/PricingSwitcher";
import RoiCalculator from "@/components/pricing/RoiCalculator";

export const metadata: Metadata = {
  title: "Finalova Pricing",
  description:
    "Choose Finalova or Finalova Studio. Pay once or subscribe, with a 14-day full trial and perpetual ownership options.",
};

const FINALOVA_ACCENT: [string, string] = ["#ff553d", "#65ddec"];

export default function FinalovaPricingPage() {
  return (
    <div className="pricing-page finalova-pricing-page">
      <section className="product-pricing-hero">
        <div className="product-pricing-grid" aria-hidden />
        <div className="container-page product-pricing-layout">
          <div>
            <Reveal><p>Finalova · Pricing &amp; ownership</p></Reveal>
            <Reveal delay={0.05}>
              <h1>
                Choose the workflow.
                <br />
                <em>Keep the leverage.</em>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="product-pricing-promise">
              <p>
                Start with every feature unlocked for 14 days. Buy the core
                finishing system, step up to Studio automation, or subscribe
                when flexibility matters more than ownership.
              </p>
              <dl>
                <div><dt>14 days</dt><dd>Full trial</dd></div>
                <div><dt>2 Macs</dt><dd>Per license</dd></div>
                <div><dt>Forever</dt><dd>Perpetual editions keep working</dd></div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pricing-page-body">
        <div className="container-page pricing-page-intro">
          <Reveal><span>Finalova editions</span></Reveal>
          <Reveal delay={0.05}><h2>Pay once or subscribe. No hostage clause.</h2></Reveal>
          <Reveal delay={0.1}><p>Perpetual editions include one year of updates. Renewal is optional and the installed app does not stop working.</p></Reveal>
        </div>
        <div className="container-page">
          <Reveal delay={0.08}>
            <PricingSwitcher app="finalova" accent={FINALOVA_ACCENT} />
          </Reveal>
        </div>
      </section>

      <section className="pricing-roi-section">
        <div className="container-page pricing-roi-head">
          <Reveal><span>Business case</span></Reveal>
          <Reveal delay={0.05}><h2>The delivery can pay for the software.</h2></Reveal>
        </div>
        <div className="container-page">
          <Reveal delay={0.08}><RoiCalculator /></Reveal>
        </div>
      </section>
    </div>
  );
}
