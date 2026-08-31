import { useState } from 'react';
import { ArrowRight, Check, Loader2, MessageSquare, Sparkles } from 'lucide-react';
import type { CreatorProfile } from '@/types';
import { SectionHeader } from './Performance';
import { useLang, tr } from '@/i18n';
import { makeT } from '@/App';

type Status = 'idle' | 'submitting' | 'sent';

export function WorkWithMe({ creator }: { creator: CreatorProfile }) {
  const { lang } = useLang();
  const t = makeT(lang);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    campaign: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('sent'), 900);
  };

  const firstName = creator.displayName.split(' ')[0];
  const serviceOptions = creator.services.map((s) => tr(s.name, lang));

  return (
    <section
      id="work-with-me"
      className="mx-auto mt-20 max-w-content scroll-mt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-3xl border border-ink-faint/20 bg-ink shadow-lift">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-coral-400">
                {t('wwm_eyebrow')}
              </p>
              <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t('wwm_title').replace('{name}', firstName)}
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                {t('wwm_desc').replace('{name}', firstName)}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-[13px] font-medium text-white/60">{t('wwm_next_steps')}</p>
              {[t('wwm_step_1'), t('wwm_step_2'), t('wwm_step_3_fix')].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[12px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="text-[13px] leading-relaxed text-white/80">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
              <Sparkles size={16} className="text-coral-400" />
              <p className="text-[12px] text-white/60">
                {t('wwm_prefer_verify')}{' '}
                <a
                  href={`/${creator.username}/proof`}
                  className="font-semibold text-white/90 underline-offset-2 hover:underline"
                >
                  {t('wwm_view_evidence')}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-canvas p-6 sm:p-8 lg:p-10">
            {status === 'sent' ? (
              <SentState name={form.name || t('wwm_there')} />
            ) : (
              <>
                <SectionHeaderInline lang={lang} />
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={t('wwm_your_name')}
                      required
                      value={form.name}
                      onChange={(v) => update('name', v)}
                      placeholder={t('wwm_ph_name')}
                    />
                    <Field
                      label={t('wwm_company')}
                      required
                      value={form.company}
                      onChange={(v) => update('company', v)}
                      placeholder={t('wwm_ph_company')}
                    />
                  </div>
                  <Field
                    label={t('wwm_work_email')}
                    required
                    type="email"
                    value={form.email}
                    onChange={(v) => update('email', v)}
                    placeholder={t('wwm_ph_email')}
                  />

                  {serviceOptions.length > 0 && (
                    <div>
                      <label className="block text-[13px] font-medium text-ink-soft">
                        {t('wwm_interested_in')}
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="mt-1.5 h-11 w-full rounded-xl border border-ink-faint/30 bg-canvas-card px-3 text-sm text-ink-soft outline-none transition-colors focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                      >
                        <option value="">{t('wwm_select_service')}</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-[13px] font-medium text-ink-soft">
                      {t('wwm_campaign_info')}
                    </label>
                    <input
                      type="text"
                      value={form.campaign}
                      onChange={(e) => update('campaign', e.target.value)}
                      placeholder={t('wwm_ph_campaign')}
                      className="mt-1.5 h-11 w-full rounded-xl border border-ink-faint/30 bg-canvas-card px-3 text-sm text-ink-soft outline-none transition-colors focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-ink-soft">
                      {t('wwm_message')}
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder={t('wwm_ph_message')}
                      className="mt-1.5 w-full resize-none rounded-xl border border-ink-faint/30 bg-canvas-card p-3 text-sm text-ink-soft outline-none transition-colors focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-coral-500 text-[15px] font-semibold text-white transition-all hover:bg-coral-600 active:scale-95 disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        {t('wwm_sending')}
                      </>
                    ) : (
                      <>
                        {t('wwm_send')}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-ink-muted">{t('wwm_consent')}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeaderInline({ lang }: { lang: ReturnType<typeof useLang>['lang'] }) {
  const t = makeT(lang);
  return (
    <div>
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-coral-500">
        <MessageSquare size={13} />
        {t('wwm_inquiry_eyebrow')}
      </p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
        {t('wwm_form_title')}
      </h3>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-ink-soft">
        {label}
        {required && <span className="text-coral-500"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 h-11 w-full rounded-xl border border-ink-faint/30 bg-canvas-card px-3 text-sm text-ink-soft outline-none transition-colors focus:border-coral-400 focus:ring-2 focus:ring-coral-100"
      />
    </div>
  );
}

function SentState({ name }: { name: string }) {
  const { lang } = useLang();
  const t = makeT(lang);
  const desc = t('wwm_sent_desc').replace(
    '{name}',
    name ? (lang === 'th' ? ` ${name}` : `, ${name}`) : '',
  );
  return (
    <div className="flex animate-scale-in flex-col items-center justify-center py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100">
        <Check size={28} className="text-sage-600" strokeWidth={2.5} />
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{t('wwm_sent_title')}</h3>
      <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-ink-muted">{desc}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-6 inline-flex h-10 items-center rounded-full border border-ink-faint/30 px-4 text-sm font-semibold text-ink-soft transition-colors hover:border-ink/30"
      >
        {t('wwm_send_another')}
      </button>
    </div>
  );
}
