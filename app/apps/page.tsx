import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Gleam from "@/components/ui/Gleam";
import { withBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "The Barbu Media instruments: Finalova for media delivery, B∕A Studio for provable before-and-afters, with more on the bench.",
};

export default function AppsPage() {
  return (
    <div>
      <section className="container-page py-16 text-center md:py-20">
        <Reveal>
          <h1 className="display-lg">
            The <span className="shimmer-jade">instruments.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink/60">
            Each one built in Zürich to do a professional job completely, and
            to pay for itself in the work it wins you.
          </p>
        </Reveal>
      </section>

      {/* Both instruments share one horizontal plane at every width */}
      <section className="container-page grid grid-cols-2 gap-4 pb-10 sm:gap-8">
        <Reveal>
          <Link
            href="/finalova"
            className="group block h-full overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="p-4 sm:p-8">
              <p className="eyebrow mb-2 text-[9px] text-aurora-mid sm:text-[11px]">
                For Mac
              </p>
              <h2 className="font-display text-xl font-bold text-ink sm:text-3xl">
                Finalova
              </h2>
              <p className="mt-2 hidden text-sm leading-relaxed text-ink/60 sm:block">
                The intelligent media adaptation and delivery studio.
                Everything after the edit, handled.
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-ink/60 sm:hidden">
                Everything after the edit, handled.
              </p>
              <Gleam className="mt-4 rounded-lg sm:mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/screenshots/finalova/window-main.webp")}
                  alt="Finalova main window"
                  className="w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Gleam>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/ba-studio"
            className="didone-scope group block h-full overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="p-4 sm:p-8">
              <p className="eyebrow mb-2 text-[9px] text-jade sm:text-[11px]">
                For Mac &amp; iPhone
              </p>
              <h2 className="font-didone text-xl font-medium text-ink sm:text-3xl">
                B∕A Studio
              </h2>
              <p className="mt-2 hidden text-sm leading-relaxed text-ink/60 sm:block">
                The before-and-after studio that can&rsquo;t lie. Credibility,
                measured in millimetres.
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-ink/60 sm:hidden">
                Credibility, measured in millimetres.
              </p>
              <Gleam className="mt-4 rounded-lg sm:mt-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/screenshots/ba-studio/measurement.webp")}
                  alt="A measured B∕A Studio comparison: millimetre guides and the B∕A Lift Index"
                  className="aspect-[4/5] w-full rounded-lg object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-auto"
                />
              </Gleam>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="container-page pb-24">
        <Reveal delay={0.15}>
          <div className="flex min-h-[12rem] flex-col items-center justify-center rounded-2xl border border-dashed border-ink/20 bg-white/30 p-8 text-center">
            <p className="eyebrow mb-3 text-ink/40">Next</p>
            <h2 className="display-md text-ink/70">
              The next instrument is on the bench.
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink/50">
              Barbu Media builds one tool at a time, completely. Follow along;
              new instruments land here first.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
