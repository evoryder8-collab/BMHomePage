import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Chapter from "@/components/finalova/Chapter";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

export const metadata: Metadata = {
  title: "Finalova: the finishing line",
  description:
    "The intelligent media adaptation and delivery studio for Mac. Branding, reframing, captions, optimization and delivery, all handled after the edit.",
};

const CHAPTERS = [
  {
    index: "01",
    eyebrow: "The Media Bay",
    title: "One batch. Every destination.",
    body: "Drop in hundreds of mixed photos and videos. Finalova reads their resolution, cadence, codec and color, then treats the whole batch as one job. Filter to just the verticals, select all, decide once. Fuzzy search forgives typos, and a keyboard palette summons any preset.",
    image: "/screenshots/finalova/media-bay.webp",
    imageAlt:
      "The Finalova Media Bay with a production batch and live phone preview",
    points: [
      "Photos, RAW-derived assets and video in one workspace",
      "Marquee, Shift-click and Command-click like a real Mac app",
      "Source-folder color coding for mixed client imports",
    ],
  },
  {
    index: "02",
    eyebrow: "Aspect-aware calibration",
    title: "Watermarks that look right everywhere.",
    body: "The same percentage looks bold on a story and lost on a widescreen. Finalova detects your batch's shape families and balances your mark for how the eye actually sees: height, area and negative space, not one naive number. You approve the treatment on real examples before it touches the batch.",
    image: "/screenshots/finalova/calibration.webp",
    imageAlt: "Finalova's aspect-ratio calibration workspace",
    flip: true,
    points: [
      "Multi-logo layouts with linked sizing and opacity",
      "Nine-point alignment, exact percentages, per-file overrides",
      "Shape-level memory: future batches inherit your balance",
    ],
  },
  {
    index: "03",
    eyebrow: "Captions",
    title: "Captions that understand speech.",
    body: "Speech recognition runs locally on your Mac, with no uploads, ever. Then a timing engine takes over: clause boundaries, hesitations, phrase-final holds. Every block stays editable on a real timeline, and the preview renders with the exact geometry of the export.",
    points: [
      "Viral, Modern Clean and Modern Fluid style systems",
      "Word-level timing that respects how sentences breathe",
      "Multilingual, offline after one model download",
    ],
  },
  {
    index: "04",
    eyebrow: "Reframing",
    title: "Reframe without guessing.",
    body: "Turn a landscape film vertical while seeing everything outside the crop. Keyframe the composition as your subject moves. Finalova's Smooth Points follow a shape-preserving minimum-jerk path, so the motion carries momentum like a camera operator, not a robot.",
    flip: true,
    points: [
      "Overscan view: reframe with full knowledge of the frame",
      "Platform-aware trims with a Lock to Limit guard",
      "The same curve drives preview and export",
    ],
  },
  {
    index: "05",
    eyebrow: "Client Delivery Packs",
    title: "Deliver like an agency.",
    body: "Define a delivery once: Instagram in three ratios, Google Maps within its duration limit, LinkedIn, clean website files, a native client master. Then produce the entire folder tree in one click. Adaptive mode skips branches that would be empty, and filenames explain themselves.",
    image: "/screenshots/finalova/delivery-pack.webp",
    imageAlt: "A Client Delivery Pack folder structure preview",
    points: [
      "Branding per branch: marked socials, clean masters",
      "Watermark Across Crops: one file previewed in every shape",
      "Reorderable, renameable pack layouts per client type",
    ],
  },
  {
    index: "06",
    eyebrow: "Watch Folders",
    title: "Set it. Shoot. It's done.",
    body: "Point Finalova at the folder where Resolve, Premiere, Final Cut or CapCut renders finish. It waits for each file to complete, then watermarks it, builds the Reels pair, or assembles the whole Client Delivery Pack, straight into a synced drive if you like, while you're already on the next job.",
    image: "/screenshots/finalova/watch-folders.webp",
    imageAlt: "Watch Folder automation queue in Finalova",
    flip: true,
    points: [
      "Multi-Client mode preserves client subfolder names",
      "Fingerprinting prevents double processing",
      "Automation you can see: pause, resume, inspect",
    ],
  },
  {
    index: "07",
    eyebrow: "Website Builder Mode",
    title: "The web weighs less now.",
    body: "WebP, AVIF, JPEG, PNG or HEIF, at exact target sizes. Finalova performs the real encode and measures the finished bytes, because a 5 MB limit doesn't care about estimates. Inspect original versus compressed through a draggable split before you commit.",
    image: "/screenshots/finalova/web-optimize.webp",
    imageAlt: "Website optimization with before/after compression split",
    points: [
      "Transparency preserved by default",
      "Batch or per-selection settings in one project",
      "Optional developer handoff manifest, off by default",
    ],
  },
  {
    index: "08",
    eyebrow: "Source-aware quality",
    title: "Honest passthrough.",
    body: "If pixels change, a video must be re-encoded. Finalova says so, then protects you: source dimensions, exact fractional cadence, compatible codec, color metadata, bit depth and a quality budget with generation headroom. Your 4K master never quietly collapses into a small file.",
    flip: true,
    points: [
      "HDR retains appropriate codec and color handling",
      "Audio passes through when compatible",
      "Source-faithful, Lean and Custom modes",
    ],
  },
];

