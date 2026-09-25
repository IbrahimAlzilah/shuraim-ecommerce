"use client"

import { Heart } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import { useWishlist } from "../hooks/use-wishlist"

export function WishlistButton({ productId }: { productId: string }) {
  const t = useTranslations("Wishlist")
  const { isWishlisted, toggle } = useWishlist(productId)

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={isWishlisted ? t("remove") : t("add")}
      aria-pressed={isWishlisted}
      onClick={(event) => {
        event.preventDefault()
        toggle()
      }}
    >
      <Heart className={cn(isWishlisted && "fill-destructive text-destructive")} />
    </Button>
  )
}
