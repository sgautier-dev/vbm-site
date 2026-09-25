import { defineType } from "sanity";

import {
  importantNoticeField,
  trainingEditionOrderings,
  trainingEditionPreview,
  trainingEditionDetailsFields,
  trainingScheduleFields,
} from "@/sanity/schemaTypes/trainingFields";

export const trainingOnlineType = defineType({
  name: "trainingOnline",
  title: "Formación online",
  type: "document",
  description: "Se mostrará automáticamente en la página de formación online.",
  orderings: trainingEditionOrderings,
  preview: trainingEditionPreview("Online"),
  fields: [
    ...trainingEditionDetailsFields,
    ...trainingScheduleFields,
    importantNoticeField,
  ],
});
