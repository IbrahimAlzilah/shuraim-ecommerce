import type { ProductCategory } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { Rail } from "@rawnaq/ui/components/rail"

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
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">{t("categories.title")}</h2>
      <Rail
        label={t("categories.title")}
        prevLabel={t("rail.previous")}
        nextLabel={t("rail.next")}
      >
        {categories.map((category) => (
          <CategoryCircleCard key={category.id} category={category} />
        ))}
      </Rail>
    </section>
  )
}
