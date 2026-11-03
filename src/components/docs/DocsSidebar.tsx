"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav, docsPathname } from "@/lib/docs";

export function DocsSidebar() {
  const pathname = docsPathname(usePathname() ?? "/docs/");

  return (
    <nav aria-label="Docs" className="space-y-1">
      {docsNav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-xl px-3 py-2.5 transition-colors ${
              active
                ? "bg-signal/10 text-paper"
                : "text-mist hover:bg-panel/80 hover:text-paper"
            }`}
          >
            <span className="block text-sm font-semibold">{item.label}</span>
            <span className="mt-0.5 block text-xs leading-snug text-mist/90">
              {item.description}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
