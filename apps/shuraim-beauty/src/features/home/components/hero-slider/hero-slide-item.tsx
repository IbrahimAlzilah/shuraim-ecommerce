import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

export function HeroSlideItem({ banner }: { banner: HomeBanner }) {
  return (
    <div className="relative aspect-[2.5/1] min-h-[200px] md:min-h-[260px] lg:max-h-[420px] w-full overflow-hidden rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="size-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 bg-gradient-to-r from-black/60 via-black/30 to-transparent p-5 sm:p-8 lg:p-12 text-white">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">{banner.title}</h2>
        {banner.subtitle && (
          <p className="text-xs sm:text-base text-white/90 line-clamp-2 max-w-lg">
            {banner.subtitle}
          </p>
        )}
        {banner.ctaLabel && (
          <Button asChild size="sm" className="mt-2 text-xs sm:text-sm font-semibold rounded-full shadow-md">
            <Link href={banner.href}>{banner.ctaLabel}</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
