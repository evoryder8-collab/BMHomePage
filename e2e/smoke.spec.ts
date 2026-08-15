import { test, expect } from "@playwright/test";

const ROUTES: [string, string | RegExp][] = [
  [".", "Make your work"],
  ["apps/", "The instruments."],
  ["finalova/", /The finishing/],
  ["finalova/pricing/", /Own it\. Or subscribe\./],
  ["ba-studio/", /The comparison/],
  ["ba-studio/pricing/", /Priced like an instrument\./],
  ["store/", "The store."],
  ["press/", "Press."],
  ["contact/", "Talk to us."],
  ["login/", "Welcome back."],
  ["signup/", "Create your account."],
  ["legal/terms/", "Terms of Use"],
  ["legal/privacy/", "Privacy Policy"],
  ["legal/refunds/", "Refund Policy"],
  ["legal/impressum/", "Impressum"],
];

for (const [path, heading] of ROUTES) {
  test(`renders ${path}`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1").first()).toContainText(heading);
  });
}

test("404 page renders (GitHub Pages serves 404.html for unknown routes)", async ({
  page,
}) => {
  // `serve` substitutes its own 404 body, so assert on the exported file
  // GitHub Pages actually serves.
  await page.goto("404.html", { waitUntil: "load" });
  await expect(page.locator("h1")).toContainText("survive the cut");
});

test("add to cart updates badge, persists across reload, opens checkout stub", async ({
  page,
}) => {
  await page.goto("store/");
  await page
    .getByRole("button", { name: "Add to cart" })
    .first()
    .click();
  // drawer opens
  await expect(page.getByRole("dialog", { name: "Shopping cart" })).toBeVisible();
  await expect(page.getByTestId("cart-badge")).toHaveText("1");
  // close drawer, reload, badge persists
  await page.getByRole("button", { name: "Close cart" }).click();
  await page.reload();
  await expect(page.getByTestId("cart-badge")).toHaveText("1");
  // checkout stub opens
  await page.getByRole("button", { name: /^Cart/ }).click();
  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(page.getByText("Almost open.")).toBeVisible();
});

test("account gate redirects logged-out users to login", async ({ page }) => {
  await page.goto("account/");
  await page.waitForURL(/\/login\/?$/, { timeout: 15_000 });
  await expect(page.locator("h1")).toContainText("Welcome back.");
});

test("hero renders under reduced motion", async ({ browser, baseURL }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(baseURL!);
  await expect(page.locator("h1")).toContainText("Make your work");
  await ctx.close();
});

test("login form shows inline error for bad credentials", async ({ page }) => {
  await page.goto("login/");
  await page.getByPlaceholder("you@studio.com").fill("nobody@example.com");
  await page.getByPlaceholder("••••••••").fill("wrong-password-123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("alert")).toBeVisible({ timeout: 15_000 });
});
