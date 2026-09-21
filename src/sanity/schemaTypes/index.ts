import { eventType } from "@/sanity/schemaTypes/event";
import { trainingOnlineType } from "@/sanity/schemaTypes/trainingOnline";
import { trainingPresencialType } from "@/sanity/schemaTypes/trainingPresencial";

export const schemaTypes = [
  trainingPresencialType,
  trainingOnlineType,
  eventType,
];
