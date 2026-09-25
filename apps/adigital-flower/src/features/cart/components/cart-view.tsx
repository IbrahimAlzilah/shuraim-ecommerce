"use client"

import { useTranslations } from "next-intl"

import { useCart } from "../hooks/use-cart"
import { CartItem } from "./cart-item"
import { CartSummary } from "./cart-summary"

export function CartView() {
  const t = useTranslations("Cart")
  const { items, subtotal } = useCart()

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-6">
      <h1 className="text-xl font-medium">{t("title")}</h1>

      {items.length === 0 ? (
        <p className="text-muted-foreground text-sm">{t("empty")}</p>
      ) : (
        <>
          <div className="divide-y">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary subtotal={subtotal} />
        </>
      )}
    </div>
  )
}
