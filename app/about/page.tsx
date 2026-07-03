const contactLinks = [
  { href: "mailto:nhui2@horizon.csueastbay.edu", label: "Email" },
  { href: "https://github.com/jadecodelab", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ngoc-hui", label: "LinkedIn" },
];

export const metadata = {
  title: "About | Ngoc Hui",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
        About
      </p>
      <h1 className="mt-2 font-display text-4xl font-medium text-ink">
        Curious builder exploring full-stack development and AI.
      </h1>
      <p className="mt-5 text-lg leading-8 text-charcoal">
        My name is Ngoc Hui, and you can also call me Jade. I'm a Computer
        Science student at California State University, East Bay, who enjoys
        building full-stack apps that make everyday life easier and more
        enjoyable.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-jade-deep px-4 py-2.5 text-center text-cream transition hover:bg-ink"
        >
          View resume
        </a>
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="text-jade-deep transition hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-6 border-t border-ink/10 pt-10 text-base leading-7 text-charcoal [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink [&_p]:leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        <section>
          <h2>How I got here</h2>
          <p className="mt-4">
            My path into tech wasn't a straight line. Before pursuing computer
            science, I earned an Associate Degree in Animation from Berkeley
            City College and explored UX/UI design. I was fascinated by the
            ability to create interactive product experiences using tools like
            Figma and enjoyed thinking about how people interact with
            technology.
          </p>
          <p className="mt-4">
            As a naturally curious person who enjoys learning and challenging
            myself, I wanted to move beyond designing prototypes and learn how
            to build real products from the ground up. That motivation led me to
            continue my education in computer science.
          </p>
        </section>

        <section>
          <h2>How I build</h2>
          <p className="mt-4">
            Today, I combine my design background with software development to
            create applications that are both functional and user-friendly. My
            experience in UX/UI design helps me think about the user experience,
            allowing me to build software with clarity, usability, and
            thoughtful design in mind.
          </p>
        </section>

        <section>
          <h2>What I'm building toward</h2>
          <p className="mt-4">
            I'm currently focused on full-stack development, AI-powered tools,
            and modern web technologies. I regularly practice problem-solving on
            LeetCode, work through The Odin Project, and build and deploy web
            applications, often using AI tools as learning assistants.
          </p>
          <p className="mt-4">
            I'm actively looking for opportunities to contribute to a real team
            - internships, junior roles, or collaborative projects. If something
            here resonates, I'd love to connect.
          </p>
        </section>
      </div>
    </article>
  );
}
