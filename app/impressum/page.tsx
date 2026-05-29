import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Impressum",
  description: `Impressum – ${siteConfig.name}`,
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold text-ink-900">Impressum</h1>

      <div className="prose-content mt-8">
        <h2>Anbieter</h2>
        <p>
          {siteConfig.name}
          <br />
          [Firmenname / Rechtsform eintragen]
          <br />
          [Strasse und Hausnummer]
          <br />
          [PLZ Ort], Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dienen der allgemeinen Information. Sie ersetzen keine
          Rechts-, Steuer- oder HR-Beratung. Für die Richtigkeit und Vollständigkeit
          wird keine Gewähr übernommen.
        </p>
      </div>

      <Link
        href="/"
        className="mt-10 inline-block text-sm font-semibold text-accent-600"
      >
        ← Startseite
      </Link>
    </div>
  );
}
