import type { FaqItem } from "@/lib/seo/schema";

type FaqSectionProps = {
  faqs: FaqItem[];
  heading?: string;
  description?: string;
};

export function FaqSection({
  faqs,
  heading = "Häufige Fragen zur Personalplanung in KMU",
  description,
}: FaqSectionProps) {
  return (
    <section id="faq" className="border-y border-ink-900/10 bg-paper-warm">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-ink-900">{heading}</h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-ink-600">{description}</p>
        ) : null}
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-ink-900/10 bg-white px-5 py-4"
            >
              <summary className="cursor-pointer list-none font-semibold text-ink-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span
                    className="mt-0.5 shrink-0 text-accent-600 transition group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
