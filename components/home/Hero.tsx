import Button from "@/components/ui/Button";
import { withBase } from "@/lib/site";

const d = (seconds: number) => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <>
      <section className="publisher-hero" aria-labelledby="home-title">
        <div className="publisher-hero-rule" aria-hidden />
        {/* This visual represents the publisher, not either product. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="publisher-hero-art rise"
          style={d(0.08)}
          src={withBase("/art/brand-completion-engine.png")}
          alt="A precision-built abstract mechanism whose separate parts resolve into one complete instrument"
          width="1536"
          height="1024"
          loading="eager"
          decoding="async"
        />

        <div className="container-page publisher-hero-inner">
          <div className="publisher-hero-copy">
            <p className="publisher-overline rise" style={d(0.03)}>
              Barbu Media Software <span>·</span> Zürich
            </p>
            <h1 id="home-title" className="rise" style={d(0.1)}>
              Software that
              <br />
              <em>finishes the thought.</em>
            </h1>
            <p className="publisher-hero-lede rise" style={d(0.19)}>
              We build unusually complete professional tools around the part
              of the job everyone else leaves to workarounds.
            </p>
            <div className="publisher-hero-actions rise" style={d(0.27)}>
              <Button href="#products">Explore the software</Button>
              <Button href="#standard" variant="ghost">
                The Barbu standard
              </Button>
            </div>
          </div>

          <div className="publisher-hero-index rise" style={d(0.32)}>
            <span>Independent software company</span>
            <strong>01—02</strong>
            <small>Purpose-built products · more in development</small>
          </div>
        </div>

        <a className="publisher-scroll" href="#products">
          <span>Meet the software</span>
          <i aria-hidden />
        </a>
      </section>

      <div className="publisher-proofline" aria-label="Barbu Media Software principles">
        <div>
          <span>Useful out of the box</span>
          <i aria-hidden />
          <span>Native on Apple silicon</span>
          <i aria-hidden />
          <span>Private by construction</span>
          <i aria-hidden />
          <span>Built to own</span>
        </div>
      </div>
    </>
  );
}
