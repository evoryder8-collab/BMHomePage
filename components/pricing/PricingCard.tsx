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
  dark = false,
  accent = ["#b8963e", "#e3c878"],
}: PricingCardProps) {
  const { add } = useCart();
  const period =
    product.billing === "monthly"
      ? "per month"
      : product.billing === "annual"
        ? "per year"
        : "one purchase";

  const inner = dark
    ? "bg-[#16161c]/95 text-ivory"
    : "bg-white/90 text-ink backdrop-blur";
  const sub = dark ? "text-ivory/55" : "text-ink/55";
  const rule = dark ? "border-ivory/10" : "border-ink/10";

  return (
    <div
      className={`group relative h-full rounded-[1.6rem] p-[1.5px] transition-transform duration-300 hover:-translate-y-1.5 ${
        highlight ? "" : dark ? "bg-white/10" : "bg-ink/10"
      }`}
      style={
        highlight
          ? {
              background: `linear-gradient(140deg, ${accent[0]}, ${accent[1]} 45%, ${accent[0]})`,
              boxShadow: `0 24px 60px -24px ${accent[0]}66`,
            }
          : undefined
      }
    >
      <div
        className={`relative flex h-full flex-col rounded-[calc(1.6rem-1.5px)] p-7 ${inner}`}
      >
        {product.badge && (
          <span
            className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-md"
            style={{
              background: `linear-gradient(120deg, ${accent[0]}, ${accent[1]})`,
            }}
          >
            {product.badge}
          </span>
        )}

        <div className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${sub}`}>
          {product.edition}
        </div>
        <h3 className="mt-1.5 text-lg font-bold tracking-tight">
          {product.name}
        </h3>

        <div className="mt-5 flex items-end gap-2.5">
          <span className="text-[2.6rem] font-bold leading-none tracking-tight">
            {formatPrice(product).replace(/\/(mo|yr)$/, "")}
          </span>
          <div className="pb-1">
            {product.listPrice && (
              <div className={`text-sm line-through ${sub}`}>
                ${product.listPrice}
              </div>
            )}
            <div className={`text-xs ${sub}`}>{period}</div>
          </div>
        </div>

        <p className={`mt-3 text-sm leading-relaxed ${sub}`}>
          {product.tagline}
        </p>

        <ul className={`my-6 flex-1 space-y-3 border-t pt-5 text-[13.5px] ${rule}`}>
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-4.5 w-4.5 flex-none items-center justify-center rounded-full text-[9px] font-bold text-white"
                style={{
                  background: `linear-gradient(120deg, ${accent[0]}, ${accent[1]})`,
                }}
              >
                ✓
              </span>
              <span className={dark ? "text-ivory/85" : "text-ink/80"}>{f}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => add(product.sku)}
          className={`w-full rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
            highlight
              ? "text-white shadow-lg hover:brightness-110"
              : dark
                ? "bg-ivory text-ink hover:bg-white"
                : "bg-ink text-ivory hover:bg-ink-soft"
          }`}
          style={
            highlight
              ? {
                  background: `linear-gradient(120deg, ${accent[0]}, ${accent[1]})`,
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
