"use client"

import { CheckCircle2, Circle, CreditCard, ShieldCheck } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import type { PaymentMethod } from "../types/checkout-flow"

const PAYMENT_OPTIONS: {
  id: PaymentMethod
  title: string
  subtitle: string
  badge?: string
}[] = [
  {
    id: "kuraimi-mobile",
    title: "الكريمي موبايل",
    subtitle: "الدفع الفوري عبر محفظة بنك الكريمي الإسلامي",
    badge: "الأكثر استخداماً",
  },
  {
    id: "floosak",
    title: "فلوسك (Floosak)",
    subtitle: "الدفع الآمن عبر محفظة فلوسك الإلكترونية",
    badge: "دفع رقمي",
  },
  {
    id: "onecash",
    title: "ون كاش (OneCash)",
    subtitle: "تحويل ودفع فوري عبر محفظة ون كاش",
  },
  {
    id: "card",
    title: "البطاقة الائتمانية (Visa / Mastercard)",
    subtitle: "دفع مشفر وآمن يدعم جميع البطاقات الائتمانية والخصم",
  },
  {
    id: "cash-on-delivery",
    title: "الدفع عند الاستلام (COD)",
    subtitle: "ادفعي نقداً عند استلام طلبكِ في أي محافظة يمنية",
    badge: "الأكثر شيوعاً",
  },
]

export function PaymentMethodSelector({
  selected,
  onSelect,
  onBack,
  onSubmit,
  isSubmitting,
}: {
  selected: PaymentMethod | null
  onSelect: (method: PaymentMethod) => void
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}) {
  const t = useTranslations("Checkout")

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-2 text-xs text-muted-foreground pb-1">
        <ShieldCheck className="size-4 text-emerald-600" />
        <span>جميع عمليات الدفع مشفرة ومحمية بنسبة 100%</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {PAYMENT_OPTIONS.map((option) => {
          const isSelected = selected === option.id
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={cn(
                "group relative flex items-start gap-3 rounded-xl border p-3.5 text-start transition-all",
                isSelected
                  ? "border-primary bg-primary/5 shadow-xs"
                  : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
              )}
            >
              <div className="mt-0.5 shrink-0 text-primary">
                {isSelected ? (
                  <CheckCircle2 className="size-5 fill-primary text-primary-foreground" />
                ) : (
                  <Circle className="size-5 text-muted-foreground" />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-foreground">{option.title}</span>
                  {option.badge && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {option.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {option.subtitle}
                </span>
              </div>

              <CreditCard className="size-4 text-muted-foreground shrink-0 opacity-40 group-hover:opacity-80 transition-opacity" />
            </button>
          )
        })}
      </div>

      <div className="flex gap-2 pt-2">
        <Button variant="outline" onClick={onBack} disabled={isSubmitting}>
          {t("back")}
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!selected || isSubmitting}
          className="flex-1 text-sm font-semibold"
        >
          {isSubmitting ? "جاري المعالجة..." : t("placeOrder")}
        </Button>
      </div>
    </div>
  )
}
