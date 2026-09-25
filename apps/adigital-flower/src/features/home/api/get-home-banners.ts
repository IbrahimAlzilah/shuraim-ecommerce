import type { HomeBanner } from "../types/home"

// Stand-in banners until a real CMS/promotions API exists.
const mockBanners: HomeBanner[] = [
  {
    id: "b-1",
    title: "تشكيلة أيجيتال فلاور الحصرية | Aigital Flower",
    subtitle: "اكتشفي أرقى مستحضرات العناية والجمال والإكسسوارات",
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
