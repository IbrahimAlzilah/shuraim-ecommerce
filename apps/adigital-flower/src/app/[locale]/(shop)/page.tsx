import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Suspense } from "react"

import { HeroSliderSkeleton, HomeView } from "@/features/home"
import { routing } from "@rawnaq/i18n/routing"

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <Suspense fallback={<HeroSliderSkeleton />}>
      <HomeView />
    </Suspense>
  )
}
