import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { routing } from "@rawnaq/i18n/routing"
import { GuestOnlyGuard, LoginFlow } from "@/features/auth"

export default async function LoginPage({
  params,
}: PageProps<"/[locale]/login">) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <GuestOnlyGuard>
      <div className="mx-auto flex max-w-sm flex-col gap-6 p-6">
        <LoginFlow />
      </div>
    </GuestOnlyGuard>
  )
}
