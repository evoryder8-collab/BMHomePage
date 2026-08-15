import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PILLARS = [
  {
    n: "01",
    title: "Offline first",
    body: "Your work never leaves your machine. No cloud requirement, no telemetry, no quiet uploads. Your clients' faces and your masters stay yours.",
  },
  {
    n: "02",
    title: "Preview is truth",
    body: "Both apps render their preview through the same engine as the export. What you approve on screen is, pixel for pixel, what ships.",
  },
  {
    n: "03",
    title: "Born on Apple Silicon",
    body: "Native Metal and VideoToolbox pipelines, tuned for everything from an M1 Air to an M4 Max. No Electron anywhere.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-32">
      <div className="hairline-gold absolute left-0 right-0 top-0 mx-auto max-w-5xl" />
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-5 text-gold/80">Why Barbu Media</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-lg max-w-3xl">
            Software you can <span className="shimmer-gold">defend.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede mt-6 max-w-xl text-ink/60">
            Every instrument is built in Zürich on the same three promises.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="glass-card gleam-border h-full p-8">
                <div className="font-display text-4xl text-gold/45">{p.n}</div>
                <h3 className="font-ui mt-5 text-lg font-semibold tracking-wide text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink/60">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/store">Visit the store</Button>
            <span className="text-[15px] italic text-ink/50">
              Try before you buy. Both apps ship with a free trial.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
