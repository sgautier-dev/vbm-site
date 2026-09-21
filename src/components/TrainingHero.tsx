type TrainingHeroTone =
  | "overview"
  | "presencial"
  | "online"
  | "entidades"
  | "retiros";

type TrainingHeroProps = {
  eyebrow: string;
  title: string;
  body: string | readonly string[];
  tone: TrainingHeroTone;
  cta?: {
    label: string;
    href: string;
  };
};

const toneStyles: Record<
  TrainingHeroTone,
  { surface: string; frame: string; bars: readonly string[] }
> = {
  overview: {
    surface: "bg-surface",
    frame: "border-brand-magenta",
    bars: [
      "bg-brand-magenta",
      "bg-soft-magenta",
      "bg-brand-cyan",
      "bg-soft-cyan",
      "bg-brand-yellow",
      "bg-soft-yellow",
      "bg-brand-magenta",
      "bg-brand-cyan",
    ],
  },
  presencial: {
    surface: "bg-warm-sand/65",
    frame: "border-brand-yellow",
    bars: [
      "bg-brand-yellow",
      "bg-soft-yellow",
      "bg-brand-magenta",
      "bg-soft-magenta",
      "bg-brand-yellow",
      "bg-warm-sand",
      "bg-brand-magenta",
      "bg-soft-yellow",
    ],
  },
  online: {
    surface: "bg-soft-cyan/45",
    frame: "border-brand-cyan",
    bars: [
      "bg-brand-cyan",
      "bg-soft-cyan",
      "bg-brand-magenta",
      "bg-soft-magenta",
      "bg-brand-cyan",
      "bg-soft-cyan",
      "bg-brand-yellow",
      "bg-brand-cyan",
    ],
  },
  entidades: {
    surface: "bg-soft-cyan/30",
    frame: "border-brand-cyan",
    bars: [
      "bg-brand-cyan",
      "bg-soft-cyan",
      "bg-brand-magenta",
      "bg-soft-gray",
      "bg-brand-cyan",
      "bg-brand-gray-lilac",
      "bg-brand-yellow",
      "bg-brand-cyan",
    ],
  },
  retiros: {
    surface: "bg-warm-sand/75",
    frame: "border-brand-magenta",
    bars: [
      "bg-warm-sand",
      "bg-brand-magenta",
      "bg-soft-magenta",
      "bg-brand-yellow",
      "bg-soft-yellow",
      "bg-brand-magenta",
      "bg-brand-cyan",
      "bg-soft-magenta",
    ],
  },
};

export default function TrainingHero({
  eyebrow,
  title,
  body,
  tone,
  cta,
}: TrainingHeroProps) {
  const styles = toneStyles[tone];
  const bodyParagraphs = typeof body === "string" ? [body] : body;

  return (
    <section
      aria-labelledby="training-hero-title"
      className={`overflow-hidden border-b border-border ${styles.surface}`}
    >
      <div className="section-container grid gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,7fr)_minmax(18rem,4fr)] lg:items-center lg:gap-20 lg:py-28">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="training-hero-title" className="heading-display mt-5">
            {title}
          </h1>
          <div
            className={`mt-8 max-w-3xl space-y-5 border-l-4 pl-6 text-lead sm:pl-8 ${styles.frame}`}
          >
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {cta ? (
            <a href={cta.href} className="btn-primary mt-9">
              {cta.label}
            </a>
          ) : null}
        </div>

        <div aria-hidden="true" className="grid h-44 grid-cols-8 items-end gap-2 sm:h-52 lg:h-80">
          {styles.bars.map((bar, index) => (
            <span
              key={`${bar}-${index}`}
              className={bar}
              style={{ height: `${38 + ((index * 19) % 55)}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
