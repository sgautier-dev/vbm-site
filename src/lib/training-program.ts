import type { TrainingModuleKey } from "@/lib/content";

type TrainingModuleNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type TrainingModule = Readonly<{
  id: TrainingModuleKey;
  number: TrainingModuleNumber;
  title: string;
  description: string;
}>;

export const trainingProgram = [
  {
    id: "m1",
    number: 1,
    title: "Antropología de la muerte y su diversidad",
    description:
      "Consideraciones sobre la muerte en nuestra sociedad, antecedentes de los cuidados paliativos, grandes tradiciones religiosas, paradigmas culturales actuales, espiritualidad y atención consciente en los cuidados al final de la vida.",
  },
  {
    id: "m2",
    number: 2,
    title: "Las fases del proceso de morir",
    description:
      "El proceso de morir desde la medicina paliativa y desde antiguos tratados de la humanidad, filosofía de la muerte, investigaciones sobre la consciencia y las experiencias cercanas a la muerte, y ritos de paso.",
  },
  {
    id: "m3",
    number: 3,
    title: "Aspectos psicológicos del paciente terminal y su entorno",
    description:
      "Identidad, etapas del desarrollo psicológico, psicología del paciente terminal según la etapa vital, motivaciones del cuidador y acompañamiento en las relaciones paciente-familia.",
  },
  {
    id: "m4",
    number: 4,
    title: "La comunicación con el paciente y su entorno",
    description:
      "Comunicación en el final de la vida, malas noticias, conversaciones difíciles, escucha activa y comunicación silenciosa, necesidades espirituales y acompañamiento de personas con deterioro cognitivo.",
  },
  {
    id: "m5",
    number: 5,
    title: "El autoconocimiento como estrategia de afrontamiento",
    description:
      "Identidad y sufrimiento existencial, autoexploración, defensas caracteriales, estilos de vínculo, inteligencia emocional, relaciones humanas, sedación y potencial transformador del acercamiento experiencial a la muerte.",
  },
  {
    id: "m6",
    number: 6,
    title: "Introducción a la bioética en el final de la vida",
    description:
      "Principios de bioética, derechos y garantías en el proceso de morir, eutanasia, limitación del esfuerzo terapéutico, medicina paliativa y Documento de Voluntades Anticipadas.",
  },
  {
    id: "m7",
    number: 7,
    title: "Cuidados físicos al final de la vida",
    description:
      "Control de síntomas, contacto físico, higiene, nutrición e hidratación, reconocimiento de la situación de últimos días, ansiedad e insomnio, cuidado paliativo integral y Atención Consciente en los cuidados.",
  },
  {
    id: "m8",
    number: 8,
    title: "El fallecimiento y el proceso de duelo",
    description:
      "Fallecimiento y amortajamiento, funerales y rituales de despedida, características del duelo, factores de riesgo, cronificación y nuevos enfoques terapéuticos.",
  },
] as const satisfies readonly TrainingModule[];
