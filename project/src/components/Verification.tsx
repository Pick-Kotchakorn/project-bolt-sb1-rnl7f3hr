import { useReveal } from '@/hooks/useReveal';
import { BadgeCheck, FileText, PencilLine } from 'lucide-react';

const levels = [
  {
    icon: BadgeCheck,
    badge: 'Source verified',
    label: 'SOURCE VERIFIED',
    description:
      'Imported from an approved platform connection via API. The highest level of trust.',
    color: 'sage' as const,
    highlight: true,
  },
  {
    icon: FileText,
    badge: 'Evidence provided',
    label: 'EVIDENCE PROVIDED',
    description:
      'Supported by creator-provided screenshots, documents, or materials.',
    color: 'amber' as const,
    highlight: false,
  },
  {
    icon: PencilLine,
    badge: 'Self-reported',
    label: 'SELF-REPORTED',
    description:
      'Entered by the creator without external verification. Still useful context.',
    color: 'ink' as const,
    highlight: false,
  },
];

const colorMap = {
  sage: {
    bg: 'bg-sage-50',
    border: 'border-sage-200',
    iconBg: 'bg-sage-100',
    iconText: 'text-sage-700',
    badgeBg: 'bg-sage-500',
    ring: 'ring-sage-200',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-700',
    badgeBg: 'bg-amber-500',
    ring: 'ring-amber-200',
  },
  ink: {
    bg: 'bg-ink-100',
    border: 'border-ink-200',
    iconBg: 'bg-ink-200',
    iconText: 'text-ink-600',
    badgeBg: 'bg-ink-500',
    ring: 'ring-ink-200',
  },
};

export default function Verification() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="verification" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-coral-600">
            Trusted verification
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl md:text-5xl">
            Every metric shows exactly how it was verified.
          </h2>
          <p className="mt-4 text-lg text-ink-600 text-pretty">
            Brands see the difference at a glance — no guessing, no chasing screenshots.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {levels.map((level, i) => {
            const Icon = level.icon;
            const c = colorMap[level.color];
            return (
              <div
                key={level.label}
                className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-7 transition-all duration-300 hover:-translate-y-1 ${
                  level.highlight ? `ring-2 ${c.ring}` : ''
                }`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {level.highlight && (
                  <div className="absolute right-4 top-4">
                    <span className={`rounded-full ${c.badgeBg} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}>
                      Highest trust
                    </span>
                  </div>
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.iconText}`}>
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className={`mt-5 inline-block rounded-md ${c.badgeBg} px-2.5 py-1 text-[10px] font-bold tracking-wider text-white`}>
                  {level.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
