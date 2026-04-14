import { LanguageSwitcher } from '../i18n';

/**
 * Імітація системного статус-бару (час, сигнал, батарея) + перемикач мови в одному рядку.
 * @see Storybook: Components/StatusBar
 */
export default function StatusBar() {
  return (
    <div className="flex h-11 shrink-0 items-center justify-between gap-2 bg-transparent px-3 text-sm">
      <span className="font-semibold tabular-nums">9:41</span>
      <div className="flex min-w-0 items-center gap-1.5">
        <LanguageSwitcher
          variant="dense"
          className="shrink-0 border-primary/20 bg-background/90 shadow-sm"
        />
        <div className="flex shrink-0 items-center gap-0.5">
          <svg width="17" height="11" viewBox="0 0 17 11" fill="none" aria-hidden>
            <rect x="0.5" y="0.5" width="4" height="10" rx="1" fill="black" />
            <rect x="6" y="0.5" width="4" height="10" rx="1" fill="black" />
            <rect x="11.5" y="0.5" width="4" height="10" rx="1" fill="black" />
          </svg>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden>
            <path
              d="M13.5 1.5C14.88 1.5 16 2.62 16 4C16 5.38 14.88 6.5 13.5 6.5H2.5C1.12 6.5 0 5.38 0 4C0 2.62 1.12 1.5 2.5 1.5H13.5Z"
              fill="black"
            />
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden>
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="black" fill="none" />
            <path d="M23 3.5V8.5C24.5 8 24.5 4 23 3.5Z" fill="black" />
            <rect x="2" y="2" width="17" height="8" rx="1" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}
