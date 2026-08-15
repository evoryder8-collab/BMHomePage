"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { PRODUCTS, formatPrice } from "@/lib/products";
import Button from "@/components/ui/Button";
import { initiateCheckout } from "@/lib/checkout";

export default function CartDrawer() {
  const cart = useCart();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {cart.open && (
        <>
          <motion.div
            key="scrim"
            className="fixed inset-0 z-50 bg-linen/40"
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => cart.setOpen(false)}
          />
          <motion.aside
            key="drawer"
            role="dialog"
            aria-label="Shopping cart"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-linen shadow-2xl"
            initial={reduce ? { x: 0 } : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="text-lg font-semibold">Your cart</h2>
              <button
                aria-label="Close cart"
                onClick={() => cart.setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-ink/5"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cart.items.length === 0 ? (
                <div className="mt-16 text-center text-ink/50">
                  <p className="text-base">Your cart is empty.</p>
                  <p className="mt-2 text-sm">
                    The instruments are waiting in the store.
                  </p>
                  <Button href="/store" variant="ghost" className="mt-6">
                    Browse the store
                  </Button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {cart.items.map((item) => {
                    const p = PRODUCTS[item.sku];
                    return (
                      <li
                        key={item.sku}
                        className="flex items-start justify-between gap-4 border-b border-ink/10 pb-5"
                      >
                        <div>
                          <div className="font-semibold">{p.name}</div>
                          <div className="text-sm text-ink/55">{p.edition}</div>
                          <button
                            onClick={() => cart.remove(item.sku)}
                            className="mt-1.5 text-xs text-ink/45 underline underline-offset-2 hover:text-ink"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="text-right font-semibold">
                          {formatPrice(p)}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {cart.items.length > 0 && (
              <div className="border-t border-ink/10 px-6 py-5">
                <div className="mb-1 flex items-center justify-between text-sm text-ink/60">
                  <span>Subtotal</span>
                  <span>
                    ${Number.isInteger(cart.total) ? cart.total : cart.total.toFixed(2)}
                  </span>
                </div>
                <p className="mb-4 text-xs text-ink/45">
                  Prices shown in USD. Checkout charges you in your own
                  currency, taxes included.
                </p>
                <Button
                  className="w-full"
                  onClick={() => initiateCheckout(cart.items)}
                >
                  Checkout
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
