import type { HomeBanner } from "../../types/home"

import { Link } from "@rawnaq/i18n/navigation"

export function HeroSlideItem({ banner }: { banner: HomeBanner }) {
  return (
    <Link
      href={banner.href}
      className="group relative block aspect-[2.5/1] min-h-[160px] sm:min-h-[220px] md:min-h-[260px] lg:max-h-[420px] w-full overflow-hidden rounded-2xl"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={banner.imageUrl}
        alt="Banner"
        className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </Link>
  )
}