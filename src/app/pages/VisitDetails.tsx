import { Calendar, Clock, MapPin, Download, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useMemo, useState } from 'react';
import { useI18n } from '../i18n';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import { ScreenHeader } from '../components/ScreenHeader';
import OrderMedicinesSheet from '../components/OrderMedicinesSheet';
import { VisitCard } from '../components/VisitCard';
import {
  PRESCRIBED_MEDS,
  getActiveOption,
  getPrescriptionTotalRange,
} from '../data/prescribedMedications';

export default function VisitDetails() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const [orderMedicinesOpen, setOrderMedicinesOpen] = useState(false);
  const [selectedOptionByMedId, setSelectedOptionByMedId] = useState<Record<string, string>>({});

  const orderTotalRange = useMemo(
    () => getPrescriptionTotalRange(selectedOptionByMedId),
    [selectedOptionByMedId],
  );

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-8">
        <StatusBar />

        <ScreenHeader
          variant="backTitle"
          title={t('visitDetails.title')}
          onBack={() => navigate('/visits')}
          className="mb-6"
        />

        <div className="px-5 space-y-4">
          {/* Doctor Info Card */}
          <VisitCard
            status="completed"
            doctor={{
              name: 'Дмитро Савченко',
              specialty: 'Стоматолог',
              service: 'Професійна чистка зубів',
              avatarUrl:
                'https://images.unsplash.com/photo-1758653500342-5476c8ec3da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwbWVkaWNhbHxlbnwxfHx8fDE3NzIwNDM5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
            }}
            infoRows={[
              { icon: <Calendar className="size-4" />, text: '28 січня 2026' },
              { icon: <Clock className="size-4" />, text: '16:00' },
              { icon: <MapPin className="size-4" />, text: 'вул. Хрещатик, 22' },
            ]}
          />

          {/* Diagnosis Section */}
          <div className="bg-primary/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">{t('visitDetails.diagnosis')}</h3>
              <span className="px-2 py-1 bg-card text-primary text-xs font-medium rounded">
                {t('visitDetails.icd')} K03.6
              </span>
            </div>
            <p className="text-sm text-foreground">{t('visitDetails.demoDiagnosisBody')}</p>
          </div>

          {/* Doctor's Conclusion */}
          <div className="bg-card rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-base mb-3">{t('visitDetails.conclusion')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('visitDetails.demoConclusion')}
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-primary/10 rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-3">{t('visitDetails.recommendations')}</h3>
            <ol className="space-y-2 text-sm text-foreground">
              <li className="flex gap-2">
                <span className="font-medium">1.</span>
                <span>{t('visitDetails.rec1')}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">2.</span>
                <span>{t('visitDetails.rec2')}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">3.</span>
                <span>{t('visitDetails.rec3')}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">4.</span>
                <span>{t('visitDetails.rec4')}</span>
              </li>
            </ol>
          </div>

          {/* Prescribed Medications */}
          {isExpanded && (
            <div className="bg-card rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4 gap-2">
                <h3 className="font-semibold text-base">{t('visitDetails.prescribedMeds')}</h3>
                <span className="text-primary font-semibold text-right shrink-0">
                  ~{orderTotalRange.min}–{orderTotalRange.max} {t('common.uah')}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                {PRESCRIBED_MEDS.map((med) => {
                  const active = getActiveOption(med, selectedOptionByMedId);
                  return (
                    <div key={med.id}>
                      <div className="rounded-xl bg-muted p-3 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-sm leading-snug">{active.name}</h4>
                            <p className="mt-1 text-xs text-muted-foreground">
                              <span className="text-foreground/80">{t('visitDetails.perDoctor')} </span>
                              {med.quantityLabel}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-primary shrink-0 self-start">
                            {active.priceMin}–{active.priceMax} {t('common.uah')}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setOrderMedicinesOpen(true)}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium flex items-center justify-center gap-2 mb-3"
              >
                {t('visitDetails.reserve')}
                <span>→</span>
              </button>

              <button
                onClick={() => setIsExpanded(false)}
                className="w-full text-muted-foreground py-2 flex items-center justify-center gap-2 text-sm"
              >
                {t('visitDetails.collapse')}
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}

          {!isExpanded && (
            <div className="bg-card rounded-2xl p-4 shadow-sm">
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full text-primary font-medium text-sm"
              >
                {t('visitDetails.showMeds')}
              </button>
            </div>
          )}

          {/* Next Visit */}
          <div className="bg-card rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-base mb-2">{t('visitDetails.nextVisit')}</h3>
            <p className="text-sm text-muted-foreground">{t('visitDetails.nextVisitDate')}</p>
          </div>

          {/* Documents */}
          <div className="bg-card rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-base mb-4">{t('visitDetails.documents')}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <span className="text-sm">{t('visitDetails.doc1')}</span>
                </div>
                <button className="text-primary">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <span className="text-sm">{t('visitDetails.doc2')}</span>
                </div>
                <button className="text-primary">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <span className="text-sm">{t('visitDetails.doc3')}</span>
                </div>
                <button className="text-primary">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">{t('visitDetails.recipeNote')}</p>
            </div>
          </div>
        </div>
        <OrderMedicinesSheet
          open={orderMedicinesOpen}
          onOpenChange={setOrderMedicinesOpen}
          selectedOptionByMedId={selectedOptionByMedId}
          onSelectedOptionChange={setSelectedOptionByMedId}
        />
      </div>
    </MobileContainer>
  );
}