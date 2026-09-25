import type { ProductCategory } from "@rawnaq/types"

import { mockCategories } from "./mock-catalog-data"

export async function getCategories(): Promise<ProductCategory[]> {
  return [...mockCategories].sort((a, b) => a.sortOrder - b.sortOrder)
}
