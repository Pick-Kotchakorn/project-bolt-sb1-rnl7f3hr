import { useReveal } from '@/hooks/useReveal';
import { Layers, FileSpreadsheet, Link2, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: problem */}
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''}`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-coral-600">
              The problem
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl">
              Creator data is scattered everywhere.
            </h2>
            <p className="mt-4 text-lg text-ink-600 text-pretty">
              Brands request screenshots, spreadsheets, and links — wasting
              everyone's time. You repeat the same story in every pitch, and the
              proof never adds up.
            </p>

            <div className="mt-8 space-y-3">
              {[
                { icon: Layers, text: 'Metrics live across 5+ platforms' },
                { icon: FileSpreadsheet, text: 'Brands ask for custom spreadsheets' },
                { icon: Link2, text: 'Links break, screenshots go stale' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-xl border border-ink-900/8 bg-white p-4 shadow-soft"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-400">
                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <span className="text-sm font-medium text-ink-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: solution */}
          <div
            className={`reveal ${visible ? 'is-visible' : ''} relative`}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-8 shadow-float">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sage-200/40 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-wider text-sage-600">
                  The solution
                </p>
                <h3 className="mt-3 font-display text-2xl font-extrabold text-ink-900 text-balance">
                  One commercial proof page brands can evaluate in seconds.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  PROVENA turns fragmented creator data into a single, verified URL.
                  Update once, share everywhere.
                </p>

                {/* Mini proof card */}
                <div className="mt-6 rounded-xl border border-ink-900/8 bg-ink-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-coral-400 to-coral-600 text-sm font-bold text-white">
                      NT
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink-900">Nisa Thongkaew</p>
                      <p className="text-xs text-ink-400">provena.io/nisa.creates</p>
                    </div>
                    <span className="ml-auto rounded-full bg-sage-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sage-700">
                      Verified
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {['124K subs', '2.8M views', '342 videos'].map((stat) => (
                      <div
                        key={stat}
                        className="rounded-lg border border-ink-900/5 bg-white px-2 py-2.5 text-center text-xs font-semibold text-ink-700"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#cta"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-coral-600 transition-colors hover:text-coral-700"
                >
                  Build your proof page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
