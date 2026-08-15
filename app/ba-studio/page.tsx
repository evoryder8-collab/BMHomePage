import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Gleam from "@/components/ui/Gleam";
import Button from "@/components/ui/Button";
import { withBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "B∕A Studio — The comparison that can't lie",
  description:
    "The before-and-after studio for aesthetics professionals. Two originals, one rigid frame, zero cosmetic edits — with lift measured in millimetres and an honest noise floor.",
};

function GildedDivider() {
  return <div className="gilded-rule mx-auto my-0 w-full max-w-4xl" />;
}

export default function BaStudioPage() {
  return (
    <div className="bg-ivory text-ink">
      {/* Hero */}
      <section className="grain relative bg-ivory-deep">
        <div className="container-page flex min-h-[80vh] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow rise mb-5 text-gold" style={{ animationDelay: "0.05s" }}>
            B∕A Studio · for Mac &amp; iPhone
          </p>
          <h1 className="display-xl serif-display rise" style={{ animationDelay: "0.12s" }}>
            The comparison
            <br />
            that can&rsquo;t lie.
          </h1>
          <p
            className="rise mt-7 max-w-2xl text-lg leading-relaxed text-ink/65"
            style={{ animationDelay: "0.22s" }}
          >
            Two originals. One rigid frame. Zero cosmetic edits — enforced by
            mathematics, not by promise. For massage therapists, facialists
            and lifting practitioners whose real results deserve to be
            believed again.
          </p>
          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.32s" }}
          >
            <Button href="/ba-studio/pricing" variant="gold">
              See pricing
            </Button>
            <Button href="/store" variant="ghost">
              Visit the store
            </Button>
          </div>
          <div className="rise mt-16 w-full max-w-4xl" style={{ animationDelay: "0.4s" }}>
            <Gleam className="rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/ba-studio/window-main.webp")}
                alt="The B∕A Studio workspace: an aligned before-and-after pair on the editorial card, with the Export Lab"
                className="w-full drop-shadow-2xl"
              />
            </Gleam>
          </div>
        </div>
      </section>

      {/* Honesty */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 text-gold">The thesis</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md serif-display">Honesty is the product.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-ink/65">
              Every editing app promises to make you look better. B∕A Studio is
              architected so that it cannot. The comparison engine permits only
              a rigid transform — move, rotate, uniformly scale. There is no
              warp, no liquify, no local retouch anywhere in the pipeline. The
              one colour adjustment is a single global tone match applied to
              the whole frame, so lighting can&rsquo;t masquerade as skin. The
              dishonest operations don&rsquo;t exist in the code — which means
              your results can be defended in an argument.
            </p>
          </Reveal>
        </div>
      </section>

      <GildedDivider />

      {/* Measurement */}
      <section className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Reveal>
            <p className="eyebrow mb-4 text-gold">The B∕A Lift Index</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md serif-display">
              Measured in millimetres.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
              Facial landmarks are detected on both originals, scaled to real
              millimetres, and the vertical change of key features is measured.
              Then the honest part: the app computes its own noise floor — and
              only change that clears it with 95% confidence counts. Two photos
              of an unchanged face score exactly zero. The scale is open,
              unbounded, and anchored to physics, so anyone can audit it.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 rounded-xl border border-gold/30 bg-ivory-deep px-6 py-5 text-center">
              <div className="font-mono text-sm text-ink/70">
                Lift Index = 250 × max(0, measured lift − 95% noise limit)
              </div>
              <div className="mt-3 text-xs tracking-[0.2em] text-gold">
                B∕A LIFT INDEX 375 · +2.9 MM
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.18}>
          <Gleam className="rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/ba-studio/measurement.webp")}
              alt="The Lift Guide Space: anatomical endpoints measured in degrees and millimetres"
              className="w-full drop-shadow-2xl"
            />
          </Gleam>
        </Reveal>
      </section>

      <GildedDivider />

      {/* Capture */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 text-gold">Guided capture</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md serif-display">
              The camera that matches your last shot.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-ink/65">
              Comparability is created at capture time, not fixed afterwards.
              The guided camera overlays a ghost of the before photo so the
              after shot is framed to match — and with Enhanced capture on
              iPhone, LiDAR physically locks the shutter until your client is
              within 3&nbsp;cm of the same distance and 3° of the same pitch.
              Perspective tricks, the oldest cheat in the genre, are simply
              unavailable. LiDAR also grounds the millimetre scale in measured
              depth and detects when someone photographs a screen instead of a
              person.
            </p>
          </Reveal>
        </div>
      </section>

      <GildedDivider />

      {/* Content engine */}
      <section className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal delay={0.18} className="order-last md:order-first">
          <Gleam className="rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase("/screenshots/ba-studio/editorial-card.webp")}
              alt="A finished editorial comparison card: Before and After on a warm mat with a gilded seam"
              className="mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </Gleam>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow mb-4 text-gold">The content engine</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md serif-display">
              One capture. A full campaign.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
              Every export is composed like a page from a fashion magazine —
              warm mat, Didone titling, a gilded seam, your logo, an optional
              metadata dock. One tap renders print-quality cards in 4:5, 1:1,
              9:16 and 16:9. Video cards choreograph both clips into the same
              frame, face-aligned. A trimmed range loops forever as a
              transparent-cornered GIF that floats on any website.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-7 space-y-2.5 text-sm text-ink/70">
              <li>· Full-resolution Display P3 stills for feed, story and print</li>
              <li>· Live preview renders pixel-for-pixel what you&rsquo;ll post</li>
              <li>· Measurement claims structurally excluded from video cards</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <GildedDivider />

      {/* Trust */}
      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-4 text-gold">Trust architecture</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md serif-display">
              Provenance without surveillance.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-ink/65">
              Every export carries your logo visibly and an invisible license
              signature woven into the image — robust to recompression,
              disclosed openly, and able to prove authorship if your results
              are stolen. It attributes an export to a license; it never
              identifies a client and never phones home. The app is fully
              offline: no cloud, no telemetry, no face-recognition registry.
              For software that handles faces, the strongest feature is what it
              refuses to do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Motto + CTA */}
      <section className="bg-ink py-20 text-center text-ivory md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-xs tracking-[0.35em] text-gold-soft">
              TWO ORIGINALS · ONE RIGID FRAME · ZERO COSMETIC EDITS
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="display-lg serif-display mt-6">
              Results that hold up
              <br />
              when a skeptic pushes back.
            </h2>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9">
              <Button href="/ba-studio/pricing" variant="gold">
                Choose your plan
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
