export const siteConfig = {
  name: "Mitarbeiterplaner.info",
  shortName: "Mitarbeiterplaner.info",
  tagline: "Ratgeber für Personalplanung in Schweizer KMU",
  description:
    "Praxiswissen zu Dienstplan, Ferienplanung und Teamorganisation – verständlich erklärt für Läden, Gastronomie und Dienstleister in der Schweiz.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mitarbeiterplaner.info",
  productName: "easyplaner",
  productUrl: "https://www.easyplaner.ch",
  contactEmail: "hello@personalplaner.ch",
  nav: [
    { label: "Ratgeber", href: "/ratgeber" },
    { label: "Themen", href: "/#themen" },
    { label: "Über uns", href: "/ueber-uns" },
  ],
} as const;
