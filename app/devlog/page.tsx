import { DevlogCard } from "@/components/DevlogCard";
import { getAllDevlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Devlog | Ngoc Hui",
};

export default async function DevlogPage() {
  const posts = await getAllDevlogPosts();

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
          Build notes
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium text-ink">
          Devlog
        </h1>
        <p className="mt-5 text-lg leading-8 text-charcoal">
          Short notes on projects, bugs, architecture decisions, and what I am
          learning while building.
        </p>
      </div>
      <div className="mt-10 grid gap-5">
        {posts.map((post) => (
          <DevlogCard
            key={post.slug}
            slug={post.slug}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            summary={post.frontmatter.summary}
            tags={post.frontmatter.tags}
            links={post.frontmatter.links}
          />
        ))}
      </div>
    </section>
  );
}
