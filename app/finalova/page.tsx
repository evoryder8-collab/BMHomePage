import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { withBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Finalova: everything after the edit",
  description:
    "Finalova is the complete media adaptation, automation and delivery system for Mac: Client Delivery Packs, Watch Folders, Website Builder Mode and more.",
};

const SUPPORTING = [
  {
    index: "01",
    title: "Media Bay",
    body: "Hundreds of photos and videos become one coherent job, with real Mac selection, filters, source colour coding and batch decisions.",
  },
  {
    index: "02",
    title: "Aspect calibration",
    body: "Balance logos for the way 9:16, 4:5 and 16:9 actually look—not one naive percentage copied across every shape.",
  },
  {
    index: "03",
    title: "Local captions",
    body: "Speech recognition stays on your Mac. Phrase timing respects clauses and holds, while the editable timeline renders exactly as exported.",
  },
  {
    index: "04",
    title: "Cinematic reframing",
    body: "See beyond the crop, keyframe the subject and create camera-like movement using a shape-preserving minimum-jerk path.",
  },
] as const;

export default function FinalovaPage() {
  return (
    <div className="finalova-world">
      <section className="fin-hero" aria-labelledby="finalova-title">
        <div className="fin-hero-grid" aria-hidden />
        <div className="container-page fin-hero-layout">
          <div className="fin-hero-copy">
            <p className="fin-label rise" style={{ animationDelay: ".04s" }}>
              Finalova · Media finishing for Mac
            </p>
            <h1 id="finalova-title" className="rise" style={{ animationDelay: ".12s" }}>
              Everything after
              <br />
              the edit. <em>One system.</em>
            </h1>
            <p className="rise" style={{ animationDelay: ".21s" }}>
              Adapt, automate and deliver finished media without rebuilding
              the same work for every platform, website and client handoff.
            </p>
            <div className="fin-hero-actions rise" style={{ animationDelay: ".3s" }}>
              <Button href="/finalova/pricing">Start the full trial</Button>
              <Button href="#studio-modes" variant="ghost">
                See Studio modes
              </Button>
            </div>
          </div>

          <div className="fin-hero-visual rise" style={{ animationDelay: ".18s" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/art/finalova-devices.webp")}
              alt="Finalova on a Mac with portrait and landscape delivery previews"
              width="1536"
              height="1024"
              loading="eager"
              decoding="async"
            />
          </div>

          <p className="fin-hero-meta rise" style={{ animationDelay: ".38s" }}>
            Native macOS · private processing · exact export previews
          </p>
        </div>
      </section>

      <nav className="fin-mode-nav" aria-label="Finalova key features">
        <div className="container-page">
          <span>Studio modes</span>
          <a href="#delivery-pack">Client Delivery Pack</a>
          <a href="#watch-folders">Watch Folders</a>
          <a href="#website-builder">Website Builder</a>
        </div>
      </nav>

      <section className="fin-thesis" aria-labelledby="fin-thesis-title">
        <div className="container-page fin-thesis-head">
          <Reveal>
            <p className="fin-label fin-label-dark">The missing half of post-production</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="fin-thesis-title">
              The film is finished.
              <br />
              <em>The job isn&rsquo;t.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Social shapes, branded versions, clean masters, captions,
              compressed web files, sensible names and client folders are not
              side tasks. They are the delivery. Finalova treats them as one
              connected production system.
            </p>
          </Reveal>
        </div>
        <div className="container-page">
          <Reveal delay={0.08}>
            <div className="fin-window fin-window-main">
              <div className="fin-window-bar">
                <i /><i /><i />
                <span>FINALOVA · MEDIA BAY</span>
                <small>LIVE WORKSPACE</small>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/finalova/window-main.webp")}
                alt="The authentic Finalova workspace with a media batch, device preview and caption timeline"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div id="studio-modes">
        <section id="delivery-pack" className="fin-monument fin-delivery" aria-labelledby="delivery-title">
          <div className="container-page fin-monument-head">
            <Reveal>
              <div className="fin-monument-index">
                <span>Studio mode</span>
                <strong>01</strong>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <p className="fin-label fin-label-dark">Client Delivery Pack</p>
                <h2 id="delivery-title">
                  One finished film.
                  <br />
                  <em>Every requested handoff.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="fin-monument-copy">
                <p>
                  Define the complete delivery once—social crops, clean
                  masters, website media and client-ready naming. Finalova
                  builds the full folder tree in one action and skips branches
                  that have nothing useful to contain.
                </p>
                <ul>
                  <li>Branding rules per destination</li>
                  <li>Editable folder architecture</li>
                  <li>One preview across every crop</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="container-page fin-monument-stage">
            <Reveal delay={0.08}>
              <div className="fin-window fin-window-delivery">
                <div className="fin-window-bar">
                  <i /><i /><i />
                  <span>CLIENT DELIVERY PACK</span>
                  <small>ONE-CLICK HANDOFF</small>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/screenshots/finalova/delivery-pack.webp")}
                  alt="Finalova building a complete client delivery pack"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
            <div className="fin-output-rail" aria-label="Example delivery outputs">
              <span>01 · SOCIAL / 9×16</span>
              <span>02 · SOCIAL / 4×5</span>
              <span>03 · WEBSITE / CLEAN</span>
              <span>04 · CLIENT MASTER</span>
            </div>
          </div>
        </section>

        <section id="watch-folders" className="fin-monument fin-watch" aria-labelledby="watch-title">
          <div className="fin-watch-grid" aria-hidden />
          <div className="container-page fin-watch-layout">
            <div className="fin-watch-copy">
              <Reveal>
                <div className="fin-monument-index fin-monument-index-light">
                  <span>Studio mode</span>
                  <strong>02</strong>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="fin-label">Watch Folders</p>
                <h2 id="watch-title">
                  Your export ends.
                  <br />
                  <em>Delivery begins.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.11}>
                <p>
                  Point Finalova at the folder where Resolve, Premiere, Final
                  Cut or CapCut finishes its renders. It waits for each file to
                  complete, then applies the finishing recipe automatically
                  while you move to the next job.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="fin-automation-flow" aria-label="Watch Folder workflow">
                  <span>EDIT APP</span><i>→</i><span>WATCH</span><i>→</i><span>DELIVER</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08} className="fin-watch-stage">
              <div className="fin-watch-status"><i /> AUTOMATION ACTIVE</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/finalova/watch-folders.webp")}
                alt="The Finalova Watch Folder automation queue"
                loading="lazy"
                decoding="async"
              />
              <div className="fin-watch-facts">
                <span>Fingerprint-safe</span>
                <span>Multi-client aware</span>
                <span>Inspectable queue</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="website-builder" className="fin-monument fin-web" aria-labelledby="web-title">
          <div className="container-page fin-web-intro">
            <Reveal>
              <div className="fin-monument-index">
                <span>Studio mode</span>
                <strong>03</strong>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <p className="fin-label fin-label-dark">Website Builder Mode</p>
                <h2 id="web-title">
                  Make the site lighter.
                  <br />
                  <em>Keep the work intact.</em>
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="container-page fin-web-layout">
            <Reveal className="fin-web-stage">
              <div className="fin-window">
                <div className="fin-window-bar">
                  <i /><i /><i />
                  <span>WEBSITE BUILDER</span>
                  <small>ACTUAL ENCODE PREVIEW</small>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/screenshots/finalova/web-optimize.webp")}
                  alt="Finalova Website Builder Mode showing an original versus compressed split preview"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
            <div className="fin-web-copy">
              <Reveal delay={0.07}>
                <p>
                  Export WebP, AVIF, JPEG, PNG or HEIF at exact target sizes.
                  Finalova performs the real encode and measures the finished
                  bytes, then lets you inspect original versus compressed
                  through a draggable split.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <dl>
                  <div><dt>05</dt><dd>Modern web formats</dd></div>
                  <div><dt>100%</dt><dd>Transparency preserved</dd></div>
                  <div><dt>REAL</dt><dd>Finished-byte measurement</dd></div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <section className="fin-workbench" aria-labelledby="workbench-title">
        <div className="container-page fin-workbench-head">
          <Reveal>
            <p className="fin-label">The daily workbench</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="workbench-title">
              The rest is not an afterthought.
            </h2>
          </Reveal>
        </div>
        <div className="container-page fin-workbench-layout">
          <Reveal className="fin-workbench-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/finalova/media-bay.webp")}
              alt="The Finalova Media Bay with a production batch and live phone preview"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="fin-supporting-list">
            {SUPPORTING.map((item, index) => (
              <Reveal key={item.index} delay={index * 0.04}>
                <article>
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="fin-trust">
        <div className="container-page fin-trust-layout">
          <Reveal>
            <p className="fin-label fin-label-dark">Native architecture</p>
            <h2>Born on Apple silicon.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Metal-backed Core Image, VideoToolbox and Apple&rsquo;s media
              engines—not a web wrapper, not an upload queue. Originals stay
              untouched, processing stays local and the geometry you approve
              is the geometry Finalova exports.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="fin-trust-stamps">
              <span>NO CLOUD</span><span>NO TELEMETRY</span><span>2 MACS</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="fin-closing">
        <div className="container-page">
          <Reveal>
            <p className="fin-label">Four hours of versions become one decision.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              Finish once.
              <br />
              <em>Deliver completely.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="fin-closing-actions">
              <Button href="/finalova/pricing">Choose your Finalova edition</Button>
              <Button href="/store" variant="ghost">Visit the store</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
