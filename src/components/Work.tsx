import Link from "next/link";
import { projects } from "@/content/profile";
import { Reveal } from "./Reveal";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function Work() {
  return (
    <section id="work" aria-labelledby="work-h" className="mx-auto max-w-[1040px] scroll-mt-24 px-4 pt-16">
      <Reveal>
        <div className="flex flex-row items-baseline justify-between gap-3">
          <h2 id="work-h" className="text-xl font-bold sm:text-2xl md:text-3xl">
            Projects
          </h2>
          <Link
            href="/projects"
            aria-label="See more projects"
            className="green-text group inline-flex min-h-[44px] items-center gap-1 whitespace-nowrap px-2 text-sm font-semibold sm:text-base"
          >
            See more
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
        <p className="muted-text mt-2">Selected Work — three case studies.</p>
      </Reveal>
      <div className="mt-6 space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <article aria-labelledby={`${p.slug}-t`} className="neu-raised card-lift p-6 md:p-8">
              <h3 id={`${p.slug}-t`} className="text-xl font-bold md:text-2xl">
                {p.name}
              </h3>
              <p className="mt-1 text-sm">
                <span className="font-semibold">In plain English: </span>
                {p.summary}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
                {p.tech.map((t) => (
                  <li key={t} className="tag-plain rounded-full px-3 py-1 text-xs font-semibold">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="muted-text mt-3 text-sm">{p.period}</p>
              <Link
                href={`/work/${p.slug}`}
                className="green-text mt-4 inline-flex min-h-[44px] items-center font-semibold underline"
                aria-label={`Read case study: ${p.name}`}
              >
                Read case study →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
