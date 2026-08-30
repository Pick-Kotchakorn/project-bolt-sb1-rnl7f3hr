import { useReveal } from '@/hooks/useReveal';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    tagline: 'Build your proof',
    description: 'Start your professional creator profile.',
    cta: 'Start for free',
    href: '#cta',
    highlighted: false,
    badge: null,
    features: [
      'Public PROVENA profile',
      'Publish & share your profile',
      'Work with me / lead capture',
      'Manual & self-reported proof',
      '1 source-verified platform',
      '1 campaign proof',
      'Up to 2 services',
      'Basic lead inbox',
    ],
  },
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    tagline: 'Get hired with proof',
    description: 'Turn your performance into brand opportunities.',
    cta: 'Upgrade to Starter',
    href: '#cta',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Everything in Free',
      'Multiple campaign proof',
      'More services / rate card',
      'Evidence upload',
      'Standard deep proof',
      'Basic audience insights',
      'Basic content performance',
      'Full lead inbox & analytics',
      'Reduced PROVENA branding',
    ],
  },
  {
    name: 'Growth',
    price: '$19',
    period: '/month',
    tagline: 'Show the full evidence',
    description: 'Give brands everything they need to hire with confidence.',
    cta: 'Upgrade to Growth',
    href: '#cta',
    highlighted: false,
    badge: null,
    features: [
      'Everything in Starter',
      'Multiple source-verified platforms',
      'Full deep proof',
      'Full audience demographics',
      'Performance history',
      'Advanced content performance',
      'Full evidence ledger',
      'Advanced CTA / lead analytics',
      'Removable PROVENA branding',
    ],
  },
];

export default function Pricing() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-coral-600">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl md:text-5xl">
            Plans that grow with your proof.
          </h2>
          <p className="mt-4 text-lg text-ink-600 text-pretty">
            Start free. Upgrade when you're ready to turn verified performance
            into brand deals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal ${visible ? 'is-visible' : ''} relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-coral-500 bg-white shadow-float lg:-translate-y-3 ring-2 ring-coral-500/20'
                  : 'border-ink-900/8 bg-white shadow-card hover:-translate-y-1 hover:shadow-float'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-card">
                    <Sparkles className="h-3.5 w-3.5" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  {plan.name}
                </h3>
                <p className="text-sm font-semibold text-coral-600">{plan.tagline}</p>
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-ink-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm font-medium text-ink-400">{plan.period}</span>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {plan.description}
              </p>

              <a
                href={plan.href}
                className={`group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-coral-500 text-white shadow-card hover:bg-coral-600 hover:shadow-float'
                    : 'bg-ink-900 text-ink-50 shadow-soft hover:bg-ink-800'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <ul className="mt-7 space-y-3 border-t border-ink-900/5 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? 'bg-coral-50 text-coral-600' : 'bg-sage-50 text-sage-600'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-ink-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-400">
          All plans include a public profile. No card required to start.
        </p>
      </div>
    </section>
  );
}
