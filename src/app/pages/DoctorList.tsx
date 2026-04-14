import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useI18n } from '../i18n';
import { DOCTORS } from '../data/doctors';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import { DoctorCard } from '../components/DoctorCard';
import { ScreenHeader } from '../components/ScreenHeader';
import { Button } from '../components/ui/button';
import { cn } from '../components/ui/utils';

export default function DoctorList() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') ?? '').trim().toLowerCase();
  const [filterSpecialty, setFilterSpecialty] = useState(false);
  const [filterAddress, setFilterAddress] = useState(false);

  const filteredDoctors = useMemo(() => {
    if (!q) return [...DOCTORS];
    return DOCTORS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialties.toLowerCase().includes(q) ||
        d.address.toLowerCase().includes(q)
    );
  }, [q]);

  const handleBook = (doctorId: string) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-24">
        <StatusBar />

        <ScreenHeader variant="titleCenter" title={t('doctors.title')} />

        {/* Filters */}
        <div className="px-5 py-3 flex gap-3">
          <Button
            type="button"
            variant={filterSpecialty ? 'default' : 'outline'}
            onClick={() => setFilterSpecialty(!filterSpecialty)}
            className={cn(
              'flex-1 rounded-xl border-2 py-3 font-medium text-sm',
              filterSpecialty ? 'border-primary' : 'border-primary bg-card text-primary hover:bg-primary/10',
            )}
          >
            {t('doctors.filterSpecialty')}
          </Button>
          <Button
            type="button"
            variant={filterAddress ? 'default' : 'outline'}
            onClick={() => setFilterAddress(!filterAddress)}
            className={cn(
              'flex-1 rounded-xl border-2 py-3 font-medium text-sm',
              filterAddress ? 'border-primary' : 'border-primary bg-card text-primary hover:bg-primary/10',
            )}
          >
            {t('doctors.filterAddress')}
          </Button>
        </div>

        {/* Doctor cards list */}
        <div className="px-5 space-y-4">
          {filteredDoctors.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">
              {q ? (
                <>{t('doctors.noResults', { q: searchParams.get('q') ?? '' })}</>
              ) : (
                t('doctors.empty')
              )}
            </p>
          ) : (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} onBook={handleBook} />
            ))
          )}
        </div>

        <BottomNav />
      </div>
    </MobileContainer>
  );
}
