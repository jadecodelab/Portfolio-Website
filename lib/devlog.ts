export type OrderedDevlogPost = {
  slug: string;
  title: string;
};

export const orderedDevlogPosts = [
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
  },
  {
    slug: "jade-journal",
    title: "Jade Journal",
  },
  {
    slug: "sign-up-form",
    title: "Intermediate HTML & CSS: Sign-up Form",
  },
  {
    slug: "odin-foundations-calculator",
    title: "Finished The Odin Project Foundations",
  },
  {
    slug: "etch-a-sketch",
    title: "Etch-a-Sketch",
  },
] as const satisfies readonly OrderedDevlogPost[];

export function getDevlogPostNavigation(slug: string) {
  const currentIndex = orderedDevlogPosts.findIndex(
    (post) => post.slug === slug,
  );

  return {
    previousPost:
      currentIndex > 0 ? orderedDevlogPosts[currentIndex - 1] : null,
    nextPost:
      currentIndex >= 0 && currentIndex < orderedDevlogPosts.length - 1
        ? orderedDevlogPosts[currentIndex + 1]
        : null,
  };
}
