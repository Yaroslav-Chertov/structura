import type { Metadata } from "next";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Structura — недельный планер для продуктивности",
  description:
    "Персональный планер на неделю в Google Таблицах. Цели, задачи, привычки и аналитика прогресса — всё в одном месте.",
  keywords: [
    "планер",
    "продуктивность",
    "google таблицы",
    "цели",
    "привычки",
    "недельный планер",
  ],
  authors: [{ name: "Structura" }],
  creator: "Structura",
  openGraph: {
    title: "Structura — недельный планер для продуктивности",
    description:
      "Персональный планер на неделю в Google Таблицах. Цели, задачи, привычки и аналитика прогресса.",
    url: "https://structuraplaner.ru",
    siteName: "Structura",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect для Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload критического шрифта */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
