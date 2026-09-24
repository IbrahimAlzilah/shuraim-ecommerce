import { create } from "zustand"

interface SearchState {
  isOpen: boolean
  query: string
  openSearch: () => void
  closeSearch: () => void
  setQuery: (query: string) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  isOpen: false,
  query: "",
  openSearch: () => set({ isOpen: true }),
  closeSearch: () => set({ isOpen: false, query: "" }),
  setQuery: (query) => set({ query }),
}))
