import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"

export function FullWidthPromoBanner({ banner }: { banner: HomeBanner }) {
  return (
    <Link
      href={banner.href}
      className="group relative flex aspect-[16/8] sm:aspect-21/9 min-h-[160px] sm:min-h-[220px] w-full overflow-hidden rounded-xl sm:rounded-2xl"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/45 p-4 text-center text-white">
        <span className="text-lg sm:text-2xl font-bold tracking-tight">{banner.title}</span>
        {banner.subtitle && <span className="text-xs sm:text-sm text-white/90 max-w-lg">{banner.subtitle}</span>}
      </div>
    </Link>
  )
}
