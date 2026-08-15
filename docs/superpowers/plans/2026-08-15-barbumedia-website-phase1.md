# Barbu Media Website Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the complete Barbu Media marketing site + store shell (all pages, cart, Supabase auth, real app screenshots) live on GitHub Pages.

**Architecture:** Next.js 15 App Router with `output: 'export'` producing a fully static site deployed by GitHub Actions to Pages under basePath `/BMHomePage`. All dynamic behavior (auth, cart, checkout stub) is client-side. Product/pricing data is a single typed module consumed by store, pricing, and cart.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, framer-motion, @supabase/supabase-js + @supabase/ssr, Vitest, Playwright.

## Global Constraints

- App source projects are READ-ONLY: `/Users/jaxoncorrey/Downloads/App Stamp` and `/Users/jaxoncorrey/Downloads/Befor and After APP`. Build with `-derivedDataPath` in the session scratchpad, never write inside those directories. Never touch `Befor and After APP/output/`.
- Xcode builds require `DEVELOPER_DIR=/Users/jaxoncorrey/Downloads/Xcode.app/Contents/Developer`.
- No secrets in repo. Supabase URL + publishable key are public by design: URL `https://tvdggjxisbixzrkzuojb.supabase.co`, key `sb_publishable_HcvIowmDG4YmN2Aasg1p4Q_j3wL4l8W`.
- basePath/assetPrefix `/BMHomePage` in production builds (env `NEXT_PUBLIC_BASE_PATH`), empty for local dev.
- All motion respects `prefers-reduced-motion`. Responsive to 375px.
- Pricing displayed in USD exactly as in the spec (`docs/superpowers/specs/2026-08-15-barbumedia-website-design.md` §Pricing).
- Copy register: Apple-marketing voice. Site-wide line: "Conceived and built in Zürich, Switzerland."
- Commit after every green task; push to `main` deploys.

---

### Task 1: Scaffold Next.js static-export project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `app/layout.tsx`, `app/page.tsx` (placeholder), `app/globals.css`, `.gitignore`, `.env.example`
- Keep existing: `docs/`

**Interfaces:**
- Produces: `npm run dev`, `npm run build` (static export to `out/`), `npm test` (vitest), Tailwind 4 tokens in `globals.css`, `SITE` constant in `lib/site.ts` (`{ name: 'Barbu Media', url, basePath, supportEmail: 'support@barbumedia.com' }`).

- [ ] **Step 1:** `npx create-next-app@latest . --ts --app --tailwind --no-src-dir --import-alias "@/*" --use-npm` (accept overwrite prompts only for scaffold files; docs/ untouched). Then `npm i framer-motion @supabase/supabase-js @supabase/ssr && npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react playwright @playwright/test`.
- [ ] **Step 2:** Configure static export in `next.config.ts`:

```ts
import type { NextConfig } from "next";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SUPABASE_URL: "https://tvdggjxisbixzrkzuojb.supabase.co",
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_HcvIowmDG4YmN2Aasg1p4Q_j3wL4l8W",
  },
};
export default nextConfig;
```

- [ ] **Step 3:** Create `lib/site.ts` exporting `SITE` and a `withBase(path: string): string` helper that prefixes `NEXT_PUBLIC_BASE_PATH` for non-next-managed URLs (raw `<img>`, downloads).
- [ ] **Step 4:** `npm run build` → expect `out/index.html` exists. `npx vitest run` → passes (no tests yet is OK, configure `vitest.config.ts` with jsdom + react plugin and a trivial `lib/site.test.ts` asserting `withBase('/x')` behavior with and without env).
- [ ] **Step 5:** Commit `feat: scaffold Next.js 15 static export site`.

### Task 2: GitHub Pages deployment workflow (deploy early)

**Files:**
- Create: `.github/workflows/deploy.yml`, `public/.nojekyll`

**Interfaces:**
- Produces: every push to `main` builds with `NEXT_PUBLIC_BASE_PATH=/BMHomePage` and deploys `out/` to Pages. Live URL `https://evoryder8-collab.github.io/BMHomePage/`.

