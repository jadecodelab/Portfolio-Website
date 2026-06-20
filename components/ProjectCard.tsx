import Link from "next/link";
import type { ContentLink } from "@/lib/mdx";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary?: string;
  tags?: string[];
  stack?: string[];
  links?: ContentLink[];
};

export function ProjectCard({ slug, title, summary, tags = [], stack = [], links = [] }: ProjectCardProps) {
  const chips = stack.length > 0 ? stack : tags;

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex-1">
        <Link href={`/projects/${slug}`} className="group inline-block">
          <h3 className="text-lg font-semibold text-ink transition group-hover:text-signal">{title}</h3>
        </Link>
        {summary ? <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p> : null}
      </div>

      {chips.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              {chip}
            </span>
          ))}
        </div>
      ) : null}

      {links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-circuit transition hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}