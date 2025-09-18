import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro capturado com sucesso" });
  }
}
