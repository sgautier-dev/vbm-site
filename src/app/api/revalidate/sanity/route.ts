import { revalidatePath, revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { pathsForSanityType, tagsForSanityType } from "@/sanity/cache-tags";

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET?.trim();

  if (!secret) {
    return Response.json({ error: "Revalidation is not configured." }, { status: 503 });
  }

  let parsed: Awaited<ReturnType<typeof parseBody<unknown>>>;

  try {
    parsed = await parseBody<unknown>(request, secret);
  } catch {
    return Response.json({ error: "Malformed webhook payload." }, { status: 400 });
  }

  if (parsed.isValidSignature !== true) {
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!isRecord(parsed.body)) {
    return Response.json({ error: "Malformed webhook payload." }, { status: 400 });
  }

  const type = parsed.body._type;
  const id = parsed.body._id;

  if (
    (typeof type !== "string" || !type.trim()) &&
    (typeof id !== "string" || !id.trim())
  ) {
    return Response.json({ error: "Malformed webhook payload." }, { status: 400 });
  }

  const documentType = typeof type === "string" && type.trim() ? type : undefined;
  const tags = tagsForSanityType(documentType);

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  for (const path of pathsForSanityType(documentType)) {
    revalidatePath(path);
  }

  return Response.json({ revalidated: tags.length > 0 });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
