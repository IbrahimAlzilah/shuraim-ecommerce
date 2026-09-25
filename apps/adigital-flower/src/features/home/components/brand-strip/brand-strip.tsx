import type { Brand } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import {
  SectionCarousel,
  SectionCarouselItem,
} from "@rawnaq/ui/components/section-carousel"

export async function BrandStrip({ brands }: { brands: Brand[] }) {
  const t = await getTranslations("Home")

  if (brands.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground">
          {t("brands.title")}
        </h2>
        <Link
          href="/products"
          className="text-sm font-medium text-primary hover:underline"
        >
          {t("brands.viewAll")}
        </Link>
      </div>

      <SectionCarousel>
        {brands.map((brand) => (
          <SectionCarouselItem
            key={brand.id}
            className="basis-[46%] sm:basis-[32%] md:basis-[24%] lg:basis-[16.666%] xl:basis-[16.666%]"
          >
            <Link
              href={`/products?brand=${brand.slug}`}
              className="group flex h-24 w-full flex-col items-center justify-center rounded-2xl border border-border/80 bg-card p-3 text-center shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
            >
              <span className="font-bold text-foreground text-sm tracking-wide group-hover:text-primary transition-colors">
                {brand.name}
              </span>
              <span className="mt-1 line-clamp-1 text-[11px] text-muted-foreground">
                {brand.description ?? t("brands.defaultDescription")}
              </span>
            </Link>
          </SectionCarouselItem>
        ))}
      </SectionCarousel>
    </section>
  )
}
