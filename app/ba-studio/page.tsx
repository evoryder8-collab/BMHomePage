import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { withBase } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { baStudioJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "B/A Studio: credible before-and-after software",
  description:
    "Capture comparable images, align them without warping, measure visible change and publish credible before-and-after results on Mac and iPhone.",
  path: "/ba-studio/",
  keywords: [
    "before and after software",
    "aesthetic clinic photography app",
    "before after photo alignment",
    "LiDAR guided photo capture",
    "before after measurement software",
    "before after website slider",
  ],
  image: "/art/ba-studio-devices.webp",
  imageAlt: "B/A Studio on Mac and iPhone with a measured before-and-after comparison",
});

export default function BaStudioPage() {
  return (
    <div className="ba-world didone-scope">
      <JsonLd
        data={[
          baStudioJsonLd,
          breadcrumbJsonLd([
            ["Barbu Media Software", "/"],
            ["B/A Studio", "/ba-studio/"],
          ]),
        ]}
      />
      <section className="ba-hero" aria-labelledby="ba-title">
        <div className="ba-hero-grid" aria-hidden />
        <div className="container-page ba-hero-layout">
          <div className="ba-hero-copy">
            <p className="ba-label rise" style={{ animationDelay: ".04s" }}>
              B∕A Studio · Mac &amp; iPhone
            </p>
            <h1 id="ba-title" className="rise" style={{ animationDelay: ".12s" }}>
              Evidence,
              <br />
              <em>beautifully presented.</em>
            </h1>
            <p className="rise" style={{ animationDelay: ".21s" }}>
              Capture comparable images, measure visible change and publish
              before-and-after results that remain credible when someone
              examines the details.
            </p>
            <div className="ba-hero-actions rise" style={{ animationDelay: ".3s" }}>
              <Button href="/ba-studio/pricing">Choose B∕A Studio</Button>
              <Button href="#method" variant="ghost">See the method</Button>
            </div>
          </div>

          <div className="ba-hero-art rise" style={{ animationDelay: ".18s" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/art/ba-studio-devices.webp")}
              alt="B/A Studio on a Mac and iPhone showing a measured before-and-after comparison"
              width="1536"
              height="1024"
              loading="eager"
              decoding="async"
            />
          </div>

          <p className="ba-hero-proof rise" style={{ animationDelay: ".38s" }}>
            TWO ORIGINALS · ONE RIGID FRAME · ZERO COSMETIC EDITS
          </p>
        </div>
      </section>

      <nav className="ba-section-nav" aria-label="B/A Studio key features">
        <div className="container-page">
          <span>The method</span>
          <a href="#method">Honest alignment</a>
          <a href="#measurement">Lift Index</a>
          <a href="#capture">Guided capture</a>
          <a href="#publishing">Content engine</a>
        </div>
      </nav>

      <section id="method" className="ba-manifesto" aria-labelledby="method-title">
        <div className="container-page ba-manifesto-layout">
          <div className="ba-manifesto-copy">
            <Reveal>
              <p className="ba-label ba-label-light">The honest comparison</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="method-title">
                Honesty is not a disclaimer.
                <br />
                <em>It is the architecture.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                B∕A Studio permits only a rigid transform: move, rotate and
                uniformly scale. You can align the frames in real time, but
                there is no warp, liquify or local retouch in the pipeline.
                Colour matching is applied globally to the whole frame.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <blockquote>
                The dishonest operations are not hidden.
                <br />
                They do not exist.
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="ba-zero-stage">
            <div className="ba-card-caption">
              <span>CONTROL RESULT</span>
              <strong>Lift Index 0</strong>
              <small>Within measured noise</small>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/ba-studio/card-zero.webp")}
              alt="An unchanged face scored Lift Index 0 and labelled within noise"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section id="measurement" className="ba-measure" aria-labelledby="measure-title">
        <div className="container-page ba-measure-head">
          <Reveal>
            <p className="ba-label">The B∕A Lift Index</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="measure-title">
              A result you can
              <br />
              <em>put a number on.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.11}>
            <p>
              Facial landmarks are scaled to real millimetres. Change counts
              only after it clears the app&rsquo;s own 95% noise limit, so the
              reported number describes measured evidence rather than false
              precision.
            </p>
          </Reveal>
        </div>

        <div className="container-page ba-measure-stage">
          <Reveal className="ba-measure-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/ba-studio/measurement.webp")}
              alt="A B/A Studio comparison with anatomical guides and a measured lift of 2.9 millimetres"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="ba-measure-index">
            <Reveal delay={0.08}>
              <strong>375</strong>
              <span>B∕A Lift Index</span>
              <small>+2.9 mm measured lift</small>
            </Reveal>
            <Reveal delay={0.13}>
              <div className="ba-formula">
                <span>OPEN SCALE</span>
                <p>250 × max(0, measured lift − 95% noise limit)</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="capture" className="ba-capture" aria-labelledby="capture-title">
        <div className="ba-capture-line" aria-hidden />
        <div className="container-page ba-capture-layout">
          <div className="ba-capture-copy">
            <Reveal>
              <p className="ba-label">Guided capture · iPhone</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="capture-title">
                Make the after shot
                <br />
                <em>comparable at capture.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                A ghost of the original guides the frame. With Enhanced
                capture, LiDAR locks the shutter until the client is within
                3&nbsp;cm of the same distance and 3° of the same pitch. The
                perspective trick disappears before it can happen.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <dl>
                <div><dt>±3 cm</dt><dd>Distance tolerance</dd></div>
                <div><dt>±3°</dt><dd>Pitch tolerance</dd></div>
                <div><dt>LiDAR</dt><dd>Physical scale anchor</dd></div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="ba-capture-stage">
            <div className="ba-capture-phone">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/ba-studio/measure-flow.webp")}
                alt="The guided three-set B/A Studio measurement flow"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span>FRAME LOCKED · READY TO CAPTURE</span>
          </Reveal>
        </div>
      </section>

      <section id="publishing" className="ba-publish" aria-labelledby="publish-title">
        <div className="container-page ba-publish-head">
          <Reveal>
            <p className="ba-label">The content engine</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="publish-title">
              One honest result.
              <br />
              <em>A complete campaign.</em>
            </h2>
          </Reveal>
        </div>

        <div className="container-page ba-publish-layout">
          <Reveal className="ba-publish-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/ba-studio/editorial-card.webp")}
              alt="A finished B/A Studio editorial before-and-after card"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="ba-publish-copy">
            <Reveal delay={0.07}>
              <p>
                Preview 4:5, 1:1, 9:16 and 16:9 together, reposition the
                comparison in real time and export each format with your logo,
                an optional metadata dock and a pixel-accurate final preview.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="ba-format-stack">
                <span>4:5 · FEED</span>
                <span>9:16 · STORY</span>
                <span>16:9 · DISPLAY</span>
                <span>1:1 · SQUARE</span>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote>
                Editorial enough to earn attention.
                <br />
                Honest enough to keep it.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ba-web" aria-labelledby="ba-web-title">
        <div className="container-page ba-web-layout">
          <div className="ba-web-copy">
            <Reveal>
              <p className="ba-label ba-label-light">Website-ready proof</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="ba-web-title">The comparison can live where clients decide.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Create an interactive wipe for your website or a looping,
                transparent-cornered GIF from matched video. The visual proof
                moves beyond the social feed without losing its integrity.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="ba-web-stage">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/ba-studio/web-wipe.webp")}
              alt="A B/A Studio interactive comparison prepared for a website"
              loading="lazy"
              decoding="async"
            />
            <span><i /> DRAG TO COMPARE</span>
          </Reveal>
        </div>
      </section>

      <section className="ba-trust">
        <div className="container-page ba-trust-layout">
          <Reveal>
            <p className="ba-label">Trust architecture</p>
            <h2>Provenance without surveillance.</h2>
          </Reveal>
          <Reveal delay={0.07}>
            <p>
              Faces and client records stay on your devices. Exports can carry
              your visible identity and a private authorship signature, but the
              app never creates a face registry, never phones home and never
              identifies a client.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="ba-trust-tags">
              <span>OFFLINE</span><span>NO TELEMETRY</span><span>NO FACE REGISTRY</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ba-closing">
        <div className="container-page">
          <Reveal>
            <p className="ba-label ba-label-light">B∕A Studio</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              Results that hold up
              <br />
              <em>when a skeptic pushes back.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="ba-closing-actions">
              <Button href="/ba-studio/pricing">Choose your plan</Button>
              <Button href="/store" variant="ghost">Visit the store</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
