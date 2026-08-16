import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "About the Studio",
  description:
    "Meet Constantin Barbu and the working experience behind Barbu Media Software, an independent native Mac software studio in Zürich.",
  path: "/about/",
  keywords: [
    "Barbu Media founder",
    "independent Mac software studio",
    "Swiss software developer",
    "native Apple silicon development",
  ],
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE.url}/about/#page`,
  name: "About Barbu Media Software",
  url: `${SITE.url}/about/`,
  description:
    "The founder, field experience and engineering values behind Barbu Media Software.",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE.url}/about/#founder`,
    name: "Constantin Barbu",
    jobTitle: "Founder and software developer",
    worksFor: { "@id": `${SITE.url}/#organization` },
    knowsAbout: [
      "videography",
      "photography",
      "sound design",
      "post-production",
      "native macOS development",
    ],
  },
};

const CHAPTERS = [
  {
    number: "01",
    label: "Upbringing in the craft",
    title: "The work started before software.",
    body: [
      "My father was a photographer with an in-house studio, so I grew up around cameras, film, darkroom equipment and the practical discipline of handling physical media. Images were not abstract files. They had to be exposed carefully, processed properly, labelled and delivered in a form someone could keep.",
      "That environment taught me to respect the whole chain around an image, not only the moment it is made.",
    ],
  },
  {
    number: "02",
    label: "A working creative career",
    title: "Field experience shaped the brief.",
    body: [
      "I built my full-time career as a videographer, photographer and sound designer. The work ranged from hybrid photo and video packages to demanding international live events where the capture was only the beginning.",
      "I also handled post-production, versioning, client review and final distribution. That meant living with the details that broad creative suites often leave to the operator at the end of a long day.",
    ],
  },
  {
    number: "03",
    label: "The last-mile problem",
    title: "The edit was finished. The job was not.",
    body: [
      "The most exhausting friction was rarely the creative edit itself. It was rebuilding crops for several aspect ratios, keeping a watermark visually balanced in vertical and widescreen versions, moving text away from social interface controls, checking a 30-second cap and compressing another copy below a file-size limit.",
      "Every step was understandable on its own. Repeating all of them across several applications, jobs and clients was where professional time disappeared.",
    ],
  },
  {
    number: "04",
    label: "Why Barbu Media exists",
    title: "I began building the missing part.",
    body: [
      "Large software companies are good at building broad creative platforms. They are less likely to notice the narrow workflow gaps that make a late-night delivery unnecessarily difficult.",
      "Barbu Media exists to build the focused Mac tools I wanted beside me during those deliveries. Each product starts with a real job, follows it through to the final handoff and stays small enough to carry an informed point of view.",
    ],
  },
] as const;

const VALUES = [
  {
    title: "Native where it matters",
    body: "Swift, Metal, Core Image and VideoToolbox keep the work close to Apple silicon and make exact previews, responsive interfaces and dependable exports practical.",
  },
  {
    title: "Private by default",
    body: "Media processing and transcription happen on the device whenever the operating system makes that possible. There is no business model built around harvesting client work.",
  },
  {
    title: "Shaped by real deliveries",
    body: "Features earn their place by removing a recurring problem from capture, post-production or handoff. The goal is a calmer working day, not a longer checklist.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="about-world">
      <JsonLd
        data={[
          aboutJsonLd,
          breadcrumbJsonLd([
            ["Barbu Media Software", "/"],
            ["About the Studio", "/about/"],
          ]),
        ]}
      />

      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-orbit" aria-hidden />
        <div className="container-page about-hero-layout">
          <Reveal>
            <p className="about-label">About the studio · Zürich</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="about-title">
              Built from the
              <br />
              <em>handoff backward.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-hero-intro">
              I am Constantin Barbu. Before I started building software, I
              spent years doing the creative work these tools are designed to
              support. Barbu Media grew out of the parts of that work that
              should have been easier, clearer and more dependable.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="about-stamp">
              <span>Independent software studio</span>
              <strong>Zürich, Switzerland</strong>
              <small>Conceived and built in Zürich, Switzerland · 47.3769° N, 8.5417° E.</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-story" aria-label="The Barbu Media story">
        <div className="container-page">
          {CHAPTERS.map((chapter, index) => (
            <Reveal key={chapter.number} delay={index * 0.035}>
              <article className="about-chapter">
                <div className="about-chapter-index">
                  <span>{chapter.number}</span>
                  <small>{chapter.label}</small>
                </div>
                <h2>{chapter.title}</h2>
                <div>
                  {chapter.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-title">
        <div className="container-page">
          <div className="about-values-head">
            <Reveal>
              <p className="about-label">Engineering values</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="values-title">
                Practical choices,
                <br />
                <em>made deliberately.</em>
              </h2>
            </Reveal>
          </div>
          <div className="about-values-grid">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={0.05 + index * 0.05}>
                <article>
                  <span>0{index + 1}</span>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="container-page about-closing-layout">
          <Reveal>
            <p className="about-label">From one working professional to another</p>
            <h2>See whether one of the tools belongs in your work.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Explore the catalog at your own pace. If you want to ask about a
              workflow, a license or a problem the software should solve, the
              same person who builds the products reads the inbox.
            </p>
            <div>
              <Button href="/apps">Explore the software</Button>
              <Button href="/contact" variant="ghost">Get in touch</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
