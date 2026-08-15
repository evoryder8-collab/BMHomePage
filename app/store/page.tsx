import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import StoreProducts from "@/components/store/StoreProducts";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Buy Finalova and B∕A Studio. Pay once or subscribe, with a free trial on both.",
};

export default function StorePage() {
  return (
    <div>
      <section className="container-page pb-8 pt-16 text-center md:pt-20">
        <Reveal>
          <h1 className="display-lg">
            The <span className="shimmer-jade">store.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">
            Two instruments. Pay once or subscribe. Try both free before you
            decide.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <Reveal delay={0.16}>
          <StoreProducts />
        </Reveal>
      </section>
    </div>
  );
}
