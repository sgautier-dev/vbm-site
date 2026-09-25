import { esESLocale } from "@sanity/locale-es-es";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import type { SanityEnvironment } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";
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
  });
}
