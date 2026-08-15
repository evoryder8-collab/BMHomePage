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
    <footer className="border-t border-ink/10 bg-ivory-deep">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <div className="text-sm font-bold tracking-[0.28em]">
            BARBU&nbsp;MEDIA
          </div>
          <p className="max-w-[16rem] text-sm text-ink/70">
            Professional instruments for people whose work has to hold up.
          </p>
          <SwissMark />
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="eyebrow mb-4 text-ink/60">{col.title}</div>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-ink/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-ink/60 sm:flex-row sm:items-center sm:justify-between">
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
