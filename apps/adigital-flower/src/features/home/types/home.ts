import type { Brand, Product, ProductCategory } from "@rawnaq/types"

export interface HomeBanner {
  id: string
  imageUrl: string
  href: string
}

export interface FlashDeal {
  product: Product
  expiresAt: string
}

export interface PromoBanners {
  dual: [HomeBanner, HomeBanner]
  fullWidth: HomeBanner
  secondaryDual?: [HomeBanner, HomeBanner]
  secondaryFullWidth?: HomeBanner
  devices?: HomeBanner[]
  lenses?: HomeBanner[]
  deals?: HomeBanner[]
}

export interface HomeContent {
  banners: HomeBanner[]
  promoBanners: PromoBanners
  categories: ProductCategory[]
  brands: Brand[]
  flashDeals: FlashDeal[]
  bestSellers: Product[]
  curated: Product[]
  newArrivals: Product[]
}