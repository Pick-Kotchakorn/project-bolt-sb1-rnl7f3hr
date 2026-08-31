import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import type { CreatorProfile } from '@/types';
import { useLang } from '@/i18n';
import { makeT } from '@/App';

export function Footer({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);

  return (
    <footer className="mt-20 border-t border-ink-faint/15">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-500 text-white">
                <ShieldCheck size={18} strokeWidth={2.5} />
              </span>
              <span className="text-[17px] font-extrabold tracking-tight text-ink">PROVENA</span>
            </a>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">{t('footer_tagline')}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            <a href="#performance" className="text-ink-soft transition-colors hover:text-coral-500">
              {t('nav_performance')}
            </a>
            <a href="#audience" className="text-ink-soft transition-colors hover:text-coral-500">
              {t('nav_audience')}
            </a>
            <a href="#campaigns" className="text-ink-soft transition-colors hover:text-coral-500">
              {t('nav_campaigns')}
            </a>
            <a href="#services" className="text-ink-soft transition-colors hover:text-coral-500">
              {t('nav_services')}
            </a>
            <a
              href={`/${creator.username}/proof`}
              className="text-ink-soft transition-colors hover:text-coral-500"
            >
              {t('nav_view_evidence')}
            </a>
            <a
              href="#work-with-me"
              className="text-ink-soft transition-colors hover:text-coral-500"
            >
              {t('nav_work_with_me')}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-ink-faint/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-[12px] text-ink-muted">{t('footer_copyright')}</p>
          <a
            href={`/${creator.username}`}
            className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-muted transition-colors hover:text-ink"
          >
            provena.co/{creator.username}
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA({ visible }: { visible: boolean }) {
  const { lang } = useLang();
  const t = makeT(lang);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink-faint/20 bg-canvas/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-ink">{t('sticky_title')}</p>
          <p className="truncate text-[11px] text-ink-muted">{t('sticky_sub')}</p>
        </div>
        <a
          href="#work-with-me"
          className="inline-flex h-11 shrink-0 items-center rounded-full bg-coral-500 px-5 text-sm font-semibold text-white active:scale-95"
        >
          {t('nav_work_with_me')}
        </a>
      </div>
    </div>
  );
}
