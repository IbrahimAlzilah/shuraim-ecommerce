import type { Product } from "@rawnaq/types"
import { getTranslations } from "next-intl/server"

import { ProductCard } from "@/features/catalog"

export async function CuratedCollection({ products }: { products: Product[] }) {
  const t = await getTranslations("Home")

  if (products.length === 0) {
    return null
  }

  return (
    <section className="bg-muted/50 flex flex-col gap-4 rounded-xl p-6">
      <div>
        <h2 className="text-lg font-medium">{t("curated.title")}</h2>
        <p className="text-muted-foreground text-sm">{t("curated.description")}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
