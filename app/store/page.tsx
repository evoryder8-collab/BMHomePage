import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import StoreProducts from "@/components/store/StoreProducts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Software Store",
  description:
    "Buy Finalova or B∕A Studio directly from Barbu Media Software. Perpetual and subscription options with a free trial.",
  path: "/store/",
  keywords: ["buy Finalova", "B/A Studio pricing", "Mac software perpetual license"],
});

export default function StorePage() {
  return (
    <div className="store-world">
      <section className="store-hero">
        <div className="store-aurora store-aurora-one" aria-hidden />
        <div className="store-aurora store-aurora-two" aria-hidden />
        <div className="container-page">
          <div className="store-hero-layout">
            <div className="store-hero-copy">
              <Reveal>
                <p>Barbu Media Software · Direct licenses</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1>
                  Software worth owning.
                  <br />
                  <em>Choose your advantage.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="store-hero-lede">
                  Professional tools with clear editions, generous trials and
                  permanent ownership when you want it. No maze. No mystery tier.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="store-hero-proof" aria-label="Store promises">
                <div className="store-proof-card is-primary">
                  <span>01</span>
                  <strong>Try everything</strong>
                  <small>Full-feature trials before you decide</small>
                </div>
                <div className="store-proof-card">
                  <span>02</span>
                  <strong>Own the tool</strong>
                  <small>Perpetual options that keep working</small>
                </div>
                <div className="store-proof-card">
                  <span>03</span>
                  <strong>Checkout securely</strong>
                  <small>Direct licenses from the developer</small>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page store-catalog-wrap">
        <Reveal delay={0.08}>
          <StoreProducts />
        </Reveal>
      </section>
    </div>
  );
}
