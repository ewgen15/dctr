import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { DOCTORS } from '../data/doctors';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';

const MOCK_SLOTS = [
  'сьогодні о 13:00',
  'сьогодні о 14:00',
  'сьогодні о 16:30',
  'завтра о 10:00',
  'завтра о 11:30',
];

export default function DoctorProfile() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'services'>('about');

  const doctor = DOCTORS.find((d) => d.id === id);
  if (!doctor) {
    return (
      <MobileContainer>
        <div className="min-h-screen bg-[#F6F6F6] flex flex-col items-center justify-center gap-4 px-5">
          <p className="text-[#8C8C8C]">Лікаря не знайдено</p>
          <button
            onClick={() => navigate('/doctors')}
            className="text-[#0B7A75] font-medium"
          >
            Назад до каталогу
          </button>
        </div>
      </MobileContainer>
    );
  }

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#F6F6F6] pb-24">
        <StatusBar />

        {/* Header */}
        <div className="px-5 py-4 bg-white flex items-center gap-3">
          <button
            onClick={() => navigate('/doctors')}
            className="text-[#0B7A75] p-1 -ml-1"
            aria-label="Назад"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-[#333]">каталог</h1>
        </div>

        <div className="px-5 pb-6">
          {/* Doctor photo */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8E8E8] mb-4">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="text-xl font-semibold text-[#333] mb-2">{doctor.name}</h2>

          {/* Specialties + Rating */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <p className="text-[#0B7A75] font-medium">{doctor.specialties}</p>
            <p className="text-sm text-[#8C8C8C]">
              {doctor.rating.toFixed(1)} ({doctor.reviewsCount} відгуків)
            </p>
          </div>

          {/* Tabs: про лікаря / послуги */}
          <div className="flex gap-2 mb-4">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
                activeTab === 'about'
                  ? 'bg-[#0B7A75] text-white border-[#0B7A75]'
                  : 'bg-white text-[#0B7A75] border-[#0B7A75]'
              }`}
            >
              про лікаря
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
                activeTab === 'services'
                  ? 'bg-[#0B7A75] text-white border-[#0B7A75]'
                  : 'bg-white text-[#0B7A75] border-[#0B7A75]'
              }`}
            >
              послуги, які надає
            </button>
          </div>

          {/* Available slots */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8E8E8] mb-4">
            <h3 className="font-semibold text-[#333] mb-3">доступні слоти</h3>
            <div className="flex flex-wrap gap-2">
              {MOCK_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className="px-4 py-2 rounded-xl border-2 border-[#0B7A75] text-[#0B7A75] text-sm font-medium hover:bg-[#EBF7F6]"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Записатись button */}
          <button
            type="button"
            onClick={() => navigate('/visits')}
            className="w-full bg-[#0B7A75] text-white py-4 rounded-xl font-medium mb-2"
          >
            записатись
          </button>

          {/* Online consultation */}
          <p className="text-center text-sm text-[#8C8C8C]">
            онлайн - консультація
          </p>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}
