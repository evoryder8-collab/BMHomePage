import Button from "@/components/ui/Button";
import { withBase } from "@/lib/site";

const d = (seconds: number) => ({ animationDelay: `${seconds}s` });

export default function Hero() {
  return (
    <>
      <section className="publisher-hero" aria-labelledby="home-title">
        <div className="publisher-hero-rule" aria-hidden />
        {/* The publisher is expressed as a media system; products retain their own imagery. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="publisher-hero-art rise"
          style={d(0.08)}
          src={withBase("/art/barbu-media-signal-blueprint-pearl.png")}
          alt="A pearl-toned media blueprint connecting master frames, aspect ratios, timelines and audio waveforms"
          width="1672"
          height="941"
          loading="eager"
          decoding="async"
        />

        <div className="container-page publisher-hero-inner">
          <div className="publisher-hero-copy">
            <p className="publisher-overline rise" style={d(0.03)}>
              Independent software company <span>·</span> Zürich
            </p>
            <h1 id="home-title" className="rise" style={d(0.1)}>
              Useful software,
              <br />
              <em>thought through.</em>
            </h1>
            <p className="publisher-hero-lede rise" style={d(0.19)}>
              Focused professional tools, designed around the whole job—not
              just the feature that fits on a sales page.
            </p>
            <div className="publisher-hero-actions rise" style={d(0.27)}>
              <Button href="#products">Meet the software</Button>
              <Button href="#standard" variant="ghost">
                The Barbu standard
              </Button>
            </div>
          </div>

          <div className="publisher-hero-index rise" style={d(0.32)}>
            <span>Conceived and engineered in Switzerland</span>
            <strong>CH—ZH</strong>
            <small>Independent · private · product-led</small>
          </div>
        </div>

        <a className="publisher-scroll" href="#products">
          <span>Meet the software</span>
          <i aria-hidden />
        </a>
      </section>

      <div className="publisher-proofline" aria-label="Barbu Media Software principles">
        <span>Useful on day one</span>
        <span>Private by construction</span>
        <span>Built with judgment</span>
      </div>
    </>
  );
}
