import type { ProductCategory } from "@rawnaq/types"

import { getCategories } from "@/features/catalog"

export async function getFeaturedCategories(): Promise<ProductCategory[]> {
  const categories = await getCategories()
  return categories.filter((category) => category.level === 2)
}
