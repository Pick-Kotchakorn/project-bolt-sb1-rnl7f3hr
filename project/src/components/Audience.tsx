import type { CreatorProfile } from '@/types';
import { SectionHeader } from './Performance';
import { useLang, tr } from '@/i18n';
import { makeT } from '@/App';

export function Audience({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);
  const { audience } = creator;

  const hasMinimalData =
    audience.topLocations.length <= 1 && audience.topInterests.length <= 1;

  return (
    <section id="audience" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={t('aud_eyebrow')}
        title={t('aud_title')}
        description={hasMinimalData ? t('aud_desc_minimal') : t('aud_desc_full')}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-ink-faint/20 bg-canvas-card p-5 shadow-soft">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-semibold text-ink">{t('aud_primary_age')}</h3>
          </div>
          <p className="mt-3 text-4xl font-extrabold tracking-tight text-ink">
            {audience.primaryAgeGroup}
          </p>
          <p className="mt-1 text-[13px] text-ink-muted">{t('aud_age_desc')}</p>

          <div className="mt-5">
            <p className="mb-2 text-[13px] font-medium text-ink-soft">{t('aud_gender')}</p>
            <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-canvas-deep">
              {audience.genderSplit.map((g, i) => (
                <div
                  key={i}
                  className={`bar-grow h-full ${i === 0 ? 'bg-coral-500' : i === 1 ? 'bg-ink' : 'bg-ink-faint'}`}
                  style={{ width: `${g.pct}%`, animationDelay: `${i * 100}ms` }}
                  title={`${tr(g.label, lang)}: ${g.pct}%`}
                />
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
              {audience.genderSplit.map((g, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[12px] text-ink-soft">
                  <span
                    className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-coral-500' : i === 1 ? 'bg-ink' : 'bg-ink-faint'}`}
                  />
                  {tr(g.label, lang)} <span className="font-semibold">{g.pct}%</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-ink-faint/20 bg-canvas-card p-5 shadow-soft">
          <h3 className="text-sm font-semibold text-ink">{t('aud_top_locations')}</h3>
          <ul className="mt-4 space-y-3">
            {audience.topLocations.map((loc, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-[13px] font-medium text-ink-soft">
                  {tr(loc.label, lang)}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas-deep">
                  <div
                    className="bar-grow h-full rounded-full bg-coral-400"
                    style={{ width: `${loc.pct}%`, animationDelay: `${i * 80}ms` }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right text-[13px] font-semibold text-ink">
                  {loc.pct}%
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-ink-faint/20 bg-canvas-card p-5 shadow-soft">
          <h3 className="text-sm font-semibold text-ink">{t('aud_interests')}</h3>
          <ul className="mt-4 space-y-3">
            {audience.topInterests.map((intr, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-28 shrink-0 text-[13px] font-medium text-ink-soft">
                  {tr(intr.label, lang)}
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-canvas-deep">
                  <div
                    className="bar-grow h-full rounded-full bg-sage-400"
                    style={{ width: `${intr.pct}%`, animationDelay: `${i * 80}ms` }}
                  />
                </div>
                <span className="w-9 shrink-0 text-right text-[13px] font-semibold text-ink">
                  {intr.pct}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <VerificationKey />
      </div>
    </section>
  );
}

function VerificationKey() {
  const { lang } = useLang();
  const t = makeT(lang);
  return (
    <div className="rounded-xl border border-ink-faint/20 bg-canvas-warm px-4 py-3">
      <p className="text-[12px] leading-relaxed text-ink-muted">
        {t('aud_note')}{' '}
        <a
          href="#"
          className="font-semibold text-coral-500 hover:text-coral-600"
        >
          {t('aud_view_breakdown')}
        </a>
      </p>
    </div>
  );
}
