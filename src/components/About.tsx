import { ABOUT } from "@/content/profile";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="mx-auto max-w-[1040px] scroll-mt-24 px-4 pt-16">
      <Reveal>
        <h2 id="about-h" className="text-2xl font-bold md:text-3xl">
          About
        </h2>
        <p className="mt-4 max-w-[65ch]">{ABOUT.summary}</p>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <Reveal>
          <article aria-label="How I work" className="neu-raised h-full p-6">
            <h3 className="font-bold">How I work</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px]">
              {ABOUT.howIWork.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.05}>
          <article aria-label="What I am looking for" className="neu-raised h-full p-6">
            <h3 className="font-bold">What I&apos;m looking for</h3>
            <p className="mt-2 text-[15px]">{ABOUT.lookingFor}</p>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article aria-label="Ask me about" className="neu-raised h-full p-6">
            <h3 className="font-bold">Ask me about</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px]">
              {ABOUT.askMeAbout.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
      <Reveal>
        <article aria-label="Education" className="neu-raised mt-5 p-6">
          <h3 className="text-lg font-bold">Education</h3>
          <p className="mt-2">
            {ABOUT.education.degree}, {ABOUT.education.school}
          </p>
          <p className="muted-text text-sm">
            <time dateTime="2022">2022</time> – <time dateTime="2026">2026</time>
          </p>
        </article>
      </Reveal>
    </section>
  );
}
