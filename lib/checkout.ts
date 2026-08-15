import type { CartItem } from "./cart";

export const CHECKOUT_EVENT = "bm:checkout";

/**
 * Phase 1: opens the sandbox checkout modal (CheckoutModal listens for
 * CHECKOUT_EVENT). Phase 2 swaps these internals for Paddle.js overlay
 * checkout without changing the call signature.
 */
export function initiateCheckout(items: CartItem[]): void {
  if (typeof window === "undefined" || items.length === 0) return;
  window.dispatchEvent(new CustomEvent(CHECKOUT_EVENT, { detail: { items } }));
}
