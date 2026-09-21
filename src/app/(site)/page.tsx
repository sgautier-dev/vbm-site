import type { Metadata } from "next";
import Link from "next/link";

import EditorialAreas, { type EditorialArea } from "@/components/EditorialAreas";
import EditorialSectionHeading from "@/components/EditorialSectionHeading";

export const metadata: Metadata = {
  title: { absolute: "Fundación Vivir un Buen Morir" },
  description:
    "Promovemos una cultura social que ayude a vivir y acompañar el final de la vida con mayor conciencia, claridad y calma, desde la sabiduría, la ecuanimidad, el cuidado consciente y el amor compasivo.",
};

const actionAreas = [
  {
    title: "Formación",
    description:
      "Ofrecemos una formación integral para comprender el proceso de morir y desarrollar recursos personales y profesionales para un acompañamiento de calidad.",
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
      "Creamos espacios de reflexión y diálogo para integrar la muerte y el cuidado en nuestra vida y en nuestra cultura con mayor naturalidad y conciencia.",
    href: "/recursos/",
    accent: "yellow",
  },
] as const satisfies readonly EditorialArea[];

const trainingModes = [
  {
    title: "Presencial",
    description:
      "Una experiencia formativa vivencial, compartida en grupo, que integra contenidos teórico-prácticos, prácticas y retiros.",
    cta: "Ver formación presencial",
    href: "/formacion/presencial/",
    surface: "bg-soft-magenta/35",
    accent: "bg-brand-magenta",
  },
  {
    title: "Online",
    description:
      "Formación en directo para participar desde cualquier lugar, manteniendo el encuentro, la práctica y el trabajo personal que caracterizan a VBM.",
    cta: "Ver formación online",
    href: "/formacion/online/",
    surface: "bg-soft-cyan/45",
    accent: "bg-brand-cyan",
  },
  {
    title: "Para entidades",
    description:
      "Cursos y talleres adaptados a hospitales, residencias, servicios sociales, asociaciones y equipos vinculados al cuidado.",
    cta: "Formación para entidades",
    href: "/formacion/entidades/",
    surface: "bg-warm-sand/65",
    accent: "bg-brand-yellow",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="home-hero-title"
        className="relative overflow-hidden border-b border-border"
      >
        <div className="section-container grid items-center gap-14 py-20 sm:py-24 lg:min-h-[42rem] lg:grid-cols-[minmax(0,7fr)_minmax(18rem,4fr)] lg:py-28">
          <div className="relative z-10 max-w-4xl">
            <h1 id="home-hero-title" className="heading-display">
              Vivir un buen morir
            </h1>
            <div className="mt-8 max-w-3xl space-y-6 text-lead">
              <p>
                Promovemos una cultura social que ayude a vivir y acompañar el final
                de la vida con mayor conciencia, claridad y calma, desde la sabiduría,
                la ecuanimidad, el cuidado consciente y el amor compasivo.
              </p>
              <p>
                Para ello impulsamos actividades divulgativas, formativas y de
                acompañamiento dirigidas a pacientes, familias, profesionales
                sanitarios, cuidadores y voluntariado.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link href="/fundacion/" className="btn-primary">
                Conocer la Fundación
              </Link>
              <Link href="/formacion/" className="btn-secondary">
                Ver la formación
              </Link>
            </div>
            <div aria-hidden="true" className="mt-14 flex h-1.5 w-44 lg:hidden">
              <span className="w-1/2 bg-brand-magenta" />
              <span className="w-1/3 bg-brand-cyan" />
              <span className="flex-1 bg-brand-yellow" />
            </div>
          </div>

          <div aria-hidden="true" className="relative hidden min-h-[30rem] lg:block">
            <span className="absolute top-[4%] right-[8%] h-[72%] w-[42%] bg-soft-magenta/75" />
            <span className="absolute right-[34%] bottom-[2%] h-[58%] w-[36%] bg-soft-cyan/80" />
            <span className="absolute top-[18%] left-[2%] h-[38%] w-[24%] bg-soft-yellow" />
            <span className="absolute top-0 right-0 h-full w-full border-t border-r border-border" />
          </div>
        </div>
      </section>

      <section aria-labelledby="action-areas-title" className="section-padding bg-surface">
        <div className="section-container">
          <EditorialSectionHeading
            id="action-areas-title"
            title="Nuestra forma de actuar"
            intro="Trabajamos para facilitar un buen morir desde tres ámbitos que se complementan."
          />
          <EditorialAreas items={actionAreas} />
        </div>
      </section>

      <section aria-labelledby="training-title" className="section-padding">
        <div className="section-container grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <EditorialSectionHeading
              id="training-title"
              eyebrow="Formación VBM"
              title="Vivir un Buen Morir y el Arte de Acompañar"
              editorial
            />
            <div className="prose-editorial mt-8">
              <p>
                Un programa formativo diseñado para aportar una visión completa e
                integral de las cuestiones fundamentales para afrontar y acompañar
                el final de la vida, atendiendo a sus dimensiones física, emocional,
                cognitiva y espiritual.
              </p>
              <p>
                La formación combina conocimiento, trabajo personal y práctica
                experiencial para profundizar en la escucha y en la calidad de
                presencia.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {trainingModes.map((mode) => (
              <article
                key={mode.href}
                className={`relative overflow-hidden rounded-panel border border-border p-7 sm:p-8 ${mode.surface}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1.5 ${mode.accent}`}
                />
                <h3 className="text-2xl font-semibold tracking-tight">{mode.title}</h3>
                <p className="mt-4 max-w-2xl text-muted">{mode.description}</p>
                <Link href={mode.href} className="arrow-link mt-6">
                  {mode.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="agenda-title" className="section-padding bg-warm-sand/65">
        <div className="section-container grid gap-8 border-l-4 border-brand-yellow pl-6 sm:pl-9 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-16">
          <EditorialSectionHeading id="agenda-title" title="Próximas actividades" />
          <div>
            <p className="max-w-2xl text-lead">
              Formaciones, talleres, conferencias y encuentros para seguir
              aprendiendo, compartiendo y reflexionando sobre el cuidado y el final de
              la vida.
            </p>
            <Link href="/recursos/agenda/" className="arrow-link mt-7">
              Ver agenda
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="zencare-title" className="section-padding bg-soft-cyan/50">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="zencare-title"
            eyebrow="Un proyecto de Fundación VBM"
            title="ZenCare"
            editorial
          />
          <div className="prose-editorial text-foreground">
            <p>
              ZenCare nace para llevar una espiritualidad aplicada al acto de cuidar.
              Integra presencia plena, compasión, autoconocimiento y prácticas
              contemplativas para sostener a quienes cuidan y contribuir a una
              atención más humana en situaciones de vulnerabilidad.
            </p>
            <p>
              Una comunidad de aprendizaje y práctica dirigida a profesionales,
              voluntariado y personas implicadas en el cuidado, desde una
              espiritualidad abierta y no confesional.
            </p>
            <Link href="/zencare/" className="btn-secondary mt-8 border-action/35 bg-background/65">
              Descubrir ZenCare
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="resources-title" className="section-padding">
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-20">
          <EditorialSectionHeading
            id="resources-title"
            eyebrow="Para seguir profundizando"
            title="Recursos"
          />
          <div>
            <p className="max-w-2xl text-lead text-muted">
              Una selección de artículos, vídeos, conferencias y materiales para
              acercarnos con mayor conciencia a la muerte, el duelo, el cuidado y el
              arte de acompañar.
            </p>
            <Link href="/recursos/" className="arrow-link mt-7">
              Explorar recursos
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="collaboration-title" className="section-padding bg-soft-magenta/35">
        <div className="section-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 id="collaboration-title" className="heading-section">
            Forma parte de VBM
          </h2>
          <Link href="/colabora/" className="btn-primary shrink-0">
            Colabora con VBM
          </Link>
        </div>
      </section>
    </>
  );
}
