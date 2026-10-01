"use client"

import { useState } from "react"
import { Check, ChevronUp, SlidersHorizontal } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

import { cn } from "@rawnaq/ui/lib/utils"
import type { Brand, ProductCategory } from "@rawnaq/types"

const COLLAPSED_COUNT = 5

interface ProductFiltersProps {
  categories?: ProductCategory[]
  brands?: Brand[]
  currentCategory?: string
  currentBrand?: string
}

interface FilterGroupProps {
  title: string
  options: { id: string; slug: string; name: string }[]
  selected?: string
  onSelect: (slug: string | null) => void
}

function FilterGroup({ title, options, selected, onSelect }: FilterGroupProps) {
  const t = useTranslations("Catalog")
  const [isOpen, setIsOpen] = useState(true)
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? options : options.slice(0, COLLAPSED_COUNT)

  return (
    <section className="flex flex-col gap-3 border-t pt-4 first:border-t-0 first:pt-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between text-start text-sm font-semibold text-foreground"
      >
        <span>{title}</span>
        <ChevronUp
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-200",
            !isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <>
          <ul className="flex flex-col gap-2.5">
            {visible.map((option) => {
              const isActive = selected === option.slug
              return (
                <li key={option.id}>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={() => onSelect(isActive ? null : option.slug)}
                      className="peer sr-only"
                    />
                    <span
                      className={cn(
                        "flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
                        isActive ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background"
                      )}
                    >
                      {isActive && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    <span className={cn("line-clamp-1", isActive && "font-medium text-foreground")}>
                      {option.name}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>

          {options.length > COLLAPSED_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="self-start text-xs font-medium text-primary hover:underline"
            >
              {showAll ? t("showLess") : t("showMore")}
            </button>
          )}
        </>
      )}
    </section>
  )
}

export function ProductFilters({
  categories = [],
  brands = [],
  currentCategory,
  currentBrand,
}: ProductFiltersProps) {
  const t = useTranslations("Catalog")
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [isOpenMobile, setIsOpenMobile] = useState(false)

  const activeFiltersCount = (currentCategory ? 1 : 0) + (currentBrand ? 1 : 0)

  function updateQuery(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
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
    <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:w-64 lg:self-start">
      <div className="rounded-2xl border bg-card p-4 shadow-xs">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setIsOpenMobile((prev) => !prev)}
            aria-expanded={isOpenMobile}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground lg:cursor-default"
          >
            <SlidersHorizontal className="size-4 text-primary lg:hidden" />
            <span>{t("filters")}</span>
            {activeFiltersCount > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground lg:hidden">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {activeFiltersCount > 0 && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-xs font-semibold text-destructive hover:underline"
            >
              {t("clearFilters")}
            </button>
          )}
        </div>

        <div
          className={cn(
            "mt-4 flex-col gap-4 border-t pt-4 lg:flex",
            isOpenMobile ? "flex" : "hidden"
          )}
        >
          {rootCategories.length > 0 && (
            <FilterGroup
              title={t("categories")}
              options={rootCategories}
              selected={currentCategory}
              onSelect={(slug) => updateQuery("category", slug)}
            />
          )}
          {brands.length > 0 && (
            <FilterGroup
              title={t("brands")}
              options={brands}
              selected={currentBrand}
              onSelect={(slug) => updateQuery("brand", slug)}
            />
          )}
        </div>
      </div>
    </aside>
  )
}
