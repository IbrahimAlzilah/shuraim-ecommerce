import type { Product } from "@rawnaq/types"

import { mockProducts } from "./mock-catalog-data"

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return mockProducts.find((product) => product.slug === slug) ?? null
}
