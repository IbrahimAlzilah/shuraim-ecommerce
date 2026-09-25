import { CheckCircle2, Star } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { Rail } from "@rawnaq/ui/components/rail"

interface ReviewItem {
  id: string
  rating: number
  text: string
  author: string
  city: string
}

export async function TestimonialsSection() {
  const t = await getTranslations("Home.testimonials")
  const tCommon = await getTranslations("Home.rail")

  const reviews: ReviewItem[] = [
    {
      id: "r1",
      rating: 5,
      text: t("reviews.r1.text"),
      author: t("reviews.r1.author"),
      city: t("reviews.r1.city"),
    },
    {
      id: "r2",
      rating: 5,
      text: t("reviews.r2.text"),
      author: t("reviews.r2.author"),
      city: t("reviews.r2.city"),
    },
    {
      id: "r3",
      rating: 5,
      text: t("reviews.r3.text"),
      author: t("reviews.r3.author"),
      city: t("reviews.r3.city"),
    },
    {
      id: "r4",
      rating: 5,
      text: t("reviews.r4.text"),
      author: t("reviews.r4.author"),
      city: t("reviews.r4.city"),
    },
    {
      id: "r5",
      rating: 5,
      text: t("reviews.r5.text"),
      author: t("reviews.r5.author"),
      city: t("reviews.r5.city"),
    },
  ]

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {t("title")}
        </h2>
      </div>

      <Rail
        label={t("title")}
        prevLabel={tCommon("previous")}
        nextLabel={tCommon("next")}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex w-65 sm:w-[320px] max-w-85 shrink-0 flex-col justify-between gap-4 rounded-2xl border bg-card p-4 sm:p-5 shadow-2xs transition-all duration-300 hover:shadow-xs"
          >
            {/* Top Bar: Stars */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 text-[#E76F51]">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Review text */}
            <p className="text-sm font-medium leading-relaxed text-foreground/90 min-h-11">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Author info & Verified Buyer */}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-bold text-foreground">
                  {review.author}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {review.city}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-500">
                <CheckCircle2 className="size-3.5" />
                <span>{t("verifiedBuyer")}</span>
              </div>
            </div>
          </div>
        ))}
      </Rail>
    </section>
  )
}
