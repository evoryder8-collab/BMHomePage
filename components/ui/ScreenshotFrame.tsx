import Gleam from "@/components/ui/Gleam";
import { withBase } from "@/lib/site";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  /** Kept for API compatibility; the obsidian stage has one tone now. */
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}

/** A screenshot presented as an object under gallery light: glass rim,
 *  gold-warmed depth shadow, one gleam sweep on entry. */
export default function ScreenshotFrame({
  src,
  alt,
  className = "",
  priority,
}: ScreenshotFrameProps) {
  return (
    <Gleam
      className={`rounded-2xl bg-white/55 p-2 ring-1 ring-ink/15 shadow-[0_44px_90px_-32px_rgba(34,42,30,0.45),0_20px_50px_-28px_rgba(169,133,47,0.3)] backdrop-blur-sm ${className}`}
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
