import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Über uns – Unabhängiger Ratgeber",
  description:
    "Wer hinter Mitarbeiterplaner.info steht, wie wir Inhalte erstellen und warum wir auf easyplaner.ch verweisen.",
  path: "/ueber-uns",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        Über Mitarbeiterplaner.info
      </h1>

      <div className="prose-content mt-8">
        <p>
          <strong>Mitarbeiterplaner.info</strong> ist ein unabhängiger Ratgeber zu
          Personalplanung, Dienstplan und Teamorganisation – speziell für kleine
          Betriebe in der Schweiz: Boutiquen, Restaurants, Coiffeursalons und
          Dienstleister mit Schichtbetrieb.
        </p>

        <h2>Was wir machen</h2>
        <p>
          Wir schreiben praxisnahe Artikel ohne HR-Fachjargon: Wann Excel reicht,
          wie Ferien fair geplant werden, was im Detailhandel anders ist, wie Absenzen
          respektvoll gemanagt werden. Keine Sensations-Themen, keine Rechtsberatung –
          aber ehrliche Tipps aus dem Alltag von KMU.
        </p>

        <h2>Transparenz: Verbindung zu easyplaner.ch</h2>
        <p>
          Dieser Ratgeber wird vom Team hinter{" "}
          <a href={siteConfig.productUrl} rel="noopener noreferrer">
            {siteConfig.productUrl.replace("https://www.", "")}
          </a>{" "}
          betrieben – einer Schweizer Software für Dienstplan und Ferienplanung. Wir
          trennen bewusst:
        </p>
        <ul>
          <li>
            <strong>mitarbeiterplaner.info</strong> = Information, Tipps, Trends
          </li>
          <li>
            <strong>easyplaner.ch</strong> = Produkt, Warteliste, Software
          </li>
        </ul>
        <p>
          Wo es passt, verlinken wir auf easyplaner.ch – offen im Footer und in
          thematisch passenden Artikeln. Das ist redaktionelle Empfehlung, kein
          verstecktes Marketing.
        </p>

        <h2>Was wir nicht machen</h2>
        <ul>
          <li>Keine kopierten oder KI-Massenartikel ohne Mehrwert</li>
          <li>Keine Rechts- oder Steuerberatung</li>
        </ul>

        <h2>Kontakt</h2>
        <p>
          Fragen oder Themenvorschläge:{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>
      </div>

      <Link
        href="/ratgeber"
        className="mt-10 inline-block text-sm font-semibold text-accent-600 hover:text-accent-700"
      >
        ← Zurück zum Ratgeber
      </Link>
    </div>
  );
}
