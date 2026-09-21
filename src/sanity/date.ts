export const VBM_TIME_ZONE = "Europe/Madrid";

const madridDateFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: VBM_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function getMadridCivilDate(now = new Date()): string {
  const parts = madridDateFormatter.formatToParts(now);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    throw new Error("Unable to derive the Europe/Madrid civil date.");
  }

  return `${year}-${month}-${day}`;
}

export function isCivilDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function validateDateRange(value: unknown): true | string {
  if (!isRecord(value)) {
    return true;
  }

  const { startDate, endDate } = value;

  if (
    typeof startDate === "string" &&
    typeof endDate === "string" &&
    endDate < startDate
  ) {
    return "La fecha de fin no puede ser anterior a la fecha de inicio.";
  }

  return true;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
