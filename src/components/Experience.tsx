import { EXPERIENCE } from "@/content/profile";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="mx-auto max-w-[1040px] scroll-mt-24 px-4 pt-16">
      <Reveal>
        <h2 id="exp-h" className="text-2xl font-bold md:text-3xl">
          Work Experience
        </h2>
      </Reveal>
      <div className="mt-6 space-y-5">
        {EXPERIENCE.map((e) => (
          <Reveal key={`${e.title}-${e.company}-${e.start}`}>
            <article
              aria-label={`${e.title} at ${e.company}`}
              className={`rounded-3xl p-6 ${e.muted ? "opacity-80" : "neu-raised"}`}
              style={e.muted ? { border: "1px solid rgba(30,42,34,0.08)" } : undefined}
            >
              <h3 className="text-lg font-bold">
                {e.title} — {e.company}
              </h3>
              <p className="muted-text text-sm">
                <time dateTime={e.startIso}>{e.start}</time> – <time dateTime={e.endIso}>{e.end}</time>
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
