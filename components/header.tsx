import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-ink-900/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group">
          <span className="block font-serif text-lg font-semibold tracking-tight text-ink-900">
            Mitarbeiterplaner
            <span className="text-accent-600">.info</span>
          </span>
          <span className="hidden text-xs text-ink-500 sm:block">{siteConfig.tagline}</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-ink-700">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
