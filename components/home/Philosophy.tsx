import Reveal from "@/components/ui/Reveal";

const PILLARS = [
  {
    title: "Offline-first",
    body: "Your work never leaves your machine. No cloud requirement, no telemetry, no quiet uploads — your clients' faces and your masters stay yours.",
  },
  {
    title: "Preview = export",
    body: "What you approve is what ships. One geometry system drives the preview and the renderer, so the finished file matches the decision you made.",
  },
  {
    title: "Built for Apple Silicon",
    body: "Native Metal and VideoToolbox pipelines, no Electron anywhere. Fast on an M2 Max, considerate on an M1 Air.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-24 md:py-32">
        <Reveal>
          <h2 className="display-md mb-4 text-center">
            Software you can defend.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-16 max-w-xl text-center text-ink/60">
            Every Barbu Media instrument is built on the same three promises —
            the unglamorous engineering that separates tools professionals
            trust from apps they tolerate.
          </p>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={0.12 * i}>
              <div className="border-t-2 border-ink pt-6">
                <h3 className="mb-3 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
