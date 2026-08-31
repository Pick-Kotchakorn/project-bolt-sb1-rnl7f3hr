import { useEffect, useState } from 'react';
import { ShieldCheck, Menu, X, Languages } from 'lucide-react';
import { useLang } from '@/i18n';
import { ui } from '@/strings';
import { makeT } from '@/App';

export function TopBar({ username }: { username: string }) {
  const { lang, toggle } = useLang();
  const t = makeT(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t('nav_performance'), href: '#performance' },
    { label: t('nav_audience'), href: '#audience' },
    { label: t('nav_campaigns'), href: '#campaigns' },
    { label: t('nav_services'), href: '#services' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-faint/20 bg-canvas/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-500 text-white">
            <ShieldCheck size={18} strokeWidth={2.5} />
          </span>
          <span className="text-[17px] font-extrabold tracking-tight text-ink">PROVENA</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-coral-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-ink-faint/30 px-2.5 text-[13px] font-semibold text-ink-soft transition-all hover:border-ink/30"
            aria-label="Switch language"
          >
            <Languages size={15} />
            <span className="tabular-nums">{ui.lang_label[lang]}</span>
          </button>
          <a
            href={`/${username}/proof`}
            className="hidden text-sm font-medium text-ink-soft transition-colors hover:text-ink lg:inline-flex"
          >
            {t('nav_view_evidence')}
          </a>
          <a
            href="#work-with-me"
            className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-sm font-semibold text-white transition-all hover:bg-coral-500 active:scale-95"
          >
            {t('nav_work_with_me')}
          </a>
          <button
            type="button"
            aria-label={t('nav_toggle_menu')}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-ink-faint/20 bg-canvas/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-content flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-canvas-warm"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`/${username}/proof`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-canvas-warm"
            >
              {t('nav_view_evidence')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
