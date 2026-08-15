import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Chapter from "@/components/finalova/Chapter";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";
import ProductBox3D from "@/components/ui/ProductBox3D";

export const metadata: Metadata = {
  title: "Finalova: the finishing line",
  description:
    "The intelligent media adaptation and delivery studio for Mac. Branding, reframing, captions, optimization and delivery, all handled after the edit.",
};

const CHAPTERS = [
  {
    eyebrow: "The Media Bay",
    title: "One batch. Every destination.",
    body: "Drop in hundreds of mixed photos and videos. Finalova reads their resolution, cadence, codec and color, then treats the whole batch as one job. Filter to just the verticals, select all, decide once. Fuzzy search forgives typos, and a keyboard palette summons any preset.",
    image: "/screenshots/finalova/media-bay.webp",
    imageAlt: "The Finalova Media Bay with a production batch and live phone preview",
    points: [
      "Photos, RAW-derived assets and video in one workspace",
      "Marquee, Shift-click and Command-click like a real Mac app",
      "Source-folder color coding for mixed client imports",
    ],
  },
  {
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
    <div className="aurora-bg text-ivory">
      {/* Hero: the product as an object */}
      <section className="grain relative overflow-hidden">
        <div className="container-page grid min-h-[82vh] items-center gap-8 py-24 lg:grid-cols-[1.15fr_1fr]">
          <div className="text-center lg:text-left">
            <p
              className="eyebrow rise mb-5 text-gold-soft"
              style={{ animationDelay: "0.05s" }}
            >
              Finalova · for Mac
            </p>
            <h1 className="display-xl rise" style={{ animationDelay: "0.12s" }}>
              The finishing <span className="aurora-text">line.</span>
            </h1>
            <p
              className="rise mt-7 max-w-xl text-lg leading-relaxed text-ivory/70 max-lg:mx-auto"
              style={{ animationDelay: "0.22s" }}
            >
              The intelligent media adaptation and delivery studio. One
              finished piece becomes every deliverable: branded, reframed,
              captioned, optimized and organized, from one coherent workspace.
            </p>
            <div
              className="rise mt-10 flex flex-col gap-3 sm:flex-row max-lg:items-center max-lg:justify-center"
              style={{ animationDelay: "0.32s" }}
            >
              <Button href="/finalova/pricing" variant="gold">
                See pricing
              </Button>
              <Button
                href="/store"
                variant="ghost"
                className="border-ivory/25 !text-ivory hover:border-ivory/60 hover:!bg-ivory/10"
              >
                Visit the store
              </Button>
            </div>
          </div>
          <ProductBox3D
            title="Finalova"
            subtitle="Media delivery studio"
            colors={["#3b1d8f", "#1d4ed8"]}
            accent="#a78bfa"
            className="h-[420px] w-full sm:h-[500px]"
          />
        </div>
        <div className="container-page relative pb-24">
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
      <section className="border-t border-ivory/8">
        <div className="container-page py-20 text-center md:py-28">
          <Reveal>
            <h2 className="display-md">Born on Apple Silicon.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/65">
              A Metal-backed Core Image pipeline for photos. VideoToolbox and
              Apple&rsquo;s media engines for video. Concurrency that exploits
              an M2&nbsp;Max and protects an M1&nbsp;Air. No Electron, no
              cloud, no waiting on someone else&rsquo;s server.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-ivory/50">
              <span>Fully offline</span>
              <span>·</span>
              <span>No telemetry</span>
              <span>·</span>
              <span>Preview = export</span>
              <span>·</span>
              <span>Originals never modified</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-ivory/8">
        <div className="container-page py-24 text-center md:py-32">
          <Reveal>
            <h2 className="display-lg">
              Invoice the adaptation,
              <br />
              not just the shoot.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-base text-ivory/65">
              Finalova Studio turns &ldquo;can you also make the socials
              versions?&rdquo; into a one-click, billable deliverable.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-9">
              <Button href="/finalova/pricing" variant="gold">
                Choose your edition
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
