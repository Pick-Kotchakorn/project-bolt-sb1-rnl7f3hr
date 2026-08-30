import { useReveal } from '@/hooks/useReveal';
import { UserPlus, Link2, Share2 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create your PROVENA',
    description:
      'Claim your commercial creator identity. Choose a username, category, and country.',
  },
  {
    icon: Link2,
    number: '02',
    title: 'Connect your work',
    description:
      'Bring in platform data, campaigns, and supporting evidence. YouTube connects directly.',
  },
  {
    icon: Share2,
    number: '03',
    title: 'Share proof with brands',
    description:
      'Publish one URL brands can use to understand and evaluate you — with verified data.',
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-coral-600">
            How PROVENA works
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl md:text-5xl">
            Three steps from creator to commercial proof.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 font-display text-7xl font-extrabold text-ink-900/5 transition-colors group-hover:text-coral-200/40">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-600 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-gradient-to-r from-ink-200 to-transparent md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
