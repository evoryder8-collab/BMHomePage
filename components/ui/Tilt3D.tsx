"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  /** Degrees the panel leans back before scroll straightens it. */
  from?: number;
  /** Optional Y-axis lean for asymmetric, film-still compositions. */
  fromY?: number;
}

/**
 * Cinematic scroll piece: the child starts leaned back in 3D space and
 * straightens as it travels toward the center of the viewport, like a
 * poster being raised toward the camera.
 */
export default function Tilt3D({
  children,
  className,
  from = 24,
  fromY = 0,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const rotateX = useTransform(progress, [0, 1], [from, 0]);
  const rotateY = useTransform(progress, [0, 1], [fromY, 0]);
  const scale = useTransform(progress, [0, 1], [0.92, 1]);
  const opacity = useTransform(progress, [0, 0.35, 1], [0.35, 0.8, 1]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: "1400px", perspectiveOrigin: "50% 30%" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
