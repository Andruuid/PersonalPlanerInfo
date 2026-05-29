import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Datenschutz",
  description: `Datenschutzerklärung – ${siteConfig.name}`,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-serif text-3xl font-semibold text-ink-900">Datenschutz</h1>

      <div className="prose-content mt-8">
        <h2>Verantwortliche Stelle</h2>
        <p>
          {siteConfig.name}
          <br />
          [Firmenname / Rechtsform eintragen]
          <br />
          [Strasse und Hausnummer]
          <br />
          [PLZ Ort], Schweiz
          <br />
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
        </p>

        <h2>Allgemeines</h2>
        <p>
          Der Schutz Ihrer Daten ist uns wichtig. Diese Website dient der Information
          über Personalplanung und Teamorganisation. Personenbezogene Daten werden nur
          erhoben, soweit dies technisch notwendig ist oder Sie uns freiwillig
          kontaktieren.
        </p>

        <h2>Server-Logfiles</h2>
        <p>
          Beim Besuch dieser Website können automatisch technische Daten erfasst werden
          (z. B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs). Diese Daten dienen der
          Sicherheit und Stabilität des Betriebs und werden nicht mit anderen
          Datenquellen zusammengeführt.
        </p>

        <h2>Externe Links</h2>
        <p>
          Diese Website verlinkt zu externen Seiten, insbesondere zu{" "}
          <a href={siteConfig.productUrl} rel="noopener noreferrer">
            {siteConfig.productUrl.replace("https://www.", "")}
          </a>
          . Für deren Datenschutz gelten die jeweiligen Datenschutzerklärungen der
          verlinkten Anbieter.
        </p>

        <h2>Ihre Rechte</h2>
        <p>
          Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf Auskunft,
          Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten. Wenden Sie sich dazu an die oben genannte
          Kontaktadresse.
        </p>

        <h2>Änderungen</h2>
        <p>
          Diese Datenschutzerklärung kann bei Bedarf angepasst werden. Es gilt die auf
          dieser Seite veröffentlichte Fassung.
        </p>
      </div>

      <Link
        href="/impressum"
        className="mt-10 inline-block text-sm font-semibold text-accent-600"
      >
        Impressum →
      </Link>
    </div>
  );
}
