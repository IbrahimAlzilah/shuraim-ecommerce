import type { Product } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { ProductSectionTabs } from "./product-section-grid"

export async function BestSellersSection({ products }: { products: Product[] }) {
  const t = await getTranslations("Home")

  if (products.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">{t("productSections.bestSellers")}</h2>
      <ProductSectionTabs products={products} />
    </section>
  )
}
