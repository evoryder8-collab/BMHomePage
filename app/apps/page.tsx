import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Gleam from "@/components/ui/Gleam";
import { withBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "The Barbu Media instruments: Finalova for media delivery, B∕A Studio for provable before-and-afters — with more on the bench.",
};

export default function AppsPage() {
  return (
    <div className="bg-ivory">
      <section className="container-page py-16 text-center md:py-20">
        <Reveal>
          <h1 className="display-lg">The instruments.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink/60">
            Each one built in Zürich to do a professional job completely — and
            to pay for itself in the work it wins you.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-10 pb-24 md:grid-cols-2">
        <Reveal>
          <Link
            href="/finalova"
            className="group block overflow-hidden rounded-2xl bg-ink text-ivory shadow-lg transition-shadow hover:shadow-2xl"
          >
            <div className="aurora-bg p-8">
              <p className="eyebrow mb-3 text-gold-soft">For Mac</p>
              <h2 className="display-md">Finalova</h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                The intelligent media adaptation and delivery studio.
                Everything after the edit, handled.
              </p>
              <Gleam className="mt-6 rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/screenshots/finalova/window-main.webp")}
                  alt="Finalova main window"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Gleam>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/ba-studio"
            className="group block overflow-hidden rounded-2xl bg-ivory-deep shadow-lg transition-shadow hover:shadow-2xl"
          >
            <div className="p-8">
              <p className="eyebrow mb-3 text-gold">For Mac &amp; iPhone</p>
              <h2 className="display-md serif-display">B∕A Studio</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                The before-and-after studio that can&rsquo;t lie. Credibility,
                measured in millimetres.
              </p>
              <Gleam className="mt-6 rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBase("/screenshots/ba-studio/editorial-card.webp")}
                  alt="A finished B∕A Studio editorial card"
                  className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Gleam>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex min-h-[16rem] flex-col items-center justify-center rounded-2xl border border-dashed border-ink/20 p-8 text-center md:col-span-2">
            <p className="eyebrow mb-3 text-ink/40">Next</p>
            <h2 className="display-md text-ink/70">
              The next instrument is on the bench.
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink/50">
              Barbu Media builds one tool at a time, completely. Follow along —
              new instruments land here first.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
