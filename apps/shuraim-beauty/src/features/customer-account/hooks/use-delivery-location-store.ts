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

export const OMAN_CITIES: CityOption[] = [
  { id: "muscat", nameAr: "مسقط", nameEn: "Muscat" },
  { id: "seeb", nameAr: "السيب", nameEn: "Al Seeb" },
  { id: "salalah", nameAr: "صلالة", nameEn: "Salalah" },
  { id: "sohar", nameAr: "صحار", nameEn: "Sohar" },
  { id: "bawshar", nameAr: "بوشر", nameEn: "Bawshar" },
  { id: "nizwa", nameAr: "نزوى", nameEn: "Nizwa" },
  { id: "sur", nameAr: "صور", nameEn: "Sur" },
  { id: "ibri", nameAr: "عبري", nameEn: "Ibri" },
  { id: "barka", nameAr: "بركاء", nameEn: "Barka" },
]

export const useDeliveryLocationStore = create<DeliveryLocationState>()(
  persist(
    (set) => ({
      country: "سلطنة عُمان",
      city: "مسقط",
      addressLine: "حي الموالح، شارع النور",
      isOpen: false,
      setCity: (city) => set({ city }),
      setAddressLine: (addressLine) => set({ addressLine }),
      setIsOpen: (isOpen) => set({ isOpen }),
    }),
    {
      name: "shuraim-delivery-location",
      partialize: (state) => ({
        country: state.country,
        city: state.city,
        addressLine: state.addressLine,
      }),
    }
  )
)
