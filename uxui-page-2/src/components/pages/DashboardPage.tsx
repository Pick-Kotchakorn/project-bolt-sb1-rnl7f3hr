import {
  ArrowRight,
  Clock3,
  Eye,
  FileCheck2,
  Megaphone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPen,
  Users,
} from 'lucide-react';
import type { ViewKey } from '@/components/WorkspaceShell';
import type { Lang, PlatformSource } from '@/data/demoData';
import {
  attentionItems,
  campaigns,
  creator,
  platforms,
  publicProfileCoverage,
} from '@/data/demoData';
import { FreshnessPill, VerificationPill } from '@/components/shared/Verification';

interface Props {
  onNavigate: (view: ViewKey, payload?: string) => void;
  lang: Lang;
}

export function DashboardPage({ onNavigate, lang }: Props) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const totalMetrics = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.total, 0);
  const sourceVerified = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.sourceVerified, 0);
  const evidenceProvided = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.evidenceProvided, 0);
  const selfReported = platforms.reduce((sum, platform) => sum + platform.verificationCoverage.selfReported, 0);
  const connectedSources = platforms.filter((platform) => platform.connection === 'connected').length;

  return (
    <div className="animate-fade-in space-y-5">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">{t('Private workspace', 'พื้นที่ส่วนตัว')}</p>
          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
            {t('Good morning, Nisa.', 'สวัสดีตอนเช้า นิสา')}
          </h1>
          <p className="mt-1 max-w-xl text-sm leading-6 text-ink-500">
            {t('A quick read of the proof behind your creator profile.', 'สรุปสั้น ๆ ของหลักฐานเบื้องหลังโปรไฟล์ครีเอเตอร์ของคุณ')}
          </p>
        </div>
        <button onClick={() => onNavigate('overview')} className="btn-primary self-start text-xs sm:self-auto">
          {t('Open proof overview', 'เปิดภาพรวมหลักฐาน')}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </header>

      <section className="rounded-3xl border border-ink-100 bg-white p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-4 border-b border-ink-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-provena-100 text-sm font-bold text-provena-700">{creator.avatarInitials}</div>
            <div>
              <p className="text-sm font-semibold text-ink-900">{lang === 'th' ? creator.nameThai : creator.name}</p>
              <p className="text-xs text-ink-400">{creator.username} · {t('Last reviewed 28 Aug 2026', 'ตรวจสอบล่าสุด 28 ส.ค. 2026')}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-sage-700"><span className="h-1.5 w-1.5 rounded-full bg-sage-500" />{t('Profile published', 'โปรไฟล์เผยแพร่แล้ว')}</div>
        </div>

        <div className="grid gap-4 pt-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow-neutral">{t('Proof snapshot', 'ภาพรวมหลักฐาน')}</p>
            <p className="mt-1 text-base font-bold text-ink-900">{t('How much of your proof is ready to stand behind?', 'หลักฐานของคุณพร้อมแค่ไหนที่จะใช้ยืนยัน?')}</p>
            <div className="mt-5 flex items-end gap-3"><span className="text-4xl font-bold tracking-tight text-ink-950">{sourceVerified}</span><span className="pb-1 text-sm text-ink-400">/ {totalMetrics} {t('metrics source verified', 'เมตริกที่ยืนยันจากแหล่งข้อมูล')}</span></div>
            <div className="mt-3 h-2.5 max-w-xl overflow-hidden rounded-full bg-ink-50"><div className="h-full rounded-full bg-sage-400" style={{ width: `${(sourceVerified / totalMetrics) * 100}%` }} /></div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-500"><span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sage-400" />{sourceVerified} {t('verified', 'ยืนยันแล้ว')}</span><span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" />{evidenceProvided} {t('with evidence', 'มีหลักฐาน')}</span><span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-ink-300" />{selfReported} {t('self-reported', 'รายงานเอง')}</span></div>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            <MiniStat icon={ShieldCheck} label={t('Verified', 'ยืนยันแล้ว')} value={`${sourceVerified}`} tone="sage" />
            <MiniStat icon={FileCheck2} label={t('Evidence', 'มีหลักฐาน')} value={`${evidenceProvided}`} tone="amber" />
            <MiniStat icon={UserPen} label={t('Self-reported', 'รายงานเอง')} value={`${selfReported}`} tone="neutral" />
            <MiniStat icon={Users} label={t('Sources', 'แหล่งข้อมูล')} value={`${connectedSources}`} tone="coral" />
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(290px,0.65fr)]">
        <div className="card-surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-ink-100 p-5 sm:p-6"><div><p className="eyebrow">{t('Proof sources', 'แหล่งหลักฐาน')}</p><h2 className="section-title mt-1">{t('What is connected right now', 'ตอนนี้เชื่อมต่ออะไรอยู่บ้าง')}</h2></div><button onClick={() => onNavigate('overview')} className="btn-subtle text-xs">{t('See all', 'ดูทั้งหมด')}<ArrowRight className="h-3.5 w-3.5" /></button></div>
          <div className="divide-y divide-ink-100">{platforms.map((platform) => <DashboardSourceRow key={platform.id} platform={platform} lang={lang} onOpen={() => onNavigate('insight', platform.id)} />)}</div>
        </div>

        <div className="card-surface p-5 sm:p-6">
          <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-provena-500" /><p className="eyebrow-neutral">{t('Next best look', 'สิ่งที่ควรดูต่อ')}</p></div>
          <h2 className="mt-2 text-base font-bold text-ink-900">{t('Keep your proof current', 'ทำให้หลักฐานเป็นปัจจุบันอยู่เสมอ')}</h2>
          <div className="mt-4 space-y-3">{attentionItems.slice(0, 2).map((item) => <div key={item.id} className="rounded-xl border border-ink-100 bg-ink-50/35 p-3"><p className="text-sm leading-5 text-ink-700">{t(item.message, item.messageThai)}</p><p className="mt-1 text-xs font-medium text-ink-400">{item.source}</p></div>)}</div>
          <button onClick={() => onNavigate('overview')} className="btn-subtle mt-4 text-xs">{t('Review next actions', 'ตรวจสอบสิ่งที่ควรทำต่อ')}<ArrowRight className="h-3.5 w-3.5" /></button>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <div className="card-surface p-5 sm:p-6"><div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-canvas-700" /><p className="eyebrow-neutral">{t('Recent activity', 'กิจกรรมล่าสุด')}</p></div><div className="mt-4 space-y-3">{campaigns.slice(0, 3).map((campaign) => <button key={campaign.id} onClick={() => onNavigate('insight', campaign.id)} className="group flex w-full items-center justify-between gap-3 text-left"><div className="flex min-w-0 items-center gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-canvas-100 text-canvas-700"><Megaphone className="h-3.5 w-3.5" /></div><div className="min-w-0"><p className="truncate text-sm font-semibold text-ink-800">{campaign.brand}</p><p className="truncate text-xs text-ink-400">{campaign.name} · {campaign.date}</p></div></div><div className="flex items-center gap-2"><VerificationPill state={campaign.verification} size="xs" /><ArrowRight className="h-3.5 w-3.5 text-ink-300 group-hover:text-provena-500" /></div></button>)}</div></div>
        <div className="card-surface flex items-center justify-between gap-4 p-5 sm:p-6"><div><div className="flex items-center gap-2"><Eye className="h-4 w-4 text-provena-500" /><p className="eyebrow-neutral">{t('Public result', 'ผลลัพธ์สาธารณะ')}</p></div><h2 className="mt-2 text-base font-bold text-ink-900">{t('Your profile is live to brands', 'โปรไฟล์ของคุณเผยแพร่ต่อแบรนด์แล้ว')}</h2><p className="mt-1 text-sm leading-5 text-ink-500">{publicProfileCoverage.performance.published} {t('performance metrics are published', 'เมตริกผลงานถูกเผยแพร่')}</p></div><button onClick={() => onNavigate('public-profile')} className="btn-ghost shrink-0 text-xs"><Eye className="h-3.5 w-3.5" />{t('Preview', 'ดูตัวอย่าง')}</button></div>
      </section>
    </div>
  );
}

