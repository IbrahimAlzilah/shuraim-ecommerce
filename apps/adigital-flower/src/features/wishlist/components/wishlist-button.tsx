"use client"

import { Heart, Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"

import { useWishlist } from "../hooks/use-wishlist"

export function WishlistButton({ productId }: { productId: string }) {
  const t = useTranslations("Wishlist")
  const { isWishlisted, toggle } = useWishlist(productId)
  const [isLoading, setIsLoading] = useState(false)

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    if (isLoading) return

    setIsLoading(true)

    // Interactive loading state with tactile feedback
    await new Promise((resolve) => setTimeout(resolve, 500))

    toggle()
    setIsLoading(false)
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={isWishlisted ? t("remove") : t("add")}
      aria-pressed={isWishlisted}
      className={cn(isLoading && "cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-90")}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin shrink-0" />
      ) : (
        <Heart className={cn(isWishlisted && "fill-primary text-primary")} />
      )}
    </Button>
  )
}
