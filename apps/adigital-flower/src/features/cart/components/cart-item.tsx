"use client"

import type { CartItem as CartItemType } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { useLocale } from "next-intl"

import { QuantityStepper } from "@rawnaq/ui/components/quantity-stepper"

import { useCartStore } from "../hooks/use-cart-store"

export function CartItem({ item }: { item: CartItemType }) {
  const locale = useLocale()
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  const product = item.product
  const primaryImage = product.images[0]

  return (
    <div className="border rounded-xl p-3 flex flex-col gap-3 bg-card sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex items-center gap-3 min-w-0 sm:gap-3.5">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border bg-white dark:bg-muted/30 flex items-center justify-center">
          {primaryImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={primaryImage.url}
              alt={primaryImage.alt ?? product.name}
              className="size-full object-cover p-0.5 rounded-lg"
            />
          ) : (
            <div className="size-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
              -
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-medium text-xs leading-snug text-foreground line-clamp-2 wrap-break-word sm:text-sm">
            {product.name}
          </h4>
          <p className="text-sm font-bold text-primary mt-0.5">
            {formatCurrency(product.price.amount, product.price.currency, locale)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-1.5 shrink-0">
        <QuantityStepper
          value={item.quantity}
          onChange={(q: number) => updateQuantity(item.id, q)}
          max={product.stockCount ?? 99}
        />
      </div>
    </div>
  )
}

