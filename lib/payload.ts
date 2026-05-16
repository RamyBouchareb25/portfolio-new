export type PayloadListResponse = any;

const PAYLOAD_URL =
  process.env.PAYLOAD_SERVER_URL || process.env.NEXT_PUBLIC_PAYLOAD_URL;
const PAYLOAD_SECRET = process.env.PAYLOAD_SERVER_SECRET;

function buildUrl(path: string, qs?: string) {
  if (!PAYLOAD_URL) throw new Error("PAYLOAD_SERVER_URL not configured");
  const base = PAYLOAD_URL.replace(/\/$/, "");
  return qs ? `${base}${path}?${qs}` : `${base}${path}`;
}

export async function fetchPayload(path: string, qs?: string) {
  const url = buildUrl(path, qs);
  const headers: Record<string, string> = { Accept: "application/json" };
  if (PAYLOAD_SECRET) headers["Authorization"] = `Bearer ${PAYLOAD_SECRET}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Payload request failed: ${res.status} ${text}`);
  }
  return (await res.json()) as PayloadListResponse;
}
