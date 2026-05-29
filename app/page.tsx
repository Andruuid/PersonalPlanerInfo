import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Store, Users } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { articles, categories, getFeaturedArticles } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

const topicIcons = {
  planung: BookOpen,
  team: Users,
  recht: Scale,
  detailhandel: Store,
};

export default function HomePage() {
  const featured = getFeaturedArticles();

  return (
    <>
      <section className="border-b border-ink-900/10 bg-gradient-to-b from-paper-warm to-paper">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Ratgeber · Schweiz · KMU
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Personalplanung verständlich erklärt – ohne HR-Fachchinesisch
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            {siteConfig.description} Praxisnahe Artikel zu Dienstplan, Ferienplanung,
            Teamführung und typischen Fallstricken – für Läden, Gastronomie und
            Dienstleister.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700"
            >
              Alle Artikel
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 hover:bg-paper-warm"
            >
              Über diesen Ratgeber
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">Aktuelle Artikel</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featured.map((article, index) => (
            <ArticleCard key={article.slug} article={article} featured={index === 0} />
          ))}
        </div>
      </section>

      <section id="themen" className="border-y border-ink-900/10 bg-paper-warm">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-ink-900">Themen</h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            Was Sie hier finden – und was bewusst nicht (kein Clickbait, keine
            Rechtsberatung).
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = topicIcons[category.id as keyof typeof topicIcons];
              const count = articles.filter((a) => a.category === category.id).length;

              return (
                <Link
                  key={category.id}
                  href={`/ratgeber?kategorie=${category.id}`}
                  className="flex gap-4 rounded-xl border border-ink-900/10 bg-white p-5 transition hover:border-accent-600/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink-900">{category.label}</p>
                    <p className="mt-1 text-sm text-ink-500">{count} Artikel</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-ink-900/10 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-ink-900">
            Von Ratgeber zur Lösung
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Dieser Site ist redaktionell unabhängig. Wenn Sie nach Leseempfehlungen
            eine Software für Schichtplan und Ferien suchen, verweisen wir transparent
            auf{" "}
            <a
              href={siteConfig.productUrl}
              className="font-medium text-accent-600 hover:text-accent-700"
              rel="noopener noreferrer"
            >
              {siteConfig.productUrl.replace("https://www.", "")}
            </a>
            . Keine versteckten Links – nur Hinweise, wo sie thematisch passen.
          </p>
        </div>
      </section>
    </>
  );
}
