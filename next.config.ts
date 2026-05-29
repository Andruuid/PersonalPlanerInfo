import type { NextConfig } from "next";

const categoryRedirects = [
  { id: "planung", slug: "planung-tools" },
  { id: "team", slug: "team-kommunikation" },
  { id: "recht", slug: "recht-fairness" },
  { id: "detailhandel", slug: "detailhandel" },
].map(({ id, slug }) => ({
  source: `/ratgeber`,
  has: [{ type: "query" as const, key: "kategorie", value: id }],
  destination: `/ratgeber/kategorie/${slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  redirects: async () => categoryRedirects,
};

export default nextConfig;
