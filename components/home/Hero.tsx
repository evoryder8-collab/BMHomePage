import Button from "@/components/ui/Button";
import SwissMark from "@/components/ui/SwissMark";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

/** Opening act: text paints instantly with CSS-only animation (LCP), then
 *  the app window rises out of the fold in 3D as you scroll. */
export default function Hero() {
  const d = (s: number) => ({ animationDelay: `${s}s` });

  return (
    <section className="grain relative overflow-hidden bg-ink text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 34rem at 70% -12%, rgba(109,40,217,0.32), transparent 62%), radial-gradient(50rem 30rem at 12% 30%, rgba(37,99,235,0.20), transparent 60%), radial-gradient(44rem 30rem at 88% 78%, rgba(184,150,62,0.10), transparent 65%)",
        }}
      />
      <div className="container-page relative flex min-h-[86vh] flex-col items-center justify-center pb-10 pt-28 text-center">
        <p className="eyebrow rise mb-6 text-ivory/50" style={d(0.05)}>
          Barbu Media
        </p>
        <h1 className="display-xl rise max-w-4xl" style={d(0.12)}>
          Instruments,
          <br />
          not apps.
        </h1>
        <p
          className="rise mt-7 max-w-2xl text-lg leading-relaxed text-ivory/65"
          style={d(0.22)}
        >
          Professional Mac and iPhone software that pays for itself. Precision
          tools that help you work faster, deliver more, and win the clients
          your work deserves.
        </p>
        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row"
          style={d(0.32)}
        >
          <Button
            href="/finalova"
            className="!bg-ivory !text-ink hover:!bg-white"
          >
            Explore Finalova
          </Button>
          <Button
            href="/ba-studio"
            variant="ghost"
            className="!border-ivory/30 !text-ivory hover:!border-ivory/60 hover:!bg-ivory/10"
          >
            Explore B∕A Studio
          </Button>
        </div>
        <div className="rise mt-12" style={d(0.42)}>
          <SwissMark dark />
        </div>
      </div>

      <div className="container-page relative pb-28">
        <Tilt3D from={26}>
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
