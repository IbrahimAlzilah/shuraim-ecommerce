import type { Product } from "@rawnaq/types"
import { Star } from "lucide-react"
import { useTranslations } from "next-intl"

import { AddToCartButton } from "@/features/cart"
import { WishlistButton } from "@/features/wishlist"
import { Link } from "@rawnaq/i18n/navigation"
import { Card, CardContent } from "@rawnaq/ui/components/card"

import { ProductPrice } from "./product-price"

export function ProductCard({ product }: { product: Product }) {
  const t = useTranslations("Catalog")
  const hasDiscount =
    product.price.compareAtAmount !== undefined &&
    product.price.compareAtAmount > product.price.amount

  const discountPercent = hasDiscount
    ? Math.round((1 - product.price.amount / (product.price.compareAtAmount as number)) * 100)
    : 0

  const primaryImage = product.images[0]
  const hoverImage = product.images[1] ?? primaryImage

  return (
    <Card className="group relative flex h-full flex-col pt-0 overflow-hidden transition-all duration-300 hover:shadow-xs">
      {/* Product Image Box */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square w-full overflow-hidden bg-muted/40"
      >
        {primaryImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={primaryImage.url}
            alt={primaryImage.alt ?? product.name}
            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              !product.inStock ? "grayscale opacity-70" : ""
            }`}
          />
        )}

        {hoverImage && hoverImage !== primaryImage && product.inStock && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hoverImage.url}
            alt={hoverImage.alt ?? product.name}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}

        {/* Discount Badge */}
        {hasDiscount && product.inStock && (
          <span className="bg-destructive text-white/95 absolute start-2 top-2 rounded-md px-1.5 py-0.5 text-[10px] sm:text-xs font-semibold shadow-xs">
            {t("discount", { percent: discountPercent })}
          </span>
        )}

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
            <span className="rounded-md bg-black/80 px-2.5 py-1 text-xs font-semibold text-white">
              {t("outOfStock")}
            </span>
          </div>
        )}
      </Link>

      {/* Wishlist Button */}
      <div className="absolute inset-e-2 top-2 z-10 rounded-full bg-background/80 shadow-xs backdrop-blur-sm">
        <WishlistButton productId={product.id} />
      </div>

      {/* Product Details */}
      <CardContent className="flex flex-1 flex-col justify-between gap-2.5 px-3 sm:px-3.5">
        <div className="flex flex-col gap-1.5">
          {/* Subtitle / Category / Brand */}
          {product.subtitle && (
            <p className="line-clamp-1 text-xs text-muted-foreground">{product.subtitle}</p>
          )}

          {/* Title */}
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-2 text-xs sm:text-sm font-medium leading-snug transition-colors hover:text-primary"
          >
            {product.name}
          </Link>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <div className="flex items-center text-amber-500">
                <Star className="size-3 sm:size-3.5 fill-current" />
              </div>
              <span className="font-semibold text-foreground">{product.rating.average}</span>
              <span>({product.rating.count})</span>
            </div>
          )}

          {/* Price */}
          <div className="mt-0.5">
            <ProductPrice price={product.price} />
          </div>
        </div>

        {/* Quick Add To Cart Button */}
        <div className="pt-1">
          <AddToCartButton
            product={product}
            variant={product.inStock ? "default" : "outline"}
            size="sm"
            className="w-full text-xs font-medium rounded-full h-8 sm:h-9"
          />
        </div>
      </CardContent>
    </Card>
  )
}
