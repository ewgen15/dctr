import { useState } from 'react';
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
} from 'lucide-react';

const PRESCRIPTION_MEDS = [
  { name: 'L-тироксин 50 мкг', price: 210 },
  { name: 'Вітамін D3 2000 МО', price: 185 },
  { name: 'Селен 100 мкг', price: 160 },
] as const;

const TOTAL_ESTIMATE = PRESCRIPTION_MEDS.reduce((s, m) => s + m.price, 0);

const PHARMACIES = [
  {
    id: '1',
    name: 'Аптека 911',
    totalPrice: 530,
    address: 'вул. Хрещатик, 15 (50м)',
    distance: '50м',
    rating: 4.7,
    hours: '08:00 - 22:00',
    isOpen: true,
    hasDelivery: true,
    allAvailable: true,
  },
  {
    id: '2',
    name: 'Подорожник',
    totalPrice: 555,
    address: 'вул. Велика Васильківська, 72 (200м)',
    distance: '200м',
    rating: 4.5,
    hours: '09:00 - 21:00',
    isOpen: true,
    hasDelivery: false,
    allAvailable: true,
  },
  {
    id: '3',
    name: 'Аптека Доброго Дня',
    totalPrice: 545,
    address: 'вул. Хрещатик, 22 (100м)',
    distance: '100м',
    rating: 4.8,
    hours: '08:00 - 23:00',
    isOpen: true,
    hasDelivery: true,
    allAvailable: true,
  },
];

type SortBy = 'distance' | 'price';

interface OrderMedicinesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderMedicinesSheet({
  open,
  onOpenChange,
}: OrderMedicinesSheetProps) {
  const [sortBy, setSortBy] = useState<SortBy>('distance');

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="bottom">
      <DrawerContent className="bg-card max-h-[85vh] rounded-t-2xl border-t border-border focus-visible:outline-none">
        <div className="overflow-y-auto flex flex-col flex-1 min-h-0">
          {/* Header */}
          <DrawerHeader className="flex flex-row items-start justify-between gap-4 pb-2 pt-1 px-5">
            <div className="flex-1 pr-8">
              <DrawerTitle className="text-xl font-bold text-foreground">
                Замовити ліки
              </DrawerTitle>
              <DrawerDescription className="text-sm text-muted-foreground mt-0.5">
                {PRESCRIPTION_MEDS.length} препарат(ів) з призначення
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
            {/* Your prescription */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Pill className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Ваше призначення</h3>
                </div>
                <span className="text-primary font-semibold">
                  ~{TOTAL_ESTIMATE} грн
                </span>
              </div>
              <ul className="space-y-2">
                {PRESCRIPTION_MEDS.map((med) => (
                  <li
                    key={med.name}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-sm text-foreground">{med.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{med.price} грн</span>
                      <button
                        type="button"
                        className="text-sm text-primary font-medium hover:underline"
                      >
                        змінити
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Sort */}
            <section>
              <p className="text-sm text-foreground mb-2">Сортувати:</p>
              <div className="flex gap-2">
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
            </section>

            {/* Pharmacy list */}
            <section className="space-y-3">
              {PHARMACIES.map((pharmacy) => (
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
                      {pharmacy.totalPrice} грн
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
                </div>
              ))}
            </section>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
