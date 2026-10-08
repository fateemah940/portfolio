import { SKILLS } from "@/content/profile";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h" className="mx-auto max-w-[1040px] scroll-mt-24 px-4 pt-16">
      <Reveal>
        <h2 id="skills-h" className="text-2xl font-bold md:text-3xl">
          Skills
        </h2>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {SKILLS.map((g) => (
          <Reveal key={g.group}>
            <article aria-label={g.group} className="neu-raised p-6">
              <h3 className="text-lg font-bold">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s.name} className="tag-plain rounded-full px-3 py-1.5 text-sm">
                    {s.name}
                  </li>
                ))}
              </ul>
              {g.items.some((s) => s.plain) && (
                <details className="mt-4 text-sm">
                  <summary className="green-text min-h-[44px] cursor-pointer font-semibold">
                    In plain English
                  </summary>
                  <ul className="mt-2 space-y-1">
                    {g.items
                      .filter((s) => s.plain)
                      .map((s) => (
                        <li key={s.name}>
                          <strong>{s.name}:</strong> {s.plain}
                        </li>
                      ))}
                  </ul>
                </details>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
