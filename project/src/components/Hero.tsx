import { ArrowRight, ShieldCheck, Sparkles, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-48 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-coral-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-72 w-72 rounded-full bg-sage-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-ink-50/80 px-4 py-1.5 text-xs font-medium text-ink-600 shadow-soft backdrop-blur animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-coral-500" />
            <span>One commercial profile. Verified proof. Trusted by brands.</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 text-balance sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Turn your work
            <br className="hidden sm:block" /> into{' '}
            <span className="gradient-text-coral">proof.</span>
          </h1>

          {/* Subhead */}
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-600 text-pretty sm:text-xl animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Build one commercial profile that shows brands who you are, what you've
            done, and the verified proof behind your performance.
          </p>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            <a
              href="#cta"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-base font-semibold text-ink-50 shadow-card transition-all hover:bg-ink-800 hover:shadow-float sm:w-auto"
            >
              Claim your PROVENA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-900/10 bg-ink-50 px-7 py-3.5 text-base font-semibold text-ink-700 shadow-soft transition-all hover:border-ink-900/20 hover:bg-white sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <p
            className="mt-4 text-sm text-ink-400 animate-fade-in"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            Free to start. No card required.
          </p>
        </div>

        {/* Profile preview card */}
        <div
          className="relative mx-auto mt-16 max-w-5xl animate-scale-in"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
            <div className="flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-xs font-medium text-ink-50 shadow-float">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-400 animate-pulse-soft" />
              Live PROVENA preview
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-float">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-ink-900/5 bg-ink-50 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-sage-400/70" />
              </div>
              <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-xs text-ink-400 shadow-soft">
                <Globe className="h-3 w-3" />
                provena.io/nisa.creates
              </div>
            </div>

            {/* Profile content */}
            <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
              {/* Left: identity */}
              <div className="border-b border-ink-900/5 bg-gradient-to-br from-ink-50 to-white p-6 md:border-b-0 md:border-r sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-400 to-coral-600 text-xl font-bold text-white shadow-card">
                    NT
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold text-ink-900">
                      Nisa Thongkaew
                    </h3>
                    <p className="text-sm text-ink-500">@nisa.creates</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-sage-100 px-2.5 py-0.5 text-xs font-medium text-sage-700">
                        Food & Lifestyle
                      </span>
                      <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-600">
                        Thailand
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-600">
                  Food & lifestyle creator helping brands reach Thai audiences
                  through authentic content.
                </p>

                <div className="mt-6 flex items-center gap-2 rounded-lg border border-sage-200 bg-sage-50 px-3 py-2">
                  <ShieldCheck className="h-4 w-4 text-sage-600" />
                  <span className="text-xs font-medium text-sage-700">
                    YouTube connected & verified
                  </span>
                </div>
              </div>

              {/* Right: metrics */}
              <div className="p-6 sm:p-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Performance
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <Metric label="Subscribers" value="124K" trend="+8.2%" />
                  <Metric label="Channel views" value="2.8M" trend="+12%" />
                  <Metric label="Videos" value="342" trend="+4" />
                </div>

                <p className="mb-3 mt-7 text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Recent campaigns
                </p>
                <div className="space-y-2">
                  {[
                    { brand: 'Mae Krua', status: 'Completed', verified: true },
                    { brand: 'Café Amazon', status: 'Completed', verified: true },
                    { brand: 'Doi Kham', status: 'Completed', verified: true },
                  ].map((c) => (
                    <div
                      key={c.brand}
                      className="flex items-center justify-between rounded-lg border border-ink-900/5 bg-ink-50 px-3 py-2.5"
                    >
                      <span className="text-sm font-medium text-ink-700">{c.brand}</span>
                      <span className="flex items-center gap-1.5 text-xs text-sage-600">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {c.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-ink-900/5 bg-white p-3 shadow-soft">
      <p className="font-display text-xl font-bold text-ink-900">{value}</p>
      <p className="mt-0.5 text-[11px] text-ink-400">{label}</p>
      <p className="mt-1 text-[11px] font-medium text-sage-600">{trend}</p>
    </div>
  );
}
