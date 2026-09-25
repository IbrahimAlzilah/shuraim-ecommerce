import type { RatingBreakdownEntry } from "../hooks/use-product-reviews"

export function RatingBreakdown({
  breakdown,
  total,
}: {
  breakdown: RatingBreakdownEntry[]
  total: number
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {breakdown.map(({ stars, count }) => {
        const percent = total > 0 ? Math.round((count / total) * 100) : 0

        return (
          <div key={stars} className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground w-8">{stars} ★</span>
            <div className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
              <div
                className="bg-amber-400 h-full"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-muted-foreground w-6 text-end">{count}</span>
          </div>
        )
      })}
    </div>
  )
}
