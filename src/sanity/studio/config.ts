import { esESLocale } from "@sanity/locale-es-es";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import type { SanityEnvironment } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";
import { SINGLETON_SCHEMA_TYPES } from "@/sanity/studio/singletons";
import { studioStructure } from "@/sanity/studio/structure";

export function createStudioConfig({ projectId, dataset }: SanityEnvironment) {
  return defineConfig({
    name: "default",
    title: "Fundación VBM",
    basePath: "/studio",
    projectId,
    dataset,
    plugins: [
      structureTool({
        structure: studioStructure,
      }),
      esESLocale(),
    ],
    schema: {
      types: schemaTypes,
    },
    document: {
      newDocumentOptions: (previous) =>
        previous.filter(
          (template) => !SINGLETON_SCHEMA_TYPES.has(template.templateId),
        ),
      actions: (previous, context) => {
        if (!SINGLETON_SCHEMA_TYPES.has(context.schemaType)) {
          return previous;
        }

        return previous.filter(
          (action) => action.action !== "duplicate" && action.action !== "delete",
        );
      },
    },
  });
}
