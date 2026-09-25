import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { WishlistView } from "@/features/wishlist"

export default async function WishlistPage({
  params,
}: PageProps<"/[locale]/wishlist">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return <WishlistView />
}
