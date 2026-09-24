import type { Brand, Product, ProductCategory } from "@rawnaq/types"

export interface HomeBanner {
  id: string
  title: string
  subtitle?: string
  imageUrl: string
  href: string
  ctaLabel: string
}

export interface FlashDeal {
  product: Product
  expiresAt: string
}

export interface HomeContent {
  banners: HomeBanner[]
  categories: ProductCategory[]
  brands: Brand[]
  flashDeals: FlashDeal[]
  bestSellers: Product[]
  newArrivals: Product[]
}
