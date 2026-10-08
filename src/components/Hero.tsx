import { SITE } from "@/content/profile";

export function Hero() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="mx-auto w-full max-w-[1040px] px-4 pt-12 text-center sm:px-6 md:pt-20"
    >
      <div className="mx-auto w-full max-w-[880px]">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="neu-raised-sm inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[#2E7D4F]" />
            {SITE.availability}
          </span>
          <span className="neu-raised-sm px-4 py-2 text-sm">{SITE.location}</span>
        </div>
        <h1
          id="intro-heading"
          className="mt-6 text-[2.6rem] leading-[1.05] font-bold text-balance break-words sm:text-5xl md:text-6xl"
        >
          Yahaya Abubakar
        </h1>
        <p className="green-text mx-auto mt-3 max-w-[70ch] text-lg font-semibold text-balance sm:text-xl md:text-2xl">
          Full-stack Developer, React, Rust, TypeScript, NestJS &amp; React Native
        </p>
        <p className="mx-auto mt-4 max-w-[68ch] text-lg text-balance md:text-xl">
          I build mobile apps and websites that are fast, clean, and easy to use.
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Highlights">
          {["3 years experience", "2 apps live on App Store & Play Store", "500+ downloads"].map((c) => (
            <li key={c} className="tag-plain rounded-full px-3 py-1.5 text-sm font-medium">
              {c}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-7 flex w-full max-w-[520px] flex-col gap-3 min-[420px]:flex-row min-[420px]:justify-center">
          <a href="#work" className="neu-btn neu-btn-primary w-full min-[420px]:w-auto">
            View my work
          </a>
          <a href={SITE.resumePath} download className="neu-btn neu-btn-secondary w-full min-[420px]:w-auto">
            Download résumé
          </a>
        </div>
        <p className="mx-auto mt-6 flex max-w-[68ch] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-base">
          <a
            className="inline-flex min-h-[44px] items-center gap-1.5 underline"
            href={`mailto:${SITE.email}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="break-all">{SITE.email}</span>
          </a>
          <span aria-hidden="true">·</span>
          <a className="inline-flex min-h-[44px] items-center underline" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          <span aria-hidden="true">·</span>
          <a
            className="inline-flex min-h-[44px] items-center gap-1.5 underline"
            href={SITE.linkedin}
            rel="noopener"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
            </svg>
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a
            className="inline-flex min-h-[44px] items-center gap-1.5 underline"
            href={SITE.github}
            rel="noopener"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
