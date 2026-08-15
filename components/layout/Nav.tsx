"use client";

import Link from "next/link";
import { useState } from "react";
import CartButton from "@/components/cart/CartButton";
import AccountLink from "@/components/auth/AccountLink";

const LINKS = [
  { href: "/apps", label: "Software" },
  { href: "/finalova", label: "Finalova" },
  { href: "/ba-studio", label: "B∕A Studio" },
];

const MOBILE_LINKS = [
  ...LINKS,
  { href: "/store", label: "Store" },
  { href: "/press", label: "Company" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Log in" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bm-nav">
      <nav className="container-page bm-nav-inner" aria-label="Main navigation">
        <Link href="/" className="bm-logo" onClick={() => setOpen(false)}>
          <span className="bm-logo-glyph" aria-hidden>
            B∕M
          </span>
          <span>
            <strong>BARBU MEDIA SOFTWARE</strong>
            <small>INDEPENDENT · ZÜRICH</small>
          </span>
        </Link>

        <div className="bm-nav-links">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="bm-nav-actions">
          <AccountLink className="bm-nav-account" />
          <Link href="/store" className="bm-nav-store">
            Store
          </Link>
          <CartButton />
          <button
            type="button"
            className={`bm-menu-button ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`bm-mobile-menu ${open ? "is-open" : ""}`}>
        <div className="container-page">
          <p>Barbu Media Software</p>
          {MOBILE_LINKS.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
