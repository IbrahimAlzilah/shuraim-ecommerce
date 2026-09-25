"use client"

import { Home, LayoutGrid, Search, ShoppingBag, User } from "lucide-react"
import { usePathname } from "next/navigation"

import { useAuth } from "@/features/auth"
import { useCart, useCartStore } from "@/features/cart"
import { useSearchStore } from "@/features/search-filters"
import { Link } from "@rawnaq/i18n/navigation"

export function MobileBottomBar() {
  const pathname = usePathname()
  const { itemCount } = useCart()
  const openCart = useCartStore((state) => state.openDrawer)
  const openSearch = useSearchStore((state) => state.openSearch)
  const { isAuthenticated, openModal } = useAuth()

  const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en"
  const isCatalog = pathname.includes("/products")

  return (
    <nav
      aria-label="شريط التنقل السفلي للهاتف"
      className="fixed bottom-0 inset-x-0 z-40 border-t bg-background/95 backdrop-blur-md md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="grid h-16 grid-cols-5 items-center justify-around px-1">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            isHome ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Home className="size-5" />
          <span className="text-[10px]">الرئيسية</span>
        </Link>

        {/* Categories / Products */}
        <Link
          href="/products"
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            isCatalog ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <LayoutGrid className="size-5" />
          <span className="text-[10px]">الأقسام</span>
        </Link>

        {/* Search */}
        <button
          type="button"
          onClick={openSearch}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Search className="size-5" />
          <span className="text-[10px]">بحث</span>
        </button>

        {/* Cart */}
        <button
          type="button"
          onClick={openCart}
          className="relative flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <div className="relative">
            <ShoppingBag className="size-5" />
            {itemCount > 0 && (
              <span className="absolute -end-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground animate-in zoom-in-50">
                {itemCount}
              </span>
            )}
          </div>
          <span className="text-[10px]">السلة</span>
        </button>

        {/* Account */}
        <button
          type="button"
          onClick={() => {
            if (!isAuthenticated) {
              openModal("login")
            }
          }}
          className="flex flex-col items-center justify-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <User className="size-5" />
          <span className="text-[10px]">حسابي</span>
        </button>
      </div>
    </nav>
  )
}
