import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { articles, categories } from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ratgeber – Personalplanung & Dienstplan",
  description:
    "Alle Artikel zu Schichtplan, Ferienplanung, Excel-Alternativen und Teamorganisation für Schweizer KMU.",
  path: "/ratgeber",
});

type PageProps = {
  searchParams: Promise<{ kategorie?: string }>;
};

export default async function RatgeberPage({ searchParams }: PageProps) {
  const { kategorie } = await searchParams;
  const filtered = kategorie
    ? articles.filter((a) => a.category === kategorie)
    : articles;
  const activeCategory = categories.find((c) => c.id === kategorie);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {activeCategory ? activeCategory.label : "Ratgeber"}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-600">
        {activeCategory
          ? `Artikel zum Thema ${activeCategory.label}.`
          : "Praxiswissen für Inhaberinnen, Teamleiter und KMU in der Schweiz."}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <a
          href="/ratgeber"
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            !kategorie
              ? "bg-accent-600 text-white"
              : "bg-white text-ink-700 ring-1 ring-ink-900/10 hover:bg-paper-warm"
          }`}
        >
          Alle
        </a>
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`/ratgeber?kategorie=${cat.id}`}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              kategorie === cat.id
                ? "bg-accent-600 text-white"
                : "bg-white text-ink-700 ring-1 ring-ink-900/10 hover:bg-paper-warm"
            }`}
          >
            {cat.label}
          </a>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
