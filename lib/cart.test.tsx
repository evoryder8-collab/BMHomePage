// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import type { ReactNode } from "react";
import { CartProvider, useCart, CART_STORAGE_KEY } from "./cart";

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

beforeEach(() => {
  localStorage.clear();
});

describe("cart", () => {
  it("adds items and computes count and total", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.add("finalova-perpetual"));
    act(() => result.current.add("ba-lifetime"));
    expect(result.current.count).toBe(2);
    expect(result.current.total).toBe(99 + 279);
  });

  it("caps every SKU at quantity 1 (licenses & subscriptions)", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.add("finalova-perpetual"));
    act(() => result.current.add("finalova-perpetual"));
    expect(result.current.count).toBe(1);
  });

  it("removes items and clears", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    act(() => result.current.add("finalova-perpetual"));
    act(() => result.current.remove("finalova-perpetual"));
    expect(result.current.count).toBe(0);
    act(() => result.current.add("ba-lifetime"));
    act(() => result.current.clear());
    expect(result.current.items).toHaveLength(0);
  });

  it("persists to localStorage and rehydrates", () => {
    const first = renderHook(() => useCart(), { wrapper });
    act(() => first.result.current.add("finalova-studio-annual"));
    first.unmount();
    const second = renderHook(() => useCart(), { wrapper });
    expect(second.result.current.items).toEqual([
      { sku: "finalova-studio-annual", qty: 1 },
    ]);
  });

  it("drops unknown SKUs on hydrate", () => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify([
        { sku: "finalova-perpetual", qty: 1 },
        { sku: "discontinued-thing", qty: 3 },
      ]),
    );
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([
      { sku: "finalova-perpetual", qty: 1 },
    ]);
  });
});
