import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { hubPath, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-900/10 bg-paper-warm">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-semibold text-ink-900">
              Mitarbeiterplaner<span className="text-accent-600">.info</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Unabhängiger Ratgeber zu Personalplanung, Dienstplan und Teamorganisation
              für Schweizer KMU.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Beliebte Themen
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={hubPath} className="text-ink-700 hover:text-ink-900">
                  Personalplanung Software Schweiz
                </Link>
              </li>
              <li>
                <Link
                  href="/ratgeber/excel-dienstplan-alternativen-schweiz"
                  className="text-ink-700 hover:text-ink-900"
                >
                  Excel-Dienstplan Alternative
                </Link>
              </li>
              <li>
                <Link
                  href="/ratgeber/ferienplanung-ohne-streit"
                  className="text-ink-700 hover:text-ink-900"
                >
                  Ferienplanung Mitarbeiter
                </Link>
              </li>
              <li>
                <Link href="/ratgeber" className="text-ink-700 hover:text-ink-900">
                  Alle Artikel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Ratgeber
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/ueber-uns" className="text-ink-700 hover:text-ink-900">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-ink-700 hover:text-ink-900">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-ink-700 hover:text-ink-900">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Software-Tipp
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">
              Für digitale Dienstplanung in der Schweiz:{" "}
              <a
                href={siteConfig.productUrl}
                className="inline-flex items-center gap-1 font-medium text-accent-600 hover:text-accent-700"
                rel="noopener noreferrer"
              >
                {siteConfig.productUrl.replace("https://www.", "")}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              – eine einfache Cloud-Lösung für KMU.
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-ink-900/10 pt-6 text-xs text-ink-500">
          © {year} {siteConfig.name}. Inhalte dienen der Information – keine Rechtsberatung.
        </p>
      </div>
    </footer>
  );
}
