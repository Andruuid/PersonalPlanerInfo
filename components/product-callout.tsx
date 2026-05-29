import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type ProductCalloutProps = {
  variant?: "inline" | "box";
};

export function ProductCallout({ variant = "box" }: ProductCalloutProps) {
  if (variant === "inline") {
    return (
      <p className="text-sm text-ink-600">
        Mehr zur digitalen Planung:{" "}
        <a
          href={siteConfig.productUrl}
          className="font-medium text-accent-600 hover:text-accent-700"
          rel="noopener noreferrer"
        >
          {siteConfig.productName}.ch
        </a>
      </p>
    );
  }

  return (
    <aside className="rounded-xl border border-accent-600/15 bg-accent-100/50 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent-700">
        Praxis-Tipp
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">
        Wenn Excel und WhatsApp an Grenzen stossen:{" "}
        <strong>{siteConfig.productName}</strong> verbindet Schichtplan, Ferien und
        Zeitsaldo in einer Cloud-App für Schweizer KMU – ab CHF 2.90 pro Mitarbeiter.
      </p>
      <Link
        href={siteConfig.productUrl}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
        rel="noopener noreferrer"
      >
        {siteConfig.productUrl.replace("https://www.", "")} ansehen
        <ArrowRight className="h-4 w-4" />
      </Link>
    </aside>
  );
}
