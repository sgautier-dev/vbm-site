import type { Metadata } from "next";
import Link from "next/link";

import EditorialSectionHeading from "@/components/EditorialSectionHeading";
import TrainingHero from "@/components/TrainingHero";
import TrainingProgram from "@/components/TrainingProgram";

export const metadata: Metadata = {
  title: "Formación",
  description:
    "Un programa formativo integral sobre el afrontamiento y el acompañamiento de calidad al final de la vida en sus dimensiones física, emocional, cognitiva y espiritual.",
};

const objectives = [
  "Clarificar los propios condicionamientos individuales y sociales sobre la muerte en nuestra sociedad.",
  "Clarificar qué entendemos por un buen morir como premisa para realizar un acompañamiento y unos cuidados de calidad.",
  "Identificar y conocer los diferentes aspectos del proceso de morir a nivel físico, emocional, cognitivo y espiritual.",
  "Desarrollar la capacidad de silencio y atención, cualidades fundamentales para afrontar la perspectiva de la propia muerte y la de los demás.",
  "Conocer la legislación vigente relacionada con la autonomía, la dignidad y el proceso de morir.",
  "Comprender la evolución de la bioética en el final de la vida y los criterios de buena praxis.",
  "Profundizar en la escucha y en la calidad de presencia, comprendiendo también las motivaciones personales que intervienen en la labor asistencial.",
  "Favorecer condiciones que ayuden a la elaboración de un duelo sano.",
] as const;

const trainingModes = [
  {
    title: "Presencial",
    description:
      "Una formación teórico-práctica y vivencial, desarrollada en grupo, que recorre los ocho módulos del programa.",
    cta: "Formación presencial",
    href: "/formacion/presencial/",
    accent: "border-brand-magenta",
  },
  {
    title: "Online",
    description:
      "Ocho módulos en directo por videoconferencia, con interacción con el profesorado y el grupo.",
    cta: "Formación online",
    href: "/formacion/online/",
    accent: "border-brand-cyan",
  },
  {
    title: "Para entidades",
    description:
      "Cursos y talleres elaborados a medida para hospitales, residencias, servicios sociales, colegios profesionales, asociaciones y otras organizaciones vinculadas al cuidado.",
    cta: "Formación para entidades",
    href: "/formacion/entidades/",
    accent: "border-brand-yellow",
  },
] as const;

const relatedTrainingRoutes = [
  { label: "Formación presencial", href: "/formacion/presencial/" },
  { label: "Formación online", href: "/formacion/online/" },
  { label: "Formación para entidades", href: "/formacion/entidades/" },
  { label: "Retiros VBM", href: "/formacion/retiros/" },
] as const;

export default function TrainingPage() {
  return (
    <>
      <TrainingHero
        eyebrow="Formación VBM"
        title="Vivir un Buen Morir y el arte de acompañar"
        body="Un programa formativo diseñado para aportar una visión lo más completa e integral posible de las cuestiones fundamentales que intervienen en el afrontamiento y el acompañamiento de calidad al final de la vida, atendiendo a sus dimensiones física, emocional, cognitiva y espiritual."
        tone="overview"
        cta={{ label: "Conocer la formación", href: "#formacion-integral" }}
      />

      <section
        id="formacion-integral"
        aria-labelledby="integral-training-title"
        className="section-padding scroll-mt-24"
      >
        <div className="section-container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <EditorialSectionHeading
            id="integral-training-title"
            title="Aprender a acompañar también implica mirarnos"
            editorial
          />
          <div className="prose-editorial text-foreground">
            <p>
              La Formación VBM combina conocimientos teóricos, experiencia práctica y
              trabajo personal. Junto al marco cognitivo sobre la muerte, el proceso de
              morir, los cuidados, la comunicación y la bioética, la formación invita a
              cada participante a explorar sus propias creencias, condicionamientos,
              temores y recursos ante la muerte y el sufrimiento.
            </p>
            <p>
              El objetivo no es únicamente adquirir conocimientos, sino desarrollar
              cualidades esenciales para acompañar: capacidad de silencio y atención,
              escucha, claridad, estabilidad emocional y calidad de presencia.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="training-objectives-title" className="section-padding bg-surface">
        <div className="section-container">
          <EditorialSectionHeading
            id="training-objectives-title"
            title="Objetivos de la Formación VBM"
          />
          <ol className="mt-12 grid border-t border-border md:grid-cols-2">
            {objectives.map((objective, index) => (
              <li
                key={objective}
                className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-border py-6 md:odd:pr-8 md:even:border-l md:even:pl-8 lg:gap-6 lg:py-8"
              >
                <span aria-hidden="true" className="font-editorial text-2xl text-action-hover">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span>{objective}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="training-modes-title" className="section-padding">
        <div className="section-container">
          <EditorialSectionHeading
            id="training-modes-title"
            title="Una misma formación, distintas formas de participar"
            editorial
          />
          <div className="mt-12 grid border-y border-border lg:grid-cols-3">
            {trainingModes.map((mode) => (
              <article
                key={mode.href}
                className={`flex flex-col border-b border-l-4 py-8 pr-5 pl-6 last:border-b-0 sm:py-10 sm:pl-8 lg:border-b-0 lg:border-l-0 lg:border-t-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 ${mode.accent}`}
              >
                <h3 className="text-2xl font-semibold tracking-tight">{mode.title}</h3>
                <p className="mt-5 grow text-muted">{mode.description}</p>
                <Link href={mode.href} className="arrow-link mt-7 self-start">
                  {mode.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="training-program-title" className="section-padding bg-warm-sand/45">
        <div className="section-container">
          <EditorialSectionHeading
            id="training-program-title"
            title="Ocho módulos para comprender y acompañar el proceso de morir"
          />
          <TrainingProgram />
        </div>
      </section>

      <nav
        aria-labelledby="related-training-title"
        className="border-t border-border bg-background py-14 sm:py-16"
      >
        <div className="section-container grid gap-8 lg:grid-cols-[minmax(14rem,4fr)_minmax(0,7fr)] lg:items-start lg:gap-16">
          <h2 id="related-training-title" className="heading-section-sans">
            Elige cómo participar
          </h2>
          <ul className="grid max-w-3xl border-t border-border sm:grid-cols-2">
            {relatedTrainingRoutes.map((route) => (
              <li
                key={route.href}
                className="border-b border-border sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
              >
                <Link href={route.href} className="arrow-link py-4">
                  {route.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
