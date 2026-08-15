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
      className={`rounded-2xl bg-white/[0.05] p-2 ring-1 ring-pearl/12 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8),0_24px_60px_-30px_rgba(200,164,75,0.18)] backdrop-blur-sm ${className}`}
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
