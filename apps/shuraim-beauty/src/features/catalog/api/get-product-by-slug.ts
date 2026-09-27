import type { Product } from "@rawnaq/types"

import { mockProducts } from "./mock-catalog-data"

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!slug) return null

  let decoded = slug
  try {
    decoded = decodeURIComponent(slug)
  } catch {
    // ignore decoding errors
  }

  const normalized = slug.trim().toLowerCase()
  const normalizedDecoded = decoded.trim().toLowerCase()

  return (
    mockProducts.find((product) => {
      const pSlug = product.slug.toLowerCase()
      const pId = product.id.toLowerCase()
      let pDecoded = pSlug
      try {
        pDecoded = decodeURIComponent(pSlug)
      } catch {
        // ignore
      }

      return (
        pSlug === normalized ||
        pSlug === normalizedDecoded ||
        pDecoded === normalizedDecoded ||
        pId === normalized ||
        pId === normalizedDecoded ||
        normalizedDecoded.includes(pId) ||
        pSlug.includes(normalizedDecoded)
      )
    }) ?? null
  )
}

