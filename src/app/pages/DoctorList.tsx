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
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8E8E8]">
      <div className="flex gap-4 mb-3">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-[#333] mb-1">
            {doctor.name}
          </h3>
          <p className="text-[#0B7A75] text-sm mb-2">{doctor.specialties}</p>
          <p className="text-xs text-[#8C8C8C]">
            {doctor.rating} ({doctor.reviewsCount} відгуків), {doctor.experienceYears} років досвіду
          </p>
        </div>
      </div>
      <p className="text-sm text-[#333] mb-2">
        Вартість консультації: <span className="font-semibold">{doctor.consultationPrice} грн</span>
      </p>
      <div className="flex items-center gap-2 text-sm text-[#8C8C8C] mb-1">
        <MapPin className="w-4 h-4 shrink-0 text-[#0B7A75]" />
        <span>{doctor.address}</span>
      </div>
      <p className="text-sm text-[#8C8C8C] mb-4">
        Найближчий вільний слот: {doctor.nearestSlot}
      </p>
      <button
        onClick={() => onBook(doctor.id)}
        className="w-full border-2 border-[#0B7A75] text-[#0B7A75] py-3 rounded-xl font-medium hover:bg-[#EBF7F6] transition-colors"
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
      <div className="min-h-screen bg-[#F6F6F6] pb-24">
        <StatusBar />

        {/* Header */}
        <div className="px-5 py-4 bg-white">
          <h1 className="text-xl font-semibold text-center text-[#333]">
            Головна
          </h1>
        </div>

        {/* Filters */}
        <div className="px-5 py-3 flex gap-3">
          <button
            onClick={() => setFilterSpecialty(!filterSpecialty)}
            className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
              filterSpecialty
                ? 'bg-[#0B7A75] text-white border-[#0B7A75]'
                : 'bg-white text-[#0B7A75] border-[#0B7A75]'
            }`}
          >
            Фільтр спеціальностей
          </button>
          <button
            onClick={() => setFilterAddress(!filterAddress)}
            className={`flex-1 py-3 rounded-xl font-medium text-sm border-2 ${
              filterAddress
                ? 'bg-[#0B7A75] text-white border-[#0B7A75]'
                : 'bg-white text-[#0B7A75] border-[#0B7A75]'
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
