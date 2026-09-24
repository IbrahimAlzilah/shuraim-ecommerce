export interface ProductPrice {
  amount: number
  currency: string
  compareAtAmount?: number
}

export interface ProductImage {
  url: string
  alt?: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  parentId: string | null
  level: 1 | 2 | 3
  image?: string
  sortOrder: number
}

export interface ProductVariantOption {
  id: string
  label: string
  value: string
}

export interface ProductVariantGroup {
  name: string
  label: string
  options: ProductVariantOption[]
}

export interface ProductRating {
  average: number
  count: number
}

export interface Product {
  id: string
  slug: string
  name: string
  description?: string
  subtitle?: string
  badges?: string[]
  rating?: ProductRating
  price: ProductPrice
  images: ProductImage[]
  categories: ProductCategory[]
  brandId?: string
  variants?: ProductVariantGroup[]
  inStock: boolean
  stockCount?: number
}

