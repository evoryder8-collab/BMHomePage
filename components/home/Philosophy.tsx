import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PILLARS = [
  {
    title: "Offline first",
    body: "Your work never leaves your machine. No cloud requirement, no telemetry, no quiet uploads. Your clients' faces and your masters stay yours.",
  },
  {
    title: "Preview is truth",
    body: "Both apps render their preview through the same engine as the export. What you approve on screen is, pixel for pixel, what ships.",
  },
  {
    title: "Born on Apple Silicon",
    body: "Native Metal and VideoToolbox pipelines, tuned for everything from an M1 Air to an M4 Max. No Electron anywhere.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-ink py-28 text-ivory">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4 text-ivory/40">Why Barbu Media</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-lg max-w-2xl">Software you can defend.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-lg text-ivory/60">
            Every instrument is built in Zürich on the same three promises.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="border-t border-ivory/15 pt-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory/60">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="/store" className="!bg-ivory !text-ink hover:!bg-white">
              Visit the store
            </Button>
            <span className="text-sm text-ivory/50">
              Try before you buy. Both apps ship with a free trial.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
