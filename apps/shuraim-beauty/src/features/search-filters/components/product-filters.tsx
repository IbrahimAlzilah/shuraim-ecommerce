"use client"

import { useState } from "react"
import { SlidersHorizontal, Check, ChevronDown, X } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

import { Button } from "@rawnaq/ui/components/button"
import { cn } from "@rawnaq/ui/lib/utils"
import type { Brand, ProductCategory } from "@rawnaq/types"

interface ProductFiltersProps {
  categories?: ProductCategory[]
  brands?: Brand[]
  currentCategory?: string
  currentBrand?: string
  currentSort?: string
}

export function ProductFilters({
  categories = [],
  brands = [],
  currentCategory,
  currentBrand,
  currentSort = "featured",
}: ProductFiltersProps) {
  const t = useTranslations("Catalog")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isOpenMobile, setIsOpenMobile] = useState(false)

  const activeFiltersCount = (currentCategory ? 1 : 0) + (currentBrand ? 1 : 0)

  function updateQuery(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== "all") {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  function clearAllFilters() {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("category")
    params.delete("brand")
    router.push(`${pathname}?${params.toString()}`)
  }

  const rootCategories = categories.filter((c) => c.parentId === null)

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-card p-3 sm:p-4 shadow-xs">
      {/* Top Filter & Sort Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        {/* Mobile toggle button / Desktop Title */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpenMobile((prev) => !prev)}
            className="flex items-center gap-2 text-sm font-semibold text-foreground md:cursor-default"
            aria-expanded={isOpenMobile}
          >
            <SlidersHorizontal className="size-4 text-primary shrink-0" />
            <span>{t("filterAndSort")}</span>
            {activeFiltersCount > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-200 md:hidden",
                isOpenMobile && "rotate-180"
              )}
            />
          </button>

          {activeFiltersCount > 0 && (
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={clearAllFilters}
              className="text-xs text-muted-foreground hover:text-destructive h-7 px-2"
            >
              <X className="size-3 me-1" />
              <span>{t("clearFilters")}</span>
            </Button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 ms-auto">
          <label htmlFor="product-sort" className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">
            {t("sortBy")}
          </label>
          <select
            id="product-sort"
            value={currentSort}
            onChange={(e) => updateQuery("sort", e.target.value)}
            className="rounded-lg border bg-background px-2.5 py-1 text-xs font-medium text-foreground outline-none focus:border-primary"
          >
            <option value="featured">{t("sortFeatured")}</option>
            <option value="price-asc">{t("sortPriceAsc")}</option>
            <option value="price-desc">{t("sortPriceDesc")}</option>
            <option value="rating">{t("sortRating")}</option>
          </select>
        </div>
      </div>

      {/* Filter Body: Collapsible on mobile, always visible on md+ */}
      <div
        className={cn(
          "flex-col gap-3 pt-2 border-t md:flex",
          isOpenMobile ? "flex animate-in fade-in-50 duration-200" : "hidden md:flex"
        )}
      >
        {/* Category Pills */}
        {rootCategories.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">{t("categories")}:</span>
            <div className="flex flex-wrap gap-1.5">
              <Button
                type="button"
                variant={!currentCategory ? "default" : "outline"}
                size="xs"
                onClick={() => updateQuery("category", null)}
                className="text-xs h-7 px-3 rounded-full"
              >
                {t("all")}
              </Button>
              {rootCategories.map((cat) => {
                const isActive = currentCategory === cat.slug
                return (
                  <Button
                    key={cat.id}
                    type="button"
                    variant={isActive ? "default" : "outline"}
                    size="xs"
                    onClick={() => updateQuery("category", isActive ? null : cat.slug)}
                    className="text-xs h-7 px-3 rounded-full"
                  >
                    {cat.name}
                  </Button>
                )
              })}
            </div>
          </div>
        )}

        {/* Brand Pills */}
        {brands.length > 0 && (
          <div className="flex flex-col gap-2 border-t pt-2.5">
            <span className="text-xs font-medium text-muted-foreground">{t("brands")}:</span>
            <div className="flex flex-wrap gap-1.5">
              {brands.map((brand) => {
                const isActive = currentBrand === brand.slug
                return (
                  <button
                    key={brand.id}
                    type="button"
                    onClick={() => updateQuery("brand", isActive ? null : brand.slug)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground font-semibold"
                        : "border-border bg-background hover:bg-muted text-foreground"
                    )}
                  >
                    {isActive && <Check className="size-3" />}
                    <span>{brand.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

