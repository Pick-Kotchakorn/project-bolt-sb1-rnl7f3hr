import { ShieldCheck, FileCheck2, PencilLine, Check } from 'lucide-react';
import type { VerificationState } from '@/types';
import { useLang, tr } from '@/i18n';
import { ui } from '@/strings';

const visualConfig: Record<
  VerificationState,
  {
    Icon: typeof ShieldCheck;
    container: string;
    text: string;
    icon: string;
    dot: string;
  }
> = {
  SOURCE_VERIFIED: {
    Icon: ShieldCheck,
    container: 'bg-sage-50 border-sage-200',
    text: 'text-sage-700',
    icon: 'text-sage-600',
    dot: 'bg-sage-500',
  },
  EVIDENCE_PROVIDED: {
    Icon: FileCheck2,
    container: 'bg-amber2-50 border-amber2-200',
    text: 'text-amber2-700',
    icon: 'text-amber2-600',
    dot: 'bg-amber2-500',
  },
  SELF_REPORTED: {
    Icon: PencilLine,
    container: 'bg-canvas-deep border-ink-faint/40',
    text: 'text-ink-muted',
    icon: 'text-ink-muted',
    dot: 'bg-ink-faint',
  },
};

const labelKey: Record<VerificationState, { short: string; label: string; desc: string; rank: string }> = {
  SOURCE_VERIFIED: { short: 'ver_verified_short', label: 'ver_verified_label', desc: 'ver_verified_desc', rank: 'ver_verified_rank' },
  EVIDENCE_PROVIDED: { short: 'ver_evidence_short', label: 'ver_evidence_label', desc: 'ver_evidence_desc', rank: 'ver_evidence_rank' },
  SELF_REPORTED: { short: 'ver_self_short', label: 'ver_self_label', desc: 'ver_self_desc', rank: 'ver_self_rank' },
};

export function VerificationBadge({
  state,
  size = 'md',
}: {
  state: VerificationState;
  size?: 'sm' | 'md';
}) {
  const { lang } = useLang();
  const vc = visualConfig[state];
  const { Icon } = vc;
  const padding = size === 'sm' ? 'px-1.5 py-0.5 gap-1 text-[11px]' : 'px-2 py-1 gap-1.5 text-xs';
  const iconSize = size === 'sm' ? 12 : 14;
  const short = ui[labelKey[state].short][lang];
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${vc.container} ${vc.text} ${padding}`}
    >
      <Icon size={iconSize} className={vc.icon} strokeWidth={2.25} />
      {short}
    </span>
  );
}

export function VerificationKey() {
  const { lang } = useLang();
  const t = (k: string) => ui[k]?.[lang] ?? k;
  return (
    <div className="grid gap-2.5 rounded-2xl border border-ink-faint/30 bg-canvas-card p-4 sm:grid-cols-3 sm:gap-3">
      {(Object.keys(visualConfig) as VerificationState[]).map((key) => {
        const vc = visualConfig[key];
        const { Icon } = vc;
        const lk = labelKey[key];
        return (
          <div key={key} className="flex items-start gap-2.5">
            <span
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${vc.container} ${vc.icon}`}
            >
              <Icon size={15} strokeWidth={2.25} />
            </span>
            <div className="min-w-0">
              <p className={`text-[13px] font-semibold leading-tight ${vc.text}`}>{t(lk.label)}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-muted">{t(lk.desc)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function VerificationRow({ state }: { state: VerificationState }) {
  const { lang } = useLang();
  const vc = visualConfig[state];
  const { Icon } = vc;
  const rank = ui[labelKey[state].rank][lang];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${vc.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${vc.dot}`} />
      <Icon size={12} className={vc.icon} strokeWidth={2.25} />
      {rank}
    </span>
  );
}

export { tr, Check };
export { visualConfig as verificationConfig };
