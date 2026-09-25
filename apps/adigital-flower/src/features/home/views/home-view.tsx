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

export async function HomeView() {
  const { banners, categories, brands, flashDeals, bestSellers, newArrivals } =
    await getHomeContent()

  const [firstBanner, secondBanner] = banners

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 pb-8 sm:px-6 lg:space-y-12">
      <HeroSlider banners={banners} />
      <FeaturedCategories categories={categories} />
      <FlashDealsSection deals={flashDeals} />
      <BrandStrip brands={brands} />
      {firstBanner && secondBanner && (
        <DualPromoBanners banners={[firstBanner, secondBanner]} />
      )}
      <BestSellersSection products={bestSellers} />
      <CuratedCollection products={bestSellers} />
      {firstBanner && <FullWidthPromoBanner banner={firstBanner} />}
      <NewArrivalsSection products={newArrivals} />
      <WhyUsSection />
      <TestimonialsSection />
    </div>
  )
}
