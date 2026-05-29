import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

const ogImages = [
  {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} – Personalplanung für Schweizer KMU`,
  },
];

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const isHome = canonicalPath === "/";
  const pageTitle = isHome ? siteConfig.seoTitle : title;
  const fullTitle = isHome
    ? siteConfig.seoTitle
    : `${title} | ${siteConfig.shortName}`;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteConfig.url}${canonicalPath === "/" ? "" : canonicalPath}`,
      siteName: siteConfig.name,
      locale: "de_CH",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
