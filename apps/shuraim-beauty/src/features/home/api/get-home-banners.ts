import type { HomeBanner } from "../types/home"

// Authentic beauty banners from cosmetics.sa
const mockBanners: HomeBanner[] = [
  {
    id: "b-1",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/7504cb7c-8ce3-4c9a-ab83-70c1a6d64448.webp",
    href: "/products",
  },
  {
    id: "b-2",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/c0f07d94-6379-4490-8690-f4565a0e52c9.webp",
    href: "/products",
  },
  {
    id: "b-3",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/a1f5d89f-2907-4a15-9e6f-8be96d448f32.webp",
    href: "/products?category=korean-care",
  },
]

export async function getHomeBanners(): Promise<HomeBanner[]> {
  return mockBanners
}