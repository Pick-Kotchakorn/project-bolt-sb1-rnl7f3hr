import { useState } from 'react';
import { ArrowUpRight, Check, Info } from 'lucide-react';
import type { CreatorProfile, PlatformKey, VerificationState } from '@/types';
import { PlatformGlyph } from './PlatformGlyph';
import { VerificationBadge, verificationConfig } from './VerificationBadge';
import { useLang, tr, type LocaleString, type Lang } from '@/i18n';
import { makeT } from '@/App';

type Filter = 'all' | PlatformKey;

export function Performance({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);
  const [filter, setFilter] = useState<Filter>('all');

  if (creator.metrics.length === 0) {
    return (
      <section id="performance" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('perf_eyebrow')}
          title={t('perf_empty_title')}
          description={t('perf_empty_desc')}
        />
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-ink-faint/40 bg-canvas-warm p-5">
          <Info size={18} className="text-ink-muted" />
          <p className="text-sm text-ink-muted">{t('perf_empty_note')}</p>
        </div>
      </section>
    );
  }

  const platformsPresent = Array.from(new Set(creator.metrics.map((m) => m.platform)));
  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('perf_all_platforms') },
    ...platformsPresent.map((p) => ({
      key: p,
      label: creator.platforms.find((pl) => pl.key === p)?.label ?? p,
    })),
  ];

  const filtered =
    filter === 'all' ? creator.metrics : creator.metrics.filter((m) => m.platform === filter);

  const verifiedCount = creator.metrics.filter(
    (m) => m.verification === 'SOURCE_VERIFIED',
  ).length;

  const verifiedText = t('perf_verified_count')
    .replace('{verified}', String(verifiedCount))
    .replace('{total}', String(creator.metrics.length));
  const updatedText = t('perf_updated').replace('{date}', creator.lastUpdated);

  return (
    <section id="performance" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={t('perf_eyebrow')}
        title={t('perf_title')}
        description={t('perf_desc')}
      />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                filter === f.key
                  ? 'bg-ink text-white'
                  : 'border border-ink-faint/30 text-ink-soft hover:border-ink/30'
              }`}
            >
              {f.key !== 'all' && <PlatformGlyph platform={f.key} size={14} />}
              {f.label}
            </button>
          ))}
        </div>
        <a
          href={`/${creator.username}/proof`}
          className="group inline-flex items-center gap-1 text-sm font-semibold text-coral-500 transition-colors hover:text-coral-600"
        >
          {t('perf_view_evidence')}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((m, i) => (
          <MetricCard
            key={`${tr(m.label, lang)}-${m.platform}`}
            metric={m}
            delay={i * 50}
            username={creator.username}
            lang={lang}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sage-200 bg-sage-50 px-4 py-3">
        <p className="flex items-center gap-2 text-[13px] font-medium text-sage-700">
          <Check size={15} className="text-sage-600" strokeWidth={2.5} />
          {verifiedText}
        </p>
        <span className="text-[12px] text-ink-muted">{updatedText}</span>
      </div>
    </section>
  );
}

function MetricCard({
  metric,
  delay,
  username,
  lang,
}: {
  metric: {
    label: LocaleString;
    value: string;
    sublabel?: LocaleString;
    verification: VerificationState;
    platform: PlatformKey;
  };
  delay: number;
  username: string;
  lang: Lang;
}) {
  const t = makeT(lang);
  const c = verificationConfig[metric.verification];
  const { Icon } = c;

  return (
    <div
      className="group animate-fade-up rounded-2xl border border-ink-faint/20 bg-canvas-card p-4 shadow-soft transition-all hover:shadow-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[13px] font-medium text-ink-muted">{tr(metric.label, lang)}</span>
        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${c.container} ${c.icon}`}>
          <Icon size={13} strokeWidth={2.25} />
        </span>
      </div>
      <p className="mt-2 text-[28px] font-extrabold leading-none tracking-tight text-ink">
        {metric.value}
      </p>
      {metric.sublabel && (
        <p className="mt-1.5 text-[12px] text-ink-muted">{tr(metric.sublabel, lang)}</p>
      )}
      <div className="mt-3 flex items-center justify-between border-t border-ink-faint/15 pt-2.5">
        <VerificationBadge state={metric.verification} size="sm" />
        <a
          href={`/${username}/proof#${metric.platform}`}
          className="text-[11px] font-semibold text-ink-muted opacity-0 transition-opacity hover:text-coral-500 group-hover:opacity-100"
        >
          {t('perf_view_proof')}
        </a>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral-500">{eyebrow}</p>
      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}
