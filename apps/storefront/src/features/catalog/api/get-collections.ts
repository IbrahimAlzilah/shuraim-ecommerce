import type { Collection } from "@rawnaq/types"

import { mockCollections } from "./mock-catalog-data"

export async function getCollections(): Promise<Collection[]> {
  return mockCollections
}
