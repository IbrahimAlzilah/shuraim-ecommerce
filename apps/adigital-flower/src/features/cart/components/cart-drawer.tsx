"use client"

import { useEffect } from "react"
import { ShoppingBag, X, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"

import { Link, usePathname } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"

import { useCart } from "../hooks/use-cart"
import { useCartStore } from "../hooks/use-cart-store"
import { FreeShippingProgress } from "./free-shipping-progress"
import { CartItem } from "./cart-item"
import { CartSummary } from "./cart-summary"

export function CartDrawer() {
  const t = useTranslations("Cart")
  const pathname = usePathname()
  const isOpen = useCartStore((state) => state.isDrawerOpen)
  const closeDrawer = useCartStore((state) => state.closeDrawer)
  const { items, subtotal } = useCart()

  useEffect(() => {
    if (isOpen) {
      closeDrawer()
    }
  }, [pathname, closeDrawer])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <button
        aria-label={t("close")}
        className="bg-black/50 backdrop-blur-xs absolute inset-0 transition-opacity"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="bg-background relative flex h-dvh w-full sm:max-w-md flex-col gap-4 p-4 sm:p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0))] shadow-2xl animate-in slide-in-from-end duration-300">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              {t("title")}{" "}
              <span className="text-xs font-normal text-muted-foreground">{t("itemsCount", { count: items.length })}</span>
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={t("close")}
            onClick={closeDrawer}
          >
            <X className="size-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="size-8 text-muted-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{t("emptyCartTitle")}</h3>
            <p className="text-xs text-muted-foreground max-w-xs">
              {t("emptyCartDesc")}
            </p>
            <Button asChild onClick={closeDrawer} className="mt-2 text-xs font-medium">
              <Link href="/products">
                <Sparkles className="size-3.5" />
                <span>{t("continueShopping")}</span>
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <FreeShippingProgress subtotal={subtotal} />
            <div className="flex-1 space-y-3 overflow-y-auto pe-1">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {items.length > 0 && (
          <CartSummary subtotal={subtotal} onCheckout={closeDrawer} />
        )}
      </div>
    </div>
  )
}
