import { defineQuery } from "next-sanity";

const moduleDatesProjection = `{
  m1 { startDate, endDate },
  m2 { startDate, endDate },
  m3 { startDate, endDate },
  m4 { startDate, endDate },
  m5 { startDate, endDate },
  m6 { startDate, endDate },
  m7 { startDate, endDate },
  m8 { startDate, endDate }
}`;

const retreatProjection = `{
  title,
  startDate,
  endDate,
  timeLabel,
  location,
  excerpt,
  externalUrl,
  featured,
  note
}`;

export const TRAINING_PRESENCIAL_QUERY = defineQuery(`
  *[
    _type == "trainingPresencial" &&
    _id == $documentId
  ][0] {
    editionLabel,
    year,
    registrationStatus,
    registrationUrl,
    pricingSummary,
    locationSummary,
    scheduleNote,
    moduleDates ${moduleDatesProjection},
    mainRetreat ${retreatProjection},
    followUpRetreat ${retreatProjection},
    importantNotice
  }
`);

export const TRAINING_ONLINE_QUERY = defineQuery(`
  *[
    _type == "trainingOnline" &&
    _id == $documentId
  ][0] {
    editionLabel,
    year,
    registrationStatus,
    registrationUrl,
    pricingSummary,
    scheduleNote,
    moduleDates ${moduleDatesProjection},
    importantNotice
  }
`);

const eventProjection = `{
  title,
  startDate,
  endDate,
  timeLabel,
  location,
  category,
  excerpt,
  externalUrl,
  featured
}`;

export const PUBLIC_EVENTS_QUERY = defineQuery(`
  {
    "events": *[
      _type == "event" &&
      defined(startDate) &&
      coalesce(endDate, startDate) >= $today
    ]
    | order(startDate asc, title asc, _id asc)
    ${eventProjection},
    "trainingPresencial": *[
      _type == "trainingPresencial" &&
      _id == $documentId
    ][0] {
      mainRetreat ${retreatProjection},
      followUpRetreat ${retreatProjection}
    }
  }
`);
