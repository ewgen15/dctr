import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer';
import { cn } from './ui/utils';
import type { MedOption, PrescribedMed } from '../data/prescribedMedications';
import { getDefaultOptionId } from '../data/prescribedMedications';

function OptionBadges({ option }: { option: MedOption }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {option.prescribedByDoctor && (
        <span
          className={cn(
            'rounded-full border border-primary/40 bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary',
          )}
        >
          Прописано лікарем
        </span>
      )}
      {option.isTop && (
        <span
          className={cn(
            'rounded-full border border-amber-300/80 bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-950 dark:bg-amber-950/50 dark:text-amber-100 dark:border-amber-700',
          )}
        >
          Топ
        </span>
      )}
      {option.isCheapest && (
        <span
          className={cn(
            'rounded-full border border-emerald-300/80 bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100 dark:border-emerald-700',
          )}
        >
          Найдешевший
        </span>
      )}
    </div>
  );
}

export interface MedicationAlternativesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  med: PrescribedMed | null;
  /** Поточний вибір для цього препарату; якщо null — береться за замовчуванням */
  currentOptionId: string | null;
  onApply: (medId: string, optionId: string) => void;
  /** Якщо true — sheet поверх іншого drawer (наприклад «Замовити ліки»); коректний жест і шар для Vaul */
  nestedDrawer?: boolean;
}

/**
 * Мобільний UX: нижній sheet (Vaul) — свайп униз для закриття, ручка зверху,
 * safe-area для кнопки, мінімальна висота зон натискання (~48px).
 */
export default function MedicationAlternativesDialog({
  open,
  onOpenChange,
  med,
  currentOptionId,
  onApply,
  nestedDrawer = false,
}: MedicationAlternativesDialogProps) {
  const [pending, setPending] = useState<string>('');

  useEffect(() => {
    if (!open || !med) return;
    setPending(
      currentOptionId && med.options.some((o) => o.optionId === currentOptionId)
        ? currentOptionId
        : getDefaultOptionId(med),
    );
  }, [open, med, currentOptionId]);

  if (!med) return null;

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      direction="bottom"
      nested={nestedDrawer}
      shouldScaleBackground={false}
      repositionInputs={false}
    >
      <DrawerContent className="z-[100] flex max-h-[90vh] flex-col gap-0 rounded-t-2xl border-t border-border bg-card p-0 focus-visible:outline-none">
        <div className="relative shrink-0 border-b border-border px-5 pb-3 pt-1 pr-14">
          <DrawerClose
            className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted/80"
            aria-label="Закрити"
          >
            <X className="size-5" />
          </DrawerClose>
          <DrawerHeader className="space-y-1 p-0 pt-2 text-left">
            <DrawerTitle className="text-lg font-semibold leading-snug text-foreground">
              Альтернативні препарати
            </DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              {med.quantityLabel} · оберіть позицію для замовлення
            </DrawerDescription>
          </DrawerHeader>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
            Підсвітка:{' '}
            <span className="font-medium text-primary">прописано лікарем</span>
            {' · '}
            <span className="font-medium text-amber-800 dark:text-amber-200">топ</span>
            {' · '}
            <span className="font-medium text-emerald-800 dark:text-emerald-200">
              найдешевший
            </span>{' '}
            у цьому списку
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-5 py-3 [-webkit-overflow-scrolling:touch]">
          <ul className="flex flex-col gap-2.5 pb-1">
            {med.options.map((option) => {
              const selected = pending === option.optionId;
              return (
                <li key={option.optionId}>
                  <button
                    type="button"
                    onClick={() => setPending(option.optionId)}
                    className={cn(
                      'w-full min-h-[72px] rounded-xl border bg-card px-3 py-3.5 text-left transition-colors active:bg-muted/50',
                      selected
                        ? 'border-primary ring-2 ring-primary/30 shadow-sm'
                        : 'border-border active:border-primary/30',
                    )}
                  >
                    <OptionBadges option={option} />
                    <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                      {option.name}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {option.description}
                    </p>
                    <p className="mt-2 text-sm font-bold text-primary">
                      {option.priceMin}–{option.priceMax} грн
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="shrink-0 border-t border-border bg-muted/30 px-4 pt-3"
          style={{
            paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))',
          }}
        >
          <button
            type="button"
            onClick={() => {
              onApply(med.id, pending);
              onOpenChange(false);
            }}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 active:bg-primary/85"
          >
            Обрати
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
