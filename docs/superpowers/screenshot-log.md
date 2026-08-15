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
