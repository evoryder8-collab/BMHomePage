import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PRINCIPLES = [
  {
    n: "01",
    title: "Complete by design",
    body: "We start with the whole professional outcome, then engineer backwards until the handoffs, edge cases and repetitive last steps disappear.",
    proof: "The complete job, rather than the feature list, is the unit of design.",
  },
  {
    n: "02",
    title: "Useful on first launch",
    body: "Strong defaults carry real judgment. You can work immediately, then go deeper only when the job actually demands it.",
    proof: "No assembly project disguised as software.",
  },
  {
    n: "03",
    title: "Private and ownable",
    body: "Native performance, local processing and clear ownership keep the tool fast, dependable and answerable to the person who bought it.",
    proof: "Your work stays on the machines you trust.",
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
                We make focused professional software. If our name is on it,
                the awkward parts should already have been considered.
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
              The useful idea,
              <br />
              <em>properly finished.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Explore each product on its own terms and choose the one that
              belongs in your work.
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
