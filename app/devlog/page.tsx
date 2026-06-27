import { DevlogCard } from "@/components/DevlogCard";
import { getAllDevlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Devlog | Ngoc Hui",
};

export default async function DevlogPage() {
  const posts = await getAllDevlogPosts();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
          Project Journal
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium text-ink">
          Devlog
        </h1>
        <p className="mt-5 text-lg leading-8 text-charcoal">
          My journey through The Odin Project, building small projects,
          practicing fundamentals, and documenting what I learn along the way.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
