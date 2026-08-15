"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PricingSwitcher from "@/components/pricing/PricingSwitcher";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import { withBase } from "@/lib/site";

type AppId = "finalova" | "ba-studio";

const APPS: {
  id: AppId;
  name: string;
  from: string;
  image: string;
  didone?: boolean;
  accent: [string, string];
}[] = [
  {
    id: "finalova",
    name: "Finalova",
    from: "From $19/mo · own it from $99",
    image: "/screenshots/finalova/window-main.webp",
    accent: ["#4338ca", "#0369a1"],
  },
  {
    id: "ba-studio",
    name: "B∕A Studio",
    from: "From $7.99/mo · own it for $279",
    image: "/screenshots/ba-studio/editorial-card.webp",
    didone: true,
    accent: ["#2e7d54", "#6bb08c"],
  },
];

/** Two product blocks, always side by side. Tapping one opens its
 *  two-lane pricing flow underneath; one product, one decision at a time. */
export default function StoreProducts() {
  const [selected, setSelected] = useState<AppId>("finalova");
  const reduce = useReducedMotion();
  const active = APPS.find((a) => a.id === selected)!;

  return (
    <div>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:gap-6">
        {APPS.map((app) => {
          const isActive = app.id === selected;
          return (
            <button
              key={app.id}
              onClick={() => setSelected(app.id)}
              aria-pressed={isActive}
              className={`group relative overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 sm:p-5 ${
                isActive
                  ? "border-transparent bg-white shadow-xl"
                  : "border-ink/12 bg-white/50 hover:-translate-y-0.5 hover:bg-white/80"
              }`}
              style={
                isActive
                  ? {
                      boxShadow: `0 0 0 2px ${app.accent[0]}, 0 24px 60px -28px ${app.accent[0]}66`,
                    }
                  : undefined
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(app.image)}
                alt=""
                className="mb-3 aspect-[16/10] w-full rounded-lg object-cover object-top"
                loading="eager"
              />
              <div
                className={`text-[15px] font-bold sm:text-lg ${
                  app.didone ? "font-didone font-medium" : "font-display"
                } text-ink`}
              >
                {app.name}
              </div>
              <div className="font-ui mt-1 text-[11px] text-ink/55 sm:text-xs">
                {app.from}
              </div>
              <div
                className="font-ui mt-2 inline-block text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs"
                style={{ color: app.accent[0] }}
              >
                {isActive ? "Viewing options" : "View options"}
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={selected}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-14 ${active.didone ? "didone-scope" : ""}`}
        >
          <h2
            className={`display-md text-center ${
              active.didone ? "" : ""
            }`}
          >
            {active.name}
          </h2>
          <p className="font-ui mt-2 text-center text-[13px] text-ink/55">
            {selected === "finalova"
              ? "For Mac · 14-day free trial with everything unlocked"
              : "For Mac & iPhone · free trial included"}
          </p>
          <div className="mt-8">
            <PricingSwitcher app={selected} accent={active.accent} />
          </div>

          {selected === "ba-studio" && (
            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-ink/10 bg-white/70 px-8 py-7 text-center backdrop-blur">
              <div>
                <h3 className="font-ui text-base font-semibold text-ink">
                  B∕A Studio for iPhone
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60">
                  The guided camera with LiDAR Enhanced capture lives on your
                  iPhone. Get it on the App Store; subscriptions there run
                  through your Apple ID.
                </p>
              </div>
              <AppStoreBadge />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
