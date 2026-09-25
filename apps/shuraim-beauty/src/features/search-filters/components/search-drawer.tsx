"use client"

import { Search, X, TrendingUp, ArrowRight } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useRef } from "react"

import { Link } from "@rawnaq/i18n/navigation"
import { formatCurrency } from "@rawnaq/utils"
import { Button } from "@rawnaq/ui/components/button"
import { Input } from "@rawnaq/ui/components/input"
import type { Product } from "@rawnaq/types"

import { useSearchStore } from "../hooks/use-search-store"

const POPULAR_SEARCHES = [
  "واقي شمس",
  "سيروم الهيالورونيك",
  "أحمر شفاه",
  "خلاصة الحلزون",
  "كريم أساس",
  "عطر عود",
  "العناية الكورية",
]

export function SearchDrawer({ allProducts = [] }: { allProducts?: Product[] }) {
  const t = useTranslations("Search")
  const isOpen = useSearchStore((state) => state.isOpen)
  const closeSearch = useSearchStore((state) => state.closeSearch)
  const query = useSearchStore((state) => state.query)
  const setQuery = useSearchStore((state) => state.setQuery)
  const locale = useLocale()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Handle ESC key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        closeSearch()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, closeSearch])

  if (!isOpen) return null

  const trimmed = query.trim().toLowerCase()
  const filteredProducts = trimmed
    ? allProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.subtitle?.toLowerCase().includes(trimmed) ||
          p.description?.toLowerCase().includes(trimmed)
      )
    : []

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start bg-black/60 backdrop-blur-sm animate-in fade-in-0 duration-200">
      {/* Search Header Container */}
      <div className="bg-background w-full border-b shadow-lg animate-in slide-in-from-top-4 duration-300">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="text-muted-foreground absolute inset-s-3 top-1/2 size-5 -translate-y-1/2" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("placeholder")}
                className="h-11 sm:h-12 ps-10 pe-10 text-sm sm:text-base rounded-xl"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-muted-foreground hover:text-foreground absolute inset-e-3 top-1/2 -translate-y-1/2"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <Button variant="ghost" size="icon" onClick={closeSearch} aria-label={t("close")}>
              <X className="size-5" />
            </Button>
          </div>

          {/* Quick suggestions when empty */}
          {!trimmed && (
            <div className="mt-4 pb-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2.5">
                <TrendingUp className="size-3.5" />
                <span>{t("popularSearches")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Container */}
      <div
        className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0))]"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSearch()
        }}
      >
        <div className="mx-auto max-w-4xl">
          {trimmed && (
            <div className="rounded-2xl bg-background p-4 sm:p-6 shadow-xl border">
              <div className="flex items-center justify-between pb-3 border-b text-xs sm:text-sm text-muted-foreground">
                <span>
                  {t("resultsFor", { query })}
                </span>
                <span>{t("productsCount", { count: filteredProducts.length })}</span>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-base font-medium text-foreground">{t("noResults")}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {t("noResultsAdvice")}
                  </p>
                </div>
              ) : (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      onClick={closeSearch}
                      className="group flex items-center gap-3 rounded-xl border p-2.5 transition-all hover:border-primary hover:bg-muted/30"
                    >
                      {product.images[0] && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={product.images[0].url}
                          alt={product.name}
                          className="size-16 rounded-lg object-cover bg-muted shrink-0"
                        />
                      )}
                      <div className="flex flex-1 flex-col overflow-hidden">
                        <span className="line-clamp-1 text-xs text-muted-foreground">
                          {product.subtitle}
                        </span>
                        <span className="line-clamp-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </span>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-xs font-bold text-primary">
                            {formatCurrency(product.price.amount, product.price.currency, locale)}
                          </span>
                          {product.price.compareAtAmount && (
                            <span className="text-[11px] text-muted-foreground line-through">
                              {formatCurrency(
                                product.price.compareAtAmount,
                                product.price.currency,
                                locale
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-[-2px] transition-all rtl:rotate-180" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
