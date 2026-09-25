import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

export function HeroSlideItem({ banner }: { banner: HomeBanner }) {
  return (
    <div className="relative aspect-3/1 w-full overflow-hidden rounded-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="size-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
        <h2 className="text-xl font-medium sm:text-2xl">{banner.title}</h2>
        {banner.subtitle && <p className="text-sm">{banner.subtitle}</p>}
        <Button asChild size="sm" className="mt-2">
          <Link href={banner.href}>{banner.ctaLabel}</Link>
        </Button>
      </div>
    </div>
  )
}
