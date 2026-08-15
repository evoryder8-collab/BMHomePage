import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { withBase } from "@/lib/site";

const PRODUCTS = [
  {
    id: "finalova",
    href: "/finalova",
    index: "01",
    category: "Media finishing · macOS",
    name: "Finalova",
    promise: "The complete system after the edit.",
    body: "Turn one finished film into every version, web asset, captioned cut and client-ready delivery—without rebuilding the same job four times.",
    image: "/art/finalova-devices.webp",
    imageAlt:
      "Finalova on a Mac with portrait and landscape delivery previews on phones",
    action: "Enter Finalova",
  },
  {
    id: "ba",
    href: "/ba-studio",
    index: "02",
    category: "Before-and-after proof · Mac & iPhone",
    name: "B∕A Studio",
    promise: "The comparison studio that cannot lie.",
    body: "Capture, align, measure and publish defensible before-and-after results with honest geometry, client-ready design and private processing.",
    image: "/art/ba-studio-devices.webp",
    imageAlt:
      "B/A Studio on a Mac and iPhone showing a measured before-and-after comparison",
    action: "Enter B∕A Studio",
  },
] as const;

export default function AppShowcase() {
  return (
    <section id="products" className="publisher-products" aria-labelledby="products-title">
      <div className="container-page">
        <div className="publisher-products-head">
          <Reveal>
            <p className="publisher-overline publisher-overline-dark">
              The software · 01—02
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="products-title">
              Different professions.
              <br />
              <em>The same level of resolve.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              Finalova and B∕A Studio are independent products. They do not
              share a workflow, a customer journey or a sales pitch. What they
              share is the company that refuses to leave the last 20% of a job
              unfinished.
            </p>
          </Reveal>
        </div>

        <div className="publisher-product-grid">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} delay={0.06 + index * 0.08}>
              <article className={`publisher-product-door is-${product.id}`}>
                <div className="publisher-product-door-head">
                  <span>{product.index}</span>
                  <p>{product.category}</p>
                </div>
                <div className="publisher-product-door-copy">
                  <h3>{product.name}</h3>
                  <strong>{product.promise}</strong>
                  <p>{product.body}</p>
                </div>
                <div className="publisher-product-door-visual">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBase(product.image)}
                    alt={product.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <Link href={product.href}>
                  <span>{product.action}</span>
                  <i aria-hidden>↗</i>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="publisher-products-note">
            <span>One company</span>
            <p>
              Two separate products, each with its own worthy page, language
              and decision path.
            </p>
            <Link href="/apps">View the software directory ↗</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
