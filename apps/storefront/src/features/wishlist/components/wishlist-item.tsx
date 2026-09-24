"use client"

import type { Product } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

import { useCart } from "@/features/cart"
import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import { useWishlist } from "../hooks/use-wishlist"

export function WishlistItem({ product }: { product: Product }) {
  const t = useTranslations("Wishlist")
  const locale = useLocale()
  const { toggle } = useWishlist(product.id)
  const { addItem } = useCart()

  function handleMoveToCart() {
    addItem(product)
    toggle()
  }

  return (
    <div className="flex items-center gap-3 py-3">
      {product.images[0] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.images[0].url}
          alt={product.images[0].alt ?? product.name}
          className="size-16 rounded-md object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-1">
        <Link href={`/products/${product.slug}`} className="text-sm font-medium">
          {product.name}
        </Link>
        <span className="text-muted-foreground text-sm">
          {formatCurrency(product.price.amount, product.price.currency, locale)}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <Button size="sm" onClick={handleMoveToCart} disabled={!product.inStock}>
          {t("moveToCart")}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => toggle()}>
          {t("remove")}
        </Button>
      </div>
    </div>
  )
}
