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
    <div className="overflow-hidden rounded-[2rem] border border-ivory/10 bg-[#131318] text-ivory">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        {/* Inputs */}
        <div className="p-8 sm:p-10">
          <div className="eyebrow mb-3 text-gold-soft">Do the math</div>
          <h3 className="display-md">
            Your edit is done.
            <br />
            Now sell the delivery.
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            Studios charge for the ready-to-post package: every channel, every
            format, named and organized. Finalova Studio builds it in one
            click. Slide your numbers.
          </p>

          <div className="mt-9 space-y-7">
            <label className="block">
              <span className="mb-3 flex items-baseline justify-between text-sm">
                <span className="text-ivory/60">Shoots you deliver monthly</span>
                <span className="text-lg font-bold">{shoots}</span>
              </span>
              <input
                type="range"
                min={1}
                max={30}
                value={shoots}
                onChange={(e) => setShoots(Number(e.target.value))}
                className="slider-gold w-full"
                aria-label="Shoots delivered per month"
              />
            </label>
            <label className="block">
              <span className="mb-3 flex items-baseline justify-between text-sm">
                <span className="text-ivory/60">
                  What you charge for the package
                </span>
                <span className="text-lg font-bold">${fee}</span>
              </span>
              <input
                type="range"
                min={50}
                max={600}
                step={25}
                value={fee}
                onChange={(e) => setFee(Number(e.target.value))}
                className="slider-gold w-full"
                aria-label="Adaptation package price"
              />
            </label>
          </div>
        </div>

        {/* Result */}
        <div className="relative flex flex-col justify-center gap-8 border-t border-ivory/10 p-8 sm:p-10 lg:border-l lg:border-t-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(30rem 18rem at 75% 20%, rgba(184,150,62,0.18), transparent 65%)",
            }}
          />
          <div className="relative">
            <div className="text-sm text-ivory/55">
              That&rsquo;s new revenue of
            </div>
            <div
              data-testid="roi-monthly"
              className="mt-1 bg-gradient-to-r from-[#e3c878] via-[#f2e3ae] to-[#b8963e] bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl"
            >
              $<RollingNumber value={r.monthlyRevenue} />
            </div>
            <div className="mt-1 text-sm text-ivory/55">
              every month, for work that takes one click
            </div>
          </div>

          <div className="relative border-t border-ivory/10 pt-6">
            <motion.div
              key={r.shootsToPayOff}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-semibold"
            >
              Studio has paid for itself{" "}
              <span className="text-gold-soft">
                {r.shootsToPayOff === 1
                  ? "after your first shoot"
                  : `after ${r.shootsToPayOff} shoots`}
              </span>
              .
            </motion.div>
            <div className="mt-1 text-xs text-ivory/45">
              Finalova Studio, $249 once. Everything after that is margin.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
