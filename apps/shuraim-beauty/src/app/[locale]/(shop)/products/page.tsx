import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { ProductCatalogView } from "@/features/catalog"

export default async function ProductsPage({
  params,
  searchParams,
}: PageProps<"/[locale]/products">) {
  const { locale } = await params
  const { category, brand, sort, q } = await searchParams

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <ProductCatalogView
      categorySlug={typeof category === "string" ? category : undefined}
      brandSlug={typeof brand === "string" ? brand : undefined}
      sort={typeof sort === "string" ? sort : undefined}
      query={typeof q === "string" ? q : undefined}
    />
  )
}
