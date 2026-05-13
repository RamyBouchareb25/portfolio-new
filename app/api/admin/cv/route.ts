import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth.config";
import {
  getAllCVFiles,
  getActiveCVFile,
  createCVFile,
  updateCVFileActive,
  deleteCVFile,
} from "@/lib/db";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const active = url.searchParams.get("active");

  if (active === "true") {
    const file = await getActiveCVFile();
    return NextResponse.json({ file });
  }

  const files = await getAllCVFiles();
  return NextResponse.json({ files });
}

export async function POST(request: Request) {
  // For now, we accept metadata only (upload handled separately)
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await request.json();
  const file = await createCVFile(data);
  return NextResponse.json({ file }, { status: 201 });
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, action } = await request.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  if (action === "activate") {
    const updated = await updateCVFileActive(id);
    return NextResponse.json({ file: updated });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "ADMIN")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const file = await deleteCVFile(id);
  return NextResponse.json({ file });
}