export default function FinalovaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page flex min-h-[78vh] flex-col items-center justify-center pt-24 text-center">
          <p
            className="eyebrow rise mb-7 text-aurora-to/90"
            style={{ animationDelay: "0.05s" }}
          >
            Finalova · for Mac
          </p>
          <h1 className="display-xl rise" style={{ animationDelay: "0.14s" }}>
            The <span className="shimmer-aurora">finishing</span> line.
          </h1>
          <p
            className="lede rise mt-8 max-w-2xl text-ink/70"
            style={{ animationDelay: "0.26s" }}
          >
            The intelligent media adaptation and delivery studio. One finished
            piece becomes every deliverable: branded, reframed, captioned,
            optimized and organized, from one coherent workspace.
          </p>
          <div
            className="rise mt-11 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.38s" }}
          >
            <Button href="/finalova/pricing">See pricing</Button>
            <Button href="/store" variant="ghost">
              Visit the store
            </Button>
          </div>
        </div>
        <div className="container-page relative pb-28 pt-16">
          <Tilt3D from={26}>
            <ScreenshotFrame
              src="/screenshots/finalova/window-main.webp"
              alt="The Finalova main window with a full batch, live preview and caption timeline"
              priority
            />
          </Tilt3D>
        </div>
      </section>

      {CHAPTERS.map((c) => (
        <Chapter key={c.eyebrow} {...c} />
      ))}

      {/* Apple Silicon + trust strip */}
      <section className="relative">
        <div className="hairline-jade mx-auto max-w-4xl" />
        <div className="container-page py-24 text-center md:py-28">
          <Reveal>
            <h2 className="display-md">
              Born on <span className="shimmer-aurora">Apple Silicon.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-[1.8] text-ink/65">
              A Metal-backed Core Image pipeline for photos. VideoToolbox and
              Apple&rsquo;s media engines for video. Concurrency that exploits
              an M2&nbsp;Max and protects an M1&nbsp;Air. No Electron, no
              cloud, no waiting on someone else&rsquo;s server.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="font-ui mt-11 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[12.5px] uppercase tracking-[0.18em] text-ink/45">
              <span>Fully offline</span>
              <span className="text-jade/60">·</span>
              <span>No telemetry</span>
              <span className="text-jade/60">·</span>
              <span>Preview = export</span>
              <span className="text-jade/60">·</span>
              <span>Originals never modified</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative">
        <div className="hairline-jade mx-auto max-w-4xl" />
        <div className="container-page py-28 text-center md:py-36">
          <Reveal>
            <h2 className="display-lg">
              Invoice the <span className="shimmer-jade">adaptation,</span>
              <br />
              not just the shoot.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lede mx-auto mt-7 max-w-xl text-ink/65">
              Finalova Studio turns &ldquo;can you also make the socials
              versions?&rdquo; into a one-click, billable deliverable.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10">
              <Button href="/finalova/pricing">Choose your edition</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
