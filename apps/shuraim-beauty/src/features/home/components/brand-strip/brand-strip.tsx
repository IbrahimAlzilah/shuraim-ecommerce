import type { Brand } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import { BrandCard } from "@rawnaq/ui/components/brand-card"
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
            className="basis-[45%] sm:basis-[30%] md:basis-[23%] lg:basis-[18%] xl:basis-[14.285%]"
          >
            <BrandCard
              brand={brand}
              linkComponent={Link}
              href={`/products?brand=${brand.slug}`}
            />
          </SectionCarouselItem>
        ))}
      </SectionCarousel>
    </section>
  )
}
