import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { articles, categories, getCategoryPath } from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ratgeber – Personalplanung & Dienstplan",
  description:
    "Alle Artikel zu Schichtplan, Ferienplanung, Excel-Alternativen und Teamorganisation für Schweizer KMU.",
  path: "/ratgeber",
});

export default function RatgeberPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        Ratgeber
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-600">
        Praxiswissen für Inhaberinnen, Teamleiter und KMU in der Schweiz.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/ratgeber"
          className="rounded-full bg-accent-600 px-3 py-1 text-sm font-medium text-white"
        >
          Alle
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={getCategoryPath(cat.id)}
            className="rounded-full bg-white px-3 py-1 text-sm font-medium text-ink-700 ring-1 ring-ink-900/10 hover:bg-paper-warm"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
