import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { withBase } from "@/lib/site";

const FINALOVA_FEATURES = [
  ["01", "Adapt", "Reframe, watermark and caption for every destination."],
  ["02", "Deliver", "Build complete, named client delivery packs in one export."],
  ["03", "Automate", "Let watch folders finish the routine while you move on."],
];

const BA_FEATURES = [
  ["Rigid only", "Move, rotate and uniformly scale. No warp. No liquify."],
  ["95% gate", "Only change beyond the measured noise floor becomes a claim."],
  ["Local always", "Faces, records and exports never leave your devices."],
];

export default function AppShowcase() {
  return (
    <div id="instruments">
      <section className="bm-intro">
        <div className="container-page bm-intro-grid">
          <Reveal>
            <p className="bm-kicker bm-kicker-dark">The collection · 01—02</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="bm-intro-title">
              Two disciplines.
              <br />
              <em>One standard.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="bm-intro-copy">
              These are not broad, forgettable suites. Each instrument takes
              one expensive professional problem and resolves it completely—
              with native speed, private processing and an interface worth
              spending the day inside.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bm-product bm-product-finalova" aria-labelledby="finalova-title">
        <div className="bm-product-light bm-product-light-coral" aria-hidden />
        <div className="container-page">
          <div className="bm-product-head">
            <Reveal>
              <div className="bm-product-number">01 / 02</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div>
                <p className="bm-kicker bm-kicker-coral">Finalova · macOS</p>
                <h2 id="finalova-title" className="bm-product-title">
                  Your edit ends.
                  <br />
                  <em>Finalova finishes.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="bm-product-summary">
                <p>
                  One finished film becomes every social cut, clean master,
                  web asset and client handoff—branded, captioned, reframed and
                  organised from one coherent workspace.
                </p>
                <Link href="/finalova" className="bm-text-link bm-text-link-coral">
                  Explore Finalova <span aria-hidden>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="bm-ui-stage bm-ui-stage-light">
              <div className="bm-window-bar" aria-hidden>
                <span /><span /><span />
                <b>Finalova · Media Bay</b>
                <small>LIVE WORKSPACE</small>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/finalova/window-main.webp")}
                alt="The real Finalova workspace with a media batch, device preview and caption timeline"
                width="1808"
                height="1630"
                loading="lazy"
                decoding="async"
              />
              <div className="bm-ui-glow" aria-hidden />
            </div>
          </Reveal>

          <div className="bm-feature-row">
            {FINALOVA_FEATURES.map(([index, title, body], i) => (
              <Reveal key={title} delay={0.06 + i * 0.06}>
                <article className="bm-feature">
                  <div className="bm-feature-top">
                    <span>{index}</span>
                    <i aria-hidden />
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="bm-format-story">
            <Reveal className="bm-format-copy">
              <p className="bm-kicker bm-kicker-coral">One source · every destination</p>
              <h3>
                Built for the formats
                <br />
                your clients ask for <em>after</em> the edit.
              </h3>
              <p>
                Preview vertical and widescreen versions together. Keep marks,
                safe areas and subtitles optically consistent. Then deliver a
                complete folder tree instead of a trail of manual exports.
              </p>
              <div className="bm-format-tags" aria-label="Supported delivery shapes">
                <span>9:16 Stories</span>
                <span>4:5 Social</span>
                <span>16:9 Film</span>
                <span>1:1 Ads</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="bm-delivery-card">
              <div className="bm-delivery-card-label">
                <span>Client Delivery Pack</span>
                <small>ONE-CLICK HANDOFF</small>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/finalova/delivery-pack.webp")}
                alt="Finalova building a complete client delivery pack"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bm-product bm-product-ba didone-scope" aria-labelledby="ba-title">
        <div className="bm-product-light bm-product-light-violet" aria-hidden />
        <div className="container-page">
          <div className="bm-product-head bm-product-head-light">
            <Reveal>
              <div className="bm-product-number">02 / 02</div>
            </Reveal>
            <Reveal delay={0.06}>
              <div>
                <p className="bm-kicker bm-kicker-aqua">B∕A Studio · Mac &amp; iPhone</p>
                <h2 id="ba-title" className="bm-product-title">
                  Proof,
                  <br />
                  <em>not persuasion.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="bm-product-summary">
                <p>
                  The before-and-after studio designed so the comparison
                  cannot lie. Two originals. One rigid frame. Real lift
                  measured in millimetres against an honest noise floor.
                </p>
                <Link href="/ba-studio" className="bm-text-link bm-text-link-aqua">
                  Explore B∕A Studio <span aria-hidden>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="bm-ba-campaign">
              <div className="bm-ba-orbit" aria-hidden />
              {/* Generated campaign cutout; composed from authentic app captures. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="bm-ba-devices"
                src={withBase("/art/ba-studio-devices.webp")}
                alt="B/A Studio on Mac and iPhone with a measured before-and-after comparison"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
              <div className="bm-ba-index">
                <strong>375</strong>
                <span>B∕A Lift Index</span>
                <small>+2.9 mm measured lift</small>
              </div>
            </div>
          </Reveal>

          <div className="bm-ba-proof-grid">
            <Reveal className="bm-ba-card-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/ba-studio/measurement.webp")}
                alt="An authentic B/A Studio comparison with anatomical guides and measured lift"
                loading="lazy"
                decoding="async"
              />
              <span className="bm-ba-card-caption">An open scale, anchored to physics.</span>
            </Reveal>
            <div className="bm-ba-principles">
              {BA_FEATURES.map(([title, body], i) => (
                <Reveal key={title} delay={0.05 + i * 0.07}>
                  <article>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={0.26}>
                <blockquote>
                  “Honesty is not a disclaimer here.
                  <br />
                  It is the architecture.”
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
