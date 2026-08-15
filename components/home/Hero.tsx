import Button from "@/components/ui/Button";
import { withBase } from "@/lib/site";

const d = (seconds: number) => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <>
      <section className="bm-hero" aria-labelledby="home-title">
        <div className="bm-hero-grid" aria-hidden />
        <div className="bm-hero-glow bm-hero-glow-coral" aria-hidden />
        <div className="bm-hero-glow bm-hero-glow-cyan" aria-hidden />

        <div className="container-page bm-hero-layout">
          <div className="bm-hero-copy">
            <p className="bm-kicker rise" style={d(0.04)}>
              Independent software atelier <span>·</span> Zürich
            </p>
            <h1 id="home-title" className="bm-hero-title rise" style={d(0.12)}>
              Make your work
              <br />
              <em>undeniable.</em>
            </h1>
            <p className="bm-hero-lede rise" style={d(0.22)}>
              Finalova turns one finished edit into every deliverable.
              B∕A&nbsp;Studio turns real results into proof. Two native
              instruments for professionals who refuse to ship almost.
            </p>
            <div className="bm-hero-actions rise" style={d(0.32)}>
              <Button href="/finalova">Meet Finalova</Button>
              <Button href="/ba-studio" variant="ghost">
                Discover B∕A Studio
              </Button>
            </div>
            <div className="bm-hero-foot rise" style={d(0.4)}>
              <span className="bm-status-dot" aria-hidden />
              Native on Apple silicon
              <span aria-hidden>·</span>
              Private by design
            </div>
          </div>

          <div className="bm-hero-visual rise" style={d(0.18)}>
            <div className="bm-product-orbit" aria-hidden />
            {/* Generated campaign cutout; the UI originates from the real app capture. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="bm-hero-devices"
              src={withBase("/art/finalova-devices.webp")}
              alt="Finalova running across a Mac and two phones, showing vertical and horizontal video formats"
              width="1536"
              height="1024"
              loading="eager"
              decoding="async"
            />
            <div className="bm-visual-caption bm-visual-caption-top">
              <span>01</span>
              <div>
                <strong>Finalova</strong>
                <small>Everything after the edit</small>
              </div>
            </div>
            <div className="bm-visual-caption bm-visual-caption-bottom">
              <span>9:16</span>
              <span>16:9</span>
              <span>4:5</span>
              <span>1:1</span>
            </div>
          </div>
        </div>

        <a className="bm-scroll-cue" href="#instruments" aria-label="See the instruments">
          <span>Scroll to enter</span>
          <i aria-hidden />
        </a>
      </section>

      <div className="bm-signal-strip" aria-label="Barbu Media principles">
        <div>
          <span>Native macOS</span>
          <i aria-hidden />
          <span>Offline first</span>
          <i aria-hidden />
          <span>Preview equals export</span>
          <i aria-hidden />
          <span>Built in Zürich</span>
          <i aria-hidden />
          <span>No telemetry</span>
        </div>
      </div>
    </>
  );
}
