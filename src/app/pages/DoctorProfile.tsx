import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { dictionaries, useI18n } from '../i18n';
import { DOCTORS } from '../data/doctors';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import { ScreenHeader } from '../components/ScreenHeader';

export default function DoctorProfile() {
  const { t, locale } = useI18n();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'services'>('about');
  const mockSlots = dictionaries[locale].doctorProfile.slots;

  const doctor = DOCTORS.find((d) => d.id === id);
  if (!doctor) {
    return (
      <MobileContainer>
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center gap-4 px-5">
          <p className="text-muted-foreground">{t('doctorProfile.notFound')}</p>
          <button
            onClick={() => navigate('/doctors')}
            className="text-primary font-medium"
          >
            {t('doctorProfile.backToList')}
          </button>
        </div>
      </MobileContainer>
    );
  }

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-24">
        <StatusBar />

        <ScreenHeader
          variant="backTitle"
          title={t('doctorProfile.catalogTitle')}
          onBack={() => navigate('/doctors')}
        />

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
              {doctor.rating.toFixed(1)} ({doctor.reviewsCount} {t('doctorProfile.reviews')})
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
              {t('doctorProfile.tabAbout')}
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
              {t('doctorProfile.tabServices')}
            </button>
          </div>

          {/* Available slots */}
          <div className="bg-card rounded-2xl p-4 shadow-sm border border-border mb-4">
            <h3 className="font-semibold text-foreground mb-3">
              {t('doctorProfile.slotsTitle')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {mockSlots.map((slot) => (
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
            {t('doctorProfile.book')}
          </button>

          {/* Online consultation */}
          <p className="text-center text-sm text-muted-foreground">
            {t('doctorProfile.onlineHint')}
          </p>
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}
