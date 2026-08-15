import Reveal from "@/components/ui/Reveal";
import Tilt3D from "@/components/ui/Tilt3D";
import ScreenshotFrame from "@/components/ui/ScreenshotFrame";

interface ChapterProps {
  index?: string;
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  flip?: boolean;
  points?: string[];
}

/** One numbered feature chapter: a giant translucent numeral behind copy,
 *  the screenshot straightening out of 3D space as it enters. */
export default function Chapter({
  index,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  flip = false,
  points,
}: ChapterProps) {
  return (
    <section className="relative overflow-hidden">
      {index && (
        <div
          aria-hidden
          className={`chapter-num absolute top-4 ${flip ? "left-4 md:left-10" : "right-4 md:right-10"}`}
        >
          {index}
        </div>
      )}
      <div
        className={`container-page grid items-center gap-14 py-24 md:grid-cols-2 md:py-32 ${
          flip ? "md:[&>*:first-child]:order-last" : ""
        }`}
      >
        <div>
          <Reveal>
            <p className="eyebrow mb-5 text-aurora-to/90">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-md text-ink">{title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-[16.5px] leading-[1.8] text-ink/65">
              {body}
            </p>
          </Reveal>
          {points && (
            <Reveal delay={0.24}>
              <ul className="mt-7 space-y-3 border-l border-aurora-from/30 pl-5 font-ui text-[13.5px] text-ink/70">
                {points.map((p) => (
                  <li key={p}>{p}</li>
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
