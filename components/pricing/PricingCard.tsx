"use client";

import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

interface PricingCardProps {
  product: Product;
  highlight?: boolean;
  /** Accent gradient pair; defaults to the jade pair. */
  accent?: [string, string];
  /** Optional honest footnote rendered under the button. */
  note?: string;
}

export default function PricingCard({
  product,
  highlight = false,
  accent = ["#2e7d54", "#6bb08c"],
  note,
}: PricingCardProps) {
  const { add } = useCart();
  const period =
    product.billing === "monthly"
      ? "per month"
      : product.billing === "annual"
        ? "per year"
        : "one payment";

  return (
    <div
      className={`group relative h-full rounded-[1.6rem] p-px transition-transform duration-300 hover:-translate-y-1.5 ${
        highlight ? "" : "bg-ink/12"
      }`}
      style={
        highlight
          ? {
              background: `linear-gradient(140deg, ${accent[0]}, ${accent[1]} 45%, ${accent[0]})`,
              boxShadow: `0 30px 80px -34px ${accent[0]}99`,
            }
          : undefined
      }
    >
      <div className="gleam-border relative flex h-full flex-col rounded-[calc(1.6rem-1px)] bg-white/90 p-8 backdrop-blur">
        {/* Header row: edition left, badge right, nothing absolute, nothing clipped */}
        <div className="flex items-center justify-between gap-3">
          <div className="eyebrow text-[10px] text-ink/45">
            {product.edition}
          </div>
          {product.badge && (
            <span
              className="font-ui whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white"
              style={{
                background: `linear-gradient(120deg, ${accent[0]}, ${accent[1]})`,
              }}
            >
              {product.badge}
            </span>
          )}
        </div>
        <h3 className="font-display mt-2.5 text-xl text-ink">
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
          className={`btn-leaf font-ui w-full py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] ${
            highlight
              ? "text-white shadow-lg hover:brightness-110"
              : "border border-ink/25 text-ink hover:border-jade hover:text-jade-deep"
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

        {note && (
          <p className="mt-4 border-t border-ink/10 pt-4 text-[12.5px] leading-relaxed text-ink/50">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
