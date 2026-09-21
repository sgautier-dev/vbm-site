import type { Metadata } from "next";
import Link from "next/link";

import EditorialAreas, { type EditorialArea } from "@/components/EditorialAreas";
import EditorialSectionHeading from "@/components/EditorialSectionHeading";

export const metadata: Metadata = {
  title: "Fundación",
  description:
    "VBM trabaja para que la enfermedad, el cuidado y el final de la vida puedan vivirse con mayor conciencia, serenidad y humanidad, desde el respeto a cada persona y a su libertad de conciencia.",
};

const actionAreas = [
  {
    title: "Formación",
    description:
      "Desarrollamos programas para profesionales sanitarios, cuidadores, voluntariado y personas que desean comprender mejor el proceso de morir y aprender a acompañar con calidad.",
    href: "/formacion/",
    accent: "magenta",
  },
  {
    title: "Acompañamiento",
    href: "/acompanamiento/",
    accent: "cyan",
  },
  {
    title: "Divulgación",
    description:
      "Promovemos conferencias, encuentros, recursos y espacios de reflexión para favorecer una mayor conciencia social sobre la muerte, los cuidados paliativos y el acompañamiento.",
    href: "/recursos/",
    accent: "yellow",
  },
] as const satisfies readonly EditorialArea[];

const values = [
  {
    title: "Sabiduría",
    description:
      "Mirar con lucidez la realidad de la enfermedad, la fragilidad y la muerte, sin negar lo que forma parte de la vida.",
    accent: "bg-brand-magenta",
  },
  {
    title: "Ecuanimidad",
    description:
      "Aprender a estar presentes ante situaciones difíciles sin quedar arrastrados por el miedo, el rechazo o la reacción automática.",
    accent: "bg-brand-cyan",
  },
  {
    title: "Cuidado consciente",
    description:
      "Cuidar con atención, presencia y respeto, reconociendo las necesidades reales de cada persona y de su entorno.",
    accent: "bg-brand-yellow",
  },
  {
    title: "Amor compasivo",
    description:
      "Acercarnos al sufrimiento con sensibilidad y con la voluntad de aliviarlo, respetando siempre la singularidad de quien tenemos delante.",
    accent: "bg-brand-magenta",
  },
  {
    title: "Libertad de conciencia",
    description:
      "Abordar la muerte y la dimensión espiritual sin dogmas religiosos ni culturales, respetando las convicciones, valores y decisiones de cada persona.",
    accent: "bg-brand-cyan",
  },
] as const;

export default function FoundationPage() {
  return (
    <>
      <section aria-labelledby="foundation-hero-title" className="border-b border-border bg-surface">
        <div className="section-container grid gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20 lg:py-28">
          <div>
            <p className="eyebrow">Fundación Vivir un Buen Morir</p>
            <h1 id="foundation-hero-title" className="heading-display mt-5">
              Promover una cultura social para facilitar un buen morir
            </h1>
          </div>
          <div className="border-l-4 border-brand-magenta pl-6 sm:pl-8">
            <p className="text-lead">
              VBM trabaja para que la enfermedad, el cuidado y el final de la vida
              puedan vivirse con mayor conciencia, serenidad y humanidad, desde el
              respeto a cada persona y a su libertad de conciencia.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="purpose-title" className="section-padding">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="purpose-title"
            title="Mirar la muerte para aprender a vivir"
            editorial
          />
          <div className="prose-editorial text-foreground">
            <p className="text-lead">
              La muerte forma parte de la experiencia humana y, sin embargo, en
              nuestra sociedad se ha convertido en uno de los grandes tabúes. Su
              negación o rechazo puede añadir sufrimiento a un proceso que ya es, por
              sí mismo, profundamente exigente para quien muere y para quienes
              acompañan.
            </p>
            <p>
              En VBM creemos que afrontar con realismo la propia finitud puede
              ayudarnos a vivir con mayor autenticidad y a acompañar con más respeto,
              humildad y comprensión.
            </p>
            <p>
              Un acompañamiento de calidad no consiste solo en hacer. También
              requiere saber estar: escuchar, reconocer los propios límites, respetar
              los ritmos de cada persona y cultivar una presencia capaz de sostener
              sin imponer.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="foundation-areas-title" className="section-padding bg-surface">
        <div className="section-container">
          <EditorialSectionHeading
            id="foundation-areas-title"
            title="Formar, acompañar y divulgar"
          />
          <EditorialAreas items={actionAreas} />
        </div>
      </section>

      <section aria-labelledby="history-title" className="section-padding bg-warm-sand/65">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-24">
          <div>
            <EditorialSectionHeading
              id="history-title"
              title="Un camino dedicado a acompañar"
              editorial
            />
            <span
              aria-hidden="true"
              className="mt-10 block h-1.5 w-32 bg-brand-yellow"
            />
          </div>
          <div className="prose-editorial text-foreground">
            <p>
              VBM nace del deseo de contribuir a una pedagogía social sobre la muerte
              y el buen morir, y de promover un acompañamiento de calidad desde una
              visión amplia del ser humano.
            </p>
            <p>
              Desde entonces, la Fundación ha desarrollado formación, actividades
              divulgativas, colaboraciones con hospitales y otras entidades, espacios
              de acompañamiento y una comunidad de voluntariado comprometida con esta
              visión.
            </p>
            <p>
              En 2024 nació ZenCare, proyecto específico de la Fundación orientado a
              llevar una espiritualidad aplicada al cuidado y a sostener a quienes
              cuidan mediante la presencia plena, la compasión, el autoconocimiento y
              las prácticas contemplativas.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="section-padding">
        <div className="section-container">
          <EditorialSectionHeading
            id="values-title"
            title="Valores que orientan nuestra forma de cuidar"
            intro="La misión de VBM se apoya en valores universales que atraviesan la formación, el acompañamiento y la vida de la Fundación."
          />

          <dl className="mt-14 border-y border-border">
            {values.map((value) => (
              <div
                key={value.title}
                className="grid gap-5 border-b border-border py-8 last:border-b-0 sm:py-10 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-16"
              >
                <dt className="flex items-start gap-5 font-editorial text-3xl leading-none font-semibold sm:text-4xl">
                  <span
                    aria-hidden="true"
                    className={`mt-2 block h-2.5 w-2.5 shrink-0 ${value.accent}`}
                  />
                  {value.title}
                </dt>
                <dd className="max-w-2xl text-muted">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="foundation-cta-title" className="section-padding bg-soft-magenta/35">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div>
            <h2 id="foundation-cta-title" className="heading-section">
              Aprender a acompañar. Aprender a vivir.
            </h2>
            <p className="mt-7 max-w-2xl text-lead">
              Conoce la Formación VBM, descubre ZenCare o encuentra una forma de
              colaborar con la Fundación.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/formacion/" className="btn-primary">
              Ver formación
            </Link>
            <Link href="/zencare/" className="btn-secondary bg-background/60">
              Conocer ZenCare
            </Link>
            <Link href="/colabora/" className="btn-secondary bg-background/60">
              Colabora
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
