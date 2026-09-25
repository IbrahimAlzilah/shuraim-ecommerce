"use client"

import * as React from "react"
import { useLocale, useTranslations } from "next-intl"
import { ChevronDown, ArrowLeft } from "lucide-react"

import type { NavItem } from "@rawnaq/types"
import { Link } from "@rawnaq/i18n/navigation"
import { cn } from "@rawnaq/ui/lib/utils"
import { NAVIGATION_ITEMS } from "@/data/navigation"

export interface MegaMenuProps {
  items?: NavItem[]
}

export function MegaMenu({ items = NAVIGATION_ITEMS }: MegaMenuProps) {
  const locale = useLocale()
  const t = useTranslations("Header")
  const isAr = locale === "ar"
  const [activeItem, setActiveItem] = React.useState<NavItem | null>(null)

  return (
    <nav
      className="hidden md:block bg-background relative z-40 select-none"
      onMouseLeave={() => setActiveItem(null)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex items-center gap-1 xl:gap-2 whitespace-nowrap min-w-max">
          {items.map((item) => {
            const hasFlyout = Boolean(
              (item.columns && item.columns.length > 0) || item.banner,
            )
            const isSelected = activeItem?.id === item.id

            return (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() =>
                  hasFlyout ? setActiveItem(item) : setActiveItem(null)
                }
              >
                <Link
                  href={`/categories/${item.slug}`}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-3 text-sm font-medium transition-colors duration-200",
                    item.isSpecial
                      ? "text-[#E76F51] font-bold hover:text-[#B93E36]"
                      : "text-foreground/90 hover:text-primary",
                    isSelected && "text-primary border-b-2 border-primary",
                  )}
                >
                  <span>{isAr ? item.title.ar : item.title.en || item.title.ar}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#E76F51]/15 text-[#E76F51]">
                      {item.badge}
                    </span>
                  )}
                  {hasFlyout && (
                    <ChevronDown
                      className={cn(
                        "size-3.5 text-muted-foreground transition-transform duration-200",
                        isSelected && "rotate-180 text-primary",
                      )}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Flyout Panel */}
      {activeItem && activeItem.columns && (
        <div className="absolute top-full start-0 end-0 bg-background border-b border-border shadow-xl py-6 lg:py-8 px-4 sm:px-6 animate-in fade-in slide-in-from-top-1 duration-200 z-50">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Columns */}
            <div className={cn("grid gap-4 lg:gap-6", activeItem.banner ? "md:col-span-8 grid-cols-2 lg:grid-cols-3" : "md:col-span-12 grid-cols-2 md:grid-cols-4")}>
              {activeItem.columns.map((col, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-sm text-primary mb-3 pb-1 border-b border-amber-200/50 dark:border-neutral-800">
                    {isAr ? col.title.ar : col.title.en || col.title.ar}
                  </h4>
                  <ul className="space-y-2">
                    {col.items.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={`/categories/${sub.slug}`}
                          onClick={() => setActiveItem(null)}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
                        >
                          <span>
                            {isAr ? sub.name.ar : sub.name.en || sub.name.ar}
                          </span>
                          {sub.isPopular && (
                            <span className="text-[10px] font-bold text-[#E76F51]">
                              {t("popular")}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Featured Brands row */}
              {activeItem.featuredBrands && (
                <div className="col-span-full pt-4 border-t border-border/50 flex items-center gap-3">
                  <span className="text-xs font-bold text-foreground">
                    {t("featuredBrands")}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {activeItem.featuredBrands.map((b) => (
                      <Link
                        key={b.id}
                        href={`/products?brand=${b.slug}`}
                        onClick={() => setActiveItem(null)}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/60 hover:bg-muted text-foreground cursor-pointer transition-colors"
                      >
                        {b.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Banner Side */}
            {activeItem.banner && (
              <div className="md:col-span-4 bg-gradient-to-br from-amber-50/80 via-amber-50/30 to-background dark:from-neutral-900 dark:via-neutral-900/60 dark:to-neutral-800 rounded-2xl p-5 border border-amber-200/60 dark:border-neutral-700 flex flex-col justify-between overflow-hidden relative group">
                <div>
                  {activeItem.banner.badge && (
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#E76F51]/15 text-[#E76F51] mb-3 shadow-2xs">
                      {activeItem.banner.badge}
                    </span>
                  )}
                  <h3 className="font-extrabold text-lg text-primary dark:text-white mb-1">
                    {isAr
                      ? activeItem.banner.title.ar
                      : activeItem.banner.title.en ||
                        activeItem.banner.title.ar}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isAr
                      ? activeItem.banner.subtitle.ar
                      : activeItem.banner.subtitle.en ||
                        activeItem.banner.subtitle.ar}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                  <Link
                    href={activeItem.banner.link}
                    onClick={() => setActiveItem(null)}
                    className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1"
                  >
                    <span>{t("browseCollection")}</span>
                    <ArrowLeft className="size-3.5 rtl:rotate-0 rotate-180" />
                  </Link>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeItem.banner.imageUrl}
                    alt={
                      isAr
                        ? activeItem.banner.title.ar
                        : activeItem.banner.title.en ||
                          activeItem.banner.title.ar
                    }
                    className="size-16 rounded-xl object-cover shadow-xs group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
