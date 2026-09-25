import type { Review } from "@rawnaq/types"

import { mockReviews } from "./mock-reviews-data"

export interface SubmitProductReviewInput {
  productId: string
  authorName: string
  rating: number
  comment: string
  images?: string[]
}

/**
 * Simulated review submission: no upload storage or database is involved.
 * Images are expected as already-resolved URLs (e.g. local object URLs from
 * the browser) and the review is only appended to the in-memory mock array
 * for the current server process — it is not persisted anywhere.
 */
export async function submitProductReview(
  input: SubmitProductReviewInput
): Promise<Review> {
  const review: Review = {
    id: `demo-review-${Date.now()}`,
    productId: input.productId,
    authorName: input.authorName,
    rating: input.rating,
    comment: input.comment,
    images: input.images,
    isVerifiedPurchase: false,
    createdAt: new Date().toISOString(),
  }

  mockReviews.unshift(review)

  return review
}
