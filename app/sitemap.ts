import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["/", "/ratgeber", "/ueber-uns", "/impressum"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/ratgeber/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
