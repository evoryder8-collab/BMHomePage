"use client";

import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

interface PricingCardProps {
  product: Product;
  highlight?: boolean;
  dark?: boolean;
  /** Gradient for the highlight ring; defaults to the gold pair. */
  accent?: [string, string];
}

export default function PricingCard({
  product,
  highlight = false,
  accent = ["#c8a44b", "#e6cf8d"],
}: PricingCardProps) {
  const { add } = useCart();
  const period =
    product.billing === "monthly"
      ? "per month"
      : product.billing === "annual"
        ? "per year"
        : "one purchase";

  return (
    <div
      className={`group relative h-full rounded-[1.6rem] p-px transition-transform duration-300 hover:-translate-y-1.5 ${
        highlight ? "" : "bg-ink/15"
      }`}
      style={
        highlight
          ? {
              background: `linear-gradient(140deg, ${accent[0]}, ${accent[1]} 45%, ${accent[0]})`,
              boxShadow: `0 30px 80px -30px ${accent[0]}80`,
            }
          : undefined
      }
    >
      <div className="gleam-border relative flex h-full flex-col rounded-[calc(1.6rem-1px)] bg-white/85 p-8 backdrop-blur">
        {product.badge && (
          <span
            className="font-ui absolute -top-3 right-7 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-espresso shadow-md"
            style={{
              background: `linear-gradient(120deg, ${accent[1]}, ${accent[0]})`,
            }}
          >
            {product.badge}
          </span>
        )}

        <div className="eyebrow text-[10px] text-ink/45">
          {product.edition}
        </div>
        <h3 className="font-display mt-2 text-xl text-ink">
          {product.name}
        </h3>

        <div className="mt-6 flex items-end gap-3">
          <span className="font-display text-[2.9rem] leading-none text-ink">
            {formatPrice(product).replace(/\/(mo|yr)$/, "")}
          </span>
          <div className="pb-1">
            {product.listPrice && (
              <div className="text-sm text-ink/40 line-through">
                ${product.listPrice}
              </div>
            )}
            <div className="font-ui text-[11px] uppercase tracking-[0.14em] text-ink/45">
              {period}
            </div>
          </div>
        </div>

        <p className="mt-4 text-[15px] italic leading-relaxed text-ink/55">
          {product.tagline}
        </p>

        <ul className="my-7 flex-1 space-y-3.5 border-t border-ink/10 pt-6 font-ui text-[13.5px]">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className="mt-1.5 block h-1 w-4 flex-none rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${accent[0]}, ${accent[1]})`,
                }}
              />
              <span className="text-ink/75">{f}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => add(product.sku)}
          className={`font-ui w-full rounded-full py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 active:scale-[0.98] ${
            highlight
              ? "text-espresso shadow-lg hover:brightness-110"
              : "border border-ink/25 text-ink hover:border-gold/60 hover:text-gold-soft"
          }`}
          style={
            highlight
              ? {
                  background: `linear-gradient(120deg, ${accent[1]}, ${accent[0]})`,
                }
              : undefined
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
