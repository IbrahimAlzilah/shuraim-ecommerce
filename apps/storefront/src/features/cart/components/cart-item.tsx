"use client"

import type { CartItem as CartItemType } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { Minus, Plus, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"

import { useCartStore } from "../hooks/use-cart-store"

export function CartItem({ item }: { item: CartItemType }) {
  const t = useTranslations("Cart")
  const locale = useLocale()
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  return (
    <div className="flex gap-3 py-3">
      {item.product.images[0] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.product.images[0].url}
          alt={item.product.images[0].alt ?? item.product.name}
          className="size-16 rounded-md object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium">{item.product.name}</p>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={t("remove")}
            onClick={() => removeItem(item.id)}
          >
            <X />
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          {formatCurrency(item.product.price.amount, item.product.price.currency, locale)}
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-xs"
            aria-label={t("decrease")}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus />
          </Button>
          <span className="w-4 text-center text-sm">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon-xs"
            aria-label={t("increase")}
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  )
}
