import { useState, useCallback, useMemo } from 'react';
import { TopBar } from '@/components/TopBar';
import { Hero } from '@/components/Hero';
import { Performance } from '@/components/Performance';
import { Audience } from '@/components/Audience';
import { Campaigns } from '@/components/Campaigns';
import { Services } from '@/components/Services';
import { WorkWithMe } from '@/components/WorkWithMe';
import { Footer, StickyCTA } from '@/components/Footer';
import { completeCreator, partialCreator, newCreator } from '@/data';
import type { CreatorProfile } from '@/types';
import { ShieldCheck } from 'lucide-react';
import { LangContext, useLang, type Lang } from '@/i18n';
import { ui } from '@/strings';

type StateKey = 'complete' | 'partial' | 'new';

const states: Record<StateKey, { labelKey: string; creator: CreatorProfile }> = {
  complete: { labelKey: 'state_complete', creator: completeCreator },
  partial: { labelKey: 'state_partial', creator: partialCreator },
  new: { labelKey: 'state_new', creator: newCreator },
};

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [stateKey, setStateKey] = useState<StateKey>('complete');
  const [showSticky, setShowSticky] = useState(true);

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'th' : 'en')), []);
  const ctxValue = useMemo(() => ({ lang, setLang, toggle }), [lang, toggle]);
  const creator = states[stateKey].creator;

  return (
    <LangContext.Provider value={ctxValue}>
      <div className={lang === 'th' ? 'font-thai' : ''}>
        <div className="min-h-screen bg-canvas">
          <TopBar username={creator.username} />

          <main>
            <Hero creator={creator} />
            <Performance creator={creator} />
            <Audience creator={creator} />
            <Campaigns creator={creator} />
            <Services creator={creator} />
            <WorkWithMe creator={creator} />
          </main>

          <Footer creator={creator} />
          <StickyCTA visible={showSticky} />

          <StateSwitcher
            current={stateKey}
            onChange={(k) => {
              setStateKey(k);
              setShowSticky(true);
            }}
          />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export function makeT(lang: Lang) {
  return (key: string): string => {
    const entry = ui[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en;
  };
}

function StateSwitcher({
  current,
  onChange,
}: {
  current: StateKey;
  onChange: (k: StateKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = makeT(lang);

  return (
    <div className="fixed bottom-20 left-4 z-50 md:bottom-6 md:left-6">
      <div className="relative">
        {open && (
          <div className="absolute bottom-full left-0 mb-2 w-48 animate-scale-in rounded-2xl border border-ink-faint/20 bg-canvas-card p-1.5 shadow-lift">
            <p className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              {t('switcher_label')}
            </p>
            {(Object.keys(states) as StateKey[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  onChange(k);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-[13px] font-medium transition-colors ${
                  current === k
                    ? 'bg-coral-50 text-coral-600'
                    : 'text-ink-soft hover:bg-canvas-warm'
                }`}
              >
                {current === k && <ShieldCheck size={14} />}
                {t(states[k].labelKey)}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 items-center gap-2 rounded-full border border-ink-faint/30 bg-canvas-card px-3.5 text-[12px] font-semibold text-ink-soft shadow-soft transition-all hover:shadow-lift"
        >
          <span className="h-2 w-2 rounded-full bg-coral-500" />
          {t(states[current].labelKey)}
        </button>
      </div>
    </div>
  );
}

export default App;
