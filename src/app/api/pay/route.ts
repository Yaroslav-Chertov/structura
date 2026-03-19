import { NextResponse } from "next/server";

export async function POST() {
  const shopId = process.env.YOOKASSA_SHOP_ID!;
  const secretKey = process.env.YOOKASSA_SECRET_KEY!;

  const auth = Buffer.from(`${shopId}:${secretKey}`).toString("base64");

  const response = await fetch("https://api.yookassa.ru/v3/payments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
      "Idempotence-Key": Math.random().toString(),
    },
    body: JSON.stringify({
      amount: {
        value: "490.00",
        currency: "RUB",
      },
      capture: true,
      confirmation: {
        type: "redirect",
        // return_url: "https://structuraplaner.ru/success",
        return_url: "http://localhost:3000/success",
      },
      description: "Покупка планера",
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
