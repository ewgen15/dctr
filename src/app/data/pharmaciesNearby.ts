/** Демо-аптеки поруч (Київ), координати WGS84 для карти */
export type PharmacyNearbyBase = {
  id: string;
  name: string;
  priceDelta: number;
  address: string;
  distance: string;
  rating: number;
  hours: string;
  isOpen: boolean;
  hasDelivery: boolean;
  allAvailable: boolean;
  lat: number;
  lng: number;
};

export const PHARMACIES_NEARBY_BASE: PharmacyNearbyBase[] = [
  {
    id: '1',
    name: 'Аптека 911',
    priceDelta: 0,
    address: 'вул. Хрещатик, 15 (50м)',
    distance: '50м',
    rating: 4.7,
    hours: '08:00 - 22:00',
    isOpen: true,
    hasDelivery: true,
    allAvailable: true,
    lat: 50.44725,
    lng: 30.52265,
  },
  {
    id: '2',
    name: 'Подорожник',
    priceDelta: 25,
    address: 'вул. Велика Васильківська, 72 (200м)',
    distance: '200м',
    rating: 4.5,
    hours: '09:00 - 21:00',
    isOpen: true,
    hasDelivery: false,
    allAvailable: true,
    lat: 50.43145,
    lng: 30.51685,
  },
  {
    id: '3',
    name: 'Аптека Доброго Дня',
    priceDelta: 15,
    address: 'вул. Хрещатик, 22 (100м)',
    distance: '100м',
    rating: 4.8,
    hours: '08:00 - 23:00',
    isOpen: true,
    hasDelivery: true,
    allAvailable: true,
    lat: 50.44635,
    lng: 30.52185,
  },
];
