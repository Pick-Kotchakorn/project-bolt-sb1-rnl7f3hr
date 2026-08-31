import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { ViewKey } from '@/components/WorkspaceShell';
import type { Lang } from '@/data/demoData';
import {
  campaigns,
  creator,
  platforms,
  services,
} from '@/data/demoData';
import { VerificationPill } from '@/components/shared/Verification';

interface Props {
  onNavigate: (view: ViewKey, payload?: string) => void;
  lang: Lang;
}

export function PublicProfilePage({ onNavigate, lang }: Props) {
  const t = (en: string, th: string) => (lang === 'th' ? th : en);
  const publishedMetrics = platforms.flatMap((p) => p.metrics).filter((m) => m.verification === 'SOURCE_VERIFIED').slice(0, 6);
  const completedCampaigns = campaigns.filter((c) => c.status === 'completed');

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={() => onNavigate('overview')} className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 transition-colors hover:text-provena-500">
          <ArrowLeft className="h-4 w-4" />
          {t('Back to workspace', 'กลับสู่พื้นที่ทำงาน')}
        </button>
        <div className="flex items-center gap-2 rounded-lg border border-provena-200 bg-provena-50 px-3 py-1.5 text-xs font-semibold text-provena-700">
          <Eye className="h-3.5 w-3.5" />
          {t('This is what brands see', 'นี่คือสิ่งที่แบรนด์เห็น')}
        </div>
      </div>

      {/* Editorial hero */}
      <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
        <div className="h-32 bg-gradient-to-br from-canvas-100 via-canvas-50 to-provena-50" />
        <div className="relative px-6 pb-6 sm:px-8 sm:pb-8">
          <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-provena-100 text-2xl font-bold text-provena-700 shadow-card">{creator.avatarInitials}</div>
              <div className="pb-1">
                <p className="eyebrow">{t('Commercial Creator Profile', 'โปรไฟล์ครีเอเตอร์เชิงพาณิชย์')}</p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">{lang === 'th' ? creator.nameThai : creator.name}</h1>
                <p className="text-sm text-ink-500">{creator.username} · {lang === 'th' ? creator.categoryThai : creator.category}</p>
              </div>
            </div>
            <span className="pill bg-sage-50 text-sage-700 ring-1 ring-inset ring-sage-200"><ShieldCheck className="h-3 w-3" strokeWidth={2.5} />{t('Verified creator', 'ครีเอเตอร์ที่ยืนยันแล้ว')}</span>
          </div>
        </div>
      </div>

      {/* Question-led heading */}
      <div>
        <p className="eyebrow">{t('The proof', 'หลักฐาน')}</p>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-ink-950 sm:text-2xl">{t('Should your brand work with Nisa?', 'แบรนด์ของคุณควรร่วมงานกับนิสาไหม?')}</h2>
        <p className="mt-1 text-sm text-ink-500">{t('Every number below is backed by a connected platform or supporting evidence.', 'ทุกตัวเลขด้านล่างนี้ได้รับการสนับสนุนจากแพลตฟอร์มที่เชื่อมต่อหรือหลักฐานสนับสนุน')}</p>
      </div>

      {/* Published metrics — numbers as hero */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {publishedMetrics.map((m) => (
          <div key={m.id} className="card-surface p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-ink-400">{t(m.label, m.labelThai)}</p>
              <VerificationPill state={m.verification} size="xs" />
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight text-ink-950">{m.value}</p>
            <p className="mt-1 text-xs text-ink-400">{m.measurementWindow || '—'} · {t('Updated', 'อัปเดต')} {m.lastUpdated}</p>
          </div>
        ))}
      </div>

      {/* Platform summary */}
      <div className="card-surface p-5 sm:p-6">
        <p className="eyebrow">{t('Connected platforms', 'แพลตฟอร์มที่เชื่อมต่อ')}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.id} className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/30 p-3">
              <PlatformIcon id={p.id} />
              <div><p className="text-sm font-semibold text-ink-900">{p.name}</p><p className="text-xs text-ink-400">{p.handle}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Campaigns */}
      <div>
        <p className="eyebrow">{t('Campaign history', 'ประวัติแคมเปญ')}</p>
        <h3 className="mt-1 text-lg font-bold tracking-tight text-ink-950">{t('Proven commercial collaborations', 'การร่วมมือเชิงพาณิชย์ที่พิสูจน์แล้ว')}</h3>
        <div className="mt-3 space-y-3">
          {completedCampaigns.map((c) => (
            <div key={c.id} className="card-surface p-4 sm:p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas-100"><Megaphone className="h-4 w-4 text-canvas-700" /></div>
                  <div><p className="font-semibold text-ink-900">{c.brand}</p><p className="text-xs text-ink-400">{c.name} · {c.platform} · {c.date}</p></div>
                </div>
                <VerificationPill state={c.verification} size="xs" />
              </div>
              {c.metrics.length > 0 && c.metrics[0].rawValue > 0 && (
                <div className="mt-3 flex flex-wrap gap-4 text-sm">
                  {c.metrics.slice(0, 4).map((m) => (
                    <div key={m.id}><span className="text-lg font-bold text-ink-950">{m.value}</span><span className="ml-1.5 text-xs text-ink-400">{t(m.label, m.labelThai)}</span></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="card-surface p-5 sm:p-6">
        <p className="eyebrow">{t('Services', 'บริการ')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {services.map((s) => (
            <span key={s.name} className="pill bg-canvas-50 text-canvas-700 ring-1 ring-inset ring-canvas-200"><CheckCircle2 className="h-3 w-3" />{lang === 'th' ? s.nameThai : s.name}</span>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-ink-50/30 p-4 text-sm text-ink-500">
        <Sparkles className="h-4 w-4 shrink-0 text-provena-400" />
        <p>{t('This public profile shows only published, verified commercial proof. Private analytics and evidence remain in your workspace.', 'โปรไฟล์สาธารณะนี้แสดงเฉพาะหลักฐานเชิงพาณิชย์ที่เผยแพร่และยืนยันแล้ว ข้อมูลวิเคราะห์และหลักฐานส่วนตัวยังคงอยู่ในพื้นที่ทำงานของคุณ')}</p>
      </div>
    </div>
  );
}

function PlatformIcon({ id }: { id: string }) {
  const bg = { tiktok: 'bg-ink-900 text-white', instagram: 'bg-gradient-to-br from-amber-400 to-provena-500 text-white', youtube: 'bg-red-600 text-white' }[id] || 'bg-ink-100 text-ink-600';
  const letter = { tiktok: 'T', instagram: 'IG', youtube: 'YT' }[id] || '?';
  return <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${bg}`}>{letter}</div>;
}
