import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router";
import Checkout from "./Checkout";
import type { CheckoutLocationState } from "../types/checkout";

/** Демо-стан для Storybook (аналог `navigate('/checkout', { state })`). */
const MOCK_CHECKOUT_STATE: CheckoutLocationState = {
  pharmacy: {
    id: "demo-pharmacy",
    name: 'Аптека «Здоров’я»',
    address: "вул. Хрещатик, 1",
    totalPrice: 890,
    distance: "0.8 км",
    rating: 4.6,
    hours: "08:00–22:00",
    isOpen: true,
    hasDelivery: true,
  },
  /** Порожньо — підставляються дефолтні варіанти препаратів з `prescribedMedications`. */
  selectedOptionByMedId: {},
};

const meta: Meta<typeof Checkout> = {
  title: "Pages/Checkout",
  component: Checkout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Оформлення замовлення ліків. У додатку відкривається після вибору аптеки зі станом `location.state`; у Storybook стан передається через `MemoryRouter`.",
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/checkout",
            state: MOCK_CHECKOUT_STATE,
            key: "checkout-story",
          },
        ]}
      >
        <Routes>
          <Route path="/checkout" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
