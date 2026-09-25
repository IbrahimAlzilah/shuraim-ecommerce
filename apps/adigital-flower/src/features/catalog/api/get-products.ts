import type { Product } from "@rawnaq/types"

import { mockBrands, mockProducts } from "./mock-catalog-data"

export interface GetProductsParams {
  page?: number
  pageSize?: number
  categorySlug?: string
  brandSlug?: string
  query?: string
}

export interface GetProductsResult {
  items: Product[]
  page: number
  pageSize: number
  total: number
}

export async function getProducts({
  page = 1,
  pageSize = 12,
  categorySlug,
  brandSlug,
  query,
}: GetProductsParams = {}): Promise<GetProductsResult> {
  const brandId = brandSlug
    ? mockBrands.find((brand) => brand.slug === brandSlug)?.id
    : undefined

  let filtered = mockProducts

  if (categorySlug) {
    filtered = filtered.filter((product) =>
      product.categories.some((category) => category.slug === categorySlug)
    )
  }

  if (brandId) {
    filtered = filtered.filter((product) => product.brandId === brandId)
  }

  if (query?.trim()) {
    const needle = query.trim().toLowerCase()
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(needle) ||
        product.description?.toLowerCase().includes(needle)
    )
  }

  const start = (page - 1) * pageSize

  return {
    items: filtered.slice(start, start + pageSize),
    page,
    pageSize,
    total: filtered.length,
  }
}
