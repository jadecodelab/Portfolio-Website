import { DevlogCard } from "@/components/DevlogCard";
import { getAllDevlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Devlog | Ngoc Hui",
};

export default async function DevlogPage() {
  const posts = await getAllDevlogPosts();

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-circuit">Build notes</p>
        <h1 className="mt-2 text-4xl font-bold tracking-normal text-ink">Devlog</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Short notes on projects, bugs, architecture decisions, and what I am learning while building.
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
          />
        ))}
      </div>
    </section>
  );
}