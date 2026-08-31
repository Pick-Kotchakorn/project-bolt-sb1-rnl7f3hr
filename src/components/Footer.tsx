import { Battery as Twitter, Route as Youtube, Drama as Instagram } from 'lucide-react';
import Logo from '@/components/Logo';

const footerNav = [
  {
    title: 'Product',
    links: ['How it works', 'Features', 'Verification', 'Pricing', 'Demo'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/8 bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Turn your work into proof. One commercial profile that shows brands
              who you are and the verified results behind your performance.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-900/8 bg-white text-ink-500 transition-colors hover:border-ink-900/15 hover:text-ink-900"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-600 transition-colors hover:text-ink-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-900/8 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} PROVENA. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">
            Built for creators. Trusted by brands.
          </p>
        </div>
      </div>
    </footer>
  );
}
