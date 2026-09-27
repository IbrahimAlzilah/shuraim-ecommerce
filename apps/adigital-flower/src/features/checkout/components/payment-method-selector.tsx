"use client"

import { CheckCircle2, Circle, CreditCard, Loader2, ShieldCheck } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import type { PaymentMethod } from "../types/checkout-flow"

const PAYMENT_OPTIONS = [
  {
    id: "kuraimi-mobile" as PaymentMethod,
    titleKey: "paymentMethods.kuraimi.title" as const,
    subtitleKey: "paymentMethods.kuraimi.subtitle" as const,
    badgeKey: "paymentMethods.kuraimi.badge" as const,
  },
  {
    id: "floosak" as PaymentMethod,
    titleKey: "paymentMethods.floosak.title" as const,
    subtitleKey: "paymentMethods.floosak.subtitle" as const,
    badgeKey: "paymentMethods.floosak.badge" as const,
  },
  {
    id: "onecash" as PaymentMethod,
    titleKey: "paymentMethods.onecash.title" as const,
    subtitleKey: "paymentMethods.onecash.subtitle" as const,
    badgeKey: undefined,
  },
  {
    id: "card" as PaymentMethod,
    titleKey: "paymentMethods.card.title" as const,
    subtitleKey: "paymentMethods.card.subtitle" as const,
    badgeKey: undefined,
  },
  {
    id: "cash-on-delivery" as PaymentMethod,
    titleKey: "paymentMethods.cod.title" as const,
    subtitleKey: "paymentMethods.cod.subtitle" as const,
    badgeKey: undefined,
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
        <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
        <span>{t("securePaymentNotice")}</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {PAYMENT_OPTIONS.map((option) => {
          const isSelected = selected === option.id
          const title = t(option.titleKey)
          const subtitle = t(option.subtitleKey)
          const badge = option.badgeKey ? t(option.badgeKey) : null

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={cn(
                "group relative flex items-start gap-3 rounded-xl border p-3 sm:p-3.5 text-start transition-all",
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

              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-foreground">{title}</span>
                  {badge && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {badge}
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {subtitle}
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
          className={cn(
            "flex-1 text-sm font-semibold",
            isSubmitting && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90"
          )}
        >
          {isSubmitting ? <Loader2 className="size-4 animate-spin shrink-0" /> : t("placeOrder")}
        </Button>
      </div>
    </div>
  )
}

