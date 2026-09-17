import type { Metadata } from "next";

import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "ZenCare" };

export default function ZenCarePage() {
  return <PageShell title="ZenCare" />;
}
