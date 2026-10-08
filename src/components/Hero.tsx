import { SITE } from "@/content/profile";

export function Hero() {
  return (
    <section aria-labelledby="intro-heading" className="mx-auto max-w-[1040px] px-4 pt-12 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="neu-raised-sm inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">
              <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-[#2E7D4F]" />
              {SITE.availability}
            </span>
            <span className="neu-raised-sm px-4 py-2 text-sm">{SITE.location}</span>
          </div>
          <h1 id="intro-heading" className="mt-6 text-4xl font-bold md:text-6xl">
            Yahaya Abubakar
          </h1>
          <p className="green-text mt-3 text-lg font-semibold md:text-xl">
            Full-stack Developer, React, Rust, TypeScript, NestJS &amp; React Native
          </p>
          <p className="mt-4 text-lg">
            I build mobile apps and websites that are fast, clean, and easy to use.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
            {["3 years experience", "2 apps live on App Store & Play Store", "500+ downloads"].map((c) => (
              <li key={c} className="tag-plain rounded-full px-3 py-1.5 text-sm font-medium">
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#work" className="neu-btn neu-btn-primary">
              View my work
            </a>
            <a href={SITE.resumePath} download className="neu-btn neu-btn-secondary">
              Download résumé
            </a>
          </div>
          <p className="mt-6 text-base">
            <a className="underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            {" · "}
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
        </div>
        {/* <div className="hidden justify-center md:flex" aria-hidden="true">
          <div className="neu-raised w-[240px] animate-[float_5s_ease-in-out_infinite] p-4">
            <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
            <p className="text-sm font-bold">Sabi Ride</p>
            <p className="muted-text text-xs"> simplified preview</p>
            <div className="neu-inset mt-3 rounded-2xl p-3">
              <div className="h-2 w-2/3 rounded-full bg-[#1F5A33]" />
              <p className="mt-2 text-xs font-semibold">Find your ride</p>
              <div className="mt-2 rounded-xl bg-[#2E7D4F] px-3 py-2 text-center text-xs font-bold text-white">
                Request ride
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-8 rounded-lg bg-[rgba(46,125,79,0.12)]" />
                <div className="h-8 rounded-lg bg-[rgba(46,125,79,0.12)]" />
                <div className="h-16 rounded-lg border border-[rgba(30,42,34,0.08)]" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
