import type { Review } from "@rawnaq/types"
import { useFormatter, useTranslations } from "next-intl"

import { RatingStars } from "./rating-stars"

export function ReviewCard({ review }: { review: Review }) {
  const t = useTranslations("Reviews")
  const format = useFormatter()

  return (
    <div className="flex flex-col gap-2 border-b py-4 last:border-b-0">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{review.authorName}</span>
          {review.isVerifiedPurchase && (
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
              {t("verifiedPurchase")}
            </span>
          )}
        </div>
        <span className="text-muted-foreground text-xs">
          {format.dateTime(new Date(review.createdAt), { dateStyle: "medium" })}
        </span>
      </div>
      <RatingStars rating={review.rating} size="sm" />
      <p className="text-sm">{review.comment}</p>
      {review.images && review.images.length > 0 && (
        <div className="flex gap-2">
          {review.images.map((url) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={url}
              src={url}
              alt=""
              className="size-16 rounded-md object-cover"
            />
          ))}
        </div>
      )}
    </div>
  )
}
