import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PricingSwitcher from "@/components/pricing/PricingSwitcher";
import AppStoreBadge from "@/components/ui/AppStoreBadge";

export const metadata: Metadata = {
  title: "B∕A Studio Pricing",
  description:
    "Choose B∕A Studio Lite, Pro or Lifetime. Subscription and lifetime options for Mac, with the iPhone edition on the App Store.",
};

const BA_ACCENT: [string, string] = ["#361528", "#62c4aa"];

export default function BaPricingPage() {
  return (
    <div className="pricing-page ba-pricing-page didone-scope">
      <section className="product-pricing-hero">
        <div className="product-pricing-grid" aria-hidden />
        <div className="container-page product-pricing-layout">
          <div>
            <Reveal><p>B∕A Studio · Pricing &amp; ownership</p></Reveal>
            <Reveal delay={0.05}>
              <h1>
                Invest in proof.
                <br />
                <em>Choose how you own it.</em>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="product-pricing-promise">
              <p>
                Start with editorial exports, add measurement and client
                records with Pro, or purchase the whole instrument once and
                keep every future update.
              </p>
              <dl>
                <div><dt>Lite</dt><dd>Content production</dd></div>
                <div><dt>Pro</dt><dd>Measurement &amp; records</dd></div>
                <div><dt>Lifetime</dt><dd>The whole instrument, forever</dd></div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pricing-page-body">
        <div className="container-page pricing-page-intro">
          <Reveal><span>B∕A Studio editions</span></Reveal>
          <Reveal delay={0.05}><h2>From content production to complete evidence.</h2></Reveal>
          <Reveal delay={0.1}><p>Choose a subscription for flexibility or Lifetime for permanent ownership and every future update.</p></Reveal>
        </div>
        <div className="container-page">
          <Reveal delay={0.08}>
            <PricingSwitcher app="ba-studio" accent={BA_ACCENT} />
          </Reveal>
        </div>
      </section>

      <section className="ba-pricing-mobile">
        <div className="container-page">
          <Reveal>
            <div>
              <span>On iPhone</span>
              <h2>Guided capture, carried with you.</h2>
              <p>
                B∕A Studio for iPhone includes the guided camera and LiDAR
                Enhanced capture. Download it from the App Store; Apple ID
                subscriptions are managed by Apple.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}><AppStoreBadge /></Reveal>
        </div>
      </section>
    </div>
  );
}
