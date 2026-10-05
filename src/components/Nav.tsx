"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Cta } from "@/components/Cta";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="rounded-full" aria-label={`${site.name} home`} onClick={close}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-mist transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Cta href={site.cta.href} hideBelowMd>
            {site.cta.label}
          </Cta>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      </header>
      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto border-t border-line bg-ink px-5 py-6 lg:hidden"
        >
          <nav className="mx-auto flex max-w-lg flex-col" aria-label="Mobile">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex min-h-12 items-center border-b border-line/80 text-lg text-paper"
              >
                {item.label}
              </a>
            ))}
            <Cta href={site.cta.href} className="mt-6 w-full" onClick={close}>
              {site.cta.label}
            </Cta>
          </nav>
        </div>
      ) : null}
    </>
  );
}
