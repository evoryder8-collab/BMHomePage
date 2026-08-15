import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { withBase, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press briefs, product facts and contact for journalists covering Barbu Media, Finalova and B∕A Studio.",
};

const FACTS = [
  ["Company", "Barbu Media, sole proprietorship, Zürich, Switzerland"],
  ["Founder", "Constantin Barbu"],
  ["Products", "Finalova (macOS), B∕A Studio (macOS & iOS)"],
  ["Posture", "Offline-first, no telemetry, native Apple Silicon"],
  ["Press contact", SITE.supportEmail],
] as const;

const BRIEFS = [
  {
    name: "Finalova Press & Product Brief",
    file: "/press/finalova-brief.md",
    blurb:
      "The intelligent media adaptation and delivery studio: the problem, the system, the engineering posture, and pricing.",
  },
  {
    name: "B∕A Studio Press & Product Brief",
    file: "/press/ba-studio-brief.md",
    blurb:
      "The before-and-after that can't lie: the thesis, the Lift Index science, capture, content engine and trust architecture.",
  },
] as const;

export default function PressPage() {
  return (
    <div className="bg-ivory">
      <section className="container-page py-16 md:py-20">
        <Reveal>
          <h1 className="display-lg">Press.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base text-ink/60">
            Writing about honest software? Everything below is yours to quote.
            For interviews, review licenses or anything else, write to{" "}
            <a
              className="underline underline-offset-2"
              href={`mailto:${SITE.supportEmail}`}
            >
              {SITE.supportEmail}
            </a>
            . We answer within two business days.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {BRIEFS.map((b, i) => (
            <Reveal key={b.file} delay={0.08 * i}>
              <a
                href={withBase(b.file)}
                download
                className="block h-full rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="eyebrow mb-3 text-gold">Download · Markdown</div>
                <h2 className="text-lg font-semibold">{b.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {b.blurb}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody>
                {FACTS.map(([k, v]) => (
                  <tr key={k} className="border-b border-ink/5 last:border-0">
                    <th className="w-40 px-6 py-3.5 align-top font-semibold text-ink/50">
                      {k}
                    </th>
                    <td className="px-6 py-3.5 text-ink/80">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
