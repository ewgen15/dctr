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
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center gap-4 px-5">
          <p className="text-muted-foreground">Лікаря не знайдено</p>
          <button
            onClick={() => navigate('/doctors')}
            className="text-primary font-medium"
          >
            Назад до каталогу
          </button>
        </div>
      </MobileContainer>
    );
  }

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-24">
        <StatusBar />

        {/* Header */}
        <div className="px-5 py-4 bg-card flex items-center gap-3">
          <button
            onClick={() => navigate('/doctors')}
            className="text-primary p-1 -ml-1"
            aria-label="Назад"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">каталог</h1>
        </div>

        <div className="px-5 pb-6">
          {/* Doctor photo */}
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border mb-4">
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="text-xl font-semibold text-foreground mb-2">{doctor.name}</h2>

          {/* Specialties + Rating */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <p className="text-primary font-medium">{doctor.specialties}</p>
            <p className="text-sm text-muted-foreground">
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
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-primary border-primary'
              }`}
            >
              про лікаря
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('services')}
              className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
                activeTab === 'services'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-primary border-primary'
              }`}
            >
              послуги, які надає
            </button>
          </div>

          {/* Available slots */}
          <div className="bg-card rounded-2xl p-4 shadow-sm border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-3">доступні слоти</h3>
            <div className="flex flex-wrap gap-2">
              {MOCK_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className="px-4 py-2 rounded-xl border-2 border-primary text-primary text-sm font-medium hover:bg-primary/10"
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
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium mb-2"
          >
            записатись
          </button>

          {/* Online consultation */}
          <p className="text-center text-sm text-muted-foreground">
            онлайн - консультація
          </p>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}
