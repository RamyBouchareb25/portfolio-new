import { NextResponse } from "next/server";
import { getActiveCVFile } from "@/lib/db";

export async function GET() {
  try {
    const file = await getActiveCVFile();
    if (!file) return NextResponse.json({ url: null, filename: null });
    return NextResponse.json({
      url: file.url ?? null,
      filename: file.filename ?? null,
    });
  } catch (error) {
    return NextResponse.json({ url: null, filename: null }, { status: 500 });
  }
}
