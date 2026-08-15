import Button from "@/components/ui/Button";
import SwissMark from "@/components/ui/SwissMark";

/** Server component: the opening animation is pure CSS so the hero paints
 *  with the first frame instead of waiting for hydration (LCP). */
export default function Hero() {
  const d = (s: number) => ({ animationDelay: `${s}s` });

  return (
    <section className="grain relative overflow-hidden bg-ivory">
      <div className="container-page flex min-h-[82vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow rise mb-6 text-ink/50" style={d(0.05)}>
          Barbu Media
        </p>
        <h1 className="display-xl rise max-w-4xl" style={d(0.12)}>
          Instruments,
          <br />
          not apps.
        </h1>
        <p
          className="rise mt-7 max-w-2xl text-lg leading-relaxed text-ink/65"
          style={d(0.22)}
        >
          Professional Mac and iPhone software that pays for itself — precision
          tools that help you work faster, deliver more, and win the clients
          your work deserves.
        </p>
        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={d(0.32)}>
          <Button href="/finalova">Explore Finalova</Button>
          <Button href="/ba-studio" variant="ghost">
            Explore B∕A Studio
          </Button>
        </div>
        <div className="rise mt-14" style={d(0.42)}>
          <SwissMark />
        </div>
      </div>
    </section>
  );
}
