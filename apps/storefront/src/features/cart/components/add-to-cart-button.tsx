"use client"

import type { Product } from "@rawnaq/types"
import { Check, ShoppingBag } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"

import { useCartStore } from "../hooks/use-cart-store"

interface AddToCartButtonProps {
  product: Product
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm"
  className?: string
  showIcon?: boolean
}

export function AddToCartButton({
  product,
  variant = "default",
  size = "default",
  className,
  showIcon = true,
}: AddToCartButtonProps) {
  const t = useTranslations("Cart")
  const addItem = useCartStore((state) => state.addItem)
  const openDrawer = useCartStore((state) => state.openDrawer)
  const [justAdded, setJustAdded] = useState(false)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()
    addItem(product)
    openDrawer()
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      disabled={!product.inStock}
    >
      {justAdded ? (
        <Check className="size-4 animate-in zoom-in-50 duration-200" />
      ) : showIcon ? (
        <ShoppingBag className="size-4" />
      ) : null}
      <span>{product.inStock ? t("addToCart") : t("outOfStock")}</span>
    </Button>
  )
}
