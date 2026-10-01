import { getHomeContent } from "../api/get-home-content"
import { BrandStrip } from "../components/brand-strip/brand-strip"
import { FeaturedCategories } from "../components/categories-grid/featured-categories"
import { CuratedCollection } from "../components/curated-collection/curated-collection"
import { FlashDealsSection } from "../components/flash-deals/flash-deals-section"
import { HeroSlider } from "../components/hero-slider/hero-slider"
import { BestSellersSection } from "../components/product-sections/best-sellers-section"
import { NewArrivalsSection } from "../components/product-sections/new-arrivals-section"
import { DualPromoBanners } from "../components/promo-banners/dual-promo-banners"
import { FullWidthPromoBanner } from "../components/promo-banners/full-width-promo-banner"
import { TestimonialsSection } from "../components/testimonials/testimonials-section"
import { WhyUsSection } from "../components/trust-highlights/why-us-section"
import type { HomeBanner } from "../types/home"

export async function HomeView() {
  const {
    banners,
    categories,
    brands,
    flashDeals,
    bestSellers,
    curated,
    newArrivals,
  } = await getHomeContent()

  const heroBanners = banners.filter((b) => b.id.includes("hero"))
  const promoDual1 = banners.find((b) => b.id === "b-promo-dual-1")
  const promoDual2 = banners.find((b) => b.id === "b-promo-dual-2")
  const dualBanners: [HomeBanner, HomeBanner] | null =
    promoDual1 && promoDual2
      ? [promoDual1, promoDual2]
      : banners[0] && banners[1]
        ? [banners[0], banners[1]]
        : null
  const fullWidthBanner =
    banners.find((b) => b.id === "b-promo-fullwidth") ?? banners[0]

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 pb-8 sm:px-6 lg:space-y-12">
      <HeroSlider banners={heroBanners} />
      <FeaturedCategories categories={categories} />
      <FlashDealsSection deals={flashDeals} />
      <BrandStrip brands={brands} />
      {dualBanners && <DualPromoBanners banners={dualBanners} />}
      <BestSellersSection products={bestSellers} />
      <CuratedCollection products={curated} />
      {fullWidthBanner && <FullWidthPromoBanner banner={fullWidthBanner} />}
      <NewArrivalsSection products={newArrivals} />
      <WhyUsSection />
      <TestimonialsSection />
    </div>
  )
}
