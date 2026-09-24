"use client"

import { Truck, Gift, CheckCircle2 } from "lucide-react"
import { useLocale } from "next-intl"

import { formatCurrency } from "@rawnaq/utils"

const FREE_SHIPPING_THRESHOLD = 25

export function FreeShippingProgress({ subtotal }: { subtotal: number }) {
  const locale = useLocale()
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))
  const isQualified = remaining === 0

  return (
    <div className="rounded-xl border bg-muted/30 p-3 text-xs shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        {isQualified ? (
          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
        ) : (
          <Truck className="size-4 text-primary shrink-0" />
        )}
        <span className="font-medium text-foreground">
          {isQualified ? (
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              مبروك! حصلت على شحن مجاني لكافة محافظات سلطنة عُمان!
            </span>
          ) : (
            <span>
              أضيفي بـ{" "}
              <b className="text-primary font-bold">
                {formatCurrency(remaining, "OMR", locale)}
              </b>{" "}
              للحصول على <strong>شحن مجاني + هدية</strong>
            </span>
          )}
        </span>
        <Gift className="size-4 text-amber-500 ms-auto shrink-0" />
      </div>

      {/* Progress Bar Container */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full transition-all duration-500 ${
            isQualified ? "bg-emerald-500" : "bg-primary"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
