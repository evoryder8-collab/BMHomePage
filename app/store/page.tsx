import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import StoreProducts from "@/components/store/StoreProducts";

export const metadata: Metadata = {
  title: "Software Store",
  description:
    "Buy Finalova or B∕A Studio directly from Barbu Media Software. Perpetual and subscription options with a free trial.",
};

export default function StorePage() {
  return (
    <div className="store-world">
      <section className="store-hero">
        <div className="container-page store-hero-layout">
          <Reveal>
            <p>Barbu Media Software · Direct licenses</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1>
              Software store.
              <br />
              <em>Choose the product first.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span>Free trials</span>
              <span>Perpetual options</span>
              <span>Secure checkout</span>
            </div>
          </Reveal>
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
