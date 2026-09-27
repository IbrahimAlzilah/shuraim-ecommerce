"use client"

import { ShoppingCart } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"

import { useCartStore } from "../hooks/use-cart-store"
import { useCart } from "../hooks/use-cart"

export function CartTrigger() {
  const t = useTranslations("Cart")
  const toggleDrawer = useCartStore((state) => state.toggleDrawer)
  const { itemCount } = useCart()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t("title")}
      onClick={toggleDrawer}
      className="relative"
    >
      <ShoppingCart />
      {itemCount > 0 && (
        <span className="bg-primary text-primary-foreground absolute -top-1 -inset-e-1 flex size-5 items-center justify-center rounded-full text-[10px] font-bold">
          {itemCount}
        </span>
      )}
    </Button>
  )
}
