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
    <header className="sticky top-0 z-40 border-b border-pearl/8 bg-obsidian/70 backdrop-blur-xl">
      <nav className="container-page flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg tracking-[0.22em] text-pearl"
          onClick={() => setOpen(false)}
        >
          BARBU&nbsp;MEDIA
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-ui text-[13px] tracking-[0.08em] text-pearl/60 transition-colors duration-200 hover:text-gold-soft"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block">
            <AccountLink />
          </span>
          <CartButton />
          <button
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-px w-5 bg-pearl" />
            <span className="h-px w-5 bg-pearl" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-pearl/8 bg-obsidian md:hidden">
          <div className="container-page flex flex-col gap-4 py-6">
            {[...LINKS, { href: "/login", label: "Log in" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-ui text-base text-pearl/80"
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
