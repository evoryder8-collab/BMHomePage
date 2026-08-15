"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import SwissMark from "@/components/ui/SwissMark";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section className="grain relative overflow-hidden bg-ivory">
      <div className="container-page flex min-h-[82vh] flex-col items-center justify-center py-24 text-center">
        <motion.p {...rise(0.05)} className="eyebrow mb-6 text-ink/50">
          Barbu Media
        </motion.p>
        <motion.h1 {...rise(0.15)} className="display-xl max-w-4xl">
          Instruments,
          <br />
          not apps.
        </motion.h1>
        <motion.p
          {...rise(0.3)}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/65"
        >
          Professional Mac and iPhone software that pays for itself — precision
          tools that help you work faster, deliver more, and win the clients
          your work deserves.
        </motion.p>
        <motion.div
          {...rise(0.45)}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="/finalova">Explore Finalova</Button>
          <Button href="/ba-studio" variant="ghost">
            Explore B∕A Studio
          </Button>
        </motion.div>
        <motion.div {...rise(0.6)} className="mt-14">
          <SwissMark />
        </motion.div>
      </div>
    </section>
  );
}
