import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"

export function FullWidthPromoBanner({ banner }: { banner: HomeBanner }) {
  return (
    <Link
      href={banner.href}
      className="group relative flex aspect-21/9 w-full overflow-hidden rounded-xl"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt={banner.title}
        className="size-full object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40 text-center text-white">
        <span className="text-xl font-medium">{banner.title}</span>
        {banner.subtitle && <span className="text-sm">{banner.subtitle}</span>}
      </div>
    </Link>
  )
}
