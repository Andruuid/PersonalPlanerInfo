import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { JsonLd } from "@/components/seo/json-ld";
import {
  categories,
  getAllCategorySlugs,
  getArticlesByCategory,
  getCategoryBySlug,
} from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return createPageMetadata({
    title: category.seoTitle,
    description: category.seoDescription,
    path: `/ratgeber/kategorie/${slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const filtered = getArticlesByCategory(category.id);
  const breadcrumbs = [
    { name: "Start", path: "/" },
    { name: "Ratgeber", path: "/ratgeber" },
    { name: category.label, path: `/ratgeber/kategorie/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm text-ink-500">
          <Link href="/" className="hover:text-ink-900">
            Start
          </Link>
          <span className="mx-2">/</span>
          <Link href="/ratgeber" className="hover:text-ink-900">
            Ratgeber
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-700">{category.label}</span>
        </nav>

        <h1 className="mt-8 font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          {category.label}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-600">{category.intro}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href="/ratgeber"
            className="rounded-full bg-white px-3 py-1 text-sm font-medium text-ink-700 ring-1 ring-ink-900/10 hover:bg-paper-warm"
          >
            Alle
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/ratgeber/kategorie/${cat.slug}`}
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                slug === cat.slug
                  ? "bg-accent-600 text-white"
                  : "bg-white text-ink-700 ring-1 ring-ink-900/10 hover:bg-paper-warm"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-ink-600">
            Noch keine Artikel in dieser Kategorie.{" "}
            <Link href="/ratgeber" className="font-medium text-accent-600">
              Alle Artikel ansehen
            </Link>
          </p>
        ) : null}
      </div>
    </>
  );
}
