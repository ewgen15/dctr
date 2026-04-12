import { useCallback, useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer';
import {
  X,
  MapPin,
  Star,
  Clock,
  Truck,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { cn } from './ui/utils';

const FAVORITES_STORAGE_KEY = 'doctornow:favorite-pharmacy-ids';

function loadFavoriteIds(): Set<string> {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as unknown;
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr.filter((x): x is string => typeof x === 'string'));
  } catch {
    return new Set();
  }
}

function saveFavoriteIds(ids: Set<string>) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    /* ignore */
  }
}

/** Маркер — бейдж з ціною; виділення при виборі */
function createPriceMarkerIcon(price: number, selected: boolean) {
  const innerClass = selected
    ? 'pharmacy-map-price-badge pharmacy-map-price-badge--selected'
    : 'pharmacy-map-price-badge';
  return L.divIcon({
    className: 'pharmacy-map-price-icon',
    html: `<div class="${innerClass}">~${price}&nbsp;грн</div>`,
    iconSize: [96, 36],
    iconAnchor: [48, 36],
    popupAnchor: [0, -32],
  });
}

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (positions.length === 0) return;
    const b = L.latLngBounds(positions);
    map.fitBounds(b, { padding: [56, 56], maxZoom: 15 });
  }, [map, positions]);
  return null;
}

/** Плавно центрує карту на обраній аптеці */
function FlyToSelected({
  selectedId,
  pharmacies,
}: {
  selectedId: string | null;
  pharmacies: PharmacyMapPoint[];
}) {
  const map = useMap();
  useEffect(() => {
    if (!selectedId) return;
    const p = pharmacies.find((x) => x.id === selectedId);
    if (!p) return;
    map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 15), { duration: 0.35 });
  }, [map, selectedId, pharmacies]);
  return null;
}

export type PharmacyMapPoint = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  totalPrice: number;
  address: string;
  distance: string;
  rating: number;
  hours: string;
  isOpen: boolean;
  hasDelivery: boolean;
  allAvailable: boolean;
};

interface PharmacyMapDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pharmacies: PharmacyMapPoint[];
  nestedDrawer?: boolean;
  /** Перехід на чекаут з обраної на карті аптеки */
  onOrderPress?: (pharmacy: PharmacyMapPoint) => void;
}

