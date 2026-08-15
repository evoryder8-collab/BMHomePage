import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PRINCIPLES = [
  {
    n: "01",
    title: "Complete by design",
    body: "We start with the whole professional outcome, then engineer backwards until the handoffs, edge cases and repetitive last steps disappear.",
    proof: "The job—not the feature list—is the unit of design.",
  },
  {
    n: "02",
    title: "Useful on first launch",
    body: "Strong defaults carry real judgment. You can work immediately, then go deeper only when the job actually demands it.",
    proof: "No assembly project disguised as software.",
  },
  {
    n: "03",
    title: "Native and local",
    body: "Apple-native frameworks, hardware acceleration and private on-device processing make the software fast, calm and dependable.",
    proof: "Your work stays on the machines you trust.",
  },
  {
    n: "04",
    title: "Built to own",
    body: "Clear pricing, perpetual options and software that remains useful without a permanent cloud dependency or an artificial upgrade treadmill.",
    proof: "A tool should answer to its owner.",
  },
] as const;

export default function Philosophy() {
  return (
    <>
      <section id="standard" className="publisher-standard">
        <div className="container-page">
          <div className="publisher-standard-intro">
            <Reveal>
              <p className="publisher-overline">The Barbu standard</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2>
                The useful idea,
                <br />
                <em>taken all the way.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Barbu Media Software is a developer and publisher of focused
                professional software. Our reputation is meant to travel ahead
                of every new product: if we built it, the awkward parts have
                already been thought through.
              </p>
            </Reveal>
          </div>

          <div className="publisher-standard-list">
            {PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.n} delay={0.04 + index * 0.05}>
                <article>
                  <span>{principle.n}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                  <small>{principle.proof}</small>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="publisher-closing">
        <div className="publisher-closing-grid" aria-hidden />
        <div className="container-page publisher-closing-inner">
          <Reveal>
            <p className="publisher-overline">Software without the missing pieces</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2>
              Built to remove
              <br />
              <em>the last workaround.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Explore each product on its own terms, try the complete workflow
              and choose the tool that belongs in your work.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="publisher-closing-actions">
              <Button href="/apps">Explore all software</Button>
              <Button href="/store" variant="ghost">
                Visit the store
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
