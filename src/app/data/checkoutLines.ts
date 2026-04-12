import { PRESCRIBED_MEDS, getActiveOption } from './prescribedMedications';

/** Скільки «штук» в одній упаковці для відображення (демо; узгоджується з quantityLabel) */
const PIECES_PER_PACK_BY_MED: Record<string, number> = {
  '1': 1,
  '2': 1,
  '3': 1,
  '4': 20,
  '5': 30,
};

export type CheckoutLineItem = {
  lineId: string;
  medId: string;
  optionId: string;
  name: string;
  priceMin: number;
  priceMax: number;
  quantityLabel: string;
  /** Штук в одній упаковці (для підпису «× N шт») */
  piecesPerPack: number;
  /** Кількість упаковок */
  packCount: number;
};

export function buildInitialCheckoutLines(
  selectedOptionByMedId: Record<string, string>,
): CheckoutLineItem[] {
  return PRESCRIBED_MEDS.map((med) => {
    const opt = getActiveOption(med, selectedOptionByMedId);
    return {
      lineId: `${med.id}-${opt.optionId}`,
      medId: med.id,
      optionId: opt.optionId,
      name: opt.name,
      priceMin: opt.priceMin,
      priceMax: opt.priceMax,
      quantityLabel: med.quantityLabel,
      piecesPerPack: PIECES_PER_PACK_BY_MED[med.id] ?? 1,
      packCount: 1,
    };
  });
}

export function linePiecesTotal(line: CheckoutLineItem): number {
  return line.packCount * line.piecesPerPack;
}

/** Середня оцінка рядка для підсумку */
export function lineSubtotalMid(line: CheckoutLineItem): number {
  const unit = (line.priceMin + line.priceMax) / 2;
  return Math.round(unit * line.packCount);
}
