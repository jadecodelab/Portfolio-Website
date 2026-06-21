import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/mdx";

export default async function HomePage() {
  const featuredProjects = (await getAllProjects())
    .filter((project) => project.frontmatter.featured)
    .slice(0, 3);

  return (
    <div>
      <section className="border-b border-ink/10 bg-cream">
        <div className="mx-auto grid min-h-[78vh] max-w-6xl items-center gap-12 px-5 py-24 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
              Computer Science student
            </p>
            <h1 className="mt-5 max-w-[480px] font-display text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
              Computer Science student building{" "}
              <span className="text-jade-deep">full-stack apps</span> — with a
              design background that shapes how I build.
            </h1>
            <p className="mt-6 max-w-[420px] text-lg leading-8 text-charcoal">
              I am Ngoc Hui, also known as Jade. I build web apps, automation
              tools, and AI-powered projects with a design background that helps
              me care about the user-facing details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-md bg-jade-deep px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-ink"
              >
                View Projects
              </Link>
              <Link
                href="/devlog"
                className="rounded-md border border-jade-deep px-4 py-2.5 text-sm font-semibold text-jade-deep transition hover:bg-jade-deep hover:text-cream"
              >
                View Devlog
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="grid gap-3 text-sm text-slate-700">
              <div className="rounded-md bg-white p-4 shadow-sm">
                <p className="font-semibold text-ink">Current focus</p>
                <p className="mt-1">
                  Full-stack apps, AI agents, and reliable product workflows.
                </p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <p className="font-semibold text-ink">Core stack</p>
                <p className="mt-1">
                  TypeScript, Python, React, Next.js, Flask, SQLite, OpenAI
                  APIs.
                </p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <p className="font-semibold text-ink">Differentiator</p>
                <p className="mt-1">
                  UX/UI design experience grounded in practical engineering
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-circuit">
              Featured projects
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-normal text-ink">
              Full-stack and AI builds
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-signal transition hover:text-circuit"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.frontmatter.title}
              summary={project.frontmatter.summary}
              tags={project.frontmatter.tags}
              stack={project.frontmatter.stack}
              links={project.frontmatter.links}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
