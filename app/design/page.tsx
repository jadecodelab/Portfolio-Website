export const metadata = {
  title: "Design | Ngoc Hui",
};

export default function DesignPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-circuit">Secondary portfolio</p>
      <h1 className="mt-2 text-4xl font-bold tracking-normal text-ink">UX/UI design</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Design work supports the developer portfolio by showing product thinking, visual systems, and user-centered decision making.
      </p>
      <a
        href="https://www.behance.net/"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-signal"
      >
        Behance
      </a>
    </section>
  );
}