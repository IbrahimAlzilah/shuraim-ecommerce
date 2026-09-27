"use client"

import type { Product } from "@rawnaq/types"
import { formatCurrency } from "@rawnaq/utils"
import { Loader2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useState } from "react"

import { useCart } from "@/features/cart"
import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import { useToast } from "@/providers/toast-provider"
import { useWishlist } from "../hooks/use-wishlist"

export function WishlistItem({ product }: { product: Product }) {
  const t = useTranslations("Wishlist")
  const tCart = useTranslations("Cart")
  const locale = useLocale()
  const { toggle } = useWishlist(product.id)
  const { addItem, openDrawer } = useCart()
  const { toast } = useToast()
  const [isMoving, setIsMoving] = useState(false)
  const [isRemoving, setIsRemoving] = useState(false)

  async function handleMoveToCart() {
    if (isMoving || isRemoving || !product.inStock) return

    setIsMoving(true)

    // Interactive loading state with tactile feedback
    await new Promise((resolve) => setTimeout(resolve, 500))

    addItem(product)
    toast({
      title: tCart("addedToCart"),
      action: {
        label: tCart("viewCart"),
        onClick: () => openDrawer(),
      },
    })
    toggle()
    setIsMoving(false)
  }

  async function handleRemove() {
    if (isMoving || isRemoving) return

    setIsRemoving(true)

    // Interactive loading state with tactile feedback
    await new Promise((resolve) => setTimeout(resolve, 500))

    toggle()
    setIsRemoving(false)
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
        <Button
          size="sm"
          onClick={handleMoveToCart}
          disabled={!product.inStock || isMoving || isRemoving}
          className={cn(
            "text-xs font-semibold h-8 sm:h-9",
            isMoving && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90"
          )}
        >
          {isMoving ? <Loader2 className="size-4 animate-spin shrink-0" /> : t("moveToCart")}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleRemove}
          disabled={isMoving || isRemoving}
          className={cn(
            "text-xs text-muted-foreground hover:text-destructive h-8 sm:h-9",
            isRemoving && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90"
          )}
        >
          {isRemoving ? <Loader2 className="size-4 animate-spin shrink-0" /> : t("remove")}
        </Button>
      </div>
    </div>
  )
}
