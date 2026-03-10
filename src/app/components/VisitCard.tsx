import type { ReactNode } from 'react';
import { X } from 'lucide-react';

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

const STATUS_CONFIG: Record<
  VisitStatus,
  { label: string; stripBg: string; textColor: string }
> = {
  scheduled: {
    label: 'Заплановано',
    stripBg: 'bg-[#E0F2FE]',
    textColor: 'text-[#026AA2]',
  },
  completed: {
    label: 'Завершено',
    stripBg: 'bg-[#D1FADF]',
    textColor: 'text-[#027A48]',
  },
  cancelled: {
    label: 'Скасовано',
    stripBg: 'bg-[#FEE4E2]',
    textColor: 'text-[#B42318]',
  },
};

export function VisitCard({
  status,
  doctor,
  infoRows,
  diagnosis,
  actions = [],
  onDismiss,
}: VisitCardProps) {
  const { label, stripBg, textColor } = STATUS_CONFIG[status];

  return (
    <div className="relative overflow-hidden rounded-lg bg-card shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
      {/* Status strip */}
      <div className={`flex justify-center py-0.5 ${stripBg}`}>
        <span className={`text-xs font-medium leading-[18px] ${textColor}`}>
          {label}
        </span>
      </div>

      {/* Dismiss button */}
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Закрити"
          className="absolute top-6 right-3 text-muted-foreground hover:text-foreground"
        >
          <X className="size-5" />
        </button>
      )}

      <div className="flex flex-col gap-3 p-4">
        {/* Doctor info */}
        <div className="flex gap-2">
          <img
            src={doctor.avatarUrl}
            alt={doctor.name}
            className="size-12 shrink-0 rounded-full object-cover"
          />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <h3 className="text-base font-semibold leading-6 text-foreground">
              {doctor.name}
            </h3>
            <p className="text-sm leading-5 text-primary">{doctor.specialty}</p>
            <p className="text-xs leading-[18px] text-muted-foreground">
              {doctor.service}
            </p>
          </div>
        </div>

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
              <p className="text-xs leading-[18px] text-muted-foreground">Діагноз:</p>
              <p className="text-sm font-medium leading-5 text-foreground">
                {diagnosis.text}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs leading-[18px] text-muted-foreground">Призначено:</p>
              <p className="text-sm leading-5 text-primary">
                {diagnosis.medicationsCount} препарат(ів) ~{diagnosis.totalPrice} грн
              </p>
            </div>
          </div>
        )}

        {/* Actions — 1 кнопка = full-width, 2 кнопки = рівні колонки */}
        {actions.length > 0 && (
          <div className={`flex gap-2 ${actions.length === 1 ? '' : ''}`}>
            {actions.map((action, i) => (
              <button
                key={i}
                onClick={action.onClick}
                className={[
                  'flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
                  action.variant === 'primary'
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-primary/20 bg-primary/10 text-primary',
                ].join(' ')}
              >
                {action.label}
                {action.icon && <span className="size-5 shrink-0">{action.icon}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
