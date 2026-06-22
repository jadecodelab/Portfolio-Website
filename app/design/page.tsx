const designProjects = [
  {
    title: "Delta Chi CSU East Bay",
    description:
      "Fraternity website for students to discover Delta Chi, join events, and stay connected.",
    thumbnail: "/design/delta-chi.avif",
    href: "https://www.behance.net/gallery/239356667/Delta-Chi-Fraternity-Website-UIUX-Design",
  },
  {
    title: "LOGO",
    description:
      "E-commerce mobile app concept focused on shopping flows and product discovery.",
    thumbnail: "/design/logo-app.avif",
    href: "https://www.behance.net/gallery/176480805/E-commerce-Mobile-App-LOGO",
  },
  {
    title: "Buddy",
    description:
      "Dog walking app concept for booking walks, managing pet details, and building trust.",
    thumbnail: "/design/buddy-app.avif",
    href: "https://www.behance.net/gallery/175395131/Buddy-Dog-Walking-App",
  },
  {
    title: "Mobile Legends",
    description:
      "Gaming community app concept for watching livestreams and following Mobile Legends content.",
    thumbnail: "/design/mobile-legends.avif",
    href: "https://www.behance.net/gallery/176711323/Mobile-Game-App-Mobile-Legends",
  },
];

export const metadata = {
  title: "Design | Ngoc Hui",
};

export default function DesignPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
          Design portfolio
        </p>
        <h1 className="mt-2 font-display text-4xl font-medium text-ink">
          UX/UI design
        </h1>
        <p className="mt-5 text-lg leading-8 text-charcoal">
          Selected UX/UI work from my design background. These are short
          previews only; Behance remains the source of truth for the full case
          studies.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {designProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-lg border border-ink/10 transition hover:border-jade-soft"
          >
            <img
              src={project.thumbnail}
              alt=""
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="p-5">
              <h2 className="font-display text-lg font-medium text-ink">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-charcoal">
                {project.description}
              </p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-jade-deep transition hover:text-ink"
              >
                View case study
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
