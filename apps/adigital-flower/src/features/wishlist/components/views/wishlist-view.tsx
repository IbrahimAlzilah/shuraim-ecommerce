"use client"

import type { Product } from "@rawnaq/types"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { getProducts } from "@/features/catalog"

import { useWishlistStore } from "../../hooks/use-wishlist-store"
import { WishlistItem } from "../wishlist-item"

export function WishlistView() {
  const t = useTranslations("Wishlist")
  const ids = useWishlistStore((state) => state.ids)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    void getProducts().then(({ items }) => {
      setProducts(items.filter((product) => ids.includes(product.id)))
    })
  }, [ids])

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-1 border-b pb-4">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{t("title")}</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      {products.length === 0 ? (
        <div className="rounded-2xl border border-dashed py-16 text-center">
          <p className="text-base font-semibold text-foreground">{t("empty")}</p>
        </div>
      ) : (
        <div className="divide-y rounded-2xl border bg-card p-4 sm:p-6 shadow-xs">
          {products.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
