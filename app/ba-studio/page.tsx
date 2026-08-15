import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

export const metadata: Metadata = {
  title: "B∕A Studio: the comparison that can't lie",
  description:
    "The before-and-after studio for aesthetics professionals. Two originals, one rigid frame, zero cosmetic edits, with lift measured in millimetres against an honest noise floor.",
};

function GildedDivider() {
  return <div className="hairline-gold mx-auto my-0 w-full max-w-4xl" />;
}

export default function BaStudioPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page flex min-h-[78vh] flex-col items-center justify-center pt-24 text-center">
          <p
            className="eyebrow rise mb-7 text-gold/90"
            style={{ animationDelay: "0.05s" }}
          >
            B∕A Studio · for Mac &amp; iPhone
          </p>
          <h1 className="display-xl rise" style={{ animationDelay: "0.14s" }}>
            The comparison
            <br />
            <span className="shimmer-gold">that can&rsquo;t lie.</span>
          </h1>
          <p
            className="lede rise mt-8 max-w-2xl text-pearl/70"
            style={{ animationDelay: "0.26s" }}
          >
            Two originals. One rigid frame. Zero cosmetic edits, enforced by
            mathematics rather than promises. For massage therapists,
            facialists and lifting practitioners whose real results deserve to
            be believed again.
          </p>
          <div
            className="rise mt-11 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.38s" }}
          >
            <Button href="/ba-studio/pricing">See pricing</Button>
            <Button href="/store" variant="ghost">
              Visit the store
            </Button>
          </div>
        </div>
        <div className="container-page relative pb-28 pt-16">
          <Tilt3D from={26}>
            <ScreenshotFrame
              src="/screenshots/ba-studio/window-main.webp"
              alt="The B∕A Studio workspace: an aligned pair on the editorial card beside the Export Lab"
              priority
            />
          </Tilt3D>
        </div>
      </section>

      {/* Honesty, illustrated by the zero card */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="chapter-num absolute -top-6 right-2 md:right-8">
          01
        </div>
        <div className="container-page grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <div>
            <Reveal>
              <p className="eyebrow mb-5 text-gold">The thesis</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-md">
                Honesty is <span className="shimmer-gold">the product.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-[16.5px] leading-[1.8] text-pearl/65">
                Every editing app promises to make you look better. B∕A Studio
                is architected so that it cannot. The comparison engine permits
                only a rigid transform: move, rotate, uniformly scale. No warp,
                no liquify, no local retouch exists anywhere in the pipeline,
                and the one colour adjustment is a global tone match applied to
                the whole frame. Your results can be defended in an argument,
                because the dishonest operations do not exist in the code.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 max-w-md text-[15px] italic leading-relaxed text-pearl/50">
                Shown here on an unchanged face: the card says so, out loud.
                Lift Index 0, within noise, marked exploratory. The app was
                deliberately built to fail to flatter.
              </p>
            </Reveal>
          </div>
          <Tilt3D from={20} fromY={-7}>
            <ScreenshotFrame
              src="/screenshots/ba-studio/card-zero.webp"
              alt="A live comparison card scoring an unchanged face: B/A Lift Index 0, within noise, labelled exploratory"
              className="mx-auto max-w-md"
            />
          </Tilt3D>
        </div>
      </section>

      <GildedDivider />

      {/* Measurement */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="chapter-num absolute -top-6 left-2 md:left-8">
          02
        </div>
        <div className="container-page grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Tilt3D from={20} fromY={7} className="order-last md:order-first">
            <ScreenshotFrame
              src="/screenshots/ba-studio/measurement.webp"
              alt="A measured comparison: anatomical guides in degrees and millimetres, B/A Lift Index 375 at +2.9 mm"
              className="mx-auto max-w-md"
            />
          </Tilt3D>
          <div>
            <Reveal>
              <p className="eyebrow mb-5 text-gold">The B∕A Lift Index</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-md">
                Measured in <span className="shimmer-gold">millimetres.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-[16.5px] leading-[1.8] text-pearl/65">
                Facial landmarks are detected on both originals, scaled to real
                millimetres, and the vertical change of key features is
                measured. Then the honest part: the app computes its own noise
                floor, and only change that clears it with 95% confidence
                counts. The scale is open, unbounded, and anchored to physics,
                so anyone can audit it.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="glass-card glass-card-gold mt-9 px-7 py-6 text-center">
                <div className="font-ui text-[13.5px] text-pearl/70">
                  Lift Index = 250 × max(0, measured lift − 95% noise limit)
                </div>
                <div className="font-ui mt-3 text-xs tracking-[0.24em] text-gold-soft">
                  B∕A LIFT INDEX 375 · +2.9 MM
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GildedDivider />

      {/* Capture */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="chapter-num absolute -top-6 right-2 md:right-8">
          03
        </div>
        <div className="container-page py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-5 text-gold">Guided capture</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-md">
                The camera that{" "}
                <span className="shimmer-gold">matches your last shot.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-[16.5px] leading-[1.8] text-pearl/65">
                Comparability is created at capture time, not fixed afterwards.
                The guided camera overlays a ghost of the before photo so the
                after shot is framed to match. With Enhanced capture on iPhone,
                LiDAR physically locks the shutter until your client is within
                3&nbsp;cm of the same distance and 3° of the same pitch.
                Perspective tricks, the oldest cheat in the genre, are simply
                unavailable. LiDAR also grounds the millimetre scale in
                measured depth and detects when someone photographs a screen
                instead of a person.
              </p>
            </Reveal>
            <Tilt3D from={18} className="mx-auto mt-14 max-w-xl">
              <ScreenshotFrame
                src="/screenshots/ba-studio/measure-flow.webp"
                alt="The three-set measurement flow: brow tails, oral corners, lower contour lift"
              />
            </Tilt3D>
          </div>
        </div>
      </section>

      <GildedDivider />

      {/* Content engine */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="chapter-num absolute -top-6 left-2 md:left-8">
          04
        </div>
        <div className="container-page grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
          <Tilt3D from={20} fromY={7} className="order-last md:order-first">
            <ScreenshotFrame
              src="/screenshots/ba-studio/editorial-card.webp"
              alt="A finished editorial comparison card: Before and After on a warm mat with a gilded seam"
              className="mx-auto max-w-md"
            />
          </Tilt3D>
          <div>
            <Reveal>
              <p className="eyebrow mb-5 text-gold">The content engine</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-md">
                One capture. <span className="shimmer-gold">A full campaign.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-[16.5px] leading-[1.8] text-pearl/65">
                Every export is composed like a page from a fashion magazine:
                warm mat, Bodoni titling, a gilded seam, your logo, an optional
                metadata dock. One tap renders print-quality cards in 4:5, 1:1,
                9:16 and 16:9. Video cards choreograph both clips into the same
                frame, face-aligned. A trimmed range loops forever as a
                transparent-cornered GIF that floats on any website.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-8 space-y-3 border-l border-gold/35 pl-5 font-ui text-[13.5px] text-pearl/70">
                <li>Full-resolution Display P3 stills for feed, story and print</li>
                <li>Live preview renders pixel-for-pixel what you&rsquo;ll post</li>
                <li>Measurement claims structurally excluded from video cards</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <GildedDivider />

      {/* Trust */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="chapter-num absolute -top-6 right-2 md:right-8">
          05
        </div>
        <div className="container-page py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow mb-5 text-gold">Trust architecture</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-md">
                Provenance without{" "}
                <span className="shimmer-gold">surveillance.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-[16.5px] leading-[1.8] text-pearl/65">
                Every export carries your logo visibly and an invisible license
                signature woven into the image, robust to recompression and
                disclosed openly. It can prove authorship if your results are
                stolen. It attributes an export to a license; it never
                identifies a client and never phones home. The app is fully
                offline: no cloud, no telemetry, no face-recognition registry.
                For software that handles faces, the strongest feature is what
                it refuses to do.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Motto + CTA */}
      <section className="relative py-24 text-center md:py-32">
        <div className="hairline-gold absolute left-0 right-0 top-0 mx-auto max-w-4xl" />
        <div className="container-page">
          <Reveal>
            <p className="font-ui text-xs tracking-[0.4em] text-gold-soft">
              TWO ORIGINALS · ONE RIGID FRAME · ZERO COSMETIC EDITS
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="display-lg mt-8">
              Results that hold up
              <br />
              when a <span className="shimmer-gold">skeptic</span> pushes back.
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10">
              <Button href="/ba-studio/pricing">Choose your plan</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
