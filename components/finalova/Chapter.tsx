import Reveal from "@/components/ui/Reveal";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

interface ChapterProps {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  flip?: boolean;
  points?: string[];
}

/** One feature chapter: copy beside a screenshot that straightens out of
 *  3D space as it scrolls into view, alternating sides. */
export default function Chapter({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  flip = false,
  points,
}: ChapterProps) {
  return (
    <section className="border-t border-ivory/8">
      <div
        className={`container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28 ${
          flip ? "md:[&>*:first-child]:order-last" : ""
        }`}
      >
        <div>
          <Reveal>
            <p className="eyebrow mb-4 text-gold-soft">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md text-ivory">{title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/65">
              {body}
            </p>
          </Reveal>
          {points && (
            <Reveal delay={0.24}>
              <ul className="mt-6 space-y-2 text-sm text-ivory/75">
                {points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
        {image && (
          <Tilt3D from={22} fromY={flip ? 8 : -8}>
            <ScreenshotFrame src={image} alt={imageAlt ?? title} />
          </Tilt3D>
        )}
      </div>
    </section>
  );
}
