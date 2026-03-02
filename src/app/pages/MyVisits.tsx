import { ArrowLeft, Calendar, Clock, MapPin, Video, CheckCircle, XCircle, Filter, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import OrderMedicinesSheet from '../components/OrderMedicinesSheet';

export default function MyVisits() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [orderMedicinesOpen, setOrderMedicinesOpen] = useState(false);

  const tabs = [
    { id: 'all', label: 'Всі' },
    { id: 'upcoming', label: 'Майбутні' },
    { id: 'completed', label: 'Завершені' },
    { id: 'cancelled', label: 'Скасовані' },
  ];

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#F6F6F6] pb-24">
        <StatusBar />

        {/* Header */}
        <div className="px-5 py-4 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="text-[#0B7A75]">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold">Мої записи</h1>
          </div>
          <button className="text-[#8C8C8C]">
            <Filter className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-5 py-4 bg-white flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0B7A75] text-white'
                  : 'bg-[#F0F0F0] text-[#8C8C8C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="px-5 py-4 grid grid-cols-4 gap-2">
          <div className="bg-white rounded-xl p-3 text-center">
            <Calendar className="w-5 h-5 mx-auto mb-1 text-[#0B7A75]" />
            <p className="text-xl font-bold">5</p>
            <p className="text-xs text-[#8C8C8C]">Всього</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <Clock className="w-5 h-5 mx-auto mb-1 text-[#0B7A75]" />
            <p className="text-xl font-bold">1</p>
            <p className="text-xs text-[#8C8C8C]">Майбутні</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <CheckCircle className="w-5 h-5 mx-auto mb-1 text-[#4CAF50]" />
            <p className="text-xl font-bold">3</p>
            <p className="text-xs text-[#8C8C8C]">Завершені</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <XCircle className="w-5 h-5 mx-auto mb-1 text-[#F44336]" />
            <p className="text-xl font-bold">1</p>
            <p className="text-xs text-[#8C8C8C]">Скасовані</p>
          </div>
        </div>

        {/* Month Header */}
        <div className="px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8C8C8C] uppercase">Лютого 2026</span>
            <div className="flex-1 h-px bg-[#E0E0E0]"></div>
          </div>
          <span className="text-xs text-[#8C8C8C] ml-3">3 запис(ів)</span>
        </div>

        {/* Visit Cards */}
        <div className="px-5 space-y-4">
          {/* Card 1 - Scheduled */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full py-1.5 text-center text-xs font-medium text-white bg-[#0B7A75]">
              Заплановано
            </div>
            <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#0B7A75] mt-2"></div>
              <img
                src="https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBjYXJkaW9sb2dpc3R8ZW58MXx8fHwxNzcyMDQzOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-base">Олександр Петренко</h3>
                <p className="text-[#0B7A75] text-sm">Кардіолог</p>
                <p className="text-[#8C8C8C] text-xs mt-1">Первинна консультація кардіолога</p>
              </div>
            </div>

            <div className="space-y-1 mb-3 text-sm text-[#8C8C8C] ml-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>24 лютого 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>09:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>вул. Хрещатик, 22</span>
              </div>
            </div>

            <div className="flex gap-3 ml-5">
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

          {/* Card 2 - Completed */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full py-1.5 text-center text-xs font-medium text-white bg-[#4CAF50]">
              Завершено
            </div>
            <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#8C8C8C] mt-2"></div>
              <img
                src="https://images.unsplash.com/photo-1659353888352-5dbb14b80eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MjA0MzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-base">Наталія Коваленко</h3>
                <p className="text-[#0B7A75] text-sm">Терапевт</p>
                <p className="text-[#8C8C8C] text-xs mt-1">Онлайн-консультація терапевта</p>
              </div>
            </div>

            <div className="space-y-1 mb-3 text-sm text-[#8C8C8C] ml-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>18 лютого 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14:30</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>Онлайн</span>
              </div>
            </div>

            <div className="bg-[#EBF7F6] rounded-xl p-3 ml-5 mb-3">
              <p className="text-sm font-medium mb-1">Діагноз: Гострий бронхіт, неускладнений</p>
              <p className="text-xs text-[#8C8C8C]">3 препарат(ів) призначено • ~550 грн</p>
            </div>

            <div className="flex gap-3 ml-5">
              <button
                onClick={() => setOrderMedicinesOpen(true)}
                className="flex-1 bg-[#0B7A75] text-white py-3 rounded-xl font-medium"
              >
                Замовити ліки
              </button>
              <button 
                onClick={() => navigate('/visit/2')}
                className="flex-1 border-2 border-[#0B7A75] text-[#0B7A75] py-3 rounded-xl font-medium flex items-center justify-center gap-1"
              >
                Деталі візиту
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            </div>
          </div>

          {/* Card 3 - Cancelled */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full py-1.5 text-center text-xs font-medium text-white bg-[#F44336]">
              Скасовано
            </div>
            <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#8C8C8C] mt-2"></div>
              <img
                src="https://images.unsplash.com/photo-1659353888352-5dbb14b80eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwdGhlcmFwaXN0fGVufDF8fHx8MTc3MjA0MzkwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Doctor"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-base">Наталія Коваленко</h3>
                <p className="text-[#0B7A75] text-sm">Терапевт</p>
                <p className="text-[#8C8C8C] text-xs mt-1">Консультація терапевта</p>
              </div>
            </div>

            <div className="space-y-1 mb-3 text-sm text-[#8C8C8C] ml-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>15 січня 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>вул. Хрещатик, 22</span>
              </div>
            </div>

            <div className="ml-5">
              <button className="w-full border-2 border-[#0B7A75] text-[#0B7A75] py-3 rounded-xl font-medium">
                Записатись повторно
              </button>
            </div>
            </div>
          </div>
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