- [ ] **Step 1:** Write workflow: actions/checkout@v4 → actions/setup-node@v4 (node 22, npm cache) → `npm ci` → `NEXT_PUBLIC_BASE_PATH=/BMHomePage npm run build` → `touch out/.nojekyll` → actions/upload-pages-artifact@v3 (path `out`) → actions/deploy-pages@v4. Permissions `pages: write, id-token: write`; concurrency group `pages`.
- [ ] **Step 2:** `gh api -X POST repos/evoryder8-collab/BMHomePage/pages -f build_type=workflow` (enable Pages; ignore 409 if exists).
- [ ] **Step 3:** Commit + push `ci: deploy to GitHub Pages`. Watch `gh run watch` until success; `curl -sI https://evoryder8-collab.github.io/BMHomePage/ | head -1` → HTTP 200.

### Task 3: Design system foundation

**Files:**
- Create: `app/globals.css` (rewrite), `components/ui/Reveal.tsx`, `components/ui/Gleam.tsx`, `components/ui/Button.tsx`, `components/ui/SwissMark.tsx`, `components/layout/Nav.tsx`, `components/layout/Footer.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: CSS custom props under `@theme`: `--color-ink #101014`, `--color-ivory #f7f5f0`, `--color-gold #b8963e`, `--color-aurora-from #6d28d9`, `--color-aurora-to #2563eb`; fonts via `next/font/google`: Inter (var `--font-sans`), Playfair Display (var `--font-didone`).
- `<Reveal>` — viewport-triggered fade/rise wrapper (framer-motion, `useReducedMotion` disables). Props: `{ children, delay?: number, as?: ElementType }`.
- `<Gleam>` — wraps an image/card; on viewport entry sweeps a specular highlight (CSS gradient translate animation, runs once). Props: `{ children, className? }`.
- `<Button variant="primary"|"ghost"|"gold">`, `<Nav />` (sticky, logo wordmark "BARBU MEDIA", links Apps/Finalova/B∕A Studio/Store/Press/Contact, cart badge slot, Account/Login), `<Footer />` (four columns: Apps, Company, Legal, "Conceived and built in Zürich, Switzerland" with SwissMark ✚ accent).

- [ ] **Step 1:** Implement globals.css tokens + base typography scale (display sizes clamp()-based), grain overlay utility `.grain`, `.container-page` (max-w-6xl mx-auto px-6).
- [ ] **Step 2:** Implement Reveal + Gleam with `useReducedMotion()` guard; unit-test Reveal renders children (vitest + jsdom).
- [ ] **Step 3:** Implement Nav/Footer/Button/SwissMark; mount Nav+Footer in `app/layout.tsx` with `<main>` slot; metadata title template `"%s — Barbu Media"`.
- [ ] **Step 4:** `npm run build` green; visual check via `npm run dev` in Browser pane (spot: nav sticky, footer line present).
- [ ] **Step 5:** Commit `feat: design system, nav, footer`.

### Task 4: Product catalog data module

**Files:**
- Create: `lib/products.ts`, `lib/products.test.ts`

**Interfaces:**
- Produces (consumed by cart, store, pricing pages, checkout stub):

```ts
export type SKU =
  | "finalova-perpetual" | "finalova-studio-perpetual"
  | "finalova-studio-monthly" | "finalova-studio-annual"
  | "finalova-updates-renewal"
  | "ba-lite-monthly" | "ba-lite-annual"
  | "ba-pro-monthly" | "ba-pro-annual" | "ba-lifetime";
export type Billing = "one-time" | "monthly" | "annual";
export interface Product {
  sku: SKU; app: "finalova" | "ba-studio"; name: string; edition: string;
  price: number; listPrice?: number; billing: Billing; tagline: string;
  features: string[]; badge?: string;
}
export const PRODUCTS: Record<SKU, Product>;
export const formatPrice(p: Product): string; // "$99", "$19/mo", "$182/yr"
```

