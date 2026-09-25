import { getProducts } from "@/features/catalog"

import type { FlashDeal } from "../types/home"

const FLASH_DEAL_DURATION_HOURS = 6

export async function getFlashDeals(): Promise<FlashDeal[]> {
  const { items } = await getProducts()
  const expiresAt = new Date(
    Date.now() + FLASH_DEAL_DURATION_HOURS * 60 * 60 * 1000
  ).toISOString()

  return items
    .filter((product) => product.price.compareAtAmount !== undefined)
    .map((product) => ({ product, expiresAt }))
}
