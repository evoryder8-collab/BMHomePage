"use client";

import { useEffect } from "react";

/**
 * Feeds a few low-frequency environmental values into CSS. The visuals remain
 * CSS-driven; this component only makes the light field respond to the visitor
 * without turning every card into its own JavaScript animation.
 */
export default function SpatialVfx() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      root.dataset.bmVfx = "reduced";
      return () => {
        delete root.dataset.bmVfx;
      };
    }

    root.dataset.bmVfx = "active";

    let pointerX = 72;
    let pointerY = 20;
    let scrollProgress = 0;
    let frame = 0;

    const render = () => {
      frame = 0;
      root.style.setProperty("--bm-pointer-x", `${pointerX.toFixed(2)}%`);
      root.style.setProperty("--bm-pointer-y", `${pointerY.toFixed(2)}%`);
      root.style.setProperty("--bm-scroll-progress", scrollProgress.toFixed(4));
      root.style.setProperty(
        "--bm-scroll-drift",
        `${((scrollProgress - 0.5) * 42).toFixed(2)}px`,
      );
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const readScroll = () => {
      const distance = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / distance));
      schedule();
    };

    const readPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerX = (event.clientX / Math.max(1, window.innerWidth)) * 100;
      pointerY = (event.clientY / Math.max(1, window.innerHeight)) * 100;
      schedule();
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll, { passive: true });
    window.addEventListener("pointermove", readPointer, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
      window.removeEventListener("pointermove", readPointer);
      delete root.dataset.bmVfx;
      root.style.removeProperty("--bm-pointer-x");
      root.style.removeProperty("--bm-pointer-y");
      root.style.removeProperty("--bm-scroll-progress");
      root.style.removeProperty("--bm-scroll-drift");
    };
  }, []);

  return null;
}
