import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"

export function FullWidthPromoBanner({ banner }: { banner: HomeBanner }) {
  return (
    <Link
      href={banner.href}
      className="group relative flex aspect-16/8 sm:aspect-21/9 min-h-40 sm:min-h-55 w-full overflow-hidden rounded-2xl border border-border/60 shadow-xs transition-all duration-300 hover:shadow-md"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt={banner.title || "Promo Banner"}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
  )
}