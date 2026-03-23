import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST() {
  const shopId = process.env.YOOKASSA_SHOP_ID!;
  const secretKey = process.env.YOOKASSA_SECRET_KEY!;

  if (!shopId || !secretKey) {
    return NextResponse.json(
      { error: "Не настроены переменные окружения" },
      { status: 500 },
    );
  }

  const auth = Buffer.from(`${shopId}:${secretKey}`).toString("base64");
  const idempotenceKey = crypto.randomUUID();

  const response = await fetch("https://api.yookassa.ru/v3/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
      "Idempotence-Key": idempotenceKey,
    },
    body: JSON.stringify({
      amount: { value: "490.00", currency: "RUB" },
      capture: true,
      confirmation: {
        type: "redirect",
        return_url: "https://structura-iota.vercel.app/",
      },
      description: "Покупка планера Structura",
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("ЮKassa error:", data);
    return NextResponse.json(
      { error: "Ошибка создания платежа" },
      { status: 500 },
    );
  }

  return NextResponse.json({
    paymentUrl: data.confirmation.confirmation_url,
    paymentId: data.id,
  });
}