export default function PharmacyMapDrawer({
  open,
  onOpenChange,
  pharmacies,
  nestedDrawer = false,
  onOrderPress,
}: PharmacyMapDrawerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(loadFavoriteIds);

  const positions = useMemo(
    () => pharmacies.map((p): [number, number] => [p.lat, p.lng]),
    [pharmacies],
  );

  const selectedPharmacy = useMemo(
    () => (selectedId ? pharmacies.find((p) => p.id === selectedId) ?? null : null),
    [pharmacies, selectedId],
  );

  useEffect(() => {
    if (!open) setSelectedId(null);
  }, [open]);

  useEffect(() => {
    if (selectedId && !pharmacies.some((p) => p.id === selectedId)) {
      setSelectedId(null);
    }
  }, [pharmacies, selectedId]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      saveFavoriteIds(next);
      return next;
    });
  }, []);

  const center: [number, number] = [50.45, 30.5234];

  const mapHeightClass = selectedPharmacy
    ? 'h-[min(42dvh,400px)] sm:h-[min(44dvh,420px)]'
    : 'h-[min(58dvh,520px)] sm:h-[min(60dvh,540px)]';

  return (
    <>
      <style>{`
        .pharmacy-map-price-icon {
          background: transparent !important;
          border: none !important;
        }
        .pharmacy-map-price-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 32px;
          padding: 6px 10px;
          border-radius: 10px;
          background: var(--primary);
          color: var(--primary-foreground);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.1;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
          white-space: nowrap;
          border: 1px solid var(--border);
        }
        .pharmacy-map-price-badge--selected {
          box-shadow:
            0 0 0 3px var(--background),
            0 2px 0 3px var(--primary),
            0 8px 20px rgba(0, 0, 0, 0.22);
        }
      `}</style>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        direction="bottom"
        nested={nestedDrawer}
        shouldScaleBackground={false}
        repositionInputs={false}
      >
        <DrawerContent className="z-[110] flex h-[min(94dvh,760px)] max-h-[94dvh] flex-col gap-0 rounded-t-2xl border-t border-border bg-card p-0 focus-visible:outline-none">
          <DrawerHeader className="relative shrink-0 border-b border-border px-5 pb-3 pt-2 pr-14 text-left">
            <DrawerClose
              className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Закрити карту"
            >
              <X className="size-5" />
            </DrawerClose>
            <DrawerTitle className="text-lg font-semibold leading-snug pr-2">
              Аптеки на карті
            </DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              Київ · на точках — орієнтовна вартість. Торкніться точки, щоб побачити деталі.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex min-h-0 flex-1 flex-col px-3 pt-1">
            <div
              className={cn(
                'relative min-h-[200px] w-full shrink-0 overflow-hidden rounded-xl border border-border bg-muted transition-[height] duration-200',
                mapHeightClass,
              )}
            >
              {open && pharmacies.length > 0 ? (
                <MapContainer
                  center={center}
                  zoom={13}
                  className="size-full z-0 [&_.leaflet-control-attribution]:text-[10px]"
                  scrollWheelZoom
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <FitBounds positions={positions} />
                  <FlyToSelected selectedId={selectedId} pharmacies={pharmacies} />
                  {pharmacies.map((p) => (
                    <Marker
                      key={`${p.id}-${selectedId === p.id ? '1' : '0'}`}
                      position={[p.lat, p.lng]}
                      icon={createPriceMarkerIcon(
                        p.totalPrice,
                        selectedId === p.id,
                      )}
                      eventHandlers={{
                        click: () => setSelectedId(p.id),
                      }}
                    />
                  ))}
                </MapContainer>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Немає точок для карти
                </div>
              )}
            </div>

            {selectedPharmacy && (
              <div className="animate-in slide-in-from-bottom-2 fade-in-0 mt-2 shrink-0 rounded-xl border border-border bg-card p-4 shadow-sm duration-200">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 gap-y-1">
                      <h3 className="text-base font-semibold leading-snug text-foreground">
                        {selectedPharmacy.name}
                      </h3>
                      {selectedPharmacy.hasDelivery && (
                        <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                          <Truck className="size-3.5 shrink-0" />
                          Доставка
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-2xl font-bold tabular-nums text-primary">
                      ~{selectedPharmacy.totalPrice} грн
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      орієнтовна сума за ваше замовлення
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      aria-label="Закрити картку аптеки"
                    >
                      <X className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(selectedPharmacy.id)}
                      className={cn(
                        'flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors',
                        favoriteIds.has(selectedPharmacy.id)
                          ? 'border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-400'
                          : 'text-muted-foreground hover:bg-muted hover:text-rose-600',
                      )}
                      aria-label={
                        favoriteIds.has(selectedPharmacy.id)
                          ? 'Прибрати аптеку з обраного'
                          : 'Додати аптеку в обране'
                      }
                    >
                      <Heart
                        className={cn(
                          'size-6',
                          favoriteIds.has(selectedPharmacy.id) && 'fill-current',
                        )}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-3 space-y-2 border-t border-border pt-3 text-sm">
                  <div className="flex gap-2 text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{selectedPharmacy.address}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {selectedPharmacy.distance} від вас
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3.5 text-amber-500" />
                      {selectedPharmacy.rating} рейтинг
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {selectedPharmacy.hours}
                    </span>
                    <span
                      className={cn(
                        'inline-flex rounded px-2 py-0.5 font-medium',
                        selectedPharmacy.isOpen
                          ? 'bg-success/15 text-success'
                          : 'bg-destructive/15 text-destructive',
                      )}
                    >
                      {selectedPharmacy.isOpen ? 'Відчинено' : 'Закрито'}
                    </span>
                  </div>
                  {selectedPharmacy.allAvailable && (
                    <div className="flex items-center gap-2 text-sm text-success">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>Всі препарати з призначення в наявності</span>
                    </div>
                  )}
                </div>
                {onOrderPress && (
                  <button
                    type="button"
                    onClick={() => onOrderPress(selectedPharmacy)}
                    className="mt-4 w-full min-h-12 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Замовити
                  </button>
                )}
              </div>
            )}

            <div
              className="shrink-0 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2"
              aria-hidden
            />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
