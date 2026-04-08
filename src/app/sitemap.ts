import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://structuraplaner.ru";

  const deployDate = process.env.VERCEL_GIT_COMMIT_DATE
    ? new Date(process.env.VERCEL_GIT_COMMIT_DATE)
    : new Date();

  const staticDate = new Date("2026-03-15");
  return [
    {
      url: baseUrl,
      lastModified: deployDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/offer`,
      lastModified: deployDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/consent`,
      lastModified: staticDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
