import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MapPin } from 'lucide-react';
import { DOCTORS } from '../data/doctors';
import type { Doctor } from '../data/doctors';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';

function DoctorCard({
  doctor,
  onBook,
}: {
  doctor: Doctor;
  onBook: (id: string) => void;
}) {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
      <div className="flex gap-4 mb-3">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-foreground mb-1">
            {doctor.name}
          </h3>
          <p className="text-primary text-sm mb-2">{doctor.specialties}</p>
          <p className="text-xs text-muted-foreground">
            {doctor.rating} ({doctor.reviewsCount} відгуків), {doctor.experienceYears} років досвіду
          </p>
        </div>
      </div>
      <p className="text-sm text-foreground mb-2">
        Вартість консультації: <span className="font-semibold">{doctor.consultationPrice} грн</span>
      </p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        <MapPin className="w-4 h-4 shrink-0 text-primary" />
        <span>{doctor.address}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Найближчий вільний слот: {doctor.nearestSlot}
      </p>
      <button
        onClick={() => onBook(doctor.id)}
        className="w-full border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary/10 transition-colors"
      >
        записатись
      </button>
    </div>
  );
}

export default function DoctorList() {
  const navigate = useNavigate();
  const [filterSpecialty, setFilterSpecialty] = useState(false);
  const [filterAddress, setFilterAddress] = useState(false);

  const handleBook = (doctorId: string) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-24">
        <StatusBar />

        {/* Header */}
        <div className="px-5 py-4 bg-card">
          <h1 className="text-xl font-semibold text-center text-foreground">
            Головна
          </h1>
        </div>

        {/* Filters */}
        <div className="px-5 py-3 flex gap-3">
          <button
            onClick={() => setFilterSpecialty(!filterSpecialty)}
            className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
              filterSpecialty
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-primary border-primary'
            }`}
          >
            Фільтр спеціальностей
          </button>
          <button
            onClick={() => setFilterAddress(!filterAddress)}
            className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
              filterAddress
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-primary border-primary'
            }`}
          >
            Фільтр адрес
          </button>
        </div>

        {/* Doctor cards list */}
        <div className="px-5 space-y-4">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onBook={handleBook} />
          ))}
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}
