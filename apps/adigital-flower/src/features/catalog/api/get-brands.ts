import type { Brand } from "@rawnaq/types"

import { mockBrands } from "./mock-catalog-data"

export async function getBrands(): Promise<Brand[]> {
  return mockBrands
}
