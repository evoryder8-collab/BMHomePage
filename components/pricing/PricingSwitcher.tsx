"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import { PRODUCTS, type SKU } from "@/lib/products";
import type { CSSProperties } from "react";

type Mode = "one" | "sub";
type Cycle = "monthly" | "annual";

const LIFETIME_NOTE =
  "One payment, yours forever. Updates are included for the first year; after that the app keeps working and renewing updates remains optional.";

interface PricingSwitcherProps {
  app: "finalova" | "ba-studio";
  accent?: [string, string];
}

export default function PricingSwitcher({
  app,
  accent = ["#ff553d", "#65ddec"],
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
          sku: cycle === "annual" ? "finalova-studio-annual" : "finalova-studio-monthly",
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
    <div
      className={`pricing-system is-${app}`}
      style={{ "--pricing-accent": accent[0], "--pricing-accent-2": accent[1] } as CSSProperties}
    >
      <div className="pricing-controls">
        <div role="tablist" aria-label="Payment type" className="pricing-mode-tabs">
          {([ ["one", "Pay once"], ["sub", "Subscribe"] ] as const).map(([value, label]) => (
            <button
              key={value}
              role="tab"
              aria-selected={mode === value}
              onClick={() => setMode(value)}
              className={mode === value ? "is-active" : ""}
            >
              {mode === value && (
                <motion.span
                  layoutId={`pricing-mode-${app}`}
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <i aria-hidden>{value === "one" ? "01" : "02"}</i>
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {mode === "sub" && (
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -8 }}
              className="pricing-cycle"
            >
              <span>Billing</span>
              <button onClick={() => setCycle("monthly")} className={cycle === "monthly" ? "is-active" : ""}>
                Monthly
              </button>
              <button onClick={() => setCycle("annual")} className={cycle === "annual" ? "is-active" : ""}>
                Annual <small>Save up to 25%</small>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${mode}-${cycle}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: .3, ease: [0.22, 1, 0.36, 1] }}
          className="pricing-lane"
        >
          {items.map(({ sku, highlight, note }, index) => (
            <PricingCard
              key={sku}
              product={PRODUCTS[sku]}
              highlight={highlight}
              accent={accent}
              note={note}
              position={index + 1}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
