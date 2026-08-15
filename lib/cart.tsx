"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type SKU } from "./products";

export const CART_STORAGE_KEY = "bm.cart.v1";

export interface CartItem {
  sku: SKU;
  qty: number;
}

interface CartApi {
  items: CartItem[];
  add: (sku: SKU) => void;
  remove: (sku: SKU) => void;
  clear: () => void;
  open: boolean;
  setOpen: (b: boolean) => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartApi | null>(null);

function sanitize(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (i): i is CartItem =>
      !!i &&
      typeof i === "object" &&
      typeof (i as CartItem).sku === "string" &&
      (i as CartItem).sku in PRODUCTS,
  ).map((i) => ({ sku: i.sku, qty: 1 }));
}

function readStorage(): CartItem[] {
  try {
    return sanitize(JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? "[]"));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const hydrated = useRef(false);

  // Hydrate after mount (avoids SSR/static-export markup mismatch).
  useEffect(() => {
    setItems(readStorage());
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable (private mode); cart stays in memory */
    }
  }, [items]);

  const add = useCallback((sku: SKU) => {
    setItems((prev) =>
      prev.some((i) => i.sku === sku) ? prev : [...prev, { sku, qty: 1 }],
    );
    setOpen(true);
  }, []);

  const remove = useCallback((sku: SKU) => {
    setItems((prev) => prev.filter((i) => i.sku !== sku));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const { total, count } = useMemo(() => {
    let t = 0;
    for (const i of items) t += PRODUCTS[i.sku].price * i.qty;
    return { total: Math.round(t * 100) / 100, count: items.length };
  }, [items]);

  const api = useMemo(
    () => ({ items, add, remove, clear, open, setOpen, total, count }),
    [items, add, remove, clear, open, total, count],
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart(): CartApi {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
