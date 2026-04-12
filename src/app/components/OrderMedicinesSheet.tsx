import { useEffect, useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from './ui/drawer';
import {
  X,
  MapPin,
  Truck,
  Star,
  Clock,
  CheckCircle2,
  Pill,
  List,
  Map as MapIcon,
} from 'lucide-react';
import MedicationAlternativesDialog from './MedicationAlternativesDialog';
import PharmacyMapDrawer from './PharmacyMapDrawer';
import { PHARMACIES_NEARBY_BASE } from '../data/pharmaciesNearby';
import {
  PRESCRIBED_MEDS,
  getActiveOption,
  getPrescriptionTotalRange,
} from '../data/prescribedMedications';

type SortBy = 'distance' | 'price';
type PharmacyView = 'list' | 'map';

interface OrderMedicinesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Якщо передано разом з onSelectedOptionChange — вибір варіантів синхронізується з батьківським екраном (наприклад, деталі візиту). */
  selectedOptionByMedId?: Record<string, string>;
  onSelectedOptionChange?: Dispatch<SetStateAction<Record<string, string>>>;
}

export default function OrderMedicinesSheet({
  open,
  onOpenChange,
  selectedOptionByMedId: selectedProp,
  onSelectedOptionChange,
}: OrderMedicinesSheetProps) {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState<SortBy>('distance');
  const [pharmacyView, setPharmacyView] = useState<PharmacyView>('list');
  const [pharmacyMapOpen, setPharmacyMapOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<Record<string, string>>({});
  const [alternativesMedId, setAlternativesMedId] = useState<string | null>(null);

  const selectedOptionByMedId = selectedProp !== undefined ? selectedProp : internalSelected;
  const setSelectedOption = onSelectedOptionChange ?? setInternalSelected;

  const alternativesMed =
    alternativesMedId !== null
      ? (PRESCRIBED_MEDS.find((m) => m.id === alternativesMedId) ?? null)
      : null;

  const orderTotalRange = useMemo(
    () => getPrescriptionTotalRange(selectedOptionByMedId),
    [selectedOptionByMedId],
  );

  const orderMid = Math.round((orderTotalRange.min + orderTotalRange.max) / 2);

  const pharmaciesWithPrice = useMemo(
    () =>
      PHARMACIES_NEARBY_BASE.map((p) => ({
        ...p,
        totalPrice: orderMid + p.priceDelta,
      })),
    [orderMid],
  );

  const pharmacyMapPoints = useMemo(
    () =>
      pharmaciesWithPrice.map((p) => ({
        id: p.id,
        name: p.name,
        lat: p.lat,
        lng: p.lng,
        totalPrice: p.totalPrice,
        address: p.address,
        distance: p.distance,
        rating: p.rating,
        hours: p.hours,
        isOpen: p.isOpen,
        hasDelivery: p.hasDelivery,
        allAvailable: p.allAvailable,
      })),
    [pharmaciesWithPrice],
  );

  useEffect(() => {
    if (pharmacyView === 'map') setPharmacyMapOpen(true);
    else setPharmacyMapOpen(false);
  }, [pharmacyView]);

  const sortedPharmacies = useMemo(() => {
    if (sortBy === 'price') {
      return [...pharmaciesWithPrice].sort((a, b) => a.totalPrice - b.totalPrice);
    }
    return pharmaciesWithPrice;
  }, [pharmaciesWithPrice, sortBy]);

  const goToCheckout = (pharmacy: (typeof pharmaciesWithPrice)[number]) => {
    setPharmacyMapOpen(false);
    setPharmacyView('list');
    onOpenChange(false);
    navigate('/checkout', {
      state: {
        pharmacy: {
          id: pharmacy.id,
          name: pharmacy.name,
          address: pharmacy.address,
          totalPrice: pharmacy.totalPrice,
          distance: pharmacy.distance,
          rating: pharmacy.rating,
          hours: pharmacy.hours,
          isOpen: pharmacy.isOpen,
          hasDelivery: pharmacy.hasDelivery,
        },
        selectedOptionByMedId,
      },
    });
  };

  return (
    <>
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent className="bg-card max-h-[85vh] rounded-t-2xl border-t border-border focus-visible:outline-none">
        <div className="overflow-y-auto flex flex-col flex-1 min-h-0">
          <DrawerHeader className="flex flex-row items-start justify-between gap-4 pb-2 pt-1 px-5">
            <div className="flex-1 pr-8">
              <DrawerTitle className="text-xl font-bold text-foreground">
                Замовити ліки
              </DrawerTitle>
              <DrawerDescription className="text-sm text-muted-foreground mt-0.5">
                {PRESCRIBED_MEDS.length} препарат(ів) з призначення
              </DrawerDescription>
            </div>
            <DrawerClose
              className="absolute top-5 right-5 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Закрити"
            >
              <X className="w-5 h-5" />
            </DrawerClose>
          </DrawerHeader>

          <div className="px-5 pb-6 space-y-4">
            <section>
              <div className="flex items-center justify-between mb-3 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Pill className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Ваше призначення</h3>
                </div>
                <span className="text-primary font-semibold text-right shrink-0">
                  ~{orderTotalRange.min}–{orderTotalRange.max} грн
                </span>
              </div>

              <ul className="space-y-3">
                {PRESCRIBED_MEDS.map((med) => {
                  const active = getActiveOption(med, selectedOptionByMedId);
                  return (
                    <li key={med.id}>
                      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                        <button
                          type="button"
                          onClick={() => setAlternativesMedId(med.id)}
                          className="flex w-full justify-center bg-primary/10 py-1.5 text-xs font-medium leading-[18px] text-primary transition-colors hover:bg-primary/15"
                          aria-label="Змінити препарат серед альтернатив"
                        >
                          Змінити
                        </button>
                        <div className="bg-muted/50 p-3">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <span className="text-sm font-medium text-foreground leading-snug">
                                {active.name}
                              </span>
                              <p className="mt-1 text-xs text-muted-foreground">
                                <span className="text-foreground/80">За призначенням лікаря: </span>
                                {med.quantityLabel}
                              </p>
                            </div>
                            <span className="text-sm font-semibold text-primary shrink-0 self-start">
                              {active.priceMin}–{active.priceMax} грн
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section>
              <p className="text-sm font-medium text-foreground mb-2">Аптеки поруч</p>
              <div
                className="mb-3 flex rounded-xl border border-border bg-muted/40 p-1"
                role="tablist"
                aria-label="Вигляд: список або карта"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={pharmacyView === 'list'}
                  onClick={() => setPharmacyView('list')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors min-h-12 ${
                    pharmacyView === 'list'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground'
                  }`}
                >
                  <List className="size-4 shrink-0" />
                  Список
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={pharmacyView === 'map'}
                  onClick={() => setPharmacyView('map')}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors min-h-12 ${
                    pharmacyView === 'map'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground'
                  }`}
                >
                  <MapIcon className="size-4 shrink-0" />
                  Карта
                </button>
              </div>

              {pharmacyView === 'list' && (
                <>
                  <p className="text-sm text-foreground mb-2">Сортувати:</p>
                  <div className="mb-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSortBy('distance')}
                      className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        sortBy === 'distance'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-primary border border-primary'
                      }`}
                    >
                      За відстанню
                    </button>
                    <button
                      type="button"
                      onClick={() => setSortBy('price')}
                      className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        sortBy === 'price'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-primary border border-primary'
                      }`}
                    >
                      За ціною
                    </button>
                  </div>

                  <div className="space-y-3">
                    {sortedPharmacies.map((pharmacy) => (
                      <div
                        key={pharmacy.id}
                        className="rounded-xl border border-border bg-card p-4 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-foreground">
                              {pharmacy.name}
                            </span>
                            {pharmacy.hasDelivery && (
                              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                <Truck className="w-3.5 h-3.5" />
                                Доставка
                              </span>
                            )}
                          </div>
                          <span className="text-primary font-bold text-lg shrink-0">
                            ~{pharmacy.totalPrice} грн
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{pharmacy.address}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {pharmacy.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5" />
                            {pharmacy.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {pharmacy.hours}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded ${
                              pharmacy.isOpen
                                ? 'bg-success/20 text-success'
                                : 'bg-destructive/20 text-destructive'
                            }`}
                          >
                            {pharmacy.isOpen ? 'Відчинено' : 'Закрито'}
                          </span>
                        </div>
                        {pharmacy.allAvailable && (
                          <div className="flex items-center gap-2 text-sm text-success">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Всі препарати в наявності</span>
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => goToCheckout(pharmacy)}
                          className="mt-4 w-full min-h-12 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
                        >
                          Замовити
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {pharmacyView === 'map' && !pharmacyMapOpen && (
                <div className="rounded-xl border border-dashed border-border bg-muted/30 px-4 py-6 text-center">
                  <MapIcon className="mx-auto mb-2 size-10 text-primary opacity-80" />
                  <p className="text-sm font-medium text-foreground">Карта Києва</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Аптеки з цінами на мапі. Натисніть, щоб відкрити знову.
                  </p>
                  <button
                    type="button"
                    onClick={() => setPharmacyMapOpen(true)}
                    className="mt-4 w-full min-h-12 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Показати карту
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
    <MedicationAlternativesDialog
      open={alternativesMedId !== null}
      onOpenChange={(o) => {
        if (!o) setAlternativesMedId(null);
      }}
      med={alternativesMed}
      currentOptionId={
        alternativesMed
          ? getActiveOption(alternativesMed, selectedOptionByMedId).optionId
          : null
      }
      onApply={(medId, optionId) =>
        setSelectedOption((s) => ({ ...s, [medId]: optionId }))
      }
      nestedDrawer={open}
    />
    <PharmacyMapDrawer
      open={pharmacyMapOpen}
      onOpenChange={setPharmacyMapOpen}
      pharmacies={pharmacyMapPoints}
      nestedDrawer={open}
      onOrderPress={(ph) => {
        const full = pharmaciesWithPrice.find((p) => p.id === ph.id);
        if (full) goToCheckout(full);
      }}
    />
    </>
  );
}
