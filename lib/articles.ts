export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readMinutes: number;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  intro: string;
  sections: ArticleSection[];
  takeaway: string;
  relatedSlugs: string[];
};

export const categories = [
  { id: "planung", label: "Planung & Tools" },
  { id: "team", label: "Team & Kommunikation" },
  { id: "recht", label: "Recht & Fairness" },
  { id: "detailhandel", label: "Detailhandel" },
] as const;

export const articles: Article[] = [
  {
    slug: "excel-dienstplan-alternativen-schweiz",
    title: "Excel-Dienstplan: Wann lohnt sich der Wechsel zur Software?",
    description:
      "Excel reicht für manche Teams – bis es nicht mehr reicht. Anzeichen, Kosten und eine ehrliche Checkliste für Schweizer KMU.",
    category: "planung",
    readMinutes: 7,
    publishedAt: "2026-05-15",
    updatedAt: "2026-05-29",
    keywords: [
      "Excel Dienstplan Alternative",
      "Dienstplan Software Schweiz",
      "Personalplanung KMU",
    ],
    intro:
      "Viele Betriebe starten mit einer Excel-Tabelle und WhatsApp-Gruppen. Das funktioniert – bis Ferienwünsche, Teilzeitkräfte und Überstunden die Tabelle sprengen. Dieser Ratgeber hilft Ihnen einzuschätzen, wann ein Wechsel sinnvoll ist – ohne Software-Voodoo.",
    sections: [
      {
        heading: "Wann Excel noch genügt",
        paragraphs: [
          "Bei zwei bis vier Mitarbeitenden mit festen Zeiten und wenig Wechsel reicht oft eine einfache Wochenübersicht. Sie kennen jede Person persönlich, Abwesenheiten klären Sie im Gespräch, und Überstunden sind selten Thema.",
          "Excel ist gratis, flexibel und jeder kennt es. Solange der Aufwand unter einer Stunde pro Woche bleibt und niemand über vergessene Schichten oder doppelte Ferien klagt, gibt es keinen Zwang zu wechseln.",
        ],
      },
      {
        heading: "Fünf Anzeichen, dass Excel an Grenzen stösst",
        paragraphs: ["Typische Warnsignale in KMU:"],
        list: [
          "Mehrere Dateiversionen («Dienstplan_final_v3.xlsx») zirkulieren im Team",
          "Ferienwünsche landen per WhatsApp, E-Mail und mündlich – nichts ist zentral",
          "Mitarbeitende fragen ständig nach: «Wann arbeite ich am Samstag?»",
          "Überstunden und Zeitsaldo werden in separaten Tabellen nachgerechnet",
          "Bei Krankheit müssen Sie den Plan manuell neu zusammensetzen – unter Zeitdruck",
        ],
      },
      {
        heading: "Was Software anders macht – und was nicht",
        paragraphs: [
          "Eine Dienstplan-Software ersetzt nicht Ihr Fingerspitzengefühl als Inhaberin oder Teamleiter. Sie zentralisiert den Plan, macht Änderungen für alle sichtbar und verbindet Schichtplan mit Ferien und Zeitsaldo.",
          "Entscheidend ist nicht die Anzahl der Funktionen, sondern ob Ihr Team den Plan wirklich nutzt. Eine einfache Oberfläche, die Mitarbeitende auf dem Handy lesen können, schlägt ein Feature-Monster, das nur Sie verstehen.",
        ],
      },
      {
        heading: "Kosten ehrlich vergleichen",
        paragraphs: [
          "Excel kostet nichts – aber Ihre Zeit schon. Rechnen Sie grob: Wie viele Stunden pro Monat gehen für Planung, Nachfragen und Korrekturen drauf? Bei CHF 50 Stundenlohn (Ihre eigene Zeit als Chefin) sind das schnell CHF 200 im Monat.",
          "Cloud-Lösungen für KMU starten oft bei CHF 2–4 pro Mitarbeiter und Monat. Für zehn Personen sind das CHF 20–40 – weniger als eine Stunde Ihrer Zeit, wenn die Software halbwegs passt.",
        ],
      },
    ],
    takeaway:
      "Wechseln Sie, wenn Medienbrüche und Fehler teurer werden als die Software. Bleiben Sie bei Excel, solange Ihr Team klein, stabil und persönlich koordiniert ist.",
    relatedSlugs: [
      "ferienplanung-ohne-streit",
      "schichtplan-detailhandel-teilzeit",
    ],
  },
  {
    slug: "ferienplanung-ohne-streit",
    title: "Ferienplanung ohne Streit: Ein fairer Ablauf für kleine Teams",
    description:
      "Ferien sind emotional. Mit klaren Regeln, Transparenz und einem gemeinsamen Kalender vermeiden KMU unnötige Konflikte.",
    category: "team",
    readMinutes: 6,
    publishedAt: "2026-05-18",
    updatedAt: "2026-05-29",
    keywords: ["Ferienplanung Mitarbeiter", "Abwesenheitsmanagement", "Personalplanung KMU"],
    intro:
      "Wer im Juli zwei Wochen weg ist und im Dezember nochmals – während jemand anderes seit Monaten wartet – dem entsteht Frust. Ferienplanung ist weniger Excel-Problem als Fairness-Problem. So strukturieren viele Schweizer KMU den Prozess ohne HR-Abteilung.",
    sections: [
      {
        heading: "Regeln vor Emotionen",
        paragraphs: [
          "Bevor die ersten Anträge kommen, lohnt sich ein kurzes Gespräch im Team: Wie viele Personen dürfen gleichzeitig weg sein? Gibt es Sperrzeiten (Weihnachtsgeschäft, Sommerferien)? Wer entscheidet bei Konflikten?",
          "Schreiben Sie das nicht in ein 20-seitiges Reglement – eine halbe Seite reicht. Wichtig ist, dass alle die Spielregeln kennen, bevor es brenzlig wird.",
        ],
      },
      {
        heading: "Transparenz schlägt Geheimhaltung",
        paragraphs: [
          "Wenn nur die Chefin weiss, wer wie viele Ferientage noch hat, entstehen Gerüchte. Resttage und genehmigte Absenzen sollten für Betroffene nachvollziehbar sein – nicht öffentlich für alle, aber fair einsehbar.",
          "Ein gemeinsamer Ferienkalender (digital oder ausgedruckt im Pausenraum) zeigt, wer wann weg ist. Das hilft bei der Schichtplanung und reduziert «Warum darf sie und ich nicht?»-Diskussionen.",
        ],
      },
      {
        heading: "Anträge zentral statt über WhatsApp",
        paragraphs: [
          "Ferienwünsche per Chat verlieren sich. Besser: ein fester Kanal – Formular, E-Mail an eine Adresse oder Eintrag in der Planungssoftware. Der Antrag bekommt ein Datum und einen Status: eingereicht, genehmigt, abgelehnt mit Begründung.",
          "Ablehnungen sind unangenehm, aber eine kurze Begründung («In dieser Woche sind bereits zwei Personen im Urlaub») wirkt respektvoller als Schweigen.",
        ],
      },
      {
        heading: "Planung und Ferien zusammen denken",
        paragraphs: [
          "Wer Ferien getrennt vom Wochendienstplan verwaltet, plant doppelt. Ideal ist ein System, in dem Anträge im Planungskontext sichtbar sind – Sie sehen sofort, ob an einem Tag noch genug Personal da ist.",
        ],
      },
    ],
    takeaway:
      "Fairness entsteht durch klare Regeln, sichtbare Resttage und einen Kanal für Anträge – nicht durch Bauchgefühl allein.",
    relatedSlugs: [
      "excel-dienstplan-alternativen-schweiz",
      "absenzen-fair-managen",
    ],
  },
  {
    slug: "schichtplan-detailhandel-teilzeit",
    title: "Schichtplan im Detailhandel: Teilzeit, Samstag und Ferienzeiten",
    description:
      "Boutiquen und Läden planen anders als Büros. Konkrete Tipps für Wochenenden, Aushilfen und Hochsaison in der Schweiz.",
    category: "detailhandel",
    readMinutes: 8,
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-29",
    keywords: [
      "Schichtplan Detailhandel",
      "Personalplanung Einzelhandel",
      "Wochenplanung Mitarbeiter",
    ],
    intro:
      "Im Kleidergeschäft, im Uhrenshop oder in der Boutique wechseln Pensum und Präsenz ständig: Samstags mehr Personal, unter der Woche oft Teilzeit. Wer das mit Excel und Zuruf plant, verliert schnell den Überblick – besonders vor Weihnachten oder in den Sommerferien.",
    sections: [
      {
        heading: "Typische Muster im Einzelhandel",
        paragraphs: [
          "Die meisten Läden haben ein kleines Stammteam plus Aushilfen für Samstage und Ferienzeiten. Stammkräfte kennen Sortiment und Kunden, Aushilfen springen ein – aber oft kurzfristig und mit weniger Einarbeitungszeit.",
          "Planen Sie deshalb mit Dienstvorlagen: «Normaler Wochentag», «Samstag», «Verlängerte Öffnung». Das spart jede Woche Copy-Paste-Arbeit.",
        ],
      },
      {
        heading: "Samstag fair verteilen",
        paragraphs: [
          "Samstagsdienste sind beliebt und gleichzeitig belastend. Rotieren Sie systematisch, statt immer dieselben Personen zu fragen. Wer jeden zweiten Samstag arbeitet, sollte das im Plan sichtbar sein – sonst entsteht Ungerechtigkeitsgefühl.",
          "Dokumentieren Sie Überstunden aus langen Samstagen. Auch wenn Sie informell «ausgleichen», brauchen Sie irgendwann Zahlen.",
        ],
      },
      {
        heading: "Ferienzeiten und Ladenöffnung",
        paragraphs: [
          "In den Schulferien wollen viele weg – gleichzeitig ist oft mehr Laufkundschaft da. Planen Sie Früh: Wer kann in welcher Ferienwoche? Lieber im März klären als eine Woche vor den Sommerferien.",
          "Bei zu wenig Personal: reduzierte Öffnungszeiten kommunizieren statt unterbesetzt zu öffnen. Kunden verzeihen «Samstag erst ab 10 Uhr» eher als schlechten Service.",
        ],
      },
      {
        heading: "Aushilfen und kurzfristige Änderungen",
        paragraphs: [
          "Halten Sie eine Liste erreichbarer Aushilfen mit Verfügbarkeit (Samstag ja/nein, Ferien blockiert). Wenn jemand krank wird, ist das Gold wert – nicht erst um 7 Uhr anfangen zu telefonieren.",
        ],
      },
    ],
    takeaway:
      "Im Detailhandel gewinnt, wer Samstage rotiert, Ferien früh plant und Aushilfen strukturiert einbindet – nicht wer am lautesten zuruf plan.",
    relatedSlugs: [
      "ferienplanung-ohne-streit",
      "team-in-planung-einbeziehen",
    ],
  },
  {
    slug: "absenzen-fair-managen",
    title: "Absenzen fair managen – ohne Misstrauen im Team",
    description:
      "Krankheit, Unfall, Familie: Absenzen gehören dazu. Wie KMU den Prozess respektvoll und planbar gestalten.",
    category: "recht",
    readMinutes: 6,
    publishedAt: "2026-05-22",
    updatedAt: "2026-05-29",
    keywords: ["Abwesenheitsmanagement", "Krankmeldung KMU", "Personalplanung Schweiz"],
    intro:
      "Wenn jemand krank ist, brauchen Sie schnell Ersatz – und die erkrankte Person braucht Ruhe, keine Vorwürfe. Absenzenmanagement in KMU ist Planung plus Menschlichkeit. Hier geht es nicht um «Vortäuschung erkennen», sondern um klare Abläufe, die im Alltag funktionieren.",
    sections: [
      {
        heading: "Meldeweg und Erwartungen",
        paragraphs: [
          "Definieren Sie einfach: Bis wann muss jemand sich melden? An wen (eine Person, nicht die ganze Gruppe)? Was passiert mit offenen Schichten?",
          "Je kleiner das Team, desto wichtiger die Klarheit. «Bitte bis 8 Uhr Bescheid geben» reicht – wenn alle es wissen.",
        ],
      },
      {
        heading: "Plan anpassen, ohne Drama",
        paragraphs: [
          "Krankheit ist kein Planungsversagen. Wer den Dienstplan digital führt, sieht sofort, welche Schicht betroffen ist und kann umdisponieren. Wer in Excel plant, verliert Zeit mit Suchen und Anrufen.",
          "Dokumentieren Sie Änderungen am Plan – nicht gegen die Person, sondern für die Übersicht: Wer hat die Schicht übernommen?",
        ],
      },
      {
        heading: "Langfristige Absenzen anders behandeln",
        paragraphs: [
          "Kurze Krankheitstage sind Alltag. Wiederholte oder lange Absenzen brauchen ein anderes Gespräch – oft mit HR-Unterstützung oder Arztzeugnis gemäss Reglement. Das ist rechtlich und menschlich sensibel; holen Sie bei Unsicherheit Beratung.",
        ],
      },
      {
        heading: "Vertrauen als Ressource",
        paragraphs: [
          "Teams, in denen Planung transparent ist und Überstunden fair ausgeglichen werden, melden Absenzen eher rechtzeitig. Misstrauen entsteht oft aus undurchsichtigen Plänen – nicht aus einzelnen Krankheitstagen.",
        ],
      },
    ],
    takeaway:
      "Fairer Umgang mit Absenzen beginnt bei klaren Meldewegen und einem Plan, den Sie schnell anpassen können – nicht bei Kontrolle um der Kontrolle willen.",
    relatedSlugs: ["ferienplanung-ohne-streit", "team-in-planung-einbeziehen"],
  },
  {
    slug: "team-in-planung-einbeziehen",
    title: "Warum Mitarbeitende den Dienstplan mitgestalten sollten",
    description:
      "Planung von oben erzeugt Widerstand. Wie Beteiligung, Wünsche und Transparenz die Akzeptanz des Schichtplans erhöhen.",
    category: "team",
    readMinutes: 5,
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-29",
    keywords: ["Mitarbeiterplanung", "Schichtplan Akzeptanz", "Teamführung KMU"],
    intro:
      "Der perfekte Plan nützt wenig, wenn das Team ihn ignoriert oder heimlich tauscht. Personalplanung ist auch Psychologie: Wer mitbestimmen kann und den Plan versteht, kommt eher – und bleibt länger.",
    sections: [
      {
        heading: "Planung ist Kommunikation",
        paragraphs: [
          "Ein Dienstplan ist eine Botschaft: «So sieht die nächste Woche aus.» Wenn diese Botschaft überraschend kommt oder Wünsche nie berücksichtigt werden, fühlen sich Mitarbeitende übergangen – auch wenn der Plan betrieblich sinnvoll ist.",
        ],
      },
      {
        heading: "Wünsche sammeln – und begründet entscheiden",
        paragraphs: [
          "Sie müssen nicht jeden Wunsch erfüllen. Aber Sie sollten einen Kanal haben, Wünsche einzureichen, und bei Ablehnung kurz erklären warum. Das unterscheidet «Chef entscheidet willkürlich» von «Chef entscheidet nachvollziehbar».",
        ],
        list: [
          "Feste Deadline für Wünsche (z. B. Donnerstag für die Folgewoche)",
          "Priorität bei wiederkehrenden Wünschen (Betreuung, Ausbildung)",
          "Rotation bei gleichwertigen Konflikten",
        ],
      },
      {
        heading: "Plan früh veröffentlichen",
        paragraphs: [
          "Je später der Plan kommt, desto mehr Stress. Viele KMU zielen auf Freitag für die Folgewoche – oder zwei Wochen im Voraus, wenn das Geschäft es erlaubt. Veröffentlichung heisst: alle sehen dieselbe Version, nicht Screenshots in der Gruppe.",
        ],
      },
      {
        heading: "Feedback einmal im Quartal",
        paragraphs: [
          "Fünf Minuten im Team: «Was nervt am Plan? Was läuft gut?» Oft hören Sie Dinge, die Sie nicht sehen – zu kurze Pausen, unfaire Samstage, unklare Schichtbezeichnungen.",
        ],
      },
    ],
    takeaway:
      "Akzeptanz steigt, wenn Wünsche gehört werden, Pläne früh sichtbar sind und Entscheidungen begründet werden – nicht wenn der Plan technisch perfekt ist.",
    relatedSlugs: [
      "ferienplanung-ohne-streit",
      "schichtplan-detailhandel-teilzeit",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticlesByCategory(categoryId: string): Article[] {
  return articles.filter((a) => a.category === categoryId);
}

export function getFeaturedArticles(): Article[] {
  return articles.slice(0, 3);
}
