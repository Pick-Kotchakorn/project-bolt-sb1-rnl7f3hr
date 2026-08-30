import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Verification', href: '#verification' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-ink-900/5 shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" aria-label="PROVENA home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-ink-50 shadow-soft transition-all hover:bg-ink-800 hover:shadow-card"
          >
            Claim your PROVENA
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-900/5 bg-ink-50 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-700"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-ink-900/5 pt-3">
              <a href="#" className="text-sm font-medium text-ink-600">
                Log in
              </a>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="rounded-full bg-ink-900 px-5 py-2.5 text-center text-sm font-semibold text-ink-50"
              >
                Claim your PROVENA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
