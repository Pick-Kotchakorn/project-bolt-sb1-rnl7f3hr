import { useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import type { CreatorProfile } from '@/types';
import { PlatformGlyph } from './PlatformGlyph';
import { VerificationBadge } from './VerificationBadge';
import { SectionHeader } from './Performance';
import { useLang, tr } from '@/i18n';
import { makeT } from '@/App';
import type { Lang } from '@/i18n';

export function Campaigns({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);

  if (creator.campaigns.length === 0) {
    return (
      <section id="campaigns" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t('camp_eyebrow')}
          title={t('camp_empty_title')}
          description={t('camp_empty_desc')}
        />
      </section>
    );
  }

  const featured = creator.campaigns.find((c) => c.id === creator.featuredCampaignId);
  const rest = creator.campaigns.filter((c) => c.id !== creator.featuredCampaignId);

  return (
    <section id="campaigns" className="mx-auto mt-20 max-w-content px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow={t('camp_eyebrow')}
        title={t('camp_title')}
        description={t('camp_desc')}
      />

      {featured && (
        <div className="mt-6 overflow-hidden rounded-3xl border border-ink-faint/20 bg-canvas-card shadow-soft">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
              <img
                src={featured.image}
                alt={tr(featured.campaignName, lang)}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-canvas-card/95 px-3 py-1.5 text-[12px] font-semibold text-coral-500 shadow-soft backdrop-blur-sm">
                <Star size={13} fill="currentColor" />
                {t('camp_featured')}
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-[13px] font-medium text-ink-muted">
                {featured.brand} · {featured.date}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
                {tr(featured.campaignName, lang)}
              </h3>
              <p className="mt-1 text-[15px] text-ink-soft">{tr(featured.type, lang)}</p>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-4xl font-extrabold tracking-tight text-coral-500">
                  {featured.result}
                </span>
                <span className="pb-1 text-[13px] text-ink-muted">{tr(featured.resultLabel, lang)}</span>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-faint/15 pt-5">
                <div>
                  <dt className="text-[12px] text-ink-muted">{t('camp_deliverable')}</dt>
                  <dd className="mt-0.5 text-[13px] font-medium text-ink-soft">
                    {tr(featured.deliverable, lang)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[12px] text-ink-muted">{t('camp_platform')}</dt>
                  <dd className="mt-0.5 flex items-center gap-1.5 text-[13px] font-medium text-ink-soft">
                    <PlatformGlyph platform={featured.platform} size={14} />
                    {creator.platforms.find((p) => p.key === featured.platform)?.label}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between">
                <VerificationBadge state={featured.verification} />
                <a
                  href={`/${creator.username}/proof#campaign-${featured.id}`}
                  className="group inline-flex items-center gap-1 text-[13px] font-semibold text-coral-500 hover:text-coral-600"
                >
                  {t('camp_view_proof')}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((c, i) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              creator={creator}
              delay={i * 60}
              lang={lang}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function CampaignCard({
  campaign,
  creator,
  delay,
  lang,
}: {
  campaign: CreatorProfile['campaigns'][number];
  creator: CreatorProfile;
  delay: number;
  lang: Lang;
}) {
  const t = makeT(lang);
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="group animate-fade-up overflow-hidden rounded-2xl border border-ink-faint/20 bg-canvas-card shadow-soft transition-all hover:shadow-lift"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={campaign.image}
          alt={tr(campaign.campaignName, lang)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-3 top-3">
          <VerificationBadge state={campaign.verification} size="sm" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[12px] font-medium text-ink-muted">{campaign.brand}</p>
          <span className="flex items-center gap-1 text-[11px] font-medium text-ink-muted">
            <PlatformGlyph platform={campaign.platform} size={12} />
            {creator.platforms.find((p) => p.key === campaign.platform)?.label}
          </span>
        </div>
        <h4 className="mt-1.5 text-[16px] font-bold leading-tight tracking-tight text-ink">
          {tr(campaign.campaignName, lang)}
        </h4>
        <div className="mt-3 flex items-end justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-extrabold tracking-tight text-ink">
              {campaign.result}
            </span>
            <span className="text-[11px] text-ink-muted">{tr(campaign.resultLabel, lang)}</span>
          </div>
          <a
            href={`/${creator.username}/proof#campaign-${campaign.id}`}
            className={`text-[12px] font-semibold text-coral-500 transition-all ${
              hovered ? 'opacity-100' : 'opacity-70'
            } hover:text-coral-600`}
          >
            {t('perf_view_proof')}
          </a>
        </div>
        <p className="mt-2 border-t border-ink-faint/15 pt-2 text-[11px] text-ink-muted">
          {tr(campaign.type, lang)} · {campaign.date}
        </p>
      </div>
    </article>
  );
}
