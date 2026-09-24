import type { Review } from "@rawnaq/types"

import { mockReviews } from "./mock-reviews-data"

export async function getProductReviews(productId: string): Promise<Review[]> {
  return mockReviews
    .filter((review) => review.productId === productId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}
