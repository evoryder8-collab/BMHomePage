import { describe, it, expect } from "vitest";
import { roi } from "./roi";

describe("roi", () => {
  it("computes monthly revenue", () => {
    expect(roi(6, 250).monthlyRevenue).toBe(1500);
  });

  it("computes shoots needed to pay off Studio ($249)", () => {
    expect(roi(6, 250).shootsToPayOff).toBe(1);
    expect(roi(6, 100).shootsToPayOff).toBe(3);
    expect(roi(6, 249).shootsToPayOff).toBe(1);
  });

  it("is defensive about zero and negative input", () => {
    expect(roi(0, 250).monthlyRevenue).toBe(0);
    expect(roi(-3, 250).monthlyRevenue).toBe(0);
    expect(roi(6, 0).shootsToPayOff).toBe(Infinity);
  });
});
