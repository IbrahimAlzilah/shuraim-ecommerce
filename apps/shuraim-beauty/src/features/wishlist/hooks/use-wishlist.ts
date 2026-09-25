import { useCallback } from "react"

import { useWishlistStore } from "./use-wishlist-store"

export function useWishlist(productId?: string) {
  const ids = useWishlistStore((state) => state.ids)
  const toggleId = useWishlistStore((state) => state.toggle)
  const clear = useWishlistStore((state) => state.clear)

  const isWishlisted = productId ? ids.includes(productId) : false

  const toggle = useCallback(
    (id: string = productId ?? "") => {
      if (id) {
        toggleId(id)
      }
    },
    [productId, toggleId]
  )

  return { ids, count: ids.length, isWishlisted, toggle, clear }
}
