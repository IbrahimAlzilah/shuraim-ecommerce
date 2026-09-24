import type { Product } from "@rawnaq/types"
import { useTranslations } from "next-intl"

const LOW_STOCK_THRESHOLD = 5

export function StockBadge({ product }: { product: Product }) {
  const t = useTranslations("Catalog")

  if (!product.inStock) {
    return (
      <span className="text-destructive text-xs font-medium">
        {t("outOfStock")}
      </span>
    )
  }

  if (
    product.stockCount !== undefined &&
    product.stockCount <= LOW_STOCK_THRESHOLD
  ) {
    return (
      <span className="text-xs font-medium text-amber-600 dark:text-amber-500">
        {t("lowStock", { count: product.stockCount })}
      </span>
    )
  }

  return (
    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-500">
      {t("inStock")}
    </span>
  )
}
