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
    <article className="flex h-full flex-col rounded-lg border border-ink/10 bg-cream p-5 transition hover:border-jade-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
        {formatDate(date)}
      </p>
      <Link href={`/devlog/${slug}`} className="group mt-2 inline-block">
        <h3 className="font-display text-lg font-medium text-ink transition group-hover:text-jade-deep">
          {title}
        </h3>
      </Link>
      {summary ? (
        <p className="mt-3 text-sm leading-6 text-charcoal">{summary}</p>
      ) : null}
      {tags.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-jade-soft/40 px-2.5 py-1 text-xs font-medium text-jade-deep"
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
              className="text-jade-deep transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
