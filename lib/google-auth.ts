import { JWT } from "google-auth-library";

const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/analytics.readonly",
  "https://www.googleapis.com/auth/webmasters.readonly",
];

let cachedClient: JWT | null = null;

function getServiceAccountJson() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not configured");
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON must contain valid JSON");
  }

  const clientEmail = parsed.client_email;
  const privateKey = parsed.private_key;

  if (typeof clientEmail !== "string" || !clientEmail.trim()) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is missing client_email");
  }

  if (typeof privateKey !== "string" || !privateKey.trim()) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is missing private_key");
  }

  return {
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, "\n"),
  };
}

export function getGoogleAuthClient() {
  if (cachedClient) {
    return cachedClient;
  }

  const { clientEmail, privateKey } = getServiceAccountJson();

  cachedClient = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: GOOGLE_SCOPES,
  });

  return cachedClient;
}