function DashboardSourceRow({ platform, lang, onOpen }: { platform: PlatformSource; lang: Lang; onOpen: () => void }) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const primaryMetric = platform.metrics[0];
  return <button onClick={onOpen} className="group flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-ink-50/60 sm:px-6"><div className="flex min-w-0 items-center gap-3"><PlatformIcon id={platform.id} /><div className="min-w-0"><div className="flex items-center gap-2"><p className="font-semibold text-ink-900">{platform.name}</p><span className={`text-[10px] ${platform.connection === 'connected' ? 'text-sage-600' : 'text-amber-600'}`}>{platform.connection === 'connected' ? t('Connected', 'เชื่อมต่อแล้ว') : t('Partial', 'บางส่วน')}</span></div><p className="truncate text-xs text-ink-400">{platform.handle} · {platform.lastSync}</p></div></div><div className="flex shrink-0 items-center gap-4"><div className="hidden text-right sm:block"><p className="text-xs text-ink-400">{t(primaryMetric.label, primaryMetric.labelThai)}</p><p className="text-sm font-bold text-ink-900">{primaryMetric.value}</p></div><FreshnessPill state={primaryMetric.freshness} /><ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-provena-500" /></div></button>;
}

function MiniStat({ icon: Icon, label, value, tone }: { icon: typeof ShieldCheck; label: string; value: string; tone: 'sage' | 'amber' | 'neutral' | 'coral' }) {
  const styles = { sage: 'bg-sage-50 text-sage-600', amber: 'bg-amber-50 text-amber-600', neutral: 'bg-ink-50 text-ink-500', coral: 'bg-provena-50 text-provena-500' }[tone];
  return <div className="rounded-xl border border-ink-100 bg-ink-50/35 p-3"><div className={`flex h-7 w-7 items-center justify-center rounded-lg ${styles}`}><Icon className="h-3.5 w-3.5" /></div><p className="mt-2 text-lg font-bold text-ink-900">{value}</p><p className="text-xs text-ink-400">{label}</p></div>;
}

function PlatformIcon({ id }: { id: string }) {
  const bg = { tiktok: 'bg-ink-900 text-white', instagram: 'bg-gradient-to-br from-amber-400 to-provena-500 text-white', youtube: 'bg-red-600 text-white' }[id] || 'bg-ink-100 text-ink-600';
  const letter = { tiktok: 'T', instagram: 'IG', youtube: 'YT' }[id] || '?';
  return <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${bg}`}>{letter}</div>;
}
