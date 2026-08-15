import { describe, it, expect } from "vitest";
import { withBase, SITE } from "./site";

describe("withBase", () => {
  it("returns non-rooted paths untouched", () => {
    expect(withBase("https://example.com/x.png")).toBe(
      "https://example.com/x.png",
    );
  });

  it("prefixes rooted paths with the configured basePath", () => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    expect(withBase("/screenshots/a.png")).toBe(`${base}/screenshots/a.png`);
  });
});

describe("SITE", () => {
  it("carries the brand constants", () => {
    expect(SITE.name).toBe("Barbu Media Software");
    expect(SITE.supportEmail).toContain("@");
  });
});
