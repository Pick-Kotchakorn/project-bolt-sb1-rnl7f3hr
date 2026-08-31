import { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  ExternalLink,
  Eye,
  FileCheck2,
  Info,
  Megaphone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPen,
  Users,
} from 'lucide-react';
import type { ViewKey } from '@/components/WorkspaceShell';
import type { Lang, PlatformSource, VerificationState } from '@/data/demoData';
import {
  attentionItems,
  campaigns,
  creator,
  platforms,
  publicProfileCoverage,
} from '@/data/demoData';
import {
  ChangeIndicator,
  FreshnessPill,
  VerificationPill,
  verificationMeta,
} from '@/components/shared/Verification';

interface Props {
  onNavigate: (view: ViewKey, payload?: string) => void;
  lang: Lang;
}

type OverviewTab = 'sources' | 'campaigns' | 'coverage';

export function OverviewPage({ onNavigate, lang }: Props) {
  const [activeTab, setActiveTab] = useState<OverviewTab>('sources');
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const totalMetrics = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.total, 0);
  const sourceVerified = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.sourceVerified, 0);
  const evidenceProvided = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.evidenceProvided, 0);
  const selfReported = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.selfReported, 0);

  return (
    <div className="animate-fade-in space-y-5">
      <OverviewHeader lang={lang} onNavigate={onNavigate} />

      <section className="overview-hero rounded-3xl border border-provena-200 bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t('Proof & performance', 'หลักฐานและผลงาน')}</p>
            <h1 className="mt-2 max-w-xl text-2xl font-bold leading-tight tracking-tight text-ink-950 sm:text-3xl">
              {t('Your commercial proof, at a glance.', 'ภาพรวมหลักฐานเชิงพาณิชย์ของคุณ')}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-ink-500">
              {t(
                'Start with the signals that need your attention. Open a source only when you need the detail behind a number.',
                'เริ่มจากสัญญาณที่ควรดูต่อ แล้วเปิดรายละเอียดของแหล่งข้อมูลเมื่อต้องการตรวจสอบที่มาของตัวเลข'
              )}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-xs text-ink-400">
            <Clock3 className="h-3.5 w-3.5" />
            {t('Last workspace review · 28 Aug 2026', 'ตรวจสอบพื้นที่ล่าสุด · 28 ส.ค. 2026')}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <SignalCard
            icon={ShieldCheck}
            tone="sage"
            label={t('Source verified', 'ยืนยันจากแหล่งข้อมูล')}
            value={`${sourceVerified}/${totalMetrics}`}
            detail={t('metrics connected to an approved source', 'เมตริกที่เชื่อมต่อกับแหล่งข้อมูลที่อนุมัติ')}
          />
          <SignalCard
            icon={FileCheck2}
            tone="amber"
            label={t('Evidence provided', 'มีหลักฐานสนับสนุน')}
            value={`${evidenceProvided}/${totalMetrics}`}
            detail={t('metrics backed by an uploaded reference', 'เมตริกที่มีหลักฐานอ้างอิงแนบไว้')}
          />
          <SignalCard
            icon={UserPen}
            tone="neutral"
            label={t('Self-reported', 'รายงานเอง')}
            value={`${selfReported}/${totalMetrics}`}
            detail={t('metrics entered by you', 'เมตริกที่คุณกรอกด้วยตัวเอง')}
          />
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
        <div className="card-surface p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow">{t('The short version', 'สรุปสั้น ๆ')}</p>
              <h2 className="section-title mt-1">{t('What should you look at next?', 'คุณควรดูอะไรต่อ?')}</h2>
            </div>
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-provena-400" />
          </div>
          <div className="mt-5 divide-y divide-ink-100">
            {attentionItems.slice(0, 3).map((item) => (
              <ActionRow key={item.id} item={item} lang={lang} />
            ))}
          </div>
          <button onClick={() => setActiveTab('coverage')} className="btn-subtle mt-4 text-xs">
            {t('See all proof coverage', 'ดูความครอบคลุมหลักฐานทั้งหมด')}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <PublicSnapshot lang={lang} onNavigate={onNavigate} />
      </section>

      <section className="card-surface overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-ink-100 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div>
            <p className="eyebrow">{t('Explore your proof', 'สำรวจหลักฐานของคุณ')}</p>
            <h2 className="section-title mt-1">{t('Open only what you need', 'เปิดดูเฉพาะสิ่งที่ต้องการ')}</h2>
          </div>
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-xl bg-ink-50 p-1">
            <ViewTab active={activeTab === 'sources'} onClick={() => setActiveTab('sources')}>
              {t('Sources', 'แหล่งข้อมูล')}
            </ViewTab>
            <ViewTab active={activeTab === 'campaigns'} onClick={() => setActiveTab('campaigns')}>
              {t('Campaigns', 'แคมเปญ')}
            </ViewTab>
            <ViewTab active={activeTab === 'coverage'} onClick={() => setActiveTab('coverage')}>
              {t('Coverage', 'ความครอบคลุม')}
            </ViewTab>
          </div>
        </div>

        {activeTab === 'sources' && (
          <div className="grid gap-3 p-5 sm:p-6 lg:grid-cols-3">
            {platforms.map((platform) => (
              <SourceSummaryCard
                key={platform.id}
                platform={platform}
                lang={lang}
                onOpen={() => onNavigate('insight', platform.id)}
              />
            ))}
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="divide-y divide-ink-100">
            {campaigns.map((campaign) => (
              <button
                key={campaign.id}
                onClick={() => onNavigate('insight', campaign.id)}
                className="group flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-ink-50/60 sm:px-6"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-canvas-100 text-canvas-700">
                    <Megaphone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-900">{campaign.brand}</p>
                    <p className="truncate text-xs text-ink-400">{campaign.name} · {campaign.date}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <VerificationPill state={campaign.verification} size="xs" />
                  <ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-provena-500" />
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'coverage' && (
          <CoveragePanel
            lang={lang}
            totalMetrics={totalMetrics}
            sourceVerified={sourceVerified}
            evidenceProvided={evidenceProvided}
            selfReported={selfReported}
          />
        )}
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <FreshnessPanel lang={lang} />
        <div className="card-surface flex items-center justify-between gap-4 p-5 sm:p-6">
          <div>
            <p className="eyebrow-neutral">{t('Public result', 'ผลลัพธ์สาธารณะ')}</p>
            <h2 className="mt-1 text-base font-bold text-ink-900">
              {t('See what brands see', 'ดูสิ่งที่แบรนด์เห็น')}
            </h2>
            <p className="mt-1 text-sm leading-5 text-ink-500">
              {t('Private proof stays here. Only published proof appears publicly.', 'หลักฐานส่วนตัวอยู่ที่นี่ เฉพาะหลักฐานที่เผยแพร่จะแสดงต่อสาธารณะ')}
            </p>
          </div>
          <button onClick={() => onNavigate('public-profile')} className="btn-ghost shrink-0 text-xs">
            <Eye className="h-3.5 w-3.5" />
            {t('Preview', 'ดูตัวอย่าง')}
          </button>
        </div>
      </section>
    </div>
  );
}

function OverviewHeader({ lang, onNavigate }: { lang: Lang; onNavigate: (view: ViewKey, payload?: string) => void }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-provena-100 text-sm font-bold text-provena-700">{creator.avatarInitials}</div>
        <div>
          <p className="eyebrow">{t('Private workspace', 'พื้นที่ส่วนตัว')}</p>
          <p className="text-sm font-semibold text-ink-900">{lang === 'th' ? creator.nameThai : creator.name} <span className="font-normal text-ink-400">· {creator.username}</span></p>
        </div>
      </div>
      <button onClick={() => onNavigate('public-profile')} className="btn-ghost self-start text-xs sm:self-auto">
        <ExternalLink className="h-3.5 w-3.5" />
        {t('View public profile', 'ดูโปรไฟล์สาธารณะ')}
      </button>
    </div>
  );
}

function SignalCard({ icon: Icon, tone, label, value, detail }: { icon: typeof ShieldCheck; tone: 'sage' | 'amber' | 'neutral'; label: string; value: string; detail: string }) {
  const styles = { sage: 'bg-sage-50 text-sage-600', amber: 'bg-amber-50 text-amber-600', neutral: 'bg-ink-50 text-ink-500' }[tone];
  return (
    <div className="rounded-2xl border border-ink-100 bg-ink-50/45 p-4">
      <div className="flex items-center gap-2.5">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${styles}`}><Icon className="h-4 w-4" /></div>
        <p className="text-xs font-semibold text-ink-600">{label}</p>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-ink-950">{value}</p>
      <p className="mt-1 text-xs leading-5 text-ink-400">{detail}</p>
    </div>
  );
}

function ActionRow({ item, lang }: { item: typeof attentionItems[number]; lang: Lang }) {
  const Icon = item.severity === 'warning' ? AlertCircle : item.severity === 'action' ? Sparkles : Info;
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <div className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${item.severity === 'warning' ? 'bg-amber-50 text-amber-600' : item.severity === 'action' ? 'bg-provena-50 text-provena-600' : 'bg-ink-50 text-ink-500'}`}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-5 text-ink-700">{t(item.message, item.messageThai)}</p>
        <p className="mt-1 text-xs font-medium text-ink-400">{item.source}</p>
      </div>
      <button className="shrink-0 pt-0.5 text-xs font-semibold text-provena-500 hover:text-provena-700">{t('Review', 'ตรวจสอบ')}</button>
    </div>
  );
}

function PublicSnapshot({ lang, onNavigate }: { lang: Lang; onNavigate: (view: ViewKey, payload?: string) => void }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const items = [
    [t('Performance', 'ผลงาน'), `${publicProfileCoverage.performance.published} ${t('published', 'เผยแพร่')}`],
    [t('Audience', 'ผู้ติดตาม'), `${publicProfileCoverage.audience.available} ${t('insights', 'ข้อมูล')}`],
    [t('Campaigns', 'แคมเปญ'), `${publicProfileCoverage.campaigns.shown} ${t('shown', 'แสดง')}`],
    [t('Services', 'บริการ'), `${publicProfileCoverage.services.active} ${t('active', 'ใช้งาน')}`],
  ];
  return (
    <div className="card-surface p-5 sm:p-6">
      <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-provena-500" /><p className="eyebrow-neutral">{t('Public profile coverage', 'สิ่งที่แสดงต่อสาธารณะ')}</p></div>
      <h2 className="mt-2 text-base font-bold text-ink-900">{t('What brands can see', 'สิ่งที่แบรนด์มองเห็น')}</h2>
      <div className="mt-4 space-y-2.5">
        {items.map(([label, value]) => <div key={label} className="flex items-center justify-between border-b border-ink-50 pb-2 text-sm last:border-0 last:pb-0"><span className="text-ink-500">{label}</span><span className="font-semibold text-ink-800">{value}</span></div>)}
      </div>
      <button onClick={() => onNavigate('public-profile')} className="btn-subtle mt-4 text-xs">{t('Open public profile', 'เปิดโปรไฟล์สาธารณะ')}<ArrowRight className="h-3.5 w-3.5" /></button>
    </div>
  );
}

function ViewTab({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button onClick={onClick} className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${active ? 'bg-white text-ink-900 shadow-soft' : 'text-ink-400 hover:text-ink-700'}`}>{children}</button>;
}

function SourceSummaryCard({ platform, lang, onOpen }: { platform: PlatformSource; lang: Lang; onOpen: () => void }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const verifiedPercent = Math.round((platform.verificationCoverage.sourceVerified / platform.verificationCoverage.total) * 100);
  return (
    <button onClick={onOpen} className="group rounded-2xl border border-ink-100 bg-white p-4 text-left shadow-soft transition-all hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3"><PlatformIcon id={platform.id} /><div><p className="font-semibold text-ink-900">{platform.name}</p><p className="text-xs text-ink-400">{platform.handle}</p></div></div>
        <FreshnessPill state={platform.metrics[0]?.freshness || 'unknown'} />
      </div>
      <div className="mt-4 flex items-end justify-between"><div><p className="text-xs text-ink-400">{t('Verified coverage', 'ความครอบคลุมที่ยืนยัน')}</p><p className="mt-1 text-lg font-bold text-ink-900">{verifiedPercent}%</p></div><ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-provena-500" /></div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-50"><div className="h-full rounded-full bg-sage-400" style={{ width: `${verifiedPercent}%` }} /></div>
      <div className="mt-3 flex items-center justify-between text-xs text-ink-400"><span>{platform.lastSync}</span><span>{t('Open insights', 'ดูข้อมูลเชิงลึก')} →</span></div>
    </button>
  );
}

function CoveragePanel({ lang, totalMetrics, sourceVerified, evidenceProvided, selfReported }: { lang: Lang; totalMetrics: number; sourceVerified: number; evidenceProvided: number; selfReported: number }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const rows: { state: VerificationState; count: number; icon: typeof ShieldCheck }[] = [
    { state: 'SOURCE_VERIFIED', count: sourceVerified, icon: ShieldCheck },
    { state: 'EVIDENCE_PROVIDED', count: evidenceProvided, icon: FileCheck2 },
    { state: 'SELF_REPORTED', count: selfReported, icon: UserPen },
  ];
  return (
    <div className="p-5 sm:p-6">
      <div className="flex h-3 overflow-hidden rounded-full bg-ink-50"><div className="bg-sage-400" style={{ width: `${(sourceVerified / totalMetrics) * 100}%` }} /><div className="bg-amber-400" style={{ width: `${(evidenceProvided / totalMetrics) * 100}%` }} /><div className="bg-ink-300" style={{ width: `${(selfReported / totalMetrics) * 100}%` }} /></div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {rows.map(({ state, count, icon: Icon }) => { const meta = verificationMeta[state]; return <div key={state} className="rounded-2xl border border-ink-100 bg-ink-50/35 p-4"><div className="flex items-center gap-2"><span className={`flex h-7 w-7 items-center justify-center rounded-lg ${meta.pillClass}`}><Icon className="h-3.5 w-3.5" /></span><span className="text-xs font-semibold text-ink-700">{t(meta.label, meta.labelThai)}</span></div><p className="mt-3 text-2xl font-bold text-ink-900">{count}</p><p className="text-xs text-ink-400">{t('of all tracked metrics', 'จากเมตริกที่ติดตามทั้งหมด')}</p></div>; })}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-ink-400"><Info className="h-3.5 w-3.5" />{t('Freshness and verification are separate: a recent number is not automatically a verified number.', 'ความสดและการยืนยันเป็นคนละเรื่อง: ตัวเลขล่าสุดไม่ได้แปลว่ายืนยันแล้ว')}</div>
    </div>
  );
}

function FreshnessPanel({ lang }: { lang: Lang }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  return (
    <div className="card-surface p-5 sm:p-6"><div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-canvas-700" /><p className="eyebrow-neutral">{t('Data freshness', 'ความสดของข้อมูล')}</p></div><div className="mt-4 grid gap-2 sm:grid-cols-3">{platforms.map((platform) => <div key={platform.id} className="rounded-xl border border-ink-100 bg-ink-50/35 p-3"><div className="flex items-center justify-between"><PlatformDot id={platform.id} /><FreshnessPill state={platform.metrics[0]?.freshness || 'unknown'} /></div><p className="mt-2 text-sm font-semibold text-ink-800">{platform.name}</p><p className="mt-0.5 text-xs text-ink-400">{platform.lastSync}</p></div>)}</div></div>
  );
}

function PlatformIcon({ id }: { id: string }) {
  const bg = { tiktok: 'bg-ink-900 text-white', instagram: 'bg-gradient-to-br from-amber-400 to-provena-500 text-white', youtube: 'bg-red-600 text-white' }[id] || 'bg-ink-100 text-ink-600';
  const letter = { tiktok: 'T', instagram: 'IG', youtube: 'YT' }[id] || '?';
  return <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold ${bg}`}>{letter}</div>;
}

function PlatformDot({ id }: { id: string }) {
  const bg = { tiktok: 'bg-ink-900', instagram: 'bg-provena-400', youtube: 'bg-red-600' }[id] || 'bg-ink-300';
  return <span className={`h-2.5 w-2.5 rounded-full ${bg}`} />;
}
