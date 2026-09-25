"use client"

import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import { FreeShippingProgress } from "./free-shipping-progress"

export function CartSummary({ subtotal }: { subtotal: number }) {
  const t = useTranslations("Cart")
  const locale = useLocale()

  return (
    <div className="flex flex-col gap-3.5 border-t pt-4">
      {/* Free Shipping Gamification Bar */}
      <FreeShippingProgress subtotal={subtotal} />

      {/* Subtotal */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{t("subtotal")}</span>
        <span className="text-base font-bold text-foreground">
          {formatCurrency(subtotal, "OMR", locale)}
        </span>
      </div>

      {/* Checkout Button */}
      <Button asChild size="lg" className="w-full text-sm font-semibold">
        <Link href="/checkout">{t("checkout")}</Link>
      </Button>
    </div>
  )
}
