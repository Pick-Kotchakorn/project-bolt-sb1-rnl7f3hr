import { useState, useEffect, type ReactNode } from 'react';
import {
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  ExternalLink,
  Menu,
  X,
  LogOut,
  Globe,
} from 'lucide-react';
import { creator } from '@/data/demoData';

export type ViewKey = 'dashboard' | 'overview' | 'insight' | 'public-profile';
export type Lang = 'en' | 'th';

interface ShellProps {
  current: ViewKey;
  onNavigate: (view: ViewKey, payload?: string) => void;
  children: ReactNode;
  lang: Lang;
  setLang: (l: Lang) => void;
}

const navItems: { key: ViewKey; label: string; labelThai: string; icon: typeof LayoutDashboard }[] = [
  { key: 'dashboard', label: 'Dashboard', labelThai: 'แดชบอร์ด', icon: LayoutDashboard },
  { key: 'overview', label: 'Proof Overview', labelThai: 'ภาพรวมหลักฐาน', icon: ShieldCheck },
  { key: 'insight', label: 'Deep Insight', labelThai: 'ข้อมูลเชิงลึก', icon: TrendingUp },
];

export function WorkspaceShell({ current, onNavigate, children, lang, setLang }: ShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [current]);

  const isInsight = current === 'insight';
  const activeNav = isInsight ? 'overview' : current;

  return (
    <div className="min-h-screen bg-canvas-50">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-ink-100 bg-canvas-50/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 lg:px-8">
          {/* Logo + nav */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-provena-500">
                <span className="font-sans text-sm font-bold text-white">P</span>
              </div>
              <span className="font-sans text-lg font-bold tracking-tight text-ink-900">
                PROVENA
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
    const Icon = item.icon;
                const active = activeNav === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => onNavigate(item.key)}
                    className={active ? 'nav-link-active' : 'nav-link-inactive'}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                    {lang === 'th' ? item.labelThai : item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Language toggle */}
            <div className="flex items-center rounded-lg border border-ink-200 bg-white p-0.5">
              <button
                onClick={() => setLang('en')}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === 'en' ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('th')}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                  lang === 'th' ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                ไทย
              </button>
            </div>

            <button
              onClick={() => onNavigate('public-profile')}
              className="hidden items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-300 hover:bg-ink-50 sm:inline-flex"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {lang === 'th' ? 'โปรไฟล์สาธารณะ' : 'Public Profile'}
            </button>

            {/* Creator chip */}
            <div className="hidden items-center gap-2.5 rounded-lg border border-ink-100 bg-white px-3 py-1.5 lg:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-provena-100 text-xs font-bold text-provena-700">
                {creator.avatarInitials}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink-900">{creator.name}</p>
                <p className="text-xs text-ink-400">{creator.username}</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="inline-flex items-center justify-center rounded-lg border border-ink-200 bg-white p-2 text-ink-600 md:hidden"
            >
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileNavOpen && (
          <div className="border-t border-ink-100 bg-white md:hidden">
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => {
    const Icon = item.icon;
                const active = activeNav === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => onNavigate(item.key)}
                    className={active ? 'nav-link-active' : 'nav-link-inactive'}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                    {lang === 'th' ? item.labelThai : item.label}
                  </button>
                );
              })}
              <button
                onClick={() => onNavigate('public-profile')}
                className="nav-link-inactive"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={2} />
                {lang === 'th' ? 'โปรไฟล์สาธารณะ' : 'Public Profile'}
              </button>
              <div className="mt-2 flex items-center gap-2.5 border-t border-ink-100 pt-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-provena-100 text-xs font-bold text-provena-700">
                  {creator.avatarInitials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{creator.name}</p>
                  <p className="text-xs text-ink-400">{creator.username}</p>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-[1600px] px-4 py-6 lg:px-8 lg:py-8">{children}</main>

      {/* Footer */}
      <footer className="border-t border-ink-100 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-ink-400 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-provena-500">
              <span className="text-[9px] font-bold text-white">P</span>
            </div>
            <span className="font-semibold text-ink-500">PROVENA</span>
            <span>— {lang === 'th' ? 'พื้นที่ส่วนตัวของครีเอเตอร์' : 'Private creator workspace'}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              {lang === 'th' ? 'ต้นแบบสาธิต' : 'Prototype demo'}
            </span>
            <span className="flex items-center gap-1">
              <LogOut className="h-3 w-3" />
              {lang === 'th' ? 'ออกจากระบบ' : 'Sign out'}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
