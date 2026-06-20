import Link from "next/link";
import type { ContentLink } from "@/lib/mdx";

type DevlogCardProps = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  links?: ContentLink[];
};

function formatDate(date: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function DevlogCard({
  slug,
  title,
  date,
  summary,
  tags = [],
  links = [],
}: DevlogCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-normal text-circuit">
        {formatDate(date)}
      </p>
      <Link href={`/devlog/${slug}`} className="group mt-2 inline-block">
        <h3 className="text-lg font-semibold text-ink transition group-hover:text-signal">
          {title}
        </h3>
      </Link>
      {summary ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
      ) : null}
      {tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800"
            >
              {tag}
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
