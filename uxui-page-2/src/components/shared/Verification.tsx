import {
  ShieldCheck,
  FileCheck,
  UserPen,
  type LucideIcon,
} from 'lucide-react';
import type { VerificationState, FreshnessState } from '@/data/demoData';

export const verificationMeta: Record<
  VerificationState,
  { label: string; labelThai: string; icon: LucideIcon; pillClass: string; dotClass: string; textClass: string }
> = {
  SOURCE_VERIFIED: {
    label: 'Source verified',
    labelThai: 'ยืนยันจากแหล่งข้อมูล',
    icon: ShieldCheck,
    pillClass: 'pill-verified',
    dotClass: 'bg-sage-500',
    textClass: 'text-sage-700',
  },
  EVIDENCE_PROVIDED: {
    label: 'Evidence provided',
    labelThai: 'มีหลักฐานสนับสนุน',
    icon: FileCheck,
    pillClass: 'pill-evidence',
    dotClass: 'bg-amber-500',
    textClass: 'text-amber-700',
  },
  SELF_REPORTED: {
    label: 'Self-reported',
    labelThai: 'รายงานเอง',
    icon: UserPen,
    pillClass: 'pill-self',
    dotClass: 'bg-ink-400',
    textClass: 'text-ink-500',
  },
};

export const freshnessMeta: Record<
  FreshnessState,
  { label: string; pillClass: string; dotClass: string }
> = {
  fresh: { label: 'Fresh', pillClass: 'pill-fresh', dotClass: 'bg-sage-400' },
  stale: { label: 'Stale', pillClass: 'pill-stale', dotClass: 'bg-amber-400' },
  unknown: { label: 'Unknown', pillClass: 'pill-self', dotClass: 'bg-ink-300' },
};

export function VerificationPill({ state, size = 'sm' }: { state: VerificationState; size?: 'sm' | 'xs' }) {
  const meta = verificationMeta[state];
  const Icon = meta.icon;
  const sizeClass = size === 'xs' ? 'text-[10px] px-2 py-0.5' : '';
  return (
    <span className={`${meta.pillClass} ${sizeClass}`}>
      <Icon className={size === 'xs' ? 'h-2.5 w-2.5' : 'h-3 w-3'} strokeWidth={2.5} />
      {meta.label}
    </span>
  );
}

export function FreshnessPill({ state }: { state: FreshnessState }) {
  const meta = freshnessMeta[state];
  return (
    <span className={`${meta.pillClass} text-[10px]`}>
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dotClass}`} />
      {meta.label}
    </span>
  );
}

export function ChangeIndicator({ change }: { change: { value: string; direction: 'up' | 'down' | 'flat' } }) {
  const color =
    change.direction === 'up'
      ? 'text-sage-600 bg-sage-50'
      : change.direction === 'down'
      ? 'text-provena-600 bg-provena-50'
      : 'text-ink-500 bg-ink-50';
  const arrow = change.direction === 'up' ? '↑' : change.direction === 'down' ? '↓' : '→';
  return (
    <span className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-semibold ${color}`}>
      {arrow} {change.value}
    </span>
  );
}
