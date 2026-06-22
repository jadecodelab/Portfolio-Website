import Link from "next/link";
import { notFound } from "next/navigation";
import { getDevlogPostNavigation } from "@/lib/devlog";
import { getAllDevlogPosts, getCompiledDevlogPostBySlug } from "@/lib/mdx";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export async function generateStaticParams() {
  const posts = await getAllDevlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getCompiledDevlogPostBySlug(slug);

  return {
    title: post ? `${post.frontmatter.title} | Ngoc Hui` : "Devlog | Ngoc Hui",
    description: post?.frontmatter.summary,
  };
}

export default async function DevlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getCompiledDevlogPostBySlug(slug);

  if (!post) notFound();

  const { previousPost, nextPost } = getDevlogPostNavigation(slug);

  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-6 lg:px-8">
      <Link
        href="/devlog"
        className="mb-5 inline-block text-sm font-semibold text-jade-deep transition hover:text-ink"
      >
        ← Back to devlog
      </Link>

      <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
        {formatDate(post.frontmatter.date)}
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink">
        {post.frontmatter.title}
      </h1>
      {post.frontmatter.summary ? (
        <p className="mt-5 text-lg leading-8 text-charcoal">
          {post.frontmatter.summary}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {post.frontmatter.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-jade-soft/40 px-2.5 py-1 text-xs font-medium text-jade-deep"
          >
            {tag}
          </span>
        ))}
      </div>

      {post.frontmatter.links.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          {post.frontmatter.links.map((link) => (
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

      <div className="mt-10 space-y-6 border-t border-ink/10 pt-10 text-base leading-7 text-charcoal [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink [&_p]:leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {post.content}
      </div>

      <nav
        aria-label="Devlog post navigation"
        className="mt-12 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2"
      >
        <div>
          {previousPost ? (
            <Link
              href={`/devlog/${previousPost.slug}`}
              className="text-sm font-semibold text-jade-deep transition hover:text-ink"
            >
              ← {previousPost.title}
            </Link>
          ) : null}
        </div>

        <div className="sm:text-right">
          {nextPost ? (
            <Link
              href={`/devlog/${nextPost.slug}`}
              className="text-sm font-semibold text-jade-deep transition hover:text-ink"
            >
              {nextPost.title} →
            </Link>
          ) : null}
        </div>
      </nav>
    </article>
  );
}
