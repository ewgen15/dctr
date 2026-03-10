import { Calendar, Clock, MapPin, Video } from 'lucide-react';
import { useNavigate } from 'react-router';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import { VisitCard } from '../components/VisitCard';

export default function Home() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-24">
        <StatusBar />
        
        {/* Header */}
        <div className="px-5 pt-4 pb-6">
          <p className="text-muted-foreground text-sm">
            Вітаємо,{' '}
            <span className="text-foreground font-bold">Наталіє Сергіївно!</span>
          </p>
          <button className="text-primary text-xs mt-1">змінити</button>
        </div>

        {/* Banner */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl h-32 flex items-center justify-center overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1769698678497-c41f0ab47c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcxOTcxNjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Promo"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <p className="text-white font-bold text-xl relative z-10">Ваше здоров'я - наш пріоритет</p>
          </div>
        </div>

        {/* Upcoming Appointment Card */}
        <div className="px-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-base">Найближчий запис</h2>
            <button 
              onClick={() => navigate('/visits')}
              className="text-primary text-sm"
            >
              Всі записи
            </button>
          </div>

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
              { icon: <Calendar className="size-4" />, text: 'Пн, 24 лют' },
              { icon: <Clock className="size-4" />, text: '09:00' },
              { icon: <MapPin className="size-4" />, text: 'MedClinic' },
            ]}
            actions={[
              { label: 'Деталі', variant: 'primary', onClick: () => navigate('/visit/1') },
              { label: 'Перенести', variant: 'secondary', onClick: () => {} },
            ]}
            onDismiss={() => {}}
          />
        </div>

        {/* Action Buttons */}
        <div className="px-5 space-y-3">
          <button
            onClick={() => navigate('/doctors')}
            className="w-full border-2 border-primary text-primary py-4 rounded-xl font-medium"
          >
            Записатись на прийом
          </button>
          <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-medium flex items-center justify-center gap-2">
            <Video className="w-5 h-5" />
            Онлайн консультація
          </button>
          <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-medium">
            Здати аналізи
          </button>
          <button className="w-full border-2 border-primary text-primary py-4 rounded-xl font-medium">
            Послуги клініки
          </button>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}