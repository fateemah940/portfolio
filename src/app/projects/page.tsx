import type { Metadata } from "next";
import Link from "next/link";
import { projects, SITE } from "@/content/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects | Yahaya Abubakar, Frontend Engineer",
  description:
    "Everything Yahaya Abubakar has built, from published React Native mobile apps on the App Store and Play Store to NestJS and Supabase backend APIs.",
  alternates: { canonical: `${SITE.url}/projects` },
  openGraph: {
    title: "Projects | Yahaya Abubakar, Frontend Engineer",
    description:
      "Published mobile apps, car marketplace MVP, Solana Pay vending payments, and backend APIs.",
    url: `${SITE.url}/projects`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Projects — Yahaya Abubakar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Yahaya Abubakar, Frontend Engineer",
    description:
      "Published mobile apps, car marketplace MVP, Solana Pay vending payments, and backend APIs.",
    images: ["/og.png"],
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.name,
      description: p.summary,
      applicationCategory: "MobileApplication",
      operatingSystem: "iOS, Android",
    },
  })),
};

export default function ProjectsPage() {
  const showSoonTile = projects.length % 2 === 1;
  return (
    <div id="top">
      <Nav />
      <main id="main" className="mx-auto max-w-[1040px] px-4 pt-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <p>
          <Link href="/" className="green-text inline-flex min-h-[44px] items-center font-semibold underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">Projects</h1>
        <p className="mt-3 max-w-[65ch] text-lg">
          Everything I&apos;ve built, from published mobile apps to backend APIs.
        </p>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <article
                aria-labelledby={`${p.slug}-name`}
                className="neu-raised card-lift flex h-full flex-col p-6 md:p-7"
              >
                <h2 id={`${p.slug}-name`} className="text-xl font-bold">
                  {p.caseStudy ? (
                    <Link href={`/work/${p.slug}`} className="underline-offset-4 hover:underline">
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                </h2>
                <p className="muted-text mt-1 text-sm">
                  {p.period} · {p.type}
                </p>
                <p className="mt-2 text-[15px]">
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
                <div className="mt-auto pt-4">
                  {p.caseStudy ? (
                    <Link
                      href={`/work/${p.slug}`}
                      aria-label={`Read case study: ${p.name}`}
                      className="green-text inline-flex min-h-[44px] items-center font-semibold underline"
                    >
                      Read case study →
                    </Link>
                  ) : (
                    <p className="text-sm">[ADD: case study link for {p.name}]</p>
                  )}
                  {p.links && p.links.length > 0 ? (
                    <p className="mt-1 text-sm">
                      {p.links.map((l, j) => (
                        <span key={l.label}>
                          {j > 0 && " · "}
                          <a href={l.href} rel="noopener noreferrer" className="underline">
                            {l.label}
                          </a>
                        </span>
                      ))}
                    </p>
                  ) : (
                    <p className="muted-text mt-1 text-sm">[ADD: project links for {p.name}]</p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
          {showSoonTile && (
            <div className="neu-inset flex min-h-[200px] flex-col items-center justify-center rounded-3xl p-6 text-center">
              <p className="font-bold">[ADD: next project]</p>
              <p className="muted-text mt-1 text-sm">More coming soon.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
