"use client";

import { useState } from "react";
import { roi } from "./roi";

export default function RoiCalculator() {
  const [shoots, setShoots] = useState(6);
  const [fee, setFee] = useState(250);
  const r = roi(shoots, fee);

  return (
    <div className="rounded-2xl border border-ivory/12 bg-ink-soft p-8 text-ivory">
      <div className="eyebrow mb-2 text-gold-soft">The Studio math</div>
      <h3 className="display-md mb-6">
        Invoice the adaptation,
        <br />
        not just the shoot.
      </h3>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-ivory/65">
        Working shooters charge a delivery add-on — &ldquo;every channel, every
        format, ready to post&rdquo; — and let Finalova Studio do it in one
        click. Move the sliders to see what that&rsquo;s worth.
      </p>

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex justify-between text-xs font-semibold text-ivory/60">
            Shoots per month <span className="text-ivory">{shoots}</span>
          </span>
          <input
            type="range"
            min={1}
            max={30}
            value={shoots}
            onChange={(e) => setShoots(Number(e.target.value))}
            className="w-full accent-[#b8963e]"
          />
        </label>
        <label className="block">
          <span className="mb-2 flex justify-between text-xs font-semibold text-ivory/60">
            Adaptation add-on <span className="text-ivory">${fee}</span>
          </span>
          <input
            type="range"
            min={50}
            max={600}
            step={25}
            value={fee}
            onChange={(e) => setFee(Number(e.target.value))}
            className="w-full accent-[#b8963e]"
          />
        </label>
      </div>

      <div className="grid gap-6 border-t border-ivory/10 pt-6 sm:grid-cols-2">
        <div>
          <div
            data-testid="roi-monthly"
            className="text-3xl font-bold tracking-tight text-gold-soft"
          >
            ${r.monthlyRevenue.toLocaleString("en-US")}
          </div>
          <div className="mt-1 text-xs text-ivory/55">
            added revenue, every month
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold tracking-tight">
            {r.shootsToPayOff === 1
              ? "1 shoot"
              : `${r.shootsToPayOff} shoots`}
          </div>
          <div className="mt-1 text-xs text-ivory/55">
            and Studio ($249) has paid for itself
          </div>
        </div>
      </div>
    </div>
  );
}
