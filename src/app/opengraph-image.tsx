import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const unboundedBold = await fetch(
    new URL("../../public/fonts/Unbounded-Bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const unboundedRegular = await fetch(
    new URL("../../public/fonts/Unbounded-Regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        background: "#0b0b0b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "Unbounded",
      }}
    >
      <div
        style={{
          color: "#d4f06b",
          fontSize: 28,
          marginBottom: 24,
          fontWeight: 400,
        }}
      >
        Structura
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        Недельный планер
      </div>
      <div
        style={{
          color: "rgba(240,237,232,0.6)",
          fontSize: 28,
          marginBottom: 48,
          fontWeight: 400,
        }}
      >
        Цели · Задачи · Привычки · Аналитика
      </div>
      <div style={{ color: "#d4f06b", fontSize: 36, fontWeight: 700 }}>
        490 ₽
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Unbounded",
          data: unboundedRegular,
          weight: 400,
        },
        {
          name: "Unbounded",
          data: unboundedBold,
          weight: 700,
        },
      ],
    },
  );
}
