type DocsArticleProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
};

export function DocsArticle({
  eyebrow,
  title,
  lede,
  children,
}: DocsArticleProps) {
  return (
    <article className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.1] text-paper sm:text-5xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-4 text-lg leading-relaxed text-mist">{lede}</p>
      ) : null}
      <div className="mt-10 space-y-10">{children}</div>
    </article>
  );
}
