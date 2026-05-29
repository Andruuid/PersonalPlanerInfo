import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { ArticleBody } from "@/components/article-body";
import { ArticleCard } from "@/components/article-card";
import { ProductCallout } from "@/components/product-callout";
import { JsonLd } from "@/components/seo/json-ld";
import {
  articles,
  categories,
  getAllSlugs,
  getArticle,
} from "@/lib/articles";
import { createPageMetadata } from "@/lib/seo/metadata";
import { articleSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/ratgeber/${slug}`,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const category = categories.find((c) => c.id === article.category);
  const related = article.relatedSlugs
    .map((s) => getArticle(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const articleUrl = `${siteConfig.url}/ratgeber/${slug}`;

  return (
    <>
      <JsonLd data={articleSchema(article, articleUrl)} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm text-ink-500">
          <Link href="/" className="hover:text-ink-900">
            Start
          </Link>
          <span className="mx-2">/</span>
          <Link href="/ratgeber" className="hover:text-ink-900">
            Ratgeber
          </Link>
          {category ? (
            <>
              <span className="mx-2">/</span>
              <span className="text-ink-700">{category.label}</span>
            </>
          ) : null}
        </nav>

        <header className="mt-8">
          {category ? (
            <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-semibold text-accent-700">
              {category.label}
            </span>
          ) : null}
          <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-ink-600">{article.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-ink-500">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readMinutes} Min. Lesezeit
            </span>
            <span>Aktualisiert: {formatDate(article.updatedAt)}</span>
          </div>
        </header>

        <div className="mt-10">
          <ArticleBody article={article} />
        </div>

        <div className="mt-10">
          <ProductCallout />
        </div>

        {related.length > 0 ? (
          <aside className="mt-16 border-t border-ink-900/10 pt-10">
            <h2 className="font-serif text-xl font-semibold text-ink-900">
              Weiterlesen
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.slice(0, 2).map((rel) => (
                <ArticleCard key={rel.slug} article={rel} />
              ))}
            </div>
          </aside>
        ) : null}
      </article>
    </>
  );
}
