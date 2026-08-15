"use client";

import Link from "next/link";
import { useState } from "react";
import CartButton from "@/components/cart/CartButton";
import AccountLink from "@/components/auth/AccountLink";

const LINKS = [
  { href: "/apps", label: "Apps" },
  { href: "/finalova", label: "Finalova" },
  { href: "/ba-studio", label: "B∕A Studio" },
  { href: "/store", label: "Store" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold tracking-[0.28em] text-ink"
          onClick={() => setOpen(false)}
        >
          BARBU&nbsp;MEDIA
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:block">
            <AccountLink />
          </span>
          <CartButton />
          <button
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-ivory md:hidden">
          <div className="container-page flex flex-col gap-4 py-5">
            {[...LINKS, { href: "/login", label: "Log in" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base text-ink/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
