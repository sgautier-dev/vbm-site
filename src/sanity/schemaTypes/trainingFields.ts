import { defineField } from "sanity";

import {
  registrationStatuses,
  type RegistrationStatus,
} from "@/lib/content";
import { defineDateRangeField } from "@/sanity/schemaTypes/dateRange";

const moduleKeys = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"] as const;

const registrationStatusLabels: Record<RegistrationStatus, string> = {
  open: "Abierta",
  soon: "Próximamente",
  closed: "Cerrada",
};

export const trainingEditionDetailsFields = [
  defineField({
    name: "editionLabel",
    title: "Nombre de la edición",
    description: "Por ejemplo, el nombre breve con el que se identifica esta edición.",
    type: "string",
  }),
  defineField({
    name: "year",
    title: "Año",
    type: "number",
    validation: (rule) => rule.integer().min(2000).max(2100),
  }),
  defineField({
    name: "registrationStatus",
    title: "Estado de inscripción",
    type: "string",
    options: {
      layout: "radio",
      list: registrationStatuses.map((value) => ({
        title: registrationStatusLabels[value],
        value,
      })),
    },
    validation: (rule) =>
      rule.required().custom(
        (value) =>
          registrationStatuses.some((status) => status === value) ||
          "Selecciona un estado de inscripción válido.",
      ),
  }),
  defineField({
    name: "registrationUrl",
    title: "Enlace de inscripción",
    description: "Añádelo solo cuando exista un enlace de inscripción confirmado.",
    type: "url",
    validation: (rule) =>
      rule.uri({
        allowRelative: false,
        scheme: ["http", "https"],
      }),
  }),
  defineField({
    name: "pricingSummary",
    title: "Resumen de precios",
    description: "Texto breve para presentar las condiciones confirmadas de esta edición.",
    type: "text",
    rows: 2,
  }),
];

export const trainingScheduleFields = [
  defineField({
    name: "scheduleNote",
    title: "Nota de horarios",
    description: "Información práctica breve que no forma parte de las fechas de módulos.",
    type: "text",
    rows: 3,
  }),
  defineField({
    name: "moduleDates",
    title: "Fechas de los módulos",
    description: "Completa únicamente las fechas ya confirmadas.",
    type: "object",
    fields: moduleKeys.map((key, index) =>
      defineDateRangeField({
        name: key,
        title: `Módulo ${index + 1}`,
      }),
    ),
  }),
];

export const importantNoticeField = defineField({
  name: "importantNotice",
  title: "Aviso importante",
  description: "Utilízalo solo para información vigente que deba destacarse.",
  type: "text",
  rows: 4,
});
