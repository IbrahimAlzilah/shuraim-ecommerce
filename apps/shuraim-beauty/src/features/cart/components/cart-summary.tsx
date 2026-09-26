"use client"

import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import { useCartStore } from "../hooks/use-cart-store"

interface CartSummaryProps {
  subtotal: number
  onCheckout?: () => void
}

export function CartSummary({ subtotal, onCheckout }: CartSummaryProps) {
  const t = useTranslations("Cart")
  const locale = useLocale()
  const closeDrawer = useCartStore((state) => state.closeDrawer)

  const handleCheckout = () => {
    closeDrawer()
    onCheckout?.()
  }

  return (
    <div className="flex flex-col gap-3.5 border-t pt-4">
      {/* Subtotal */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">{t("subtotal")}</span>
        <span className="text-base font-bold text-foreground">
          {formatCurrency(subtotal, "OMR", locale)}
        </span>
      </div>

      {/* Checkout Button */}
      <Button asChild size="lg" className="w-full text-sm font-medium rounded-full" onClick={handleCheckout}>
        <Link href="/checkout" onClick={handleCheckout}>
          {t("checkout")}
        </Link>
      </Button>
    </div>
  )
}
