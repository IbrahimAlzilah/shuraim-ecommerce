"use client"

import type { Product } from "@rawnaq/types"
import { useLocale } from "next-intl"

import { AddToCartButton } from "@/features/cart"
import { formatCurrency } from "@rawnaq/utils"

export function StickyMobileBuyBar({ product }: { product: Product }) {
  const locale = useLocale()
  const primaryImage = product.images[0]

  return (
    <div className="fixed bottom-16 inset-x-0 z-30 border-t bg-background/95 p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md md:hidden animate-in slide-in-from-bottom-2 duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          {primaryImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={primaryImage.url}
              alt={product.name}
              className="size-11 rounded-lg object-cover bg-muted shrink-0 border"
            />
          )}
          <div className="flex flex-col overflow-hidden">
            <span className="line-clamp-1 text-xs font-semibold text-foreground">
              {product.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-primary">
                {formatCurrency(product.price.amount, product.price.currency, locale)}
              </span>
              {product.price.compareAtAmount && (
                <span className="text-[10px] text-muted-foreground line-through">
                  {formatCurrency(product.price.compareAtAmount, product.price.currency, locale)}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <AddToCartButton product={product} size="sm" className="font-semibold text-xs px-4" />
        </div>
      </div>
    </div>
  )
}
