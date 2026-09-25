"use client"

import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"

import { usePathname, useRouter } from "@rawnaq/i18n/navigation"
import { routing, type Locale } from "@rawnaq/i18n/routing"
import { Button } from "@rawnaq/ui/components/button"

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LocaleSwitcher")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const nextLocale: Locale =
    routing.locales.find((l) => l !== locale) ?? routing.defaultLocale

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLocale}
      disabled={isPending}
      aria-label={t("label")}
      lang={nextLocale}
      className={className}
    >
      {t(nextLocale)}
    </Button>
  )
}
