import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  FileCheck2,
  FileText,
  Link2,
  Megaphone,
  Play,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { ViewKey } from '@/components/WorkspaceShell';
import type { AudienceData, Campaign, Lang, Metric, PlatformSource } from '@/data/demoData';
import { campaigns, platforms } from '@/data/demoData';
import {
  ChangeIndicator,
  FreshnessPill,
  VerificationPill,
  verificationMeta,
} from '@/components/shared/Verification';
import { BarChart, DonutChart, LineChart } from '@/components/shared/Charts';

interface Props {
  onNavigate: (view: ViewKey, payload?: string) => void;
  selectedId: string;
  lang: Lang;
}

export function InsightPage({ onNavigate, selectedId, lang }: Props) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const platform = platforms.find((p) => p.id === selectedId);
  const campaign = campaigns.find((c) => c.id === selectedId);
  const effectiveId = selectedId || platforms[0].id;
  const effectivePlatform = platform || platforms.find((p) => p.id === effectiveId);
  const effectiveCampaign = campaign || campaigns.find((c) => c.id === effectiveId);

  return (
    <div className="animate-fade-in space-y-5">
      <button
        onClick={() => onNavigate('overview')}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 transition-colors hover:text-provena-500"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('Proof overview', 'ภาพรวมหลักฐาน')}
      </button>

      {effectivePlatform && <PlatformInsight platform={effectivePlatform} lang={lang} />}
      {effectiveCampaign && !effectivePlatform && (
        <CampaignInsight campaign={effectiveCampaign} lang={lang} />
      )}
      {!effectivePlatform && !effectiveCampaign && (
        <div className="card-surface p-8 text-center text-ink-400">
          {t('Select a proof source to inspect.', 'เลือกแหล่งหลักฐานเพื่อตรวจสอบ')}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PLATFORM INSIGHT
// ═══════════════════════════════════════════════════════════

function PlatformInsight({ platform: p, lang }: { platform: PlatformSource; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const [activeTab, setActiveTab] = useState<'performance' | 'audience' | 'content' | 'evidence'>('performance');
  const hasAudience = !!p.audience;
  const hasContent = !!p.topContent && p.topContent.length > 0;

  return (
    <>
      {/* Editorial context header */}
      <div className="rounded-3xl border border-ink-100 bg-white p-5 shadow-card sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-4">
            <PlatformIcon id={p.id} size="lg" />
            <div>
              <p className="eyebrow">{t('Deep insight', 'ข้อมูลเชิงลึก')}</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">{p.name}</h1>
              <p className="mt-0.5 text-sm text-ink-500">{p.handle}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            <VerificationPill state="SOURCE_VERIFIED" size="xs" />
            <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400">
              <span className="flex items-center gap-1"><Link2 className="h-3 w-3" />{p.connectionLabel}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t('Synced', 'ซิงค์')} {p.lastSync}</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI strip — numbers as hero */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {p.metrics.map((m) => (
          <KpiCard key={m.id} metric={m} lang={lang} />
        ))}
      </div>

      {/* Tab navigation */}
      <div className="flex items-center gap-1 overflow-x-auto rounded-xl bg-ink-50 p-1">
        <PillTab active={activeTab === 'performance'} onClick={() => setActiveTab('performance')}>
          <TrendingUp className="h-3.5 w-3.5" />{t('Performance', 'ผลงาน')}
        </PillTab>
        {hasAudience && (
          <PillTab active={activeTab === 'audience'} onClick={() => setActiveTab('audience')}>
            <Users className="h-3.5 w-3.5" />{t('Audience', 'ผู้ติดตาม')}
          </PillTab>
        )}
        {hasContent && (
          <PillTab active={activeTab === 'content'} onClick={() => setActiveTab('content')}>
            <Play className="h-3.5 w-3.5" />{t('Top content', 'คอนเทนต์ยอดนิยม')}
          </PillTab>
        )}
        <PillTab active={activeTab === 'evidence'} onClick={() => setActiveTab('evidence')}>
          <FileCheck2 className="h-3.5 w-3.5" />{t('Source & evidence', 'แหล่งและหลักฐาน')}
        </PillTab>
      </div>

      {activeTab === 'performance' && <PerformanceTab platform={p} lang={lang} />}
      {activeTab === 'audience' && p.audience && <AudienceTab audience={p.audience} lang={lang} />}
      {activeTab === 'content' && p.topContent && <ContentTab content={p.topContent} lang={lang} />}
      {activeTab === 'evidence' && <EvidenceTab platform={p} lang={lang} />}
    </>
  );
}

function PerformanceTab({ platform: p, lang }: { platform: PlatformSource; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const metricsWithHistory = p.metrics.filter((m) => m.history && m.history.length > 1);

  if (metricsWithHistory.length === 0) {
    return (
      <div className="card-surface p-6">
        <p className="eyebrow">{t('Performance over time', 'ผลงานตามช่วงเวลา')}</p>
        <div className="mt-4 flex flex-col items-center justify-center py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-50">
            <TrendingUp className="h-5 w-5 text-ink-300" />
          </div>
          <p className="mt-3 text-sm font-medium text-ink-500">{t('No historical snapshots available', 'ไม่มีข้อมูลย้อนหลัง')}</p>
          <p className="mt-1 text-xs text-ink-400">{t('Historical performance will appear here once enough synced data is collected.', 'ข้อมูลผลงานย้อนหลังจะแสดงที่นี่เมื่อมีข้อมูลที่ซิงค์เพียงพอ')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {metricsWithHistory.map((m) => (
        <div key={m.id} className="card-surface p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="eyebrow-neutral">{t('Performance over time', 'ผลงานตามช่วงเวลา')}</p>
              <h3 className="mt-1 text-base font-bold text-ink-900">{t(m.label, m.labelThai)}</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold tracking-tight text-ink-950">{m.value}</span>
              {m.change && <ChangeIndicator change={m.change} />}
            </div>
          </div>
          <div className="mt-5">
            <LineChart data={m.history!} metric={m} />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-ink-400">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{m.measurementWindow}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{t('Synced', 'ซิงค์')} {m.lastUpdated}</span>
            <VerificationPill state={m.verification} size="xs" />
          </div>
        </div>
      ))}
    </div>
  );
}

function AudienceTab({ audience, lang }: { audience: AudienceData; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <div className="space-y-4">
      <div className="card-surface p-5 sm:p-6">
        <p className="eyebrow">{t("Who you're reaching", 'ผู้ที่คุณเข้าถึง')}</p>
        <h3 className="mt-1 text-base font-bold text-ink-900">{t('Audience demographics', 'ข้อมูลประชากรผู้ติดตาม')}</h3>
        <p className="mt-4 mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">{t('Age ranges', 'ช่วงอายุ')}</p>
        <BarChart data={audience.ageRanges.map((a) => ({ label: a.range, percentage: a.percentage, color: '#c54327' }))} />
        <p className="mt-5 mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">{t('Gender', 'เพศ')}</p>
        <DonutChart data={audience.genders.map((g, i) => ({ label: g.label, percentage: g.percentage, color: ['#c54327', '#7e9b81', '#d0c1b3'][i] }))} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="card-surface p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t('Top countries', 'ประเทศยอดนิยม')}</p>
          <div className="mt-3"><BarChart data={audience.topCountries.map((c) => ({ label: c.country, percentage: c.percentage, color: '#7e9b81' }))} /></div>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t('Top cities', 'เมืองยอดนิยม')}</p>
          <div className="mt-3"><BarChart data={audience.topCities.map((c) => ({ label: c.city, percentage: c.percentage, color: '#df8427' }))} /></div>
        </div>
      </div>
      <div className="card-surface p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t('Interests', 'ความสนใจ')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {audience.interests.map((interest) => (
            <span key={interest} className="pill bg-canvas-50 text-canvas-700 ring-1 ring-inset ring-canvas-200">{interest}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentTab({ content, lang }: { content: { title: string; views: string; engagement: string; date: string }[]; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <div className="card-surface divide-y divide-ink-100">
      {content.map((c, i) => (
        <div key={i} className="flex items-center gap-4 p-4 sm:px-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-ink-400"><Play className="h-4 w-4" /></div>
          <div className="min-w-0 flex-1"><p className="truncate font-semibold text-ink-900">{c.title}</p><p className="text-xs text-ink-400">{c.date}</p></div>
          <div className="flex items-center gap-4 text-sm">
            <div className="text-right"><p className="font-bold text-ink-900">{c.views}</p><p className="text-xs text-ink-400">{t('views', 'ยอดวิว')}</p></div>
            <div className="text-right"><p className="font-bold text-ink-900">{c.engagement}</p><p className="text-xs text-ink-400">{t('engagement', 'การมีส่วนร่วม')}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EvidenceTab({ platform: p, lang }: { platform: PlatformSource; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <div className="card-surface p-5 sm:p-6">
      <p className="eyebrow">{t('Source & evidence trail', 'ห่วงโซ่แหล่งที่มาและหลักฐาน')}</p>
      <h3 className="mt-1 text-base font-bold text-ink-900">{t('Where each number came from', 'ที่มาของแต่ละตัวเลข')}</h3>
      <p className="mt-1 text-sm text-ink-500">{t('Trace every metric from claim to value to source to verification to evidence.', 'สืบติดตามทุกเมตริก จากการอ้างสิทธิ์ สู่ค่า สู่แหล่งที่มา สู่การยืนยัน สู่หลักฐาน')}</p>
      <div className="mt-5 space-y-3">{p.metrics.map((m) => (<ProofTrail key={m.id} metric={m} lang={lang} />))}</div>
    </div>
  );
}

function ProofTrail({ metric: m, lang }: { metric: Metric; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const [expanded, setExpanded] = useState(false);
  const meta = verificationMeta[m.verification];
  const Icon = meta.icon;

  return (
    <div className="rounded-xl border border-ink-100 bg-ink-50/30">
      <button onClick={() => setExpanded(!expanded)} className="flex w-full items-center justify-between p-4 text-left">
        <div className="flex items-center gap-3">
          <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${meta.pillClass}`}><Icon className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
          <div><p className="text-sm font-semibold text-ink-900">{t(m.label, m.labelThai)}</p><p className="text-xs text-ink-400">{meta.label}</p></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-ink-950">{m.value}</span>
          <ChevronDown className={`h-4 w-4 text-ink-300 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {expanded && (
        <div className="animate-fade-in border-t border-ink-100 p-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <TrailField label={t('Value', 'ค่า')} value={m.value} />
            <TrailField label={t('Platform', 'แพลตฟอร์ม')} value={m.source || '—'} />
            <TrailField label={t('Verification', 'การยืนยัน')} value={meta.label} />
            <TrailField label={t('Measurement window', 'ช่วงเวลาวัด')} value={m.measurementWindow || '—'} />
            <TrailField label={t('Last synced', 'ซิงค์ล่าสุด')} value={m.lastUpdated} />
            <TrailField label={t('Evidence reference', 'อ้างอิงหลักฐาน')} value={m.evidenceRef || t('None attached', 'ไม่มีหลักฐานแนบ')} muted={!m.evidenceRef} />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <ChainStep label={t('Claim', 'การอ้างสิทธิ์')} active /><ChainArrow />
            <ChainStep label={t('Value', 'ค่า')} active /><ChainArrow />
            <ChainStep label={t('Source', 'แหล่งที่มา')} active={!!m.source} /><ChainArrow />
            <ChainStep label={t('Verification', 'การยืนยัน')} active /><ChainArrow />
            <ChainStep label={t('Evidence', 'หลักฐาน')} active={!!m.evidenceRef} /><ChainArrow />
            <ChainStep label={t('Freshness', 'ความสด')} active />
          </div>
        </div>
      )}
    </div>
  );
}

function TrailField({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return <div><p className="text-xs font-medium text-ink-400">{label}</p><p className={`mt-0.5 text-sm font-semibold ${muted ? 'text-ink-400' : 'text-ink-800'}`}>{value}</p></div>;
}

function ChainStep({ label, active }: { label: string; active: boolean }) {
  return <span className={`pill text-[10px] ${active ? 'bg-white text-ink-700 ring-1 ring-inset ring-ink-200' : 'bg-ink-50 text-ink-300 ring-1 ring-inset ring-ink-100'}`}>{label}</span>;
}

function ChainArrow() { return <span className="text-ink-300">→</span>; }

// ═══════════════════════════════════════════════════════════
// CAMPAIGN INSIGHT
// ═══════════════════════════════════════════════════════════

function CampaignInsight({ campaign: c, lang }: { campaign: Campaign; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <>
      <div className="rounded-3xl border border-ink-100 bg-white p-5 shadow-card sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-canvas-100"><Megaphone className="h-5 w-5 text-canvas-700" /></div>
            <div>
              <p className="eyebrow">{t('Campaign insight', 'ข้อมูลเชิงลึกแคมเปญ')}</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">{c.brand}</h1>
              <p className="mt-0.5 text-sm text-ink-500">{c.name}</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            <VerificationPill state={c.verification} size="xs" />
            <div className="flex flex-wrap items-center gap-3 text-xs text-ink-400">
              <span className="flex items-center gap-1"><Play className="h-3 w-3" />{c.platform}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{c.date}</span>
              <span className={`pill text-[10px] ${c.status === 'completed' ? 'bg-sage-50 text-sage-700 ring-1 ring-inset ring-sage-200' : c.status === 'in-progress' ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200' : 'bg-ink-50 text-ink-500 ring-1 ring-inset ring-ink-200'}`}>{c.status === 'completed' ? t('Completed', 'เสร็จสิ้น') : c.status === 'in-progress' ? t('In progress', 'กำลังดำเนินการ') : t('Pending', 'รอดำเนินการ')}</span>
            </div>
          </div>
        </div>
      </div>

      {c.metrics.length > 0 && c.metrics[0].rawValue > 0 && (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{c.metrics.map((m) => (<KpiCard key={m.id} metric={m} lang={lang} />))}</div>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card-surface p-5 sm:p-6">
          <p className="eyebrow">{t('Deliverables', 'สิ่งที่ส่งมอบ')}</p>
          <div className="mt-3 space-y-2">
            {c.deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-ink-700"><div className="flex h-6 w-6 items-center justify-center rounded-md bg-sage-50"><FileCheck2 className="h-3 w-3 text-sage-600" /></div>{d}</div>
            ))}
          </div>
        </div>
        <div className="card-surface p-5 sm:p-6">
          <p className="eyebrow">{t('Supporting evidence', 'หลักฐานสนับสนุน')}</p>
          {c.evidence.length > 0 ? (
            <div className="mt-3 space-y-2">
              {c.evidence.map((e, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-ink-100 bg-ink-50/30 p-3">
                  <div className="flex items-center gap-2.5"><FileText className="h-4 w-4 text-ink-400" /><div><p className="text-sm font-semibold text-ink-800">{e.label}</p><p className="text-xs text-ink-400">{e.type} · {e.date}</p></div></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-3 rounded-lg border border-dashed border-ink-200 bg-ink-50/30 p-4 text-center">
              <p className="text-sm text-ink-400">{t('No supporting evidence attached.', 'ไม่มีหลักฐานสนับสนุนแนบไว้')}</p>
              <button className="mt-2 text-xs font-semibold text-provena-500 hover:text-provena-600">{t('Upload evidence', 'อัปโหลดหลักฐาน')} →</button>
            </div>
          )}
        </div>
      </div>

      <div className="card-surface p-5 sm:p-6">
        <p className="eyebrow">{t('Campaign metric trail', 'ห่วงโซ่เมตริกแคมเปญ')}</p>
        <h3 className="mt-1 text-base font-bold text-ink-900">{t('How did this collaboration perform?', 'การร่วมมือนี้ผลออกมาเป็นอย่างไร?')}</h3>
        <div className="mt-4 space-y-3">{c.metrics.map((m) => (<ProofTrail key={m.id} metric={m} lang={lang} />))}</div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════

function KpiCard({ metric: m, lang }: { metric: Metric; lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const meta = verificationMeta[m.verification];
  const Icon = meta.icon;
  return (
    <div className="card-surface p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-ink-400">{t(m.label, m.labelThai)}</p>
        <span className={`flex h-5 w-5 items-center justify-center rounded-md ${meta.pillClass}`}><Icon className="h-2.5 w-2.5" strokeWidth={2.5} /></span>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-ink-950">{m.value}</p>
      <div className="mt-2 flex items-center gap-2">
        {m.change && <ChangeIndicator change={m.change} />}
        <FreshnessPill state={m.freshness} />
      </div>
      <p className="mt-2 text-xs text-ink-400">{m.measurementWindow || '—'}</p>
    </div>
  );
}

function PillTab({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all ${active ? 'bg-white text-ink-900 shadow-soft' : 'text-ink-400 hover:text-ink-700'}`}>{children}</button>
  );
}

function PlatformIcon({ id, size = 'md' }: { id: string; size?: 'md' | 'lg' }) {
  const bg = { tiktok: 'bg-ink-900 text-white', instagram: 'bg-gradient-to-br from-amber-400 to-provena-500 text-white', youtube: 'bg-red-600 text-white' }[id] || 'bg-ink-100 text-ink-600';
  const letter = { tiktok: 'T', instagram: 'IG', youtube: 'YT' }[id] || '?';
  const sizeClass = size === 'lg' ? 'h-12 w-12 text-base' : 'h-10 w-10 text-sm';
  return <div className={`flex items-center justify-center rounded-xl font-bold ${bg} ${sizeClass}`}>{letter}</div>;
}
