import { NextRequest, NextResponse } from "next/server";
import { analyzeQuery } from "@/lib/data";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  if (!message) return NextResponse.json({ error: "No message" }, { status: 400 });

  // Simulate processing delay
  await new Promise((r) => setTimeout(r, 800));

  const response = analyzeQuery(message);
  return NextResponse.json({ response });
}
