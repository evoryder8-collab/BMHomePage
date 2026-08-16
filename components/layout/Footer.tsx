import Link from "next/link";
import SwissMark from "@/components/ui/SwissMark";
import { SITE, withBase } from "@/lib/site";

const COLUMNS = [
  {
    title: "Software",
    links: [
      ["/finalova", "Finalova"],
      ["/ba-studio", "B∕A Studio"],
      ["/apps", "All software"],
      ["/store", "Store"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/press", "Press room"],
      ["/contact", "Contact"],
      ["/account", "Your account"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/legal/terms", "Terms"],
      ["/legal/privacy", "Privacy"],
      ["/legal/refunds", "Refunds"],
      ["/legal/impressum", "Impressum"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bm-footer">
      <div className="container-page bm-footer-lead">
        <p>Barbu Media Software · Zürich</p>
        <h2>
          The useful idea,
          <br />
          <em>properly finished.</em>
        </h2>
        <Link href="/apps">
          Explore the software <span aria-hidden>↗</span>
        </Link>
      </div>

      <div className="container-page bm-footer-grid">
        <div className="bm-footer-brand">
          <Link href="/" className="bm-logo">
            <span className="bm-logo-glyph" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withBase("/brand/barbu-media-mark.png")} alt="" />
            </span>
            <span>
              <strong>BARBU MEDIA SOFTWARE</strong>
              <small>INDEPENDENT SOFTWARE COMPANY</small>
            </span>
          </Link>
          <p>Purpose-built professional software without the missing pieces.</p>
          <SwissMark dark />
        </div>

        {COLUMNS.map((column) => (
          <div className="bm-footer-column" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-page bm-footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span>Zürich, Switzerland · 47.3769° N, 8.5417° E</span>
      </div>
    </footer>
  );
}
