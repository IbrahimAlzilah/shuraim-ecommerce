import type { Customer } from "@rawnaq/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type AuthModalView = "login" | "register" | "forgot-password"

interface AuthState {
  token: string | null
  user: Customer | null
  hasHydrated: boolean
  setSession: (token: string, user: Customer) => void
  clearSession: () => void
  setHasHydrated: (value: boolean) => void

  // Modal UI state lives in the same store — it's small and tightly coupled
  // to the session, and there's no reason to split it into a second store.
  isModalOpen: boolean
  modalView: AuthModalView
  openModal: (view?: AuthModalView) => void
  closeModal: () => void
  setModalView: (view: AuthModalView) => void
}

// Session fields are persisted like `cart`/`wishlist`: this is a client-only
// demo session, not a real httpOnly cookie/token — see mock-auth-data.ts for
// why. Modal state is intentionally left out of `partialize` so it never
// survives a reload.
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      hasHydrated: false,
      setSession: (token, user) => set({ token, user }),
      clearSession: () => set({ token: null, user: null }),
      setHasHydrated: (value) => set({ hasHydrated: value }),

      isModalOpen: false,
      modalView: "login",
      openModal: (view = "login") => set({ isModalOpen: true, modalView: view }),
      closeModal: () => set({ isModalOpen: false }),
      setModalView: (view) => set({ modalView: view }),
    }),
    {
      name: "rawnaq-auth",
      partialize: (state) => ({ token: state.token, user: state.user }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    }
  )
)
