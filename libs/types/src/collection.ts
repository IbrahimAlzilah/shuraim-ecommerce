export type CollectionKind = "seasonal" | "editorial" | "regional"

export interface Collection {
  id: string
  slug: string
  name: string
  description?: string
  kind: CollectionKind
  productIds: string[]
}
