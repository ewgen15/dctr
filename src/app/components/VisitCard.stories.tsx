import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Calendar, Clock, MapPin, Video, ChevronDown, Phone } from "lucide-react";
import { VisitCard } from "./VisitCard";

const DOCTOR_CARDIOLOGIST = {
  name: "Олександр Петренко",
  specialty: "Кардіолог",
  service: "Первинна консультація кардіолога",
  avatarUrl:
    "https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBjYXJkaW9sb2dpc3R8ZW58MXx8fHwxNzcyMDQzOTAzfDA&ixlib=rb-4.1.0&q=80&w=400",
};

const DOCTOR_THERAPIST = {
  name: "Наталія Коваленко",
  specialty: "Терапевт",
  service: "Онлайн-консультація терапевта",
  avatarUrl:
    "https://images.unsplash.com/photo-1659353888352-5dbb14b80eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MjA0MzkwM3ww&ixlib=rb-4.1.0&q=80&w=400",
};

const meta: Meta<typeof VisitCard> = {
  title: "Components/VisitCard",
  component: VisitCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[383px] bg-[#f5f5f5] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Базові статуси ──────────────────────────────────────────────────────────

export const Scheduled: Story = {
  name: "Заплановано",
  args: {
    status: "scheduled",
    doctor: DOCTOR_CARDIOLOGIST,
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "24 лютого 2026" },
      { icon: <Clock className="size-4" />, text: "09:00" },
      { icon: <MapPin className="size-4" />, text: "вул. Хрещатик, 22" },
    ],
    actions: [
      { label: "Деталі", variant: "primary", onClick: fn() },
      { label: "Перенести", variant: "secondary", onClick: fn() },
    ],
  },
};

export const Completed: Story = {
  name: "Завершено",
  args: {
    status: "completed",
    doctor: DOCTOR_THERAPIST,
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "18 лютого 2026" },
      { icon: <Clock className="size-4" />, text: "14:30" },
      { icon: <Video className="size-4" />, text: "Онлайн" },
    ],
    diagnosis: {
      text: "Гострий бронхіт, неускладнений",
      medicationsCount: 3,
      totalPrice: 550,
    },
    actions: [
      { label: "Замовити ліки", variant: "primary", onClick: fn() },
      {
        label: "Про візит",
        variant: "secondary",
        icon: <ChevronDown className="size-5" />,
        onClick: fn(),
      },
    ],
  },
};

export const Cancelled: Story = {
  name: "Скасовано",
  args: {
    status: "cancelled",
    doctor: { ...DOCTOR_THERAPIST, service: "Консультація терапевта" },
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "15 січня 2026" },
      { icon: <Clock className="size-4" />, text: "10:00" },
      { icon: <MapPin className="size-4" />, text: "вул. Хрещатик, 22" },
    ],
    actions: [
      { label: "Записатись повторно", variant: "secondary", onClick: fn() },
    ],
  },
};

// ─── Варіанти кількості кнопок ───────────────────────────────────────────────

export const OneAction: Story = {
  name: "1 кнопка (full-width)",
  args: {
    status: "scheduled",
    doctor: DOCTOR_CARDIOLOGIST,
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "24 лютого 2026" },
      { icon: <Clock className="size-4" />, text: "09:00" },
    ],
    actions: [{ label: "Деталі", variant: "primary", onClick: fn() }],
  },
};

export const TwoActions: Story = {
  name: "2 кнопки (50/50)",
  args: {
    status: "scheduled",
    doctor: DOCTOR_CARDIOLOGIST,
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "24 лютого 2026" },
      { icon: <Clock className="size-4" />, text: "09:00" },
    ],
    actions: [
      { label: "Деталі", variant: "primary", onClick: fn() },
      { label: "Перенести", variant: "secondary", onClick: fn() },
    ],
  },
};

export const NoActions: Story = {
  name: "Без кнопок",
  args: {
    status: "cancelled",
    doctor: DOCTOR_THERAPIST,
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "15 січня 2026" },
      { icon: <Clock className="size-4" />, text: "10:00" },
    ],
    actions: [],
  },
};

// ─── Кастомні рядки інформації ───────────────────────────────────────────────

export const PhoneConsultation: Story = {
  name: "Телефонна консультація",
  args: {
    status: "scheduled",
    doctor: DOCTOR_THERAPIST,
    infoRows: [
      { icon: <Calendar className="size-4" />, text: "25 лютого 2026" },
      { icon: <Clock className="size-4" />, text: "11:00" },
      { icon: <Phone className="size-4" />, text: "+38 (050) 123-45-67" },
    ],
    actions: [
      { label: "Зателефонувати", variant: "primary", onClick: fn() },
    ],
  },
};

// ─── Усі варіанти разом ──────────────────────────────────────────────────────

export const AllStatuses: Story = {
  name: "Всі статуси",
  render: () => (
    <div className="flex flex-col gap-4">
      <VisitCard
        status="scheduled"
        doctor={DOCTOR_CARDIOLOGIST}
        infoRows={[
          { icon: <Calendar className="size-4" />, text: "24 лютого 2026" },
          { icon: <Clock className="size-4" />, text: "09:00" },
          { icon: <MapPin className="size-4" />, text: "вул. Хрещатик, 22" },
        ]}
        actions={[
          { label: "Деталі", variant: "primary" },
          { label: "Перенести", variant: "secondary" },
        ]}
      />
      <VisitCard
        status="completed"
        doctor={DOCTOR_THERAPIST}
        infoRows={[
          { icon: <Calendar className="size-4" />, text: "18 лютого 2026" },
          { icon: <Clock className="size-4" />, text: "14:30" },
          { icon: <Video className="size-4" />, text: "Онлайн" },
        ]}
        diagnosis={{ text: "Гострий бронхіт, неускладнений", medicationsCount: 3, totalPrice: 550 }}
        actions={[
          { label: "Замовити ліки", variant: "primary" },
          { label: "Про візит", variant: "secondary", icon: <ChevronDown className="size-5" /> },
        ]}
      />
      <VisitCard
        status="cancelled"
        doctor={{ ...DOCTOR_THERAPIST, service: "Консультація терапевта" }}
        infoRows={[
          { icon: <Calendar className="size-4" />, text: "15 січня 2026" },
          { icon: <Clock className="size-4" />, text: "10:00" },
          { icon: <MapPin className="size-4" />, text: "вул. Хрещатик, 22" },
        ]}
        actions={[{ label: "Записатись повторно", variant: "secondary" }]}
      />
    </div>
  ),
};
