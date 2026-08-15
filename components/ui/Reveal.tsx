"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, useEffect, useState } from "react";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}

/** Viewport-triggered fade/rise. Renders children statically when the user
 *  prefers reduced motion. */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  const [canObserve, setCanObserve] = useState(true);
  const M = motion.create(as);

  useEffect(() => {
    setCanObserve("IntersectionObserver" in window);
  }, []);

  if (reduce || !canObserve) {
    return createElement(as, { className }, children);
  }

  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}
