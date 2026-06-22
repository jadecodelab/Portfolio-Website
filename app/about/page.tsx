export const metadata = {
  title: "About | Ngoc Hui",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.04em] text-jade-soft">
            About
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-ink">
            Curious builder exploring full-stack development and AI.
          </h1>

          <div className="mt-6 space-y-5 text-lg leading-8 text-charcoal">
            <p>
              My name is Ngoc Hui, and you can also call me Jade. I'm a Computer
              Science student at California State University, East Bay, who
              enjoys coding and building practical software that makes everyday
              life easier and more enjoyable.
            </p>
            <p>
              My path into tech wasn't a straight line. Before pursuing computer
              science, I earned an Associate Degree in Animation from Berkeley
              City College and explored UX/UI design. I was fascinated by the
              ability to create interactive product experiences using tools like
              Figma and enjoyed thinking about how people interact with
              technology. As a naturally curious person who enjoys learning and
              challenging myself, I wanted to move beyond designing prototypes
              and learn how to build real products from the ground up. That
              motivation led me to continue my education in computer science.
            </p>
            <p>
              Today, I combine my design background with software development to
              create applications that are both functional and user-friendly. My
              experience in UX/UI design helps me think about the user
              experience, not just the code, allowing me to build software with
              clarity, usability, and thoughtful design in mind.
            </p>
            <p>
              I'm currently focused on full-stack development, AI-powered tools,
              and modern web technologies. As a strong academic student, I have
              maintained excellent performance in my computer science coursework
              while continuously expanding my skills through hands-on projects.
              Outside the classroom, I regularly practice problem-solving on
              LeetCode, work through The Odin Project, and build and deploy web
              applications, often using AI tools as learning assistants. My goal
              is to continue growing as a software engineer and contribute to
              practical, meaningful products that make a positive impact on
              people's lives.
            </p>
          </div>

          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-md bg-jade-deep px-4 py-2.5 text-center text-sm font-semibold text-cream transition hover:bg-ink"
          >
            View resume
          </a>
        </div>
      </div>
    </section>
  );
}
