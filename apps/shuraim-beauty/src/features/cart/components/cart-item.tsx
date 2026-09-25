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
    <div className="flex gap-3 py-3.5 items-start">
      {item.product.images[0] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.product.images[0].url}
          alt={item.product.images[0].alt ?? item.product.name}
          className="size-16 sm:size-20 rounded-lg object-cover shrink-0 border bg-muted/30"
        />
      )}
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs sm:text-sm font-medium line-clamp-2">{item.product.name}</p>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={t("remove")}
            onClick={() => removeItem(item.id)}
            className="shrink-0 -mt-1 -me-1 text-muted-foreground hover:text-destructive"
          >
            <X className="size-4" />
          </Button>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm font-semibold">
          {formatCurrency(item.product.price.amount, item.product.price.currency, locale)}
        </p>
        <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
          <Button
            variant="outline"
            size="icon-xs"
            className="size-8 touch-manipulation"
            aria-label={t("decrease")}
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="size-3.5" />
          </Button>
          <span className="w-5 text-center text-xs sm:text-sm font-semibold">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon-xs"
            className="size-8 touch-manipulation"
            aria-label={t("increase")}
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
