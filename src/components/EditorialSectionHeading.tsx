type EditorialSectionHeadingProps = {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  editorial?: boolean;
  className?: string;
};

export default function EditorialSectionHeading({
  id,
  title,
  eyebrow,
  intro,
  editorial = false,
  className = "",
}: EditorialSectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        id={id}
        className={`${editorial ? "heading-section" : "heading-section-sans"} ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-lead text-muted">{intro}</p> : null}
    </div>
  );
}
