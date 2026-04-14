import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useI18n } from '../i18n';
import { DoctorCardIdentity, doctorCardShellClassName } from './DoctorCard';
import { Button } from './ui/button';
import { cn } from './ui/utils';

export type VisitStatus = 'scheduled' | 'completed' | 'cancelled';

export interface VisitInfoRow {
  icon: ReactNode;
  text: string;
}

export interface VisitAction {
  label: string;
  /** primary = заповнена кнопка, secondary = прозора з рамкою */
  variant: 'primary' | 'secondary';
  /** Іконка праворуч від тексту */
  icon?: ReactNode;
  onClick?: () => void;
}

export interface VisitDiagnosis {
  text: string;
  medicationsCount: number;
  totalPrice: number;
}

export interface VisitDoctor {
  name: string;
  specialty: string;
  service: string;
  avatarUrl: string;
}

export interface VisitCardProps {
  status: VisitStatus;
  doctor: VisitDoctor;
  /** Рядки інформації: дата, час, місце, тип — будь-яка комбінація */
  infoRows: VisitInfoRow[];
  /** Блок діагнозу — необов'язковий */
  diagnosis?: VisitDiagnosis;
  /** 1 або 2 кнопки дій */
  actions?: VisitAction[];
  /** Кнопка закрити (X) у правому куті — необов'язкова */
  onDismiss?: () => void;
}

const STATUS_STYLE: Record<
  VisitStatus,
  { stripBg: string; textColor: string }
> = {
  scheduled: {
    stripBg: 'bg-[#E0F2FE]',
    textColor: 'text-[#026AA2]',
  },
  completed: {
    stripBg: 'bg-[#D1FADF]',
    textColor: 'text-[#027A48]',
  },
  cancelled: {
    stripBg: 'bg-[#FEE4E2]',
    textColor: 'text-[#B42318]',
  },
};

/**
 * Картка візиту. Блок лікаря — `DoctorCardIdentity` з `DoctorCard.tsx` (та сама типографіка й аватар, що в каталозі).
 * @see https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=136-424 — макет VisitCard у Figma
 * Кнопки дій — `Button` з `ui/button` (тема на базі Untitled UI токенів); Figma: [Untitled UI — Button](https://www.figma.com/design/AoYmfbYqtUXcz8zUqmVLbb?node-id=1038-34411).
 */
export function VisitCard({
  status,
  doctor,
  infoRows,
  diagnosis,
  actions = [],
  onDismiss,
}: VisitCardProps) {
  const { t } = useI18n();
  const { stripBg, textColor } = STATUS_STYLE[status];
  const statusLabel = t(`visit.status.${status}`);

  return (
    <div className={doctorCardShellClassName}>
      {/* Status strip */}
      <div className={`flex justify-center py-0.5 ${stripBg}`}>
        <span className={`text-xs font-medium leading-[18px] ${textColor}`}>
          {statusLabel}
        </span>
      </div>

      {/* Dismiss button */}
      {onDismiss && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onDismiss}
          aria-label={t('visit.close')}
          className="absolute top-6 right-3 text-muted-foreground hover:text-foreground"
        >
          <X className="size-5" />
        </Button>
      )}

      <div className="flex flex-col gap-3 p-4">
        <DoctorCardIdentity
          name={doctor.name}
          specialty={doctor.specialty}
          detailLine={doctor.service}
          avatarUrl={doctor.avatarUrl}
        />

        {/* Info rows — icon + text, будь-яка кількість */}
        {infoRows.length > 0 && (
          <div className="flex flex-col gap-2 text-xs leading-[18px] text-[#717680]">
            {infoRows.map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="size-4 shrink-0">{row.icon}</span>
                <span>{row.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Diagnosis block */}
        {diagnosis && (
          <div className="flex flex-col gap-2 rounded-lg bg-primary/10 p-3">
            <div className="flex flex-col gap-1">
              <p className="text-xs leading-[18px] text-muted-foreground">
                {t('visit.diagnosis')}
              </p>
              <p className="text-sm font-medium leading-5 text-foreground">
                {diagnosis.text}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs leading-[18px] text-muted-foreground">
                {t('visit.prescribed')}
              </p>
              <p className="text-sm leading-5 text-primary">
                {t('visit.prescribedLine', {
                  count: diagnosis.medicationsCount,
                  price: diagnosis.totalPrice,
                })}
              </p>
            </div>
          </div>
        )}

        {/* Actions — 1 кнопка = full-width, 2 кнопки = рівні колонки */}
        {actions.length > 0 && (
          <div className="flex gap-2">
            {actions.map((action, i) => (
              <Button
                key={i}
                type="button"
                variant={action.variant === 'primary' ? 'default' : 'outline'}
                onClick={action.onClick}
                className={cn(
                  'min-h-10 flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
                  action.variant === 'secondary' &&
                    'border-primary/20 bg-primary/10 text-primary hover:bg-primary/15',
                )}
              >
                {action.label}
                {action.icon && <span className="size-5 shrink-0">{action.icon}</span>}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
