"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_EVENT } from "@/lib/checkout";
import { useCart } from "@/lib/cart";
import { PRODUCTS, formatPrice } from "@/lib/products";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export default function CheckoutModal() {
  const [visible, setVisible] = useState(false);
  const cart = useCart();

  useEffect(() => {
    const onCheckout = () => setVisible(true);
    window.addEventListener(CHECKOUT_EVENT, onCheckout);
    return () => window.removeEventListener(CHECKOUT_EVENT, onCheckout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Checkout"
      onClick={() => setVisible(false)}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-linen p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="eyebrow mb-2 text-jade">Sandbox</div>
        <h2 className="display-md mb-3">Almost open.</h2>
        <p className="mb-5 text-sm leading-relaxed text-ink/65">
          Secure worldwide checkout is almost ready. Your cart is saved on
          this device and will be waiting.
        </p>
        <ul className="mb-5 space-y-2 border-y border-ink/10 py-4">
          {cart.items.map((i) => {
            const p = PRODUCTS[i.sku];
            return (
              <li key={i.sku} className="flex justify-between text-sm">
                <span>
                  {p.name} <span className="text-ink/50">· {p.edition}</span>
                </span>
                <span className="font-semibold">{formatPrice(p)}</span>
              </li>
            );
          })}
          <li className="flex justify-between pt-2 text-sm font-semibold">
            <span>Total</span>
            <span>
              ${Number.isInteger(cart.total) ? cart.total : cart.total.toFixed(2)}
            </span>
          </li>
        </ul>
        <p className="mb-5 text-xs text-ink/50">
          Want to be first through the door? Write to{" "}
          <a
            className="underline underline-offset-2"
            href={`mailto:${SITE.supportEmail}?subject=Notify%20me%20at%20launch`}
          >
            {SITE.supportEmail}
          </a>{" "}
          and we&apos;ll notify you at launch.
        </p>
        <Button className="w-full" onClick={() => setVisible(false)}>
          Got it
        </Button>
      </div>
    </div>
  );
}
