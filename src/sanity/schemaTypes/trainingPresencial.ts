import { defineField, defineType } from "sanity";

import { defineRetreatField } from "@/sanity/schemaTypes/dateRange";
import {
  importantNoticeField,
  trainingEditionDetailsFields,
  trainingScheduleFields,
} from "@/sanity/schemaTypes/trainingFields";

export const trainingPresencialType = defineType({
  name: "trainingPresencial",
  title: "Formación presencial",
  type: "document",
  description: "Se mostrará automáticamente en la página de formación presencial.",
  fields: [
    ...trainingEditionDetailsFields,
    defineField({
      name: "locationSummary",
      title: "Lugar principal",
      description: "Resumen breve del lugar o la modalidad presencial de esta edición.",
      type: "string",
    }),
    ...trainingScheduleFields,
    defineRetreatField({
      name: "mainRetreat",
      title: "Retiro principal",
    }),
    defineRetreatField({
      name: "followUpRetreat",
      title: "Retiro de seguimiento",
    }),
    importantNoticeField,
  ],
});
