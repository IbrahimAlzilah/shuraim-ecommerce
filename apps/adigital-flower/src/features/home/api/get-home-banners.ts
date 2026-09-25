import type { HomeBanner } from "../types/home"

// Stand-in banners until a real CMS/promotions API exists.
const mockBanners: HomeBanner[] = [
  {
    id: "b-1",
    title: "تشكيلة شريم الحصرية | Shuraim Beauty",
    subtitle: "اكتشفي أرقى مستحضرات العناية والجمال الأصلية",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=80",
    href: "/products",
    ctaLabel: "تسوقي الآن",
  },
  {
    id: "b-2",
    title: "خصومات تصل إلى 25%",
    subtitle: "عروض مميزة وحصرية على أفضل المنتجات هذا الأسبوع",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop&q=80",
    href: "/products",
    ctaLabel: "استكشفي العروض",
  },
]

export async function getHomeBanners(): Promise<HomeBanner[]> {
  return mockBanners
}
