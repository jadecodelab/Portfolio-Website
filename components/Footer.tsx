const links = [
  { href: "mailto:nhui2@horizon.csueastbay.edu", label: "Email" },
  { href: "https://github.com/jadecodelab", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ngoc-hui",
    label: "LinkedIn",
  },
  { href: "chjade.427@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; 2026 Ngoc Hui</p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-medium transition hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
