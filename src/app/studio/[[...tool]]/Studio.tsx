"use client";

import { NextStudio } from "next-sanity/studio";
import { useMemo } from "react";

import type { SanityEnvironment } from "@/sanity/env";
import { createStudioConfig } from "@/sanity/studio/config";

export default function Studio({ projectId, dataset }: SanityEnvironment) {
  const config = useMemo(
    () => createStudioConfig({ projectId, dataset }),
    [dataset, projectId],
  );

  return <NextStudio config={config} />;
}
