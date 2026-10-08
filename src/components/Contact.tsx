"use client";

import { useState } from "react";
import { SITE } from "@/content/profile";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <section id="contact" aria-labelledby="contact-h" className="mx-auto max-w-[1040px] scroll-mt-24 px-4 pt-16">
      <Reveal>
        <article aria-labelledby="contact-h" className="neu-raised p-6 text-center sm:p-8 md:p-12">
          <h2 id="contact-h" className="text-2xl font-bold md:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-2 text-xl font-semibold">Let&apos;s build something useful.</p>
          <p className="muted-text mx-auto mt-2 max-w-[55ch]">
            I reply fastest by email. Based in {SITE.location}.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={copy} className="neu-btn neu-btn-primary" aria-live="polite">
              {copied ? "Copied!" : "Copy email"}
            </button>
            <a href={SITE.resumePath} download className="neu-btn neu-btn-secondary">
              Download résumé (PDF)
            </a>
          </div>
          <p className="mt-5">
            <a className="green-text font-semibold underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <br />
            <a className="underline" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            {" · "}
            <a className="underline" href={SITE.linkedin} rel="noopener">
              LinkedIn
            </a>
            {" · "}
            <a className="underline" href={SITE.github} rel="noopener">
              GitHub
            </a>
          </p>
        </article>
      </Reveal>
    </section>
  );
}
