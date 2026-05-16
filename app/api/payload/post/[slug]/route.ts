import { NextResponse } from "next/server";

const PAYLOAD_URL =
  process.env.PAYLOAD_SERVER_URL || process.env.NEXT_PUBLIC_PAYLOAD_URL;
const PAYLOAD_SECRET = process.env.PAYLOAD_SERVER_SECRET;

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  if (!PAYLOAD_URL)
    return NextResponse.json(
      { error: "PAYLOAD_SERVER_URL not configured" },
      { status: 500 },
    );
  const { slug } = params || {};
  if (!slug)
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  // Use Payload list endpoint with where[slug]=... to fetch by slug
  const payloadUrl = `${PAYLOAD_URL.replace(/\/$/, "")}/api/posts?where[slug]=${encodeURIComponent(slug)}&limit=1`;
  const headers: Record<string, string> = { Accept: "application/json" };
  if (PAYLOAD_SECRET) headers["Authorization"] = `Bearer ${PAYLOAD_SECRET}`;

  try {
    const res = await fetch(payloadUrl, { headers });
    const json = await res.json();
    // Payload returns docs in `docs` or `results` depending on version; return as-is and let caller handle shape
    return NextResponse.json(json, { status: res.status });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch from Payload", details: String(err) },
      { status: 502 },
    );
  }
}
