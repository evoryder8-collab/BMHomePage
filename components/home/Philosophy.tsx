import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PRINCIPLES = [
  {
    n: "01",
    title: "Native, all the way down.",
    body: "Metal, Core Image and VideoToolbox—not a web wrapper wearing a Mac costume.",
  },
  {
    n: "02",
    title: "Private by construction.",
    body: "Your masters and your clients’ faces stay on the devices you trust. No cloud dependency. No telemetry.",
  },
  {
    n: "03",
    title: "Preview is a promise.",
    body: "The geometry you approve is the geometry we export. No approximation between screen and delivery.",
  },
];

export default function Philosophy() {
  return (
    <>
      <section className="bm-atelier">
        <div className="container-page">
          <Reveal>
            <p className="bm-kicker">The Barbu standard</p>
          </Reveal>
          <div className="bm-atelier-heading">
            <Reveal delay={0.06}>
              <h2>
                Built like the work
                <br />
                <em>depends on it.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Because it does. Every instrument is conceived and engineered
                in Zürich around three promises that are expensive to keep—and
                obvious when they are broken.
              </p>
            </Reveal>
          </div>

          <div className="bm-principles">
            {PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.n} delay={0.06 + i * 0.07}>
                <article>
                  <span>{principle.n}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bm-closing">
        <div className="bm-closing-glow" aria-hidden />
        <div className="container-page bm-closing-inner">
          <Reveal>
            <p className="bm-kicker bm-kicker-dark">Ready when your work is</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2>
              Ship the work.
              <br />
              <em>Keep the standard.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Try both instruments before you buy. No cloud account required
              to understand what native professional software should feel like.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="bm-closing-actions">
              <Button href="/store">Visit the store</Button>
              <Button href="/apps" variant="ghost">Compare the instruments</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
