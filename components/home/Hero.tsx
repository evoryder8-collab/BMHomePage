import Button from "@/components/ui/Button";
import SwissMark from "@/components/ui/SwissMark";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

/** Opening act on the living stage. Text paints instantly (CSS-only rise),
 *  gold light breathes behind it, the flagship rises out of the fold. */
export default function Hero() {
  const d = (s: number) => ({ animationDelay: `${s}s` });

  return (
    <section className="relative overflow-hidden">
      <div className="container-page relative flex min-h-[88vh] flex-col items-center justify-center pb-12 pt-28 text-center">
        <p className="eyebrow rise mb-8 text-gold/90" style={d(0.05)}>
          Barbu Media · Zürich
        </p>
        <h1 className="display-xl rise max-w-5xl" style={d(0.14)}>
          Instruments,
          <br />
          <span className="shimmer-gold">not apps.</span>
        </h1>
        <p
          className="lede rise mt-9 max-w-2xl text-pearl/70"
          style={d(0.26)}
        >
          Professional Mac and iPhone software that pays for itself. Precision
          tools that help you work faster, deliver more, and win the clients
          your work deserves.
        </p>
        <div
          className="rise mt-11 flex flex-col gap-4 sm:flex-row"
          style={d(0.38)}
        >
          <Button href="/finalova">Explore Finalova</Button>
          <Button href="/ba-studio" variant="ghost">
            Explore B∕A Studio
          </Button>
        </div>
        <div className="rise mt-14" style={d(0.5)}>
          <SwissMark />
        </div>
      </div>

      <div className="container-page relative pb-32">
        <div className="hairline-gold mx-auto mb-16 max-w-3xl" />
        <Tilt3D from={24}>
          <ScreenshotFrame
            src="/screenshots/finalova/window-main.webp"
            alt="Finalova for Mac: a full production batch, live device preview and caption timeline in one workspace"
            priority
          />
        </Tilt3D>
      </div>
    </section>
  );
}
