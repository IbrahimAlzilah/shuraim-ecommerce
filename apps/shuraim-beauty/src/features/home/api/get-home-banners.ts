import type { HomeBanner } from "../types/home"

// Authentic beauty banners sourced directly from roseberryksa.com and hosted locally
const mockBanners: HomeBanner[] = [
  {
    id: "b-summer-deals-hero",
    imageUrl: "/images/banners/hero-slide-1.webp",
    href: "/categories/deals",
  },
  {
    id: "b-body-splash-hero",
    imageUrl: "/images/banners/hero-slide-2.webp",
    href: "/categories/body-care",
  },
  {
    id: "b-cosmetics-bundles-hero",
    imageUrl: "/images/banners/hero-slide-3.webp",
    href: "/categories/boxes-bundles",
  },
  {
    id: "b-luxury-musk-hero",
    imageUrl: "/images/banners/hero-slide-4.webp",
    href: "/categories/fragrance",
  },
  {
    id: "b-promo-dual-1",
    imageUrl: "/images/banners/promo-dual-1.webp",
    href: "/categories/body-care",
  },
  {
    id: "b-promo-dual-2",
    imageUrl: "/images/banners/promo-dual-2.webp",
    href: "/categories/boxes-bundles",
  },
  {
    id: "b-promo-fullwidth",
    imageUrl: "/images/banners/promo-fullwidth.webp",
    href: "/categories/skincare",
  },
]

export async function getHomeBanners(): Promise<HomeBanner[]> {
  return mockBanners
}

