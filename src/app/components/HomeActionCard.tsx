import type { ReactNode } from 'react';
import { cn } from './ui/utils';

export interface HomeActionCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  className?: string;
}

export function HomeActionCard({
  icon,
  title,
  subtitle,
  onClick,
  className,
}: HomeActionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full flex-col items-start gap-2 rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-all',
        'hover:border-primary/30 hover:shadow-md',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className
      )}
    >
      <span className="shrink-0 text-primary [&_svg]:size-8">{icon}</span>
      <div className="min-w-0">
        <p className="font-semibold text-foreground">{title}</p>
        {subtitle && (
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </button>
  );
}

export default HomeActionCard;
