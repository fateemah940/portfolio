import type { MetadataRoute } from "next";
import { SITE, PROJECTS } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date("2026-10-08");
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...PROJECTS.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
