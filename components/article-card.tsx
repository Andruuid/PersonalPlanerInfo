import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";
import { categories } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const category = categories.find((c) => c.id === article.category);

  return (
    <article
      className={
        featured
          ? "group rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm transition hover:border-accent-600/30 hover:shadow-md sm:p-8"
          : "group rounded-xl border border-ink-900/10 bg-white p-5 transition hover:border-accent-600/30 hover:shadow-sm"
      }
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink-500">
        {category ? (
          <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-accent-700">
            {category.label}
          </span>
        ) : null}
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {article.readMinutes} Min.
        </span>
        <span>{formatDate(article.publishedAt)}</span>
      </div>

      <h2
        className={
          featured
            ? "mt-4 font-serif text-2xl font-semibold tracking-tight text-ink-900 group-hover:text-accent-600"
            : "mt-3 font-serif text-xl font-semibold tracking-tight text-ink-900 group-hover:text-accent-600"
        }
      >
        <Link href={`/ratgeber/${article.slug}`}>{article.title}</Link>
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-ink-600">{article.description}</p>

      <Link
        href={`/ratgeber/${article.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
      >
        Weiterlesen
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
