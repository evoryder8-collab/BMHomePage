/** "Conceived and built in Zürich" mark with a subtle Swiss cross accent. */
export default function SwissMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs tracking-wide ${
        dark ? "text-ivory/70" : "text-ink/60"
      }`}
    >
      <span
        aria-hidden
        className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#da291c] text-[10px] font-bold leading-none text-white"
      >
        +
      </span>
      Conceived and built in Zürich, Switzerland
    </span>
  );
}
