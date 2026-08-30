import { useReveal } from '@/hooks/useReveal';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Nisa Thongkaew',
    handle: '@nisa.creates',
    role: 'Food & Lifestyle Creator',
    avatar: 'NT',
    color: 'from-coral-400 to-coral-600',
    quote:
      'Brands used to ask me for screenshots and spreadsheets every single time. Now I just send one link and they get everything verified.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    handle: '@marcuschen',
    role: 'Brand Partnership Lead, Luma Studio',
    avatar: 'MC',
    color: 'from-sage-400 to-sage-600',
    quote:
      'PROVENA cut our creator evaluation time from two days to ten minutes. The verification badges tell us instantly what we can trust.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    handle: '@priya.eats',
    role: 'Food Creator, 280K subscribers',
    avatar: 'PS',
    color: 'from-amber-400 to-amber-600',
    quote:
      'I landed three brand deals in the first month just by sharing my PROVENA link. It feels like having a portfolio that actually proves results.',
    rating: 5,
  },
  {
    name: 'David Okafor',
    handle: '@davidokafor',
    role: 'Influencer Marketing Manager',
    avatar: 'DO',
    color: 'from-ink-500 to-ink-700',
    quote:
      'The difference between self-reported and source-verified metrics is exactly what we needed. No more guessing if the numbers are real.',
    rating: 5,
  },
  {
    name: 'Yuki Tanaka',
    handle: '@yuki.travels',
    role: 'Travel Creator, 95K subscribers',
    avatar: 'YT',
    color: 'from-coral-400 to-coral-600',
    quote:
      'I used to spend hours putting together media kits. Now my PROVENA does it for me, and it updates automatically when my channel grows.',
    rating: 5,
  },
  {
    name: 'Sofia Reyes',
    handle: '@sofia.reyes',
    role: 'Creator Economy Consultant',
    avatar: 'SR',
    color: 'from-sage-400 to-sage-600',
    quote:
      'This is the tool the creator economy has been missing. A single source of truth that works for creators and brands alike.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="reviews" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-coral-600">
            Loved by creators & brands
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl md:text-5xl">
            Proof that speaks for itself.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-ink-600">
              4.9/5 from 500+ creators
            </span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal ${visible ? 'is-visible' : ''} group relative flex flex-col rounded-2xl border border-ink-900/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-ink-900/5" />
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-sm font-bold text-white`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-400">{t.handle}</p>
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between border-t border-ink-900/5 pt-3">
                <span className="text-xs text-ink-500">{t.role}</span>
                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
