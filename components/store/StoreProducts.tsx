"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PricingSwitcher from "@/components/pricing/PricingSwitcher";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import { withBase } from "@/lib/site";

type AppId = "finalova" | "ba-studio";

const SOFTWARE = {
  finalova: {
    name: "Finalova",
    index: "01",
    category: "Media adaptation & delivery · Mac",
    statement: "Adapt every required version from one coherent workspace.",
    from: "From $99 once or $19/month",
    image: "/art/finalova-devices.webp",
    accent: ["#ff553d", "#65ddec"] as [string, string],
  },
  "ba-studio": {
    name: "B∕A Studio",
    index: "02",
    category: "Before-and-after proof · Mac & iPhone",
    statement: "Capture comparable evidence, measure it and present it clearly.",
    from: "From $7.99/month or $279 lifetime",
    image: "/art/ba-studio-devices.webp",
    accent: ["#361528", "#62c4aa"] as [string, string],
  },
} as const;

export default function StoreProducts() {
  const [selected, setSelected] = useState<AppId>("finalova");
  const reduce = useReducedMotion();
  const active = SOFTWARE[selected];

  return (
    <div className="store-catalog">
      <div className="store-product-switch" role="tablist" aria-label="Choose software">
        {(Object.entries(SOFTWARE) as [AppId, (typeof SOFTWARE)[AppId]][]).map(([id, app]) => (
          <button
            key={id}
            role="tab"
            aria-selected={selected === id}
            className={selected === id ? "is-active" : ""}
            onClick={() => setSelected(id)}
          >
            <span>{app.index}</span>
            <div>
              <strong>{app.name}</strong>
              <small>{app.category}</small>
            </div>
            <i aria-hidden>{selected === id ? "VIEWING" : "SELECT"}</i>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={selected}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: .34, ease: [0.22, 1, 0.36, 1] }}
          className={`store-product-panel is-${selected}`}
        >
          <div className="store-product-intro">
            <div className="store-product-copy">
              <p>{active.category}</p>
              <h2>{active.name}</h2>
              <strong>{active.statement}</strong>
              <span>{active.from}</span>
              <div className="store-product-facts" aria-label={`${active.name} purchase benefits`}>
                <span>Free trial</span>
                <span>Secure license</span>
                <span>Built in Zürich</span>
              </div>
            </div>
            <div className="store-product-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(active.image)}
                alt={`${active.name} product preview`}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="store-pricing-head">
            <div>
              <small>Licensing, made clear</small>
              <span>Choose how you want to own it.</span>
            </div>
            <p>
              {selected === "finalova"
                ? "14-day full trial · every license works on two Macs"
                : "Free trial included · Mac licenses sold directly here"}
            </p>
          </div>
          <PricingSwitcher app={selected} accent={active.accent} />

          {selected === "ba-studio" && (
            <div className="store-app-store">
              <div>
                <span>iPhone edition</span>
                <h3>Guided capture belongs in your pocket.</h3>
                <p>
                  Download B∕A Studio for iPhone from the App Store. Apple ID
                  subscriptions are managed by Apple; Mac licenses are sold here.
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
