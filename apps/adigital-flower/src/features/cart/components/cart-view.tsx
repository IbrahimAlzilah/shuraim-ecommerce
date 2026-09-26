"use client"

import { useTranslations } from "next-intl"

import { useCart } from "../hooks/use-cart"
import { FreeShippingProgress } from "./free-shipping-progress"
import { CartItem } from "./cart-item"
import { CartSummary } from "./cart-summary"

export function CartView() {
  const t = useTranslations("Cart")
  const { items, subtotal } = useCart()

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between border-b pb-4">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{t("title")}</h1>
        {items.length > 0 && (
          <span className="text-xs sm:text-sm text-muted-foreground">
            {t("itemsCount", { count: items.length })}
          </span>
        )}
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-16 text-center">
          <p className="text-base font-semibold text-foreground">{t("emptyCartTitle")}</p>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
            {t("emptyCartDesc")}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-3 rounded-2xl border bg-card p-4 sm:p-6 shadow-xs">
            <FreeShippingProgress subtotal={subtotal} />
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 rounded-2xl border bg-card p-4 sm:p-5 shadow-xs">
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      )}
    </div>
  )
}

