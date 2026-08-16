import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { withBase } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, finalovaJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Finalova: media adaptation and delivery for Mac",
  description:
    "Adapt one approved edit for social, web and client delivery from a native Mac workspace with multi-ratio previews, Watch Folders and Client Delivery Packs.",
  path: "/finalova/",
  keywords: [
    "Mac media delivery software",
    "video aspect ratio converter",
    "social media batch export",
    "video watermark sizing",
    "watch folder video automation",
    "website image compression Mac",
  ],
  image: "/art/finalova-devices.webp",
  imageAlt: "Finalova media adaptation workspace on Mac with portrait and landscape previews",
});

const SUPPORTING = [
  {
    index: "01",
    title: "Media Bay",
    body: "Bring hundreds of photos and videos into one coherent job. Filter, select and apply batch decisions without rebuilding a timeline for every destination.",
  },
  {
    index: "02",
    title: "Aspect calibration",
    body: "Preview 9:16, 4:5, 1:1 and 16:9 together, reposition in real time and keep a watermark optically balanced instead of copying one percentage across every shape.",
  },
  {
    index: "03",
    title: "Local captions",
    body: "Transcribe on your Mac, refine the timing on an editable caption track and preview the same result that will be written into every requested export.",
  },
  {
    index: "04",
    title: "Cinematic reframing",
    body: "See beyond the crop, keyframe the subject and create smooth reframing while every destination remains visible in the same workspace.",
  },
] as const;

export default function FinalovaPage() {
  return (
    <div className="finalova-world">
      <JsonLd
        data={[
          finalovaJsonLd,
          breadcrumbJsonLd([
            ["Barbu Media Software", "/"],
            ["Finalova", "/finalova/"],
          ]),
        ]}
      />
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
              Turn one approved edit into the social, website and client
              versions it actually needs, without rebuilding the work for
              every destination.
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
              Social crops, branded versions, clean masters, captions,
              compressed web files and client folders are the delivery.
              Finalova keeps those decisions together so a change can be
              reviewed once and carried through every required output.
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
                  Define the complete delivery once: social crops, clean
                  masters, website media, naming and folder structure.
                  Finalova builds the useful branches in a single batch export
                  and leaves empty destinations out.
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
                  <small>SINGLE BATCH HANDOFF</small>
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
                  Cut or CapCut finishes a render. It waits until the file is
                  complete, then applies the approved crop, branding, caption,
                  duration and delivery rules while you move to the next job.
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
                  Export WebP, AVIF, JPEG, PNG or HEIF against a real file-size
                  target. Finalova performs the encode, measures the finished
                  bytes and lets you compare the original with the compressed
                  result through a draggable split before delivery.
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
              engines. It is not a web wrapper or an upload queue. Originals stay
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
