import type { Review } from "@rawnaq/types"
import { useEffect, useMemo, useState } from "react"

import { getProductReviews } from "../api/get-product-reviews"

export interface RatingBreakdownEntry {
  stars: number
  count: number
}

export function useProductReviews(productId: string) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    void getProductReviews(productId).then((result) => {
      if (isActive) {
        setReviews(result)
        setIsLoading(false)
      }
    })

    return () => {
      isActive = false
    }
  }, [productId])

  function addReview(review: Review) {
    setReviews((current) => [review, ...current])
  }

  const averageRating = useMemo(() => {
    if (reviews.length === 0) {
      return 0
    }
    return reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  }, [reviews])

  const breakdown = useMemo<RatingBreakdownEntry[]>(() => {
    return [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: reviews.filter((review) => Math.round(review.rating) === stars).length,
    }))
  }, [reviews])

  return {
    reviews,
    isLoading,
    addReview,
    averageRating,
    breakdown,
    count: reviews.length,
  }
}
