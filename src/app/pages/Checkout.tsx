import {
  Building2,
  CreditCard,
  MapPin,
  Minus,
  Plus,
  Star,
  Trash2,
  Clock,
  Truck,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useI18n } from '../i18n';
import StatusBar from '../components/StatusBar';
import MobileContainer from '../components/MobileContainer';
import { ScreenHeader } from '../components/ScreenHeader';
import {
  buildInitialCheckoutLines,
  linePiecesTotal,
  lineSubtotalMid,
  type CheckoutLineItem,
} from '../data/checkoutLines';
import type { CheckoutLocationState, PaymentMethod } from '../types/checkout';
import { cn } from '../components/ui/utils';

function isCheckoutState(x: unknown): x is CheckoutLocationState {
  if (typeof x !== 'object' || x === null) return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.pharmacy === 'object' &&
    o.pharmacy !== null &&
    typeof (o.pharmacy as Record<string, unknown>).id === 'string' &&
    typeof o.selectedOptionByMedId === 'object' &&
    o.selectedOptionByMedId !== null
  );
}

export default function Checkout() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const state = isCheckoutState(location.state) ? location.state : null;

  const [lines, setLines] = useState<CheckoutLineItem[]>([]);
  const [payment, setPayment] = useState<PaymentMethod>('card');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!state) {
      navigate('/visits', { replace: true });
      return;
    }
    setLines(buildInitialCheckoutLines(state.selectedOptionByMedId));
  }, [location.key, state, navigate]);

  const pharmacy = state?.pharmacy;

  const orderTotalMid = useMemo(
    () => lines.reduce((s, l) => s + lineSubtotalMid(l), 0),
    [lines],
  );

  const updatePackCount = (lineId: string, delta: number) => {
    setLines((prev) =>
      prev.map((l) => {
        if (l.lineId !== lineId) return l;
        const next = Math.max(1, Math.min(99, l.packCount + delta));
        return { ...l, packCount: next };
      }),
    );
  };

  const removeLine = (lineId: string) => {
    setLines((prev) => prev.filter((l) => l.lineId !== lineId));
  };

  const handleConfirm = () => {
    if (!pharmacy || lines.length === 0) return;
    setSubmitted(true);
  };

  if (!pharmacy) {
    return null;
  }

  if (submitted) {
    const payHint =
      payment === 'card' ? t('checkout.payCardHint') : t('checkout.payPharmacyHint');
    return (
      <MobileContainer>
        <div className="min-h-screen bg-secondary pb-8">
          <StatusBar />
          <div className="px-5 py-8">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <h1 className="text-xl font-semibold text-foreground">
                {t('checkout.orderAccepted')}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t('checkout.orderAcceptedBody', { name: pharmacy.name, hint: payHint })}
              </p>
              <button
                type="button"
                onClick={() => navigate('/visits')}
                className="mt-6 w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
              >
                {t('checkout.toVisits')}
              </button>
            </div>
          </div>
        </div>
      </MobileContainer>
    );
  }

  return (
    <MobileContainer>
      <div className="min-h-screen bg-secondary pb-28">
        <StatusBar />

        <ScreenHeader
          variant="backTitle"
          title={t('checkout.title')}
          onBack={() => navigate(-1)}
          sticky
        />

        <div className="space-y-4 px-5 pt-4">
          <section className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Building2 className="size-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {t('checkout.pharmacy')}
                </p>
                <h2 className="text-base font-semibold leading-snug text-foreground">
                  {pharmacy.name}
                </h2>
                <div className="mt-2 flex gap-2 text-xs text-muted-foreground">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" />
                  <span>{pharmacy.address}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3.5 text-amber-500" />
                    {pharmacy.rating}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {pharmacy.hours}
                  </span>
                  {pharmacy.hasDelivery && (
                    <span className="inline-flex items-center gap-1">
                      <Truck className="size-3.5" />
                      {t('checkout.delivery')}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-semibold text-primary">
                  {t('checkout.priceEstimate', { price: pharmacy.totalPrice })}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-foreground">{t('checkout.yourOrder')}</h3>
            <ul className="space-y-3">
              {lines.map((line) => {
                const pieces = linePiecesTotal(line);
                return (
                  <li
                    key={line.lineId}
                    className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {line.name}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {t('checkout.asPrescribed')} {line.quantityLabel}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {t('checkout.packsLine', {
                            packs: line.packCount,
                            pieces: line.piecesPerPack,
                            total: pieces,
                          })}
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {t('checkout.pricePerPack', {
                            min: line.priceMin,
                            max: line.priceMax,
                            mid: lineSubtotalMid(line),
                          })}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeLine(line.lineId)}
                        className="shrink-0 rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        aria-label={t('checkout.removeLine')}
                      >
                        <Trash2 className="size-5" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">{t('checkout.packCount')}</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updatePackCount(line.lineId, -1)}
                          disabled={line.packCount <= 1}
                          className="flex size-10 items-center justify-center rounded-lg border border-border bg-background disabled:opacity-40"
                          aria-label={t('checkout.less')}
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums">
                          {line.packCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => updatePackCount(line.lineId, 1)}
                          disabled={line.packCount >= 99}
                          className="flex size-10 items-center justify-center rounded-lg border border-border bg-background disabled:opacity-40"
                          aria-label={t('checkout.more')}
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {lines.length === 0 && (
              <p className="rounded-xl border border-dashed border-border bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">
                {t('checkout.emptyCart')}
              </p>
            )}
          </section>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
            <p>{t('checkout.holdNote')}</p>
          </div>

          <section>
            <h3 className="mb-2 text-sm font-semibold text-foreground">{t('checkout.payment')}</h3>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setPayment('card')}
                className={cn(
                  'flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors',
                  payment === 'card'
                    ? 'border-primary bg-primary/10 text-foreground ring-2 ring-primary/25'
                    : 'border-border bg-card text-foreground hover:bg-muted/50',
                )}
              >
                <CreditCard className="size-5 shrink-0 text-primary" />
                <span>{t('checkout.payCard')}</span>
              </button>
              <button
                type="button"
                onClick={() => setPayment('at_pharmacy')}
                className={cn(
                  'flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors',
                  payment === 'at_pharmacy'
                    ? 'border-primary bg-primary/10 text-foreground ring-2 ring-primary/25'
                    : 'border-border bg-card text-foreground hover:bg-muted/50',
                )}
              >
                <Building2 className="size-5 shrink-0 text-primary" />
                <span>{t('checkout.payPharmacy')}</span>
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t('checkout.totalEstimate')}</span>
              <span className="text-lg font-bold text-primary">
                ~{orderTotalMid} {t('common.uah')}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{t('checkout.totalDisclaimer')}</p>
          </section>
        </div>

        <div className="fixed bottom-0 left-1/2 z-20 w-full max-w-[383px] -translate-x-1/2 border-t border-border bg-card px-5 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={handleConfirm}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground disabled:opacity-45"
          >
            {t('checkout.confirm')}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
