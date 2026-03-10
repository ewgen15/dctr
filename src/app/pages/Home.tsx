import { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  CalendarPlus,
  Video,
  FlaskConical,
  Building2,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import HomeActionCard from '../components/HomeActionCard';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import { VisitCard } from '../components/VisitCard';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const q = searchQuery.trim();
    if (q) navigate(`/doctors?q=${encodeURIComponent(q)}`);
    else navigate('/doctors');
  };

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
            <p className="text-white font-bold text-xl relative z-10">
              Ваше здоров'я - наш пріоритет
            </p>
          </div>
        </div>

        {/* Search doctor — перед найближчим записом */}
        <div className="px-5 mb-4">
          <div className="flex gap-2 rounded-xl border border-border bg-card px-3 py-2.5 shadow-sm">
            <Search className="size-5 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Спеціальність, ім'я лікаря..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button
              type="button"
              onClick={handleSearch}
              className="shrink-0 text-primary text-sm font-medium"
            >
              Знайти
            </button>
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
              {
                label: 'Деталі',
                variant: 'primary',
                onClick: () => navigate('/visit/1'),
              },
              { label: 'Перенести', variant: 'secondary', onClick: () => {} },
            ]}
            onDismiss={() => {}}
          />
        </div>

        {/* Action cards grid */}
        <div className="px-5">
          <div className="grid grid-cols-2 gap-3">
            <HomeActionCard
              icon={<CalendarPlus className="size-8" />}
              title="Записатись на прийом"
              subtitle="Обрати лікаря"
              onClick={() => navigate('/doctors')}
            />
            <HomeActionCard
              icon={<Video className="size-8" />}
              title="Онлайн консультація"
              subtitle="Розмова з лікарем"
              onClick={() => {}}
            />
            <HomeActionCard
              icon={<FlaskConical className="size-8" />}
              title="Здати аналізи"
              subtitle="Запис або результати"
              onClick={() => {}}
            />
            <HomeActionCard
              icon={<Building2 className="size-8" />}
              title="Послуги клініки"
              subtitle="Перелік послуг"
              onClick={() => navigate('/services')}
            />
          </div>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}
