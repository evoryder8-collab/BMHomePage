import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

/** Two acts, one per instrument, each in its own atmosphere. */
export default function AppShowcase() {
  return (
    <>
      {/* Act I: Finalova */}
      <section className="aurora-bg relative overflow-hidden py-28 text-ivory">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-[#a78bfa]">Finalova for Mac</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg">
                Your edit ends.
                <br />
                <span className="aurora-text">Finalova finishes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/70">
                One finished film becomes a Reel, a square ad, a captioned cut,
                a clean client master and a web-ready set, all from one
                workspace that understands your media.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-8 space-y-3 text-[15px] text-ivory/80">
                <li>Watermarks that stay visually consistent in every shape</li>
                <li>Local captions that respect how people actually speak</li>
                <li>Whole client deliveries produced in one click</li>
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/finalova"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#a78bfa] transition-colors hover:text-ivory"
              >
                Discover Finalova <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
          <Tilt3D from={20} fromY={-7}>
            <ScreenshotFrame
              src="/screenshots/finalova/media-bay.webp"
              alt="The Finalova Media Bay with a production batch and live phone preview"
            />
          </Tilt3D>
        </div>
      </section>

      {/* Act II: B∕A Studio */}
      <section className="grain relative overflow-hidden bg-ivory py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Tilt3D from={20} fromY={7} className="order-last lg:order-first">
            <ScreenshotFrame
              src="/screenshots/ba-studio/measurement.webp"
              alt="A B∕A Studio comparison card with millimetre measurement guides and the B∕A Lift Index"
              tone="light"
              className="mx-auto max-w-md"
            />
          </Tilt3D>
          <div>
            <Reveal>
              <p className="eyebrow mb-4 text-gold">B∕A Studio for Mac and iPhone</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg serif-display">
                The comparison
                <br />
                that can&rsquo;t lie.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
                Two originals. One rigid frame. Zero cosmetic edits, enforced by
                mathematics. Results measured in millimetres, on a card that
                looks like a page from a fashion magazine.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="gilded-rule mt-8 max-w-md" />
              <p className="mt-4 font-mono text-[13px] tracking-wide text-ink/50">
                B/A LIFT INDEX 375 · +2.9 MM
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/ba-studio"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-ink"
              >
                Discover B∕A Studio <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
