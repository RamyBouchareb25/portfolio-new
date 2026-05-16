import { NextResponse } from "next/server";
import { getAnalyticsDashboardPayload } from "@/lib/analytics";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth.config";

export const dynamic = "force-dynamic";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;

  if (!session || role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
}

export async function GET() {
  try {
    await requireAdmin();
    const payload = await getAnalyticsDashboardPayload();

    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to load analytics",
      },
      { status: 500 },
    );
  }
}
