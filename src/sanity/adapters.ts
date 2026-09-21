import {
  eventCategories,
  registrationStatuses,
  type DateRange,
  type Event as VbmEvent,
  type EventCategory,
  type RegistrationStatus,
  type RetreatEditionInfo,
  type TrainingModuleDates,
  type TrainingOnline,
  type TrainingPresencial,
} from "@/lib/content";
import { isCivilDate } from "@/sanity/date";

export function adaptTrainingPresencial(
  value: unknown,
): TrainingPresencial | null {
  const base = adaptTrainingEdition(value);

  if (!base || !isRecord(value)) {
    return null;
  }

  const locationSummary = optionalString(value.locationSummary);
  const mainRetreat = adaptRetreat(value.mainRetreat);
  const followUpRetreat = adaptRetreat(value.followUpRetreat);

  return {
    ...base,
    ...(locationSummary ? { locationSummary } : {}),
    ...(mainRetreat ? { mainRetreat } : {}),
    ...(followUpRetreat ? { followUpRetreat } : {}),
  };
}

export function adaptTrainingOnline(value: unknown): TrainingOnline | null {
  return adaptTrainingEdition(value);
}

export function adaptEvents(value: unknown): VbmEvent[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map(adaptEvent).filter((event): event is VbmEvent => event !== null);
}

function adaptTrainingEdition(value: unknown): TrainingOnline | null {
  if (!isRecord(value)) {
    return null;
  }

  const registrationStatus = adaptRegistrationStatus(value.registrationStatus);

  if (!registrationStatus) {
    return null;
  }

  const editionLabel = optionalString(value.editionLabel);
  const year = adaptYear(value.year);
  const registrationUrl = optionalHttpUrl(value.registrationUrl);
  const pricingSummary = optionalString(value.pricingSummary);
  const scheduleNote = optionalString(value.scheduleNote);
  const importantNotice = optionalString(value.importantNotice);

  return {
    registrationStatus,
    moduleDates: adaptModuleDates(value.moduleDates),
    ...(editionLabel ? { editionLabel } : {}),
    ...(year ? { year } : {}),
    ...(registrationUrl ? { registrationUrl } : {}),
    ...(pricingSummary ? { pricingSummary } : {}),
    ...(scheduleNote ? { scheduleNote } : {}),
    ...(importantNotice ? { importantNotice } : {}),
  };
}

function adaptEvent(value: unknown): VbmEvent | null {
  if (!isRecord(value)) {
    return null;
  }

  const title = optionalString(value.title);
  const startDate = isCivilDate(value.startDate) ? value.startDate : undefined;
  const endDate = isCivilDate(value.endDate) ? value.endDate : undefined;
  const category = adaptEventCategory(value.category);

  if (!title || !startDate || !category || (endDate && endDate < startDate)) {
    return null;
  }

  const timeLabel = optionalString(value.timeLabel);
  const location = optionalString(value.location);
  const excerptValue = optionalString(value.excerpt);
  const excerpt =
    excerptValue && excerptValue.length <= 320 ? excerptValue : undefined;
  const externalUrl = optionalHttpUrl(value.externalUrl);

  return {
    title,
    startDate,
    category,
    featured: value.featured === true,
    ...(endDate ? { endDate } : {}),
    ...(timeLabel ? { timeLabel } : {}),
    ...(location ? { location } : {}),
    ...(excerpt ? { excerpt } : {}),
    ...(externalUrl ? { externalUrl } : {}),
  };
}

function adaptModuleDates(value: unknown): TrainingModuleDates {
  const record = isRecord(value) ? value : {};

  return {
    m1: adaptDateRange(record.m1),
    m2: adaptDateRange(record.m2),
    m3: adaptDateRange(record.m3),
    m4: adaptDateRange(record.m4),
    m5: adaptDateRange(record.m5),
    m6: adaptDateRange(record.m6),
    m7: adaptDateRange(record.m7),
    m8: adaptDateRange(record.m8),
  };
}

function adaptDateRange(value: unknown): DateRange {
  if (!isRecord(value)) {
    return {};
  }

  const startDate = isCivilDate(value.startDate) ? value.startDate : undefined;
  const endDate = isCivilDate(value.endDate) ? value.endDate : undefined;

  return {
    ...(startDate ? { startDate } : {}),
    ...(endDate && (!startDate || endDate >= startDate) ? { endDate } : {}),
  };
}

function adaptRetreat(value: unknown): RetreatEditionInfo | undefined {
  if (!isRecord(value)) {
    return undefined;
  }

  const dateRange = adaptDateRange(value);
  const location = optionalString(value.location);
  const note = optionalString(value.note);

  if (!dateRange.startDate && !dateRange.endDate && !location && !note) {
    return undefined;
  }

  return {
    ...dateRange,
    ...(location ? { location } : {}),
    ...(note ? { note } : {}),
  };
}

function adaptRegistrationStatus(value: unknown): RegistrationStatus | null {
  return isListedString(value, registrationStatuses) ? value : null;
}

function adaptEventCategory(value: unknown): EventCategory | null {
  return isListedString(value, eventCategories) ? value : null;
}

function adaptYear(value: unknown): number | undefined {
  return typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 2000 &&
    value <= 2100
    ? value
    : undefined;
}

function optionalString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed || undefined;
}

function optionalHttpUrl(value: unknown): string | undefined {
  const urlValue = optionalString(value);

  if (!urlValue) {
    return undefined;
  }

  try {
    const url = new URL(urlValue);
    return url.protocol === "http:" || url.protocol === "https:"
      ? urlValue
      : undefined;
  } catch {
    return undefined;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isListedString<const Values extends readonly string[]>(
  value: unknown,
  values: Values,
): value is Values[number] {
  return typeof value === "string" && values.some((item) => item === value);
}
