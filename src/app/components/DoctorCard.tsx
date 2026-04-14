import { Clock, MapPin } from 'lucide-react';
import type { Doctor } from '../data/doctors';
import { useI18n } from '../i18n';
import { Button } from './ui/button';
import { cn } from './ui/utils';

/** Спільна обгортка картки лікаря / запису (візуальна база). */
export const doctorCardShellClassName =
  'relative overflow-hidden rounded-lg bg-card shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]';

/**
 * Блок аватар + ПІБ + спеціальність + третій ряд (послуга або мета каталогу).
 * Використовується в `DoctorCard` і всередині `VisitCard` для однакової типографіки та відступів.
 */
export function DoctorCardIdentity({
  name,
  specialty,
  detailLine,
  avatarUrl,
}: {
  name: string;
  specialty: string;
  /** Напр. послуга (візит) або «4.8 (124 відгуків), 12 років досвіду» (каталог) */
  detailLine: string;
  avatarUrl: string;
}) {
  return (
    <div className="flex gap-2">
      <img
        src={avatarUrl}
        alt={name}
        className="size-12 shrink-0 rounded-full object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="text-base font-semibold leading-6 text-foreground">{name}</h3>
        <p className="text-sm leading-5 text-primary">{specialty}</p>
        <p className="text-xs leading-[18px] text-muted-foreground">{detailLine}</p>
      </div>
    </div>
  );
}

export interface DoctorCardProps {
  doctor: Doctor;
  onBook: (id: string) => void;
}

/**
 * Картка лікаря в каталозі — та сама база, що й блок лікаря в `VisitCard` (розширення контентом ціни, адреси, слоту).
 */
export function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  const { t } = useI18n();
  const detailLine = t('doctorCard.metaLine', {
    rating: doctor.rating,
    reviewsCount: doctor.reviewsCount,
    years: doctor.experienceYears,
  });

  return (
    <div className={doctorCardShellClassName}>
      <div className="flex flex-col gap-3 p-4">
        <DoctorCardIdentity
          name={doctor.name}
          specialty={doctor.specialties}
          detailLine={detailLine}
          avatarUrl={doctor.photo}
        />

        <p className="text-sm leading-5 text-foreground">
          {t('doctorCard.consultation')}{' '}
          <span className="font-semibold">
            {doctor.consultationPrice} {t('doctorCard.currency')}
          </span>
        </p>

        <div className="flex flex-col gap-2 text-xs leading-[18px] text-[#717680]">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-primary" />
            <span>{doctor.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-primary" />
            <span>
              {t('doctorCard.nearestSlot')} {doctor.nearestSlot}
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => onBook(doctor.id)}
          className={cn(
            'min-h-10 w-full rounded-lg px-4 py-2.5 text-sm font-semibold shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
            'border-primary/20 bg-primary/10 text-primary hover:bg-primary/15',
          )}
        >
          {t('doctorCard.book')}
        </Button>
      </div>
    </div>
  );
}
