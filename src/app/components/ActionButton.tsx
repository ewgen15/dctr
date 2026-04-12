import type { ReactNode } from 'react';
import { cn } from './ui/utils';

export interface ActionButtonProps {
  children: React.ReactNode;
  /** Іконка зліва від тексту */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

/**
 * Велика outline-кнопка для головної та інших CTA-блоків.
 * Розмір більший за звичайний Button (py-4, rounded-xl), full width.
 */
export function ActionButton({
  children,
  icon,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary py-4 font-medium text-primary transition-colors',
        'hover:bg-primary/10 disabled:pointer-events-none disabled:opacity-50',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
    >
      {icon && <span className="shrink-0 [&_svg]:size-5">{icon}</span>}
      {children}
    </button>
  );
}

export default ActionButton;
