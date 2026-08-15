/** "Conceived and built in Zürich" mark with a subtle Swiss cross accent. */
export default function SwissMark({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`font-ui inline-flex items-center gap-2.5 text-xs tracking-[0.12em] ${dark ? "text-white/45" : "text-ink/55"}`}>
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
