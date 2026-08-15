"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface GleamProps {
  children: ReactNode;
  className?: string;
}

/** Wraps a screenshot or card; sweeps a specular highlight across it once
 *  when it enters the viewport. Pure CSS animation, disabled under
 *  prefers-reduced-motion (see globals.css). */
export default function Gleam({ children, className }: GleamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`gleam-host ${run ? "gleam-run" : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
