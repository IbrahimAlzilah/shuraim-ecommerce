import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

export function HeroSlideItem({ banner }: { banner: HomeBanner }) {
  return (
    <div className="relative aspect-4/3 sm:aspect-16/7 lg:aspect-21/8 min-h-55 sm:min-h-70 w-full overflow-hidden rounded-xl sm:rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="size-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-1.5 sm:gap-2 bg-linear-to-t sm:bg-gradient-to-r from-black/70 via-black/40 to-transparent p-4 sm:p-6 lg:p-8 text-white">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight">{banner.title}</h2>
        {banner.subtitle && <p className="text-xs sm:text-sm text-white/90 line-clamp-2 max-w-md">{banner.subtitle}</p>}
        <Button asChild size="sm" className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold">
          <Link href={banner.href}>{banner.ctaLabel}</Link>
        </Button>
      </div>
    </div>
  )
}
