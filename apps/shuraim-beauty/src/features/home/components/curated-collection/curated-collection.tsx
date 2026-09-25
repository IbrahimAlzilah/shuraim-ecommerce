import type { Product } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { ProductCard } from "@/features/catalog"

export async function CuratedCollection({ products }: { products: Product[] }) {
  const t = await getTranslations("Home")

  if (products.length === 0) {
    return null
  }

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">{t("curated.title")}</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}