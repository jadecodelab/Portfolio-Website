import Link from "next/link";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/devlog", label: "Devlog" },
  { href: "/design", label: "Design" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-normal text-ink transition hover:text-signal">
          Ngoc Hui
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-signal">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}