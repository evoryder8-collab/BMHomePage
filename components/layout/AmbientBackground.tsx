/** The living stage: fixed obsidian ground with three slow-breathing light
 *  fields (gold, violet, blue) and a film-grain wash. Pure CSS animation,
 *  stilled under prefers-reduced-motion. */
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden>
      <div className="ambient-blob ambient-gold" />
      <div className="ambient-blob ambient-violet" />
      <div className="ambient-blob ambient-blue" />
    </div>
  );
}
