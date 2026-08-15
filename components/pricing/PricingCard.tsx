"use client";

import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";
import type { CSSProperties } from "react";

interface PricingCardProps {
  product: Product;
  highlight?: boolean;
  accent?: [string, string];
  note?: string;
  position?: number;
}

export default function PricingCard({
  product,
  highlight = false,
  accent = ["#ff553d", "#65ddec"],
  note,
  position = 1,
}: PricingCardProps) {
  const { add } = useCart();
  const period =
    product.billing === "monthly"
      ? "per month"
      : product.billing === "annual"
        ? "per year"
        : "one payment";

  return (
    <article
      className={`commerce-plan is-${product.app} ${highlight ? "is-featured" : ""}`}
      style={{ "--plan-accent": accent[0], "--plan-accent-2": accent[1] } as CSSProperties}
    >
      <div className="commerce-plan-sheen" aria-hidden />
      <span className="commerce-plan-number" aria-hidden>{String(position).padStart(2, "0")}</span>
      <div className="commerce-plan-heading">
        <div className="commerce-plan-edition">
          <span>{product.edition}</span>
          {product.badge && <strong>{product.badge}</strong>}
        </div>
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
      </div>

      <div className="commerce-plan-price">
        {product.listPrice && <del>${product.listPrice}</del>}
        <strong>{formatPrice(product).replace(/\/(mo|yr)$/, "")}</strong>
        <span>{period}</span>
      </div>

      <ul className="commerce-plan-features">
        <li className="commerce-plan-includes">
          <span>Everything included</span>
        </li>
        {product.features.map((feature) => (
          <li key={feature}>
            <i aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="commerce-plan-action">
        <button onClick={() => add(product.sku)}>
          Choose this edition <span aria-hidden>↗</span>
        </button>
        {note && <p>{note}</p>}
      </div>
    </article>
  );
}
