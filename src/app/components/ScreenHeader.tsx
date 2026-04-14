import { ArrowLeft } from 'lucide-react';
import { cn } from './ui/utils';

type ScreenHeaderBase = {
  title: string;
  /** Нижня легка тінь (напр. «Мої записи») */
  elevated?: boolean;
  /** Липкий верх під час скролу (чекаут) */
  sticky?: boolean;
  className?: string;
};

export type ScreenHeaderProps =
  | (ScreenHeaderBase & {
      variant: 'titleCenter';
    })
  | (ScreenHeaderBase & {
      variant: 'backTitle';
      onBack: () => void;
    });

/**
 * Уніфікована шапка екрана: або заголовок по центру, або «назад» + заголовок зліва.
 */
export function ScreenHeader(props: ScreenHeaderProps) {
  const { title, elevated, sticky, className } = props;

  return (
    <header
      className={cn(
        'flex min-h-[56px] items-center bg-card',
        props.variant === 'titleCenter' && 'justify-center px-5 py-4',
        props.variant === 'backTitle' && 'gap-3 px-5 py-4',
        elevated && 'shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
        sticky && 'sticky top-0 z-10 shadow-sm',
        className,
      )}
    >
      {props.variant === 'backTitle' && (
        <button
          type="button"
          onClick={props.onBack}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg text-primary -ml-2 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          aria-label="Назад"
        >
          <ArrowLeft className="size-6" />
        </button>
      )}
      <h1
        className={cn(
          'text-xl font-semibold leading-[30px] text-foreground',
          props.variant === 'titleCenter' && 'w-full text-center',
          props.variant === 'backTitle' && 'min-w-0',
        )}
      >
        {title}
      </h1>
    </header>
  );
}
