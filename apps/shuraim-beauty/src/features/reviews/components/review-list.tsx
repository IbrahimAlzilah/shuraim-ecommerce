import type { Review } from "@rawnaq/types"
import { useTranslations } from "next-intl"

import { ReviewCard } from "./review-card"

export function ReviewList({ reviews }: { reviews: Review[] }) {
  const t = useTranslations("Reviews")

  if (reviews.length === 0) {
    return <p className="text-muted-foreground text-sm">{t("empty")}</p>
  }

  return (
    <div className="flex flex-col">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
