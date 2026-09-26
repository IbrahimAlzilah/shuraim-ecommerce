import { useMemo } from "react"

import { calculateTotals } from "../utils/calculate-totals"
import { useCartStore } from "./use-cart-store"

export function useCart() {
  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clear = useCartStore((state) => state.clear)

  const openDrawer = useCartStore((state) => state.openDrawer)

  const totals = useMemo(() => calculateTotals(items), [items])

  return {
    items,
    ...totals,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    openDrawer,
  }
}
