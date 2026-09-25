import type { ProductCategory } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { Link } from "@rawnaq/i18n/navigation"
import {
  SectionCarousel,
  SectionCarouselItem,
} from "@rawnaq/ui/components/section-carousel"

import { CategoryCircleCard } from "./category-circle-card"

export async function FeaturedCategories({
  categories,
}: {
  categories: ProductCategory[]
}) {
  const t = await getTranslations("Home")

  if (categories.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-foreground">
          {t("categories.title")}
        </h2>
        <Link href="/products" className="text-sm font-medium text-primary hover:underline">
          {t("categories.viewAll")}
        </Link>
      </div>
      <SectionCarousel>
        {categories.map((category) => (
          <SectionCarouselItem
            key={category.id}
            className="basis-[30%] sm:basis-[22%] md:basis-[16.666%] lg:basis-[12.5%] xl:basis-[11.111%]"
          >
            <CategoryCircleCard category={category} />
          </SectionCarouselItem>
        ))}
      </SectionCarousel>
    </section>
  )
}
