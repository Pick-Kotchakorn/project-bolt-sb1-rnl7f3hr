import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ShieldCheck, Globe, Users, ChartBar as BarChart3, Factory as History, Tag, X, Play } from 'lucide-react';

export default function Demo() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="demo" className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl border border-ink-900/8 bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-center sm:p-12 lg:p-16`}
          >
            <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-[500px] -translate-x-1/2 rounded-full bg-coral-500/15 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-700/40 bg-ink-800/50 px-4 py-1.5 text-xs font-medium text-ink-200 backdrop-blur">
                <Play className="h-3.5 w-3.5 text-coral-400" />
                Interactive demo
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-50 text-balance sm:text-4xl">
                See a real PROVENA profile in action.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300 text-pretty">
                Explore how brands see verified metrics, campaign history, and
                contact options — all in one page.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-coral-600 hover:shadow-float"
              >
                <Play className="h-4 w-4" />
                Try the demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {open && <DemoModal onClose={() => setOpen(false)} />}
    </>
  );
}

function DemoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-ink-900/10 bg-white shadow-float animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-ink-50 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
          aria-label="Close demo"
        >
          <X className="h-5 w-5" />
        </button>

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

            <div className="mt-6 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                Services & rates
              </p>
              {[
                { service: 'Dedicated video', price: '$1,200' },
                { service: 'Integrated mention', price: '$600' },
                { service: 'Social story bundle', price: '$400' },
              ].map((s) => (
                <div
                  key={s.service}
                  className="flex items-center justify-between rounded-lg border border-ink-900/5 bg-white px-3 py-2.5 shadow-soft"
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-ink-700">
                    <Tag className="h-3.5 w-3.5 text-coral-500" />
                    {s.service}
                  </span>
                  <span className="text-sm font-semibold text-ink-900">{s.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: metrics & campaigns */}
          <div className="p-6 sm:p-8">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
              <BarChart3 className="h-3.5 w-3.5" />
              Performance
            </p>
            <div className="grid grid-cols-3 gap-4">
              <DemoMetric label="Subscribers" value="124K" trend="+8.2%" verified />
              <DemoMetric label="Channel views" value="2.8M" trend="+12%" verified />
              <DemoMetric label="Videos" value="342" trend="+4" verified />
            </div>

            <p className="mb-3 mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
              <Users className="h-3.5 w-3.5" />
              Audience
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-ink-900/5 bg-ink-50 p-3">
                <p className="text-xs text-ink-400">Top country</p>
                <p className="mt-0.5 text-sm font-semibold text-ink-900">Thailand 62%</p>
              </div>
              <div className="rounded-xl border border-ink-900/5 bg-ink-50 p-3">
                <p className="text-xs text-ink-400">Age range</p>
                <p className="mt-0.5 text-sm font-semibold text-ink-900">18-34</p>
              </div>
            </div>

            <p className="mb-3 mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
              <History className="h-3.5 w-3.5" />
              Recent campaigns
            </p>
            <div className="space-y-2">
              {[
                { brand: 'Mae Krua', status: 'Completed', verified: true },
                { brand: 'Cafe Amazon', status: 'Completed', verified: true },
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

            <a
              href="#cta"
              onClick={onClose}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:bg-coral-600"
            >
              Work with me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function DemoMetric({
  label,
  value,
  trend,
  verified,
}: {
  label: string;
  value: string;
  trend: string;
  verified: boolean;
}) {
  return (
    <div className="rounded-xl border border-ink-900/5 bg-white p-3 shadow-soft">
      <div className="flex items-center gap-1">
        <p className="font-display text-xl font-bold text-ink-900">{value}</p>
        {verified && <ShieldCheck className="h-3.5 w-3.5 text-sage-600" />}
      </div>
      <p className="mt-0.5 text-[11px] text-ink-400">{label}</p>
      <p className="mt-1 text-[11px] font-medium text-sage-600">{trend}</p>
    </div>
  );
}
