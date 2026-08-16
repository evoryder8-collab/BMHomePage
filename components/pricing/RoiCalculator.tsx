"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { roi } from "./roi";

/** Springs a number toward its target so the figure rolls like a meter. */
function RollingNumber({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(value);
  const spring = useSpring(mv, { stiffness: 120, damping: 22 });
  const [display, setDisplay] = useState(value);
  const first = useRef(true);

  useEffect(() => {
    if (reduce || first.current) {
      first.current = false;
      mv.jump(value);
      setDisplay(value);
      return;
    }
    mv.set(value);
  }, [value, mv, reduce]);

  useEffect(
    () => spring.on("change", (v) => setDisplay(Math.round(v))),
    [spring],
  );

  return <>{display.toLocaleString("en-US")}</>;
}

export default function RoiCalculator() {
  const [shoots, setShoots] = useState(6);
  const [fee, setFee] = useState(250);
  const r = roi(shoots, fee);

  return (
    <div className="glass-card glass-card-jade overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        {/* Inputs */}
        <div className="p-9 sm:p-12">
          <div className="eyebrow mb-4 text-jade/90">Do the math</div>
          <h3 className="display-md">
            Your edit is done.
            <br />
            <span className="shimmer-jade">Now sell the delivery.</span>
          </h3>
          <p className="mt-5 max-w-sm text-[15.5px] leading-[1.8] text-ink/60">
            Studios charge for the ready-to-post package: every channel, every
            format, named and organized. Finalova Studio builds the approved
            set in one unified pass. Slide your numbers.
          </p>

          <div className="mt-10 space-y-8">
            <label className="block">
              <span className="mb-3 flex items-baseline justify-between">
                <span className="font-ui text-[13px] text-ink/55">
                  Shoots you deliver monthly
                </span>
                <span className="font-display text-2xl text-ink">
                  {shoots}
                </span>
              </span>
              <input
                type="range"
                min={1}
                max={30}
                value={shoots}
                onChange={(e) => setShoots(Number(e.target.value))}
                className="slider-jade w-full"
                aria-label="Shoots delivered per month"
              />
            </label>
            <label className="block">
              <span className="mb-3 flex items-baseline justify-between">
                <span className="font-ui text-[13px] text-ink/55">
                  What you charge for the package
                </span>
                <span className="font-display text-2xl text-ink">
                  ${fee}
                </span>
              </span>
              <input
                type="range"
                min={50}
                max={600}
                step={25}
                value={fee}
                onChange={(e) => setFee(Number(e.target.value))}
                className="slider-jade w-full"
                aria-label="Adaptation package price"
              />
            </label>
          </div>
        </div>

        {/* Result */}
        <div className="relative flex flex-col justify-center gap-9 border-t border-ink/10 p-9 sm:p-12 lg:border-l lg:border-t-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(32rem 20rem at 75% 15%, rgba(200,164,75,0.16), transparent 65%)",
            }}
          />
          <div className="relative">
            <div className="font-ui text-[13px] uppercase tracking-[0.18em] text-ink/50">
              That&rsquo;s new revenue of
            </div>
            <div
              data-testid="roi-monthly"
              className="shimmer-jade font-display mt-2 text-6xl sm:text-7xl"
            >
              $<RollingNumber value={r.monthlyRevenue} />
            </div>
            <div className="mt-2 text-[15px] italic text-ink/55">
              every month, for a delivery prepared in one unified pass
            </div>
          </div>

          <div className="relative border-t border-ink/10 pt-7">
            <motion.div
              key={r.shootsToPayOff}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-ink"
            >
              Studio has paid for itself{" "}
              <span className="text-jade-soft">
                {r.shootsToPayOff === 1
                  ? "after your first shoot"
                  : `after ${r.shootsToPayOff} shoots`}
              </span>
              .
            </motion.div>
            <div className="font-ui mt-2 text-xs text-ink/40">
              Finalova Studio, $249 once. Everything after that is margin.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
