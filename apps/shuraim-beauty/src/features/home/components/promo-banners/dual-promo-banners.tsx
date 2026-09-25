import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"

export function DualPromoBanners({ banners }: { banners: [HomeBanner, HomeBanner] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {banners.map((banner) => (
        <Link
          key={banner.id}
          href={banner.href}
          className="group relative aspect-video overflow-hidden rounded-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="size-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            <span className="font-medium">{banner.title}</span>
            {banner.subtitle && <span className="text-xs">{banner.subtitle}</span>}
          </div>
        </Link>
      ))}
    </div>
  )
}
