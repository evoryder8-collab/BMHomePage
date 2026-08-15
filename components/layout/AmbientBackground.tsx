/** The living stage: bright sage ground with three slow-breathing light
 *  fields (gold, meadow green, warm cream) and a film-grain wash. Pure CSS
 *  animation, stilled under prefers-reduced-motion. */
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden>
      <div className="ambient-blob ambient-jade" />
      <div className="ambient-blob ambient-meadow" />
      <div className="ambient-blob ambient-cream" />
    </div>
  );
}
