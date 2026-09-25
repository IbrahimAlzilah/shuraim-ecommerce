import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { ProductCatalogView } from "@/features/catalog"

interface CategoryPageProps {
  params: Promise<{ locale: string; slug: string }>
  searchParams: Promise<{ brand?: string; sort?: string; q?: string }>
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { locale, slug } = await params
  const { brand, sort, q } = await searchParams

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <ProductCatalogView
      categorySlug={slug}
      brandSlug={typeof brand === "string" ? brand : undefined}
      sort={typeof sort === "string" ? sort : undefined}
      query={typeof q === "string" ? q : undefined}
    />
  )
}