Prices: finalova-perpetual 99 (listPrice 129, badge "Launch price"), finalova-studio-perpetual 249, studio-monthly 19, studio-annual 182, updates-renewal 49, ba-lite-monthly 7.99, ba-lite-annual 71.99, ba-pro-monthly 12.99, ba-pro-annual 119.99, ba-lifetime 279.

- [ ] **Step 1:** Write failing tests: all 10 SKUs present; formatPrice cases; every product has ≥3 features.
- [ ] **Step 2:** Implement; tests green; commit `feat: product catalog`.

### Task 5: Cart (context + drawer + badge)

**Files:**
- Create: `lib/cart.tsx` (CartProvider, useCart), `lib/cart.test.tsx`, `components/cart/CartDrawer.tsx`, `components/cart/CartButton.tsx`
- Modify: `app/layout.tsx` (wrap in CartProvider, mount drawer), `components/layout/Nav.tsx` (badge)

**Interfaces:**
- Produces: `useCart(): { items: { sku: SKU; qty: number }[]; add(sku): void; remove(sku): void; setQty(sku, qty): void; clear(): void; open: boolean; setOpen(b): void; total: number; count: number }`. Persistence: localStorage key `bm.cart.v1`; unknown SKUs dropped on hydrate (defensive per spec). Subscriptions capped qty 1; one-time SKUs capped qty 1 too (licenses) — `add` of existing item just opens drawer.

- [ ] **Step 1:** Failing tests: add/remove/total, persistence round-trip, stale-SKU dropped, qty cap.
- [ ] **Step 2:** Implement provider (client component, hydrate in useEffect to avoid SSR mismatch); tests green.
- [ ] **Step 3:** Build CartDrawer (slide-over, line items with formatPrice, total, "Checkout" button → `initiateCheckout` from Task 6b stub) + CartButton badge in Nav.
- [ ] **Step 4:** Manual check in dev browser: add from a temp button, reload persists. `npm run build` green. Commit `feat: cart with persistent drawer`.

### Task 6: Supabase auth + account area + checkout stub

**Files:**
- Create: `utils/supabase/client.ts` (per user snippet), `utils/supabase/server.ts`, `utils/supabase/middleware.ts` (kept for Vercel-lift parity, unused on Pages — header comment says so), `lib/auth.tsx` (AuthProvider, useAuth), `app/login/page.tsx`, `app/signup/page.tsx`, `app/account/page.tsx`, `lib/checkout.ts`, `components/cart/CheckoutModal.tsx`
- Modify: `app/layout.tsx`, `components/layout/Nav.tsx` (Account/Login state)

**Interfaces:**
- Produces: `useAuth(): { user: User | null; loading: boolean; signIn(email, pw): Promise<{error?: string}>; signUp(email, pw): Promise<{error?: string}>; signOut(): void }` via `onAuthStateChange`.
- `initiateCheckout(items, user): void` — Phase 1 opens `CheckoutModal` ("Secure checkout is being finalized with Paddle, our merchant of record. Purchasing opens shortly — leave your email to be first."), listing items+total, marked SANDBOX. Phase 2 swaps internals to Paddle.js without changing the call signature.

- [ ] **Step 1:** Implement supabase clients exactly as user-provided snippet (env names match Task 1 config).
- [ ] **Step 2:** AuthProvider with session hydration; login/signup pages: email+password forms, inline error states (invalid credentials, unconfirmed email, weak password), success routes to `/account`. Forms disabled+spinner while pending.
- [ ] **Step 3:** `/account`: gated client-side (redirect to /login when !user after loading); sections Licenses / Activations / Downloads / Invoices, all rendering zero-state "Your purchases will appear here once checkout opens." + signOut button.
- [ ] **Step 4:** Checkout stub + modal wired to CartDrawer.
- [ ] **Step 5:** Manual dev test: sign up with a `+test` email, session persists reload, account gate works logged-out. Build green. Commit `feat: supabase auth, account area, checkout stub`.

### Task 7: App screenshots capture

