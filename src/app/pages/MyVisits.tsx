import { Calendar, Clock, MapPin, Video, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useI18n } from '../i18n';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import OrderMedicinesSheet from '../components/OrderMedicinesSheet';
import { ScreenHeader } from '../components/ScreenHeader';
import { VisitCard } from '../components/VisitCard';

export default function MyVisits() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [orderMedicinesOpen, setOrderMedicinesOpen] = useState(false);

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#f5f5f5] pb-[94px]">
        <StatusBar />

        <ScreenHeader
          variant="backTitle"
          title={t('myVisits.title')}
          onBack={() => navigate('/')}
          elevated
        />

        {/* Date row */}
        <div className="flex items-center justify-between px-5 py-3 text-xs">
          <span className="font-medium text-foreground">24 лютого 2026</span>
          <span className="font-normal text-muted-foreground">
            {t('myVisits.visitsCount', { count: 3 })}
          </span>
        </div>

        {/* Visit cards */}
        <div className="flex flex-col gap-4 px-5">
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
              {
                label: t('myVisits.actions.details'),
                variant: 'primary',
                onClick: () => navigate('/visit/1'),
              },
              {
                label: t('myVisits.actions.reschedule'),
                variant: 'secondary',
                onClick: () => {},
              },
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
              { icon: <Video className="size-4" />, text: t('common.online') },
            ]}
            diagnosis={{
              text: 'Гострий бронхіт, неускладнений',
              medicationsCount: 3,
              totalPrice: 550,
            }}
            actions={[
              {
                label: t('myVisits.actions.orderMeds'),
                variant: 'primary',
                onClick: () => setOrderMedicinesOpen(true),
              },
              {
                label: t('myVisits.actions.aboutVisit'),
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
              {
                label: t('myVisits.actions.bookAgain'),
                variant: 'secondary',
                onClick: () => navigate('/'),
              },
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
