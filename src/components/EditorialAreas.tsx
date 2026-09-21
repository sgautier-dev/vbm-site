import Link from "next/link";

import type { NavigationItem } from "@/lib/navigation";

type AreaAccent = "magenta" | "cyan" | "yellow";

export type EditorialArea = {
  title: string;
  description?: string;
  href: NavigationItem["href"];
  accent: AreaAccent;
};

const accentClasses: Record<AreaAccent, string> = {
  magenta: "bg-brand-magenta",
  cyan: "bg-brand-cyan",
  yellow: "bg-brand-yellow",
};

export default function EditorialAreas({ items }: { items: readonly EditorialArea[] }) {
  return (
    <div className="mt-12 grid gap-y-10 border-y border-border py-10 md:grid-cols-3 md:gap-y-0 md:py-12">
      {items.map((item, index) => (
        <article
          key={item.href}
          className={index === 0 ? "md:pr-8" : "md:border-l md:px-8"}
        >
          <span
            aria-hidden="true"
            className={`block h-1 w-12 ${accentClasses[item.accent]}`}
          />
          <h3 className="mt-6 text-2xl font-semibold tracking-tight">
            <Link
              href={item.href}
              className="group inline-flex min-h-11 items-center gap-3 underline-offset-4 hover:text-action-hover hover:underline"
            >
              {item.title}
              <span
                aria-hidden="true"
                className="text-action transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </h3>
          {item.description ? (
            <p className="mt-5 max-w-sm text-muted">{item.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
