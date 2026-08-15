"use client";

import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  product: Product;
  highlight?: boolean;
  dark?: boolean;
}

export default function PricingCard({
  product,
  highlight = false,
  dark = false,
}: PricingCardProps) {
  const { add } = useCart();

  const base = dark
    ? "bg-ink-soft text-ivory border-ivory/10"
    : "bg-white text-ink border-ink/10";
  const ring = highlight ? "ring-2 ring-gold shadow-xl" : "shadow-sm";

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 ${base} ${ring}`}
    >
      {product.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
          {product.badge}
        </span>
      )}
      <div className="mb-1 text-sm font-semibold opacity-60">
        {product.edition}
      </div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-bold tracking-tight">
          {formatPrice(product)}
        </span>
        {product.listPrice && (
          <span className="text-base line-through opacity-40">
            ${product.listPrice}
          </span>
        )}
      </div>
      <p className={`mt-3 text-sm ${dark ? "text-ivory/60" : "text-ink/60"}`}>
        {product.tagline}
      </p>
      <ul
        className={`my-6 flex-1 space-y-2.5 border-t pt-5 text-sm ${
          dark ? "border-ivory/10 text-ivory/80" : "border-ink/10 text-ink/75"
        }`}
      >
        {product.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <span className="text-gold">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlight ? "gold" : dark ? "primary" : "ghost"}
        className={dark && !highlight ? "!bg-ivory !text-ink hover:!bg-ivory/85" : ""}
        onClick={() => add(product.sku)}
      >
        Add to cart
      </Button>
    </div>
  );
}
