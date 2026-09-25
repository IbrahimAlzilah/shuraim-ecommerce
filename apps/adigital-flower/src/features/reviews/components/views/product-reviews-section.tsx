"use client"

import { useTranslations } from "next-intl"

import { useProductReviews } from "../../hooks/use-product-reviews"
import { AddReviewModal } from "../add-review-modal"
import { RatingBreakdown } from "../rating-breakdown"
import { RatingStars } from "../rating-stars"
import { ReviewList } from "../review-list"

export function ProductReviewsSection({ productId }: { productId: string }) {
  const t = useTranslations("Reviews")
  const { reviews, isLoading, addReview, averageRating, breakdown, count } =
    useProductReviews(productId)

  return (
    <section className="flex flex-col gap-4 border-t pt-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-medium">{t("title")}</h2>
        <AddReviewModal productId={productId} onSubmitted={addReview} />
      </div>

      {!isLoading && count > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex flex-col items-start gap-1">
            <span className="text-2xl font-medium">{averageRating.toFixed(1)}</span>
            <RatingStars rating={averageRating} />
            <span className="text-muted-foreground text-xs">
              {t("basedOn", { count })}
            </span>
          </div>
          <div className="flex-1">
            <RatingBreakdown breakdown={breakdown} total={count} />
          </div>
        </div>
      )}

      <ReviewList reviews={reviews} />
    </section>
  )
}
