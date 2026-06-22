const links = [
  { href: "mailto:nhui2@horizon.csueastbay.edu", label: "Email" },
  { href: "https://github.com/jadecodelab", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ngoc-hui",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-cream sm:mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm leading-6 text-charcoal sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; 2026 Ngoc Hui</p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-medium text-charcoal transition hover:text-jade-deep"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
