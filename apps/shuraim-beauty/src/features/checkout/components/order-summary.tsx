"use client"

import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

export function OrderSummary({
  subtotal,
  shippingFee,
  discount = 0,
}: {
  subtotal: number
  shippingFee: number
  discount?: number
}) {
  const t = useTranslations("Checkout")
  const locale = useLocale()
  const total = subtotal + shippingFee - discount

  return (
    <div className="border-border flex flex-col gap-2 rounded-lg border p-4 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">{t("summary.subtotal")}</span>
        <span>{formatCurrency(subtotal, "OMR", locale)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-muted-foreground">{t("summary.shipping")}</span>
        <span>{formatCurrency(shippingFee, "OMR", locale)}</span>
      </div>
      {discount > 0 && (
        <div className="flex justify-between">
          <span className="text-muted-foreground">{t("summary.discount")}</span>
          <span>-{formatCurrency(discount, "OMR", locale)}</span>
        </div>
      )}
      <div className="flex justify-between border-t pt-2 font-medium">
        <span>{t("summary.total")}</span>
        <span>{formatCurrency(total, "OMR", locale)}</span>
      </div>
    </div>
  )
}
