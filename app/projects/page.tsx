import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/mdx";

export const metadata = {
  title: "Projects | Ngoc Hui",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-circuit">Main portfolio</p>
        <h1 className="mt-2 text-4xl font-bold tracking-normal text-ink">Dev and AI projects</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Full-stack applications, AI-powered tools, automation experiments, and systems built through coursework and self-directed practice.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
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
  );
}