import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Store, Users } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { articles, categories, getCategoryPath, getFeaturedArticles } from "@/lib/articles";
import { homeFaqs } from "@/lib/home-faq";
import { faqSchema } from "@/lib/seo/schema";
import { hubPath, siteConfig } from "@/lib/site-config";

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
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="border-b border-ink-900/10 bg-gradient-to-b from-paper-warm to-paper">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Ratgeber · Schweiz · KMU
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Personalplanung für Schweizer KMU – Dienstplan, Ferien und Schichtplan
            verständlich erklärt
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            Ob Boutique, Restaurant oder Coiffeursalon: Wer Mitarbeitende plant, kennt
            das Problem – Schichten in Excel, Ferienwünsche per WhatsApp, Überstunden in
            einer separaten Tabelle. Hier finden Sie praxisnahes Wissen zur{" "}
            <strong>Mitarbeiterplanung</strong>, <strong>Ferienplanung</strong> und{" "}
            <strong>Schichtplanung</strong> – ohne HR-Fachchinesisch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700"
            >
              Ratgeber entdecken
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={hubPath}
              className="inline-flex items-center gap-2 rounded-lg border border-ink-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 hover:bg-paper-warm"
            >
              Software-Überblick
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">
          Was Sie hier finden
        </h2>
        <div className="prose-content mt-6 max-w-3xl">
          <p>
            Mitarbeiterplaner.info ist ein unabhängiger Ratgeber zur{" "}
            <strong>Personalplanung in KMU</strong>. Wir schreiben für Inhaberinnen,
            Teamleiter und kleine Läden – nicht für HR-Abteilungen mit 500
            Mitarbeitenden.
          </p>
          <p>
            <strong>Dienstplan ohne Excel:</strong> Wann Tabellen reichen und wann eine{" "}
            <Link href={hubPath}>Dienstplan-Software</Link> Zeit spart – erklärt in
            unserem Artikel zur{" "}
            <Link href="/ratgeber/excel-dienstplan-alternativen-schweiz">
              Excel-Dienstplan Alternative
            </Link>
            .
          </p>
          <p>
            <strong>Ferien und Abwesenheiten:</strong> Fair planen, Konflikte vermeiden,
            Anträge zentral statt über Chat – im Ratgeber zur{" "}
            <Link href="/ratgeber/ferienplanung-ohne-streit">
              Ferienplanung ohne Streit
            </Link>
            .
          </p>
          <p>
            <strong>Schichtplan im Detailhandel:</strong> Teilzeit, Samstage, Aushilfen
            und Hochsaison – konkret für Boutiquen, Schmuck- und Uhrenläden im Artikel
            zum{" "}
            <Link href="/ratgeber/schichtplan-detailhandel-teilzeit">
              Schichtplan im Detailhandel
            </Link>
            .
          </p>
          <p>
            Kein Clickbait, keine Rechtsberatung – aber ehrliche Tipps aus dem Alltag
            Schweizer Betriebe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">
          Aktuelle Artikel
        </h2>
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
                  href={getCategoryPath(category.id)}
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
            Wann lohnt sich eine Dienstplan-Software?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Ab etwa fünf Mitarbeitenden wird manuelle Planung teurer, als sie aussieht:
            Versionen von Excel-Dateien, vergessene Schichten, doppelte Ferienwünsche. Eine{" "}
            <strong>Cloud-Dienstplan-Lösung</strong> bündelt Schichtplan, Ferien und
            Zeitsaldo in einer App – für Sie am Desktop, für Ihr Team auf dem Smartphone.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Mehr dazu in unserem{" "}
            <Link href={hubPath} className="font-medium text-accent-600 hover:text-accent-700">
              Überblick zur Personalplanung Software in der Schweiz
            </Link>
            . Wenn Sie nach den Ratgeber-Artikeln eine konkrete Lösung suchen, entwickelt
            das Team hinter diesem Ratgeber{" "}
            <a
              href={siteConfig.productUrl}
              className="font-medium text-accent-600 hover:text-accent-700"
              rel="noopener noreferrer"
            >
              {siteConfig.productUrl.replace("https://www.", "")}
            </a>{" "}
            – eine Schweizer Software für KMU.
          </p>
        </div>
      </section>

      <FaqSection faqs={homeFaqs} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-ink-900/10 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-ink-900">
            Von Ratgeber zur Lösung
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Dieser Site ist redaktionell unabhängig. Wenn Sie nach den Leseempfehlungen
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
