import { describe, it, expect } from "vitest";
import { PRODUCTS, formatPrice, type SKU } from "./products";

const ALL_SKUS: SKU[] = [
  "finalova-perpetual",
  "finalova-studio-perpetual",
  "finalova-studio-monthly",
  "finalova-studio-annual",
  "finalova-updates-renewal",
  "ba-lite-monthly",
  "ba-lite-annual",
  "ba-pro-monthly",
  "ba-pro-annual",
  "ba-lifetime",
];

describe("PRODUCTS", () => {
  it("contains all ten SKUs", () => {
    for (const sku of ALL_SKUS) {
      expect(PRODUCTS[sku], sku).toBeDefined();
      expect(PRODUCTS[sku].sku).toBe(sku);
    }
    expect(Object.keys(PRODUCTS)).toHaveLength(ALL_SKUS.length);
  });

  it("carries the spec prices", () => {
    expect(PRODUCTS["finalova-perpetual"].price).toBe(99);
    expect(PRODUCTS["finalova-perpetual"].listPrice).toBe(129);
    expect(PRODUCTS["finalova-studio-perpetual"].price).toBe(249);
    expect(PRODUCTS["finalova-studio-monthly"].price).toBe(19);
    expect(PRODUCTS["finalova-studio-annual"].price).toBe(182);
    expect(PRODUCTS["finalova-updates-renewal"].price).toBe(49);
    expect(PRODUCTS["ba-lite-monthly"].price).toBe(7.99);
    expect(PRODUCTS["ba-lite-annual"].price).toBe(71.99);
    expect(PRODUCTS["ba-pro-monthly"].price).toBe(12.99);
    expect(PRODUCTS["ba-pro-annual"].price).toBe(119.99);
    expect(PRODUCTS["ba-lifetime"].price).toBe(279);
  });

  it("gives every product at least three feature lines", () => {
    for (const p of Object.values(PRODUCTS)) {
      expect(p.features.length, p.sku).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("formatPrice", () => {
  it("formats one-time, monthly and annual billing", () => {
    expect(formatPrice(PRODUCTS["finalova-perpetual"])).toBe("$99");
    expect(formatPrice(PRODUCTS["finalova-studio-monthly"])).toBe("$19/mo");
    expect(formatPrice(PRODUCTS["finalova-studio-annual"])).toBe("$182/yr");
    expect(formatPrice(PRODUCTS["ba-lite-monthly"])).toBe("$7.99/mo");
    expect(formatPrice(PRODUCTS["ba-lifetime"])).toBe("$279");
  });
});
