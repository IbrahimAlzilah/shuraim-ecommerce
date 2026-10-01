"use client"

import type { Product } from "@rawnaq/types"
import { Check, Loader2, ShoppingBag } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { QuantityStepper } from "@rawnaq/ui/components/quantity-stepper"
import { cn } from "@rawnaq/ui/lib/utils"

import { useToast } from "@/providers/toast-provider"
import { useCartStore } from "../hooks/use-cart-store"

interface AddToCartButtonProps {
  product: Product
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm"
  className?: string
  showIcon?: boolean
  openDrawerOnAdd?: boolean
  showStepperWhenInCart?: boolean
}

export function AddToCartButton({
  product,
  variant = "default",
  size = "default",
  className,
  showIcon = true,
  openDrawerOnAdd = false,
  showStepperWhenInCart = false,
}: AddToCartButtonProps) {
  const t = useTranslations("Cart")
  const { toast } = useToast()
  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const openDrawer = useCartStore((state) => state.openDrawer)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cartItem = mounted
    ? items.find((item) => item.product.id === product.id || item.id === product.id)
    : undefined

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    if (isLoading || !product.inStock) return

    setIsLoading(true)

    // Interactive loading state with tactile feedback
    await new Promise((resolve) => setTimeout(resolve, 500))

    addItem(product)
    setIsLoading(false)

    if (openDrawerOnAdd) {
      openDrawer()
    }

    toast({
      title: t("addedToCart"),
      action: {
        label: t("viewCart"),
        onClick: () => {
          openDrawer()
        },
      },
    })
  }

  if (showStepperWhenInCart && cartItem) {
    return (
      <QuantityStepper
        value={cartItem.quantity}
        onChange={(q: number) => {
          updateQuantity(cartItem.id, q)
        }}
        max={product.stockCount ?? 99}
        className={cn(
          "w-full flex justify-between p-1",
          className
        )}
      />
    )
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        isLoading && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90",
        className
      )}
      onClick={handleClick}
      disabled={!product.inStock || isLoading}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin shrink-0" />
      ) : (
        <>
          {showIcon && <ShoppingBag className="size-3.5 shrink-0" />}
          <span>{product.inStock ? t("addToCart") : t("outOfStock")}</span>
        </>
      )}
    </Button>
  )
}
