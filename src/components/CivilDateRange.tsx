import type { DateRange } from "@/lib/content";
import {
  formatCivilDateRange,
  formatCivilDateRangeForScreenReader,
} from "@/lib/content-presentation";

type CivilDateRangeProps = DateRange & {
  className?: string;
};

export default function CivilDateRange({
  startDate,
  endDate,
  className,
}: CivilDateRangeProps) {
  const dates = { startDate, endDate };
  const visibleLabel = formatCivilDateRange(dates);
  const accessibleLabel = formatCivilDateRangeForScreenReader(dates);

  if (!visibleLabel || !accessibleLabel) {
    return null;
  }

  if (!startDate || !endDate || startDate === endDate) {
    return (
      <time dateTime={startDate ?? endDate} className={className}>
        {visibleLabel}
      </time>
    );
  }

  return (
    <span className={className}>
      <span className="sr-only">{accessibleLabel}</span>
      <span aria-hidden="true">{visibleLabel}</span>
    </span>
  );
}
