"use client";

import { useCart } from "@/lib/cart";

export default function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <button
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
      onClick={() => setOpen(true)}
      className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-pearl/5"
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 7h12l-1.2 12.2a1.8 1.8 0 0 1-1.8 1.6H9a1.8 1.8 0 0 1-1.8-1.6L6 7Z" />
        <path d="M9 7V6a3 3 0 0 1 6 0v1" />
      </svg>
      {count > 0 && (
        <span
          data-testid="cart-badge"
          className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-white"
        >
          {count}
        </span>
      )}
    </button>
  );
}
