"use client"

import type { Product } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { useLocale, useTranslations } from "next-intl"

import { useCart } from "@/features/cart"
import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import { useToast } from "@/providers/toast-provider"
import { useWishlist } from "../hooks/use-wishlist"

export function WishlistItem({ product }: { product: Product }) {
  const t = useTranslations("Wishlist")
  const tCart = useTranslations("Cart")
  const locale = useLocale()
  const { toggle } = useWishlist(product.id)
  const { addItem } = useCart()
  const { toast } = useToast()

  function handleMoveToCart() {
    addItem(product)
    toast({
      title: tCart("addedToCart"),
      description: tCart("addedToCartDesc"),
    })
    toggle()
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 py-4">
      <div className="flex items-center gap-3 min-w-0">
        {product.images[0] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0].url}
            alt={product.images[0].alt ?? product.name}
            className="size-16 sm:size-20 rounded-lg object-cover shrink-0 border bg-muted/30"
          />
        )}
        <div className="flex flex-1 flex-col gap-1 min-w-0">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs sm:text-sm font-semibold hover:text-primary transition-colors line-clamp-2"
          >
            {product.name}
          </Link>
          <span className="text-xs sm:text-sm font-bold text-primary">
            {formatCurrency(product.price.amount, product.price.currency, locale)}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
        <Button size="sm" onClick={handleMoveToCart} disabled={!product.inStock} className="text-xs font-semibold h-8 sm:h-9">
          {t("moveToCart")}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => toggle()} className="text-xs text-muted-foreground hover:text-destructive h-8 sm:h-9">
          {t("remove")}
        </Button>
      </div>
    </div>
  )
}
