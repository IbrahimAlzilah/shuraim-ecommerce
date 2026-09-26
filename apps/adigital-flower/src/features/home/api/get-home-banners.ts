import type { HomeBanner, PromoBanners } from "../types/home"

// Dedicated Beauty Devices & Electronics Banners
export const deviceBanners: HomeBanner[] = [
  {
    id: "banner-device-anola-hero",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/e910254d-772e-4a23-be21-58fb7beecc12_1440x589.webp",
    href: "/products?category=electronics",
  },
  {
    id: "banner-devices-styling-grid",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/5f79bc6f-e5c0-4cd0-aec7-f7dd4b397e6e.webp",
    href: "/products?category=electronics",
  },
  {
    id: "banner-devices-medicube-tech",
    imageUrl: "https://cdn.files.salla.network/other/1099831979/e88ff418-bd30-492f-b7e4-79ed8474900d-original.webp",
    href: "/products?brand=b-medicube",
  },
]

// Dedicated Lenses & Beauty Accessories Banners
export const lensesBanners: HomeBanner[] = [
  {
    id: "banner-lenses-showcase",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/f31348e7-53ed-43c4-affe-36a890b287a1.webp",
    href: "/products?category=accessories",
  },
  {
    id: "banner-accessories-tools",
    imageUrl: "https://cdn.files.salla.network/other/1099831979/e88ff418-bd30-492f-b7e4-79ed8474900d-original.webp",
    href: "/products?category=accessories",
  },
]

// Dedicated Mega Deals, Bundles & Offers Banners
export const dealsBanners: HomeBanner[] = [
  {
    id: "banner-mega-deals-50",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/e910254d-772e-4a23-be21-58fb7beecc12_1440x589.webp",
    href: "/products?category=bundles",
  },
  {
    id: "banner-wellness-bundles-hd",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/8e4e9df2-09e1-4f6e-89a4-5f8b61726f8f_1440x587.webp",
    href: "/products?category=bundles",
  },
  {
    id: "banner-bestsellers-deals",
    imageUrl: "https://cdn.files.salla.network/other/1099831979/e88ff418-bd30-492f-b7e4-79ed8474900d-original.webp",
    href: "/products?badge=best-seller",
  },
]

// Authentic High-Resolution Hero Slider Banners directly extracted from cosmetics.sa
const mockBanners: HomeBanner[] = [
  {
    id: "b-devices-hero",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/e910254d-772e-4a23-be21-58fb7beecc12_1440x589.webp",
    href: "/products?category=electronics",
  },
  {
    id: "b-lenses-hero",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/f31348e7-53ed-43c4-affe-36a890b287a1.webp",
    href: "/products?category=accessories",
  },
  {
    id: "b-wellness-hero",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/8e4e9df2-09e1-4f6e-89a4-5f8b61726f8f_1440x587.webp",
    href: "/products?category=bundles",
  },
  {
    id: "b-makeup-hero",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/32b9f52a-5d2d-482f-8574-0c55d92db798.webp",
    href: "/products?category=makeup",
  },
  {
    id: "b-fragrance-hero",
    imageUrl: "https://cdn.files.salla.network/other/1099831979/571fe904-b89f-45f4-9efe-1fc35eb95cfb-original.webp",
    href: "/products?category=fragrance",
  },
]

const promoBanners: PromoBanners = {
  dual: [
    {
      id: "promo-devices-card",
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/5f79bc6f-e5c0-4cd0-aec7-f7dd4b397e6e.webp",
      href: "/products?category=electronics",
    },
    {
      id: "promo-lenses-card",
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/f31348e7-53ed-43c4-affe-36a890b287a1.webp",
      href: "/products?category=accessories",
    },
  ],
  fullWidth: {
    id: "promo-wellness-full",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/8e4e9df2-09e1-4f6e-89a4-5f8b61726f8f_1440x587.webp",
    href: "/products?category=bundles",
  },
  secondaryDual: [
    {
      id: "promo-deals-50-card",
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/c0f07d94-6379-4490-8690-f4565a0e52c9.webp",
      href: "/products?category=bundles",
    },
    {
      id: "promo-korean-showcase-card",
      imageUrl: "https://cdn.files.salla.network/homepage/1099831979/4a4ff5c8-7c4f-421e-8282-628fcee44c20.webp",
      href: "/products?category=korean-care",
    },
  ],
  secondaryFullWidth: {
    id: "promo-devices-anola-full",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/e910254d-772e-4a23-be21-58fb7beecc12_1440x589.webp",
    href: "/products?category=electronics",
  },
  devices: deviceBanners,
  lenses: lensesBanners,
  deals: dealsBanners,
}

export async function getHomeBanners(): Promise<HomeBanner[]> {
  return mockBanners
}

export async function getPromoBanners(): Promise<PromoBanners> {
  return promoBanners
}

export async function getDeviceBanners(): Promise<HomeBanner[]> {
  return deviceBanners
}

export async function getLensesBanners(): Promise<HomeBanner[]> {
  return lensesBanners
}

export async function getDealsBanners(): Promise<HomeBanner[]> {
  return dealsBanners
}