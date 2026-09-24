import type { ProductPrice as ProductPriceType } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { useLocale } from "next-intl"

export function ProductPrice({ price }: { price: ProductPriceType }) {
  const locale = useLocale()
  const hasDiscount =
    price.compareAtAmount !== undefined && price.compareAtAmount > price.amount

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">
        {formatCurrency(price.amount, price.currency, locale)}
      </span>
      {hasDiscount && (
        <span className="text-muted-foreground text-sm line-through">
          {formatCurrency(price.compareAtAmount as number, price.currency, locale)}
        </span>
      )}
    </div>
  )
}
