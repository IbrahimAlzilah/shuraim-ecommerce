import { Heart } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { buildNav, getCategories } from "@/features/catalog"
import { CartTrigger } from "@/features/cart"
import { SearchFieldTrigger, SearchTrigger } from "@/features/search-filters"
import { Link } from "@rawnaq/i18n/navigation"
import { Button } from "@rawnaq/ui/components/button"
import { AccountMenu } from "@/shared/layout/account-menu"
import { LocaleSwitcher } from "@/shared/layout/locale-switcher"
import { LocationBadge } from "@/shared/layout/location-badge"
import { MegaMenu } from "@/shared/layout/mega-menu"
import { MobileNav } from "@/shared/layout/mobile-nav"
import { ThemeToggle } from "@/shared/layout/theme-toggle"

export async function Header() {
  const t = await getTranslations("Header")
  const categories = await getCategories()
  const nav = buildNav(categories)

  return (
    <header className="bg-background border-border sticky top-0 z-40 border-b">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 md:gap-3 lg:gap-4">
        <div className="md:hidden">
          <MobileNav nav={nav} />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.jpg"
              alt="شريم | Shuraim Beauty"
              className="h-9 sm:h-10 w-auto object-contain rounded-md dark:bg-white dark:p-1 transition-transform duration-200 group-hover:opacity-90"
            />
          </Link>
          <LocationBadge />
        </div>

        <div className="hidden h-6 w-px bg-border md:block shrink-0" aria-hidden="true" />

        <div className="hidden flex-1 md:block">
          <SearchFieldTrigger />
        </div>

        <div className="ms-auto flex items-center gap-1 sm:gap-1.5 lg:gap-2">
          <SearchTrigger className="md:hidden" />
          <AccountMenu />
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <Link href="/wishlist" aria-label={t("wishlist")}>
              <Heart className="size-5" />
            </Link>
          </Button>
          <CartTrigger />
          <ThemeToggle />
          <LocaleSwitcher className="hidden sm:inline-flex" />
        </div>
      </div>

      <div className="hidden border-t md:block" aria-label={t("categories")}>
        <MegaMenu />
      </div>
    </header>
  )
}
