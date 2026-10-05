import { Cta } from "@/components/Cta";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-mist">{site.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-mist hover:text-paper">
                {item.label}
              </a>
            ))}
          </nav>
          <Cta href={site.cta.href}>{site.cta.label}</Cta>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[90rem] text-xs text-mist">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
