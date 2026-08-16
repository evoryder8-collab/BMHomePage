import { test, expect } from "@playwright/test";

const ROUTES: [string, string | RegExp][] = [
  [".", "Useful software,"],
  ["apps/", "Purpose-built software."],
  ["finalova/", /Everything after/],
  ["finalova/pricing/", /Choose the workflow\./],
  ["ba-studio/", /Evidence,/],
  ["ba-studio/pricing/", /Invest in proof\./],
  ["store/", "Software worth owning."],
  ["about/", "Built from the"],
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
    .getByRole("button", { name: "Choose this edition" })
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
  await expect(page.locator("h1")).toContainText("Useful software,");
  await expect(page.locator("html")).toHaveAttribute("data-bm-vfx", "reduced");
  expect(
    await page.locator(".publisher-hero").evaluate((element) =>
      getComputedStyle(element).animationName,
    ),
  ).toBe("none");
  expect(
    await page.locator(".publisher-proofline-track").evaluate((element) =>
      getComputedStyle(element).animationName,
    ),
  ).toBe("none");
  await ctx.close();
});

test("homepage proof line is a moving, high-contrast marquee", async ({ page }) => {
  await page.goto(".");

  const proofline = page.locator(".publisher-proofline");
  await expect(proofline).toBeVisible();
  await expect(page.locator(".publisher-proofline-group")).toHaveCount(2);

  const presentation = await proofline.evaluate((element) => {
    const track = element.querySelector<HTMLElement>(".publisher-proofline-track")!;
    const item = element.querySelector<HTMLElement>(".publisher-proofline-group span")!;
    return {
      animationName: getComputedStyle(track).animationName,
      background: getComputedStyle(element).backgroundImage,
      color: getComputedStyle(item).color,
      overflow: getComputedStyle(element).overflowX,
      prooflineHeight: element.clientHeight,
      trackHeight: track.getBoundingClientRect().height,
    };
  });

  expect(presentation.animationName).toBe("bm-proofline-marquee");
  expect(presentation.background).toContain("linear-gradient");
  expect(presentation.color).toContain("255, 255, 255");
  expect(presentation.overflow).toBe("hidden");
  expect(Math.abs(presentation.prooflineHeight - presentation.trackHeight)).toBeLessThan(
    1,
  );
});

test("key pages remain contained and readable on mobile", async ({
  browser,
  baseURL,
}) => {
  const ctx = await browser.newContext({
    deviceScaleFactor: 3,
    isMobile: true,
    viewport: { width: 390, height: 844 },
  });
  const page = await ctx.newPage();

  for (const path of [
    "",
    "apps/",
    "finalova/",
    "ba-studio/",
    "about/",
    "store/",
  ]) {
    await page.goto(`${baseURL}${path}`);
    await expect(page.locator("h1").first()).toBeVisible();

    const layout = await page.evaluate(() => ({
      bodyWidth: document.body.scrollWidth,
      headingSize: Number.parseFloat(
        getComputedStyle(document.querySelector("h1")!).fontSize,
      ),
      overflowers: [...document.querySelectorAll<HTMLElement>("body *")]
        .filter((element) => element.getBoundingClientRect().right > innerWidth + 1)
        .slice(0, 8)
        .map((element) => ({
          className: element.className,
          right: Math.round(element.getBoundingClientRect().right),
          tagName: element.tagName,
        })),
      viewportWidth: document.documentElement.clientWidth,
    }));

    expect(
      layout.bodyWidth,
      `${path || "/"} should not overflow: ${JSON.stringify(layout.overflowers)}`,
    ).toBeLessThanOrEqual(layout.viewportWidth + 1);
    expect(layout.headingSize, `${path || "/"} heading should stay legible`).toBeGreaterThan(
      38,
    );

    if (path === "") {
      const homeEffects = await page.evaluate(() => ({
        buttonShadow: getComputedStyle(
          document.querySelector<HTMLElement>(".publisher-hero .btn-leaf")!,
        ).boxShadow,
        marqueeAnimation: getComputedStyle(
          document.querySelector<HTMLElement>(".publisher-proofline-track")!,
        ).animationName,
        vfxAnimation: getComputedStyle(
          document.querySelector<HTMLElement>(".publisher-hero-vfx-cyan")!,
        ).animationName,
      }));
      expect(homeEffects.buttonShadow).not.toBe("none");
      expect(homeEffects.marqueeAnimation).toBe("bm-proofline-marquee");
      expect(homeEffects.vfxAnimation).toBe("bm-hero-cyan-breathe");
    }

    if (path === "apps/") {
      const productImage = await page
        .locator(".software-directory-product > img")
        .first()
        .evaluate((element) => ({
          filter: getComputedStyle(element).filter,
          opacity: getComputedStyle(element).opacity,
        }));
      expect(productImage.opacity).toBe("1");
      expect(productImage.filter).toContain("contrast(1.15)");
    }

    if (path === "ba-studio/") {
      const zeroStage = await page.evaluate(() => {
        const stage = document.querySelector<HTMLElement>(".ba-zero-stage")!;
        const image = stage.querySelector<HTMLImageElement>(":scope > img")!;
        const result = stage.querySelector<HTMLElement>(".ba-card-caption strong")!;
        const stageRect = stage.getBoundingClientRect();
        const imageRect = image.getBoundingClientRect();
        const resultRect = result.getBoundingClientRect();
        return {
          imageLeftInset: imageRect.left - stageRect.left,
          imageRightInset: stageRect.right - imageRect.right,
          resultRightInset: stageRect.right - resultRect.right,
        };
      });

      expect(Math.abs(zeroStage.imageLeftInset - zeroStage.imageRightInset)).toBeLessThan(1);
      expect(zeroStage.resultRightInset).toBeGreaterThan(20);
    }
  }

  await ctx.close();
});

test("login form shows inline error for bad credentials", async ({ page }) => {
  await page.goto("login/");
  await page.getByPlaceholder("you@studio.com").fill("nobody@example.com");
  await page.getByPlaceholder("••••••••").fill("wrong-password-123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("alert")).toBeVisible({ timeout: 15_000 });
});
