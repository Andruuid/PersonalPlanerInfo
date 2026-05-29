import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const isHome = canonicalPath === "/";
  const fullTitle = isHome ? siteConfig.name : `${title} | ${siteConfig.shortName}`;

  return {
    title: isHome ? siteConfig.name : title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${canonicalPath === "/" ? "" : canonicalPath}`,
      siteName: siteConfig.name,
      locale: "de_CH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
