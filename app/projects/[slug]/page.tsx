import { notFound } from "next/navigation";
import { getAllProjects, getCompiledProjectBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getCompiledProjectBySlug(slug);

  return {
    title: project ? `${project.frontmatter.title} | Ngoc Hui` : "Project | Ngoc Hui",
    description: project?.frontmatter.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getCompiledProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-circuit">Project case study</p>
      <h1 className="mt-2 text-4xl font-bold tracking-normal text-ink">{project.frontmatter.title}</h1>
      {project.frontmatter.summary ? <p className="mt-5 text-lg leading-8 text-slate-600">{project.frontmatter.summary}</p> : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {project.frontmatter.stack.map((item) => (
          <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
        {project.frontmatter.links.map((link) => (
          <a key={`${link.label}-${link.href}`} href={link.href} target="_blank" rel="noreferrer" className="text-circuit transition hover:text-signal">
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-6 border-t border-slate-200 pt-10 text-base leading-8 text-slate-700 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {project.content}
      </div>
    </article>
  );
}