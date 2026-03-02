import { Calendar, Clock, MapPin, Video, X } from 'lucide-react';
import { useNavigate } from 'react-router';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#F6F6F6] pb-24">
        <StatusBar />
        
        {/* Header */}
        <div className="px-5 pt-4 pb-6">
          <p className="text-[#8C8C8C] text-sm">
            Вітаємо,{' '}
            <span className="text-black font-bold">Наталіє Сергіївно!</span>
          </p>
          <button className="text-[#0B7A75] text-xs mt-1">змінити</button>
        </div>

        {/* Banner */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-br from-[#0B7A75] to-[#0a6962] rounded-2xl h-32 flex items-center justify-center overflow-hidden relative">
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
              className="text-[#0B7A75] text-sm"
            >
              Всі записи
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm relative">
            <button className="absolute top-3 right-3 text-[#8C8C8C]">
              <X className="w-5 h-5" />
            </button>

            <div className="flex gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBjYXJkaW9sb2dpc3R8ZW58MXx8fHwxNzcyMDQzOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Doctor"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">Олександр Петренко</h3>
                <p className="text-[#0B7A75] text-sm mb-2">Кардіолог</p>
                <div className="inline-block px-3 py-1 bg-[#0B7A75] bg-opacity-10 border border-[#0B7A75] rounded-full">
                  <span className="text-[#0B7A75] text-xs font-medium">Онлайн</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4 text-sm text-[#8C8C8C]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Пн, 24 лют</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>09:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>MedClinic</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => navigate('/visit/1')}
                className="flex-1 bg-[#0B7A75] text-white py-3 rounded-xl font-medium"
              >
                Деталі
              </button>
              <button className="flex-1 border-2 border-[#0B7A75] text-[#0B7A75] py-3 rounded-xl font-medium">
                Перенести
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-5 space-y-3">
          <button
            onClick={() => navigate('/doctors')}
            className="w-full border-2 border-[#0B7A75] text-[#0B7A75] py-4 rounded-xl font-medium"
          >
            Записатись на прийом
          </button>
          <button className="w-full border-2 border-[#0B7A75] text-[#0B7A75] py-4 rounded-xl font-medium flex items-center justify-center gap-2">
            <Video className="w-5 h-5" />
            Онлайн консультація
          </button>
          <button className="w-full border-2 border-[#0B7A75] text-[#0B7A75] py-4 rounded-xl font-medium">
            Здати аналізи
          </button>
          <button className="w-full border-2 border-[#0B7A75] text-[#0B7A75] py-4 rounded-xl font-medium">
            Послуги клініки
          </button>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}