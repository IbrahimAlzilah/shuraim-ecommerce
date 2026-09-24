"use client"

import { SlidersHorizontal, Check } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Button } from "@rawnaq/ui/components/button"
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
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function updateQuery(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== "all") {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  const rootCategories = categories.filter((c) => c.parentId === null)

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <SlidersHorizontal className="size-4 text-primary" />
          <span>تصفية وترتيب المنتجات</span>
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">ترتيب حسب:</span>
          <select
            value={currentSort}
            onChange={(e) => updateQuery("sort", e.target.value)}
            className="rounded-lg border bg-background px-2.5 py-1 text-xs font-medium text-foreground outline-none focus:border-primary"
          >
            <option value="featured">المميز</option>
            <option value="price-asc">السعر: من الأقل للأعلى</option>
            <option value="price-desc">السعر: من الأعلى للأقل</option>
            <option value="rating">الأعلى تقييماً</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      {rootCategories.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium text-muted-foreground">التصنيفات:</span>
          <div className="flex flex-wrap gap-1.5">
            <Button
              type="button"
              variant={!currentCategory ? "default" : "outline"}
              size="xs"
              onClick={() => updateQuery("category", null)}
              className="text-xs"
            >
              الكل
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
                  className="text-xs"
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
        <div className="flex flex-col gap-2 border-t pt-3">
          <span className="text-xs font-medium text-muted-foreground">الماركات:</span>
          <div className="flex flex-wrap gap-1.5">
            {brands.map((brand) => {
              const isActive = currentBrand === brand.slug
              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() => updateQuery("brand", isActive ? null : brand.slug)}
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground font-semibold"
                      : "border-border bg-background hover:bg-muted text-foreground"
                  }`}
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
  )
}
