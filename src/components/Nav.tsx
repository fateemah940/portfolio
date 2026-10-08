"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/content/profile";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("work");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-3">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-3 px-4"
      >
        <a
          href="#top"
          className="neu-raised-sm px-4 py-2 text-sm font-bold"
          aria-label="Back to top — Yahaya Abubakar"
        >
          YA
        </a>
        <div className="neu-raised-sm flex flex-wrap items-center gap-1 p-1.5">
          {LINKS.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-shadow ${
                  isActive ? "neu-inset green-text" : "hover:underline"
                }`}
                style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}
              >
                {l.label}
              </a>
            );
          })}
        </div>
        <a href={SITE.resumePath} className="neu-btn neu-btn-secondary hidden !py-2 text-sm md:inline-flex">
          Résumé
        </a>
      </nav>
    </header>
  );
}
