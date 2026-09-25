"use client"

import { CheckCircle2, Circle } from "lucide-react"
import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import type { ShippingMethod } from "../types/checkout-flow"

export function ShippingMethodSelector({
  methods,
  selected,
  onSelect,
  onBack,
}: {
  methods: ShippingMethod[]
  selected: ShippingMethod | null
  onSelect: (method: ShippingMethod) => void
  onBack: () => void
}) {
  const t = useTranslations("Checkout")
  const locale = useLocale()

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-2.5">
        {methods.map((method) => {
          const isSelected = selected?.id === method.id
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onSelect(method)}
              className={cn(
                "group flex items-center justify-between rounded-xl border p-3.5 text-start transition-all",
                isSelected
                  ? "border-primary bg-primary/5 shadow-xs"
                  : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
              )}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-primary shrink-0">
                  {isSelected ? (
                    <CheckCircle2 className="size-5 fill-primary text-primary-foreground" />
                  ) : (
                    <Circle className="size-5 text-muted-foreground" />
                  )}
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">{method.label}</span>
                    {method.badge && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        {method.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {t("shipping.eta", { days: method.etaDays })}
                  </span>
                </div>
              </div>

              <div className="text-end">
                <span className="text-sm font-bold text-foreground">
                  {method.price === 0
                    ? "مجاناً"
                    : formatCurrency(method.price, "YER", locale)}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      <div className="flex gap-2 pt-2">
        <Button variant="outline" onClick={onBack}>
          {t("back")}
        </Button>
      </div>
    </div>
  )
}
