import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { ProductDetailsView } from "@/features/catalog"

export default async function ProductDetailsPage({
  params,
}: PageProps<"/[locale]/products/[slug]">) {
  const { locale, slug } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return <ProductDetailsView slug={slug} />
}
