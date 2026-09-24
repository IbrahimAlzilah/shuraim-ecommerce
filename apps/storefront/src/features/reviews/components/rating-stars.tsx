import { Star } from "lucide-react"

import { cn } from "@rawnaq/ui/lib/utils"

export function RatingStars({
  rating,
  size = "default",
}: {
  rating: number
  size?: "sm" | "default"
}) {
  const rounded = Math.round(rating)

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={cn(
            size === "sm" ? "size-3.5" : "size-4",
            index < rounded
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground"
          )}
        />
      ))}
    </div>
  )
}
