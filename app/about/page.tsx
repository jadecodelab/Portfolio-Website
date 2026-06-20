export const metadata = {
  title: "About | Ngoc Hui",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold text-circuit">About</p>
          <h1 className="mt-2 text-4xl font-bold tracking-normal text-ink">Developer with a design eye.</h1>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              My name is Ngoc Hui, and I also go by Jade. I am a Computer Science student in the Bay Area focused on full-stack development and AI agent workflows.
            </p>
            <p>
              I am building projects that help me strengthen programming fundamentals, system design, and product judgment while keeping the user experience clear and usable.
            </p>
          </div>
        </div>
        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-ink">Currently focused on</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>TypeScript and React with Next.js</li>
            <li>Python backends and practical data storage</li>
            <li>AI agents, tool use, and workflow automation</li>
            <li>UX/UI details that make software easier to use</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}