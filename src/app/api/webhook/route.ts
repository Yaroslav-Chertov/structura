import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import crypto from "crypto";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.event !== "payment.succeeded") {
    return NextResponse.json({ ok: true });
  }

  const payment = body.object as { id: string; status: string };

  const shopId = process.env.YOOKASSA_SHOP_ID!;
  const secretKey = process.env.YOOKASSA_SECRET_KEY!;
  const auth = Buffer.from(`${shopId}:${secretKey}`).toString("base64");

  const verifyRes = await fetch(
    `https://api.yookassa.ru/v3/payments/${payment.id}`,
    { headers: { Authorization: `Basic ${auth}` } },
  );
  const verified = await verifyRes.json();

  if (verified.status !== "succeeded") {
    console.log("Webhook: платёж не подтверждён", payment.id);
    return NextResponse.json({ ok: true });
  }

  const accessToken = crypto.randomBytes(32).toString("hex");

  await redis.set(`payment:${payment.id}`, accessToken, { ex: 172800 });
  await redis.set(`token:${accessToken}`, "valid", { ex: 172800 });

  console.log("Webhook OK, paymentId:", payment.id);
  return NextResponse.json({ ok: true });
}
