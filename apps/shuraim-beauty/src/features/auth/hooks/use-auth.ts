import { useAuthStore } from "../store/auth-store"

export function useAuth() {
  const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state) => state.token)
  const hasHydrated = useAuthStore((state) => state.hasHydrated)

  const isModalOpen = useAuthStore((state) => state.isModalOpen)
  const modalView = useAuthStore((state) => state.modalView)
  const openModal = useAuthStore((state) => state.openModal)
  const closeModal = useAuthStore((state) => state.closeModal)
  const setModalView = useAuthStore((state) => state.setModalView)

  return {
    user,
    isAuthenticated: Boolean(user && token),
    hasHydrated,
    isModalOpen,
    modalView,
    openModal,
    closeModal,
    setModalView,
  }
}
