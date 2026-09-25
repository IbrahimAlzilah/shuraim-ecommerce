import { getTranslations } from "next-intl/server"

import { ProductFilters } from "@/features/search-filters"

import { getBrands } from "../../api/get-brands"
import { getCategories } from "../../api/get-categories"
import { getProducts } from "../../api/get-products"
import { ProductGrid } from "../product-grid"

export async function ProductCatalogView({
  categorySlug,
  brandSlug,
  sort,
  query,
}: {
  categorySlug?: string
  brandSlug?: string
  sort?: string
  query?: string
}) {
  const t = await getTranslations("Catalog")
  const [{ items: products }, categories, brands] = await Promise.all([
    getProducts({ categorySlug, brandSlug, query }),
    getCategories(),
    getBrands(),
  ])

  // Client sort matching the user's selection
  const sortedProducts = [...products]
  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => a.price.amount - b.price.amount)
  } else if (sort === "price-desc") {
    sortedProducts.sort((a, b) => b.price.amount - a.price.amount)
  } else if (sort === "rating") {
    sortedProducts.sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0))
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 p-4 sm:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      <ProductFilters
        categories={categories}
        brands={brands}
        currentCategory={categorySlug}
        currentBrand={brandSlug}
        currentSort={sort}
      />

      {sortedProducts.length === 0 ? (
        <div className="rounded-xl border border-dashed py-16 text-center">
          <p className="text-base font-medium text-foreground">{t("noResults")}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("noResultsAdvice")}
          </p>
        </div>
      ) : (
        <ProductGrid products={sortedProducts} />
      )}
    </div>
  )
}
