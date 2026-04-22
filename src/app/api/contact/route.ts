import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT) return true;
  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Слишком много запросов. Попробуйте через час." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const { contact, contactType } = body as Partial<{
      contact: string;
      contactType: "email" | "telegram";
    }>;

    if (
      typeof contact !== "string" ||
      (contactType !== "email" && contactType !== "telegram")
    ) {
      return NextResponse.json({ error: "Заполните поле" }, { status: 400 });
    }

    const trimmedContact = contact.trim();

    if (!trimmedContact || trimmedContact.length > 120) {
      return NextResponse.json(
        { error: "Некорректные данные" },
        { status: 400 },
      );
    }

    if (contactType === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedContact)) {
        return NextResponse.json(
          { error: "Некорректный email" },
          { status: 400 },
        );
      }
    }

    if (contactType === "telegram") {
      const cleaned = trimmedContact.replace(/^@/, "");
      if (!/^[a-zA-Z0-9_]{3,32}$/.test(cleaned)) {
        return NextResponse.json(
          { error: "Некорректный Telegram username" },
          { status: 400 },
        );
      }
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const label = contactType === "email" ? "Email" : "Telegram";
    const contactDisplay =
      contactType === "telegram" && !trimmedContact.startsWith("@")
        ? `@${trimmedContact}`
        : trimmedContact;

    const emailBody = `Новая заявка на планер Structura!

${label}: ${contactDisplay}
Дата: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}

Действия:
1. Отправьте ссылку на оплату через ЮКассу
2. После подтверждения оплаты — отправьте ссылку на планер
`.trim();

    if (!RESEND_API_KEY) {
      console.log("[CONTACT FORM]", {
        contactType,
        contact: contactDisplay,
        ip,
        date: new Date().toISOString(),
      });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Structura <noreply@structuraplaner.ru>",
        to: "structura.planer@yandex.com",
        subject: `Заявка на планер — ${label}: ${contactDisplay}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
      return NextResponse.json(
        { error: "Ошибка отправки. Напишите нам напрямую." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 },
    );
  }
}
