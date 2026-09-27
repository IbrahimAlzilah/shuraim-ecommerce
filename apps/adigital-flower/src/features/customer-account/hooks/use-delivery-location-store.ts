import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface DeliveryLocationState {
  country: string
  city: string
  addressLine: string
  isOpen: boolean
  setCity: (city: string) => void
  setAddressLine: (line: string) => void
  setIsOpen: (isOpen: boolean) => void
}

export interface CityOption {
  id: string
  nameAr: string
  nameEn: string
}

export const YEMEN_CITIES: CityOption[] = [
  { id: "sanaa", nameAr: "صنعاء", nameEn: "Sana'a" },
  { id: "aden", nameAr: "عدن", nameEn: "Aden" },
  { id: "taiz", nameAr: "تعز", nameEn: "Taiz" },
  { id: "ibb", nameAr: "إب", nameEn: "Ibb" },
  { id: "mukalla", nameAr: "المكلا", nameEn: "Al Mukalla" },
  { id: "hodeidah", nameAr: "الحديدة", nameEn: "Al Hodeidah" },
  { id: "dhamar", nameAr: "ذمار", nameEn: "Dhamar" },
  { id: "sayun", nameAr: "سيئون", nameEn: "Sayun" },
]

export const useDeliveryLocationStore = create<DeliveryLocationState>()(
  persist(
    (set) => ({
      country: "الجمهورية اليمنية",
      city: "صنعاء",
      addressLine: "شارع حدة، جوار المركز التجاري",
      isOpen: false,
      setCity: (city) => set({ city }),
      setAddressLine: (addressLine) => set({ addressLine }),
      setIsOpen: (isOpen) => set({ isOpen }),
    }),
    {
      name: "adigital-delivery-location",
      partialize: (state) => ({
        country: state.country,
        city: state.city,
        addressLine: state.addressLine,
      }),
    }
  )
)
