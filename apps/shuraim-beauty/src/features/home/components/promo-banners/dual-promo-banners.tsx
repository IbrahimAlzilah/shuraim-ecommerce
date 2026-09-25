import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"

export function DualPromoBanners({ banners }: { banners: [HomeBanner, HomeBanner] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {banners.map((banner) => (
        <Link
          key={banner.id}
          href={banner.href}
          className="group relative aspect-video overflow-hidden rounded-2xl border border-border/60 shadow-xs transition-all duration-300 hover:shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner.imageUrl}
            alt={banner.title || "Promo Banner"}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      ))}
    </div>
  )
}