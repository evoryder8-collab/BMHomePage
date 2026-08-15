# Screenshot capture log — 2026-08-15

All app repos were treated read-only: builds used `-derivedDataPath` in the
session scratchpad; nothing inside `App Stamp/` or `Befor and After APP/` was
modified. All images converted to WebP (q84) via sharp; originals were
transparent-corner window captures (`screencapture -o -x -l <windowid>`).

## Finalova (built fresh from App Stamp/Stamp.xcodeproj, Release)

| File | Content |
|---|---|
| finalova/window-main.webp | Main workspace, Social Distribution mode, real 440-photo batch, live preview |
| finalova/media-bay.webp | Same capture (used for Media Bay chapter) |
| finalova/calibration.webp | "Balance your watermark across shapes" window, 4 shape families, real photos |
| finalova/delivery-pack.webp | Client Delivery Pack window ("Henry AMC26" pack, Watermark Across Crops) |
| finalova/watch-folders.webp | Watch Folders automation window |
| finalova/web-optimize.webp | Website Builder mode with split compression preview + Web Delivery Studio |

Gaps: captions timeline and video reframe shots not captured — the restored
session contained 0 video clips, and importing media would have altered the
owner's live project state. Those chapters ship text-only. Capture later by
opening a scratch project with a test clip.

## B∕A Studio (from `output/previews/` — app-generated marketing previews,
synthetic demo portrait, no client imagery)

| File | Source |
|---|---|
| ba-studio/window-main.webp | BeforeAfterStudio-v2.5-clean-workspace.png (full workspace, integrity lock visible) |
| ba-studio/editorial-card.webp | Aura-4x5-share.jpg (finished editorial card) |
| ba-studio/measurement.webp | BeforeAfterStudio-1.7-Lift-Guides.png (mm measurement UI) |
| ba-studio/web-wipe.webp | Interactive-Web-Wipe-1.5.png (website wipe component) |

A live launch capture of the empty "Build the reveal" composition was also
taken and discarded in favor of the richer previews above.

## Refresh 2026-08-15 (redesign round)

Rebuilt both apps from latest source (READ-ONLY, scratchpad DerivedData).
- finalova/window-main.webp + media-bay.webp: fresh capture, 19-file curated
  batch (owner's own portfolio media, screened: passport scans and personal
  documents excluded), list bay with 7 visible items, WMF video in device
  preview. App bundle is now Finalova.app; in-window brand label still reads
  "Stamp" (app-side, worth fixing in the app).
- ba-studio/window-main.webp: live workspace, synthetic demo pair (from the
  app's own persisted QA sessions), new BEFORE/AFTER Bodoni Moda card.
  Integrity lock advisories visible (pair is a near-copy by design).
- ba-studio/editorial-card.webp + measurement.webp: composed fresh via
  `StudioTools compose` (gallery preset; measurement card via
  --measurement-demo, Lift Index 375 · +2.9 mm).
- ba-studio/card-zero.webp: live card crop scoring an unchanged face as
  LIFT INDEX 0 · WITHIN NOISE · EXPLORATORY (the honesty story).
- ba-studio/measure-flow.webp: three-set measurement onboarding dialog crop.
- ba-studio/canvas-live.webp: composition canvas crop (unused so far).