**Files:**
- Create: `public/screenshots/finalova/*.png`, `public/screenshots/ba-studio/*.png`, `docs/superpowers/screenshot-log.md` (what was captured, from which build)

**Interfaces:**
- Produces (minimum set, transparent PNG, retina): finalova: `window-main.png`, `media-bay.png`, `calibration.png`, `captions.png`, `delivery-pack.png`; ba-studio: `window-main.png`, `editorial-card.png`, `measurement.png`, plus iOS `capture-guided.png` from Simulator if the mobile scheme runs.

- [ ] **Step 1:** Build Finalova: `cd "/Users/jaxoncorrey/Downloads/App Stamp" && DEVELOPER_DIR=/Users/jaxoncorrey/Downloads/Xcode.app/Contents/Developer xcodebuild -project Stamp.xcodeproj -scheme <detect via -list> -configuration Release -derivedDataPath <scratchpad>/dd-stamp build`. READ-ONLY: derivedDataPath in scratchpad.
- [ ] **Step 2:** Launch built .app from scratchpad DerivedData, wait for window, capture: `screencapture -o -l $(osascript window-id lookup) out.png` (or `screencapture -o -w` interactive fallback → prefer scripted `-l`). Capture main window + navigate to key panes via accessibility scripting where feasible; crop regions with `sips`/ImageMagick as needed. Quit app.
- [ ] **Step 3:** Same for BeforeAfterStudio (`BeforeAfterStudio.xcodeproj`, scheme via -list, same DEVELOPER_DIR, scratchpad derivedData). iOS: `xcrun simctl` boot iPhone sim, build mobile scheme, `simctl io screenshot` (best-effort; skip gracefully if beta Xcode fights back — note in screenshot-log).
- [ ] **Step 4:** Optimize (`sips -Z 2600` max dimension, keep alpha), place under `public/screenshots/`, write screenshot-log. Commit `feat: real app screenshots`.

Fallback if a launch/capture fails: capture whatever windows do come up; document gaps in screenshot-log and continue — product pages must not block on a missing pane shot (use the main-window shot twice rather than stalling).

### Task 8: Home page

**Files:**
- Modify: `app/page.tsx`
- Create: `components/home/Hero.tsx`, `components/home/AppShowcase.tsx`, `components/home/Philosophy.tsx`

**Interfaces:**
- Consumes: Reveal, Gleam, PRODUCTS, screenshots.

Copy (locked): Hero H1 "Instruments, not apps." Sub: "Barbu Media builds professional Mac and iPhone software that pays for itself — precision tools that help you work faster, deliver more, and win the clients your work deserves." CTA pair: "Explore Finalova" / "Explore B∕A Studio". Swiss line under hero. AppShowcase: two full-bleed cards (Finalova on aurora-dark, B/A on warm mat) each with headline + 3 proof points + screenshot with Gleam. Philosophy section: "Software you can defend." — three columns: Offline-first ("Your work never leaves your machine"), Preview = export ("What you approve is what ships"), Built for Apple Silicon ("Native Metal and VideoToolbox, no Electron anywhere").

- [ ] **Step 1:** Build sections with Reveal choreography; hero opening animation (staggered rise, one-time).
- [ ] **Step 2:** Dev-browser visual pass at 375px and 1280px; build green; commit `feat: home page`.

### Task 9: Finalova product + pricing pages

**Files:**
- Create: `app/finalova/page.tsx`, `app/finalova/pricing/page.tsx`, `components/finalova/*` (chapter components), `components/pricing/PricingCard.tsx`, `components/pricing/RoiCalculator.tsx`, `components/pricing/RoiCalculator.test.tsx`

**Interfaces:**
- Produces: `<PricingCard product={Product} highlight?>` with AddToCart via useCart (reused by Task 10). `<RoiCalculator>`: inputs shootsPerMonth (default 6), adaptationFee (default 250); outputs monthly `shoots × fee` and "pays for Studio in X shoots" (`ceil(249 / fee)`); pure function `roi(shoots, fee)` unit-tested.

