export const registrationStatuses = ["open", "soon", "closed"] as const;

export type RegistrationStatus = (typeof registrationStatuses)[number];

export type DateRange = {
  startDate?: string;
  endDate?: string;
};

export type RetreatEditionInfo = DateRange & {
  location?: string;
  note?: string;
};

export type TrainingModuleKey =
  | "m1"
  | "m2"
  | "m3"
  | "m4"
  | "m5"
  | "m6"
  | "m7"
  | "m8";

export type TrainingModuleDates = Record<TrainingModuleKey, DateRange>;

type TrainingEditionBase = {
  editionLabel?: string;
  year?: number;
  registrationStatus: RegistrationStatus;
  registrationUrl?: string;
  pricingSummary?: string;
  scheduleNote?: string;
  moduleDates: TrainingModuleDates;
  importantNotice?: string;
};

export type TrainingPresencial = TrainingEditionBase & {
  locationSummary?: string;
  mainRetreat?: RetreatEditionInfo;
  followUpRetreat?: RetreatEditionInfo;
};

export type TrainingOnline = TrainingEditionBase;

export const eventCategories = [
  "conference",
  "workshop",
  "retreat",
  "training",
  "meeting",
  "other",
] as const;

export type EventCategory = (typeof eventCategories)[number];

export type Event = {
  title: string;
  startDate: string;
  endDate?: string;
  timeLabel?: string;
  location?: string;
  category: EventCategory;
  excerpt?: string;
  externalUrl?: string;
  featured: boolean;
};

export type ContentResult<T> =
  | { status: "not-configured" }
  | { status: "unavailable" }
  | { status: "available"; data: T };
