# Barbu Media Website — Design Spec

**Date:** 2026-08-15
**Repo:** BMHomePage (github.com/evoryder8-collab/BMHomePage)
**Status:** Approved by owner 2026-08-15

## Purpose

The official Barbu Media website and online store — selling two professional
macOS/iOS applications (Finalova and B/A Studio) built in Zürich, Switzerland
by Barbu Media (Swiss sole proprietorship). Positioning: high-end professional
instruments that pay for themselves — customers work smarter, faster, and win
more clients.

## Phasing

- **Phase 1 (this spec):** Complete website — all pages, cart, Supabase auth,
  account area, legal pages, real app screenshots, deployed to GitHub Pages.
  Checkout UI complete but calls a clearly-marked stub until Phase 2.
- **Phase 2 (separate spec):** Paddle sandbox → live; Supabase licensing
  backend implementing the app-side licensing contract verbatim
  (customers/licenses/activations/trials/webhook_log tables; /activate,
  /refresh, /deactivate, /trial/start Edge Functions; Paddle webhook
  receiver; Ed25519 token issuance with private key in Supabase secrets).

## Hard safety rule

The app source projects are READ-ONLY for every session working on this site:

- `/Users/jaxoncorrey/Downloads/App Stamp` (Finalova — Stamp.xcodeproj)
- `/Users/jaxoncorrey/Downloads/Befor and After APP` (BeforeAfterStudio.xcodeproj, BeforeAfterStudioMobile.xcodeproj)

They may be built and screenshotted. Never modified, never deleted.

## Architecture

- **Next.js 15, App Router, `output: 'export'`**, TypeScript, Tailwind CSS 4,
  Framer Motion.
- **Hosting:** GitHub Pages via GitHub Actions workflow on push to `main`.
  `basePath`/`assetPrefix` set to `/BMHomePage` until a custom domain exists
  (then: CNAME file + DNS only). Site URL:
  `https://evoryder8-collab.github.io/BMHomePage/`.
- **Supabase:** project `tvdggjxisbixzrkzuojb`, publishable key (safe for
  client). Client-side auth only (`createBrowserClient` from `@supabase/ssr`).
  Keep `utils/supabase/{client,server,middleware}.ts` layout so the codebase
  lifts onto Vercel unchanged later; server/middleware files are unused on
  Pages.
- **Cart:** React context + localStorage. Nav badge + slide-over drawer.
  Multi-item; maps to Paddle Billing multi-item transactions in Phase 2.
- **Checkout:** Paddle.js v2 overlay (client-side; works on static hosting).
  Phase 1: full flow with sandbox stub labeled as such.
- **No secrets in repo.** The publishable key is public by design. Ed25519
  private key and Paddle API key exist only in Supabase secrets (Phase 2).

## Sitemap

| Route | Purpose |
|---|---|
| `/` | Brand home: hero, both apps, Made in Zürich line, philosophy |
| `/apps` | Catalog with slot for future apps |
| `/finalova` | Long-scroll product page, ~10 feature chapters |
| `/finalova/pricing` | Editions table, ROI earnings calculator, upgrade path |
| `/ba-studio` | Editorial product page |
| `/ba-studio/pricing` | Lite / Pro / Lifetime |
| `/store` | Both products, add to cart |
| `/login`, `/signup` | Supabase email/password auth |
| `/account` | Licenses, activations (deactivate machine), downloads, invoices |
| `/contact` | Contact form + support email |
| `/legal/terms`, `/legal/privacy`, `/legal/refunds`, `/legal/impressum` | Swiss legal set |
| `/press` | Both press briefs, downloadable |
| `404` | Branded |

Legal notes: impressum names Barbu Media, sole proprietorship, Zürich,
Switzerland. Privacy policy reflects the apps' offline-first, no-telemetry
posture. Refunds: 14-day policy aligned with Paddle as merchant of record.

## Visual design system

**Global:** Swiss precision + warmth. Ivory/near-black palette, large
confident display type (Inter/grotesk), generous whitespace, subtle grain.
Signature effects: opening hero animation, scroll-triggered chapter reveals,
specular gleam sweeping across screenshots/cards on viewport entry. Swiss
cross accent: "Conceived and built in Zürich, Switzerland."

**Finalova theme:** kinetic; aurora gradient (deep violet → electric blue)
on dark sections; motion-heavy; media-pipeline language. Screenshots: Media
Bay, watermark calibration workspace, caption timeline, Client Delivery Pack
tree.

**B/A Studio theme:** the app's editorial DNA — warm mat, Didone serif
display (Playfair Display), gilded hairline seams, restrained motion. Lift
Index formula and "TWO ORIGINALS · ONE RIGID FRAME · ZERO COSMETIC EDITS" as
typographic set-pieces.

**Screenshots:** Build + run both Mac apps; `screencapture -o -w` for
transparent window captures plus region crops of specific panels; iOS B/A
Studio via Simulator. Transparent PNG, retina 2x, presented in themed frames
with gleam treatment.

## Copy

Apple-marketing register: short declarative headlines, benefit-first.
Through-line: professional instruments that pay for themselves.
Finalova: "Invoice the adaptation, not just the shoot" (ROI story, earnings
calculator). B/A Studio: "The comparison that can't lie" (credibility story).

## Pricing (displayed USD; Paddle localizes at checkout)

**Finalova** (per app-side licensing doc):
- Finalova perpetual: list $129, launch $99 (12 months updates included)
- Finalova Studio perpetual: $249
- Studio monthly $19 / annual $182
- Upgrade base → Studio: pay the difference
- Update renewal: $49/yr optional
- Editions: base = full watermarking/adaptation tool, uncrippled forever;
  Studio adds Client Delivery Packs, Watch Folders, web-optimized export sets.
- 14-day full-featured (Studio) trial; 2 activations per personal license.

**B/A Studio** (from EUR brief, USD points):
- Lite $7.99/mo, $71.99/yr — Quick mode content production
- Pro $12.99/mo, $119.99/yr — Measurement Studio, Lift Index, records, LiDAR
- Lifetime $279
- Mac via Paddle/website; iOS via App Store (StoreKit), site routes iOS users
  to the App Store per licensing doc §5.

## Account area (Phase-1 UI, Phase-2 data)

Logged-in users see: licenses (key, edition, plan, updates-through),
activations with self-serve deactivate, download links (notarized DMGs),
invoice links (Paddle). Zero-state: "Your purchases will appear here."

## Error handling & quality bar

- Auth errors inline (wrong password, unconfirmed email, rate limits).
- Cart defensive against stale/unknown product IDs.
- All motion respects `prefers-reduced-motion`.
- Responsive to 375px. Lighthouse ≥ 90 all categories. OG/social meta per
  page; sitemap.xml + robots.txt.

## Testing

- `npm run build` (static export) green in CI before deploy.
- Playwright smoke: nav, cart add/remove/persist, auth form validation,
  every route renders, 404 works under basePath.
- Manual visual pass on deployed Pages URL after each push.
