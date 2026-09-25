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
            alt={banner.title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
            <span className="font-bold text-base sm:text-lg">{banner.title}</span>
            {banner.subtitle && <span className="text-xs sm:text-sm text-white/90">{banner.subtitle}</span>}
          </div>
        </Link>
      ))}
    </div>
  )
}
