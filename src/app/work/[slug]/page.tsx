import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, SITE } from "@/content/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  const url = `${SITE.url}/work/${p.slug}`;
  return {
    title: `${p.name} — Case Study | ${SITE.name}`,
    description: `${p.name}: ${p.plainEnglish}`,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.name} — Case Study`,
      description: p.plainEnglish,
      url,
      type: "article",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: p.name }],
    },
    twitter: { card: "summary_large_image", title: `${p.name} — Case Study`, description: p.plainEnglish },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    description: p.overview,
    applicationCategory: "MobileApplication",
    operatingSystem: "iOS, Android",
    author: { "@type": "Person", name: SITE.name },
  };

  return (
    <div id="top">
      <Nav />
      <main id="main" className="mx-auto max-w-[1040px] px-4 pt-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <p>
          <Link href="/#work" className="green-text font-semibold underline">
            ← Back to work
          </Link>
        </p>
        <h1 className="mt-4 text-3xl font-bold md:text-5xl">{p.name}</h1>
        <p className="mt-2 text-lg">
          <strong>In plain English:</strong> {p.plainEnglish}
        </p>
        <p className="muted-text mt-1 text-sm">{p.period}</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
          {p.tech.map((t) => (
            <li key={t} className="tag-plain rounded-full px-3 py-1 text-xs font-semibold">
              {t}
            </li>
          ))}
        </ul>

        <article className="neu-raised mt-6 space-y-6 p-6 md:p-8">
          <section aria-labelledby="ov">
            <h2 id="ov" className="text-xl font-bold">Overview</h2>
            <p className="mt-2">{p.overview}</p>
          </section>
          <section aria-labelledby="role">
            <h2 id="role" className="text-xl font-bold">My role</h2>
            <p className="mt-2">{p.role}</p>
          </section>
          <section aria-labelledby="prob">
            <h2 id="prob" className="text-xl font-bold">The problem</h2>
            <p className="mt-2">{p.problem}</p>
          </section>
          <section aria-labelledby="built">
            <h2 id="built" className="text-xl font-bold">What I built</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {p.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="tech">
            <h2 id="tech" className="text-xl font-bold">Tech used</h2>
            <p className="mt-2">{p.tech.join(", ")}</p>
          </section>
          <section aria-labelledby="out">
            <h2 id="out" className="text-xl font-bold">Outcome</h2>
            <p className="mt-2">{p.outcome}</p>
          </section>
          <section aria-labelledby="next">
            <h2 id="next" className="text-xl font-bold">What I&apos;d improve next</h2>
            <p className="mt-2">{p.improveNext}</p>
          </section>
          {p.slug === "web3-vending" && (
            <section aria-labelledby="flow">
              <h2 id="flow" className="text-xl font-bold">How it works</h2>
              <ol className="mt-3 flex flex-col gap-2 md:flex-row md:items-center">
                {["Log in with Privy", "Pay USDC via Solana Pay", "Verify on Solana", "Get OTP", "Collect item"].map((s, i, arr) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="neu-inset rounded-full px-4 py-2 text-sm font-semibold">{s}</span>
                    {i < arr.length - 1 && (
                      <span aria-hidden="true" className="green-text font-bold">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}
          {p.slug === "sabi-ride" && (
            <section aria-labelledby="links">
              <h2 id="links" className="text-xl font-bold">Links</h2>
              <p className="mt-2">[ADD: App Store link] · [ADD: Play Store link]</p>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
