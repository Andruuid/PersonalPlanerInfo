import type { Article } from "@/lib/articles";

type ArticleBodyProps = {
  article: Article;
};

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <div className="prose-content">
      <p className="text-lg leading-relaxed text-ink-700">{article.intro}</p>

      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {section.list ? (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section className="mt-10 rounded-xl border border-ink-900/10 bg-paper-warm p-5">
        <h2 className="mt-0 text-lg font-semibold text-ink-900">Das Wichtigste</h2>
        <p className="mt-2 text-ink-700">{article.takeaway}</p>
      </section>
    </div>
  );
}
