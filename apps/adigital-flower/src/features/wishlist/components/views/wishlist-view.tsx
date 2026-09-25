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
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-6">
      <h1 className="text-xl font-medium">{t("title")}</h1>

      {products.length === 0 ? (
        <p className="text-muted-foreground text-sm">{t("empty")}</p>
      ) : (
        <div className="divide-y">
          {products.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
