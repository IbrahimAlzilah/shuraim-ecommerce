import type { HomeBanner } from "../types/home"

// Authentic beauty banners from cosmetics.sa
const mockBanners: HomeBanner[] = [
  {
    id: "b-devices-hero",
    imageUrl:
      "https://cdn.files.salla.network/homepage/1099831979/e910254d-772e-4a23-be21-58fb7beecc12_1440x589.webp",
    href: "/products?category=electronics",
  },
  {
    id: "b-lenses-hero",
    imageUrl:
      "https://cdn.files.salla.network/homepage/1099831979/f31348e7-53ed-43c4-affe-36a890b287a1.webp",
    href: "/products?category=accessories",
  },
  {
    id: "b-wellness-hero",
    imageUrl:
      "https://cdn.files.salla.network/homepage/1099831979/8e4e9df2-09e1-4f6e-89a4-5f8b61726f8f_1440x587.webp",
    href: "/products?category=bundles",
  },
  {
    id: "b-makeup-hero",
    imageUrl:
      "https://cdn.files.salla.network/homepage/1099831979/32b9f52a-5d2d-482f-8574-0c55d92db798.webp",
    href: "/products?category=makeup",
  },
  {
    id: "b-fragrance-hero",
    imageUrl:
      "https://cdn.files.salla.network/other/1099831979/571fe904-b89f-45f4-9efe-1fc35eb95cfb-original.webp",
    href: "/products?category=fragrance",
  },
  {
    id: "b-bestsellers-hero",
    imageUrl:
      "https://cdn.files.salla.network/other/1099831979/e88ff418-bd30-492f-b7e4-79ed8474900d-original.webp",
    href: "/products?badge=best-seller",
  },
]

export async function getHomeBanners(): Promise<HomeBanner[]> {
  return mockBanners
}
