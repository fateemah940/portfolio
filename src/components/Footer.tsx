import { SITE } from "@/content/profile";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mx-auto max-w-[1040px] px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <p>
          © {year} {SITE.name}. Built with Next.js.{" "}
          <a href="/projects" className="green-text font-semibold underline">
            All projects
          </a>
        </p>
        <a href="#top" className="green-text font-semibold underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
