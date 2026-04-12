/** Дані аптеки, що передаються в чекаут через `navigate(..., { state })` */
export type CheckoutPharmacyState = {
  id: string;
  name: string;
  address: string;
  totalPrice: number;
  distance: string;
  rating: number;
  hours: string;
  isOpen: boolean;
  hasDelivery: boolean;
};

export type CheckoutLocationState = {
  pharmacy: CheckoutPharmacyState;
  selectedOptionByMedId: Record<string, string>;
};

export type PaymentMethod = 'card' | 'at_pharmacy';
