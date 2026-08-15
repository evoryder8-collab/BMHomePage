import Reveal from "@/components/ui/Reveal";
import Gleam from "@/components/ui/Gleam";
import Button from "@/components/ui/Button";
import { withBase } from "@/lib/site";

export default function AppShowcase() {
  return (
    <>
      {/* ---- Finalova: aurora dark ---- */}
      <section className="aurora-bg relative overflow-hidden text-ivory">
        <div className="container-page grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-ivory/50">Finalova · for Mac</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg">
                Everything after the edit,{" "}
                <span className="aurora-text">handled.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70">
                One finished film becomes a Reel, a square ad, a Maps clip, a
                captioned cut, a clean client master and a web-ready set — from
                one batch, with your brand perfectly placed on every one.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-7 space-y-2.5 text-sm text-ivory/80">
                <li>· Watermarks calibrated for how the eye actually sees</li>
                <li>· Local, editable captions — no uploads, no subscriptions</li>
                <li>· Client Delivery Packs: a whole delivery in one click</li>
              </ul>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-9 flex gap-3">
                <Button href="/finalova" variant="gold">
                  Discover Finalova
                </Button>
                <Button
                  href="/finalova/pricing"
                  variant="ghost"
                  className="border-ivory/25 !text-ivory hover:border-ivory/60 hover:!bg-ivory/10"
                >
                  Pricing
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Gleam className="rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/finalova/window-main.webp")}
                alt="Finalova's main workspace: the Media Bay with a mixed batch of photos and videos, preview and brand controls"
                className="w-full max-w-full drop-shadow-2xl"
              />
            </Gleam>
          </Reveal>
        </div>
      </section>

      {/* ---- B/A Studio: warm editorial ---- */}
      <section className="bg-ivory-deep">
        <div className="container-page grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <Reveal delay={0.2} className="order-last md:order-first">
            <Gleam className="rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase("/screenshots/ba-studio/window-main.webp")}
                alt="B∕A Studio's editorial comparison card: before and after, one rigid frame"
                className="w-full max-w-full drop-shadow-2xl"
              />
            </Gleam>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-ink/45">
                B∕A Studio · for Mac &amp; iPhone
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg serif-display">
                The comparison that can&rsquo;t lie.
              </h2>
            </Reveal>
            <div className="gilded-rule my-6 max-w-xs" />
            <Reveal delay={0.16}>
              <p className="max-w-md text-base leading-relaxed text-ink/65">
                Two originals. One rigid frame. Zero cosmetic edits — enforced
                by mathematics, not by promise. The before-and-after studio for
                practitioners whose results deserve to be believed.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-7 space-y-2.5 text-sm text-ink/70">
                <li>· A comparison engine that structurally cannot retouch</li>
                <li>· Lift measured in millimetres, with an honest noise floor</li>
                <li>· Gallery-grade editorial cards from a single capture</li>
              </ul>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-9 flex gap-3">
                <Button href="/ba-studio">Discover B∕A Studio</Button>
                <Button href="/ba-studio/pricing" variant="ghost">
                  Pricing
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
