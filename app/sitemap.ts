import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/articles";
import { hubPath, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "/",
    hubPath,
    "/ratgeber",
    "/ueber-uns",
    "/impressum",
    "/datenschutz",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === hubPath ? 0.9 : 0.7,
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.url}/ratgeber/kategorie/${category.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/ratgeber/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
