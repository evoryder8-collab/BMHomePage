import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { withBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software",
  description:
    "Explore Finalova and B∕A Studio—two independent, purpose-built products from Barbu Media Software.",
};

export default function AppsPage() {
  return (
    <div className="software-directory">
      <section className="software-directory-hero">
        <div className="container-page">
          <Reveal><p>Barbu Media Software · Product directory</p></Reveal>
          <Reveal delay={0.05}>
            <h1>
              Purpose-built software.
              <br />
              <em>Each product stands alone.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Different professions, different workflows and different pages.
              One developer standard: take the useful idea all the way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page software-directory-list">
        <Reveal>
          <article className="software-directory-product is-finalova">
            <div className="software-directory-copy">
              <span>01 · Media finishing for Mac</span>
              <h2>Finalova</h2>
              <strong>Everything after the edit. One system.</strong>
              <p>Adaptation, automation, website media and complete client delivery.</p>
              <Link href="/finalova">Explore Finalova <i aria-hidden>↗</i></Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/art/finalova-devices.webp")} alt="Finalova product preview" />
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="software-directory-product is-ba">
            <div className="software-directory-copy">
              <span>02 · Before-and-after proof for Mac &amp; iPhone</span>
              <h2>B∕A Studio</h2>
              <strong>Evidence, beautifully presented.</strong>
              <p>Guided capture, honest alignment, defensible measurement and editorial export.</p>
              <Link href="/ba-studio">Explore B∕A Studio <i aria-hidden>↗</i></Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/art/ba-studio-devices.webp")} alt="B/A Studio product preview" />
          </article>
        </Reveal>
      </section>

      <section className="software-directory-next">
        <div className="container-page">
          <Reveal><span>03</span></Reveal>
          <Reveal delay={0.04}><h2>The next useful idea is on the bench.</h2></Reveal>
          <Reveal delay={0.08}><p>We release one focused product at a time—and finish it before announcing the next.</p></Reveal>
        </div>
      </section>
    </div>
  );
}
