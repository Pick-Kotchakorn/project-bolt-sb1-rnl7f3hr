import { useState } from 'react';
import { WorkspaceShell, type ViewKey } from '@/components/WorkspaceShell';
import { DashboardPage } from '@/components/pages/DashboardPage';
import { OverviewPage } from '@/components/pages/OverviewPage';
import { InsightPage } from '@/components/pages/InsightPage';
import { PublicProfilePage } from '@/components/pages/PublicProfilePage';
import type { Lang } from '@/data/demoData';

function App() {
  const [view, setView] = useState<ViewKey>('dashboard');
  const [selectedId, setSelectedId] = useState<string>('');
  const [lang, setLang] = useState<Lang>('en');

  const handleNavigate = (next: ViewKey, payload?: string) => {
    if (payload) setSelectedId(payload);
    setView(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <WorkspaceShell current={view} onNavigate={handleNavigate} lang={lang} setLang={setLang}>
      {view === 'dashboard' && <DashboardPage onNavigate={handleNavigate} lang={lang} />}
      {view === 'overview' && <OverviewPage onNavigate={handleNavigate} lang={lang} />}
      {view === 'insight' && (
        <InsightPage onNavigate={handleNavigate} selectedId={selectedId} lang={lang} />
      )}
      {view === 'public-profile' && (
        <PublicProfilePage onNavigate={handleNavigate} lang={lang} />
      )}
    </WorkspaceShell>
  );
}

export default App;
