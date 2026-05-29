import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { hubFaqs } from "@/lib/hub-faq";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { hubPath, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Personalplanung Software Schweiz – Vergleich & Kriterien für KMU",
  description:
    "Excel vs. Cloud: Was gute Personalplanung Software für Schweizer KMU ausmacht – Kriterien, Checkliste und ehrlicher Vergleich. Jetzt informieren.",
  path: hubPath,
});

const breadcrumbs = [
  { name: "Start", path: "/" },
  { name: "Personalplanung Software", path: hubPath },
];

export default function HubPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(hubFaqs)]} />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm text-ink-500">
          <Link href="/" className="hover:text-ink-900">
            Start
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink-700">Personalplanung Software</span>
        </nav>

        <h1 className="mt-8 font-serif text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
          Personalplanung Software in der Schweiz – Kriterien statt Feature-Listen
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-600">
          Viele KMU suchen eine <strong>Dienstplan-Software</strong>, stossen aber auf
          komplexe HR-Systeme oder endlose Vergleichstabellen. Dieser Überblick hilft
          Ihnen einzuschätzen, ob und welche <strong>Personalplanung Software</strong>{" "}
          für Ihren Betrieb sinnvoll ist – ohne Verkaufsgespräch.
        </p>

        <div className="prose-content mt-10">
          <h2>Was ist Personalplanung Software?</h2>
          <p>
            Personalplanung Software hilft Betrieben, Schichten und Dienste zu planen,
            Ferien und Absenzen zu verwalten und Arbeitszeiten nachzuhalten. Statt
            Excel-Tabellen und WhatsApp-Nachrichten haben Inhaber und Team einen
            gemeinsamen, aktuellen Plan – als Web-App und auf dem Smartphone.
          </p>
          <p>
            Für Schweizer KMU geht es selten um Lohnabrechnung oder komplexe
            HR-Prozesse. Entscheidend sind Wochenplanung, Ferienplanung, Zeitsaldo und
            eine Oberfläche, die das Team wirklich nutzt.
          </p>

          <h2>Excel vs. Cloud – ehrlich verglichen</h2>
          <p>
            Excel ist flexibel und bekannt. Bei zwei bis vier Mitarbeitenden mit festen
            Zeiten reicht oft eine Wochenübersicht. Mehr dazu in unserem Ratgeber zur{" "}
            <Link href="/ratgeber/excel-dienstplan-alternativen-schweiz">
              Excel-Dienstplan Alternative
            </Link>
            .
          </p>
          <p>Excel wird problematisch, wenn:</p>
          <ul>
            <li>mehrere Dateiversionen im Team zirkulieren</li>
            <li>Ferienwünsche per Chat, E-Mail und mündlich kommen</li>
            <li>Überstunden in separaten Tabellen nachgerechnet werden</li>
            <li>der Plan bei Krankheit unter Zeitdruck neu gebaut werden muss</li>
          </ul>
          <p>
            Eine <strong>Cloud-Dienstplan-Lösung</strong> zentralisiert den Plan, macht
            Änderungen für alle sichtbar und verbindet Schichtplan mit Ferien und
            Zeitsaldo – ohne Medienbruch.
          </p>

          <h2>Für wen lohnt sich der Wechsel?</h2>
          <p>Typische Anzeichen in Schweizer KMU:</p>
          <ul>
            <li>ab etwa fünf Mitarbeitenden mit wechselnden Schichten</li>
            <li>Teilzeit, Aushilfen oder Samstagsdienste im Alltag</li>
            <li>mehr als eine Stunde Planungsaufwand pro Woche</li>
            <li>ständige Nachfragen: «Wann arbeite ich am Samstag?»</li>
            <li>Ferienkonflikte, weil Anträge nicht zentral sind</li>
          </ul>
          <p>
            Bleiben Sie bei Excel, solange Ihr Team klein, stabil und persönlich
            koordiniert ist. Wechseln Sie, wenn Medienbrüche und Fehler teurer werden als
            die Software.
          </p>

          <h2>Was gute KMU-Software ausmacht</h2>
          <p>Fragen Sie nicht «Welche Software hat die meisten Features?», sondern:</p>
          <ul>
            <li>Kann mein Team den Plan auf dem Handy lesen?</li>
            <li>Sind Ferienanträge im Planungskontext sichtbar?</li>
            <li>Wird Zeitsaldo aus dem Wochenplan abgeleitet?</li>
            <li>Ist die Oberfläche ohne Schulungswochen verständlich?</li>
            <li>Passt der Preis zu meiner Teamgrösse?</li>
          </ul>
          <p>
            Eine einfache Oberfläche, die Mitarbeitende nutzen, schlägt ein
            Feature-Monster, das nur die Chefin versteht.
          </p>

          <h2>Schweizer Besonderheiten</h2>
          <p>
            In der Schweiz zählen Zeitsaldo, Ferienanspruch, Überzeitausgleich (UEZ) und
            Zeitausgleich (TZT) – je nach Betrieb unterschiedlich geregelt. Gute Software
            bildet diese Konten nachvollziehbar ab, ohne separate Excel-Tabellen.
          </p>
          <p>
            Betriebe mit mehreren Standorten oder kantonalen Feiertagen brauchen
            zentralisierte Planung – Boutiquen, Restaurants und Coiffeursalons mit
            Schichtbetrieb profitieren besonders. Mehr zur{" "}
            <Link href="/ratgeber/ferienplanung-ohne-streit">
              Ferienplanung Mitarbeiter
            </Link>{" "}
            und zum{" "}
            <Link href="/ratgeber/zeitsaldo-ueberstunden-kmu">
              Zeitsaldo in KMU
            </Link>
            .
          </p>

          <h2>Dienstplan und Ferien in einer App</h2>
          <p>
            Wer Ferien getrennt vom Wochendienstplan verwaltet, plant doppelt. Ideal ist
            ein System, in dem Anträge im Planungskontext sichtbar sind – Sie sehen
            sofort, ob an einem Tag noch genug Personal da ist. Das reduziert Konflikte
            und Nachfragen im Team.
          </p>
        </div>

        <aside className="mt-12 rounded-2xl border border-ink-900/10 bg-paper-warm p-6 sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-ink-900">
            Weiterführend
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Das Team hinter diesem Ratgeber entwickelt{" "}
            <strong>{siteConfig.productName}</strong> – eine Cloud-Lösung für
            Schweizer KMU, die Schichtplan, Ferien und Zeitsaldo in einer App verbindet.
            Wenn die Kriterien oben auf Sie zutreffen, können Sie sich unverbindlich
            vormerken.
          </p>
          <a
            href={siteConfig.productUrl}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-700"
            rel="noopener noreferrer"
          >
            {siteConfig.productUrl.replace("https://www.", "")} ansehen
            <ArrowRight className="h-4 w-4" />
          </a>
        </aside>
      </div>

      <FaqSection
        faqs={hubFaqs}
        heading="Fragen zur Personalplanung Software"
        description="Antworten zu Kosten, Excel-Ersatz und Funktionen für Schweizer KMU."
      />
    </>
  );
}
