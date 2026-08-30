import { useReveal } from '@/hooks/useReveal';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="cta" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-16 text-center sm:px-12 lg:py-24`}
        >
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-coral-500/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-sage-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-700/40 bg-ink-800/50 px-4 py-1.5 text-xs font-medium text-ink-200 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-sage-400" />
              Free to start. No card required.
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink-50 text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Turn your work into proof.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300 text-pretty">
              Create your PROVENA and give brands one place to understand your work.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:bg-coral-600 hover:shadow-float sm:w-auto"
              >
                Claim your PROVENA
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink-700/40 bg-ink-800/30 px-7 py-3.5 text-base font-semibold text-ink-100 backdrop-blur transition-all hover:bg-ink-800/60 sm:w-auto"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
