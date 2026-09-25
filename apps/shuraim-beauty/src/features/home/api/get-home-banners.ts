import type { HomeBanner } from "../types/home"

// Authentic beauty banners from cosmetics.sa
const mockBanners: HomeBanner[] = [
  {
    id: "b-1",
    title: "تشكيلة شريم الحصرية | Shuraim Beauty",
    subtitle: "اكتشفي أرقى مستحضرات العناية والجمال الكورية والعالمية الأصلية",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/7504cb7c-8ce3-4c9a-ab83-70c1a6d64448.webp",
    href: "/products",
    ctaLabel: "تسوقي الآن",
  },
  {
    id: "b-2",
    title: "عروض التوفير والجمال تصل إلى 30%",
    subtitle: "أفضل عروض العناية بالبشرة والشعر من أشهر الماركات الطبية",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/c0f07d94-6379-4490-8690-f4565a0e52c9.webp",
    href: "/products",
    ctaLabel: "استكشفي العروض",
  },
  {
    id: "b-3",
    title: "العناية الكورية الفائقة",
    subtitle: "منتجات الحلزون وهارت ليف والنياسيناميد لبشرة نضرة ومشرقة",
    imageUrl: "https://cdn.files.salla.network/homepage/1099831979/a1f5d89f-2907-4a15-9e6f-8be96d448f32.webp",
    href: "/products?category=korean-care",
    ctaLabel: "اكتشفي التشكيلة",
  },
]

export async function getHomeBanners(): Promise<HomeBanner[]> {
  return mockBanners
}