Page chapters (aurora theme, dark sections, kinetic reveals) — locked headlines:
1. Hero: "Finalova — The finishing line." Sub: "The intelligent media adaptation and delivery studio. Everything after the edit, handled."
2. "One batch. Every destination." (Media Bay shot)
3. "Watermarks that look right everywhere." (calibration shot; aspect-aware sizing story)
4. "Captions that understand speech." (captions shot; WhisperKit, local, editable)
5. "Reframe without guessing." (crop/keyframes, minimum-jerk)
6. "Deliver like an agency." (Client Delivery Packs shot)
7. "Set it. Shoot. It's done." (Watch Folders)
8. "The web weighs less now." (Website Builder Mode)
9. "Honest passthrough." (source-aware quality)
10. "Born on Apple Silicon." + trust strip (offline, no telemetry, preview=export)
Closing CTA band: "Invoice the adaptation, not just the shoot." → pricing.

Pricing page: two-edition comparison table exactly per spec (base uncrippled forever; Studio adds Delivery Packs, Watch Folders, web export sets); cards for perpetual/monthly/annual + updates renewal note ("$49/yr, optional, penalty-free — your app never stops working"); upgrade path callout; RoiCalculator; 14-day Studio trial banner; 2-activation note.

- [ ] **Step 1:** RoiCalculator TDD (failing test → implement → green).
- [ ] **Step 2:** Build product page chapters with screenshots + Gleam.
- [ ] **Step 3:** Build pricing page with PricingCard + cart wiring.
- [ ] **Step 4:** Visual pass both viewports; build green; commit `feat: Finalova pages`.

### Task 10: B/A Studio product + pricing pages

**Files:**
- Create: `app/ba-studio/page.tsx`, `app/ba-studio/pricing/page.tsx`, `components/ba/*`

**Interfaces:**
- Consumes: PricingCard, useCart, screenshots.

Editorial theme: ivory/warm mat, Playfair Display display type, gilded hairline rules, restrained motion. Locked headlines:
1. Hero: "B∕A Studio — The comparison that can't lie." Sub: "Two originals. One rigid frame. Zero cosmetic edits — enforced by mathematics, not by promise."
2. "Honesty is the product." (rigid similarity transform; the dishonest operations do not exist in the code)
3. "Measured in millimetres." (Lift Index formula as typographic set-piece: `Lift Index = 250 × max(0, measured lift − 95% noise limit)`; zero-by-construction)
4. "The camera that matches your last shot." (ghost overlay, LiDAR distance/pitch lock)
5. "One capture. A full campaign." (editorial cards 4:5/1:1/9:16/16:9, video cards, GIF loops)
6. "Provenance without surveillance." (steganographic license signature; fully offline)
7. Pricing band → pricing page.
Footer motto strip: "TWO ORIGINALS · ONE RIGID FRAME · ZERO COSMETIC EDITS".

Pricing page: Lite ($7.99/mo, $71.99/yr), Pro ($12.99/mo, $119.99/yr, highlight), Lifetime ($279). iOS note card: "On iPhone, B∕A Studio subscriptions run through the App Store." with App Store badge placeholder link.

- [ ] **Step 1:** Build product page; **Step 2:** pricing page; **Step 3:** visual pass, build green, commit `feat: B/A Studio pages`.

### Task 11: Store, apps catalog, press

**Files:**
- Create: `app/store/page.tsx`, `app/apps/page.tsx`, `app/press/page.tsx`, `public/press/finalova-brief.md`, `public/press/ba-studio-brief.md`

**Interfaces:**
- Consumes: PRODUCTS, PricingCard, useCart.

- [ ] **Step 1:** `/store`: both apps' purchasable SKUs grouped by app, PricingCards with add-to-cart, link to each pricing page.
- [ ] **Step 2:** `/apps`: two app cards + a third "What we're building next" teaser card ("The next instrument is on the bench.").
- [ ] **Step 3:** `/press`: intro for journalists + the two full press briefs (user-provided text, lightly formatted) rendered on-page and downloadable via `withBase('/press/…')`.
- [ ] **Step 4:** Build green; commit `feat: store, catalog, press`.

