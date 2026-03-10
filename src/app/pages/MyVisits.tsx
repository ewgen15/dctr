import { ArrowLeft, Calendar, Clock, MapPin, Video, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import OrderMedicinesSheet from '../components/OrderMedicinesSheet';
import { VisitCard } from '../components/VisitCard';

export default function MyVisits() {
  const navigate = useNavigate();
  const [orderMedicinesOpen, setOrderMedicinesOpen] = useState(false);

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#f5f5f5] pb-[94px]">
        <StatusBar />

        {/* Header */}
        <div className="bg-card flex items-center gap-[18px] px-6 py-3 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <button
            onClick={() => navigate('/')}
            className="flex size-6 items-center justify-center text-primary"
            aria-label="Назад"
          >
            <ArrowLeft className="size-6" />
          </button>
          <h1 className="text-xl font-semibold leading-[30px] text-foreground">
            Мої записи
          </h1>
        </div>

        {/* Date row */}
        <div className="flex items-center justify-between px-6 py-3 text-xs">
          <span className="font-medium text-foreground">24 лютого 2026</span>
          <span className="font-normal text-muted-foreground">3 запис(ів)</span>
        </div>

        {/* Visit cards */}
        <div className="flex flex-col gap-4 px-6">
          {/* Заплановано */}
          <VisitCard
            status="scheduled"
            doctor={{
              name: 'Олександр Петренко',
              specialty: 'Кардіолог',
              service: 'Первинна консультація кардіолога',
              avatarUrl:
                'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBjYXJkaW9sb2dpc3R8ZW58MXx8fHwxNzcyMDQzOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
            }}
            infoRows={[
              { icon: <Calendar className="size-4" />, text: '24 лютого 2026' },
              { icon: <Clock className="size-4" />, text: '09:00' },
              { icon: <MapPin className="size-4" />, text: 'вул. Хрещатик, 22' },
            ]}
            actions={[
              { label: 'Деталі', variant: 'primary', onClick: () => navigate('/visit/1') },
              { label: 'Перенести', variant: 'secondary', onClick: () => {} },
            ]}
          />

          {/* Завершено */}
          <VisitCard
            status="completed"
            doctor={{
              name: 'Наталія Коваленко',
              specialty: 'Терапевт',
              service: 'Онлайн-консультація терапевта',
              avatarUrl:
                'https://images.unsplash.com/photo-1659353888352-5dbb14b80eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MjA0MzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
            }}
            infoRows={[
              { icon: <Calendar className="size-4" />, text: '18 лютого 2026' },
              { icon: <Clock className="size-4" />, text: '14:30' },
              { icon: <Video className="size-4" />, text: 'Онлайн' },
            ]}
            diagnosis={{
              text: 'Гострий бронхіт, неускладнений',
              medicationsCount: 3,
              totalPrice: 550,
            }}
            actions={[
              { label: 'Замовити ліки', variant: 'primary', onClick: () => setOrderMedicinesOpen(true) },
              {
                label: 'Про візит',
                variant: 'secondary',
                icon: <ChevronDown className="size-5" />,
                onClick: () => navigate('/visit/2'),
              },
            ]}
          />

          {/* Скасовано */}
          <VisitCard
            status="cancelled"
            doctor={{
              name: 'Наталія Коваленко',
              specialty: 'Терапевт',
              service: 'Консультація терапевта',
              avatarUrl:
                'https://images.unsplash.com/photo-1659353888352-5dbb14b80eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MjA0MzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
            }}
            infoRows={[
              { icon: <Calendar className="size-4" />, text: '15 січня 2026' },
              { icon: <Clock className="size-4" />, text: '10:00' },
              { icon: <MapPin className="size-4" />, text: 'вул. Хрещатик, 22' },
            ]}
            actions={[
              { label: 'Записатись повторно', variant: 'secondary', onClick: () => navigate('/') },
            ]}
          />
        </div>

        <BottomNav />
        <OrderMedicinesSheet
          open={orderMedicinesOpen}
          onOpenChange={setOrderMedicinesOpen}
        />
      </div>
    </MobileContainer>
  );
}
