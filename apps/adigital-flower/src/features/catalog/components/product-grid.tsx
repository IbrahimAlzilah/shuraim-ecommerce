import type { Product } from "@rawnaq/types"
import { useTranslations } from "next-intl"

import { ProductCard } from "./product-card"

export function ProductGrid({ products }: { products: Product[] }) {
  const t = useTranslations("Catalog")

  if (products.length === 0) {
    return <p className="text-muted-foreground text-sm">{t("noResults")}</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
