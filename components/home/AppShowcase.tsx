import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

/** Two acts, one per instrument, staged as numbered editorial chapters. */
export default function AppShowcase() {
  return (
    <>
      {/* Act I: Finalova */}
      <section className="relative overflow-hidden py-28">
        <div
          aria-hidden
          className="chapter-num absolute top-4 right-4 select-none md:right-10"
        >
          I
        </div>
        <div className="container-page grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-5 text-aurora-from">
                Finalova · for Mac
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg">
                Your edit ends.
                <br />
                <span className="shimmer-aurora">Finalova finishes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede mt-7 max-w-md text-ink/65">
                One finished film becomes a Reel, a square ad, a captioned cut,
                a clean client master and a web-ready set, all from one
                workspace that understands your media.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-9 space-y-3.5 font-ui text-[14px] text-ink/75">
                <li className="flex gap-3">
                  <span className="text-aurora-to">01</span> Watermarks that
                  stay visually consistent in every shape
                </li>
                <li className="flex gap-3">
                  <span className="text-aurora-to">02</span> Local captions
                  that respect how people actually speak
                </li>
                <li className="flex gap-3">
                  <span className="text-aurora-to">03</span> Whole client
                  deliveries produced in one click
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/finalova"
                className="font-ui mt-10 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-aurora-to transition-colors hover:text-ink"
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
      <section className="didone-scope relative overflow-hidden py-28">
        <div
          aria-hidden
          className="chapter-num absolute top-4 left-4 select-none md:left-10"
        >
          II
        </div>
        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <Tilt3D from={20} fromY={7} className="order-last lg:order-first">
            <ScreenshotFrame
              src="/screenshots/ba-studio/measurement.webp"
              alt="A B∕A Studio comparison card with millimetre measurement guides and the B∕A Lift Index"
              className="mx-auto max-w-md"
            />
          </Tilt3D>
          <div>
            <Reveal>
              <p className="eyebrow mb-5 text-jade">
                B∕A Studio · Mac &amp; iPhone
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg">
                The comparison
                <br />
                <span className="shimmer-jade">that can&rsquo;t lie.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede mt-7 max-w-md text-ink/65">
                Two originals. One rigid frame. Zero cosmetic edits, enforced
                by mathematics. Results measured in millimetres, on a card that
                looks like a page from a fashion magazine.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hairline-jade mt-9 max-w-md" />
              <p className="font-ui mt-5 text-[13px] tracking-[0.22em] text-jade-soft">
                B/A LIFT INDEX 375 · +2.9 MM
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link
                href="/ba-studio"
                className="font-ui mt-9 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-jade transition-colors hover:text-ink"
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
