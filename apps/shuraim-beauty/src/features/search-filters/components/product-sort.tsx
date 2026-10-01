"use client"

import { ChevronDown } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

export function ProductSort({ currentSort = "featured" }: { currentSort?: string }) {
  const t = useTranslations("Catalog")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function onChange(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "featured") {
      params.delete("sort")
    } else {
      params.set("sort", value)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="product-sort" className="sr-only">
        {t("sortBy")}
      </label>
      <div className="relative">
      <select
        id="product-sort"
        value={currentSort}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 min-w-40 appearance-none rounded-xl border bg-card ps-4 pe-10 text-sm font-medium text-foreground outline-none focus:border-primary"
      >
        <option value="featured">{t("sortFeatured")}</option>
        <option value="price-asc">{t("sortPriceAsc")}</option>
        <option value="price-desc">{t("sortPriceDesc")}</option>
        <option value="rating">{t("sortRating")}</option>
      </select>
      <ChevronDown className="pointer-events-none absolute inset-e-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  )
}
