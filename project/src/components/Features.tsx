import { useReveal } from '@/hooks/useReveal';
import {
  UserCircle,
  BarChart3,
  History,
  Users,
  Tag,
  Mail,
} from 'lucide-react';

const features = [
  {
    icon: UserCircle,
    title: 'Creator identity',
    description: 'Name, category, audience — who you are at a glance.',
  },
  {
    icon: BarChart3,
    title: 'Verified metrics',
    description: 'Subscriber count, views, growth — backed by real data.',
  },
  {
    icon: History,
    title: 'Campaign history',
    description: 'Past brand partnerships, all in one timeline.',
  },
  {
    icon: Users,
    title: 'Audience fit',
    description: 'Demographics and niche so brands know you match.',
  },
  {
    icon: Tag,
    title: 'Services & rates',
    description: 'What you offer and pricing, clearly stated.',
  },
  {
    icon: Mail,
    title: 'Direct contact',
    description: 'A "work with me" call-to-action brands can act on.',
  },
];

export default function Features() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="relative bg-ink-900 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-coral-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-coral-400">
            Everything in one place
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-50 text-balance sm:text-4xl md:text-5xl">
            Everything a brand needs to make a decision.
          </h2>
          <p className="mt-4 text-lg text-ink-300 text-pretty">
            Your PROVENA combines identity, verified performance, campaign history,
            and ways to work together — in one place.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal ${visible ? 'is-visible' : ''} group rounded-2xl border border-ink-700/40 bg-ink-800/50 p-6 backdrop-blur transition-all duration-300 hover:border-coral-500/30 hover:bg-ink-800`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-coral-500/10 text-coral-400 transition-colors group-hover:bg-coral-500 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-50">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
