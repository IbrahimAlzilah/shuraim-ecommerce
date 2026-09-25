import type { CartItem, Product } from "@rawnaq/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

import type { CartUiState } from "../types/ui-state"

interface CartState extends CartUiState {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clear: () => void
  openDrawer: () => void
  closeDrawer: () => void
  toggleDrawer: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isDrawerOpen: false,
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(
            (item) => item.product.id === product.id
          )

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }

          return {
            items: [
              ...state.items,
              { id: product.id, product, quantity },
            ],
          }
        })
      },
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }))
      },
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
          }))
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }))
      },
      clear: () => set({ items: [] }),
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () =>
        set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
    }),
    {
      name: "rawnaq-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
)
