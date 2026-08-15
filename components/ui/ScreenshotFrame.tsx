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

/** A screenshot presented as a precise product object under gallery light. */
export default function ScreenshotFrame({
  src,
  alt,
  className = "",
  priority,
}: ScreenshotFrameProps) {
  return (
    <Gleam
      className={`rounded-[1.35rem] bg-[#111113] p-2 ring-1 ring-white/15 shadow-[0_45px_95px_-38px_rgba(8,8,10,0.72)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase(src)}
        alt={alt}
        className="w-full rounded-[0.9rem]"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </Gleam>
  );
}
