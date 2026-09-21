import type {
  DateRange,
  EventCategory,
  RegistrationStatus,
} from "@/lib/content";

const spanishMonthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
] as const;

type CivilDateParts = {
  year: number;
  month: number;
  day: number;
};

export const registrationStatusLabels: Record<RegistrationStatus, string> = {
  open: "Inscripción abierta",
  soon: "Inscripción próximamente",
  closed: "Inscripción cerrada",
};

export const eventCategoryLabels: Record<EventCategory, string> = {
  conference: "Conferencia",
  workshop: "Taller",
  retreat: "Retiro",
  training: "Formación",
  meeting: "Encuentro",
  other: "Actividad",
};

export function formatCivilDate(value: string): string {
  const parts = getCivilDateParts(value);

  if (!parts) {
    return value;
  }

  return `${parts.day} de ${spanishMonthNames[parts.month - 1]} de ${parts.year}`;
}

export function formatCivilDateRange({
  startDate,
  endDate,
}: DateRange): string | null {
  if (!startDate && !endDate) {
    return null;
  }

  if (!startDate || !endDate || startDate === endDate) {
    return formatCivilDate(startDate ?? endDate ?? "");
  }

  const start = getCivilDateParts(startDate);
  const end = getCivilDateParts(endDate);

  if (!start || !end) {
    return `${formatCivilDate(startDate)} – ${formatCivilDate(endDate)}`;
  }

  if (start.year === end.year && start.month === end.month) {
    return `${start.day}–${end.day} de ${spanishMonthNames[start.month - 1]} de ${start.year}`;
  }

  if (start.year === end.year) {
    return `${start.day} de ${spanishMonthNames[start.month - 1]} – ${end.day} de ${spanishMonthNames[end.month - 1]} de ${start.year}`;
  }

  return `${formatCivilDate(startDate)} – ${formatCivilDate(endDate)}`;
}

export function formatCivilDateRangeForScreenReader({
  startDate,
  endDate,
}: DateRange): string | null {
  if (!startDate && !endDate) {
    return null;
  }

  if (!startDate || !endDate || startDate === endDate) {
    return formatCivilDate(startDate ?? endDate ?? "");
  }

  return `${formatCivilDate(startDate)} a ${formatCivilDate(endDate)}`;
}

function getCivilDateParts(value: string): CivilDateParts | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  return { year, month, day };
}
