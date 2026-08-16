export type SKU =
  | "finalova-perpetual"
  | "finalova-studio-perpetual"
  | "finalova-studio-monthly"
  | "finalova-studio-annual"
  | "finalova-updates-renewal"
  | "ba-lite-monthly"
  | "ba-lite-annual"
  | "ba-pro-monthly"
  | "ba-pro-annual"
  | "ba-lifetime";

export type Billing = "one-time" | "monthly" | "annual";

export interface Product {
  sku: SKU;
  app: "finalova" | "ba-studio";
  name: string;
  edition: string;
  price: number;
  listPrice?: number;
  billing: Billing;
  tagline: string;
  features: string[];
  badge?: string;
}

export const PRODUCTS: Record<SKU, Product> = {
  "finalova-perpetual": {
    sku: "finalova-perpetual",
    app: "finalova",
    name: "Finalova",
    edition: "Perpetual license",
    price: 99,
    listPrice: 129,
    billing: "one-time",
    badge: "Launch price",
    tagline: "The complete finishing workspace. Yours, outright.",
    features: [
      "Optically balanced logo and text watermarks for every crop",
      "Live multi-ratio previews with crop repositioning",
      "Trims, smooth reframes, captions and platform-aware exports",
      "File-size and duration targets checked before delivery",
      "A year of updates included, and the app keeps working forever",
      "Use it on 2 of your Macs",
    ],
  },
  "finalova-studio-perpetual": {
    sku: "finalova-studio-perpetual",
    app: "finalova",
    name: "Finalova Studio",
    edition: "Perpetual license",
    price: 249,
    billing: "one-time",
    badge: "Pays for itself",
    tagline: "Turn one approved job into every required handoff.",
    features: [
      "Everything in Finalova",
      "Client Delivery Packs in a single batch export",
      "Watch Folders that apply your finishing recipe automatically",
      "Web-optimized image sets with real finished-byte previews",
      "A year of updates included, works on 2 of your Macs",
    ],
  },
  "finalova-studio-monthly": {
    sku: "finalova-studio-monthly",
    app: "finalova",
    name: "Finalova Studio",
    edition: "Monthly",
    price: 19,
    billing: "monthly",
    tagline: "Full Studio, month by month.",
    features: [
      "Everything in Finalova Studio",
      "Cancel anytime",
      "Always the newest version",
    ],
  },
  "finalova-studio-annual": {
    sku: "finalova-studio-annual",
    app: "finalova",
    name: "Finalova Studio",
    edition: "Annual",
    price: 182,
    billing: "annual",
    badge: "Save 20%",
    tagline: "Full Studio, two months free.",
    features: [
      "Everything in Finalova Studio",
      "~20% less than paying monthly",
      "Always the newest version",
    ],
  },
  "finalova-updates-renewal": {
    sku: "finalova-updates-renewal",
    app: "finalova",
    name: "Updates Renewal",
    edition: "12 months of updates",
    price: 49,
    billing: "one-time",
    tagline: "Optional. Penalty-free. Your app never stops working.",
    features: [
      "Extends update entitlement by 12 months",
      "Applies to either perpetual edition",
      "Skip a year and come back later, no penalty",
    ],
  },
  "ba-lite-monthly": {
    sku: "ba-lite-monthly",
    app: "ba-studio",
    name: "B∕A Studio Lite",
    edition: "Monthly",
    price: 7.99,
    billing: "monthly",
    tagline: "Editorial content production, on subscription.",
    features: [
      "Quick Mode for video and still comparisons",
      "Simultaneous editorial previews in 4:5, 1:1, 9:16 and 16:9",
      "GIF loops with transparent corners",
    ],
  },
  "ba-lite-annual": {
    sku: "ba-lite-annual",
    app: "ba-studio",
    name: "B∕A Studio Lite",
    edition: "Annual",
    price: 71.99,
    billing: "annual",
    badge: "Save 25%",
    tagline: "A year of editorial content production.",
    features: [
      "Quick Mode for video and still comparisons",
      "Simultaneous editorial previews in 4:5, 1:1, 9:16 and 16:9",
      "GIF loops with transparent corners",
    ],
  },
  "ba-pro-monthly": {
    sku: "ba-pro-monthly",
    app: "ba-studio",
    name: "B∕A Studio Pro",
    edition: "Monthly",
    price: 12.99,
    billing: "monthly",
    tagline: "The whole instrument, month by month.",
    features: [
      "Everything in Lite",
      "Measurement Studio and the B∕A Lift Index",
      "Local client records and LiDAR Enhanced capture",
    ],
  },
  "ba-pro-annual": {
    sku: "ba-pro-annual",
    app: "ba-studio",
    name: "B∕A Studio Pro",
    edition: "Annual",
    price: 119.99,
    billing: "annual",
    badge: "Save 23%",
    tagline: "A year of provable results.",
    features: [
      "Everything in Lite",
      "Measurement Studio and the B∕A Lift Index",
      "Local client records and LiDAR Enhanced capture",
    ],
  },
  "ba-lifetime": {
    sku: "ba-lifetime",
    app: "ba-studio",
    name: "B∕A Studio Lifetime",
    edition: "One purchase, forever",
    price: 279,
    billing: "one-time",
    badge: "Forever",
    tagline: "One purchase. The whole instrument. Forever.",
    features: [
      "Everything in Pro, permanently",
      "All future updates included",
      "No subscription, ever",
    ],
  },
};

const fmt = (n: number) =>
  Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;

export function formatPrice(p: Product): string {
  switch (p.billing) {
    case "monthly":
      return `${fmt(p.price)}/mo`;
    case "annual":
      return `${fmt(p.price)}/yr`;
    default:
      return fmt(p.price);
  }
}
