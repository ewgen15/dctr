import { ArrowLeft, Calendar, Clock, MapPin, Download, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import OrderMedicinesSheet from '../components/OrderMedicinesSheet';

export default function VisitDetails() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const [orderMedicinesOpen, setOrderMedicinesOpen] = useState(false);

  return (
    <MobileContainer>
      <div className="min-h-screen bg-[#F6F6F6] pb-8">
        <StatusBar />

        {/* Header */}
        <div className="px-5 py-4 flex items-center bg-white mb-6">
          <button onClick={() => navigate('/visits')} className="text-[#0B7A75] mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Деталі візиту</h1>
        </div>

        <div className="px-5 space-y-4">
          {/* Doctor Info Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-[#4CAF50] text-white text-xs font-medium rounded-full">
                Завершено
              </span>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1758653500342-5476c8ec3da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcHJvZmVzc2lvbmFsJTIwbWVkaWNhbHxlbnwxfHx8fDE3NzIwNDM5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Doctor"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#4CAF50] rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Дмитро Савченко</h3>
                <p className="text-[#0B7A75] text-sm mb-1">Стоматолог</p>
                <p className="text-[#8C8C8C] text-xs">Професійна чистка зубів</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-[#8C8C8C]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>28 січня 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>16:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>вул. Хрещатик, 22</span>
              </div>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="bg-[#EBF7F6] rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-base">Діагноз</h3>
              <span className="px-2 py-1 bg-white text-[#0B7A75] text-xs font-medium rounded">
                МКХ: K03.6
              </span>
            </div>
            <p className="text-sm text-[#333]">Зубний камінь, гінгівіт легкого ступеня</p>
          </div>

          {/* Doctor's Conclusion */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-base mb-3">Висновок лікаря</h3>
            <p className="text-sm text-[#666] leading-relaxed">
              Проведено професійну чистку зубів. Виявлено відкладення зубного каменю на нижній щелепі та початкові ознаки запалення ясен. Рекомендовано дотримуватися гігієни порожнини рота та профілактичні огляди кожні 6 місяців.
            </p>
          </div>

          {/* Recommendations */}
          <div className="bg-[#EBF7F6] rounded-2xl p-4">
            <h3 className="font-semibold text-base mb-3">Рекомендації</h3>
            <ol className="space-y-2 text-sm text-[#333]">
              <li className="flex gap-2">
                <span className="font-medium">1.</span>
                <span>Чистити зуби двічі на день мінімум 2 хвилини</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">2.</span>
                <span>Використовувати зубну нитку щодня</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">3.</span>
                <span>Полоскати рот антисептичним ополіскувачем</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">4.</span>
                <span>Обмежити вживання цукру та кислих продуктів</span>
              </li>
            </ol>
          </div>

          {/* Prescribed Medications */}
          {isExpanded && (
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-base">Призначені ліки</h3>
                <span className="text-[#0B7A75] font-semibold">~95 грн</span>
              </div>

              <div className="bg-[#F9F9F9] rounded-xl p-3 mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">Хлоргексидин (ополіскувач) 0.05%</h4>
                    <p className="text-xs text-[#8C8C8C]">
                      Полоскати рот 2 рази на день після чищення зубів протягом 7 днів
                    </p>
                  </div>
                  <span className="text-sm font-semibold ml-2">95 грн</span>
                </div>
              </div>

              <button
                onClick={() => setOrderMedicinesOpen(true)}
                className="w-full bg-[#0B7A75] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 mb-3"
              >
                Замовити ліки в аптеці поряд
                <span>→</span>
              </button>

              <button
                onClick={() => setIsExpanded(false)}
                className="w-full text-[#8C8C8C] py-2 flex items-center justify-center gap-2 text-sm"
              >
                Згорнути
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          )}

          {!isExpanded && (
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full text-[#0B7A75] font-medium text-sm"
              >
                Показати призначені ліки
              </button>
            </div>
          )}

          {/* Next Visit */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-base mb-2">Наступний візит</h3>
            <p className="text-sm text-[#666]">7 квітня 2026</p>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-base mb-4">Документи</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-[#F9F9F9] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EBF7F6] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0B7A75]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <span className="text-sm">Висновок_10.02.2026.pdf</span>
                </div>
                <button className="text-[#0B7A75]">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#F9F9F9] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EBF7F6] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0B7A75]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <span className="text-sm">УЗД_щитоподібної.pdf</span>
                </div>
                <button className="text-[#0B7A75]">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-[#F9F9F9] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#EBF7F6] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0B7A75]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <span className="text-sm">Аналізи_гормони.pdf</span>
                </div>
                <button className="text-[#0B7A75]">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#F0F0F0]">
              <p className="text-xs text-[#8C8C8C]">рецепт на ліки</p>
            </div>
          </div>
        </div>
        <OrderMedicinesSheet
          open={orderMedicinesOpen}
          onOpenChange={setOrderMedicinesOpen}
        />
      </div>
    </MobileContainer>
  );
}