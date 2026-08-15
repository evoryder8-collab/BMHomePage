import Link from "next/link";
import type { ReactNode } from "react";

const LEGAL_LINKS = [
  { href: "/legal/terms", label: "Terms of Use" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/refunds", label: "Refund Policy" },
  { href: "/legal/impressum", label: "Impressum" },
];

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-linen">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[14rem_1fr] md:py-20">
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="eyebrow mb-4 text-ink/40">Legal</div>
          <nav className="flex flex-row flex-wrap gap-x-5 gap-y-2 md:flex-col">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink/60 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="max-w-2xl">
          <h1 className="display-md mb-2">{title}</h1>
          <p className="mb-10 text-xs text-ink/45">Last updated: {updated}</p>
          <div className="space-y-8 text-[15px] leading-relaxed text-ink/75 [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </div>
    </div>
  );
}
