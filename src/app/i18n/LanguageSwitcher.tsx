import { cn } from '../components/ui/utils';
import { useI18n } from './I18nContext';
import type { AppLocale } from './types';

type LanguageSwitcherProps = {
  className?: string;
  /** Вузький варіант для рядка `StatusBar`. */
  variant?: 'default' | 'dense';
};

/** Перемикач UK / EN (у продакшені — у `StatusBar`; у Storybook — окремо). */
export function LanguageSwitcher({ className, variant = 'default' }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useI18n();

  const dense = variant === 'dense';

  const btn = (code: AppLocale, label: string) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={cn(
        'rounded font-semibold transition-colors',
        dense ? 'px-1.5 py-0.5 text-[10px] leading-none' : 'rounded-md px-2 py-1 text-xs',
        locale === code
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground hover:bg-muted/80',
      )}
      aria-pressed={locale === code}
      aria-label={`${t('lang.switch')}: ${label}`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-lg border border-border bg-card/95 px-0.5 py-0.5 shadow-sm backdrop-blur-sm',
        dense && 'gap-0 rounded-md px-0.5 py-px',
        className,
      )}
      role="group"
      aria-label={t('lang.switch')}
    >
      {btn('uk', t('lang.uk'))}
      {btn('en', t('lang.en'))}
    </div>
  );
}
