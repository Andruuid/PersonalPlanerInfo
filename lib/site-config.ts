export const siteConfig = {
  name: "Mitarbeiterplaner.info",
  shortName: "Mitarbeiterplaner.info",
  tagline: "Ratgeber für Personalplanung in Schweizer KMU",
  seoTitle: "Dienstplan Software Schweiz – Personalplanung für KMU",
  description:
    "Schichtplan, Ferien und Zeitsaldo für Läden & Gastronomie: Praxis-Tipps für Schweizer KMU – plus einfache Cloud-Software statt Excel. Jetzt lesen.",
  heroIntro:
    "Praxiswissen zu Dienstplan, Ferienplanung und Teamorganisation – verständlich erklärt für Läden, Gastronomie und Dienstleister in der Schweiz. Praxisnahe Artikel zu Dienstplan, Ferienplanung, Teamführung und typischen Fallstricken – für Läden, Gastronomie und Dienstleister.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mitarbeiterplaner.info",
  ogImage: "/og-default.png",
  productName: "easyplaner",
  productUrl: "https://www.easyplaner.ch",
  contactEmail: "hello@personalplaner.ch",
  nav: [
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Software-Überblick", href: "/personalplanung-software-schweiz" },
    { label: "Themen", href: "/#themen" },
    { label: "Über uns", href: "/ueber-uns" },
  ],
} as const;

export const hubPath = "/personalplanung-software-schweiz";
