import type { CreatorProfile, PlatformKey } from '@/types';
import { PlatformGlyph } from './PlatformGlyph';
import { SectionHeader } from './Performance';
import { ArrowRight } from 'lucide-react';
import { useLang, tr } from '@/i18n';
import { makeT } from '@/App';
import type { Lang } from '@/i18n';

export function Services({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);

  if (creator.services.length === 0) {
    return (
      <section id="services" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('svc_eyebrow')}
          title={t('svc_empty_title')}
          description={t('svc_empty_desc')}
        />
      </section>
    );
  }

  return (
    <section id="services" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={t('svc_eyebrow')}
        title={t('svc_title')}
        description={t('svc_desc')}
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {creator.services.map((s, i) => (
          <ServiceCard
            key={s.id}
            service={s}
            delay={i * 50}
            lang={lang}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-coral-200 bg-coral-50 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-[15px] font-semibold text-ink">{t('svc_custom_title')}</p>
          <p className="mt-0.5 text-[13px] text-ink-soft">{t('svc_custom_desc')}</p>
        </div>
        <a
          href="#work-with-me"
          className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-coral-500 px-5 text-sm font-semibold text-white transition-all hover:bg-coral-600 active:scale-95"
        >
          {t('svc_start_inquiry')}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
  lang,
}: {
  service: CreatorProfile['services'][number];
  delay: number;
  lang: Lang;
}) {
  const t = makeT(lang);
  return (
    <div
      className="group flex animate-fade-up flex-col rounded-2xl border border-ink-faint/20 bg-canvas-card p-5 shadow-soft transition-all hover:border-coral-300 hover:shadow-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {service.platform !== 'multi' && (
            <PlatformGlyph platform={service.platform as PlatformKey} size={16} />
          )}
          <h4 className="text-[16px] font-bold tracking-tight text-ink">{tr(service.name, lang)}</h4>
        </div>
        {service.popular && (
          <span className="rounded-full bg-coral-50 px-2 py-0.5 text-[11px] font-semibold text-coral-600">
            {t('svc_popular')}
          </span>
        )}
      </div>

      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{tr(service.description, lang)}</p>

      <div className="mt-4 flex items-center gap-2 text-[12px] text-ink-muted">
        <span className="rounded-md bg-canvas-warm px-2 py-1 font-medium text-ink-soft">
          {tr(service.deliverable, lang)}
        </span>
      </div>

      <div className="mt-auto flex items-end justify-between pt-4">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-ink-muted">{t('svc_starting_from')}</p>
          <p className="text-xl font-extrabold tracking-tight text-ink">{service.startingPrice}</p>
        </div>
        <a
          href="#work-with-me"
          className="inline-flex h-9 items-center rounded-full border border-ink-faint/30 px-3.5 text-[13px] font-semibold text-ink-soft transition-all hover:border-coral-400 hover:text-coral-500"
        >
          {t('svc_inquire')}
        </a>
      </div>
    </div>
  );
}
