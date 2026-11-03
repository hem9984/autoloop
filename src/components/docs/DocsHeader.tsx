import { Cta } from "@/components/Cta";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function DocsHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-6">
          <a href="/" className="rounded-full" aria-label={`${site.name} home`}>
            <Logo />
          </a>
          <span className="hidden font-mono text-xs uppercase tracking-[0.22em] text-signal sm:inline">
            Docs
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/#quickstart"
            className="hidden text-sm text-mist transition-colors hover:text-paper sm:inline"
          >
            Quickstart
          </a>
          <Cta href={site.cta.href}>{site.cta.label}</Cta>
        </div>
      </div>
    </header>
  );
}
