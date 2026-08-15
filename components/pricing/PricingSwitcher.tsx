"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import { PRODUCTS, type SKU } from "@/lib/products";

type Mode = "one" | "sub";
type Cycle = "monthly" | "annual";

const LIFETIME_NOTE =
  "One payment, yours forever. Updates are included for the first year; after that the app simply keeps working as-is and renewing updates stays optional. Major future platform changes by Apple are outside anyone's control, but we build conservatively so your tools keep running.";

interface PricingSwitcherProps {
  app: "finalova" | "ba-studio";
  accent?: [string, string];
}

/** The two-lane pricing flow: one clear switch, never more than three
 *  choices on screen. Lifetime keeps an honest cameo in the subscription
 *  lane as the "stop paying monthly" anchor. */
export default function PricingSwitcher({
  app,
  accent = ["#2e7d54", "#6bb08c"],
}: PricingSwitcherProps) {
  const [mode, setMode] = useState<Mode>("one");
  const [cycle, setCycle] = useState<Cycle>("annual");
  const reduce = useReducedMotion();

  const lanes: Record<
    PricingSwitcherProps["app"],
    Record<Mode, { sku: SKU; highlight?: boolean; note?: string }[]>
  > = {
    finalova: {
      one: [
        { sku: "finalova-perpetual" },
        { sku: "finalova-studio-perpetual", highlight: true },
        { sku: "finalova-updates-renewal" },
      ],
      sub: [
        {
          sku:
            cycle === "annual"
              ? "finalova-studio-annual"
              : "finalova-studio-monthly",
          highlight: true,
        },
        { sku: "finalova-studio-perpetual", note: LIFETIME_NOTE },
      ],
    },
    "ba-studio": {
      one: [{ sku: "ba-lifetime", highlight: true, note: LIFETIME_NOTE }],
      sub: [
        { sku: cycle === "annual" ? "ba-lite-annual" : "ba-lite-monthly" },
        {
          sku: cycle === "annual" ? "ba-pro-annual" : "ba-pro-monthly",
          highlight: true,
        },
        { sku: "ba-lifetime", note: LIFETIME_NOTE },
      ],
    },
  };

  const items = lanes[app][mode];

  return (
    <div>
      {/* The main switch */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Payment type"
          className="font-ui relative inline-flex rounded-full border border-ink/15 bg-white/70 p-1.5 backdrop-blur"
        >
          {(
            [
              ["one", "One-Payment"],
              ["sub", "Subscription"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              role="tab"
              aria-selected={mode === value}
              onClick={() => setMode(value)}
              className={`relative z-10 rounded-full px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                mode === value ? "text-white" : "text-ink/60 hover:text-ink"
              }`}
            >
              {mode === value && (
                <motion.span
                  layoutId={`mode-thumb-${app}`}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 400, damping: 34 }
                  }
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{
                    background: `linear-gradient(120deg, ${accent[0]}, ${accent[1]})`,
                  }}
                />
              )}
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Billing cycle, only where it matters */}
      <AnimatePresence initial={false}>
        {mode === "sub" && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="font-ui mt-5 flex items-center justify-center gap-4 text-[13px]">
              <button
                onClick={() => setCycle("monthly")}
                className={
                  cycle === "monthly"
                    ? "font-semibold text-ink"
                    : "text-ink/45 hover:text-ink"
                }
              >
                Monthly
              </button>
              <button
                role="switch"
                aria-checked={cycle === "annual"}
                aria-label="Bill annually"
                onClick={() =>
                  setCycle(cycle === "annual" ? "monthly" : "annual")
                }
                className="relative h-6 w-11 rounded-full border border-ink/15 bg-white/80"
              >
                <span
                  className="absolute top-0.5 h-[18px] w-[18px] rounded-full transition-all duration-300"
                  style={{
                    left: cycle === "annual" ? "calc(100% - 20px)" : "2px",
                    background: `linear-gradient(120deg, ${accent[0]}, ${accent[1]})`,
                  }}
                />
              </button>
              <button
                onClick={() => setCycle("annual")}
                className={
                  cycle === "annual"
                    ? "font-semibold text-ink"
                    : "text-ink/45 hover:text-ink"
                }
              >
                Annual{" "}
                <span className="text-jade">
                  (two months free)
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The lane */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${mode}-${cycle}`}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto mt-10 grid gap-8 ${
            items.length === 1
              ? "max-w-md"
              : items.length === 2
                ? "max-w-3xl md:grid-cols-2"
                : "md:grid-cols-3"
          }`}
        >
          {items.map(({ sku, highlight, note }) => (
            <PricingCard
              key={sku}
              product={PRODUCTS[sku]}
              highlight={highlight}
              accent={accent}
              note={note}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
