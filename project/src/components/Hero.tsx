import { MapPin, ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import type { CreatorProfile } from '@/types';
import { PlatformGlyph } from './PlatformGlyph';
import { useLang, tr } from '@/i18n';
import { makeT } from '@/App';

export function Hero({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute -right-40 -top-20 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: 'radial-gradient(circle, #c54327, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-coral-500">
              <span className="h-px w-6 bg-coral-500" />
              {tr(creator.category, lang)}
            </div>
            <h1 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              {creator.displayName}
            </h1>
            <p className="mt-3 text-lg font-medium text-ink-soft">{tr(creator.headline, lang)}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
              <MapPin size={14} />
              {tr(creator.location, lang)}
            </p>

            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft">
              {tr(creator.bio, lang)}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {creator.platforms.map((p) => (
                <a
                  key={p.key}
                  href="#performance"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink-faint/30 bg-canvas-card px-3.5 py-2 text-sm font-medium text-ink-soft transition-all hover:border-ink/30 hover:shadow-soft"
                >
                  <PlatformGlyph platform={p.key} size={16} />
                  {p.label}
                  <span className="text-ink-muted">· {p.followers}</span>
                </a>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work-with-me"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-coral-500 px-6 text-[15px] font-semibold text-white shadow-soft transition-all hover:bg-coral-600 hover:shadow-lift active:scale-95"
              >
                {t('hero_work_with_me')}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#performance"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-faint/30 bg-canvas-card px-5 text-[15px] font-semibold text-ink-soft transition-all hover:border-ink/30"
              >
                {t('hero_see_performance')}
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-ink-faint/20 shadow-lift">
                <img
                  src={creator.avatar}
                  alt={creator.displayName}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-4 pt-16">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    {creator.positioning.slice(0, 2).map((pos, i) => (
                      <span
                        key={i}
                        className="text-[13px] font-medium text-white/90"
                      >
                        {tr(pos, lang)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-6 hidden rounded-2xl border border-ink-faint/20 bg-canvas-card/95 px-3.5 py-2.5 shadow-lift backdrop-blur-sm sm:block">
                <p className="text-[11px] font-medium uppercase tracking-wide text-ink-muted">
                  {t('hero_best_platform')}
                </p>
                <div className="mt-0.5 flex items-center gap-2">
                  <PlatformGlyph platform={creator.platforms[0].key} size={18} />
                  <span className="text-sm font-bold text-ink">
                    {creator.platforms[0].followers}
                  </span>
                </div>
              </div>

              <div className="absolute -right-3 bottom-20 hidden rounded-2xl border border-ink-faint/20 bg-canvas-card/95 px-3.5 py-2.5 shadow-lift backdrop-blur-sm lg:block">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-sage-600" />
                  <span className="text-[13px] font-semibold text-ink">{t('hero_source_verified')}</span>
                </div>
                <p className="mt-0.5 text-[11px] text-ink-muted">{t('hero_performance_data')}</p>
              </div>
            </div>
          </div>
        </div>

        {creator.positioning.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ink-faint/15 pt-6">
            {creator.positioning.map((pos, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft"
              >
                <span className="h-1 w-1 rounded-full bg-coral-400" />
                {tr(pos, lang)}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
