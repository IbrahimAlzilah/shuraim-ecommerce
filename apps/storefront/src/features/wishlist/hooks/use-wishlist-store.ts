import { create } from "zustand"
import { persist } from "zustand/middleware"

interface WishlistState {
  ids: string[]
  toggle: (productId: string) => void
  clear: () => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      ids: [],
      toggle: (productId) => {
        set((state) => ({
          ids: state.ids.includes(productId)
            ? state.ids.filter((id) => id !== productId)
            : [...state.ids, productId],
        }))
      },
      clear: () => set({ ids: [] }),
    }),
    { name: "rawnaq-wishlist" }
  )
)
