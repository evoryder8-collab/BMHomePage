import Gleam from "@/components/ui/Gleam";
import { withBase } from "@/lib/site";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  /** "dark" puts a deep glass rim around the shot; "light" a soft ivory one. */
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}

/**
 * A screenshot presented as a physical object: glass rim, depth shadow,
 * gleam sweep. Pair with <Tilt3D> for the full cinematic treatment.
 */
export default function ScreenshotFrame({
  src,
  alt,
  tone = "dark",
  className = "",
  priority,
}: ScreenshotFrameProps) {
  return (
    <Gleam
      className={`rounded-2xl ${
        tone === "dark"
          ? "bg-white/[0.06] ring-1 ring-white/15 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)]"
          : "bg-ink/[0.03] ring-1 ring-ink/10 shadow-[0_40px_80px_-32px_rgba(16,16,20,0.35)]"
      } p-2 backdrop-blur-sm ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase(src)}
        alt={alt}
        className="w-full rounded-xl"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </Gleam>
  );
}
