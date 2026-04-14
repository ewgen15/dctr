import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DOCTORS } from '../data/doctors';
import { DoctorCard } from './DoctorCard';

/** Фрейм експерименту: VisitCard INSTANCE як спільна база з DoctorCard (`147:2115`). */
const FIGMA_DOCTOR_CARD_ZONE =
  'https://www.figma.com/design/eUrxfq0FkLzMZFkCLf58r0/Moblie-APP?node-id=147-2115';

const meta: Meta<typeof DoctorCard> = {
  title: 'Components/DoctorCard',
  component: DoctorCard,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: FIGMA_DOCTOR_CARD_ZONE,
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-[383px] bg-[#f5f5f5] p-4">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    doctor: DOCTORS[0],
    onBook: fn(),
  },
};

export const SecondDoctor: Story = {
  name: 'Інший лікар',
  args: {
    doctor: DOCTORS[1],
    onBook: fn(),
  },
};