### Task 12: Contact + legal pages

**Files:**
- Create: `app/contact/page.tsx`, `app/legal/terms/page.tsx`, `app/legal/privacy/page.tsx`, `app/legal/refunds/page.tsx`, `app/legal/impressum/page.tsx`, `components/legal/LegalLayout.tsx`

Content requirements (write full real text, no lorem):
- Contact: mailto support@barbumedia.com + form (name/email/message) that opens a prefilled mailto (static hosting; note "or write us directly"). Response-time promise: 2 business days.
- Impressum: Barbu Media, sole proprietorship (Einzelunternehmen), Zürich, Switzerland; owner Constantin Barbu; contact email. (No street address published until user provides one — state "Registered in Zürich, Switzerland"; flag to user post-ship.)
- Terms: license grant per edition/seats (2 activations), trial terms, updates-through model, acceptable use, warranty disclaimer, Swiss law + Zürich venue, Paddle as merchant of record for direct sales, App Store terms govern iOS purchases.
- Privacy: site collects account email via Supabase (EU-hosted), cart stays in localStorage, no analytics/trackers in Phase 1; the apps are offline-first, no telemetry, originals never leave the device; license activation transmits only a salted machine hash.
- Refunds: 14-day money-back for direct purchases handled by Paddle; subscription cancellation anytime effective end of period; App Store purchases follow Apple's refund process.

- [ ] **Step 1:** LegalLayout (narrow measure, TOC sidebar) + four legal pages with the above content in full prose.
- [ ] **Step 2:** Contact page. Build green; commit `feat: contact and legal pages`.

### Task 13: 404, SEO, sitemap

**Files:**
- Create: `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.png` (design-system branded static PNG), per-page `metadata` exports pass
- Modify: all `app/**/page.tsx` metadata

- [ ] **Step 1:** Branded 404 ("This page didn't survive the cut.") with links home/store.
- [ ] **Step 2:** `sitemap.ts`/`robots.ts` (static export compatible) with absolute Pages URLs; per-page titles/descriptions; OG image.
- [ ] **Step 3:** Build green; commit `feat: 404, SEO metadata, sitemap`.

### Task 14: Playwright smoke suite + CI test gate

**Files:**
- Create: `playwright.config.ts`, `e2e/smoke.spec.ts`
- Modify: `.github/workflows/deploy.yml` (run vitest + playwright against `out/` via `npx serve` before deploy), `package.json` scripts

Tests (against production build served locally with basePath): every route in the sitemap returns 200 and renders its H1; nav cart badge increments after add-to-cart on /store; cart persists across reload; checkout opens stub modal; /account redirects to /login when logged out; 404 page renders for bogus route; `prefers-reduced-motion` emulation still renders hero.

- [ ] **Step 1:** Write suite; run locally `npm run build && npx playwright test` → green.
- [ ] **Step 2:** Wire into workflow before deploy step. Commit `test: e2e smoke suite in CI`.

### Task 15: Final deploy + verification

- [ ] **Step 1:** Push; `gh run watch` → green; deployed.
- [ ] **Step 2:** Live pass on `https://evoryder8-collab.github.io/BMHomePage/`: click through every nav route, add both apps to cart, run signup/login round-trip, check screenshots render, check mobile width in Browser pane.
- [ ] **Step 3:** Lighthouse on live home + one product page (target ≥90 each category); fix regressions if any.
- [ ] **Step 4:** Report to user with live URL + summary + known Phase-2 stubs.

## Self-review notes

- Spec coverage: every sitemap route has a task (home 8, finalova 9, ba 10, store/apps/press 11, contact/legal 12, 404 13, auth/account 6); design system 3; cart 5; screenshots 7; deploy 2/15; testing 14. ✓
- Pricing figures match spec verbatim. ✓
- Type consistency: `SKU`/`Product`/`useCart`/`initiateCheckout` signatures defined once (Tasks 4–6) and only consumed elsewhere. ✓
