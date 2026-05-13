import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth.config";
import { getAbout, updateAbout } from "@/lib/db";

export async function GET() {
  const about = await getAbout();
  return NextResponse.json({ about });
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await request.json();
  const about = await updateAbout(data);
  return NextResponse.json({ about });
}
