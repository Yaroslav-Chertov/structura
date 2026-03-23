import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function GET(req: NextRequest) {
  const paymentId = req.nextUrl.searchParams.get("paymentId");
  const token = req.nextUrl.searchParams.get("token");
  const plannerUrl = process.env.PLANNER_URL!;

  if (paymentId) {
    const accessToken = await redis.get<string>(`payment:${paymentId}`);
    if (!accessToken) return NextResponse.json({ valid: false });
    return NextResponse.json({ valid: true, token: accessToken, plannerUrl });
  }

  if (token) {
    const data = await redis.get<string>(`token:${token}`);
    if (!data) return NextResponse.json({ valid: false }, { status: 403 });
    return NextResponse.json({ valid: true, plannerUrl });
  }

  return NextResponse.json({ valid: false }, { status: 400 });
}
