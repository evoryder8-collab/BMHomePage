/** A clean "Download on the App Store" badge drawn in CSS, linking to the
 *  App Store listing (placeholder URL until the listing is live). */
export default function AppStoreBadge({ href = "#" }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2.5 rounded-xl border border-pearl/15 bg-obsidian-soft px-4 py-2.5 text-pearl shadow-sm transition-transform hover:scale-[1.03]"
      aria-label="Download B∕A Studio on the App Store"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M17.05 12.54c-.03-2.89 2.36-4.28 2.47-4.35-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.49.96 1.39 2.1 2.94 3.6 2.88 1.44-.06 1.99-.93 3.73-.93 1.74 0 2.23.93 3.76.9 1.56-.03 2.54-1.41 3.49-2.8 1.1-1.61 1.55-3.17 1.58-3.25-.04-.02-3.02-1.16-3.04-4.58zM14.17 4.04c.79-.96 1.33-2.29 1.18-3.62-1.14.05-2.53.76-3.35 1.72-.73.85-1.38 2.21-1.21 3.51 1.28.1 2.58-.65 3.38-1.61z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-pearl/70">
          Download on the
        </span>
        <span className="block text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}
