import type { LocalizedString } from "./common"

export interface SubCategoryLink {
  id: string
  name: LocalizedString
  slug: string
  isPopular?: boolean
}

export interface MegamenuColumn {
  title: LocalizedString
  items: SubCategoryLink[]
}

export interface FeaturedBrand {
  id: string
  name: string
  slug: string
  logoUrl?: string
}

export interface MegamenuBanner {
  title: LocalizedString
  subtitle: LocalizedString
  imageUrl: string
  link: string
  badge?: string
}

export interface NavItem {
  id: string
  title: LocalizedString
  slug: string
  badge?: string
  isSpecial?: boolean
  columns?: MegamenuColumn[]
  featuredBrands?: FeaturedBrand[]
  banner?: MegamenuBanner
}

export interface SearchSuggestion {
  query: string
  categorySlug?: string
  categoryName?: string
  isTrending?: boolean
}
