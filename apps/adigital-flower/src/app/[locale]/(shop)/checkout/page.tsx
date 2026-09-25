import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { CheckoutView } from "@/features/checkout"

export default async function CheckoutPage({
  params,
}: PageProps<"/[locale]/checkout">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return <CheckoutView />
}
