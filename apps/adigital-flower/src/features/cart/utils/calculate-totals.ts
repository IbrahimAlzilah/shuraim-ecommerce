import type { CartItem } from "@rawnaq/types"

export interface CartTotals {
  itemCount: number
  subtotal: number
}

export function calculateTotals(items: CartItem[]): CartTotals {
  return items.reduce(
    (totals, item) => ({
      itemCount: totals.itemCount + item.quantity,
      subtotal: totals.subtotal + item.product.price.amount * item.quantity,
    }),
    { itemCount: 0, subtotal: 0 }
  )
}
