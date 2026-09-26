import { getProducts } from "@/features/catalog"

import type { FlashDeal } from "../types/home"

const FLASH_DEAL_DURATION_HOURS = 6

export async function getFlashDeals(): Promise<FlashDeal[]> {
  const { items } = await getProducts({ pageSize: 50 })
  const expiresAt = new Date(
    Date.now() + FLASH_DEAL_DURATION_HOURS * 60 * 60 * 1000
  ).toISOString()

  return items
    .filter((product) => product.price.compareAtAmount !== undefined && product.price.compareAtAmount > product.price.amount)
    .sort((a, b) => {
      const discA = a.price.compareAtAmount ? (a.price.compareAtAmount - a.price.amount) / a.price.compareAtAmount : 0
      const discB = b.price.compareAtAmount ? (b.price.compareAtAmount - b.price.amount) / b.price.compareAtAmount : 0
      return discB - discA
    })
    .map((product) => ({ product, expiresAt }))
}
