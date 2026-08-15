import Link from "next/link";
import SwissMark from "@/components/ui/SwissMark";
import { SITE } from "@/lib/site";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Apps",
    links: [
      { href: "/finalova", label: "Finalova" },
      { href: "/ba-studio", label: "B∕A Studio" },
      { href: "/store", label: "Store" },
      { href: "/apps", label: "All apps" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/press", label: "Press" },
      { href: "/contact", label: "Contact" },
      { href: "/account", label: "Your account" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Terms of Use" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/refunds", label: "Refunds" },
      { href: "/legal/impressum", label: "Impressum" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="hairline-gold" />
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="space-y-5">
          <div className="font-display text-lg tracking-[0.22em] text-pearl">
            BARBU&nbsp;MEDIA
          </div>
          <p className="max-w-[16rem] text-[15px] italic leading-relaxed text-pearl-dim">
            Professional instruments for people whose work has to hold up.
          </p>
          <SwissMark dark />
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="eyebrow mb-5 text-gold/80">{col.title}</div>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-ui text-sm text-pearl/55 transition-colors hover:text-gold-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-pearl/8">
        <div className="container-page flex flex-col gap-2 py-6 font-ui text-xs text-pearl/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}, {SITE.location}. All
            rights reserved.
          </span>
          <span>Finalova · B∕A Studio · More on the bench</span>
        </div>
      </div>
    </footer>
  );
}
